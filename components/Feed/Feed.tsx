import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

function Content() {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.highBar}>
        <Text style={styles.backInHighBar}>Back</Text>
        <Text style={styles.contentInHighBar}>Feed</Text>
        <Text style={styles.filterInHighBar}>Filter</Text>
      </View>
      <TextInput style={styles.searchInput} placeholder="Search" />

      <View>
        <View style={styles.singleHeader}>
            <View style={styles.headerInPhoto}></View>
            <View>
                <View style={styles.headerInAgoAndHeader}>
                   <Text style={styles.headerInHead}>Header</Text>
                   <Text style={styles.headerInTime}>8m ago</Text>
                </View>
                <Text style={styles.headerInDescription}>He'll want to use your yacht, and I don't want this thing smelling like fish.</Text>
            </View>
        </View>
        <View style={styles.singleHeader}>
            <View style={styles.headerInPhoto}></View>
            <View>
                <View style={styles.headerInAgoAndHeader}>
                   <Text style={styles.headerInHead}>Header</Text>
                   <Text style={styles.headerInTime}>8m ago</Text>
                </View>
                <Text style={styles.headerInDescription}>He'll want to use your yacht, and I don't want this thing smelling like fish.</Text>
            </View>
        </View>
        <View style={styles.singleHeader}>
            <View style={styles.headerInPhoto}></View>
            <View>
                <View style={styles.headerInAgoAndHeader}>
                   <Text style={styles.headerInHead}>Header</Text>
                   <Text style={styles.headerInTime}>8m ago</Text>
                </View>
                <Text style={styles.headerInDescription}>He'll want to use your yacht, and I don't want this thing smelling like fish.</Text>
            </View>
        </View>
        <View style={styles.singleHeader}>
            <View style={styles.headerInPhoto}></View>
            <View>
                <View style={styles.headerInAgoAndHeader}>
                   <Text style={styles.headerInHead}>Header</Text>
                   <Text style={styles.headerInTime}>8m ago</Text>
                </View>
                <Text style={styles.headerInDescription}>He'll want to use your yacht, and I don't want this thing smelling like fish.</Text>
            </View>
        </View>
        <View>
           <View style={styles.bigHeader}></View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  highBar: {
    width: 343,
    height: 36,
    margin:"auto",
    marginTop: 60, // Absolute mövqeyini dəyişdirin və margin istifadə edin
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    textAlign: "center",
  },

  backInHighBar: {
    color: "#5DB075",
    fontSize: 16,
    fontWeight: "500",
    lineHeight: 19,
    letterSpacing: 0,
    textAlign: "left",
  },

  contentInHighBar: {
    color: "#000000",
    fontSize: 30,
    fontWeight: "600",
    lineHeight: 36,
    letterSpacing: 0,
    textAlign: "center",
  },

  filterInHighBar: {
    color: "#5DB075",
    fontSize: 16,
    fontWeight: "500",
    lineHeight: 19,
    letterSpacing: 0,
    textAlign: "right",
  },

  searchInput: {
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 100,
    backgroundColor: "#F6F6F6",
    margin:"auto",
    // marginLeft: 16,
    // marginRight: 16,
    width: 343,
    height: 50,
    marginTop: 20, // Yuxarı ilə məsafəni artırmaq üçün marginTop əlavə edin
    color: "#BDBDBD",
    fontSize: 16,
    fontWeight: "500",
    lineHeight: 19,
    textAlign: "left",
    padding: 16,
    marginBottom:16
  },
  headerInPhoto:{
    width:50,
    height:50,
    backgroundColor:"#F6F6F6",
    borderRadius:8,
    marginRight:16
  },
  singleHeader:{
    width:350,
    margin:"auto",
    display:"flex",
    flexDirection:"row",
    marginBottom:16
  },
  headerInAgoAndHeader:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between",
    width:284,
    marginBottom:8
  },
  headerInHead:{
    fontSize:16,
    fontWeight:"600",
    lineHeight:19,
    width:57,
    height:19
  },
  headerInTime:{
    fontSize:14,
    fontWeight:400,
    lineHeight:17,
    color:"#BDBDBD",
    width:50,
    height:17,
  },
  headerInDescription:{
    fontSize:14,
    fontWeight:"400",
    lineHeight:17,
    width:269,
    height:34,
    marginBottom:16
  },
  bigHeader:{
    backgroundColor:"#F0F0F0",
    borderRadius:8,
    width:350,
    height:240,
    margin:"auto",
    marginBottom:8
  }
});

export default Content;
