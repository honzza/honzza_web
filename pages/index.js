import Layout from "../components/Layout";
import { Stack, Box, Heading, Flex } from "@chakra-ui/core";

function StackEx() {
  return (
    <Stack isInline spacing={8} px="40px" my="30px" mx="auto" maxWidth="1100px">
      <Box p={5} shadow="md" borderWidth="1px">
        <Heading fontSize="xl" pb="10px">
          Languages
        </Heading>
        <Flex>
          <Flex direction="column" align="center" mr="20px">
            <i class="fab fa-html5 fa-5x"></i>html 5
          </Flex>
          <Flex direction="column" align="center" mr="20px">
            <i class="fab fa-css3-alt fa-5x"></i>css 3
          </Flex>
          <Flex direction="column" align="center" mr="20px">
            <i class="fab fa-js fa-5x"></i>javascript
          </Flex>
          <Flex direction="column" align="center">
            <i class="fab fa-python fa-5x"></i>python
          </Flex>
        </Flex>
      </Box>
      <Box p={5} shadow="md" borderWidth="1px">
        <Heading fontSize="xl" pb="10px">
          Frameworks
        </Heading>
        <Flex>
          <Flex direction="column" align="center" mr="20px">
            <i class="fab fa-react fa-5x"></i>react
          </Flex>
        </Flex>
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
