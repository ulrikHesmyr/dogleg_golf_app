import {DarkTheme} from "@react-navigation/native";

const darkTheme = {
    ...DarkTheme,
    colors: {
        ...DarkTheme.colors,
        primary: 'white',
        text: 'white',
        background: '#373737',
    },
};

export default darkTheme;