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
    Textarea
} from '@chakra-ui/react'
import Image from 'next/image';
import icon from "../../assets/contact.png"

const Contact = () => {

    const {colorMode} = useColorMode();
    const formColor = {
        light:"gray.100",
        dark:"gray.800"
    }
    const inputBorder = {
        light:"gray.300",
        dark:"gray.600"
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
                    <Heading>Let's get in touch</Heading>
                </Flex>
                <Box width={"50%"} bg={formColor[colorMode]} padding={"2rem"} borderRadius='25px' >
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
                            <Textarea type="text" size='sm'/>
                        </FormControl>
                        <Button
                                bg={'blue.400'}
                                color={'white'}
                                _hover={{
                                    bg: 'blue.500',
                                }}
                               
                        >
                                Send Message <Image style={{paddingLeft:"10px"}} src={icon} height={"40rem"} width={"42rem"} />
                        </Button>
                    </Stack>
                </Box>
            </Flex>
        </>
    )
}

export default Contact