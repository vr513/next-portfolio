import { Box, Heading, Link, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { MotionBox } from "../../components/motion";
import { item } from "../page-transitions";
import firebaseImg from "../../assets/blogs/firebase/firebase.webp";

const BlogCard = () => {
  return (
    <>
      <Link href="/blog/firebase-alternatives">
      <Box
        borderRadius={"12px"}
        background={`url(${firebaseImg.src}),#fff`}
        height={"15rem"}
        backgroundPosition={"bottom"}
        backgroundSize={"contain"}
        backgroundRepeat={"no-repeat"}
        w={"15rem"}
        boxShadow={"0px 4px 20px 5px"}
        transition={"transform 0.1s"}
        _hover={{ transform: "translateY(-10px)" }}
      >
        <Heading
          fontSize={"3xl"}
          mt={"5px"}
          ml={"10px"}
          fontFamily={"'Crete Round', serif;"}
          color={"black"}
        >
          Firebase alternatives
        </Heading>
      </Box>
      </Link>
    </>
  );
};

export default BlogCard;
