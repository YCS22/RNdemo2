import React, { useState } from 'react';
import { Card, Button } from 'react-native-paper';
import { Text, View, ScrollView } from 'react-native'
const Buttons = () => {

    const [like, SetLike] = useState(0);
    const [share, SetShare] = useState(0);
    const [repost, SetRepost] = useState(0);
    const [comment, SetComment] = useState(0);

    return (
        <View>

            <Card.Actions>
                <Button onPress={() => SetLike(like + 1)}>Lıke <Text>{like}</Text></Button>
                <Button onPress={() => SetShare(share + 1)}>Share <Text>{share}</Text></Button>
                <Button onPress={() => SetRepost(repost + 1)}>Repost <Text>{repost}</Text></Button>
                <Button onPress={() => SetComment(comment + 1)}>Comment <Text>{comment}</Text></Button>
            </Card.Actions>


        </View>
    );
};

export default Buttons;