import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    formContext: {
        backgroundColor:"#FFFFFF",
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        borderBottomLeftRadius:30,
        borderBottomRightRadius:30,
        paddingTop:20,
        marginTop:30,
        width:"85%",
        height:"60%"
    },

    textForm: {
        color:"#0805A3",
        fontSize:22,
        paddingLeft:20,
        marginTop:10,
    },

    input: {
        width:"90%",
        borderRadius: 15,
        backgroundColor:"#ECEBFD",
        height:50,
        margin:12,
        paddingLeft:15,
        marginTop:20,
        marginLeft:16
    },

    buttonCadastrar: {
        borderRadius:15,
        alignItems:"center",
        justifyContent:"center",
        width:"90%",
        backgroundColor:"#211DFF",
        paddingTop:14,
        paddingBottom:14,
        marginLeft:16,
        margin:30,
    },
    buttonText: {
        color:"#FFFFFF",
        fontSize:22,
    },

    button: {
        paddingBottom:20

    },

    buttonCancelar: {
        color:"#0805A3",
        fontSize:15,
        paddingLeft:135,
    }
});

export default styles 