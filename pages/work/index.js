import Head from "next/head";
import {
    Flex,
    Tabs, TabList, TabPanels, Tab, TabPanel
} from '@chakra-ui/react'
import Tech from "../../components/work/tech";
import NavBar from "../../components/NavBar";
import Story from "../../components/work/Story";
import Footer from "../../components/Footer";
import Contact from "../../components/work/Contact";
import Certificates from "../../components/certifications/Certificates";
import useSound from 'use-sound'

import lightSwitch from '../../assets/audios/lightswitch.mp3'

const Work = () => {

    const [play] = useSound(lightSwitch, {
        volume: 0.05,
        sprite: {
            on: [0, 300],
            off: [500, 300]
        }
    });
    const handleClick = () => {
        play({ id: "off" });
    }
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
                paddingTop={4}
                paddingBottom={2}
                mb={[0, 0, 8]}
                mx="auto"
                maxW={"100vw"}
            >
                <Tabs variant='soft-rounded' colorScheme='blue'  >
                    <TabList justifyContent={"center"} maxW={"100vw"} >
                        <Tab fontSize={[12, 15, 15]} onClick={handleClick} >Tech Stack</Tab>
                        <Tab fontSize={[12, 15, 15]} onClick={handleClick}>Developer Story</Tab>
                        <Tab fontSize={[12, 15, 15]} onClick={handleClick}>Certifications</Tab>
                        <Tab fontSize={[12, 15, 15]} onClick={handleClick}>Contact Me</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <Tech />
                        </TabPanel>
                        <TabPanel>
                            <Flex alignItems={"center"} justifyContent={"center"} flexDirection={'column'}>
                                <Story />
                            </Flex>
                        </TabPanel>
                        <TabPanel  >
                            <Flex alignItems={"center"} justifyContent={"center"} flexDirection={'column'}>
                            <Certificates />
                            </Flex>
                        </TabPanel>
                        <TabPanel>
                            <Flex alignItems={"center"} justifyContent={"center"} flexDirection={'column'}>
                                <Contact />
                            </Flex>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Flex>
            <Footer />
        </>
    )
}

export default Work;