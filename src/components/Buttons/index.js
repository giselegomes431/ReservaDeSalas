import React from "react"
import {View, Text,TouchableOpacity} from "react-native"
import { AntDesign } from '@expo/vector-icons';
import styles from "./style";
import { FontAwesome6 } from '@expo/vector-icons';

export default function Buttons(){
    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.iconButton}>
            <AntDesign name="arrowleft" size={24} color="white" />
            </TouchableOpacity>
            <View style={styles.iconUser}><FontAwesome6 name="user-circle" size={30} color="#211DFF" style={styles.user} /></View>
        </View>
    );
}