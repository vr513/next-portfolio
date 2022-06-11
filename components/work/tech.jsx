import {
    useColorMode,
    Heading,
    Text,
    Flex,
    Stack,
    SimpleGrid
} from '@chakra-ui/react'
import SkillCard from './SkillCard';
import HTML5 from '../../assets/work/html-5.png'
import work from './workData';

const Tech = () => {
    const { colorMode } = useColorMode();

    const subHeadText = {
        light: "gray.800",
        dark: "gray.200",
    }
    return (
        <>
            <Stack>
                <Heading textAlign={"center"}>Tech Stack</Heading>
                <Text
                    fontSize={"xl"}
                    color={subHeadText[colorMode]}
                    textAlign="center"
                >
                    A list of my favorite tools and technologies that I use on a
                    regular basis.
                </Text>

                <SimpleGrid columns={[1, 3, 5]} spacing={4} mt={8}>
                    {work.map((card) => (

                        <SkillCard
                            name={card.name}
                            image={card.image[0]}
                            link={card.link}
                            description={card.description}
                        />
                    ))}
                </SimpleGrid>

            </Stack>
        </>
    )
}


export default Tech;