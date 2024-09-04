import { Dispatch, ReactNode, SetStateAction } from "react";
import Modal from "react-modal";
import styles from "./modal-window.module.scss";

interface IModalWindowProps {
  children?: ReactNode;
  isOpenModalWindow: boolean;
  setIsOpenModalWindow: Dispatch<SetStateAction<boolean>>;
}

const ModalWindow = ({
  children,
  isOpenModalWindow,
  setIsOpenModalWindow,
}: IModalWindowProps) => {
  const closeModal = () => {
    setIsOpenModalWindow(false);
  };

  return (
    <Modal
      shouldCloseOnOverlayClick={true}
      isOpen={isOpenModalWindow}
      parentSelector={(): any => document.querySelector("#modal")}
      appElement={document.getElementById("modal") as HTMLElement}
      onRequestClose={closeModal}
    >
      <section>
        <button onClick={closeModal} className={styles.closeModalButton}>
          <span className={styles.closeModalButtonLeft}></span>
          <span className={styles.closeModalButtonRight}></span>
        </button>
        {children}
      </section>
    </Modal>
  );
};

export { ModalWindow };
