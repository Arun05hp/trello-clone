import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Input,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import Navbar from "../components/navbar";
import Page from "../components/page";

export default function Home() {
  return (
    <Page title={"Manage Your Team’s Projects From Anywhere"}>
      <Navbar />
      <Box bgGradient="linear(darkblue, white)" py="4">
        <Container maxW={"6xl"}>
          <Stack
            align={{ base: "center", md: "stretch" }}
            spacing={{ base: 8, md: 28 }}
            direction={{ base: "column-reverse", md: "row" }}
          >
            <Stack
              flex={1}
              spacing={5}
              py={{ base: 0, md: 28 }}
              textAlign={{ base: "center", md: "left" }}
            >
              <Heading
                lineHeight={1.2}
                fontWeight={600}
                fontSize={{ base: "3xl", sm: "4xl", md: "5xl" }}
              >
                <Text>Trello helps teams move work forward.</Text>
              </Heading>
              <Text fontSize={{ base: "lg", sm: "xl" }} fontWeight={400}>
                Collaborate, manage projects, and reach new productivity peaks.
                From high rises to the home office, the way your team works is
                unique—accomplish it all with Trello.
              </Text>

              <Flex py={{ base: 5, md: 5 }}>
                <Input
                  display={{ base: "none", md: "block" }}
                  maxW={"sm"}
                  placeholder="Email"
                  size={"lg"}
                  mr="5"
                  type="email"
                />
                <Link href="/signup">
                  <Button
                    size={"lg"}
                    width={{ base: "full", md: "auto" }}
                    bg="skyblue"
                    fontSize={"md"}
                    color="white"
                    _hover={{
                      bg: "skydarkblue",
                    }}
                  >
                    Sign up - it's fee
                  </Button>
                </Link>
              </Flex>
            </Stack>

            <Box
              flex={0.5}
              boxSize={{ base: "sm", md: "xs" }}
              ml={"auto"}
              py="12"
            >
              <Image src={"/images/hero.png"} align={"center"} alt="hero" />
            </Box>
          </Stack>
        </Container>
      </Box>
    </Page>
  );
}
