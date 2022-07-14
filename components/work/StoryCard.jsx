import { MotionBox } from "../motion"
import {
    item,
    CardTransition
} from "../page-transitions";
import {
    Box,
    Flex,
    Tag,
    Text,
    useColorModeValue,
    useColorMode,
    Stack,
    Heading,
    SimpleGrid,
    Image
} from '@chakra-ui/react';
import placeholder from "../../assets/placeholder.png"

const StoryCard = (props) => {
    const { colorMode } = useColorMode();
    return (
        <>
            <MotionBox variants={item}>
                <MotionBox whileHover={{ y: -5 }}>
                    <CardTransition>
                        <Box
                            px={4}
                            py={5}
                            borderWidth="1px"
                            _hover={{ shadow: "lg" }}
                            bg={useColorModeValue("gray.200", "gray.800")}
                            position="relative"
                            rounded="20px"
                            my={"0.15rem"}
                        >
                            <Flex justifyContent="space-between">
                                <Flex>
                                    <Image
                                        rounded="40px"
                                        w={16}
                                        h={16}
                                        objectFit="cover"
                                        fallbackSrc={placeholder}
                                        src={props.logo}
                                        alt={props.alt}
                                    />
                                    <Stack spacing={2} pl={3} align="left">
                                        <Heading
                                            align="left"
                                            fontSize="xl"
                                            color={`mode.${colorMode}.career.text`}
                                        >
                                            {props.title}
                                        </Heading>
                                        <Heading
                                            align="left"
                                            fontSize="sm"
                                            color={`mode.${colorMode}.career.subtext`}
                                        >
                                            {props.role}
                                        </Heading>
                                        <Stack
                                            spacing={1}
                                            mt={3}
                                            isInline
                                            alignItems="center"
                                            display={["none", "none", "flex", "flex"]}
                                        >
                                            {props.skills.map(skill => (
                                                <Tag size="sm" padding="0 3px" key={skill}>
                                                    {skill}
                                                </Tag>
                                            ))}
                                        </Stack>
                                    </Stack>
                                </Flex>
                                <Stack display={["none", "none", "flex", "flex"]}>
                                    <Text fontSize={14} color={`mode.${colorMode}.career.subtext`}>
                                        {props.period}
                                    </Text>
                                </Stack>
                            </Flex>
                            <Stack
                                spacing={1}
                                mt={3}
                                direction={['row']}
                                alignItems="center"
                                justifyContent={"flex-start"}
                                display={["flex", "flex", "none", "none"]}
                            >
                                {props.skills.map(skill => (
                                    <Tag size="sm" padding="0 3px" key={skill}>
                                        {skill}
                                    </Tag>
                                ))}
                            </Stack>
                        </Box>
                    </CardTransition>
                </MotionBox>
            </MotionBox>
        </>
    )
}

export default StoryCard;