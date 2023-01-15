

import React from "react"; 

import { Text, View } from "react-native"; 


  
const User = () => { 

  return ( 

    <View style={{ flex: 1, alignItems: "center", 

                   justifyContent: "center" }}> 

      <Text style={{ color: "#FFFFF", fontSize: 10,fontStyle:normal,fontWeight:400,fontfamily:Roboto, lineheight:12 }}> 

      Order Placed on Sunday, 23 Jan 
      Order Id: 257564183

      </Text> 

<Text style={{ color: "#FFFFF", fontSize: 10,fontStyle:normal,fontWeight:400,fontfamily:Roboto, lineheight:12 }}> 

Indian Art Villa
Copper Jug & Glass

      </Text> 

      <Text style={{ color: "#F85F98", fontSize: 12,fontStyle:normal,fontWeight:600,fontfamily:Roboto, lineheight:14 }}> 

      Estimated Delivery Date Sun, 30 Jan

      </Text> 
      <Text style={{position: absolute,
width: 175,
height: 21,
left: 39,
top: 213,

fontfamily: 'Roboto',
fontstyle: normal,
fontweight: 400,
fontsize: 14,
lineheight: 16,
letterspacing: 0.06,

color: "#FFFFFF",
}}>

      Orderd Sunday, 23 Jan
      Shipped Monday, 24 Jan
      Out for delivery
      Deliverd
      </Text>

    
     </View>
    
    
    

  ); 
}; 


  

export default User;