import React, { useState } from "react"
import {View, 
        Text,
        TextInput,
        TouchableOpacity,
        Vibration,
        } from "react-native"
import styles from "./style";

export default function Form(){
    const [errorMessage, setErrorMessage] = useState(null)
    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [telefone, setTelefone] = useState("")

    function verification(){
        if(!nome.trim() || !email.trim() || !telefone.trim()){
        Vibration.vibrate();
        setErrorMessage("campo obrigatório*")
        }
        else {
            setErrorMessage(null)
        }
    }

    function validation(){
        verification()
    }

    return(
        <View style={styles.formContext}>
            <View style={styles.box}>
                <Text style={styles.textForm}>Nome:</Text>
                <Text style={styles.errorMessage}>{errorMessage}</Text>
            </View>
            <TextInput
                placeholder="Ex.: João"
                keyboardType="ascii-capable"
                style={styles.input}
                onChangeText={setNome}
                value={nome}
                />

            <View style={styles.box}>
                <Text style={styles.textForm}>Email:</Text>
                <Text style={styles.errorMessage}>{errorMessage}</Text>
            </View>
            <TextInput
                placeholder="Ex.: joao@uesb.edu.br"
                keyboardType="email-address"
                style={styles.input}
                onChangeText={setEmail}
                value={email}
                />

            <View style={styles.box}>
                <Text style={styles.textForm}>Telefone:</Text>
                <Text style={styles.errorMessage}>{errorMessage}</Text>
            </View>
            <TextInput 
                placeholder="Ex.: 12345678901"
                keyboardType="numeric"
                style={styles.input}
                onChangeText={setTelefone}
                value={telefone}
                />

            <TouchableOpacity
                style={styles.buttonCadastrar}
            >
                <Text style={styles.buttonText} onPress={() => {validation()}}>Cadastrar</Text>
            </TouchableOpacity>

            <TouchableOpacity
            style={styles.button}>
                <Text style={styles.buttonCancelar}>Cancelar</Text>
            </TouchableOpacity>
        </View>
    );
}