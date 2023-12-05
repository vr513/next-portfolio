import { Box, Heading, Image, Link } from "@chakra-ui/react";
import React from "react";

const BlogCard = ({ title, url, image }) => {
  return (
    <>
      <Link href={`/blog/${url}`}>
        <Box
          borderRadius={"12px"}
          background={'#fff'}
          w={"15rem"}
          _hover={{ transform: "translateY(-10px)" }}
        >
          <Image borderRadius={"12px"} src={image} />
          <Heading
            fontSize={"20px"}
            pb={'5px'}
            fontFamily={"'Crete Round', serif;"}
            color={"black"}
            w={'100%'}
            textAlign={'center'}
          >
            {title}
          </Heading>
        </Box>
      </Link>
    </>
  );
};

export default BlogCard;
