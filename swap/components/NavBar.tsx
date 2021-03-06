import { Flex, Container, Box, Text, IconButton, useColorMode, HStack, Icon, Link, useMediaQuery } from '@chakra-ui/react';
import { ConnectButton, InfoMenu, NavMenu } from '.';
import Image from 'next/image'
import logo from '../public/apple-touch-icon.png'
import { MoonIcon } from '@chakra-ui/icons';
import {FaSun,} from 'react-icons/fa'
import NLink from 'next/link'
import { useRouter } from 'next/router';
interface Props{
    handleOpenModal: () => void
}


const NavBar = ({handleOpenModal}:Props) => {

    const {colorMode, toggleColorMode} = useColorMode()
    const [moreThan900] = useMediaQuery(['(min-width: 900px)'])
    const {pathname} = useRouter()

    return (
        <Box w="100%" py="1rem" bg="transparent" as="header">
            <Container maxW="container.xl" as="nav">
                <Flex justifyContent="space-between" alignItems="center">
                    <Flex alignItems="center" _hover={{"cursor":'pointer'}}>
                        <NLink href="/">
                            <HStack spacing={2} alignItems="center" >
                                <Box w="50px" >
                                    <Image src={logo} height="50px" width="50px" alt="logo"/>
                                </Box>
                                <Text fontSize="3xl" fontWeight="black">
                                    ScionX
                                </Text>
                            </HStack>
                        </NLink>
                    </Flex>
                    {
                        moreThan900 && (
                            <HStack spacing={2} justifyContent="space-around" w="100%" alignItems="center">
                                <NLink href="/">
                                    <Link fontWeight={pathname === '/' ? 'black' : 'normal'} >
                                        Home
                                    </Link>
                                </NLink>
                                <NLink href="/swap">
                                    <Link fontWeight={pathname === '/swap' ? 'black' : 'normal'}>
                                        Swap
                                    </Link>
                                </NLink>
                                <NLink href="/farm">
                                    <Link fontWeight={pathname === '/farm' ? 'black' : 'normal'}>
                                        
                                    </Link>
                                </NLink>
                                <NLink href="/lend">
                                    <Link fontWeight={pathname === '/lend' ? 'black' : 'normal'}>
                                        
                                    </Link>
                                </NLink>
                            </HStack>
                        )
                    }
                            <HStack spacing="1rem">
                                <IconButton aria-label="mode" onClick={toggleColorMode} borderRadius="full">
                                    {colorMode==='light'?
                                        <MoonIcon color="#8287ff"/>
                                        :
                                        <Icon as={FaSun} color="#ffcd54"/>
                                    }
                                </IconButton>
                                {moreThan900 && (
                                    <>
                                        <ConnectButton handleOpenModal={handleOpenModal}/>
                                        <InfoMenu/>
                                    </>
                                )}
                                {!moreThan900 && (
                                    <NavMenu/>
                                )}
                            </HStack>
                </Flex>        
            </Container>
        </Box>
    )
}

export default NavBar
