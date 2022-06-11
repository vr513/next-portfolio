import React from 'react'
import {
    useColorMode,
    Button,
    Flex,
    Box,
    IconButton
} from '@chakra-ui/react'
import Link from 'next/link'
import styled from '@emotion/styled'
import UserIcon from "../assets/varadAvatar.png"
import { Avatar } from '@chakra-ui/react'
import { FaGithub } from "react-icons/fa";
import DarkModeSwitch from '../components/DarkModeSwitch'
import Image from 'next/image'

const Container = ({ children }) => {
    const { colorMode } = useColorMode()

    const bgColor = {
        light: 'white',
        dark: '#171717'
    }
    const navColor = {
        light: 'gray.200',
        dark: 'gray.700'
    }

    const color = {
        light: 'black',
        dark: 'white'
    }

    const navHoverBg = {
        light: 'gray.200',
        dark: 'gray.500',
    }

    const StickyNav = styled(Flex)`
        position: sticky;
        z-index: 10;
        top: 0;
        backdrop-filter: saturate(180%) blur(20px);
        transition: height .5s, line-height .5s;
        `
    const githubIconColor = {
        light: 'gray.200',
        dark: 'gray.900'
    }

    return (
        <>
            <StickyNav
                flexDirection="row"
                justifyContent="space-between"
                alignItems="center"
                width="100%"
                bg={navColor[colorMode]}
                as="nav"
                px={"10vw"}
                // px={[80, 160, 160]}
                paddingTop={4}
                paddingBottom={2}
                mb={[0, 0, 8]}
                mx="auto"
            >
                <Box>
                    <Avatar src={"https://varadrajopadhye.netlify.app/assets/img/varadAvatar.png"} href="/" marginX={[1, 2, 4]} size={"md"} name="Varad Rajopadhye" />
                    <Link href="/" passHref>
                        <Button as="a" variant="ghost" p={[1, 2, 4]} _hover={{ backgroundColor: navHoverBg[colorMode] }}>
                            Home
                        </Button>
                    </Link>
                    <Link href="/about" passHref>
                        <Button as="a" variant="ghost" p={[1, 2, 4]} _hover={{ backgroundColor: navHoverBg[colorMode] }}>
                            Blog
                        </Button>
                    </Link>
                    <Link href="/tech-stack" passHref>
                        <Button as="a" variant="ghost" p={[1, 2, 4]} _hover={{ backgroundColor: navHoverBg[colorMode] }}>
                            Tech - Stack
                        </Button>
                    </Link>
                    <Link href="/story" passHref>
                        <Button as="a" variant="ghost" p={[1, 2, 4]} _hover={{ backgroundColor: navHoverBg[colorMode] }}>
                            Achievements
                        </Button>
                    </Link>
                    <Link href="/projects" passHref>
                        <Button as="a" variant="ghost" p={[1, 2, 4]} _hover={{ backgroundColor: navHoverBg[colorMode] }}>
                            Projects
                        </Button>
                    </Link>
                </Box>
                <Box>
                    <DarkModeSwitch />
                    <Link href="https://github.com/vr513">
                        <a>
                            <IconButton
                                marginX={'1vw'}
                                icon={<FaGithub />}
                                aria-label={"Github Account"}
                                bg={navColor[colorMode]}
                            />
                        </a>
                    </Link>
                </Box>
            </StickyNav >
        </>
    )
}

export default Container