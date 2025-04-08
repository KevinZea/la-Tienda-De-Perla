import {
    Box,
    Flex,
    HStack,
    IconButton,
    Button,
    useDisclosure,
    Image,
    Container,
    Stack,
    Collapse,
    Link,
    Text
} from '@chakra-ui/react';
import { Link as ScrollLink } from 'react-scroll';
import { FiMenu, FiX, FiShoppingCart, FiInstagram, FiFacebook, FiMapPin } from 'react-icons/fi';
import logo from '../assets/logo.jpg';

const Links = [
    { name: 'Inicio', to: 'home' },
    { name: 'Servicios', to: 'services' },
    { name: 'Productos', to: 'products' },
    { name: 'Galería', to: 'gallery' },
    { name: 'Ubicación', to: 'location' },
];

const Header = () => {
    const { isOpen, onToggle } = useDisclosure();

    return (
        <Box as="header" position="sticky" top={0} zIndex={1000} bg="white" boxShadow="sm">
            <Container maxW="container.xl">
                <Flex h={16} alignItems="center" justifyContent="space-between">
                    <IconButton
                        size="md"
                        icon={isOpen ? <FiX /> : <FiMenu />}
                        aria-label="Open Menu"
                        display={{ md: 'none' }}
                        onClick={onToggle}
                    />

                    <Flex alignItems="center">
                        <Image
                            src={logo} // Asegúrate de tener un logo
                            alt="La Tienda de Perla Logo"
                            h="50px"
                            mr={4}
                            fallbackSrc="https://via.placeholder.com/150x50?text=Tienda+de+Perla"
                        />
                        <Text
                            display={{ base: 'none', md: 'block' }}
                            fontWeight="bold"
                            fontSize="xl"
                            color="brand.primary"
                        >
                            La Tienda de Perla
                        </Text>
                    </Flex>

                    <HStack spacing={8} display={{ base: 'none', md: 'flex' }}>
                        {Links.map((link) => (
                            <Link
                                key={link.name}
                                as={ScrollLink}
                                to={link.to}
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                cursor="pointer"
                                fontWeight="medium"
                                _hover={{
                                    textDecoration: 'none',
                                    color: 'brand.primary',
                                }}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </HStack>

                    <HStack>
                        <IconButton
                            aria-label="Instagram"
                            icon={<FiInstagram />}
                            variant="ghost"
                            colorScheme="pink"
                            size="sm"
                        />
                        <IconButton
                            aria-label="Facebook"
                            icon={<FiFacebook />}
                            variant="ghost"
                            colorScheme="facebook"
                            size="sm"
                        />
                        {/* <Button
                            variant="primary"
                            leftIcon={<FiShoppingCart />}
                            size="sm"
                        >
                            Tienda
                        </Button> */}
                    </HStack>
                </Flex>

                <Collapse in={isOpen} animateOpacity>
                    <Stack
                        p={4}
                        display={{ md: 'none' }}
                        spacing={4}
                        bg="white"
                        mt={2}
                        rounded="md"
                        shadow="md"
                    >
                        {Links.map((link) => (
                            <Link
                                key={link.name}
                                as={ScrollLink}
                                to={link.to}
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                cursor="pointer"
                                onClick={onToggle}
                                fontWeight="medium"
                                p={2}
                                rounded="md"
                                _hover={{
                                    textDecoration: 'none',
                                    bg: 'brand.primary',
                                    color: 'white',
                                }}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </Stack>
                </Collapse>
            </Container>
        </Box>
    );
};

export default Header;
