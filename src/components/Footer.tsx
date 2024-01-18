{/*import { Box, Flex, Text } from '@chakra-ui/react';

const Footer = () => {
    return (
        <Box bg="teal.500" p={4} color="white">
            <Flex justifyContent="center" alignItems="center">
                <Text fontSize="md">© 2024 Arzi. All rights reserved.</Text>
            </Flex>
        </Box>
    );
};

export default Footer;
*/}
import {
    Box,
    Stack,
    HStack,
    Grid,
    VStack,
    Link,
    Flex,
    Divider,
    Image,
    Text,
    Button,
    IconButton,
    LinkProps,
    Center,
  } from '@chakra-ui/react';
  
  // Here we have used react-icons package for the icons
  import { FaGithub } from 'react-icons/fa';
  import { BsDiscord } from 'react-icons/bs';
  
  const Footer = () => {
    return (
      <Box p={{ base: 5, md: 8 }} maxW="5xl" marginInline="auto">
        <Stack
          spacing={{ base: 8, md: 0 }}
          justifyContent="space-between"
          direction={{ base: 'column', md: 'row' }}
        >
      <Box>
      <Flex align="center" mt={{ base: 2, md: 0 }}>
  {/* Consider using a single logo */}
  <Image src='./logooo.png' alt='Arzi' height={35} />
  <Text fontWeight="bold" lineHeight={1} fontSize={35} ml={2}>
    RZI
  </Text>
</Flex>

  {/* Description */}
  <Text mt={2} color="gray.500" fontSize="md">
    Ultimate Consumer support system for your problems
  </Text>

  {/* Grid */}
  <Grid templateColumns="repeat(3, 1fr)" gap={6} mt={4}>
    {/* Your grid content goes here */}
  </Grid>
</Box>




          <HStack
            spacing={4}
            d={{ base: 'none', sm: 'flex' }}
            justifyContent={{ sm: 'space-between', md: 'normal' }}
          >
            <VStack spacing={4} alignItems="flex-start">
              <Text fontSize="md" fontWeight="bold">
               Home
              </Text>
              <VStack spacing={2} alignItems="flex-start" color="gray.500">
                
                <CustomLink>Complaints</CustomLink>
                <CustomLink>Track Complaint</CustomLink>
                <CustomLink>Community</CustomLink>
                <CustomLink>Support</CustomLink>
              </VStack>
            </VStack>
            <VStack spacing={4} alignItems="flex-start">
              <Text fontSize="md" fontWeight="bold">
                Community
              </Text>
              <VStack spacing={2} alignItems="flex-start" color="gray.500">
                <CustomLink>Chat </CustomLink>
                
                <CustomLink>Help</CustomLink>
                <CustomLink>Sign Up</CustomLink>
                <CustomLink>SignIn</CustomLink>
              </VStack>
            </VStack>
            
          </HStack>
        </Stack>
  
        <Divider my={4} />
  
        <Stack direction={{ base: 'column', md: 'row' }} spacing={3} justifyContent="space-between">
            
          <Flex justifyContent="center" alignItems="center">
          <Text fontSize="md">
            Built by{' '}
            <Link
              href="https://github.com/MihirRajeshPanchal/Rubix24_ITerative_bytes.git"
              textDecoration="underline"
              _hover={{ textDecoration: 'underline' }}
              isExternal
            >
             Iteraive Bytes
            </Link>
          </Text>
          </Flex>
          
          <Flex justifyContent="center" alignItems="center">
                <Text fontSize="md">© 2024 Arzi. All rights reserved.</Text>
            </Flex>
        </Stack>
      </Box>
    );
  };
  
  const CustomLink = ({ children, href, ...props }: LinkProps) => {
    return (
      <Link href={href} fontSize="sm" _hover={{ textDecoration: 'underline' }} {...props}>
        {children}
      </Link>
    );
  };
  
  export default Footer;
  