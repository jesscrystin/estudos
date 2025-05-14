import { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";

import ResultIMC from "../ResultImc/";

export default function Form() {

    const [altura, SetAltura] = useState(null);
    const [peso, SetPeso] = useState(null);
    const [messageImc, SetMessageImc] = useState("Preencha o peso e a altura");
    const [imc, setImc] = useState(null);
    const [textButton, SetTextButton] = useState("Calcular");

    function imcCalculator() {
        return setImc((peso / (altura * altura)).toFixed(2));
    }

    function validationImc() {
        if (peso !== null || altura !== null) {
            imcCalculator();
            SetPeso(null);
            SetAltura(null);
            SetMessageImc("Seu imc é igual a: ");
            SetTextButton("Calcular Novamente");
            return;
        } else {
            setImc(null);
            SetTextButton("Calcular");
            SetMessageImc("Preencha o peso e a altura");
        }
    }

    return (
        <View>
            <View>
                <Text>Altura</Text>
                <TextInput
                    placeholder="Ex. 1.75"
                    KeyBoardType="numeric"
                    onChangeText={SetAltura}
                    value={altura}
                ></TextInput>

                <Text>Peso</Text>
                <TextInput
                    placeholder="Ex. 75.365kg"
                    KeyBoardType="numeric"
                    onChangeText={SetPeso}
                    value={peso}>
                </TextInput>

                <Button
                    onPress={validationImc}
                    title={textButton}
                ></Button>
            </View>
            <ResultIMC
                messageResultImc={messageImc}
                ResultIMC={imc} />
        </View>
    );
}