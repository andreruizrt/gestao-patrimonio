import { Dimensions, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');

const metrics = {
    smallMargin: 5,
    baseMargin: 10,
    doubleBaseMargin: 20,
    screenWidth: width < height ? width : height,
    screenHeight: width < height ? height : width,
    tabBarHeight: 54,
    reactNavBarHeight: (Platform.OS === 'ios') ? 17 : 0, // Não sei o do Android
    navBarHeight: (Platform.OS === 'ios') ? 64 : 54,
    statusBarHeight: (Platform.OS === 'ios') ? 20 : 0,
    baseRadius: 3,
    // Mudar para valores dinamicos de acordo com a tela
    // INPUT
    inputSize: 100,
    inputMargin: 5,
    inputPadding: 10,
    inputWidth: 100,
    inputHeight: 52,
    inputContainer: 30,
    inputBorderRadius: 12,
};

export default metrics;