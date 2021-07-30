import React from 'react'
import Logo from '../../assets/Logo.svg'
import BackgroundInfos from '../../assets/BackgroundInfos.svg'
import Monetization from '../../assets/Monetization.svg'
import Filter from '../../assets/Filter.svg'
import Assignment from '../../assets/Assignment.svg'
import { TriangleDownIcon } from '@chakra-ui/icons'
import { Flex,
         Image,
         Box,
         IconButton,
         Text,
         Divider
       } 
       from "@chakra-ui/react"

export const Home = () => {
    return (
        // Page
        <Flex 
            position='relative'
            width='1920px'
            height='2228px'
            Top='1920px'
            Left='-2676px'
            //flexDirection = 'column'
            

            background='#D9D2CF'          
        >
            {/* Header */}
            <Flex 
                position='absolute'
                width='1920px'
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
                       
                       fontFamily='Poppins'
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
                    
                    fontFamily='Poppins'
                    fontStyle='normal'
                    fontWeight='normal'
                    fontSize='18px'
                    lineHeight='27px'
                                      
                    color='#757270'
                  >
                      Buscar hortaliça
                  </Text>

                    {/* Filter */}
                    <Image
                        src={ Filter } 
                        alt='Filter'
                        aria-label='Selecionar Categoria'   
                        variant='ghost' 
                        position='absolute'
                        width='40px'
                        height='40px'
                        left='270px'
                        top='8px' 
                    />
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

                            fontFamily='Poppins'
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
                        
                        fontFamily='Poppins'
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

                            fontFamily='Poppins'
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
                            
                            fontFamily='Poppins'
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
                  <Divider 
                        position='absolute'
                        width='1080px'
                        height='1px'
                        left='420px'
                        top='420px'
                        background='#111111'         
                  />         
                  
           

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