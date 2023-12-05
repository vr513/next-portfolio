import { Flex, Heading, SimpleGrid } from "@chakra-ui/react";
import Head from "next/head";
import React from "react";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import BlogCard from "../../components/blogs/BlogCard";
import { client } from "../../utils/SanityClient";


function Index({ blogsData }) {
  console.log(blogsData);
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
          {blogsData.map((blog) => <BlogCard image={blog.imageUrl} title={blog.displayTitle} url={blog.displayURL} key={blog.id} />)}
        </SimpleGrid>
      </Flex>

      <Footer />
    </>
  );
}

export default Index;

const FetchAllBlogs = async () => {
  const query = `*[_type == 'Blogs']{
    "id": _id,
    "displayTitle": displayTitle,
    "displayURL": displayURL,
    "imageUrl": displayImage.asset->url,
  }`
  try {
    const blogData = await client.fetch(query);
    return blogData;
  } catch (error) {
    console.error("Error fetching blog:", error);
    return null;
  }
};

export async function getServerSideProps() {
  const data = await FetchAllBlogs();
  return {
    props: { blogsData: data }, // will be passed to the page component as props
  };
}