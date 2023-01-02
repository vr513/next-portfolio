import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
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
import verifyBlue from "../assets/home/verify.png";
import { MotionFlex } from "./motion";
import { BsPatchCheck , BsPatchCheckFill } from "react-icons/bs";

const avataarLink =
  "https://varadrajopadhye.netlify.app/assets/img/varadAvatar.png";

const NavLink = ({name , route}) => {
  let color = "#FE0080";
  if(name === "Home" || name === 'Blog') color = "#FE0080";
  else if(name === 'Work' ) color = "#AD18AD"
  else color = "#6E1E8D";
  return (
      <Link
        px={2}
        py={1}
        rounded={"md"}
        _hover={{
          textDecoration: "none",
          bg: useColorModeValue("gray.200", "gray.600"),
        }}
        href={route}
      >
        <a>
          <Box
            transition={"transform .2s"}
            fontWeight={600}
            _hover={{ transform: "scale(1.2)", color: color }}
            fontFamily={"Inter"}
          >
            {name}
          </Box>
        </a>
      </Link>
    );  
}

export default function NavBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
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
              bottom={['0px','initial']}
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
                  <Icon as={BsPatchCheckFill} color={useColorModeValue('cyan.600','cyan')} marginLeft={'0px !important'}/>
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
              bgColor={useColorModeValue("gray.100", "rgba(0,0,0,0)")}
            />
            <Link href="https://github.com/vr513">
              <a>
                <IconButton
                  marginX={"1vw"}
                  icon={<FaGithub />}
                  aria-label={"Github Account"}
                  bg={useColorModeValue("gray.100", "rgba(0,0,0,0)")}
                />
              </a>
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
    </>
  );
}
