import React from 'react'
import { Flex, Box, Button, Text } from '@chakra-ui/react'

const ItemTask = ({ descripcion }) => {

  return (
    <>
    <Flex
      align='center'
      justify='space-between'
      w='280px'
      mt='20px'
      mb='20px'
      p='6'
      bg='white'
      borderRadius='4'
    >
      <Box pl='4'>
        <Text as='b' fontSize='5xl'>{descripcion}</Text>
      </Box>
      <Flex direction='row'>
        <Box pr='4'>
          <Button bg='#191414' color='white' border='none' borderRadius='35px'>i</Button>
        </Box>
        <Box pr='4'>
          <Button bg='#FF0000' color='white' border='none' borderRadius='35px'>X</Button>
        </Box>
      </Flex>
    </Flex>
    </>
  )
}

export default ItemTask