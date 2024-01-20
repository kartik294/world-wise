
// import { useQueryClient,useMutation } from "@tanstack/react-query";
// import toast from "react-hot-toast";
// import Input from '../ui/Input'
// import Form from  '../ui/Form'
// import Button from "../ui/Button";
// import FileInput from "../ui/FileInput";
// import Textarea from "../ui/Textarea";
// import  FormRow  from "../ui/FormRow"; // Import as an alias
// import { createCabin } from "../../services/apiCabins";
// import { useForm } from 'react-hook-form';
















// function CreateCabinForm() {
//   const { register, handleSubmit,reset,getValues,formState} = useForm();  // Fix here

//  const {errors}=formState;

//   const queryClient=useQueryClient();
//   const {mutate,isLoading:isCreating}=useMutation({
//     mutationFn:createCabin,
//     onSuccess:()=>{
//       toast.success('New Cabin sucessfully created');
//       queryClient.invalidateQueries({queryKey:['cabins']})
//       reset();
//     },
//     onError:(err)=>toast.error(err.message),


//   })
 

//   function onSubmit(data)
//   {
    
//     mutate({...data,image:data.image[0]})
//   }

//   function onError(errors) {
//     const errorObject = {};
  
//     Object.entries(errors).forEach(([fieldName, fieldError]) => {
//       errorObject[fieldName] = fieldError.message;
//     });
  
//     console.log(errorObject);
//   }
  
//   return (
//     <FormsRow>
//        <Form onSubmit={handleSubmit(onSubmit,onError)}>
   
      
//    <FormRow label='Cabin name' error={errors?.name?.message}>
        

//    <Input type="text" id="name" disabled={isCreating} {...register("name",{
//        required:'This Field is required'
//      })}/>
//    </FormRow>
//    <FormRow label='Maximum Capacity' error={errors?.maxCapacity?.message}>
     
//      <Input type="number" id="maxCapacity" disabled={isCreating} {...register("maxCapacity",{
//        required:'This Field is required',
//        min:{
//          value:1,
//          message:'Capacity should be atleast 1'
//        }
     
//      })}/>
//    </FormRow>

//    <FormRow  error={errors?.regularPrice?.message}>
//      <Label htmlFor="regularPrice">Regular price</Label>
//      <Input type="number" id="regularPrice" disabled={isCreating} {...register("regularPrice",{
//        required:'This Field is required',
//        min:{
//          value:1,
//          message:'Capacity should be atleast 1'
//        }
      
//      })}/>
//    </FormRow>

//    <FormRow  error={errors?.discount?.message}>
//      <Label htmlFor="discount">Discount</Label>
//      <Input type="number" id="discount" disabled={isCreating} defaultValue={0} {...register("discount",{
//        required:'This Field is required',
//        validate:(value)=>value<=getValues().regularPrice||'Discount should be less than the regular price',
       
//      })} />
//    </FormRow>

//    <FormRow  error={errors?.description?.message} >
//      <Label htmlFor="description" disabled={isCreating}>Description for website</Label>
//      <Textarea type="number" id="description" disabled={isCreating}  defaultValue="" {...register("description",{
//        required:'This Field is required'
//      })} />
//    </FormRow>

//    <FormRow>
//   <Label htmlFor="image">Cabin photo</Label>
//   <FileInput id="image" accept="image/*" type="file" {...register("image",{
//     required: 'This Field is required'
//   })}/>
// </FormRow>

//    <FormRow >
//      {/* type is an HTML attribute! */}
//      <Button variation="secondary" type="reset">
//        Cancel
//      </Button>
//      <Button disabled={isCreating}>Add cabin</Button>
//    </FormRow>
//  </Form>

//     </FormsRow>
   
//   );
// }

// export default CreateCabinForm;
