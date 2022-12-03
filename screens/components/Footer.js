import React from 'react';
import { View } from 'react-native';
import Home from './../svg/home.svg';
import Cart from './../svg/cart.svg';
import Order from './../svg/order.svg';

const Footer = ({ styles }) => {
    return (
        <View style={{ flexDirection: 'row', height: 35, justifyContent: 'space-between', marginHorizontal: 40, marginTop: 10 }}>
            <View>
                <Home width={50} height={40} />
            </View>
            <View>
                <Cart width={50} height={40} />
            </View>
            <View>
                <Order width={50} height={40} />
            </View>
        </View>
    );
}

export default Footer;
