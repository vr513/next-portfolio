import {
    useColorMode,
    Heading,
    Text,
    Flex,
    Stack,
    IconButton,
    styled,
    chakra,
} from '@chakra-ui/react'
import Image from 'next/image';
import UserIcon from "../assets/varadAvatar.png"
import {BsInstagram} from 'react-icons/bs'
import {FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {AiFillGithub} from 'react-icons/ai'
import Link from "next/link"
import styles from './styles/Home.module.css'
import Typewriter from 'typewriter-effect';


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
                className={styles.homeHead}
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

                            <Heading bgGradient='linear(to-l, #7928CA, #FF0080)' bgClip='text' mb={2}>Hi, I'm Varad Rajopadhye</Heading>
                            <Text
                                color={colorSecondary[colorMode]}
                                fontSize={20}
                            >A tech enthusiast who tries to search and learn for new things every day. I am anambition-driven, goal-oriented person who seeks opportunities in web and full-stack development as well as cloud computing, where I can hone my skills.
                            </Text>
                        </Flex>
                        <Image height={200} width={200} src={UserIcon} />
                    </Flex>
                </Stack>
                <Text 
                    color={colorSecondary[colorMode]}
                    fontSize={40}
                    fontWeight={600}
                >
                    {
                        <Typewriter 
                        onInit={(typewriter) => {
                            typewriter.typeString("Full Stack Developer")
                            .pauseFor(1000)
                            .deleteAll()
                            typewriter.typeString("Freelancer")
                            .pauseFor(1000)
                            .deleteAll()
                            typewriter.typeString("Open Source Enthusiast")
                            .pauseFor(1000)
                            .deleteAll()
                            .start()
                        }}
                        options={{loop:true}}
                    />
                    }
                </Text>
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
                    <a><BsInstagram className={styles.iconHome}  /></a>
                </Link>
                <Link href={'https://www.linkedin.com/in/varad-rajopadhye/'}>
                    <a><FaLinkedin className={styles.iconHome}  /></a>
                </Link>
                <Link href={'mailto:varad.22010084@viit.ac.in'}>
                    <a><HiOutlineMail className={styles.iconHome2}  /></a>
                </Link>
                <Link href={'https://github.com/vr513'}>
                    <a><AiFillGithub className={styles.iconHome2}  /></a>
                </Link>
            </Flex>
        </>
    )
}
