import React from 'react'
import { StyleSheet, Image, View } from 'react-native'

// Components
import Texto from '../../../componentes/Texto'

export default function Detalhes({ nome, logoFazenda, nomeFazenda, descricao, preco}) {
    return <>
        <Texto style={ estilos.nome }>{ nome }</Texto>
        <View style={ estilos.fazenda }>
            <Image source={ logoFazenda } style={ estilos.imgFazenda } />
            <Texto style={ estilos.nomeFazenda }>{ nomeFazenda }</Texto>
        </View>

        <Texto style={ estilos.descricao }>{ descricao }</Texto>
        <Texto style={ estilos.preco }> { preco }</Texto>
    </>
}

const estilos = StyleSheet.create({
    nome: {
        color: "#464646",
        fontSize: 26,
        lineHeight: 42,
        fontWeight: "bold"
    },
    fazenda: {
        flexDirection: "row",
        paddingVertical: 12
    },
    imgFazenda: {
        width: 32,
        height: 32
    },
    nomeFazenda: {
        color: "#464646",
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 12,
    },
    descricao: {
        color: "#a3a3a3",
        fontSize: 16,
        lineHeight: 26
    },
    preco: {
        color: "#2a9f85",
        fontWeight: "bold",
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8
    }
})