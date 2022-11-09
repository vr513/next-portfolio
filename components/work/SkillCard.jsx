import React from "react";
import {
  HStack,
  VStack,
  Text,
  useColorMode,
  Box,
  Skeleton,
  Tooltip,
  Link
} from "@chakra-ui/react";
import { usePalette } from "react-palette";
import { MotionBox } from "../motion";
import { item } from "../page-transitions";
import Image from "next/image";


const SkillCard = ({ name, image, link, description }) => {
  const { data, loading } = usePalette(image);
  const { colorMode } = useColorMode();
  const hColor = {
    light: "gray.200",
    dark: "gray.800"
  }
  const hSBorder = {
    dark: "gray.700",
    light: "gray.100"
  }
  const text = {
    light: "gray.500",
    dark: "gray.200"
  }
  return (
    <MotionBox variants={item}>
      <MotionBox whileHover={{ y: -5 }}>

        <HStack
          p={4}
          bg={hColor[colorMode]}
          rounded="xl"
          borderWidth="1px"
          borderColor={hSBorder[colorMode]}
          w="100%"
          textAlign="left"
          align="start"
          spacing={4}
          _hover={{ shadow: "lg" }}
        >
          <Box
            rounded="lg"
            p={2}
            position="relative"
            overflow="hidden"
            lineHeight={0}
            boxShadow="inset 0 0 1px 1px rgba(0, 0, 0, 0.015)"
          >
            <Box
              bg={data.lightVibrant}
              position="absolute"
              top={0}
              bottom={0}
              left={0}
              right={0}
              opacity={0.25}
            ></Box>
            {loading ? (
              <Skeleton height={26} width={26} rounded="md" />
            ) : (
              <Tooltip hasArrow label="Visit official site">
                <span>
                  <Link href={link} isExternal>
                    <Image
                      src={image}
                      height={26}
                      width={26}
                      layout="fixed"
                      rounded="md"
                    />
                  </Link>
                </span>
              </Tooltip>
            )}
          </Box>
          <VStack
            align="start"
            justify="flex-start"
            spacing={1}
            maxW="lg"
            h="100%"
          >
            <VStack spacing={0} align="start" flexGrow="1">
              <Text fontWeight="bold" fontSize="md" noOfLines={2}>
                {name}
              </Text>
              <Text
                fontSize="sm"
                color={text[colorMode]}
              >
                {description}
              </Text>
            </VStack>
          </VStack>
        </HStack>
      </MotionBox>
    </MotionBox>
  );
};

export default SkillCard;