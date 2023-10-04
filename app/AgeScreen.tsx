import React from "react";
import {View, Text, Button, StyleSheet} from 'react-native';

function AgeScreen({navigation}) {
    const [age, setAge] = React.useState(0 as number);
    return (
        <View>
          {/* Render your UI for SexScreen */}
          <Button title="Next" onPress={() => navigation.navigate('WeightScreen')} />
        </View>
    );
}

export default AgeScreen;