import React from "react"
import {
  Button,
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View
} from "react-native"
import BodyText from "../components/BodyText"
import MainButton from "../components/MainButton"
import TitleText from "../components/TitleText"

import Colors from "../constants/colors"

const GameOverScreen = props => {
  return (
    <ScrollView>
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
        <MainButton onPress={props.onRestartGame}>RESTART GAME</MainButton>
      </View>
    </ScrollView>
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
    width: Dimensions.get("window").width * 0.7,
    height: Dimensions.get("window").width * 0.7,
    borderRadius: (Dimensions.get("window").width * 0.7) / 2,
    borderWidth: 3,
    borderColor: "black",
    overflow: "hidden",
    marginVertical: Dimensions.get("window").height / 30
  },
  image: {
    width: "100%",
    height: "100%"
  },
  resultContainer: {
    marginHorizontal: 30,
    marginVertical: Dimensions.get("window").height / 60
  },
  resultText: {
    textAlign: "center",
    fontSize: Dimensions.get("window").height < 400 ? 16 : 20
  },
  highlight: {
    color: Colors.primary,
    fontFamily: "open-sans-bold"
  }
})
