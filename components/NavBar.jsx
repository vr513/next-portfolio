import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Stack,
  VStack,
  Text,
  Icon,
  Image,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, AddIcon } from "@chakra-ui/icons";
import routes from "./routes";
import DarkModeSwitch from "./DarkModeSwitch";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import dp from "../assets/home/dp.webp";
import { BsPatchCheck, BsPatchCheckFill } from "react-icons/bs";
import { useRouter } from "next/router";

const navRouteColors = {
  '/': '#FE0080',
  '/blog': '#d60884',
  '/work': '#ae1187',
  '/projects': '#8b188a',
  '/contact': '#6e1e8d',
}

const NavLink = ({ name, route }) => {
  const router = useRouter()
  return (
    (<Link
      px={2}
      py={1}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        bg: useColorModeValue("gray.200", "gray.600"),
      }}
      href={route}
    >

      <Box
        transition={"transform .2s"}
        fontWeight={600}
        _hover={{ transform: "scale(1.2)", color: navRouteColors[route] }}
        fontFamily={"Inter"}
        color={router.pathname === route ? navRouteColors[route] : null}
        transform={router.pathname === route ? "scale(1.2)" : null}
      >
        {name}
      </Box>

    </Link>)
  );
}

export default function NavBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return <>
    <Box
      bgColor={useColorModeValue("gray.100", "rgba(0,0,0,0)")}
      px={["8vw", "10vw"]}
      paddingTop={"1rem"}
      paddingBottom={"1rem"}
      mb={[0, 0, 2]}
    >
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"} position={'relative'}>
        <Flex
          justifyContent={"center"}
          width={"100% !important"}
          position={"relative"}
        >

          <Flex
            position={"absolute"}
            left={"0px"}
            top={"-50% !important"}
            bottom={['0px', 'initial']}
            alignItems={"center"}
            flexDirection={"row"}
            gap={3}
          >
            <Avatar
              size={["sm", "md"]}
              src={dp.src}
              href="/"
              name="Varad Rajopadhye"
            />
            <VStack py={'10px'} gap={1} alignItems={'flex-start'}>
              <HStack gap={1}>
                <Text
                  letterSpacing={"1.5"}
                  fontSize={"16px"}
                  fontWeight={600}
                  color={useColorModeValue("black", "white")}
                >
                  Varad
                </Text>
                <Icon as={BsPatchCheckFill} color={useColorModeValue('cyan.600', 'cyan')} marginLeft={'0px !important'} />
              </HStack>
              <HStack mt={'0px !important'}>
                <Icon as={BsPatchCheck} color={'grey'} />
                <Text
                  fontSize={"12px"}
                  fontWeight={400}
                  color={'grey'}
                >
                  Official
                </Text>
              </HStack>
            </VStack>
          </Flex>
          <HStack spacing={8} alignItems={"center"}>
            <HStack
              as={"nav"}
              spacing={8}
              display={{ base: "none", md: "flex" }}
            >
              {routes.map((link, index) => (
                <NavLink key={index} name={link.name} route={link.route} />
              ))}
            </HStack>
          </HStack>
        </Flex>
        <Box display={"flex"} flexDirection={"row"} position={'absolute'} right={'0px'}>
          <DarkModeSwitch
            bgColor={useColorModeValue("rgba(0,0,0,0)", "rgba(0,0,0,0)")}
          />
          <Link href="https://github.com/vr513">

            <IconButton
              marginX={"1vw"}
              icon={<FaGithub />}
              aria-label={"Github Account"}
              bg={useColorModeValue("gray.100", "rgba(0,0,0,0)")}
            />

          </Link>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
        </Box>
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: "none" }}>
          <Stack as={"nav"} spacing={4}>
            {routes.map((link, index) => (
              <NavLink key={index} name={link.name} route={link.route} />
            ))}
          </Stack>
        </Box>
      ) : null}
    </Box>
  </>;
}
