import React from 'react'
import { View, Image, StyleSheet } from 'react-native'

// Components
import Topo from './Componentes/Topo'
import Detalhes from './Componentes/Detalhes'

export default function Cesta({ topo, detalhes, }) {
    return <>
        <Topo { ...topo } />
        <View style={estilos.cesta}>
            <Detalhes { ...detalhes } />
        </View>
    </>
}

const estilos = StyleSheet.create({
    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 26
    },
})
