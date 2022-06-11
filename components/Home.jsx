import {
    useColorMode,
    Heading,
    Text,
    Flex,
    Stack,
    IconButton,
    styled
} from '@chakra-ui/react'
import Image from 'next/image';
import UserIcon from "../assets/varadAvatar.png"
import {BsInstagram} from 'react-icons/bs'
import Link from "next/link"


const Home = () => {
    const { colorMode } = useColorMode()
    const colorSecondary = {
        light: 'gray.700',
        dark: 'gray.400'
    }
    return (
        <>
            <Flex
                flexDirection={'column'}
                height="70vh"
                justifyContent={'center'}
                alignItems={"center"}
            >
                <Stack
                    as="main"
                    spacing={8}
                    justifyContent="center"
                    alignItems="flex-start"
                    m="0 auto 4rem auto"
                    maxWidth="90vw"
                    px={2}
                >
                    <Flex
                        flexDirection="row"
                        justifyContent="flex-start"
                        alignItems="flex-start"
                        maxWidth="90vw"
                    >
                        <Flex
                            flexDirection="column"
                            justifyContent="flex-start"
                            alignItems="flex-start"
                            maxWidth="50vw"
                        >

                            <Heading mb={2}>Hi, I'm Varad Rajopadhye</Heading>
                            <Text
                                color={colorSecondary[colorMode]}
                                fontSize={20}
                            >A tech enthusiast who tries to search and learn for new things every day. I am anambition-driven, goal-oriented person who seeks opportunities in web development as well as cloud computing, where I can hone my skills.
                            </Text>
                        </Flex>
                        <Image height={200} width={200} src={UserIcon} />
                    </Flex>
                </Stack>
                <IconHolder />
            </Flex>
        </>
    )
}

export default Home;

const IconHolder = () => {

    return(
        <>
            <Flex
                flexDirection={"row"}
                justifyContent={"center"}
                alignItems={"center"}
            >
                <Link href={'https://www.instagram.com/vr._513/'}>
                    <a><BsInstagram height={40} width={40}/></a>
                </Link>


            </Flex>
        </>
    )
}