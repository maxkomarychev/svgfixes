import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Slider, Alert } from "react-native";
import Svg, { G, Polygon } from "react-native-svg";

export default class App extends Component {
  state = {
    value: 0,
    bbox: {}
  };
  onValueChange = value => {
    this.setState({ value });
  };
  render() {
    const { value, bbox: { x: left, y: top, width, height } } = this.state;
    return (
      <View style={styles.container}>
        <View>
          <Svg width="200" height="200" viewBox="-300 -300 600 600">
            <G transform="translate(-1000 -1000)">
              <Polygon
                points="100,10 40,198 190,78 10,78 160,198"
                fill="lime"
                onLayout={event => {
                  console.log("onLayout", event.nativeEvent.layout);
                  this.setState({
                    bbox: event.nativeEvent.layout
                  });
                }}
                onPressIn={() => {
                  Alert.alert(
                    "Touch handled in object!",
                    "",
                    [{ text: "OK" }],
                    {
                      cancelable: false
                    }
                  );
                }}
                transform={`translate(995 995) scale(0.5 1) rotate(${value})`}
              />
            </G>
          </Svg>
          <View
            style={{
              position: "absolute",
              borderWidth: 2,
              borderColor: "red",
              top,
              left,
              width,
              height
            }}
            pointerEvents="none"
          />
        </View>
        <Slider
          style={{ width: "90%" }}
          maximumValue={360}
          minimumValue={-360}
          value={0}
          onValueChange={this.onValueChange}
        />
        <Text>Value: {value}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});
