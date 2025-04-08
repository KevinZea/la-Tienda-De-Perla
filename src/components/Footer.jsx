import {
    Box,
    Container,
    Flex,
    SimpleGrid,
    Stack,
    Text,
    Link,
    Heading,
    Button,
    Input,
    FormControl,
    Image,
    HStack,
    Icon,
    Divider,
    useColorModeValue,
} from '@chakra-ui/react';
import {
    FiInstagram,
    FiFacebook,
    FiTwitter,
    FiYoutube,
    FiMapPin,
    FiPhone,
    FiMail,
    FiClock,
    FiSend
} from 'react-icons/fi';

const SocialButton = ({ children, label, href }) => {
    return (
        <Button
            bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
            rounded={'full'}
            w={10}
            h={10}
            cursor={'pointer'}
            as={'a'}
            href={href}
            display={'inline-flex'}
            alignItems={'center'}
            justifyContent={'center'}
            transition={'background 0.3s ease'}
            _hover={{
                bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
            }}
        >
            {children}
        </Button>
    );
};

const ListHeader = ({ children }) => {
    return (
        <Text fontWeight={'bold'} fontSize={'lg'} mb={2}>
            {children}
        </Text>
    );
};

const Footer = () => {
    return (
        <Box bg="gray.800" color="white" pt={16} pb={8}>
            <Container maxW={'container.xl'}>
                <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8} mb={10}>
                    <Stack spacing={6}>
                        <Flex alignItems="center">
                            <Image
                                src="/src/assets/logo.png"
                                alt="La Tienda de Perla Logo"
                                boxSize="50px"
                                mr={3}
                                fallbackSrc="https://via.placeholder.com/50x50?text=Logo"
                            />
                            <Text fontSize="2xl" fontWeight="bold" color="brand.primary">
                                La Tienda de Perla
                            </Text>
                        </Flex>
                        <Text fontSize="sm">
                            Ofrecemos productos y servicios de alta calidad para el cuidado y bienestar de tus mascotas.
                        </Text>
                        <HStack spacing={4}>
                            <SocialButton label={'Instagram'} href={'#'}>
                                <FiInstagram />
                            </SocialButton>
                            <SocialButton label={'Facebook'} href={'#'}>
                                <FiFacebook />
                            </SocialButton>
                            <SocialButton label={'Twitter'} href={'#'}>
                                <FiTwitter />
                            </SocialButton>
                            <SocialButton label={'YouTube'} href={'#'}>
                                <FiYoutube />
                            </SocialButton>
                        </HStack>
                    </Stack>

                    <Stack align={'flex-start'}>
                        <ListHeader>Enlaces Rápidos</ListHeader>
                        <Link href={'#home'}>Inicio</Link>
                        <Link href={'#services'}>Servicios</Link>
                        <Link href={'#products'}>Productos</Link>
                        <Link href={'#gallery'}>Galería</Link>
                        <Link href={'#location'}>Ubicación</Link>
                    </Stack>

                    <Stack align={'flex-start'}>
                        <ListHeader>Atención al Cliente</ListHeader>
                        <Flex alignItems="center">
                            <Icon as={FiMapPin} mr={2} />
                            <Text fontSize="sm">Transversal 77 # 47 - 35 Local 1 Piso</Text>
                        </Flex>
                        <Flex alignItems="center">
                            <Icon as={FiPhone} mr={2} />
                            <Text fontSize="sm">302 530 6471</Text>
                        </Flex>
                        <Flex alignItems="center">
                            <Icon as={FiMail} mr={2} />
                            <Text fontSize="sm">info@tiendadeperla.com</Text>
                        </Flex>
                        <Flex alignItems="center">
                            <Icon as={FiClock} mr={2} />
                            <Text fontSize="sm">Lun-Sáb: 10am-8pm, Fest: 10am-5pm</Text>
                        </Flex>
                    </Stack>

                    <Stack align={'flex-start'}>
                        <ListHeader>Suscríbete</ListHeader>
                        <Text fontSize="sm">
                            Recibe nuestras ofertas y novedades directamente en tu correo.
                        </Text>
                        <Flex direction="column" width="100%">
                            <FormControl mb={2}>
                                <Input
                                    placeholder={'Tu correo electrónico'}
                                    bg="whiteAlpha.100"
                                    border={0}
                                    _focus={{
                                        bg: 'whiteAlpha.300',
                                    }}
                                />
                            </FormControl>
                            <Button
                                variant="primary"
                                rightIcon={<FiSend />}
                                size="md"
                            >
                                Suscribirme
                            </Button>
                        </Flex>
                        <Text fontSize="xs" mt={2}>
                            NIT: 1.010.037.661-6
                        </Text>
                    </Stack>
                </SimpleGrid>

                <Divider mb={6} />

                <Stack direction={{ base: 'column', md: 'row' }} spacing={6} justifyContent="space-between" alignItems="center">
                    <Text fontSize="sm">© {new Date().getFullYear()} La Tienda de Perla. Todos los derechos reservados.</Text>
                    <HStack spacing={6}>
                        <Link href="#" fontSize="sm">Política de Privacidad</Link>
                        <Link href="#" fontSize="sm">Términos y Condiciones</Link>
                    </HStack>
                </Stack>
            </Container>
        </Box>
    );
};

export default Footer;
