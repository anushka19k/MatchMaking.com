import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton style={{backgroundColor:"rgb(255,255,255,0.2)"}}></Modal.Header>
      <Modal.Body>
        <h4>India : +91-7862889999</h4>
        <p>
          We are Back! Our phone services have resumed and you can now call us
          between 10am - 7pm (IST). You may experience marginally longer wait
          times in this period, but that will be fixed soon. For Instant
          Support, we recommend that you connect with us on Chat & we will be
          there to assist you. #StrongerTogether
        </p>
      </Modal.Body>
    </Modal>
  );
}
