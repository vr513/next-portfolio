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
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, AddIcon } from '@chakra-ui/icons';
import routes from './routes';
import DarkModeSwitch from "./DarkModeSwitch"
import { FaGithub } from "react-icons/fa";
import Link from 'next/link'

const NavLink = (children) => (

  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.600'),
    }}
    href={children.route}>
    <a>{children.name}</a>
  </Link>
);

export default function NavBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={"10vw"} paddingTop={4}
        paddingBottom={2}
        mb={[0, 0, 2]} >
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Flex justifyContent={"left"} >
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Flex alignItems={'center'} justifyContent={"left"} >
              <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}
                  mx={[4,10,"auto"]}
                  >
                  <Avatar
                    size={['sm','md','md']}
                    src={'https://varadrajopadhye.netlify.app/assets/img/varadAvatar.png'}
                    href="/"
                    name="Varad Rajopadhye"
                  />
                </MenuButton>
                <MenuList>
                  <MenuItem>Varad Login</MenuItem>
                  {/* <MenuItem>Link 2</MenuItem>
                <MenuDivider />
                <MenuItem>Link 3</MenuItem> */}
                </MenuList>
              </Menu>
            </Flex>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              {routes.map((link) => (
                <NavLink key={link.route} name={link.name} route={link.route} />
              ))}
            </HStack>
          </HStack>
          </Flex>
          <Box>
            <DarkModeSwitch />
            <Link href="https://github.com/vr513">
              <a>
                <IconButton
                  marginX={'1vw'}
                  icon={<FaGithub />}
                  aria-label={"Github Account"}
                  bg={useColorModeValue('gray.100', 'gray.900')}
                />
              </a>
            </Link>
          </Box>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {routes.map((link) => (
                <NavLink key={link.route} name={link.name} route={link.route} />
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}