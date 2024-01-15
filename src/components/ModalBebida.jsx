import {Modal, Image} from 'react-bootstrap'
import useBebidas from "../hooks/useBebidas"

const ModalBebida = () => {
    const {handleModalClick, modal} = useBebidas()
  return (
    <Modal show={modal} onHide={handleModalClick}>
        <Modal.Body>
            Cuerpo de Modal
        </Modal.Body>
    </Modal>
  )
}

export default ModalBebida