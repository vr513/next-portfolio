import Head from "next/head";
import Home from "../components/Home.jsx";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { logEvent } from "firebase/analytics";
import { client } from "../utils/SanityClient";

export default function Index({ analytics, docs }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    const showModalAfter = setTimeout(onOpen, 3000);
    return () => clearTimeout(showModalAfter);
  }, []);

  const closeLinkedin = () => {
    logEvent(analytics, "check_Linkedin_btn", {
      content_type: "button",
      item_id: "check_Linkedin_btn",
    });
  };

  const closeModal = () => {
    closeLinkedin();
    onClose();
  };

  return (
    <>
      <Head>
        <title>Home - Varad Rajopadhye</title>
      </Head>
      <Modal blockScrollOnMount={true} isOpen={isOpen} onClose={closeModal}>
        <ModalOverlay />
        <ModalContent height={"-webkit-fill-available"}>
          <ModalHeader>Some latest News</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <iframe
              style={{ borderRadius: "15px" }}
              src={docs.linkedinPostUrl}
              height="100%"
              width="100%"
              allowFullScreen
              frameborder="0"
              title="Embedded post"
              loading="lazy"
            ></iframe>
          </ModalBody>

          <ModalFooter justifyContent={"center"}>
            <Button
              backgroundColor={"#64c9ff"}
              color={"black"}
              mr={3}
              onClick={closeModal}
            >
              Close
            </Button>
            {/* <Button variant="ghost">Secondary Action</Button> */}
          </ModalFooter>
        </ModalContent>
      </Modal>
      <NavBar />
      <Home resume={docs.resume} analytics={analytics} />
      <Footer />
    </>
  );
}

const getDocLinks = async () => {
  const query = `*[_type == 'links'][0]{
    ...,
    "resume": resume.asset->url,
  }`;
  try {
    const docData = await client.fetch(query);
    return docData;
  } catch (error) {
    console.error("Error fetching blog:", error);
    return null;
  }
};

export async function getServerSideProps() {
  const docs = await getDocLinks();
  return {
    props: { docs }, // will be passed to the page component as props
  };
}
