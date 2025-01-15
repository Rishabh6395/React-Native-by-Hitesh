import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ContactList() {
    const contacts = [
        {
          uid: 1,
          name: "John Doe",
          status: "Available",
          imageurl: "https://randomuser.me/api/portraits/men/1.jpg"
        },
        {
          uid: 2,
          name: "Jane Smith",
          status: "Busy",
          imageurl: "https://randomuser.me/api/portraits/women/2.jpg"
        },
        {
          uid: 3,
          name: "Alice Johnson",
          status: "Offline",
          imageurl: "https://randomuser.me/api/portraits/women/3.jpg"
        },
        {
          uid: 4,
          name: "Bob Williams",
          status: "At work",
          imageurl: "https://randomuser.me/api/portraits/men/4.jpg"
        },
        {
          uid: 5,
          name: "Emma Brown",
          status: "On vacation",
          imageurl: "https://randomuser.me/api/portraits/women/5.jpg"
        },
        {
          uid: 6,
          name: "Charlie Davis",
          status: "Online",
          imageurl: "https://randomuser.me/api/portraits/men/6.jpg"
        },
        {
          uid: 7,
          name: "Sophia Miller",
          status: "Away",
          imageurl: "https://randomuser.me/api/portraits/women/7.jpg"
        }
      ]
      
  return (
    <View>
      <Text style={styles.headerText}>ContactList</Text>
      <ScrollView
        style={styles.container}
        scrollEnabled={false}
      >
        {contacts.map(({uid, name, status, imageurl}) => (
            <View key={uid} style={styles.userCard}>
                <Image
                source={{
                    uri: imageurl
                }}
                style={styles.userImage}
                />
                <View>
                    <Text style={styles.userName}>{name}</Text>
                    <Text style={styles.userStatus}>{status}</Text>
                </View>
            </View>
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headerText:{
        fontSize: 24,
        fontWeight :'bold',
        paddingHorizontal: 8
    },
    container:{
        paddingHorizontal: 16,
        marginBottom: 12
    },
    userCard:{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 4,
        backgroundColor: '#caa2fc',
        padding: 8,
        borderRadius: 14
    },
    userImage:{
        width: 60,
        height: 60,
        borderRadius: 60 / 2,
        marginRight: 14
    },
    userName:{
        fontSize: 16,
        fontWeight: 600,
    },
    userStatus:{
        fontSize: 12
    },
})