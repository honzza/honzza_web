import NextLink from "next/link";
import {
  List,
  ListItem,
  Link,
  Box,
  Flex,
  Heading,
  Button,
  useColorMode,
} from "@chakra-ui/core";

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box
      backgroundColor="#25283d"
      color="#fff"
      height={{ xs: "100px", md: "70px" }}
    >
      <Flex
        direction={{ xs: "column", md: "row" }}
        justify={{ xs: "", md: "space-between" }}
        align="center"
        maxWidth="1100px"
        mx="auto"
        height="100%"
        px="40px"
      >
        <Heading
          as="h1"
          fontWeight="200"
          fontSize="32px"
          my={{ xs: "10px", md: "0" }}
        >
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
        <Button onClick={toggleColorMode}>
          {colorMode === "light" ? "D" : "L"}
        </Button>
      </Flex>
    </Box>
  );
}
