import {View, Text, StatusBar, ScrollView, SafeAreaView} from 'react-native';
import React from 'react';
import {Colours} from '../Utils/Colors';
import Header from '../Components/Header';
import Bio from '../Components/Bio';
import About from '../Components/About';
import Services from '../Components/Services';
import Projects from '../Components/Projects';
import Footer from '../Components/Footer';
import Links from '../Components/Links';

const Home = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: Colours.white,
      }}>
        <StatusBar backgroundColor={'white'} barStyle={'dark-content'}/>
      <Header />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Bio />
        <About />
        <Services />
        <Projects />
        <Footer/>
        <Links/>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
