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
import arena4 from '../assets/products/arena-de-calabaza4.jpg';
import arena10 from '../assets/products/arena-de-calabaza10.jpg';
import brgato from '../assets/products/BR-GATO.jpg';
import ringoadulto from '../assets/products/ringo-adulto.webp';
import ringocachorro from '../assets/products/ringo-cachorro.jpg';
import felixcomidahumeda from '../assets/products/felix-comida-humeda.jpg';
import felixadulto from '../assets/products/felix-adulto.jpg';
import arenamaiz from '../assets/products/arena-de-maiz.jpg';
import unikatarena from '../assets/products/unikat-arena.jpg';
import pecesfindesemana from '../assets/products/peces-fin-de-semana.jpg';
import incros from '../assets/products/incros.jpg';
import ocelatus from '../assets/products/ocelatus.jpg';
import spanky from '../assets/products/spanky.jpg';
import whiskas from '../assets/products/whiskas.jpg';
import chunky from '../assets/products/chunky.jpg';
import wowcat from '../assets/products/wow-cat.jpg';
import alpiste from '../assets/products/alpiste.jpg';
import mixtura from '../assets/products/mixtura.jpg';

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

                <Text color="gray.600" fontSize="sm" whiteSpace={"pre-wrap"}>
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
            name: 'ARENA CALABAZA 4.5 kg',
            description: `Arena de calabaza de alta calidad para tus mascotas`,
            price: 15000,
            image: arena4,
            rating: 5,
            isNew: false,
        },
        {
            id: 2,
            name: 'ARENA CALABAZA 10 kg',
            description: 'Arena de calabaza de alta calidad para tus mascotas',
            price: 30000,
            image: arena10,
            rating: 5,
            isNew: true,
        },
        {
            id: 3,
            name: 'BR gato castrado 1 kg',
            description: 'Br gato castrado de alta calidad para tus mascotas',
            price: 27000,
            image: brgato,
            rating: 5,
            isNew: true,
        },
        {
            id: 4,
            name: 'BR gato adulto 1 kg',
            description: 'Br gato adulto de alta calidad para tus mascotas',
            price: 29000,
            image: brgato,
            rating: 5,
            isNew: true,
        },
        {
            id: 5,
            name: 'Ringo adulto 1 kg',
            description: `Ringo adulto de alta calidad para tus mascotas
Precios:
1 kg: 6.500 
2 kg :13.000
20 kg:109.000
30 kg :158.000
            `,
            price: 6500,
            image: ringoadulto,
            rating: 5,
            isNew: true,
        },
        {
            id: 6,
            name: 'Ringo cachorro 1 kg',
            description: `Ringo cachorro de alta calidad para tus mascotas
Precios:
1 kg 7.500
2 kg 15.000
15 kg 86.000
30 kg 163.000
            `,
            price: 7500,
            image: ringocachorro,
            rating: 5,
            isNew: true,
        },
        {
            id: 7,
            name: 'Ringo Premium 1 kg',
            description: `Ringo Premium de alta calidad para tus mascotas
Precios:
1 kg 7.000
2 kg 14.000
20 kg 120.000
30 kg 175.000
            `,
            price: 7000,
            image: ringoadulto,
            rating: 5,
            isNew: true,
        },
        {
            id: 8,
            name: 'Felix comida humeda',
            description: 'Felix comida humeda para tus mascotas sabor carne, pavo, pescado blanco, atun salmon',
            price: 3200,
            image: felixcomidahumeda,
            rating: 5,
            isNew: true,
        },
        {
            id: 9,
            name: 'Felix Adulto 200 gr',
            description: `Felix para mascotas adultas
Precios:
200 gr 3.600
1.5 kg 30.000
10 kg  147.000

            `,
            price: 3600,
            image: felixadulto,
            rating: 5,
            isNew: true,
        },
        //news
        {
            id: 10,
            name: 'Arena de maiz 4 kg',
            description: `Arena sanitaria de maíz para gatos, ecológica, biodegradable, composble, se puede deshacer por el sanitario,
Exelente absorción y compactación, Rinde hasta el doble de la arena convencional, Muy buen control de olores, Hipoalergénica,
su textura cuida las patitas de los gatos, No es tóxica.`,
            price: 24000,
            image: arenamaiz,
            rating: 5,
            isNew: true,
        },
        {
            id: 11,
            name: 'Arena unikat',
            description: `900 g: 5.000 
4 kg : 18.000 
18 kg: 74.000 `,
            price: 18000,
            image: unikatarena,
            rating: 5,
            isNew: true,
        },
        {
            id: 12,
            name: 'peces fin de semana',
            description: `Suplemento alimenticio para toda clase de peces ornamentales.`,
            price: 9700,
            image: pecesfindesemana,
            rating: 5,
            isNew: true,
        },
        {
            id: 13,
            name: 'incros 14 gramos',
            description: `Esta comida para peces es un alimento completo, balanceado, alto en proteína, carbohidratos, aminoácidos, vitaminas y minerales.`,
            price: 4000,
            image: incros,
            rating: 5,
            isNew: true,
        },
        {
            id: 14,
            name: 'ocelatus 20 gr',
            description: `Es ideal para peces ornamentales tropicales y de agua fría en todas sus etapas de desarrollo.
ocelatus 100 gr 13.600
            `,
            price: 3000,
            image: ocelatus,
            rating: 5,
            isNew: true,
        },
        {
            id: 15,
            name: 'MR. spanky 4 kg',
            description: `Con 30% más de fragancia y una fórmula aglomerante 
1 kg:4.300 
4 kg: 15.700 
9 kg: 34.000 
15 kg: 55.700 
25 kg:82.000`,
            price: 15700,
            image: spanky,
            rating: 5,
            isNew: true,
        },
        {
            id: 16,
            name: 'Whiskas',
            description: `Whiskas alimento húmedo para gato`,
            price: 3500,
            image: whiskas,
            rating: 5,
            isNew: true,
        },
        {
            id: 17,
            name: ' Chunky gatos',
            description: `Comida Húmeda Chunky Pouch Delicat por 80 gr`,
            price: 3500,
            image: chunky,
            rating: 5,
            isNew: true,
        },
        {
            id: 18,
            name: 'Wow cat',
            description: `Comida WOW CAN Gato sabor a Salmón, Pollo y Ternera por 100 g Vapor.`,
            price: 4000,
            image: wowcat,
            rating: 5,
            isNew: true,
        },
        {
            id: 19,
            name: 'Alpiste',
            description: `460 gr`,
            price: 3400,
            image: alpiste,
            rating: 5,
            isNew: true,
        },
        {
            id: 20,
            name: 'Mixtura',
            description: '460 gr',
            price: 2900,
            image: mixtura,
            rating: 5,
            isNew: true,
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
