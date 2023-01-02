import {
    useColorMode,
    Heading,
    Text,
    Flex,
    Stack,
    Link,
    Tooltip
} from '@chakra-ui/react'
import Image from 'next/image';
import UserIcon from "../assets/varadAvatar.webp"
import { BsInstagram } from 'react-icons/bs'
import { FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { AiFillGithub } from 'react-icons/ai'
import { AiOutlineFile } from 'react-icons/ai';
import styles from './styles/Home.module.css'
import Typewriter from 'typewriter-effect';
import Hand from "../assets/home/hand.webp"
import { MotionBox, MotionFlex } from './motion';


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
                justifyContent={'center'}
                alignItems={"center"}
                className={styles.homeHead}
                minH={["80vh", "75vh", "85vh"]}
            >
                <MotionFlex
                    
                    justify="center"
                    direction="column"
                    
                >
                    <Stack
                        as="main"
                        spacing={8}
                        justifyContent="center"
                        alignItems="flex-start"
                        // m="0 auto 4rem auto"
                        maxWidth="90vw"
                        px={2}
                        mt={["10vh", "0", "0"]}
                    >
                        <Flex
                            flexDirection={'row'}
                            justifyContent="flex-start"
                            alignItems="flex-start"
                            maxWidth="90vw"
                        >
                            <Flex
                                flexDirection="column"
                                justifyContent="flex-start"
                                alignItems="flex-start"
                                maxWidth="50vw"
                                bgGradient='linear(to-l, #7928CA, #FF0080)' bgClip='text'
                            >
                                <Heading
                                    alignItems={"center"}
                                    justifyContent={"center"}
                                    display={"flex"}
                                >
                                    Hey! <Image
                                        src={Hand}
                                        height={"50px"}
                                        width={"50px"}
                                        alt={'Waving hand gif'}
                                    />
                                </Heading>
                                <Heading bgGradient='linear(to-l, #7928CA, #FF0080)' bgClip='text' mb={2}>I'm Varad Rajopadhye</Heading>
                                <Text
                                    color={colorSecondary[colorMode]}
                                    fontSize={[13, 20, 20]}
                                    w={["100%"]}
                                    fontWeight={[400, 600, 600]}
                                    mb={"2rem"}
                                    textAlign={"justify"}
                                >A tech enthusiast who tries to search and learn for new things every day. I am anambition-driven, goal-oriented person who seeks opportunities in web and full-stack development as well as cloud computing, where I can hone my skills.
                                </Text>
                            </Flex>
                            <Flex className='ImageVarad' alignItems={"center"} justifyContent={"center"} height={"100%"} >
                                <Image height={200} width={200} src={UserIcon} alt={"Varad's avataar"} />
                            </Flex>
                        </Flex>
                    </Stack>
                    <Text
                        as={"h2"}
                        color={colorSecondary[colorMode]}
                        fontSize={[25, 40, 40]}
                        fontWeight={600}
                        textAlign={"center"}
                        mb={"2rem"}
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
                                options={{ loop: true }}
                            />
                        }
                    </Text>
                    <IconHolder />
                </MotionFlex>
            </Flex>
        </>
    )
}

export default Home;

const IconHolder = () => {

    return (
        <>
            <Flex
                flexDirection={"row"}
                justifyContent={"center"}
                alignItems={"center"}
            >
                <Tooltip hasArrow label="Instagram" placement="bottom">
                    <span>
                        <Link href={'https://www.instagram.com/vr._513/'} isExternal >
                            <BsInstagram className={styles.iconHome} />
                        </Link>
                    </span>
                </Tooltip>
                <Tooltip hasArrow label="Linkedin" placement="bottom">
                    <span>
                        <Link href={'https://www.linkedin.com/in/varad-rajopadhye/'} isExternal >
                            <FaLinkedin className={styles.iconHome} />
                        </Link>
                    </span>
                </Tooltip>
                <Tooltip hasArrow label="Mail" placement="bottom">
                    <span>
                        <Link href={'mailto:contact@varadrajopadhye.tech'} isExternal >
                            <HiOutlineMail className={styles.iconHome2} />
                        </Link>
                    </span>
                </Tooltip>
                <Tooltip hasArrow label="Github" placement="bottom">
                    <span>
                        <Link href={'https://github.com/vr513'} isExternal >
                            <AiFillGithub className={styles.iconHome2} />
                        </Link>
                    </span>
                </Tooltip>
                <Tooltip hasArrow label="Resume" placement="bottom" >
                    <span>
                        <Link href={"/assets/resume.pdf"} isExternal>
                            <AiOutlineFile className={styles.iconHome} />
                        </Link>
                    </span>
                </Tooltip>
            </Flex>
        </>
    )
}
