import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const ActionCard = () => {
    function openWebsite(websiteLink: string){
        Linking.openURL(websiteLink)
    }
  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headingContaier}>
            <Text style={styles.headerText}>
                What's new in JS 
            </Text>
        </View>
        <Image
            source={{
                uri: 'https://media.istockphoto.com/id/1646501097/photo/young-asian-woman-software-developers-using-computer-to-write-code-sitting-at-desk-with.jpg?s=1024x1024&w=is&k=20&c=OGnDObJjsDBsVOytkFZl9tRFbyWsDZGUkn6CviEww8Y='
            }}
            style={styles.cardImage}
        />
        <View style={styles.bodyContainer}>
            <Text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere esse itaque, nemo eius ab aspernatur alias illum illo libero eos suscipit consequuntur impedit exercitationem blanditiis, veritatis voluptate qui explicabo. Hic!
            </Text>
        </View>
        <View style={styles.footerContainer}>
            <TouchableOpacity
            onPress={() => openWebsite('https://www.youtube.com/')}
            >
                <Text style={styles.socialLinks}>Read More</Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={() => openWebsite('https://www.github.com/Rishabh6395/')}
            >
                <Text style={styles.socialLinks}>Follow Me</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default ActionCard

const styles = StyleSheet.create({
    headingText:{
        
    },
    card:{},
    elevatedCard:{},
    headingContaier:{},
    headerText:{},
    bodyContainer:{},
    socialLinks:{},
    footerContainer:{},
    cardImage:{
        height: 500
    },
})