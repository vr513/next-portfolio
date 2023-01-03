import { Flex, Heading, Image, Text, VStack } from "@chakra-ui/react";
import Head from "next/head";
import React from "react";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import aws from "../../assets/blogs/firebase/aws.webp";
import supabase from "../../assets/blogs/firebase/supabase.webp";
import nHost from "../../assets/blogs/firebase/Nhost.webp";
import appwrite from "../../assets/blogs/firebase/Appwritewebp.webp";
import parse from '../../assets/blogs/firebase/parse.webp'

const FirebaseAlternatives = () => {
  return (
    <>
      <Head>
        <title>Firebase Alternatives - Varad Rajopadhye</title>
      </Head>
      <NavBar />
      <Flex px={['5vw',"10vw"]} flexDirection={"column"}>
        <VStack w={"100%"} my={"5rem"}>
          <Heading
            w={"100%"}
            textAlign={"center"}
            fontSize={['3rem',"5rem"]}
            fontWeight={500}
            letterSpacing={[0,-1.8]}
            fontFamily={"'Crete Round', serif;"}
          >
            Top 5 Firebase Alternatives
          </Heading>
          <Text fontSize={"24px"} fontFamily={"Inter"} color={"gray.500"}>
            02 Jan 2023 | BAAS
          </Text>
        </VStack>
        <Flex px={['5vw',"15vw"]} flexDirection={"column"} fontFamily={'mono'}>
          <Text fontSize={"1.4rem"} lineHeight={1.75}>
            Hey fellas, <br />
            Starting something new this year. I've decided to start writing
            blogs. Chose this topic to be my first one because being a
            programmer we all have faced difficulties chosing the right tools
            for our projects.This article involves both free and paid
            alternatives to google's firebase.
          </Text>
          <Heading
            mt={"4rem"}
            fontWeight={400}
            fontFamily={"'Crete Round', serif;"}
          >
            So why dump Firebase?
          </Heading>
          <Text fontSize={"1.4rem"} mt={"1rem"} lineHeight={1.45}>
            Here are some pretty compelling arguments that you should think
            before considering firebase as Backend for your project.
            <br />
            <span fontWeight={"600 !important"} mt={"0.5rem"}>
              1. Vendor Lock In -{" "}
            </span>
            Firebase is a closed platform, so you don't have as much control
            over the infrastructure as you would with something like a
            self-hosted solution. If you are unable to access the source code
            for your software, a wise venture capitalist or angel investor will
            be reluctant to invest in your firm. Utilizing a closed source
            platform may reduce your app's ability to grow.
            <br />
            <span fontWeight={"600 !important"} mt={"0.5rem"}>
              2. Pricing -{" "}
            </span>
            When utilising Firebase, keep in mind that server fees might rise
            considerably as your app grows in popularity. Despite the fact that
            Firebase has a free plan, only tiny apps should use it because to
            its restrictions.
            <br />
            You must upgrade to the Blaze plan, which does not have a set price,
            once your app starts scaling. Blaze is a pay-as-you-go service
            package that charges you according to the server resources used by
            your app. In essence, you cannot set your app's maximum monthly
            spending limit. As a result, towards the conclusion of the billing
            cycle, you can get unpleasant shocks.
            <br />
            <span fontWeight={"600 !important"} mt={"0.5rem"}>
              3. Hosting Options -{" "}
            </span>
            On the Google Cloud Platform, Firebase only provides one sort of
            hosting configuration. The Firebase cloud infrastructure must be
            used, and resources must be shared with other apps. For
            sophisticated applications that need specialised server settings for
            optimum performance, this strategy is not the ideal choice. When
            your project starts to expand, you could run into a number of
            restrictions because Firebase does not provide Dedicated Server or
            Enterprise contracts.
          </Text>

          <Heading
            mt={"4rem"}
            fontWeight={400}
            fontFamily={"'Crete Round', serif;"}
          >
            So what are the Alternatives?
          </Heading>
          <Text fontWeight={"600 !important"} fontSize={"1.5rem"} mt={"0.5rem"}>
            1. AWS Amplify
          </Text>
          <Flex w={"100%"} justifyContent={"center"}>
            <Image src={aws.src} height={"10rem"} width={"10rem"} />
          </Flex>
          <Text fontSize={"1.4rem"} mt={"1rem"} lineHeight={1.45}>
            Checking AWS amplify on npm it is the second most weekly downloaded
            BAAS after firebase in weekly downloads category. It provides users
            with a CLI tool that can be used to create and manage your
            application and library of UI components that can be used to build
            user interfaces. It integrates with Amazon services like Amazon
            Cognito and S3 impressively. But you will face problems of vendor
            lock in here as well. It has also support for GraphQl Apis. It has a
            free tier as well as a pay as you Go plan.
          </Text>

          <Text fontWeight={"600 !important"} fontSize={"1.5rem"} mt={"2.5rem"}>
            2. Supabase
          </Text>
          <Flex w={"100%"} justifyContent={"center"}>
            <Image src={supabase.src} my={'1.5rem'} height={"7rem"}  />
          </Flex>
          <Text fontSize={"1.4rem"} mt={"1rem"} lineHeight={1.45}>
            Supabase uses a combination of WebSockets and GraphQL subscriptions
            to enable real-time data synchronization between the server and
            client. This allows developers to build applications that respond to
            changes in the data in near real-time. It is built on top of a
            powerful PostgreSQL database, which provides robust and scalable
            data storage and management capabilities. It also includes built-in
            support for user authentication and authorization, allowing
            developers to easily add login and signup functionality to their
            applications. Supabase provides a GraphQL API for interacting with
            the database and other services, allowing developers to build
            flexible and efficient client applications. It includes a serverless
            functions platform, allowing developers to run custom code in
            response to events such as data updates or HTTP requests.
          </Text>

          <Text fontWeight={"600 !important"} fontSize={"1.5rem"} mt={"2.5rem"}>
            3. nHost
          </Text>
          <Flex w={"100%"} justifyContent={"center"}>
            <Image my={"1.5rem"} src={nHost.src} height={"7rem"} />
          </Flex>
          <Text fontSize={"1.4rem"} mt={"1rem"} lineHeight={1.45}>
            NHost is an open-source Firebase alternative that works with GraphQL
            API. The company runs its infrastructure on top of AWS and uses the
            Hasura framework to power the GraphQL API. The product’s core
            features include a SQL database, API, Authentication, Storage, and
            Serverless Functions. NHost includes built-in support for user
            authentication and authorization, allowing developers to easily add
            login and signup functionality to their applications.It also uses
            web sockets for real time data synchronization. There are three
            pricing tiers available. The Starter plan is free; the Pro plan
            begins at $25/mo, and Enterprise is under quotation.
          </Text>

          <Text fontWeight={"600 !important"} fontSize={"1.5rem"} mt={"2.5rem"}>
            4. Appwrite
          </Text>
          <Flex w={"100%"} justifyContent={"center"}>
            <Image my={"1.5rem"} src={appwrite.src} height={"7rem"} />
          </Flex>
          <Text fontSize={"1.4rem"} mt={"1rem"} lineHeight={1.45}>
            Apprwite is a BAAS specially designed to cater the needs of mobile
            application developers.The platform is open source and the source
            code is available on Github. Some of the key features include
            database , geolocation , cloud functions / edge functions , security
            rules and parameters. It has NoSQL database which is built on top of
            Maria db ( a fork of MYSQL). It does not support GraphQL apis yet.
          </Text>

          <Text fontWeight={"600 !important"} fontSize={"1.5rem"} mt={"2.5rem"}>
            5. Parse
          </Text>
          <Flex w={"100%"} justifyContent={"center"}>
            <Image my={"1.5rem"} src={parse.src} height={"7rem"} />
          </Flex>
          <Text fontSize={"1.4rem"} mt={"1rem"} lineHeight={1.45}>
            Parse includes a push notification service that allows developers to
            send notifications to their users through various channels such as
            email, SMS, and mobile push notifications. It includes a user
            management system for authorization and authentication , a cloud
            code platform and data storage facilites.
          </Text>

          <Heading
            mt={"4rem"}
            fontWeight={400}
            fontFamily={"'Crete Round', serif;"}
          >
            Conclusion
          </Heading>
          <Text fontSize={"1.4rem"} mt={"1rem"} lineHeight={1.45}>
            So Firebase is a really awesome library to make a MVP but you must choose it wisely , if you are planning to select it for permanent alternative to a sophisticated backend solution.
            All of the above mentioned alternatives have both paid and free tier to begin with. Hope this article helps you.
          
          </Text>
        </Flex>
      </Flex>
      <Footer />
    </>
  );
};

export default FirebaseAlternatives;
