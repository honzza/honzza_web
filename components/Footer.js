import { Text, Flex, Link, Box } from "@chakra-ui/core";

export default function Footer() {
  return (
    <Flex direction="column" align="center" py="2rem" backgroundColor="#efd9ce">
      <Text my="10px">webdesign honzza dvorak 2020</Text>
      <Box>
        <Link mx="10px" href="#">
          <i className="fab fa-github fa-2x"></i>
        </Link>
        <Link mx="10px" href="#">
          <i className="fas fa-envelope fa-2x"></i>
        </Link>
      </Box>
    </Flex>
  );
}
