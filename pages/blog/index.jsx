import { Flex, Heading } from '@chakra-ui/react'
import Head from 'next/head'
import React from 'react'
import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer'

function index() {
    return (
        <>
            <Head>
                <title>Blog - Varad Rajopadhye</title>
            </Head>
            <NavBar />
            <Flex alignItems={"center"} justifyContent={"center"} width={"100vw"} height={"70vh"} >
                <Heading fontSize={[25, 40, 40]} >Stay Tuned For Firebase integrated Blogs</Heading>
            </Flex>
            <Footer />
        </>
    )
}

export default index