import React from "react"
import {View, 
        Text,
        TextInput,
        TouchableOpacity} from "react-native"
import styles from "./style";

export default function Form(){
 
    return(
        <View style={styles.formContext}>
            <Text style={styles.textForm}>Nome:</Text>
            <TextInput
                placeholder="Ex.: João"
                keyboardType="ascii-capable"
                style={styles.input}
                />

            <Text style={styles.textForm}>Email:</Text>
            <TextInput
                placeholder="Ex.: joao@uesb.edu.br"
                keyboardType="email-address"
                style={styles.input}
                />

            <Text style={styles.textForm}>Telefone:</Text>
            <TextInput 
                placeholder="Ex.: 12345678901"
                keyboardType="numeric"
                style={styles.input}
                />

            <TouchableOpacity
                style={styles.buttonCadastrar}
            >
                <Text style={styles.buttonText}>Cadastrar</Text>
            </TouchableOpacity>

            <TouchableOpacity
            style={styles.button}>
                <Text style={styles.buttonCancelar}>Cancelar</Text>
            </TouchableOpacity>
        </View>
    );
}