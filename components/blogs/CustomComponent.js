import { Box, Heading, Image, Text } from "@chakra-ui/react";
import { getSanityImage } from "../../utils/SanityClient";
import { OrderedList, UnorderedList } from "@chakra-ui/react";

const customComponent = {
  block: {
    normal: ({ children }) => {
      if (children.length === 1 && children[0] === "") {
        return <br />;
      }
      return (
        <Text fontSize={["16px", "20px"]} lineHeight={1.5}>
          {children}
        </Text>
      );
    },
    h1: ({ children }) => {
      return <p style={{ fontSize: "50px" }}>{children}</p>;
    },
    h2: ({ children }) => {
      return (
        <Heading
          mt={"4rem"}
          mb={"1rem"}
          fontWeight={400}
          fontFamily={"'Crete Round', serif;"}
        >
          {children}
        </Heading>
      );
    },
    h3: ({ children }) => {
      return (
        <Heading
          size={"lg"}
          my={"0.5rem"}
          as={"h3"}
          fontWeight={400}
          fontFamily={"'Crete Round', serif;"}
        >
          {children}
        </Heading>
      );
    },
    h4: ({ children }) => {
      return (
        <Heading
          size={"md"}
          mt={"2rem"}
          mb={"0.5rem"}
          as={"h4"}
          fontFamily={"'Crete Round', serif;"}
        >
          {children}
        </Heading>
      );
    },
  },
  list: {
    bullet: (p) => {
      return (
        <UnorderedList fontSize={["16px", "20px"]} lineHeight={1.5}>
          {p.children}
        </UnorderedList>
      );
    },

    number: (p) => {
      return (
        <OrderedList fontSize={["16px", "20px"]} lineHeight={1.5}>
          {p.children}
        </OrderedList>
      );
    },
  },
  marks: {
    link: ({ children, value }) => {
      return (
        <a
          href={value?.href}
          style={{
            color: "red",
            textDecoration: "underline",
            transition: "blue 0.3s",
          }}
        >
          {children}
        </a>
      );
    },
  },
  types: {
    image: ({ value }) => {
      const imageProps = getSanityImage(value.asset);
      return (
        <Box w={"100%"} display={"flex"} justifyContent={"center"} my={"1rem"}>
          <Image
            src={imageProps.src}
            alt={value.alt}
            height={value.height}
            width={value.width}
          />
        </Box>
      );
    },
  },
};

export default customComponent;
