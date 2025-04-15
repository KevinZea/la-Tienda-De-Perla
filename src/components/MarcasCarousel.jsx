import React, { useState, useEffect, useRef } from 'react';
import { Box, Heading, Text, Flex, Image, Container, useBreakpointValue, Icon } from '@chakra-ui/react';
import { keyframes } from '@emotion/react';
import { FaPaw } from 'react-icons/fa';
import { motion } from 'framer-motion';

//images
import superclean from '../assets/super-clean.jpg';
import fancy from '../assets/fancy.png';
import unikat from '../assets/unikat.jpg';
import wowcan from '../assets/wow-can.jpg';
import nutriss from '../assets/nutris.png';
import dogourmet from '../assets/dogourmet.png';
import alpo from '../assets/ALPO.png';
import nutrecan from '../assets/NUTRE-CAN.png';
import monello from '../assets/MONELLO.jpg';
import ringo from '../assets/RINGO.png';
import donkat from '../assets/DONKAT.png';
import ohmaigat from '../assets/OH-MAI-GAT.jpg';
import dalcat from '../assets/DALCAT.jpg';
import gatsy from '../assets/GATSY.jpg';
import catchow from '../assets/CAT-CHOW.png';
import felix from '../assets/FELIX.png';
import dogchow from '../assets/DOG-CHOW.png';
import chunky from '../assets/CHUNKY.png';
import brcat from '../assets/BR-CAT.png';
import calabaza from '../assets/calabaza.jpg';
// Lista de marcas de ejemplo - reemplazar con las marcas reales
const marcas = [
    {
        id: 1,
        nombre: 'Super Clean',
        descripcion: 'Productos de aseo para mascotas',
        logo: superclean
    },
    {
        id: 2,
        nombre: 'Fancy',
        descripcion: 'Alimentación de calidad para perros y gatos',
        logo: fancy
    },
    {
        id: 3,
        nombre: 'Unikat',
        descripcion: 'Arena sanitaria para gatos',
        logo: unikat
    },
    {
        id: 4,
        nombre: 'Wow Can',
        descripcion: 'Alimentos recomendados para perros',
        logo: wowcan
    },
    {
        id: 5,
        nombre: 'Nutriss',
        descripcion: 'Comida Premium para tus mascotas',
        logo: nutriss
    },
    {
        id: 6,
        nombre: 'Dogourmet',
        descripcion: 'Alimentos saludables para perros',
        logo: dogourmet
    },
    {
        id: 7,
        nombre: 'ALPO',
        descripcion: 'Purina para perros y gatos',
        logo: alpo
    },
    {
        id: 8,
        nombre: 'Nutrecan',
        descripcion: 'Comida para perros de excelente calidad',
        logo: nutrecan
    },
    {
        id: 9,
        nombre: 'Monello',
        descripcion: 'Comida Premium para mascotas',
        logo: monello
    },
    {
        id: 10,
        nombre: 'Ringo',
        descripcion: 'Alimentos saludables para perros y gatos',
        logo: ringo
    },
    {
        id: 11,
        nombre: 'DonKat',
        descripcion: 'Purina de calidad para gatos',
        logo: donkat
    },
    {
        id: 12,
        nombre: 'OH MAI GAT',
        descripcion: 'Alimentos saludables para gatos',
        logo: ohmaigat
    },
    {
        id: 13,
        nombre: 'DalCat',
        descripcion: 'Alimentos saludables para gatos',
        logo: dalcat
    },
    {
        id: 14,
        nombre: 'Gatsy',
        descripcion: 'Purina de calidad para gatos',
        logo: gatsy
    },
    {
        id: 15,
        nombre: 'Cat Chow',
        descripcion: 'Purina para gatos',
        logo: catchow
    },
    {
        id: 16,
        nombre: 'Felix',
        descripcion: 'Alimentos saludables para mascotas',
        logo: felix
    },
    {
        id: 17,
        nombre: 'Dog Chow',
        descripcion: 'Purina para perros de alta calidad',
        logo: dogchow
    },
    {
        id: 18,
        nombre: 'Chunky',
        descripcion: 'Alimentos saludables para mascotas',
        logo: chunky
    },
    {
        id: 19,
        nombre: 'BR Cat',
        descripcion: 'Purina para gatos',
        logo: brcat
    },
    {
        id: 20,
        nombre: 'Calabaza',
        descripcion: 'Arena sanitaria para gatos',
        logo: calabaza
    },
];

