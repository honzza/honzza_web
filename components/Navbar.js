import NextLink from "next/link";
import { Heading } from "@chakra-ui/core";
import { List, ListItem, Link, Box, Flex } from "@chakra-ui/core";

export default function Navbar() {
  return (
    <Box backgroundColor="#25283d" color="#fff" height="70px">
      <Flex
        justify="space-between"
        align="center"
        maxWidth="1100px"
        mx="auto"
        height="100%"
        px="40px"
      >
        <Heading as="h1" fontWeight="200" fontSize="32px">
          honzza dvorak.
        </Heading>
        <List display="flex">
          <ListItem>
            <NextLink href="/">
              <Link
                _hover={{ borderBottom: "2px #fff solid" }}
                pb="5px"
                mx="10px"
              >
                home
              </Link>
            </NextLink>
          </ListItem>
          <ListItem>
            <NextLink href="/portfolio">
              <Link
                _hover={{ borderBottom: "2px #fff solid" }}
                pb="5px"
                mx="10px"
              >
                portfolio
              </Link>
            </NextLink>
          </ListItem>
          <ListItem>
            <NextLink href="/contact">
              <Link
                _hover={{ borderBottom: "2px #fff solid" }}
                pb="5px"
                mx="10px"
              >
                contact
              </Link>
            </NextLink>
          </ListItem>
        </List>
      </Flex>
    </Box>
  );
}
