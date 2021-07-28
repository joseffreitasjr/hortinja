import React from 'react'
import Logo from '../../assets/Logo.svg'
import { Flex,
         Image,
         Box
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
            >

                <Image src={ Logo } 
                       alt='Fanpics Logo' 
                       marginX='4'
                       marginX='200px'
                       paddingY='10px' 
                />

                Espaço para os 2 campos de busca

            </Flex>


        </Flex>

    )
}