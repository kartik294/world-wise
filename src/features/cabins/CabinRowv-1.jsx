// import styled from "styled-components";
// import PropTypes from 'prop-types'; // Import PropTypes

// import {formatCurrency} from "../../hooks/utils/helpers"

// import CreateCabinForm from "./CreateCabinForm";
// import { useDeleteCabin } from "./useCabinDelete";
// import { HiPencil, HiSquare2Stack, HiTrash } from "react-icons/hi2";
// import { useCreateCabin } from "./useCreateCabin";
// import Modal from "../ui/Modal";
// import ConfirmDelete from "../ui/ConfirmDelete";
// import Table from "../ui/Table";


// const Img = styled.img`
//   display: block;
//   width: 6.4rem;
//   aspect-ratio: 3 / 2;
//   object-fit: cover;
//   object-position: center;
//   transform: scale(1.5) translateX(-7px);
// `;

// const Cabin = styled.div`
//   font-size: 1.6rem;
//   font-weight: 600;
//   color: var(--color-grey-600);
//   font-family: "Sono";
// `;

// const Price = styled.div`
//   font-family: "Sono";
//   font-weight: 600;
// `;

// const Discount = styled.div`
//   font-family: "Sono";
//   font-weight: 500;
//   color: var(--color-green-700);
// `;


// function CabinRow({ cabin }) {
//   const { isDeleting, deleteCabin } = useDeleteCabin();
//   const { id: cabinId, name, maxCapacity, regularPrice, discount, image, description } = cabin;

//   const { isCreating, createCabin } = useCreateCabin();

//   function handleDuplicate() {
//     createCabin({
//       name: `Copy of ${name}`,
//       maxCapacity,
//       regularPrice,
//       discount,
//       image,
//       description,
//     });
//   }

//   return (
//     <div>
//       <Table.Row>
//         <Img src={image} alt={`Image of ${name}`} />
//         <Cabin>{name}</Cabin>
//         <div>Fits up to {maxCapacity} guests</div>
//         <Price>{formatCurrency(regularPrice)}</Price>
//         {discount ? <Discount>{formatCurrency(discount)}</Discount> : <span>&mdash;</span>}
//         <div>
//           <button disabled={isCreating} onClick={handleDuplicate}>
//             <HiSquare2Stack />
//           </button>
//           <Modal>
//             <Modal.Open opens="edit">
//               <button>
//                 <HiPencil />
//               </button>
//             </Modal.Open>
//             <Modal.Window name="edit">
//               <CreateCabinForm cabinToEdit={cabin} />
//             </Modal.Window>

//             <Modal.Open opens="delete">
//               <button>
//                 <HiTrash />
//               </button>
//             </Modal.Open>
//             <Modal.Window name="delete">
//               <ConfirmDelete
//                 resourceName="cabins"
//                 disabled={isDeleting}
//                 onConfirm={() => {
//                   deleteCabin(cabinId);
//                 }}
//               />
//             </Modal.Window>
//           </Modal>
       
//         </div>
//       </Table.Row>
//     </div>
//   );
// }



// CabinRow.propTypes = {
//   cabin: PropTypes.shape({
//     name: PropTypes.string.isRequired,
//     id: PropTypes.number.isRequired,
//     maxCapacity: PropTypes.number.isRequired,
//     regularPrice: PropTypes.number.isRequired,
//     discount: PropTypes.number.isRequired,
//     image: PropTypes.string,
//     description: PropTypes.string.isRequired,
//   }).isRequired,
// };



// export default CabinRow;
