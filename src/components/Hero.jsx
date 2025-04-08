import {
    Box,
    Button,
    Container,
    Flex,
    Heading,
    Text,
    VStack,
    Badge,
    Link,
} from '@chakra-ui/react';
import { FiArrowRight, FiClock } from 'react-icons/fi';
import { Link as ScrollLink } from 'react-scroll';
import { useEffect, useRef } from 'react';

const Hero = () => {
    const videoRef = useRef(null);

    // Aseguramos que el video se reproduce automáticamente cuando el componente se monta
    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.play().catch(err => {
                console.log("Autoplay was prevented:", err);
                // Muchos navegadores requieren interacción del usuario para reproducir videos con sonido
            });
        }
    }, []);

    return (
        <Box
            id="home"
            bg="linear-gradient(to right, #F9F9F9, #FFFFFF)"
            py={{ base: 12, md: 20 }}
            overflow="hidden"
        >
            <Container maxW="container.xl">
                <Flex
                    direction={{ base: 'column', md: 'row' }}
                    align="center"
                    justify="space-between"
                    gap={8}
                >
                    <VStack
                        align="flex-start"
                        spacing={6}
                        maxW={{ base: 'full', md: '50%' }}
                        data-aos="fade-right"
                    >
                        <Badge
                            px={3}
                            py={1}
                            bg="brand.secondary"
                            color="brand.dark"
                            borderRadius="full"
                        >
                            Tu tienda de mascotas favorita
                        </Badge>

                        <Heading
                            size="2xl"
                            fontWeight="bold"
                            lineHeight="1.2"
                        >
                            Todo lo que tu mascota necesita en{' '}
                            <Text as="span" color="brand.primary">
                                un solo lugar
                            </Text>
                        </Heading>

                        <Text fontSize="lg" color="gray.600">
                            En La Tienda de Perla encontrarás los mejores productos y servicios para tus compañeros peludos. ¡Les damos el cuidado especial que merecen!
                        </Text>

                        <Flex
                            direction={{ base: 'column', sm: 'row' }}
                            gap={4}
                            width={{ base: 'full', sm: 'auto' }}
                        >
                            <Link to={"products"} as={ScrollLink}>
                                <Button
                                    variant="primary"
                                    size="lg"
                                    rightIcon={<FiArrowRight />}
                                >
                                    Explorar productos
                                </Button>
                            </Link>
                            <Link to={"services"} as={ScrollLink}>
                                <Button
                                    variant="outline"
                                    size="lg"
                                    borderColor="brand.primary"
                                    color="brand.primary"
                                    _hover={{ bg: 'brand.primary', color: 'white' }}
                                >
                                    Servicios
                                </Button>
                            </Link>
                        </Flex>

                        <Flex
                            align="center"
                            p={4}
                            bg="white"
                            borderRadius="lg"
                            shadow="md"
                            mt={4}
                        >
                            <Box
                                p={2}
                                bg="brand.primary"
                                borderRadius="full"
                                color="white"
                                mr={4}
                            >
                                <FiClock size={24} />
                            </Box>
                            <Box>
                                <Text fontWeight="medium">Horario de atención</Text>
                                <Text fontSize="sm" color="gray.600">
                                    Lunes a Sábado: 10:00 am a 8:00 pm <br />
                                    Festivos: 10:00 am a 5:00 pm
                                </Text>
                            </Box>
                        </Flex>
                    </VStack>

                    <Box
                        position="relative"
                        data-aos="fade-up"
                        data-aos-delay="200"
                        width={{ base: "100%", md: "500px" }}
                        height={{ base: "auto", md: "500px" }}
                    >
                        <Box
                            position="absolute"
                            width="300px"
                            height="300px"
                            bg="brand.accent"
                            borderRadius="full"
                            filter="blur(40px)"
                            opacity="0.6"
                            zIndex={1}
                            transform="translate(-50px, -50px)"
                        />
                        <Box
                            position="relative"
                            zIndex={2}
                            width="100%"
                            height="100%"
                            overflow="hidden"
                            borderRadius="xl"
                        >
                            <video
                                ref={videoRef}
                                autoPlay
                                loop
                                muted
                                playsInline
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                }}
                            >
                                <source src="/src/assets/mascota-video.mp4" type="video/mp4" />
                                Tu navegador no soporta videos HTML5.
                            </video>
                        </Box>
                    </Box>
                </Flex>
            </Container>
        </Box>
    );
};

export default Hero;