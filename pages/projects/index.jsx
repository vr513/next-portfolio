import Head from "next/head";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import {
  Flex,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Heading,
} from "@chakra-ui/react";
import useSound from "use-sound";
import lightSwitch from "../../assets/audios/lightswitch.mp3";
import Offline from "../../components/projects/Offline";

const projects = () => {
  const [play] = useSound(lightSwitch, {
    volume: 0.05,
    sprite: {
      on: [0, 300],
      off: [500, 300],
    },
  });
  const handleClick = () => {
    play({ id: "off" });
  };
  return (
    <>
      <Head>
        <title>Projects - Varad Rajopadhye</title>
      </Head>
      <NavBar />
      <Flex
        minH={"75vh"}
        flexDirection={"row"}
        justifyContent={"center"}
        alignItems={"center"}
        paddingTop={4}
        paddingBottom={2}
        mb={[0, 0, 8]}
        mx="auto"
        maxW={"100vw"}
      >
        <Tabs variant="soft-rounded" colorScheme="blue">
          <TabList justifyContent={"center"} maxW={"100vw"}>
            <Tab fontSize={[12, 15, 15]} onClick={handleClick}>
              Featured
            </Tab>
            <Tab fontSize={[12, 15, 15]} onClick={handleClick}>
              Github Projects
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel w={"75vw"}>
              <Offline />
            </TabPanel>
            <TabPanel>
              <Heading fontSize={[25, 40, 40]}>
                Stay Tuned for GitHub APi integration
              </Heading>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
      <Footer />
    </>
  );
};

export default projects;

export const unstable_revalidate = 21600; // In seconds. Adjust as needed based on your caching strategy.
