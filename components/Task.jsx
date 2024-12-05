import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Task = (props) => {
  return (
    <View styles={styles.item}>
      <View syles={styles.itemLeft}>
        <View style={styles.squareIcon}>
            <Text style={styles.itemText}>{props.text}</Text>
    </View>
    <View style={styles.circularIcon}></View>
    </View>
    </View>
  )
}

export default task

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'centered',
        justifyContent: 'space-between',
        margin: 20,
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    squareIcon: {
        width: 24,
        height: 24,
        backgroundColor: '#55bcf6',
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 15,
    },
    itemText: {
        maxWidth: '80%'
    },
    circularIcon: {
        width: 12,
        height: 12,
        borderColor: '#55bcf6',
        borderWidth: 2,
        borderRadius: 5,
    },
});