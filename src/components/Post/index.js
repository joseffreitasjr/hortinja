import React from 'react'

import BackgroundCard from '../../assets/BackgroundCard.svg'
import Vector from '../../assets/Vector.svg'
import AlfaceCrespa from '../../assets/AlfaceCrespa.svg'
import Frame8 from '../../assets/Frame8.svg'
import Delete from '../../assets/Delete.svg'
import Edit from '../../assets/Edit.svg'
import Beringela from '../../assets/Beringela.svg'
import Tomate from '../../assets/Tomate.svg'

import PoppinsBold from '../../assets/Poppins-Bold.ttf'
import PoppinsLight from '../../assets/Poppins-Light.ttf'

import { Flex,
         Image,
         Text,
         Box,
         Button,
         Divider
       } 
       from '@chakra-ui/react'

const Post = (props) => {
    return (
        // Card Verduras
        <Flex 
            key={props.key}
            background='#fff'
            position='absolute'
            flexDirection='row'
            justifyContent='space-between'
            width='340px'
            height='380px'
            left='-50px'
            top='13px'
            background='#FBFAFA'
            borderRadius='32px'     
        >
                {/* Verduras  */}
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
                        noOfLines='4'
                    >
                        {props.title}
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
                    noOfLines='4'
                >
                    {props.subtitle}
                </Text>

                {/* Descrição */}
                <Text 
                    position='absolute'
                    width='282px'
                    height='85px'
                    left='24px'
                    top='226px'
                    
                    src= { PoppinsLight }
                    fontStyle='normal'
                    fontWeight='normal'
                    fontSize='16px'
                    lineHeight='21px'
                    textAlign='justify'
                    
                    color='#111111'
                    noOfLines='4'
                >
                    {props.description}
                </Text>
            </Flex>
            
            {/* Ações */}
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
                        onClick={props.openDeleteModal} 
                    />

                </Button>

                 {/* Edit Button */}
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
                        
                        onClick={props.openEditModal}                      
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
                    {props.price}
                </Text>

                {/* unid */}
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

            <Divider 
                position='absolute'
                width='1080px'
                height='1px'
                left='0px'
                top='420px'
                background='#111111'         
            />   
        {/* //------------------------ */}
        {/* Card Legumes */}
        <Flex 
            key={props.key}
            background='#fff'
            position='absolute'
            flexDirection='row'
            justifyContent='space-between'
            width='340px'
            height='380px'
            left='-5px'
            top='570px'
            background='#FBFAFA'
            borderRadius='32px'                
        >   
            {/* Legumes */}
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
                Legumes
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
                src= { Beringela }
                alt='Alface crespa'
                position='absolute'
                width='104px'
                height='104px'
                left='28px'
                top='32px'
                borderRadius='100px'
            />

            {/* Beringela */}
            <Text
                position='absolute'
                width='165px'
                height='54px'
                left='150px'
                top='56px'
                
                src={PoppinsBold}                        
                fontStyle='normal'
                fontWeight='bold'
                fontSize='36px'
                lineHeight='54px'
                
                color='#FBFAFA'
                noOfLines='4'
            >
                {/* {props.title} */}
                Beringela
            </Text>

            <Flex> 
            {/* Beringela */}
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
                noOfLines='4'
            >
                {/* {props.subtitle} */}
                Beringela
            </Text>

                {/* Conteúdo Escrito */}
            <Text 
                position='absolute'
                width='282px'
                height='85px'
                left='24px'
                top='226px'
                
                src= { PoppinsLight }
                fontStyle='normal'
                fontWeight='normal'
                fontSize='16px'
                lineHeight='21px'
                textAlign='justify'
                
                color='#111111'
                noOfLines='4'
            >
                {/* {props.description} */}
                A berinjela ou beringela é o fruto da planta Solanum melongena, uma solanaceae arbustiva, anual, originária da Índia.
            </Text>
        </Flex>
            
            {/* Ações */}
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
                    onClick={props.openDeleteModal} 
                />

            </Button>

                {/* Edit Button */}
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
                    
                    onClick={props.openEditModal}                      
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

            {/* 13,99 */}
            <Text
                position='absolute'
                width='52px'
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
                {/* {props.price} */}
                13,99
            </Text>

            <Text
                position='absolute'
                width='49px'
                height='36px'
                left='115px'
                top='7px'
                
                src= { PoppinsLight }
                fontStyle='normal'
                fontWeight='normal'
                fontSize='12px'
                lineHeight='18px'
                                    
                color='#111111'
            >
                kg
            </Text>                
        </Box>

            <Divider 
                position='absolute'
                width='1080px'
                height='1px'
                left='0px'
                top='420px'
                background='#111111'         
            />                
            </Flex>

            {/* Card Frutas */}
            <Flex 
                key={props.key}
                background='#fff'
                position='absolute'
                flexDirection='row'
                justifyContent='space-between'
                width='340px'
                height='380px'
                left='-5px'
                top='1170px'
                background='#FBFAFA'
                borderRadius='32px'                
            >
                 {/* Frutas */}
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
                    Frutas
                </Text>

                <Image 
                    src= { Vector }
                    alt='Vector'
                    position='absolute'
                    width='32px'
                    height='32px'
                    left='140px'
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
                    src= { Tomate }
                    alt='Alface crespa'
                    position='absolute'
                    width='104px'
                    height='104px'
                    left='28px'
                    top='32px'
                    borderRadius='100px'
                />
                
                {/* Tomate */}
            <Text
                position='absolute'
                width='165px'
                height='54px'
                left='150px'
                top='56px'
                
                src={PoppinsBold}                        
                fontStyle='normal'
                fontWeight='bold'
                fontSize='36px'
                lineHeight='54px'
                
                color='#FBFAFA'
                noOfLines='4'
            >
                {/* {props.title} */}
                Tomate
            </Text>

            {/* Beringela subtítulo */}
            <Flex> 
            
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
                    noOfLines='4'
                >
                    {/* {props.subtitle} */}
                    Tomate
                </Text>
                    {/* Conteúdo Escrito */}

                    <Text 
                        position='absolute'
                        width='282px'
                        height='85px'
                        left='24px'
                        top='226px'
                        
                        src= { PoppinsLight }
                        fontStyle='normal'
                        fontWeight='normal'
                        fontSize='16px'
                        lineHeight='21px'
                        textAlign='justify'
                        
                        color='#111111'
                        noOfLines='4'
                    >
                        {/* {props.description} */}
                        O tomate é o fruto do tomateiro. Da sua família, fazem também parte as berinjelas, as pimentas e os pimentões, além de algumas espécies não comes...
                    </Text>
            </Flex>
            
            {/* Ações */}
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
                        onClick={props.openDeleteModal} 
                    />

                </Button>

                {/* Edit Button */}
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
                        
                        onClick={props.openEditModal}                      
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

                {/* 13,99 */}
                <Text
                    position='absolute'
                    width='52px'
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
                    {/* {props.price} */}
                    4,99
                </Text>

                <Text
                    position='absolute'
                    width='49px'
                    height='36px'
                    left='104px'
                    top='7px'
                    
                    src= { PoppinsLight }
                    fontStyle='normal'
                    fontWeight='normal'
                    fontSize='12px'
                    lineHeight='18px'
                                     
                    color='#111111'
                >
                    kg
                </Text>                
            </Box>

            <Divider 
                position='absolute'
                width='1080px'
                height='1px'
                left='0px'
                top='420px'
                background='#111111'         
            /> 
            </Flex>            
        </Flex>       
    )
}

export default Post