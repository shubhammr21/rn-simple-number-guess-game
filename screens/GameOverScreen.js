import React from "react"
import { Button, Image, StyleSheet, Text, View } from "react-native"
import BodyText from "../components/BodyText"
import TitleText from "../components/TitleText"

import Colors from "../constants/colors"

const GameOverScreen = props => {
  return (
    <View style={styles.screen}>
      <TitleText>Game Over</TitleText>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          // source={{
          //   uri:
          //     "https://abrahamswallet.com/wp-content/uploads/2017/12/samuel-ferrara-117219-1180x770.jpg"
          // }}
          source={require("../assets/success.png")}
          resizeMode="cover"
        />
      </View>
      <View style={styles.resultContainer}>
        <BodyText style={styles.resultText}>
          Number of rounds:{" "}
          <Text style={styles.highlight}>{props.roundsNumber}</Text>
        </BodyText>
        <BodyText style={styles.resultText}>
          Number was: <Text style={styles.highlight}>{props.userNumber}</Text>
        </BodyText>
      </View>
      <Button title="RESTART GAME" onPress={props.onRestartGame} />
    </View>
  )
}

export default GameOverScreen

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 200,
    borderWidth: 3,
    borderColor: "black",
    overflow: "hidden",
    margin: 30
  },
  image: {
    width: "100%",
    height: "100%"
  },
  resultContainer: {
    marginHorizontal: 30,
    marginVertical: 10
  },
  resultText: {
    textAlign: "center",
    fontSize: 20
  },
  highlight: {
    color: Colors.primary,
    fontFamily: "open-sans-bold"
  }
})
