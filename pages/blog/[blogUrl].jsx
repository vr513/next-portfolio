import { Flex, Heading, Icon, Image, Text, VStack, useToast } from "@chakra-ui/react";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import { client } from "../../utils/SanityClient";
import { PortableText } from "@portabletext/react";
import customComponent from "../../components/blogs/CustomComponent";
import { CiHeart, FaRegEye } from "react-icons/ci";
import { FaHeart, FaEye } from "react-icons/fa";

const Index = ({ blogData }) => {
    console.log(blogData)
    const [liked, setLiked] = useState(false);
    const [data, setData] = useState(blogData);

    const toast = useToast()

    const formatDateString = (inputDateString) => {
        const inputDate = new Date(inputDateString);
        const options = { year: 'numeric', month: 'short', day: '2-digit' };
        const formattedDate = inputDate.toLocaleDateString('en-US', options);
        return formattedDate + "    ";
    }

    const handleLike = async () => {
        if (!liked) {
            try {
                const id = data._id
                let response = await fetch(
                    `/api/like`,
                    {
                        method: "POST",
                        body: JSON.stringify({
                            blogId: id,
                        }),
                    }
                );
                let res = await response.json();
                setLiked(true);
                setData(res.updatedBlog)
                let likedBlogs = JSON.parse(localStorage.getItem('likes'));
                if (!likedBlogs) {
                    likedBlogs = {};
                }
                likedBlogs[data._id] = true
                localStorage.setItem('likes', JSON.stringify(likedBlogs));
            } catch (e) {
                toast({
                    title: "Error updating likes",
                    variant: "solid",
                    status: "error",
                    position: "bottom-right",
                    isClosable: true,
                });
            }
        } else {
            toast({
                title: "Already liked the blog",
                variant: "solid",
                status: "error",
                position: "bottom-right",
                isClosable: true,
            });
        }
    }

    useEffect(() => {
        const likedBlogs = JSON.parse(localStorage.getItem('likes'));
        if (likedBlogs && likedBlogs[data._id]) {
            setLiked(true);
        }
    }, [])

    const handleUpdateViews = async () => {
        try {
            let response = await fetch(
                `/api/views`,
                {
                    method: "POST",
                    body: JSON.stringify({
                        blogId: data._id,
                    }),
                }
            );
            let res = await response.json();
            console.log(res)
            let viewedBlogs = JSON.parse(localStorage.getItem('views'));
            if (!viewedBlogs) {
                viewedBlogs = {};
            }
            viewedBlogs[data._id] = true
            localStorage.setItem('views', JSON.stringify(viewedBlogs))
        } catch (e) {

        }
    }

    useEffect(() => {
        const viewedBlogs = JSON.parse(localStorage.getItem('views')) || {};
        if (viewedBlogs[data._id] === null || viewedBlogs[data._id] === undefined) {
            console.log(viewedBlogs)
            handleUpdateViews();
        }
    }, [])

    return (
        <>
            <Head>
                <title>Firebase Alternatives - Varad Rajopadhye</title>
            </Head>
            <NavBar />
            <Flex px={['5vw', "10vw"]} flexDirection={"column"}>
                <VStack w={"100%"} my={"5rem"}>
                    <Heading
                        w={"100%"}
                        textAlign={"center"}
                        fontSize={['3rem', "5rem"]}
                        fontWeight={500}
                        letterSpacing={[0, -1.8]}
                        fontFamily={"'Crete Round', serif;"}
                    >
                        {data.blogTitle}
                    </Heading>
                    <Text fontSize={"24px"} fontFamily={"Inter"} color={"gray.500"} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                        {data.useDocPublishDate ? formatDateString(data.publishDate) : formatDateString(data._createdAt)}
                        | <Icon _hover={{ cursor: 'pointer' }} onClick={handleLike} boxSize={liked ? 6 : 8} mx={'10px'} color={'red'} as={liked ? FaHeart : CiHeart} />  {data.likes}    |
                        <Icon mx={'10px'} as={FaEye} />  {data.views}
                    </Text>
                </VStack>
                <Flex px={['5vw', "15vw"]} flexDirection={"column"} fontFamily={'mono'}>
                    <PortableText
                        fontSize={"50px"}
                        value={data.content}
                        components={customComponent}
                    />
                </Flex>
            </Flex>
            <Footer />
        </>
    )
}

const FetchBlog = async (blogURL) => {
    console.log(blogURL)
    const query = `*[_type == 'Blogs' && displayURL == '${blogURL}'][0]{
    ...,
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

export async function getServerSideProps({ query }) {
    const { blogUrl } = query;
    const data = await FetchBlog(blogUrl);
    return {
        props: { blogData: data }, // will be passed to the page component as props
    };
}


export default Index