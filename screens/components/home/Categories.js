import React from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import app from '../../helpers/AppHelper';
import Briyani from './../../svg/briyani.svg';
import Pizza from './../../svg/pizza.svg';


const Categories = ({ styles }) => {
    return (
        <>
            <Text style={styles.categoryTitle}>Top Categories</Text>
            <View style={styles.headerContainer}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <View style={{ alignItems: 'center', marginRight: 10 }}>
                        <Briyani width={75.76} height={79.06} />
                        <Text style={{ fontFamily: app.fontFamily, color: app.textPrimary, fontSize: 16 }}>Briyani</Text>
                    </View>
                    <View style={{ alignItems: 'center', marginRight: 10 }}>
                        <Pizza width={80} height={80} />
                        <Text style={{ fontFamily: app.fontFamily, color: app.textPrimary, fontSize: 16 }}>Pizza</Text>
                    </View>
                    <View style={{ alignItems: 'center', marginRight: 10 }}>
                        <Briyani width={75.76} height={79.06} />
                        <Text style={{ fontFamily: app.fontFamily, color: app.textPrimary, fontSize: 16 }}>Briyani</Text>
                    </View>
                    <View style={{ alignItems: 'center', marginRight: 10 }}>
                        <Pizza width={80} height={80} />
                        <Text style={{ fontFamily: app.fontFamily, color: app.textPrimary, fontSize: 16 }}>Pizza</Text>
                    </View>
                    <View style={{ alignItems: 'center', marginRight: 10 }}>
                        <Briyani width={75.76} height={79.06} />
                        <Text style={{ fontFamily: app.fontFamily, color: app.textPrimary, fontSize: 16 }}>Briyani</Text>
                    </View>
                    <View style={{ alignItems: 'center', marginRight: 10 }}>
                        <Pizza width={80} height={80} />
                        <Text style={{ fontFamily: app.fontFamily, color: app.textPrimary, fontSize: 16 }}>Pizza</Text>
                    </View>
                </ScrollView>

            </View>
        </>

    );
}

const styles = StyleSheet.create({})

export default Categories;
