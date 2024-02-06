import { Box, Card, CardBody, Heading, Image, Skeleton, Text } from "@chakra-ui/react";

export default function ItemCard({
    text,
    img,
    price
}: {
    text: string,
    img: string,
    price: string
}) {
    return (
        <Card variant='filled' boxShadow='sm' height='17rem' maxW='300px' cursor='pointer' borderRadius="3xl">
            <CardBody pos='relative'>
                <Skeleton pos='relative' isLoaded={true} pt={4}>
                    <Text
                        pos="absolute"
                        m='2'
                        top={-1.5}
                        right={-3}
                        color='green.500'
                        className="rotate-[17deg]"
                        fontWeight='extrabold'
                        fontSize={['xl', '26']}
                        bgGradient='linear(to-r, #FFAE42, red 80%)'
                        bgClip='text'
                    >
                        R${price}
                    </Text>
                    <Image
                        src={img}
                        alt='Something incrible'
                        borderRadius='lg'
                        mt={4}
                    />
                </Skeleton >
                <Box pos='absolute' w='full' left={0} bottom={3}>
                    <Skeleton m='3' isLoaded={true}>
                        <Heading textAlign={'center'} fontSize='20'>{text}</Heading>
                    </Skeleton>
                </Box>
            </CardBody>
        </Card>
    )
}