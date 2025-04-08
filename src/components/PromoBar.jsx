import { Box, Text, Container, Icon } from '@chakra-ui/react';
import { FiTag } from 'react-icons/fi';

const PromoBar = () => {
    return (
        <Box bg="brand.primary" py={2} color="white">
            <Container maxW="container.xl">
                <Text
                    fontSize="sm"
                    textAlign="center"
                    fontWeight="medium"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    <Icon as={FiTag} mr={2} />
                    ¡10% de descuento en tu primera compra con el código PERLA10!
                </Text>
            </Container>
        </Box>
    );
};

export default PromoBar;
