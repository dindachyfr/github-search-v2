import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Text } from '@chakra-ui/react'
import React from 'react'

const ModalDetail = ({isOpen, onClose, overlay=<ModalOverlay />, modalHeader= "modal header lays here", children =<Text>Modal body lays here!</Text>
}) => {
  
    return (
      <>
        <Modal isCentered isOpen={isOpen} onClose={onClose} size={'xl'}>
          {overlay}
          <ModalContent>
            <ModalHeader>{modalHeader}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                {children}
            </ModalBody>
          </ModalContent>
        </Modal>
      </>
    )
  }
export default ModalDetail