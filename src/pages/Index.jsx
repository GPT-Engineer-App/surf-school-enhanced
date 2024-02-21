import React from "react";
import { Box, Button, Container, Heading, Image, Input, Link, Stack, Text, Textarea, IconButton, useColorMode, HStack, VStack, SimpleGrid, AspectRatio } from "@chakra-ui/react";
import { FaSun, FaMoon, FaInstagram, FaFacebook, FaTwitter, FaYoutube, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";

const Index = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Container maxW="container.xl" p={4}>
      <Stack spacing={4} as="header">
        <HStack justifyContent="space-between">
          <Heading as="h1">Ecuadorian Surf School</Heading>
          <IconButton icon={colorMode === "light" ? <FaMoon /> : <FaSun />} onClick={toggleColorMode} isRound aria-label={`Switch to ${colorMode === "light" ? "dark" : "light"} mode`} />
        </HStack>
        <Text>Welcome to the premier surfing destination in Ecuador!</Text>
      </Stack>

      <Stack spacing={8} my={8} as="main">
        <Box as="section">
          <Heading as="h2" size="lg">
            Interactive Surf Spot Map
          </Heading>
          {/* This would be an iframe or similar embed of a map application */}
          <AspectRatio ratio={16 / 9}>
            <iframe title="Surf Spot Map" src="https://maps.app.goo.gl/SecyCdXSg6dJqZAT9" allowFullScreen />
          </AspectRatio>
        </Box>

        <Box as="section">
          <Heading as="h2" size="lg">
            Real-time Weather and Surf Conditions
          </Heading>
          {/* Placeholder for widget */}
          <Box p={4} borderWidth="1px" borderRadius="md">
            <Text>Widget placeholder - real-time data to be integrated here.</Text>
          </Box>
        </Box>

        <Box as="section">
          <Heading as="h2" size="lg">
            Photo & Video Contest
          </Heading>
          <Text>Join our photo and video contest and win exciting prizes!</Text>
          {/* Placeholder for contest form or gallery */}
          <Box p={4} borderWidth="1px" borderRadius="md">
            <Text>Contest form/gallery placeholder.</Text>
          </Box>
        </Box>

        <Box as="section">
          <Heading as="h2" size="lg">
            Follow Us on Social Media
          </Heading>
          <HStack>
            <IconButton as={Link} href="https://instagram.com" isRound icon={<FaInstagram />} aria-label="Instagram" />
            <IconButton as={Link} href="https://facebook.com" isRound icon={<FaFacebook />} aria-label="Facebook" />
            <IconButton as={Link} href="https://twitter.com" isRound icon={<FaTwitter />} aria-label="Twitter" />
            <IconButton as={Link} href="https://youtube.com" isRound icon={<FaYoutube />} aria-label="YouTube" />
          </HStack>
        </Box>

        <Box as="section">
          <Heading as="h2" size="lg">
            Contact Us
          </Heading>
          <VStack spacing={4} align="flex-start">
            <Input placeholder="Your Name" />
            <Input placeholder="Your Email" />
            <Textarea placeholder="Your Message" />
            <Button leftIcon={<IoIosSend />} colorScheme="blue">
              Send Message
            </Button>
            <Button as={Link} href="https://wa.me/336000000" leftIcon={<FaWhatsapp />} colorScheme="whatsapp">
              Message us on WhatsApp
            </Button>
          </VStack>
        </Box>

        <Box as="section">
          <Heading as="h2" size="lg">
            Find Us
          </Heading>
          {/* Google Maps link for the location */}
          <Button as={Link} href="https://maps.app.goo.gl/SecyCdXSg6dJqZAT9" leftIcon={<FaMapMarkerAlt />} colorScheme="orange">
            Open in Google Maps
          </Button>
        </Box>
      </Stack>

      {/* Images for multilingual support, replace with actual flags or language toggles */}
      <SimpleGrid columns={2} spacing={4} as="footer">
        <Box>
          <Image src="https://images.unsplash.com/photo-1566232392379-afd9298e6a46?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzcGFuaXNoJTIwZmxhZ3xlbnwwfHx8fDE3MDg1MzU1NzR8MA&ixlib=rb-4.0.3&q=80&w=1080" />
          <Text>Español</Text>
        </Box>
        <Box>
          <Image src="https://images.unsplash.com/photo-1455540904194-fc101941273a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxlbmdsaXNoJTIwZmxhZ3xlbnwwfHx8fDE3MDg1MzU1NzR8MA&ixlib=rb-4.0.3&q=80&w=1080" />
          <Text>English</Text>
        </Box>
      </SimpleGrid>
    </Container>
  );
};

export default Index;
