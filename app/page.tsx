'use client';

import React, { useState, useEffect } from 'react';

import Carousel from "@/components/Carousel/Carousel";
import Navbar from "@/components/Navbar";
import { Box, HStack, Heading, Link } from "@chakra-ui/react";
import { ArrowForwardIcon } from '@chakra-ui/icons'


interface Item{
  img: string;
  price: string;
  text: string;
}


export default function Home() {
  const [types, setTypes] = useState([]);

    useEffect(() => {
        fetch('./data.json', {
            headers:{
                Accept: 'application/json',
            }
        }).then(res => res.json())
        .then(res => setTypes(res))
    }, []);

  return (
    <>
      <Navbar />
      {types.map((item: Item) => {return (
        <Box my={16}>
          <HStack>
            <Heading ml={12}>Lanches</Heading>
            <Link color='teal.600' ml={2} mt={2} href='#'>
              Ver mais
              <ArrowForwardIcon></ArrowForwardIcon>
            </Link>
          </HStack>
          <Carousel />
        </Box>
      )})}
    </>
  );
}
