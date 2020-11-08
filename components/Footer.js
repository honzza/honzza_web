import { Text, Flex, Link } from "@chakra-ui/core";

export default function Footer() {
  return (
    <Flex justify="center" align="center" py="2rem" minWidth="450px">
      <Text my="10px">webdesign honzza dvorak 2020</Text>
      <Link mx="10px" href="https://github.com/honzza" isExternal>
        <i className="fab fa-github fa-1x"></i>
      </Link>
    </Flex>
  );
}
