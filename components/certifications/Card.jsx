import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
  } from '@chakra-ui/react';
  import { MotionBox } from '../motion';
  import { item } from "../page-transitions";
    
  export default function Card(props) {
    return (
      <Center py={12}>
        <MotionBox
          role={'group'}
          p={6}
          maxW={'330px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'2xl'}
          rounded={'25px'}
          pos={'relative'}
          zIndex={1}
          whileHover={{ y: -10 }}
          variants={item}
          >
          <Box
            rounded={'lg'}
            mt={-12}
            pos={'relative'}
            height={'230px'}
            _after={{
              transition: 'all .3s ease',
              content: '""',
              w: 'full',
              h: 'full',
              pos: 'absolute',
              top: 5,
              left: 0,
              backgroundImage: props.image,
              filter: 'blur(15px)',
              zIndex: -1,
            }}
            _groupHover={{
              _after: {
                filter: 'blur(20px)',
              },
            }}>
            <Image
              rounded={"25px"}
              height={230}
              width={282}
              objectFit={'cover'}
              src={props.image}
            />
          </Box>
          <Stack pt={10} align={'center'}>
            <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
              {props.company}
            </Text>
            <Heading fontSize={18} fontFamily={'body'} fontWeight={800}>
              {props.title}
            </Heading>
            <Stack direction={'column'} align={'center'}>
              <Text fontWeight={600} fontSize={'xl'}>
                Instructor : {props.instructor}
              </Text>
              <Text fontWeight={600} fontSize={15}>
                Completed : {props.completed}
              </Text>
            </Stack>
          </Stack>
        </MotionBox>
      </Center>
    );
  }