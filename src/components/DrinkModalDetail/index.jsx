import { Modal } from "react-bootstrap"
import useDrinks from "../../hooks/useDrinks"

const DrinkModalDetail = () => {

  const {showModal, handleShowModalClick, recipe, loading} = useDrinks()

  const {strDrink} = recipe

  return (
    !loading && 
    <Modal show={showModal} onHide={handleShowModalClick}>
        <Modal.Header closeButton >
          <Modal.Title>{strDrink}</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
      </Modal>
  )
}

export default DrinkModalDetail
