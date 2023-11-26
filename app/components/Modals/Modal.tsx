"use client";

import { useCallback, useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";

import Button from "../Button";

interface ModalProps {
  isOpen?: boolean;
  onClose: () => void;
  onSubmit: () => void;
  title?: string;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  actionLabel: string;
  disabled?: boolean;
  secondaryAction?: () => void;
  secondaryActionLabel?: string;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  title,
  body,
  actionLabel,
  footer,
  disabled,
  secondaryAction,
  secondaryActionLabel,
}) => {
  const [showModal, setShowModal] = useState(isOpen);

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  const handleClose = useCallback(() => {
    if (disabled) {
      return;
    }

    setShowModal(false);
    setTimeout(() => {
      onClose();
    }, 300);
  }, [onClose, disabled]);

  const handleSubmit = useCallback(() => {
    if (disabled) {
      return;
    }

    onSubmit();
  }, [onSubmit, disabled]);

  const handleSecondaryAction = useCallback(() => {
    if (disabled || !secondaryAction) {
      return;
    }

    secondaryAction();
  }, [secondaryAction, disabled]);

  if (!isOpen) {
    return null;
  }

  return (
    <>
      <div
        className="
          justify-center 
          items-center 
          flex 
          overflow-x-hidden 
          overflow-y-auto 
          fixed 
          inset-0 
          z-50 
          outline-none 
          focus:outline-none
          bg-neutral-800/70
        "
      >
        <div
          className="
          relative 
          w-full
          md:w-4/6
          lg:w-4/6
          xl:w-3/5
          my-6
          mx-auto 
          h-full 
          lg:h-auto
          md:h-auto
          flex justify-center items-center
          rounded-xl
          "
        >
          {/*content*/}
          <div
            className={`
            translate
            duration-300
            h-full
            ${showModal ? "translate-y-0" : "translate-y-full"}
            ${showModal ? "opacity-100" : "opacity-0"}
            flex
            rounded-xl
            md:w-full
            md:h-full
            w-5/6
            h-[90%]

            border-modal  
          `}
          >
            <div
              className="translate
              h-full
              hidden
              lg:h-auto     
              md:h-auto
              border-0              
              relative 
              lg:block 
              flex-col 
              w-full imgStyle 
              outline-none 
              focus:outline-none rounded-l-xl"
            >
              <div className="cartoonImg "></div>
              <div className="cloud_one"></div>
              <div className="cloud_two"></div>
            </div>
            <div
              className="
              translate
              h-full
              lg:h-auto
              md:h-auto
              border-0 
              relative 
              flex 
              flex-col 
              rounded-l-xl
              rounded-r-xl
              lg:rounded-l-none
              w-full 
              bg-white 
              outline-none 
             
              focus:outline-none
            "
            >
              {/*header*/}
              <div
                className="
                flex 
                items-center 
                px-6 py-4
                justify-center
                relative
                border-b-[1px]
                "
              >
                <button
                  className="
                    p-1
                    border-0 
                    hover:opacity-70
                    transition
                    absolute
                    right-3
                    top-3

                  "
                  onClick={handleClose}
                >
                  <IoMdClose size={18} />
                </button>
                <div className=" text-lg font-semibold">{title}</div>
              </div>
              {/*body*/}
              <div className="relative p-6 ">{body}</div>
              {/*footer*/}
              <div className="flex flex-col gap-2 p-6">
                <div
                  className="
                    flex 
                    flex-row 
                    items-center 
                    gap-4 
                    w-full
                  "
                >
                  {secondaryAction && secondaryActionLabel && (
                    <Button
                      disabled={disabled}
                      label={secondaryActionLabel}
                      onClick={handleSecondaryAction}
                      outline
                    />
                  )}
                  <Button
                    disabled={disabled}
                    label={actionLabel}
                    onClick={handleSubmit}
                  />
                </div>
                {footer}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
