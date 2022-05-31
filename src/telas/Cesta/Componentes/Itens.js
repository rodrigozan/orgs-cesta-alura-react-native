import React from 'react'
import { View, Image, StyleSheet } from 'react-native'

// Components
import Texto from '../../../componentes/Texto'

export default function Itens({ titulo, lista}) {
    return <>
        <Texto style={ estilos.titulo }> { titulo }</Texto>
        { lista.map(({ nome, imagem }) => {
            return <View style={ estilos.item }>
                <Image style={ estilos.imagem } source={ imagem } />
                <Texto style={ estilos.nome } key={nome}> { nome }</Texto>
            </View>
        })}
    </>
}

const estilos = StyleSheet.create({
    titulo: {
        color: "#464646",
        fontWeight: "bold",
        marginTop: 32,
        marginBottom: 8,
        fontSize: 20,
        lineHeight: 32
    },
    item: {
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: "#ececec",
        paddingVertical: 16,
        alignItems: "center"
    },
    imagem: {
        width: 46,
        height: 46
    },
    nome: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 11,
        color: "#464646"
    }
})