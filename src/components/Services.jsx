import {
    Box,
    Container,
    Heading,
    SimpleGrid,
    Text,
    VStack,
    Icon,
    Flex,
    useColorModeValue,
} from '@chakra-ui/react';
import { FiShoppingBag, FiTruck, FiCreditCard, FiAward, FiPackage, FiHeart } from 'react-icons/fi';

const ServiceCard = ({ title, description, icon }) => {
    return (
        <VStack
            bg="white"
            p={6}
            borderRadius="lg"
            boxShadow="md"
            align="flex-start"
            spacing={4}
            height="100%"
            data-aos="fade-up"
            transition="transform 0.3s, box-shadow 0.3s"
            _hover={{
                transform: 'translateY(-8px)',
                boxShadow: 'xl',
            }}
        >
            <Flex
                w={12}
                h={12}
                align="center"
                justify="center"
                borderRadius="full"
                bg="brand.primary"
                color="white"
            >
                <Icon as={icon} boxSize={6} />
            </Flex>
            <Heading size="md">{title}</Heading>
            <Text color="gray.600">{description}</Text>
        </VStack>
    );
};

const Services = () => {
    const services = [
        {
            title: 'Productos de Calidad',
            description: 'Ofrecemos solo los mejores productos para tus mascotas, cuidadosamente seleccionados.',
            icon: FiShoppingBag,
        },
        {
            title: 'Envíos a Domicilio',
            description: 'Servicio de entrega en Bogotá en 3-5 días hábiles por solo $8.000.',
            icon: FiTruck,
        },
        {
            title: 'Múltiples Formas de Pago',
            description: 'PSE, Bancolombia, Nequi y Daviplata disponibles para tu comodidad.',
            icon: FiCreditCard,
        },
        {
            title: 'Asesoría Especializada',
            description: 'Te ayudamos a elegir lo mejor para tu mascota según sus necesidades específicas.',
            icon: FiAward,
        },
        {
            title: 'Novedades Constantes',
            description: 'Regularmente actualizamos nuestro catálogo con nuevos productos y promociones.',
            icon: FiPackage,
        },
        {
            title: 'Amor por los Animales',
            description: 'Más que una tienda, somos amantes de las mascotas como tú.',
            icon: FiHeart,
        },
    ];

    return (
        <Box id="services" py={20} bg={useColorModeValue('gray.50', 'gray.900')}>
            <Container maxW="container.xl">
                <VStack spacing={8} mb={16}>
                    <Heading
                        data-aos="fade-up"
                        textAlign="center"
                        fontSize={{ base: '3xl', md: '4xl' }}
                        fontWeight="bold"
                    >
                        Nuestros <Text as="span" color="brand.primary">Servicios</Text>
                    </Heading>
                    <Text
                        data-aos="fade-up"
                        data-aos-delay="100"
                        textAlign="center"
                        fontSize="lg"
                        color="gray.600"
                        maxW="container.md"
                    >
                        En La Tienda de Perla nos esforzamos por brindarte una experiencia excepcional.
                        Conoce todo lo que tenemos para ofrecerte.
                    </Text>
                </VStack>

                <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
                    {services.map((service, index) => (
                        <ServiceCard
                            key={index}
                            title={service.title}
                            description={service.description}
                            icon={service.icon}
                            data-aos-delay={index * 100}
                        />
                    ))}
                </SimpleGrid>
            </Container>
        </Box>
    );
};

export default Services;
