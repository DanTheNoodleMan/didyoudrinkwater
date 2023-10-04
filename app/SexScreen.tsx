import React from "react";
import {View, Text, Button, StyleSheet} from 'react-native';

function SexScreen({navigation}) {
    const [sex, setSex] = React.useState("" as string);
    return (
        <View>
          {/* Render your UI for SexScreen */}
          <Button title="Next" onPress={() => navigation.navigate('AgeScreen')} />
        </View>
      );
}

export default SexScreen;
