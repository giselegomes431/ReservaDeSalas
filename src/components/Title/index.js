import React from "react"
import {View, Text} from "react-native"
import styles from "./style";
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Title(){
    return(
        <View >
            <Text style={styles.textTitle1}>Cadastrar</Text>
            <Text style={styles.textTitle2}>Professor</Text>
            <MaterialCommunityIcons 
            name="book-education" 
            size={100} 
            color="#FFFFFF" style={styles.iconTitle}/>

        </View>
    );
}