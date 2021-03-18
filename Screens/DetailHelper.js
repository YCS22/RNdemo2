import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPostById, getCommentByPostId } from '../actions';
import { Text, View, FlatList, ScrollView } from 'react-native'
import { Card, Avatar } from 'react-native-paper';

class DetailHelper extends Component {


    componentDidMount() {

        this.props.getPostById(this.props.id);
        this.props.getCommentByPostId(this.props.id)

    }

    render() {
        const LeftContent = props => <Avatar.Icon {...props} icon="comment-outline" />

        console.log(this.props.postid)
        console.log(this.props.getComment)
        return (
            <View style={{ flex: 1, alignItems: "center" }}>
                <Card style={{ marginTop: 10, marginHorizontal: 5, marginVertical: 10, borderRadius: 20 }}>
                    <FlatList
                        data={this.props.getComment}
                        keyExtractor={(list) => list.id.toString()}
                        renderItem={(list) => {
                            if (list !== null) {
                                return <View style={{ alignItems: "center" }}>
                                    <Card.Title title={list.item.email} left={LeftContent} />

                                    <Card.Content><Text >{list.item.body}</Text></Card.Content>




                                </View>
                            }

                        }}


                    />
                </Card>
            </View>
        );
    }
}

const mapStateToProps = state => {
    return {
        postid: state.GetPostById,
        getComment: state.getComment
    }
}



export default connect(mapStateToProps, { getPostById, getCommentByPostId })(DetailHelper);