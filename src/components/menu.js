import React from 'react';
import { 
  Box,
  Flex,
  Text
} from "@chakra-ui/react";
import { Link } from 'gatsby';

const Menu = () => (
  <Flex
    as="nav"
  >
    <Link
      href="/"
      px="4"
      fontSize="lg"
    >
      <Text fontSize='l' mx={2}>Home</Text>
    </Link>
    <Link
      href="/bayan"
      px="4"
      fontSize="lg"
    >
      <Text fontSize='l' mx={2}>Bayans</Text>
    </Link>
    <Link
      href="#"
      px="4"
      fontSize="lg"
    >
      <Text fontSize='l' mx={2}>Posters</Text>
    </Link>
    <Link
      href="/category/short-clips/"
      px="4"
      fontSize="lg"
    >
      <Text fontSize='l' mx={2}>Short clips</Text>
    </Link>
  </Flex>
);

export default Menu;
