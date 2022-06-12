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
} from '@chakra-ui/react'
import emailjs from "@emailjs/browser"
import { useRef } from 'react';
import Link from 'next/link';

const Contact = () => {

    const { colorMode } = useColorMode();
    const formColor = {
        light: "gray.100",
        dark: "gray.800"
    }
    const inputBorder = {
        light: "gray.300",
        dark: "gray.600"
    }

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        
        emailjs.sendForm('service_izy9iqv', 'template_ht6k0uh', form.current, 'user_wrsRmxFyXzd240x5wvxPd')
      .then((result) => {
          console.log(result.text);
          form.current="";
      }, (error) => {
          console.log(error.text);
      });
    }

    return (
        <>
            <Flex
                flexDirection={"row"}
                width={"60vw"}
                justifyContent={"center"}
                alignItems={"center"}
                marginTop={"2rem"}
            >
                <Flex width={"50%"}>
                    <Heading bgGradient='linear(to-l, #7928CA, #FF0080)' bgClip='text' >Let's get in touch</Heading>
                </Flex>
                <Box width={"50%"} bg={formColor[colorMode]} padding={"2rem"} borderRadius='25px' >
                    <form ref={form} >
                        <Stack spacing={4}>
                            <FormControl id="name" borderColor={inputBorder[colorMode]} >
                                <FormLabel>Name</FormLabel>
                                <Input type="text" />
                            </FormControl>
                            <FormControl id="email" borderColor={inputBorder[colorMode]}>
                                <FormLabel>Email</FormLabel>
                                <Input type="email" />
                            </FormControl>
                            <FormControl id="message" borderColor={inputBorder[colorMode]}>
                                <FormLabel>Message</FormLabel>
                                <Textarea type="text" size='sm' />
                            </FormControl>
                            <Button
                                bg={'blue.400'}
                                color={'white'}
                                _hover={{
                                    bg: 'blue.500',
                                }}
                                onClick={sendEmail}
                            >
                                Send Message
                            </Button>
                        </Stack>
                    </form>
                </Box>
            </Flex>
            <Flex width={"60vw"} mt={"5rem"} flexDirection={"column"} alignItems={"center"} justifyContent={"center"} >
                <Heading>Click here to check my Resume</Heading>
                <Link href={"/assets/resume.pdf"} >
                    <a><Button colorScheme='blue' mt={"20px"}>Resume</Button></a>
                </Link>
            </Flex>
        </>
    )
}

export default Contact