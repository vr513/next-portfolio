import {
    Stack,
    Heading,
    SimpleGrid
} from '@chakra-ui/react';
import StoryCard from './StoryCard';
import company from '../../assets/work/Epsitek2.png'
import { experience } from './workData';

const Story = () => {
    console.log(experience)
    return (
        <>
            <Stack width={"75vw"} >
                <Heading textAlign={"left"}>Professional Experience</Heading>
                <SimpleGrid columns={[1, 2, 2]} spacing={4} mt={8}>
                    {experience.map((exp) => (
                        <StoryCard
                            title={exp.title}
                            role={exp.role}
                            skills={exp.skills}
                            period={exp.period}
                            alt={exp.alt}
                            logo={exp.logo[0]}
                        />
                    ))}
                </SimpleGrid>

            </Stack>

        </>
    )
}

export default Story;