// Animación de desvanecimiento
const fadeIn = keyframes`
  0% { opacity: 0; transform: translateY(10px); }
  100% { opacity: 1; transform: translateY(0); }
`;

const MarcasCarousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [autoplay, setAutoplay] = useState(true);
    const intervalRef = useRef(null);

    // Valores responsive para mostrar diferentes cantidades de marcas según el tamaño de pantalla
    const slidesToShow = useBreakpointValue({ base: 1, sm: 2, md: 3, lg: 4 });

    // Configurar el intervalo de autoplay
    useEffect(() => {
        if (autoplay) {
            intervalRef.current = setInterval(() => {
                setCurrentSlide((prev) =>
                    prev === Math.ceil(marcas.length - slidesToShow) ? 0 : prev + 1
                );
            }, 3000);
        }

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, [autoplay, slidesToShow]);

    // Pausar el autoplay al interactuar
    const handleMouseEnter = () => setAutoplay(false);
    const handleMouseLeave = () => setAutoplay(true);

    // Función para mostrar el subconjunto actual de marcas
    const visibleMarcas = marcas.slice(
        currentSlide,
        currentSlide + slidesToShow > marcas.length ? marcas.length : currentSlide + slidesToShow
    );

    // Función para navegar manualmente
    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    return (
        <Container maxW="container.xl" py={12}>
            <Flex direction="column" align="center" mb={8}>
                <Icon as={FaPaw} color="brand.primary" w={8} h={8} mb={2} />
                <Heading
                    as="h2"
                    fontSize={{ base: "2xl", md: "3xl" }}
                    fontWeight="bold"
                    color="brand.dark"
                    textAlign="center"
                >
                    Nuestras Marcas Asociadas
                </Heading>
                <Text
                    color="gray.600"
                    fontSize={{ base: "md", md: "lg" }}
                    textAlign="center"
                    maxW="container.md"
                    mt={2}
                >
                    En La Tienda de Perla trabajamos con las mejores marcas para ofrecerte productos de calidad para tu mascota
                </Text>
            </Flex>

            <Box
                position="relative"
                overflow="hidden"
                px={4}
                py={8}
                bg="gray.50"
                borderRadius="xl"
                boxShadow="sm"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <Flex
                    as={motion.div}
                    transition={{ duration: 0.5 }}
                    justify="center"
                    wrap="wrap"
                    gap={8}
                >
                    {visibleMarcas.map((marca, index) => (
                        <Box
                            key={marca.id}
                            as={motion.div}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            bg="white"
                            p={6}
                            borderRadius="lg"
                            boxShadow="md"
                            textAlign="center"
                            width={{ base: "100%", sm: "45%", md: "30%", lg: "22%" }}
                            transform="auto"
                            _hover={{
                                transform: "scale(1.05)",
                                boxShadow: "lg",
                                borderColor: "brand.primary",
                                borderWidth: "2px",
                            }}
                            
                        >
                            <Image
                                src={marca.logo}
                                alt={`Logo de ${marca.nombre}`}
                                mx="auto"
                                mb={4}
                                height="80px"
                                objectFit="contain"
                            />
                            <Heading as="h3" fontSize="xl" mb={2} color="brand.dark">
                                {marca.nombre}
                            </Heading>
                            <Text fontSize="sm" color="gray.600">
                                {marca.descripcion}
                            </Text>
                        </Box>
                    ))}
                </Flex>

                {/* Indicadores de navegación */}
                <Flex justify="center" mt={6}>
                    {Array.from({ length: Math.ceil(marcas.length - slidesToShow) + 1 }).map((_, index) => (
                        <Box
                            key={index}
                            w={2}
                            h={2}
                            mx={1}
                            borderRadius="full"
                            bg={currentSlide === index ? "brand.primary" : "gray.300"}
                            cursor="pointer"
                            onClick={() => goToSlide(index)}
                            transition="background-color 0.3s"
                        />
                    ))}
                </Flex>
            </Box>

            <Text
                textAlign="center"
                fontSize="sm"
                color="gray.500"
                mt={4}
            >
                Todas las marcas son cuidadosamente seleccionadas para garantizar la mejor calidad
            </Text>
        </Container>
    );
};

export default MarcasCarousel;