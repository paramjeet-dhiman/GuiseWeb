import ReactPlayer from "react-player";
import Modal from "react-modal";

Modal.setAppElement("#root");

export const Player = ({ setShowModal, setBookDemo, showModal }) => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      borderRadius: "0",
      border: "0",
      padding: "0",
      transform: "translate(-50%, -50%)",
    },
  };

  return (
    <div className="bg-black">
      <Modal
        onRequestClose={() => setShowModal(false)}
        isOpen={showModal}
        style={customStyles}
        overlayClassName="myoverlay"
        contentLabel="Player Modal">
        <div className="h-hl lg:h-hxl lg:w-wxl ">
          <ReactPlayer
            url="https://youtu.be/UwsrzCVZAb8"
            controls
            playing
            muted
            onEnded={() => {
              setShowModal(false);
              setBookDemo(true);
            }}
            width="100%"
            height="100%"
            autoPlay
          />
        </div>
      </Modal>
    </div>
  );
};
