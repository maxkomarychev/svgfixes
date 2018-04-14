import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Slider, Alert } from "react-native";
import Svg, { G, Polygon, Defs, Use, Circle } from "react-native-svg";

export default class App extends Component {
  state = {
    value: 0,
    layouts: {}
  };
  onValueChange = value => {
    this.setState({ value });
  };
  handleLayout = event => {
    this.setState({
      layouts: {
        ...this.state.layouts,
        [event.target]: event.nativeEvent.layout
      }
    });
  };
  render() {
    const { value, layouts } = this.state;
    return (
      <View style={styles.container}>
        <View style={{ backgroundColor: "lightgray" }}>
          <Svg
            width="300"
            height="300"
            viewBox="-1000 -1000 2000 2000"
            onLayout={this.handleLayout}
          >
            <G
              onLayout={this.handleLayout}
              onPressIn={() => {
                Alert.alert("Touch handled in group!", "", [{ text: "OK" }], {
                  cancelable: false
                });
              }}
            >
              <Use
                href="#square"
                fill="red"
                transform={`scale(3) skewX(${value / 3}) skewY(${value / 3})`}
                onLayout={this.handleLayout}
              />
              <Use
                href="#square"
                fill="green"
                transform={`translate(100 100) scale(3) rotate(${value})`}
                onPressIn={() => {
                  Alert.alert("Touch handled in use!", "", [{ text: "OK" }], {
                    cancelable: false
                  });
                }}
                onLayout={this.handleLayout}
              />
              <Use
                href="#star"
                fill="lime"
                transform={`translate(-700 -200) scale(3) rotate(${value})`}
                onLayout={this.handleLayout}
              />
            </G>
            <Defs>
              <Polygon id="square" points="0,0 0,100 100,100, 100,0" />
              <Polygon
                id="star"
                points="0,0 50,200 100,0 0,150 100,150"
                transform="scale(1 -1)"
              />
            </Defs>
          </Svg>
          {Object.values(layouts).map(({ x: left, y: top, width, height }) => (
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
          ))}
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
    alignItems: "center"
  }
});
