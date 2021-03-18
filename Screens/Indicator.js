import React, { Component } from 'react';
import { Text, View, FlatList, ActivityIndicator } from 'react-native'
import Header from '../Components/Header'


class Indicator extends Component {


    constructor(props) {
        super(props)
        this.state = {
            data: [],
            page: 1,

        }
    }

    componentDidMount() {
        this.getData()


    }


    getData = async () => {
        const apiUrl = "https://jsonplaceholder.typicode.com/posts/?_limit=10&_page=" + this.state.page
        fetch(apiUrl).then((res) => res.json())
            .then((resJson) => {
                this.setState({
                    data: this.state.data.concat(resJson),

                })
            })
    }

    handleLoadMore = () => {
        this.setState({ page: this.state.page + 1 }, this.getData)
    }

    renderRow = ({ item }) => {
        return (
            <View>
                <Text>{item.title} {item.body}</Text>

            </View>
        )
    }


    renderFooter = () => {
        return (

            <View>
                <ActivityIndicator size="large" />
            </View>
        )
    }

    render() {

        return (
            <View style={{ flex: 1 }}>
                <Header text="Home Screen" />
                <FlatList
                    data={this.state.data}
                    keyExtractor={(list) => list.id.toString()}
                    onEndReached={this.handleLoadMore}
                    renderItem={this.renderRow}
                    onEndReachedThreshold={0}
                    ListFooterComponent={this.renderFooter}



                />
            </View>



        );
    }
}



export default Indicator;