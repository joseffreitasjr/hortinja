import React from 'react'

import Logo from '../../assets/Logo.svg'
import BackgroundInfos from '../../assets/BackgroundInfos.svg'
import Monetization from '../../assets/Monetization.svg'
import Filter from '../../assets/Filter.svg'
import Assignment from '../../assets/Assignment.svg'
import Add from '../../assets/Add.svg'

import PoppinsBold from '../../assets/Poppins-Bold.ttf'
import PoppinsLight from '../../assets/Poppins-Light.ttf'

import { Post } from '../../components'

import { TriangleDownIcon } from '@chakra-ui/icons'

import { Flex,
         Image,
         Box,
         IconButton,
         Text,
         Divider,
         Button
       } 
       from "@chakra-ui/react"

export const Home = () => {

    const posts = [
        {
          id: '1',
          title: 'Alface',
          subtitle: 'Alface Crespa',
          description: 'A alface crespa é uma hortaliça folhosa muito popular entre os brasileiros. Costuma ser consumida crua, geralmente em saladas.',
          price: '1,99'
        },
        {
            id: '2',
            title: 'Couve',
            subtitle: 'Couve Orgânico',
            description: 'A alface crespa é uma hortaliça folhosa muito popular entre os brasileiros. Costuma ser consumida crua, geralmente em saladas.',
            price: '3,99'
        },
        {
            id: '3',
            title: 'Alface',
            subtitle: 'Alface Crespa',
            description: 'A alface crespa é uma hortaliça folhosa muito popular entre os brasileiros. Costuma ser consumida crua, geralmente em saladas.',
            price: '4,99'
        }
    ]

    return (
        // Page
        <Flex 
            position='relative'
            width ='100%'
            height='2320px'
            display='flex'
            flexDirection = 'column'
            justifyContent='center'
            alignItems='center'
            

            background='#D9D2CF'          
        >
            {/* Header */}
            <Flex 
                position='absolute'
                width='100%'
                height='80px'
                left='0px'
                top='0px'

                background='#FBFAFA'                
            >
                {/* Logo Image */}
                <Image src={ Logo } 
                       alt='Hortinja Logo' 
                       position='absolute'
                       width='280px'
                       height='62px'
                       left='420px'
                       top='9px'
                />
                  {/* Search Category */}
                <Box bg='#D9D2CF' 
                    position='absolute'
                    width='320px'
                    height='56px'
                    left='844px'
                    top='12px'
                    borderRadius='100px'
                    marginRight='30px'                   
                >
                    {/* Text - Selecionar Categoria */}
                   <Text
                       position='absolute'
                       width='188px'
                       height='27px'
                       left='35px'
                       top='17px'
                       
                       src= { PoppinsLight }
                       fontStyle='normal'
                       fontWeight='normal'
                       fontSize='18px'
                       lineHeight='27px'
                          
                       color='#757270'
                   >
                       Selecionar categoria
                   </Text>

                   {/* Arrow Drop Down */}
                   <IconButton 
                        aria-label='Selecionar Categoria' 
                        icon={<TriangleDownIcon/>}    
                        variant='ghost' 
                        color='black'
                        position= 'absolute'
                        width= '32px'
                        height= '32px'
                        left= '270px'
                        top= '15px'               
                    />
                </Box>

                {/* Search Hortaliça */}
                <Box bg="#D9D2CF" 
                    position='absolute'
                    width='320px'
                    height='56px'
                    left='1190px'
                    top='12px'
                    borderRadius='100px'
                    marginRight='10px'                                     
                >
                  {/* Text - Buscar Hortaliça  */}
                  <Text
                    position='absolute'
                    width='147px'
                    height='27px'
                    left='40px'
                    top='15px'
                    
                    src={ PoppinsLight }
                    fontStyle='normal'
                    fontWeight='normal'
                    fontSize='18px'
                    lineHeight='27px'
                    color='#757270'
                  >
                      Buscar hortaliça
                  </Text>

                    {/* Filter */}
                    <Button
                        left='270px'
                        top='9px'
                        variant='ghost'
                        borderRadius='100px'
                    >
                        <Image
                            src={ Filter } 
                            alt='Filter'
                            aria-label='Selecionar Categoria'   
                            variant='ghost' 
                            position='absolute'
                            width='40px'
                            height='40px'
                            left='1px'
                            top='1px'
                            onClick={() => console.log('abrir modal')} 
                        />
                    </Button>    
                </Box>           
            </Flex>

            {/* Dashboard */}
            <Flex  flexDirection='row' minHeight='85vh'>
                  <Image src={ BackgroundInfos } 
                    alt='Background Info' 
                    position='absolute'
                    width='816px'
                    height='226px'
                    left='552px'
                    top='112px'

                  />
                  <Box width='25%'>
                      {/* Card Right */}
                    <Flex 
                        position='absolute'
                        width='360px'
                        height='160px'
                        left='976px'
                        top='210px'
                        borderRadius='32px'
                        background='rgba(255, 255, 255, 0.9)'                        
                    >
                        {/* Valor total Preço total da Horta  */}
                        <Text 
                            position='absolute'
                            width='200px'
                            height='47px'
                            left='24px'
                            top='24px'

                            src= {PoppinsBold}
                            fontStyle='normal'
                            fontWeight='bold'
                            fontSize='20px'
                            lineHeight='25px'

                            color='#111111'
                        >
                            Valor Total
                        </Text>
                        <Text
                            position='absolute'
                            width='200px'
                            height='47px'
                            left='24px'
                            top='48px'

                            fontFamily='Poppins'
                            fontStyle='normal'
                            fontSize='15px'
                            lineHeight='25px'

                            color='#111111'
                        >
                            Preço Total da Horta
                        </Text>
                    </Flex>
                    <Flex>
                    <Image src={ Monetization } 
                        position='absolute'
                        width='40px'
                        height='40px'
                        left='1050px'
                        top='310px' 
                  />
                   <Text
                        position='absolute'
                        width='141px'
                        height='36px'
                        left='1100px'
                        top='310px'
                        
                        src={ PoppinsBold }
                        fontStyle='normal'
                        fontWeight='bold'
                        fontSize='24px'
                        lineHeight='36px'
                                           
                        color='#111111'
                   
                   >
                       2.099,00
                    </Text>
                    </Flex>
                  </Box>  

                  <Box width='25%'>
                    
                    {/* Card Left */}
                    <Flex 
                        position='absolute'
                        width='360px'
                        height='160px'
                        left='584px'
                        top='210px'
                        borderRadius='32px'
                        background='rgba(255, 255, 255, 0.9)'                        
                    >

                        {/* Registro e Número de registros na Horta  */}
                        <Text 
                            position='absolute'
                            width='200px'
                            height='47px'
                            left='24px'
                            top='24px'

                            src= { PoppinsBold }
                            fontStyle='normal'
                            fontWeight='bold'
                            fontSize='20px'
                            lineHeight='25px'

                            color='#111111'
                        >
                            Registros
                        </Text>
                        <Text
                            position='absolute'
                            width='230px'
                            height='47px'
                            left='24px'
                            top='48px'

                            src={ PoppinsLight }
                            fontStyle='normal'
                            fontSize='15px'
                            lineHeight='25px'

                            color='#111111'
                        >
                            Números de registros na Horta
                        </Text>
                    </Flex>
                    <Flex>
                        <Image src={ Assignment } 
                            position='absolute'
                            width='40px'
                            height='40px'
                            left='700px'
                            top='310px'            
                        />
                        <Text
                            position='absolute'
                            width='141px'
                            height='36px'
                            left='750px'
                            top='310px'
                            
                            src={ PoppinsBold }
                            fontStyle='normal'
                            fontWeight='bold'
                            fontSize='24px'
                            lineHeight='36px'
                                            
                            color='#111111'
                        >
                        #029
                        </Text>
                    </Flex>
                  </Box> 
            </Flex>

            <Divider 
                position='absolute'
                width='1080px'
                height='1px'
                left='420px'
                top='420px'
                background='#111111'         
            />   

            {/* BOTÃO: + ADICIONAR CATEGORIA */}
            <Flex
                position='absolute'
                width='360px'
                height='40px'
                left='976px'
                top='450px'
                background='#006B5C'
                borderRadius='100px'
            >   
                <Button
                    left='80px'
                    variant='ghost'
                >
                    <Image src={ Add } 
                                position='absolute'
                                width='24.75px'
                                height='24px'
                                left='8px'
                                top='10px' 
                                borderRadius='100px' 
                                onClick={() => console.log('abrir modal')}       
                    />
                </Button>

                <Text
                    position='absolute'
                    width='142px'
                    height='21px'
                    left='120px'
                    top='10px'
                    
                    src={ PoppinsLight }
                    fontStyle='normal'
                    fontWeight='normal'
                    fontSize='14px'
                    line-height='21px'

                    color='#FBFAFA'
                >
                    Adicionar Categoria
                </Text>
            </Flex>

            {/* BOTÃO: + ADICIONAR HORTALIÇA */}
            <Flex
                position='absolute'
                width='360px'
                height='40px'
                left='584px'
                top='450px'
                background='#006B5C'
                borderRadius='100px'
            >   
                <Button
                    left='80px'
                    variant='ghost'
                >
                
                    <Image src={ Add } 
                                position='absolute'
                                width='24.75px'
                                height='24px'
                                left='8px'
                                top='10px' 
                                borderRadius='100px'  
                                onClick={() => console.log('abrir modal')}        
                    />

                    <Text
                        position='absolute'
                        width='142px'
                        height='21px'
                        left='30px'
                        top='12px'
                        
                        src= { PoppinsLight }
                        fontStyle='normal'
                        fontWeight='normal'
                        fontSize='14px'
                        line-height='21px'

                        color='#FBFAFA'
                    >
                        Adicionar Hortaliça
                    </Text>
                </Button>

                
                <Box 
                    position='absolute'
                    width='221px'
                    height='54px'
                    left='-120px'
                    top='207px'
                >
                    <Flex
                        flexDirection='row'
                        marginLeft='200px'
                    >
                        {posts.map(post => (
                            <Post 
                                key={post._id}
                                title={post.title}
                                subtitle={post.subtitle}
                                description={post.description}
                                price={post.price}
                                openEditModal={() => console.log('abrir modal de edição')}
                                openDeleteModal={() => console.log('abrir modal de exclusão')}
                            />
                        ))}
                    </Flex>
                </Box>
            </Flex>

             {/* Rodapé - Footer */}
            <Box marginY='4'>
                <Text 
                    position='absolute'
                    width='670px'
                    height='24px'
                    left='625px'
                    top='2276px'

                    src= { PoppinsLight }
                    font-style='normal'
                    font-weight='normal'
                    font-size='16px'
                    line-height='24px'
                    
                    color='#111111'
                >
                    Copyright © 2021 Feito com 💚 por Kazap Tecnologia - Todos os direitos reservados
                </Text>
            </Box>


        </Flex>

    )
}