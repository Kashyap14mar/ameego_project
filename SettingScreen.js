import React, { Component } from 'react';

import { StyleSheet, View,Text} from 'react-native';

export default class Setting extends Component<{}> {

  render() {

    return (
      <View style={styles.container}>


        <View style={styles.RectangleShapeView} />
<Text style={{ position: absolute,
width: 125,
height: 15,
left: 49,
top: 539,

fontfamily: 'Roboto',
fontstyle: normal,
fontweight: 500,
fontsize: 14,
lineheight: 16,
letterspacing: 0.04,

color: "#FFFFFF",}}>
Cancel
</Text>
<View style={styles.RectangleShapeView} />
<Text style={{ position: absolute,
width: 125,
height: 15,
left: 49,
top: 539,

fontfamily: 'Roboto',
fontstyle: normal,
fontweight: 500,
fontsize: 14,
lineheight: 16,
letterspacing: 0.04,

color: "#FFFFFF",}}>
Help & Support
</Text>

<View style={{position: absolute,
left: 0,
right: 0,
top: 0,
bottom: 13.25,

background: "#000000",}}>
  
  <Text style={{position: absolute,
left: 8.27,
right: 83.47,
top: 51.2,
bottom: 36.75,

fontfamily: 'Roboto',
fontstyle: normal,
fontweight: 400,
fontsize: 10,
lineheight: 12,
textalign: center,
letterspacing: 0.03,

color: "#FFFFFF"}}>Home</Text>

 <Text style={{position: absolute,
left: 29.6,
right: 54.4,
top: 51.2,
bottom: 37.95,

fontfamily: 'Roboto',
fontstyle: normal,
fontweight: 400,
fontsize: 10,
lineheight: 12,
textalign: center,
letterspacing: 0.03,

color: "#FFFFFF"}}>Wishlist</Text>

<Text style={{position: absolute,
left: 59.73,
right: 29.33,
top: 51.2,
bottom: 35.54,

fontfamily: 'Roboto',
fontstyle: normal,
fontweight: 400,
fontsize: 10,
lineheight: 12,
textalign: center,
letterspacing: 0.03,

color: "#FFFFFF"}}>Cart</Text>
 <Text style={{position: absolute,
left: 84.27,
right: 4.8,
top: 51.2,
bottom: 34.34,

fontfamily: 'Roboto',
fontstyle: normal,
fontweight: 400,
fontsize: 10,
lineheight: 12,
textalign: center,
letterspacing: 0.03,

color: "#FFFFFF"}}>Profile</Text>
</View>
      </View>
    );
  }
}


const styles = StyleSheet.create({

  container: {

    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

  
  RectangleShapeView: {

    boxsizing: borderbox,

    position: absolute,
    width: 303,
    height: 30,
    left: 36,
    top: 532,
    
    border: 1.5,
  

  }

});