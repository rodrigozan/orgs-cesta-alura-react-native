import React from 'react'
import { View, Image, StyleSheet, ScrollView } from 'react-native'

// Components
import Topo from './Componentes/Topo'
import Detalhes from './Componentes/Detalhes'
import Itens from './Componentes/Itens'

export default function Cesta({ topo, detalhes, itens }) {
    return <ScrollView>
        <Topo { ...topo } />
        <View style={estilos.cesta}>
            <Detalhes { ...detalhes } />
            <Itens { ...itens }/>
        </View>
    </ScrollView>
}

const estilos = StyleSheet.create({
    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 26
    },
})
