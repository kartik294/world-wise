import supabase, { supabaseUrl } from "./supabase";

export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.error("error");
    throw new Error("Cabins could not be loaded");
  }
  return data;
}

export async function createEditCabin(newCabin, id) {
  try {
    // console.log("Received data for cabin creation/edit:", newCabin, id);

    // Check if the image path is already a Supabase URL
    const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);

    // Generate a unique image name
    const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
      "/",
      ""
    );
    // console.log(newCabin, "newCabin", newCabin.image);
    console.log(newCabin.image);
    // Form the complete image path
    const imagePath = hasImagePath
      ? newCabin.image
      : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

    // console.log("Generated image path:", imagePath);

    //1 create/edit the cabin
    let query = supabase.from("cabins");

    // Create
    if (!id) {
      query = query.insert([{ ...newCabin, image: imagePath }]);
      // console.log("Creating cabin:", newCabin);
    }

    // Edit
    if (id) {
      query = query
        .update({ ...newCabin, image: imagePath })
        .eq("id", id)
        .select();
      console.log("Editing cabin:", newCabin);
    }

    // Execute the query
    const { data, error } = await query.single();

    if (error) {
      console.error("Supabase error:", error);
      throw new Error("Cabins could not be created/edited");
    }

    console.log("Cabin created/edited successfully:", data);

    // 2 upload the image
    if (hasImagePath) return data;
    const { error: storageError } = await supabase.storage
      .from("cabin-images")
      .upload(imageName, newCabin.image);

    // 3 delete the cabin if there was an error uploading the image
    if (storageError) {
      await supabase.from("cabins").delete().eq("id", data.id);
      console.error("Error uploading image to Supabase storage:", storageError);
      throw new Error(
        "Cabins image could not be uploaded and the cabin was not created"
      );
    }

    console.log("Image uploaded successfully");

    return data;
  } catch (error) {
    console.error("Error creating/editing cabin:", error);
    throw new Error("Cabins could not be created/edited");
  }
}

export async function deleteCabin(id) {
  try {
    const { error } = await supabase.from("cabins").delete().eq("id", id);

    if (error) {
      console.error("Error deleting cabin:", error);
      throw new Error("Cabins could not be deleted");
    }

    // Return a more appropriate value, such as true
    return true;
  } catch (error) {
    console.error("Unhandled error in deleteCabin:", error);
    throw new Error("Cabins could not be deleted");
  }
}
