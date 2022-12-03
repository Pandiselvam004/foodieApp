import React from 'react';
import { View, SafeAreaView } from 'react-native';
import styles from './styles/home';
import Footer from './components/Footer';
import Header from './components/Header';
import { Divider } from 'react-native-elements';
import SearchSection from './components/home/SearchSection';
import Categories from './components/home/Categories';

const Home = () => {
    return (
        <SafeAreaView barStyle="dark-content" style={{ flex: 1, justifyContent: 'space-between', }}>
            <Header styles={styles} />
            <View style={{ flex: 1 }}>
                <SearchSection />
                <Categories styles={styles} />
            </View>
            {/* <Divider width={1} color={"lightgrey"} /> */}
            {/* <Footer styles={styles} /> */}
        </SafeAreaView>
    );
}

export default Home;
