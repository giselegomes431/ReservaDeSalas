import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    formContext: {
        backgroundColor:"#FFFFFF",
        paddingTop:20,
        width:"85%",
        height:"55%",
        borderRadius:30,
    },

    textForm: {
        color:"#0805A3",
        fontSize:22,
        paddingLeft:20,
    },

    input: {
        width:"90%",
        borderRadius: 15,
        backgroundColor:"#ECEBFD",
        height:50,
        margin:12,
        paddingLeft:15,
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
        margin:25,
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
        paddingLeft:138,
        textDecorationLine:"underline"
    },

    errorMessage: {
        fontSize:10,
        color:"red",
        fontWeight:"bold",
        paddingLeft:10,
        paddingTop:10
    },

    box: {
        flexDirection:"row",
    }
});

export default styles 