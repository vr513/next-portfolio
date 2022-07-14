import {
    Stack,
    Heading,
    SimpleGrid,
    Flex
} from '@chakra-ui/react';
import StoryCard from './StoryCard';
import { experience, volunteerExperience } from './workData';

const Story = () => {
    return (
        <>
            <Stack width={[null, '80vw', '75vw']} >
                <Heading textAlign={["center", 'left', 'left']}>Professional Experience</Heading>

                {experience.map((exp,index) => (
                    <StoryCard
                        title={exp.title}
                        role={exp.role}
                        skills={exp.skills}
                        period={exp.period}
                        alt={exp.alt}
                        logo={exp.logo[0]}
                        key={index}
                    />
                ))}

                <Heading textAlign={["center", 'left', 'left']}>Volunteer Experience</Heading>
                {volunteerExperience.map((exp,index) => (
                        <StoryCard
                            title={exp.title}
                            role={exp.role}
                            skills={exp.skills}
                            period={exp.period}
                            alt={exp.alt}
                            logo={exp.logo[0]}
                            key={index}
                        />
                ))}
            </Stack>

        </>
    )
}

export default Story;