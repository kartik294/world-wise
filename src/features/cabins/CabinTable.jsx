import Spinner from "../ui/Spinner";
import CabinRow from "./CabinRow";
import { useCabins } from "./useCabins";
import Table from "../ui/Table";
import Menus from "../ui/Menus";
import { useSearchParams } from "react-router-dom";
import Empty from "../ui/Empty";


function CabinTable() {
  const { isLoading, cabins, error } = useCabins();
  const searchParams = new URLSearchParams(useSearchParams().toString());
  
  if (isLoading) return <Spinner />;
  if(!cabins.length) return <Empty resourceName='cabins'/>

  
  // Filter
  let filteredCabins = cabins;
  let filteredValue;
  let filteredValue11 = searchParams.get('discount') || 'all';
  
  if (filteredValue11.startsWith('with-discount')) {
    filteredValue = 'with-discount';
  } else if (filteredValue11.startsWith('no-discount')) {
    filteredValue = 'no-discount';
  } else {
    filteredValue = 'all';
  }

  if (filteredValue !== 'all') {
    filteredCabins = cabins.filter(cabin => {
      if (filteredValue === 'no-discount') {
        return cabin.discount === 0;
      } else if (filteredValue === 'with-discount') {
        return cabin.discount > 0;
      }
      return true; // Default to all cabins
    });
  }

  // Sort
  const sortBy = searchParams.get("sortBy") || 'startDate-asc';
  const [field, direction] = sortBy.split('-');
  const modifier = direction === 'asc' ? 1 : -1;

  // Ensure 'field' is a valid property of the 'cabin' object
  const sortedCabins = filteredCabins.sort((a, b) => {
    const aValue = a[field];
    const bValue = b[field];
    
    if (aValue < bValue) {
      return -1 * modifier;
    } else if (aValue > bValue) {
      return 1 * modifier;
    }
    return 0;
  });

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <Menus>
      <Table columns="0.6fr 1.8fr 2.2fr 1fr 1fr 1fr">
        <Table.Header>
          <div></div>
          <div>Cabin</div>
          <div>Capacity</div>
          <div>Price</div>
          <div>Discount</div>
          <div></div>
        </Table.Header>
        <Table.Body data={sortedCabins} render={(cabin) => (
          <CabinRow cabin={cabin} key={cabin.id} />
        )}/>
      </Table>
    </Menus>
  );
}

export default CabinTable;
