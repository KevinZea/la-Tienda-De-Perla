import {
    Box,
    Container,
    Heading,
    Text,
    VStack,
    SimpleGrid,
    Flex,
    Icon,
    Button,
    Link,
} from '@chakra-ui/react';
import { FiMapPin, FiClock, FiPhone, FiMail, FiCreditCard } from 'react-icons/fi';

const InfoCard = ({ icon, title, children }) => {
    return (
        <Box
            p={6}
            bg="white"
            borderRadius="lg"
            boxShadow="md"
            height="100%"
            data-aos="fade-up"
        >
            <Flex direction="column" align="flex-start">
                <Flex
                    w={12}
                    h={12}
                    align="center"
                    justify="center"
                    borderRadius="full"
                    bg="brand.primary"
                    color="white"
                    mb={4}
                >
                    <Icon as={icon} boxSize={6} />
                </Flex>
                <Heading size="md" mb={4}>
                    {title}
                </Heading>
                {children}
            </Flex>
        </Box>
    );
};

const Location = () => {
    const phoneNumber = '573025306471';
    const defaultMessage = encodeURIComponent('Hola, me gustaría saber más sobre tus servicios.'); // Codifica el mensaje para URL

    const handleClick = () => {
        // Construye la URL de WhatsApp
        const waUrl = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;
        // Redirecciona al usuario a WhatsApp
        window.open(waUrl, '_blank');
    };
    return (
        <Box id="location" py={20} bg="gray.50">
            <Container maxW="container.xl">
                <VStack spacing={8} mb={16}>
                    <Heading
                        data-aos="fade-up"
                        textAlign="center"
                        fontSize={{ base: '3xl', md: '4xl' }}
                        fontWeight="bold"
                    >
                        Encuéntranos <Text as="span" color="brand.primary">Aquí</Text>
                    </Heading>
                    <Text
                        data-aos="fade-up"
                        data-aos-delay="100"
                        textAlign="center"
                        fontSize="lg"
                        color="gray.600"
                        maxW="container.md"
                    >
                        Visita nuestra tienda física o contáctanos para resolver todas tus dudas y recibir asesoría personalizada.
                    </Text>
                </VStack>

                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} mb={10}>
                    <Box
                        borderRadius="lg"
                        overflow="hidden"
                        boxShadow="md"
                        height={{ base: "300px", md: "100%" }}
                        data-aos="fade-right"
                    >
                        {/* Aquí iría un mapa interactivo, pero usaré una imagen de placeholder para este ejemplo */}
                        <Box
                            as="iframe"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.8131091877175!2d-74.1!3d4.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNMKwMzYnMDAuMCJOIDc0wrAwNicwMC4wIlc!5e0!3m2!1ses!2sco!4v1617555555555!5m2!1ses!2sco"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            fallback={
                                <Box
                                    bg="gray.200"
                                    height="100%"
                                    width="100%"
                                    display="flex"
                                    alignItems="center"
                                    justifyContent="center"
                                >
                                    <Text>Mapa de ubicación</Text>
                                </Box>
                            }
                        />
                    </Box>

                    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
                        <InfoCard icon={FiMapPin} title="Dirección">
                            <Text color="gray.600">
                                Transversal 77 # 47 - 35
                                <br />
                                Local 1 Piso
                                <br />
                                Bogotá, Colombia
                            </Text>
                            <Button
                                mt={4}
                                as="a"
                                href="https://maps.app.goo.gl/X1r7Zn9GH2D3djHk9"
                                target="_blank"
                                rel="noopener noreferrer"
                                leftIcon={<FiMapPin />}
                                size="sm"
                                variant="outline"
                                colorScheme="blue"
                            >
                                Ver en el mapa
                            </Button>
                        </InfoCard>

                        <InfoCard icon={FiClock} title="Horarios">
                            <Text color="gray.600">
                                <strong>Lunes a Sábado:</strong>
                                <br />
                                10:00 am a 8:00 pm
                                <br />
                                <strong>Domingos:</strong>
                                <br />
                                Cerrado
                                <br />
                                <strong>Festivos:</strong>
                                <br />
                                10:00 am a 5:00 pm
                            </Text>
                        </InfoCard>

                        <InfoCard icon={FiPhone} title="Contacto">
                            <Text color="gray.600">
                                <strong>Celular y WhatsApp:</strong>
                                <br />
                                302 530 6471
                                <br />
                                <br />
                                <strong>Email:</strong>
                                <br />
                                info@tiendadeperla.com
                            </Text>
                            <Button
                                mt={4}
                                as="a"
                                href="https://wa.me/573025306471"
                                target="_blank"
                                rel="noopener noreferrer"
                                colorScheme="whatsapp"
                                size="sm"
                            >
                                Contáctanos por WhatsApp
                            </Button>
                        </InfoCard>

                        <InfoCard icon={FiCreditCard} title="Formas de Pago">
                            <Text color="gray.600">
                                <strong>Link por PSE</strong>
                                <br />
                                <strong>Bancolombia Ahorros:</strong>
                                <br />
                                237-000874-17
                                <br />
                                Valentina Martinez
                                <br />
                                <strong>Nequi y Daviplata:</strong>
                                <br />
                                300 339 7516
                            </Text>
                        </InfoCard>
                    </SimpleGrid>
                </SimpleGrid>

                <Box
                    p={6}
                    bg="brand.primary"
                    color="white"
                    borderRadius="lg"
                    boxShadow="md"
                    mt={8}
                    data-aos="fade-up"
                >
                    <Flex direction={{ base: "column", md: "row" }} align="center" justify="space-between" gap={4}>
                        <VStack align={{ base: "center", md: "flex-start" }} spacing={2}>
                            <Heading size="md">¿Listo para ordenar?</Heading>
                            <Text>Realizamos envíos a domicilio en toda Bogotá</Text>
                        </VStack>
                        <Box>
                            <Text fontWeight="medium" mb={2}>Costos de envío:</Text>
                            <Text fontSize="sm" mb={1}>• $0 en entrega en punto físico</Text>
                            <Text fontSize="sm">• $8.000 en Bogotá (entrega de 3 a 5 días hábiles)</Text>
                        </Box>
                        <Button
                            bg="white"
                            color="brand.primary"
                            size="lg"
                            _hover={{ bg: "gray.100" }}
                            onClick={handleClick}
                        >
                            ¡Haz tu pedido ahora!
                        </Button>
                    </Flex>
                </Box>
            </Container>
        </Box>
    );
};

export default Location;
