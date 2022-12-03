import React from 'react';
import { Text, View } from 'react-native';
import { Avatar } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Hamburger from './../svg/hamburger.svg';
import Location from './../svg/map-pin.svg';

const Header = ({ styles }) => {
    return (
        <View style={styles.headerContainer}>
            <TouchableOpacity>
                <Hamburger width={30} height={33} />
            </TouchableOpacity>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View>
                    <Location width={28} height={28} />
                </View>
                <View style={{ marginLeft: 10, alignItems: 'center' }}>
                    <Text style={styles.areaText}>Little Whinging</Text>
                    <Text style={styles.countryText}>United States.</Text>
                </View>
            </View>
            <View>
                <Avatar
                    size={45}
                    rounded
                    avatarStyle={styles.avatarStyle}
                    source={{ uri: "https://randomuser.me/api/portraits/men/36.jpg" }}
                />
            </View>
        </View>
    );
}

export default Header;
