import { SimpleGrid } from "@chakra-ui/react";
import { PageSlideFade, StaggerChildren } from "../page-transitions";
import OfflineCard from "./OfflineCard";
import { MotionBox } from "../motion";
import { repositories } from "./repos";

const Offline = () => {
    return (
        <PageSlideFade>
            <StaggerChildren>
                    <SimpleGrid columns={[1, 2, 3]} spacing={4} mt={12}>
                        {repositories.map((repo, index) => (
                            <MotionBox whileHover={{ y: -5 }} key={index}>
                                <OfflineCard
                                    key={index}
                                    title={repo.title}
                                    description={repo.description}
                                    cover={repo.cover}
                                    blurHash={repo.blurHash}
                                    technologies={repo.technologies}
                                    url={repo.url}
                                    live={repo.live}
                                    stars={repo.stars}
                                    fork={repo.fork}
                                    showGithubIcon={true}
                                />
                            </MotionBox>
                        ))}
                    </SimpleGrid>          
            </StaggerChildren>
        </PageSlideFade>
    );
};

export default Offline;