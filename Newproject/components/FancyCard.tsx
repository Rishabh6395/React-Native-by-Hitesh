import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FancyCard = () => {
  return (
    <View>
      <Text style={styles.headingText}>StarGirl</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
            source={{
                uri: 'https://images.pexels.com/photos/7269731/pexels-photo-7269731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            }}
            style={styles.cardImage}
        />
        <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Bathroom</Text>
            <Text style={styles.cardLabel}>Asthetic</Text>
            <Text style={styles.cardDescription}>A girl is waiting for someone who hookup with here.. </Text>
            <Text style={styles.cardFooter}>Oh Yeah!!</Text>
        </View>
      </View>
    </View>
  )
}

export default FancyCard

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8,
        color: '#450fa3',
    },
    card:{
        width: 350,
        height: 360,
        borderRadius: 6,
        marginVertical: 12,
        marginHorizontal: 16
    },
    cardElevated:{
        backgroundColor: '#FFFFFF',
        elevation: 3,
        shadowColor: "#7a33f5",
        shadowOffset: {
            width: 1,
            height: 1
        }
    },
    cardImage:{
        height: 180,
        marginBottom: 8,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6
    },
    cardBody:{
        flex: 1,
        flexGrow: 1,
        paddingHorizontal: 12
    },
    cardTitle:{
        color: '#000000',
        fontSize: 22,
        fontWeight: 'semibold',
        marginBottom: 4
    },
    cardLabel:{
        color: '#000000',
        fontSize: 14,
        marginBottom: 6
    },
    cardDescription:{
        color: '#0d0121',
        fontSize: 12,
        marginBottom: 34,
        flexShrink: 1,
        marginTop: 6
    },
    cardFooter:{
        color: '#000000',
    }
})