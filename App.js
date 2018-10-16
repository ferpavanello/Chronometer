import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { n: 0, button: "Start" };
    this.timer = null;

    this.start = this.start.bind(this);
    this.clean = this.clean.bind(this);
  }

  start() {
    let s = this.state;

    if (this.timer != null) {
      clearInterval(this.timer);
      this.timer = null;
      s.button = "Start";
    } else {
      this.timer = setInterval(() => {
        let si = this.state;
        si.n += 0.1;
        this.setState(si);
      }, 100);

      s.button = "Stop";
    }

    this.setState(s);
  }

  clean() {
    if (this.timer != null) {
      clearInterval(this.timer);
      this.timer = null;
    }

    let s = this.state;
    s.n = 0;
    s.button = "Start";
    this.setState(s);
  }

  render() {
    return (
      <View style={styles.body}>
        <Image source={require("./images/relogio.png")} />
        <Text style={styles.timer}>{this.state.n.toFixed(1)}</Text>
        <View style={styles.buttonArea}>
          <TouchableOpacity style={styles.button} onPress={this.start}>
            <Text style={styles.textButton}>{this.state.button}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={this.clean}>
            <Text style={styles.textButton}>Clean</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    paddingTop: 20,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#2C1F30"
  },

  timer: {
    color: "#BAA07A",
    fontSize: 80,
    fontWeight: "bold",
    backgroundColor: "transparent",
    marginTop: -160
  },

  buttonArea: {
    flexDirection: "row",
    height: 40,
    marginTop: 80
  },

  button: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#886532",
    height: 40,
    borderRadius: 5,
    margin: 10
  },

  textButton: {
    fontSize: 17,
    color: "#FFF"
  }
});
