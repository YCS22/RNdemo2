import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllPost } from '../actions/index';
import { Text, View, FlatList, TouchableOpacity, ScrollView } from 'react-native'
import Header from '../Components/Header'
import { Card, Avatar } from 'react-native-paper';
import Buttons from '../Components/Buttons';
class HomeScreen extends Component {

    componentDidMount() {
        this.props.getAllPost();
    }





    render() {
        const navigation = { navigation }
        const LeftContent = props => <Avatar.Icon {...props} icon="comment-outline" />

        return (


            <View style={{ flex: 1 }} >
                <Header text="HOME SCREEN" iconname="home" />




                <FlatList
                    data={this.props.AllPost}
                    keyExtractor={(list) => list.id.toString()}
                    renderItem={(list) => {

                        return (

                            <View style={{ alignItems: "center" }}>

                                <Card style={{ margin: 10, marginTop: 10, borderRadius: 20, width: 400 }} >
                                    <ScrollView horizontal >
                                        <Card.Title

                                            title={list.item.title} left={LeftContent} />
                                    </ScrollView>
                                    <Card.Content>
                                        <Text style={{ textAlign: "center", fontSize: 18 }}>
                                            {list.item.body}
                                        </Text>
                                    </Card.Content>
                                    <Card.Content>
                                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Detail', { id: list.item.id, list: list.item })}>

                                            <Text style={{ textAlign: "center", fontSize: 24 }}>

                                                See Detail

                                            </Text>

                                        </TouchableOpacity>
                                    </Card.Content>
                                    <Buttons />
                                </Card>
                            </View>
                        )


                    }
                    }
                />


            </View>


        );
    }
}


const mapStateToProps = state => {
    return {
        AllPost: state.AllPost
    }
}




export default connect(mapStateToProps, { getAllPost })(HomeScreen);

/*
<View>


<View>
    <Header text="Home Screen" iconname="home" />
</View>


<View style={{ alignItems: "center" }}>

    <FlatList
        data={this.props.AllPost}
        keyExtractor={(list) => list.id.toString()}
        renderItem={(list) => {
            return (
                <View >

                <Card style={{ margin: 10, marginTop: 10, borderRadius: 20, height: 100, }} >
                    <Card.Title title={list.item.title} left={LeftContent} />
                    <Card.Content>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Detail', { id: list.item.id, list: list.item })}>

                        </TouchableOpacity>
                    </Card.Content>
                </Card>




            </View>
            )}}


    />
</View>
</View>
*/