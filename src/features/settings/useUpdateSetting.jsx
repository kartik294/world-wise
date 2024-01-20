import { useMutation, useQueryClient } from "@tanstack/react-query";

import toast from "react-hot-toast";
import { updateSetting as updateSettingApi } from "../../services/apiSettings";

export function useUpdateSetting(){
const queryClient = useQueryClient(); // Add this line
const {mutate:updateSetting,isLoading:isUpdating}=useMutation({
  mutationFn:updateSettingApi,
  onSuccess:()=>{
    toast.success(' Settings sucessfully edited');
    queryClient.invalidateQueries({queryKey:['settings']})
   
  },
  onError:(err)=>toast.error(err.message),


})
return {isUpdating,updateSetting}
}