import Layout from "../components/Layout";
import {
  Stack,
  Box,
  Heading,
  Wrap,
  WrapItem,
  VStack,
  Icon,
} from "@chakra-ui/core";
import { SiNextDotJs } from "react-icons/si";

function Wrapper(props) {
  return (
    <WrapItem>
      <VStack>
        <Box>{props.icon}</Box>
        <Box>{props.text}</Box>
      </VStack>
    </WrapItem>
  );
}

function StackExperience() {
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
        <Wrap spacing="30px">
          <Wrapper icon={<i class="fab fa-html5 fa-5x"></i>} text="html 5" />
          <Wrapper icon={<i class="fab fa-css3-alt fa-5x"></i>} text="css 3" />
          <Wrapper icon={<i class="fab fa-js fa-5x"></i>} text="javascript" />
          <Wrapper icon={<i class="fab fa-python fa-5x"></i>} text="python" />
        </Wrap>
      </Box>
      <Box p={5} shadow="md" borderWidth="1px">
        <Heading fontSize="xl" pb="10px">
          Libraries
        </Heading>
        <Wrap spacing="30px">
          <Wrapper icon={<i class="fab fa-react fa-5x"></i>} text="react" />
          <Wrapper icon={<SiNextDotJs size="80" />} text="next.js" />
          <Wrapper
            icon={
              <Icon viewBox="0 0 342.136 342.135" boxSize={20}>
                <path
                  fill="currentColor"
                  d="M158.983 341.914c-1.283-.15-5.183-.592-8.667-.984-20.53-2.31-43.707-9.731-61.666-19.746-30.928-17.246-55.365-42.796-70.889-74.116-8.433-17.014-13.267-32.401-16.19-51.528-2.08-13.613-2.097-35.603-.038-48.904 5.782-37.356 21.91-69.744 47.739-95.869 66.924-67.69 176.498-67.69 243.422 0 25.553 25.846 42.34 59.546 47.636 95.63 7.832 53.363-10.085 107.315-48.345 145.575-26.22 26.22-59.192 42.849-96.002 48.416-8.238 1.245-31.253 2.195-37 1.526zm-39.191-67.404c12.872-11.432 130.524-121.835 130.524-122.482 0-.442-.375-1.31-.833-1.93-.763-1.032-4.106-1.14-39.76-1.294-35.298-.152-38.993-.27-39.62-1.265-.552-.875 3.785-9.312 21.427-41.683 12.166-22.323 22.12-41.244 22.12-42.046 0-1.675-1.816-2.868-3.436-2.256-2 .755-118.564 117.372-118.564 118.618 0 2.808-.153 2.798 42.333 2.798 41.657 0 42.333.04 42.333 2.471 0 .48-14.25 20.528-31.666 44.553-17.417 24.025-31.667 44.102-31.667 44.615 0 1.04 1.768 3.027 2.692 3.027.328 0 2.18-1.406 4.117-3.126z"
                />
              </Icon>
            }
            text="chakra ui"
          />
        </Wrap>
      </Box>
    </Stack>
  );
}

export default function Index() {
  return (
    <Layout>
      <Box
        position="absolute"
        bg="rgb(188, 58, 128, .1)"
        w="25vw"
        h="25vw"
        borderRadius="50%"
        bottom="-5vw"
        left="-5vw"
        z-index="-1"
      />
      <Box
        position="absolute"
        bg="rgb(52, 87, 178, .1)"
        w="25vw"
        h="25vw"
        borderRadius="50%"
        top={{ base: "20vh", md: "15vh" }}
        left={{ base: "60vw", md: "60vw" }}
        z-index="-1"
      />
      <Box
        py={{ base: "40px", md: "80px" }}
        ml={{ base: "40px", md: "25%", lg: "35%", xl: "50%" }}
      >
        <Heading
          py="10px"
          fontSize={{ base: "24px", md: "32px", lg: "48px" }}
          letterSpacing="wide"
        >
          HI, I'M
        </Heading>
        <Heading
          py="10px"
          fontSize={{ base: "32px", md: "48px", lg: "64px" }}
          letterSpacing="wide"
        >
          HONZZA DVORAK
        </Heading>
      </Box>
      <StackExperience />
    </Layout>
  );
}
