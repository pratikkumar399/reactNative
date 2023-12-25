import React, {useState, useEffect} from 'react';
import {
  View,
  Image,
  Text,
  Touchable,
  TouchableOpacity,
  StyleSheet,
  Button,
} from 'react-native';

import {darkGreen} from './Constants';

import axios from 'axios';

const UserData = () => {
  const [userData, setUserData] = useState(null);
  const [userIndex, setUserIndex] = useState(1);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://random-data-api.com/api/users/random_user?size=${userIndex}`,
      );
      setUserData(response.data[0]);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [userIndex]);

  const handleNext = () => {
    setUserIndex(prevIndex => prevIndex + 1);
  };

  const handlePrevious = () => {
    if (userIndex > 1) {
      setUserIndex(prevIndex => prevIndex - 1);
    }
  };
  return (
    // <Background>
    <View style={{alignItems: 'center'}}>
      {userData && (
        <View>
          {/* Include other user information fields */}
          <Image
            source={{uri: userData.avatar}}
            style={{
              height: 170,
              width: 170,
              borderRadius: 85,
              borderWidth: 2,
              borderColor: 'black',
            }}
          />
        </View>
      )}
      <View
        style={{
          backgroundColor: 'white',
          height: 700,
          width: 460,
          borderTopLeftRadius: 130,
          paddingTop: 50,
          alignItems: 'center',
        }}>
        {userData && (
          <>
            <Text style={styles.mainContainer}>Id: {userData.id}</Text>
            <Text style={styles.mainContainer}>UId: {userData.uid}</Text>
            <Text style={styles.mainContainer}>
              Password: {userData.password}
            </Text>
            <Text style={styles.mainContainer}>
              First Name : {userData.first_name}
            </Text>
            <Text style={styles.mainContainer}>
              Last Name : {userData.last_name}
            </Text>
            <Text style={styles.mainContainer}>
              UserName : {userData.username}
            </Text>
            <Text style={styles.mainContainer}>Email {userData.email}</Text>
          </>
        )}

        <TouchableOpacity style={styles.btnStyle} onPress={handlePrevious}>
          <Text style={styles.textStyle}>Previous</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnStyle} onPress={handleNext}>
          <Text style={styles.textStyle}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
    // </Background>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    width: '78%',
    paddingRight: 16,
    marginBottom: 10,
  },
  mainContainer: {
    borderRadius: 100,

    color: darkGreen,
    paddingHorizontal: 10,
    paddingVertical: 10,
    width: '78%',
    backgroundColor: 'rgb(220,220, 220)',
    marginVertical: 10,
  },
  btnStyle: {
    color: 'white',
    backgroundColor: 'green',
    borderRadius: 100,
    alignItems: 'center',
    width: 350,
    paddingVertical: 5,
    marginVertical: 10,
  },
  textStyle: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
  },
});

export default UserData;
