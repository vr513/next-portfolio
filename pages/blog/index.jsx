import { Flex, Heading, SimpleGrid } from "@chakra-ui/react";
import Head from "next/head";
import React from "react";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import BlogCard from "../../components/blogs/BlogCard";
import {
  PageSlideFade,
  StaggerChildren,
} from "../../components/page-transitions";

function index() {
  return (
    <>
      <Head>
        <title>Blog - Varad Rajopadhye</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Crete+Round&display=swap"
          rel="stylesheet"
        />
      </Head>
      <NavBar />
      <Flex
        minH={"70vh"}
        paddingTop={4}
        paddingBottom={2}
        flexDirection={"row"}
        justifyContent={"center"}
        alignItems={"center"}
        px={"10vw"}
      >
        <SimpleGrid columns={[1, 2, 4]} spacing={5}>
          <BlogCard />
        </SimpleGrid>
      </Flex>

      <Footer />
    </>
  );
}

export default index;
