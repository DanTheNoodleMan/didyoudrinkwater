import React from "react";
import {View, Text, Button, StyleSheet} from 'react-native';

function WeightScreen({navigation}) {
    const [weight, setWeight] = React.useState(0 as number);
    return (
        <View>
          {/* Render your UI for SexScreen */}
          <Button title="Next" onPress={() => navigation.navigate('ActivityScreen')} />
        </View>
      );
}

export default WeightScreen;
