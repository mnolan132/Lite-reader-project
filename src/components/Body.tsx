import React, { useState } from "react";
import {
  Flex,
  Input,
  Button,
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

const defaultFormData = {
  title: "",
  content: "",
};

export default function Body() {
  const [formData, setFormData] = useState(defaultFormData);
  const { title, content } = formData;

  const { isOpen, onOpen, onClose } = useDisclosure();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onOpen();
    console.log(title);
    console.log(content);
  };

  const closeReset = () => {
    onClose();
    setFormData(defaultFormData);
  };

  function convertBionicText(content: string) {
    const words = content.split(" ");
    const result = [];

    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      const halfLength = Math.floor(word.length / 2);
      const boldText =
        "<b>" + word.slice(0, halfLength) + "</b>" + word.slice(halfLength);
      result.push(boldText);
    }

    return result.join(" ");
  }

  return (
    <>
      <form onSubmit={onSubmit}>
        <Flex
          flexDirection={"column"}
          alignItems={"left"}
          justifyContent={"left"}
        >
          <Input
            id="title"
            name="title"
            type="text"
            value={title}
            mt={3}
            placeholder="Enter your heading (optional)"
            onChange={onChange}
          />
          <Input
            id="content"
            name="content"
            type="text"
            value={content}
            mt={3}
            placeholder="Type or paste your text here..."
            onChange={onChange}
          />
          <Box mr={"auto"} mt={3} justifySelf={"left"}>
            <Button type="submit" colorScheme="teal">
              Convert Text
            </Button>
          </Box>
        </Flex>
      </form>
      <Modal isOpen={isOpen} onClose={closeReset} size={"full"}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {
              <div
                dangerouslySetInnerHTML={{ __html: convertBionicText(content) }}
              />
            }
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={closeReset}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
