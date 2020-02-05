import React, { PureComponent } from 'react';
import { View, StyleSheet, Animated } from 'react-native';

class Ball extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentWillMount() {
        this.position = new Animated.ValueXY(0, 0); // set the initial value of ball to x=0, y=0
        Animated.spring(this.position, {
            toValue: { x: 200, y: 500 } // changing the value of x=200 and y=500 
        }).start();
        console.log('sasas',this.position.getLayout())
    }

    render() {
        return (
            <Animated.View style={this.position.getLayout()}>
                <View style={styles.ball} />
            </Animated.View>
        );
    }
}

const styles = StyleSheet.create({
    ball: {
        height: 60,
        width: 60,
        borderRadius: 30,
        borderWidth: 30,
        borderColor: 'black'
    }
})
export default Ball;
