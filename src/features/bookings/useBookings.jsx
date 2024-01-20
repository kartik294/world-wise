import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";

export function useBookings()
{
    const searchParams = new URLSearchParams(useSearchParams().toString());
    //Filter
    console.log(searchParams)
    const filterValue=searchParams.get('status')
    
    const filter=!filterValue|| filterValue==='all'?null:{field:'totalPrice',value:filterValue}
    //Sort
    const sortByRow=searchParams.get('sortBy')|| 'startDate-desc';
    const [field,direction]=sortByRow.split('-')
    const sortBy={field,direction}
    const { isLoading, data: bookings, error } = useQuery({
        queryKey: ['bookings',filter,sortBy],
        queryFn: async()=>getBookings({
         filter,sortBy
        })
      });

      return {isLoading,error,bookings}
}
// {field:'totalPrice',value:filterValue}