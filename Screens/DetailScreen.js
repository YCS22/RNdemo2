import React from 'react';
import { Text, View, ScrollView } from 'react-native'
import Header from '../Components/Header';
import DetailHelper from './DetailHelper';
import { Card } from 'react-native-paper';
import Buttons from '../Components/Buttons';
const DetailScreen = ({ navigation }) => {
    const id = navigation.getParam('id');
    const list = navigation.getParam('list');



    return (
        <View style={{ flex: 1 }}>
            <Header text="Detail Screen" iconname="folder" />




            <Card style={{ marginLeft: 6, marginTop: 20, borderRadius: 20, width: 400 }} >
                <ScrollView horizontal >
                    <Card.Title title={list.title} ></Card.Title>

                </ScrollView>
                <Card.Content style={{ alignItems: "center" }} >
                    <Text style={{ textAlign: "center", fontSize: 18 }}>
                        {list.id}
                        {list.body}
                    </Text>


                </Card.Content>

                <Buttons />
            </Card>

            <DetailHelper id={id} />


        </View>
    );
};

export default DetailScreen;

