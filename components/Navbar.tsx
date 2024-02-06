"use client";

import { Icon, Box, Center, Input, InputGroup, InputRightElement, Tooltip } from "@chakra-ui/react";
import { SearchIcon, HamburgerIcon } from '@chakra-ui/icons';

export default function Navbar() {
  return (
    <Box bg='orange' w='100%' p={4} color='white' opacity='70%' boxShadow='md'>
        <Box w={"100%"} borderRadius='md'>
            <Box pos="absolute" left="1">
                <Tooltip label='Alternar menu' placement='auto' openDelay={300}>
                    <HamburgerIcon ml={3} h="2rem" w="2rem"/>
                </Tooltip>
            </Box>

            <Box pos="absolute" right="1">
                <Tooltip label='Conta' placement='auto' openDelay={300}>
                    <Icon viewBox='0 0 200 200' color='gray.100' w="2.3rem" h="2.3rem">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                    </Icon>
                </Tooltip>
                <Tooltip label='Seus pedidos' placement='auto' openDelay={300}>
                    <Icon viewBox='0 0 200 200' color='gray.100' w="2.3rem" h="2.3rem" mx={3}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                        </svg>
                    </Icon>
                </Tooltip>
            </Box>

            <Center>
                <Center w={["100%", "95%", "65%", "60%", "50%"]} mt={["60px", "3.6rem", "0%", "0%", "0%"]} bg='white' borderRadius='md'>
                    <InputGroup>
                        <Input variant='filled' color='black' placeholder='O que você procura?' className="placeholder:italic" />
                        <InputRightElement>
                            <SearchIcon color='black'/>
                        </InputRightElement>
                    </InputGroup>
                </Center>
            </Center>
        </Box>
    </Box>
  );
}
