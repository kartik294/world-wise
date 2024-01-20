
import CabinTable from '../features/cabins/CabinTable'
import Heading from "../features/ui/Heading";
import Row from "../features/ui/Row";

import AddCabin from '../features/cabins/AddCabin';
import CabinTableOperations from '../features/cabins/CabinTableOperations';
function Cabins() {

 
  return (
    <>
    <Row type="horizontal">
      <Heading as="h1">All cabins</Heading>
      <CabinTableOperations/>
      <p>TEST</p>
      <p>Filter/Sort</p>
  
    </Row>

    <Row>
      <CabinTable/>
      <AddCabin/>
    </Row>
    </>
    
  );
}

export default Cabins;
