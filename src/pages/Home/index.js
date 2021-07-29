import React from 'react'
import Logo from '../../assets/Logo.svg'
import SearchHortalica from '../../assets/SearchHortalica.svg'
import SearchCategory from '../../assets/SearchCategory.svg'
import { TriangleDownIcon, Search2Icon } from '@chakra-ui/icons'
import { Flex,
         Image,
         Box,
         IconButton,
         Text
       } 
       from "@chakra-ui/react"

export const Home = () => {
    return (
        <Flex 
            bg='#E5E5E5'
            flexDirection='column'
            justifyContent='space-between'
            minHeight='100vh'           
        >
            {/* Cabeçalho - Header */}
            <Flex 
                bg='#FFF'
                paddingY='10px' 
             
                
            >

                <Image src={ Logo } 
                       alt='Hortinja Logo' 
                       marginX='4'
                       marginX='170px'
                       
                       
                />
                                
                <Box bg="#E5E5E5" 
                     w="20%" 
                     p={5} 
                     color='#757270'
                     borderRadius='40px'
                     marginRight='15px'
                     justifyContent='space-between'
                    
                     
                    
                >
                   Selecionar categoria
                   <IconButton 
                        aria-label='Selecionar Categoria' 
                        icon={<TriangleDownIcon/>}    
                        variant='ghost' 
                        marginLeft= '95px'  
                        color='black'               
                    />
                </Box>

                <Box bg="#E5E5E5" 
                     w="20%" 
                     p={5} 
                     color='#757270'
                     borderRadius='40px'
                     marginRight='15px'
                     justifyContent='space-between'
                >
                   Buscar hortaliça
                   <IconButton 
                        aria-label='Selecionar Categoria' 
                        icon={<Search2Icon/>}    
                        variant='ghost' 
                        marginLeft= '120px'  
                        color='black'               
                    />
                </Box>           
            </Flex>

            <Flex  flexDirection='row' minHeight='85vh' backgroundImage='url()'>

            </Flex>








             {/* Rodapé - Footer */}
            <Box marginY='4'>
                <Text textAlign='center' fontSize='15px' fontWeight='bold'>
                    Copyright © 2021 Feito com 💚 por Kazap Tecnologia - Todos os direitos reservados
                </Text>
            </Box>


        </Flex>

    )
}