import PropTypes from 'prop-types'; // Add this import


import { useForm } from 'react-hook-form';
import Input from '../ui/Input'
import Form from  '../ui/Form'
import Button from "../ui/Button";
import FileInput from "../ui/FileInput";
import Textarea from "../ui/Textarea";
import  FormRow  from "../ui/FormRow"; // Import as an alias
import { useCreateCabin } from './useCreateCabin';
import { useEditCabin } from './useEditCabin';






function CreateCabinForm({cabinToEdit={},onCloseModal}) {
  const { id: editId, ...editValues } = cabinToEdit;
  const isEditSession = Boolean(editId);
  const { register, handleSubmit, reset, getValues, formState } = useForm({
    defaultValues: isEditSession ? editValues : {},
  });

  const { errors } = formState;
  const { isCreating, createCabin } = useCreateCabin();
  const { isEditing, editCabin } = useEditCabin(); // Move this line after the useCreateCabin line

  const isWorking = isCreating || isEditing;


  function onSubmit(data) {
  
    // const image = Array.isArray(data.image) ? data.image[0] : data.image;
    
    const image = Array.isArray(data.image) ? data.image : data.image[0];
  
    if (isEditSession) {
      editCabin({ newCabinData: { ...data, image }, id: editId },{
        onSuccess: () => reset(),
      });
    } else {
      createCabin({ ...data, image: image }, {
       
        onSuccess: () => {
          reset();
          onCloseModal?.()
        }
        
      });
    }
}

  

  function onError(errors) {
    const errorObject = {};
  
    Object.entries(errors).forEach(([fieldName, fieldError]) => {
      errorObject[fieldName] = fieldError.message;
    });
  
    console.log(errorObject);
  }
  
  return (

       <Form onSubmit={handleSubmit(onSubmit,onError)} type={onCloseModal?'modal':'regular'}>
   
      
   <FormRow label='Cabin name'    disabled={isWorking} error={errors?.name?.message}>
        

   <Input type="text" id="name" disabled={isWorking} {...register("name",{
       required:'This Field is required'
     })}/>
   </FormRow>
   <FormRow label='Maximum Capacity'    disabled={isWorking} error={errors?.maxCapacity?.message}>
     
     <Input type="number" id="maxCapacity" disabled={isWorking} {...register("maxCapacity",{
       required:'This Field is required',
       min:{
         value:1,
         message:'Capacity should be atleast 1'
       }
     
     })}/>
   </FormRow>

   <FormRow label="Regular price"    disabled={isWorking} error={errors?.regularPrice?.message}>
  
     <Input type="number" id="regularPrice" disabled={isWorking} {...register("regularPrice",{
       required:'This Field is required',
       min:{
         value:1,
         message:'Capacity should be atleast 1'
       }
      
     })}/>
   </FormRow>

   <FormRow label="Discount"   disabled={isWorking} error={errors?.discount?.message}>
   
     <Input type="number" id="discount" disabled={isWorking} defaultValue={0} {...register("discount",{
       required:'This Field is required',
       validate:(value)=>value<=getValues().regularPrice||'Discount should be less than the regular price',
       
     })} />
   </FormRow>

   <FormRow    label="Description for website"  error={errors?.description?.message} >
    
     <Textarea type="number" id="description" disabled={isWorking}  defaultValue="" {...register("description",{
       required:'This Field is required'
     })} />
   </FormRow>

   <FormRow label="Cabin photo">
 
  <FileInput id="image" accept="image/*" type="file" {...register("image",{
    required: isEditSession?false:'This Field is required'
  })}/>
</FormRow>

   <FormRow >
     {/* type is an HTML attribute! */}
     <Button variation="secondary" type="reset" onClick={()=>onCloseModal?.()}>
       Cancel
     </Button>
     <Button disabled={isWorking}>{isEditSession?'Edit Cabin':'Create new cabin'}</Button>
   </FormRow>
 </Form>


   
  );
}

CreateCabinForm.propTypes = {
  cabinToEdit: PropTypes.object, // Specify the prop type
  onCloseModal: PropTypes.func, 
};

export default CreateCabinForm;
