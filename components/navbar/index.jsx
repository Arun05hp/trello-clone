import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Divider,
  Icon,
  Image,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import Link from "next/link";

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box
      bg={useColorModeValue("white", "gray.800")}
      color={useColorModeValue("gray.600", "white")}
      borderBottom={1}
      borderStyle={"solid"}
      borderColor={useColorModeValue("gray.200", "gray.900")}
      p={0}
      position={"static"}
      transition={"all .3s ease"}
      _hover={{ boxShadow: "md" }}
    >
      <Flex justify="space-between">
        <Box p="5">
          <Image
            height={"6"}
            src="/images/trello-logo-blue.svg"
            alt="Dan Abramov"
          />
        </Box>

        <DesktopNav />

        <IconButton
          onClick={onToggle}
          display={{ md: "none" }}
          icon={
            isOpen ? <CloseIcon w={5} h={5} /> : <HamburgerIcon w={7} h={7} />
          }
          variant={"link"}
          aria-label={"Toggle Navigation"}
        />
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <Divider />
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const AllLinks = () => {
  return (
    <>
      <Link href="/login">
        <Button
          width={{ base: "full", md: "auto" }}
          fontSize={"lg"}
          height="full"
          fontWeight={500}
          bg="transparent"
          border={{ base: "1px solid #0065ff", md: "none" }}
          borderRadius={"0"}
          color="#172b4d"
          p={"5"}
          _hover={{
            bg: "transparent",
          }}
        >
          Log in
        </Button>
      </Link>
      <Link href="/signup">
        <Button
          width={{ base: "full", md: "auto" }}
          height="full"
          borderRadius="0"
          fontSize={"lg"}
          fontWeight={500}
          color={"white"}
          bg={"#0065ff"}
          p={"5"}
          _hover={{
            bg: "#0747a6",
          }}
        >
          Get Trello for free
        </Button>
      </Link>
    </>
  );
};

const DesktopNav = () => {
  return (
    <Stack
      display={{ base: "none", md: "flex" }}
      flex={{ base: 1, md: 0 }}
      justify={"flex-end"}
      direction={"row"}
      spacing={"0"}
    >
      <AllLinks />
    </Stack>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
      spacing="5"
      flexDirection={"column-reverse"}
    >
      <AllLinks />
    </Stack>
  );
};
