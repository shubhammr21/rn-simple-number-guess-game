import React, { useState } from "react"
import { SafeAreaView, StyleSheet, View } from "react-native"
import * as Font from "expo-font"
import AppLoading from "expo-app-loading"
import Header from "./components/Header"
import GameOverScreen from "./screens/GameOverScreen"
import GameScreen from "./screens/GameScreen"
import StartGameScreen from "./screens/StartGameScreen"

export default function App() {
  const [userNumber, setUserNumber] = useState()
  const [guessRounds, setGuessRounds] = useState(0)
  const [dataLoaded, setDataLoaded] = useState(false)

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={() =>
          Font.loadAsync({
            "open-sans": require("./assets/Fonts/OpenSans-Regular.ttf"),
            "open-sans-bold": require("./assets/Fonts/OpenSans-Bold.ttf")
          })
        }
        onFinish={() => setDataLoaded(true)}
        onError={error => console.log(error)}
      />
    )
  }

  const startGameHandler = selectedNumber => {
    setUserNumber(selectedNumber)
  }

  const restartGameHandler = () => {
    setUserNumber(0)
    setGuessRounds(0)
  }

  const gameOverHandler = numOfRounds => {
    setGuessRounds(numOfRounds)
  }

  return (
    <SafeAreaView style={styles.screen}>
      <Header title={"Guess a Number"} />
      {userNumber ? (
        guessRounds <= 0 ? (
          <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />
        ) : (
          <GameOverScreen
            roundsNumber={guessRounds}
            userNumber={userNumber}
            onRestartGame={restartGameHandler}
          />
        )
      ) : (
        <StartGameScreen onStartGame={startGameHandler} />
      )}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  screen: {
    flex: 1
  }
})
