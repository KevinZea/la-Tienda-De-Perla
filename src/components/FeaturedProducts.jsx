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
    useColorModeValue,
} from '@chakra-ui/react';
import { FiStar, FiShoppingCart } from 'react-icons/fi';

const ProductCard = ({ product }) => {
    return (
        <Box
            bg="white"
            borderRadius="lg"
            overflow="hidden"
            boxShadow="md"
            transition="transform 0.3s, box-shadow 0.3s"
            _hover={{
                transform: 'translateY(-8px)',
                boxShadow: 'xl',
            }}
            data-aos="fade-up"
        >
            <Box position="relative">
                <Image
                    src={product.image}
                    alt={product.name}
                    w="100%"
                    h="220px"
                    objectFit="cover"
                />
                {product.isNew && (
                    <Badge
                        position="absolute"
                        top="10px"
                        right="10px"
                        bg="brand.primary"
                        color="white"
                        borderRadius="full"
                        px={2}
                        py={1}
                        fontSize="xs"
                    >
                        Nuevo
                    </Badge>
                )}
            </Box>

            <VStack p={4} align="flex-start" spacing={3}>
                <Heading size="md" noOfLines={1}>
                    {product.name}
                </Heading>

                <HStack spacing={1}>
                    {Array(5)
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

                <Text color="gray.600" noOfLines={2} fontSize="sm">
                    {product.description}
                </Text>

                <HStack justify="space-between" w="100%" pt={2}>
                    <VStack align="flex-start" spacing={0}>
                        <Text fontWeight="bold" fontSize="xl" color="brand.primary">
                            ${product.price.toLocaleString()}
                        </Text>
                        {product.oldPrice && (
                            <Text as="s" fontSize="sm" color="gray.500">
                                ${product.oldPrice.toLocaleString()}
                            </Text>
                        )}
                    </VStack>

                    {/* <Button
                        variant="primary"
                        rounded="full"
                        size="sm"
                        rightIcon={<FiShoppingCart />}
                    >
                        Añadir
                    </Button> */}
                </HStack>
            </VStack>
        </Box>
    );
};

const FeaturedProducts = () => {
    const featuredProducts = [
        {
            id: 1,
            name: 'Premium Dog Food',
            description: 'Comida premium para perros con ingredientes naturales y alto valor nutricional',
            price: 65000,
            image: 'https://placehold.co/300x300?text=Dog+Food',
            rating: 5,
            isNew: true,
        },
        {
            id: 2,
            name: 'Cama Ortopédica',
            description: 'Cama ortopédica para mascotas con espuma de memoria y forro lavable',
            price: 120000,
            image: 'https://placehold.co/300x300?text=Pet+Bed',
            rating: 4,
        },
        {
            id: 3,
            name: 'Juguete Interactivo',
            description: 'Juguete interactivo que estimula la mente de tu mascota y libera estrés',
            price: 45000,
            image: 'https://placehold.co/300x300?text=Interactive+Toy',
            rating: 5,
            isNew: true,
        },
        {
            id: 4,
            name: 'Kit de Aseo',
            description: 'Kit completo de aseo para mantener a tu mascota limpia y saludable',
            price: 78000,
            image: 'https://placehold.co/300x300?text=Grooming+Kit',
            rating: 4,
        },
    ];

    return (
        <Box id="products" py={20}>
            <Container maxW="container.xl">
                <VStack spacing={8} mb={16}>
                    <Heading
                        data-aos="fade-up"
                        textAlign="center"
                        fontSize={{ base: '3xl', md: '4xl' }}
                        fontWeight="bold"
                    >
                        Productos <Text as="span" color="brand.primary">Destacados</Text>
                    </Heading>
                    <Text
                        data-aos="fade-up"
                        data-aos-delay="100"
                        textAlign="center"
                        fontSize="lg"
                        color="gray.600"
                        maxW="container.md"
                    >
                        Descubre nuestra selección de productos premium para consentir a tu compañero peludo.
                    </Text>
                </VStack>

                <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8}>
                    {featuredProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </SimpleGrid>

                {/* <Box textAlign="center" mt={12}>
                    <Button
                        variant="outline"
                        size="lg"
                        color="brand.primary"
                        borderColor="brand.primary"
                        _hover={{ bg: 'brand.primary', color: 'white' }}
                        data-aos="fade-up"
                    >
                        Ver todos los productos
                    </Button>
                </Box> */}
            </Container>
        </Box>
    );
};

export default FeaturedProducts;
