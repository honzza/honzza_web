import NextLink from "next/link";
import {
  List,
  ListItem,
  Link,
  Box,
  Flex,
  Heading,
  IconButton,
  useColorMode,
  DarkMode,
} from "@chakra-ui/core";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box
      backgroundColor="#25283d"
      color="#fff"
      height={{ base: "100px", md: "70px" }}
    >
      <Flex
        direction={{ base: "column", md: "row" }}
        justify={{ base: "", md: "space-between" }}
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
          my={{ base: "10px", md: "0" }}
        >
          honzza dvorak.
        </Heading>
        <Box display="flex">
          <List display="flex">
            <ListItem mt="5px">
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
            <ListItem mt="5px">
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
            <ListItem mt="5px">
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
          <DarkMode>
            <IconButton
              aria-label="Toggle dark mode"
              icon={{ light: <MoonIcon />, dark: <SunIcon /> }[colorMode]}
              size="sm"
              ml="20px"
              onClick={toggleColorMode}
            />
          </DarkMode>
        </Box>
      </Flex>
    </Box>
  );
}
