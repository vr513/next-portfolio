import Card from "./Card"
import {
    SimpleGrid,
} from '@chakra-ui/react';

const Certificates = (data) => {
    return (
        <>
            <SimpleGrid columns={[1, 2, 4]} spacing={4} mt={8}>
                {data && data.data && Array.isArray(data.data) && data.data.map((item, index) => (
                    <Card
                        image={item.image}
                        company={item.company}
                        title={item.title}
                        instructor={item.instructor}
                        completed={item.completed}
                        key={index}
                        certificateLink={item.certificateLink}
                    />
                ))}
            </SimpleGrid>
        </>
    )
}

export default Certificates;