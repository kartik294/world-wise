// import { useQuery } from "@tanstack/react-query";
// import styled from "styled-components";
// import { getCabins } from "../../services/apiCabins";
// import Spinner from "../ui/Spinner"
// import CabinRow from "./CabinRow";
// // eslint-disable-next-line react-refresh/only-export-components
// const Table = styled.div`
//   border: 1px solid var(--color-grey-200);

//   font-size: 1.4rem;
//   background-color: var(--color-grey-0);
//   border-radius: 7px;
//   overflow: hidden;
// `;

// // eslint-disable-next-line react-refresh/only-export-components
// const TableHeader = styled.header`
//   display: grid;
//   grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
//   column-gap: 2.4rem;
//   align-items: center;

//   background-color: var(--color-grey-50);
//   border-bottom: 1px solid var(--color-grey-100);
//   text-transform: uppercase;
//   letter-spacing: 0.4px;
//   font-weight: 600;
//   color: var(--color-grey-600);
//   padding: 1.6rem 2.4rem;
// `;


// // eslint-disable-next-line react-refresh/only-export-components
// function CabinTable() {
//   const { isLoading, data: cabins, error } = useQuery({
//     queryKey: ['cabins'],
//     queryFn: getCabins
//   });

//   if (isLoading) return <Spinner />; // Display spinner while loading
//   if (error) {
//     // Handle the error scenario here, for instance:
//     return <div>Error: {error.message}</div>;
//   }

//  return <Table role='html'>
//   <TableHeader role='row'>
//     <div></div>
//     <div>Cabin</div>
//     <div>Capacity</div>
//     <div>Price</div>
//     <div>Discount</div>
//     <div></div>



//   </TableHeader>
//   {cabins.map(cabin=><CabinRow cabin={cabin} key={cabin.id}/>)}
//  </Table>;
// }
// export default CabinTable
