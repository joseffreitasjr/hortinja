import React from 'react'
import BackgroundCard from '../../assets/BackgroundCard.svg'
import Vector from '../../assets/Vector.svg'
import AlfaceCrespa from '../../assets/AlfaceCrespa.svg'
import Frame8 from '../../assets/Frame8.svg'
import Delete from '../../assets/Delete.svg'
import Edit from '../../assets/Edit.svg'
import PoppinsBold from '../../assets/Poppins-Bold.ttf'
import PoppinsLight from '../../assets/Poppins-Light.ttf'
import { Flex,
         Image,
         Text,
         Box,
         Button
       } 
       from '@chakra-ui/react'

const Post = (props) => {
    return (
        <Flex background='#fff'
            position='absolute'
            width='340px'
            height='380px'
            left='-50px'
            top='13px'
            background='#FBFAFA'
            borderRadius='32px'     
        >
                
                <Text
                    position='absolute'
                    width='173px'
                    height='54px'
                    left='10px'
                    top='-100px'

                    src= { PoppinsBold }
                    fontStyle='normal'
                    fontWeight='bold'
                    fontSize='36px'
                    lineHeight='54px'
                    color='#111'
                >
                    Verduras
                </Text>   

                <Image 
                    src= { Vector }
                    alt='Vector'
                    position='absolute'
                    width='32px'
                    height='32px'
                    left='180px'
                    top='-90px'
                />             
               
                
                <Image 
                    src= { BackgroundCard }
                    alt='Background Card'
                    position='absolute'
                    width='320px'                    
                    top='10px'
                    left='10px'
                    
                />

                    <Image 
                        src= { Frame8 }
                        alt='Frame 8'
                        position='absolute'
                        width='110px'
                        height='110px'
                        left='25px'
                        top='30px'
                       
                        
                        border='5px solid #D9D2CF ghost'
                        box-sizing='border-box'
                        border-radius='100px'
                        
                        
                    />

                    <Image 
                        src= { AlfaceCrespa }
                        alt='Alface crespa'
                        position='absolute'
                        width='104px'
                        height='104px'
                        left='28px'
                        top='32px'
                        borderRadius='100px'
                    />

                    {/* Alface */}
                    <Text
                        position='absolute'
                        width='119px'
                        height='54px'
                        left='150px'
                        top='56px'
                        
                        src={PoppinsBold}                        
                        fontStyle='normal'
                        fontWeight='bold'
                        fontSize='36px'
                        lineHeight='54px'
                        
                        color='#FBFAFA'
                    >
                        Alface
                    </Text>

           
            <Flex> 
                {/* Alface Crespa */}
                <Text
                    position='absolute'
                    width='116px'
                    height='24px'
                    left='24px'
                    top='186px'
                    
                    src={PoppinsBold} 
                    fontStyle='normal'
                    fontWeight='bold'
                    fontSize='16px'
                    lineHeight='24px'
                               
                    color='#111111'
                >
                    Alface Crespa
                </Text>
                {/* Conteúdo Escrito */}

                <Text 
                    position='absolute'
                    width='282px'
                    height='70px'
                    left='24px'
                    top='226px'
                    
                    src= { PoppinsLight }
                    fontStyle='normal'
                    fontWeight='normal'
                    fontSize='16px'
                    lineHeight='21px'
                    textAlign='justify'
                    
                    color='#111111'
                
                >
                    A alface crespa é uma hortaliça folhosa muito popular
                    entre os brasileiros.
                    Costuma ser consumida crua, geralmente em saladas.
                </Text>
            </Flex>
            
            {/* Actions */}
            <Box
                position='absolute'
                width='72px'
                height='32px'
                left='24px'
                top='336px'
            >
                {/* Delete Button */}
                <Button
                    position='absolute'
                    width='15px'
                    height='32px'
                    left='0px'
                    top='0px'
                    variant='ghost'
                    pointerEvents='default'
                    cursor='pointer'                   
                >
                    <Image 
                        src= { Delete }
                        position='absolute'
                        width='30px'
                        height='28px'
                        left='0px'
                        top='0px'
                        onClick={() => console.log('abrir modal')} 
                    />

                </Button>

                 {/* Create Button */}
                 <Button
                    position='absolute'
                    width='5px'
                    height='32px'
                    left='25px'
                    top='0px'
                    variant='ghost'
                    pointerEvents='default'
                    cursor='pointer'

                >
                    <Image 
                        src= { Edit }
                        position='absolute'
                        width='30px'
                        height='28px'
                        left='11px'
                        top='0px'
                        
                        onClick={() => console.log('abrir modal')}                      
                    />
                </Button>
            </Box>

            {/* Price */}
            <Box
                position='absolute'
                width='139px'
                height='36px'
                left='177px'
                top='328px'
            >
                {/* Média R$ */}
                <Text
                    position='absolute'
                    width='57px'
                    height='18px'
                    left='1px'
                    top='7px'
                    
                    src= { PoppinsLight }
                    fontStyle='normal'
                    fontWeight='bold'
                    fontSize='12px'
                    lineHeight='18px'
                                     
                    color='#111111'
                >
                    Média R$
                </Text>

                {/* 1,99 */}
                <Text
                    position='absolute'
                    width='49px'
                    height='36px'
                    left='60px'
                    top='5px'
                    
                    src= { PoppinsBold }
                    fontStyle='normal'
                    fontWeight='bold'
                    fontSize='20px'
                    lineHeight='18px'
                                     
                    color='#20A471'
                >
                    1,99
                </Text>

                <Text
                    position='absolute'
                    width='49px'
                    height='36px'
                    left='105px'
                    top='7px'
                    
                    src= { PoppinsLight }
                    fontStyle='normal'
                    fontWeight='normal'
                    fontSize='12px'
                    lineHeight='18px'
                                     
                    color='#111111'
                >
                    unid
                </Text>
                
            </Box>

        </Flex>
    )
}

export default Post