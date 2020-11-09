import Layout from "../components/Layout";
import { Stack, Box, Heading, Wrap, WrapItem, Center } from "@chakra-ui/core";
import { SiNextDotJs } from "react-icons/si";

function StackEx() {
  return (
    <Stack
      direction={{ base: "column", md: "row" }}
      spacing={8}
      px="40px"
      my="30px"
      mx="auto"
      maxWidth="1100px"
    >
      <Box p={5} shadow="md" borderWidth="1px">
        <Heading fontSize="xl" pb="10px">
          Languages
        </Heading>
        <Wrap>
          <WrapItem>
            <Center>
              <i class="fab fa-html5 fa-5x"></i>
              html 5
            </Center>
          </WrapItem>
          <WrapItem>
            <Center>
              <i class="fab fa-css3-alt fa-5x"></i>
              css 3
            </Center>
          </WrapItem>
          <WrapItem>
            <Center>
              <i class="fab fa-js fa-5x"></i>
              javascript
            </Center>
          </WrapItem>
          <WrapItem>
            <Center>
              <i class="fab fa-python fa-5x"></i>
              python
            </Center>
          </WrapItem>
        </Wrap>
      </Box>
      <Box p={5} shadow="md" borderWidth="1px">
        <Heading fontSize="xl" pb="10px">
          Frameworks
        </Heading>
        <Wrap>
          <WrapItem>
            <Center>
              <i class="fab fa-react fa-5x"></i>
              react
            </Center>
          </WrapItem>
          <WrapItem>
            <Center>
              <SiNextDotJs size="80" />
              next.js
            </Center>
          </WrapItem>
        </Wrap>
      </Box>
    </Stack>
  );
}

export default function Index() {
  return (
    <Layout>
      <StackEx />
    </Layout>
  );
}
