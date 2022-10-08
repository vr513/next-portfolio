import {
    Box,
    Flex,
    Image,
    Skeleton,
    forwardRef,
    chakra,
  } from "@chakra-ui/react";
  import { motion, isValidMotionProp } from "framer-motion";
  import placeholder from "../assets/placeholder.png";

  
export const MotionBox = motion(Box);

export const MotionFlex = motion(Flex);
  
export const MotionImage = motion(Image);