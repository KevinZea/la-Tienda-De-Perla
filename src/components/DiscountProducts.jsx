// =========== components/DiscountProducts.jsx ===========
import {
    Box,
    Container,
    Heading,
    Text,
    SimpleGrid,
    Image,
    Badge,
    Button,
    VStack,
    HStack,
    Icon,
    Flex,
} from '@chakra-ui/react';
import { FiStar, FiShoppingCart, FiClock } from 'react-icons/fi';

import chunky8kg from '../assets/products/chunky8kg.jpg';
import chunky1kg from '../assets/products/chunky1kg.jpg';
import donkat from '../assets/products/donkat.jpg';
import chunkypequeño from '../assets/products/chunkypequeño.jpg';
import ohmaigat from '../assets/products/oh-mai-gat.jpg';

const DiscountCard = ({ product }) => {
    const discountPercentage = Math.round(
        ((product.oldPrice - product.price) / product.oldPrice) * 100
    );

    return (
        <Box
            bg="white"
            borderRadius="lg"
            overflow="hidden"
            boxShadow="md"
            position="relative"
            transition="transform 0.3s, box-shadow 0.3s"
            _hover={{
                transform: 'translateY(-8px)',
                boxShadow: 'xl',
            }}
            data-aos="fade-up"
        >
            <Badge
                position="absolute"
                top="10px"
                left="10px"
                bg="red.500"
                color="white"
                borderRadius="full"
                px={3}
                py={1}
                fontSize="md"
                fontWeight="bold"
                zIndex={1}
            >
                -{discountPercentage}%
            </Badge>

            <Image
                src={product.image}
                alt={product.name}
                w="100%"
                h="220px"
                objectFit="cover"
            />

            <VStack p={4} align="flex-start" spacing={3}>
                <Heading size="md" noOfLines={1}>
                    {product.name}
                </Heading>

                <HStack spacing={1}>
                    {Array(product.rating)  
                        .fill('')
                        .map((_, i) => (
                            <Icon
                                key={i}
                                as={FiStar}
                                color={i < product.rating ? 'yellow.400' : 'gray.300'}
                                fontSize="sm"
                            />
                        ))}
                </HStack>

                <Text color="gray.600"  fontSize="sm">
                    {product.description}
                </Text>

                <HStack justify="space-between" w="100%" pt={2}>
                    <VStack align="flex-start" spacing={0}>
                        <HStack align="center">
                            <Text fontWeight="bold" fontSize="xl" color="red.500">
                                ${product.price.toLocaleString()}
                            </Text>
                            <Text as="s" fontSize="sm" color="gray.500">
                                ${product.oldPrice.toLocaleString()}
                            </Text>
                        </HStack>
                    </VStack>

                    {/* <Button
                        variant="primary"
                        bg="red.500"
                        rounded="full"
                        size="sm"
                        rightIcon={<FiShoppingCart />}
                        _hover={{ bg: 'red.600' }}
                    >
                        Comprar
                    </Button> */}
                </HStack>
            </VStack>
        </Box>
    );
};

const DiscountProducts = () => {
    const discountProducts = [
        {
            id: 1,
            name: 'Chunky Gatos Adultos 8 Kg',
            description: 'Concentrado para gatos adultos de 8 kg, ideal para mantener la salud y el bienestar de tu gato, con sabores de Salmón y Cordero.',
            price: 99000,
            oldPrice: 110000,
            image: chunky8kg,
            rating: 5,
        },
        {
            id: 2,
            name: 'Chunky Gatos 1.5 kg',
            description: 'Concentrado para gatos adultos de 1.5 kg, ideal para mantener la salud y el bienestar de tu gato, con sabores de Salmón y Cordero.',
            price: 22000,
            oldPrice: 25000,
            image: chunky1kg,
            rating: 5,
        },
        {
            id: 3,
            name: 'Don Kat 7kg',
            description: 'Purina de calidad para gatos adultos de 7kg, ideal para mantener la salud y el bienestar de tu gato.',
            price: 68000,
            oldPrice: 75000,
            image: donkat,
            rating: 5,
        },
        {
            id: 4,
            name: 'Chunky razas pequeñas 8kg',
            description: 'Concentrado para perros pequeños, ideal para mantener la salud y el bienestar de tu mascota.',
            price: 64800,
            oldPrice: 72000,
            image: chunkypequeño,
            rating: 5,
        },
        {
            id: 5,
            name: 'Oh Mai Gat Caseros 8kg',
            description: 'Concentrado para gatos adultos de 8kg, ideal para mantener la salud y el bienestar de tu gato.',
            price: 110000,
            oldPrice: 123000,
            image: ohmaigat,
            rating: 5,
        },
        
    ];

    return (
        <Box py={20} bg="gray.50">
            <Container maxW="container.xl">
                <VStack spacing={3} mb={6}>
                    <Badge
                        py={2}
                        px={4}
                        borderRadius="full"
                        bg="red.500"
                        color="white"
                        fontSize="md"
                        fontWeight="medium"
                        data-aos="fade-up"
                    >
                        Ofertas Limitadas
                    </Badge>
                    <Heading
                        data-aos="fade-up"
                        data-aos-delay="100"
                        textAlign="center"
                        fontSize={{ base: '3xl', md: '4xl' }}
                        fontWeight="bold"
                    >
                        Productos con <Text as="span" color="red.500">Descuento</Text>
                    </Heading>
                    <Text
                        data-aos="fade-up"
                        data-aos-delay="200"
                        textAlign="center"
                        fontSize="lg"
                        color="gray.600"
                        maxW="container.md"
                    >
                        ¡Aprovecha estas ofertas por tiempo limitado y ahorra en tus compras!
                    </Text>

                    <Flex
                        align="center"
                        p={4}
                        bg="white"
                        borderRadius="lg"
                        shadow="md"
                        mt={4}
                        data-aos="fade-up"
                        data-aos-delay="300"
                    >
                        <Box
                            p={2}
                            bg="red.500"
                            borderRadius="full"
                            color="white"
                            mr={4}
                        >
                            <FiClock size={24} />
                        </Box>
                        <Text fontWeight="medium">¡Ofertas válidas hasta agotar existencias!</Text>
                    </Flex>
                </VStack>

                <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} mt={10}>
                    {discountProducts.map((product, index) => (
                        <DiscountCard
                            key={product.id}
                            product={product}
                            data-aos-delay={index * 100}
                        />
                    ))}
                </SimpleGrid>

                <Box textAlign="center" mt={12}>
                    {/* <Button
                        variant="outline"
                        size="lg"
                        color="red.500"
                        borderColor="red.500"
                        _hover={{ bg: 'red.500', color: 'white' }}
                        data-aos="fade-up"
                    >
                        Ver todas las ofertas
                    </Button> */}
                </Box>
            </Container>
        </Box>
    );
};

export default DiscountProducts;