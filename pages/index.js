import Layout from "../components/Layout";
import { Stack, Box, Heading, Flex } from "@chakra-ui/core";

function StackEx() {
  return (
    <Stack spacing={8} my="30px" mx="20px">
      <Box p={5} shadow="md" borderWidth="1px">
        <Heading fontSize="xl">Languages</Heading>
        <Flex>
          <i class="fab fa-html5 fa-5x"></i>
          <i class="fab fa-python fa-5x"></i>
          <i class="fab fa-css3-alt fa-5x"></i>
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
