import Card from "./Card"
import {
    Stack,
    Heading,
    SimpleGrid,
    Flex
} from '@chakra-ui/react';
import data from "./certificateData";

import UD from "../../assets/work/udemy.webp"
const Certificates = () => {
    return (
        <>
        <SimpleGrid columns={[1, 2, 3]} spacing={4} mt={8}>
            {data.map((item,index) => (
                <Card 
                image={item.image}
                company={item.company}
                title={item.title}
                instructor={item.instructor}
                completed={item.completed}
                key={index}
            />
            ))}
        </SimpleGrid>
        </>
    )
}

export default Certificates