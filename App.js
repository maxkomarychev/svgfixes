import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Slider, Alert } from "react-native";
import Svg, {
  G,
  ClipPath,
  Polygon,
  Defs,
  Use,
  Path,
  Rect,
  Text as SvgText,
  Circle
} from "react-native-svg";

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
            width={300}
            height={300}
            viewBox="900 100 1000 1000"
            x="-8"
            y="-8"
          >
            <G scale={2} x="-8" y="-8">
              <G>
                <Path
                  d="M1163.14,27.261c27.408,0.001 49.659,22.252 49.659,49.659l0,152.841c-28.975,0 -52.5,23.525 -52.5,52.5c0,28.976 23.525,52.5 52.5,52.5l0,152.842c0,27.407 -22.251,49.658 -49.659,49.658l-1085.68,0c-27.407,0 -49.659,-22.251 -49.659,-49.658l0,-152.842c28.976,0 52.5,-23.524 52.5,-52.5c0,-28.975 -23.524,-52.499 -52.5,-52.5l0,-152.841c0,-27.407 22.251,-49.658 49.659,-49.659l1085.68,0Z"
                  fill="red"
                />
                <ClipPath id="_clip2">
                  <Path d="M1163.14,27.261c27.408,0.001 49.659,22.252 49.659,49.659l0,152.841c-28.975,0 -52.5,23.525 -52.5,52.5c0,28.976 23.525,52.5 52.5,52.5l0,152.842c0,27.407 -22.251,49.658 -49.659,49.658l-1085.68,0c-27.407,0 -49.659,-22.251 -49.659,-49.658l0,-152.842c28.976,0 52.5,-23.524 52.5,-52.5c0,-28.975 -23.524,-52.499 -52.5,-52.5l0,-152.841c0,-27.407 22.251,-49.658 49.659,-49.659l1085.68,0Z" />
                </ClipPath>
                <G
                  clipPath="url(#_clip2)"
                  onPress={() => {
                    // console.log("this does NOT work!")
                    Alert.alert("this does NOT work!", "", [{ text: "OK" }], {
                      cancelable: false
                    });
                  }}
                >
                  <G x="530" y="170">
                    <Rect
                      x="0"
                      y="0"
                      width="300"
                      height="70"
                      fill="green"
                      onPress={() => {
                        //  console.log("this works")
                        Alert.alert("this works", "", [{ text: "OK" }], {
                          cancelable: false
                        });
                      }}
                    />
                    <G x="10" y="10" scale="0.1">
                      <G>
                        <Path
                          d="M270.635,221.959c-5.621,5.62 -5.621,14.634 0,20.255c23.224,23.224 23.224,60.977 0,84.202l-121.956,121.955c-23.224,23.225 -60.977,23.225 -84.202,0l-18.346,-18.346c-23.225,-23.225 -23.225,-60.978 0,-84.202l121.955,-121.956c5.621,-5.62 5.621,-14.634 0,-20.255c-5.62,-5.62 -14.634,-5.62 -20.255,0l-121.955,121.956c-16.65,16.649 -25.876,38.813 -25.876,62.356c0,23.542 9.12,45.706 25.876,62.356l18.346,18.346c17.18,17.18 39.768,25.77 62.356,25.77c22.589,0 45.177,-8.59 62.357,-25.77l121.955,-121.955c34.359,-34.359 34.359,-90.353 0,-124.712c-5.515,-5.621 -14.635,-5.621 -20.255,0Z"
                          fill="white"
                        />
                        <Path
                          d="M486.23,61.72l-18.346,-18.346c-34.36,-34.36 -90.353,-34.36 -124.713,0l-121.955,121.955c-34.359,34.359 -34.359,90.353 0,124.712c5.621,5.621 14.635,5.621 20.255,0c5.621,-5.62 5.621,-14.634 0,-20.255c-23.224,-23.224 -23.224,-60.977 0,-84.202l121.956,-121.955c23.224,-23.225 60.977,-23.225 84.202,0l18.346,18.346c23.225,23.225 23.225,60.978 0,84.202l-121.955,121.956c-5.621,5.62 -5.621,14.634 0,20.255c2.757,2.757 6.469,4.242 10.074,4.242c3.606,0 7.318,-1.379 10.075,-4.242l121.955,-121.956c16.65,-16.649 25.876,-38.813 25.876,-62.356c0,-23.542 -9.12,-45.706 -25.77,-62.356Z"
                          fill="white"
                        />
                      </G>
                    </G>
                    <SvgText
                      x="100"
                      y="45"
                      fontFamily="'SanFranciscoDisplay-Regular', 'San Francisco Display', sans-serif"
                      fontSize="32"
                      fill="white"
                    >
                      Go To
                    </SvgText>
                  </G>
                </G>
              </G>
            </G>
          </Svg>
          {/* <Svg
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
          </Svg> */}
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
