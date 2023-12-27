import {
    Box,
    Container,
    Stack,
    Text,
    useColorModeValue,
    VisuallyHidden,
} from '@chakra-ui/react';
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';
import UserIcon from "../assets/varadAvatar.webp";
import { HiOutlineMail } from 'react-icons/hi'
import NextLink from 'next/link';
import Image from 'next/image';

const SocialButton = (props) => {
    return (
        <NextLink href={props.link} legacyBehavior passHref>

            <Box
                bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
                rounded={'full'}
                w={8}
                h={8}
                cursor={'pointer'}
                as={'a'}
                display={'inline-flex'}
                alignItems={'center'}
                justifyContent={'center'}
                transition={'background 0.3s ease'}
                _hover={{
                    bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
                }}>
                <VisuallyHidden>{props.label}</VisuallyHidden>
                {props.icon}
            </Box>

        </NextLink>
    );
};

export default function Footer() {
    console.log(UserIcon);
    return (
        <Box
            bg={useColorModeValue('gray.50', 'gray.900')}
            color={useColorModeValue('gray.700', 'gray.200')}
            marginTop={["1rem", "2rem", "3rem"]}
        >
            <Container
                as={Stack}
                maxW={'6xl'}
                py={4}
                direction={{ base: 'column', md: 'row' }}
                spacing={4}
                justify={{ base: 'center', md: 'space-between' }}
                align={{ base: 'center', md: 'center' }}>
                <Box
                    w={10}
                    h={10}
                    marginX={[1, 2, 4]}
                >
                    <Image
                        src={UserIcon}
                        alt={"Varad's avataar"}
                        name="Varad Rajopadhye"
                    />
                </Box>

                <Text>© {new Date().getFullYear()}. All rights reserved</Text>
                <Stack direction={'row'} spacing={6}>
                    <SocialButton
                        label="Instagram" link="https://www.instagram.com/vr._513" icon={<FaInstagram />}
                    />
                    <SocialButton
                        label="Linkedin" link="https://www.linkedin.com/in/varad-rajopadhye" icon={<FaLinkedin />}
                    />
                    <SocialButton
                        label="Email" link="mailto:contact@varadrajopadhye.tech" icon={<HiOutlineMail />}
                    />
                    <SocialButton
                        label="Github" link="https://github.com/vr513" icon={<FaGithub />}
                    />
                </Stack>
            </Container>
        </Box>
    );
}