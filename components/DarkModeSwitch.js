import {
    useColorMode,
    IconButton,
    Tooltip,
    useColorModeValue,
    Button
} from '@chakra-ui/react'
import lightSwitch from "../assets/audios/lightswitch.mp3"
import useSound from 'use-sound'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'


const DarkModeSwitch = ({bgColor}) => {

    const { colorMode, toggleColorMode } = useColorMode()

    const navColor = {
        light: 'gray.200',
        dark: 'gray.700'
    }

    const [play] = useSound(lightSwitch, {
        volume: 0.05,
        sprite: {
            on: [0, 300],
            off: [500, 300]
        }
    });

    const handleClick = () => {
        colorMode === "dark" ? play({ id: "on" }) : play({ id: "off" });
        toggleColorMode();
    };

    const iconColor = {
        light: 'black',
        dark: 'white'
    }
    return (
        <>
            {/* <IconButton
                aria-label="Toggle dark mode"
                icon={colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
                onClick={handleClick}
                color={iconColor[colorMode]}
                bg={useColorModeValue('gray.100', 'gray.900')}
            /> */}
            <Button 
                leftIcon={colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
                color={iconColor[colorMode]}
                bg={bgColor}
                onClick={handleClick}
                display={['none','initial']}
            >{useColorModeValue('Dark Mode', 'Light Mode')}</Button>
            <Button 
                leftIcon={colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
                color={iconColor[colorMode]}
                bg={bgColor}
                onClick={handleClick}
                display={['initial','none']}
            ></Button>
        </>
    )
}

export default DarkModeSwitch