import { Text, View } from "react-native";

export default function ResultIMC(props) {
    return (
        <View>
            <Text>{props.messageResultImc}</Text>
            <Text>{props.resultIMC}</Text>
        </View>

    );
}