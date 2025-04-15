import {
    Box,
    Container,
    Heading,
    Text,
    SimpleGrid,
    Image,
    VStack,
    Flex,
    IconButton,
    useBreakpointValue,
} from '@chakra-ui/react';
import { useState } from 'react';
import { FiChevronLeft, FiChevronRight, FiMaximize } from 'react-icons/fi';
import local from '../assets/local.jpeg';
import productos from '../assets/productos-excibidos.jpeg';
import juguetes from '../assets/juguetes.jpeg';
import aseo from '../assets/productos-aseo.jpeg';
import comedores from '../assets/comedores.jpeg';

const Gallery = () => {
    const [currentImage, setCurrentImage] = useState(null);

    const galleryImages = [
        {
            id: 1,
            src: local,
            alt: 'Interior de la Tienda de Perla',
            caption: 'Nuestro acogedor local',
        },
        {
            id: 2,
            src: productos,
            alt: 'Exhibición de productos',
            caption: 'Gran variedad de productos',
        },
        {
            id: 3,
            src: juguetes,
            alt: 'Juguetes para mascotas',
            caption: 'Juguetes de alta calidad',
        },
        {
            id: 4,
            src: aseo,
            alt: 'Productos de aseo para mascotas',
            caption: 'Productos de aseo para mascotas',
        },
        {
            id: 5,
            src: comedores,
            alt: 'Accesorios premium para mascotas',
            caption: 'Accesorios de alta calidad',
        },
    ];

    const columns = useBreakpointValue({ base: 1, sm: 2, md: 3 });

    const openLightbox = (image) => {
        setCurrentImage(image);
    };

    const closeLightbox = () => {
        setCurrentImage(null);
    };

    const nextImage = () => {
        const currentIndex = galleryImages.findIndex(img => img.id === currentImage.id);
        const nextIndex = (currentIndex + 1) % galleryImages.length;
        setCurrentImage(galleryImages[nextIndex]);
    };

    const prevImage = () => {
        const currentIndex = galleryImages.findIndex(img => img.id === currentImage.id);
        const prevIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
        setCurrentImage(galleryImages[prevIndex]);
    };

    return (
        <Box id="gallery" py={20}>
            <Container maxW="container.xl">
                <VStack spacing={8} mb={16}>
                    <Heading
                        data-aos="fade-up"
                        textAlign="center"
                        fontSize={{ base: '3xl', md: '4xl' }}
                        fontWeight="bold"
                    >
                        Nuestra <Text as="span" color="brand.primary">Galería</Text>
                    </Heading>
                    <Text
                        data-aos="fade-up"
                        data-aos-delay="100"
                        textAlign="center"
                        fontSize="lg"
                        color="gray.600"
                        maxW="container.md"
                    >
                        Echa un vistazo a nuestro espacio, productos y momentos especiales con nuestros clientes peludos.
                    </Text>
                </VStack>

                <SimpleGrid columns={columns} spacing={6}>
                    {galleryImages.map((image, index) => (
                        <Box
                            key={image.id}
                            position="relative"
                            overflow="hidden"
                            borderRadius="lg"
                            boxShadow="md"
                            cursor="pointer"
                            onClick={() => openLightbox(image)}
                            transition="transform 0.3s"
                            _hover={{ transform: 'scale(1.03)' }}
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            <Image
                                src={image.src}
                                alt={image.alt}
                                w="100%"
                                h="250px"
                                objectFit="cover"
                            />
                            <Box
                                position="absolute"
                                bottom="0"
                                left="0"
                                right="0"
                                p={4}
                                bg="rgba(0, 0, 0, 0.7)"
                                color="white"
                            >
                                <Text fontSize="sm" fontWeight="medium">
                                    {image.caption}
                                </Text>
                            </Box>
                            <Flex
                                position="absolute"
                                top="0"
                                left="0"
                                right="0"
                                bottom="0"
                                bg="rgba(0, 0, 0, 0.2)"
                                opacity="0"
                                justifyContent="center"
                                alignItems="center"
                                transition="opacity 0.3s"
                                _hover={{ opacity: 1 }}
                            >
                                <IconButton
                                    aria-label="Ver imagen"
                                    icon={<FiMaximize />}
                                    size="lg"
                                    variant="ghost"
                                    color="white"
                                    _hover={{ bg: 'transparent' }}
                                />
                            </Flex>
                        </Box>
                    ))}
                </SimpleGrid>
            </Container>

            {/* Lightbox */}
            {currentImage && (
                <Box
                    position="fixed"
                    top="0"
                    left="0"
                    right="0"
                    bottom="0"
                    bg="rgba(0, 0, 0, 0.9)"
                    zIndex={1000}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    onClick={closeLightbox}
                >
                    <IconButton
                        aria-label="Imagen anterior"
                        icon={<FiChevronLeft size={30} />}
                        position="absolute"
                        left="20px"
                        top="50%"
                        transform="translateY(-50%)"
                        bg="transparent"
                        color="white"
                        size="lg"
                        onClick={(e) => {
                            e.stopPropagation();
                            prevImage();
                        }}
                        _hover={{ bg: 'rgba(255, 255, 255, 0.1)' }}
                    />

                    <Image
                        src={currentImage.src}
                        alt={currentImage.alt}
                        maxH="90vh"
                        maxW="90vw"
                        objectFit="contain"
                        onClick={(e) => e.stopPropagation()}
                    />

                    <IconButton
                        aria-label="Siguiente imagen"
                        icon={<FiChevronRight size={30} />}
                        position="absolute"
                        right="20px"
                        top="50%"
                        transform="translateY(-50%)"
                        bg="transparent"
                        color="white"
                        size="lg"
                        onClick={(e) => {
                            e.stopPropagation();
                            nextImage();
                        }}
                        _hover={{ bg: 'rgba(255, 255, 255, 0.1)' }}
                    />

                    <Text
                        position="absolute"
                        bottom="20px"
                        color="white"
                        fontWeight="medium"
                        fontSize="lg"
                    >
                        {currentImage.caption}
                    </Text>
                </Box>
            )}
        </Box>
    );
};

export default Gallery;
