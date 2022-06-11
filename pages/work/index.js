import Head from "next/head";
import NavBar from '../../components/NavBar'
import {
    useColorMode,
    Heading,
    Text,
    Flex,
    Stack,
    IconButton,
    styled,
    chakra,
    Tabs, TabList, TabPanels, Tab, TabPanel
} from '@chakra-ui/react'
import Tech from "../../components/work/tech";
import Contact from "../../components/work/contact";

const Work = () => {

    return (
        <>
            <Head>
                <title>Tech Stack - Varad Rajopadhye</title>
            </Head>
            <NavBar />
            <Flex
                flexDirection={'row'}
                justifyContent={'center'}
                alignItems={"center"}
            >
                <Tabs variant='soft-rounded' colorScheme='blue' >
                    <TabList justifyContent={"center"} >
                        <Tab>Tech Stack</Tab>
                        <Tab>Developer Story</Tab>
                        <Tab>Certifications</Tab>
                        <Tab>Contact Me</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <Tech />
                        </TabPanel>
                        <TabPanel>
                            <p>Developer Story</p>
                        </TabPanel>
                        <TabPanel>
                            <p>Certifications</p>
                        </TabPanel>
                        <TabPanel>
                            <Contact />
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Flex>

        </>
    )
}

export default Work;