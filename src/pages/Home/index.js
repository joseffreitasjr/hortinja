import React from 'react'
import Logo from '../../assets/Logo.svg'
import SearchHortalica from '../../assets/SearchHortalica.svg'
import SearchCategory from '../../assets/SearchCategory.svg'
import { TriangleDownIcon, Search2Icon } from '@chakra-ui/icons'
import { Flex,
         Image,
         Box,
         IconButton
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
            <Flex 
                bg='#FFF'
                paddingY='10px' 
             
                
            >

                <Image src={ Logo } 
                       alt='Hortinja Logo' 
                       marginX='4'
                       marginX='170px'
                       
                       
                />
                {/* <Image src={ SearchCategory } 
                       alt='Fanpics Logo' 
                       marginX='4'
                      
                />
                <Image src={ SearchHortalica } 
                alt='Fanpics Logo' 
                marginX='4'
                
                       
                       
                /> */}
                
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


        </Flex>

    )
}