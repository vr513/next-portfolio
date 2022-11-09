import {
  useColorMode,
  Heading,
  Text,
  Flex,
  Stack,
  IconButton,
  styled,
  chakra,
  Box,
  FormControl,
  Checkbox,
  FormLabel,
  Input,
  Button,
  Textarea,
} from "@chakra-ui/react";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import Link from "next/link";

const Contact = () => {
  const { colorMode } = useColorMode();
  const formColor = {
    light: "gray.100",
    dark: "gray.800",
  };
  const inputBorder = {
    light: "gray.300",
    dark: "gray.600",
  };

  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [reason, setReason] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    let bodyContent = JSON.stringify({
      name: name,
      email: email,
      reason: reason,
    });

    let response = await fetch(`https://varad-rajopadhye.vercel.app/api/contact`, {
      method: "POST",
      body: bodyContent,
    });
    setSubmitting(false);
  };

  return (
    <>
      <Flex
        flexDirection={["column", "row", "row"]}
        width={["85vw", "75vw", "60vw"]}
        marginTop={"2rem"}
        className={"test"}
      >
        <Flex
          width={["100%", "50%", "50%"]}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Heading
            bgGradient="linear(to-l, #7928CA, #FF0080)"
            bgClip="text"
            mb={["3rem", null, null]}
          >
            Let's get in touch
          </Heading>
        </Flex>
        <Box
          width={["100%", "50%", "50%"]}
          bg={formColor[colorMode]}
          padding={"2rem"}
          borderRadius="25px"
        >
          <form>
            <Stack spacing={4}>
              <FormControl
                id="name"
                name={"name"}
                borderColor={inputBorder[colorMode]}
                required
              >
                <FormLabel>Name</FormLabel>
                <Input
                  value={name}
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                />
              </FormControl>
              <FormControl
                id="email"
                name={"email"}
                borderColor={inputBorder[colorMode]}
                required
              >
                <FormLabel>Email</FormLabel>
                <Input
                  value={email}
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>
              <FormControl
                id="message"
                name={"message"}
                borderColor={inputBorder[colorMode]}
                required
              >
                <FormLabel>Message</FormLabel>
                <Textarea
                  value={reason}
                  type="text"
                  size="sm"
                  onChange={(e) => setReason(e.target.value)}
                />
              </FormControl>
              <Button
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
                onClick={sendEmail}
                disabled={submitting}
              >
                Send Message
              </Button>
            </Stack>
          </form>
        </Box>
      </Flex>
      <Flex
        width={"60vw"}
        mt={["2rem", "5rem", "5rem"]}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Heading fontSize={[15, "2xl", "3xl"]}>
          Click here to check my Resume
        </Heading>
        <Link href={"/assets/resume.pdf"}>
          <a>
            <Button colorScheme="blue" mt={"20px"}>
              Resume
            </Button>
          </a>
        </Link>
      </Flex>
    </>
  );
};

export default Contact;
