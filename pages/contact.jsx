import React from 'react'
import Head from 'next/head'
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Contact from '../components/work/Contact';
import { Flex } from '@chakra-ui/react';



const contact = () => {
    return (
        <>
            <Head>
                <title>Contact - Varad Rajopadhye</title>
            </Head>
            <NavBar />
                <Flex alignItems={"center"} justifyContent={"center"} flexDirection={'column'}>
                    <Contact />
                </Flex>
            <Footer />
        </>
    )
}

export default contact