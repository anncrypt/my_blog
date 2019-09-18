import React, { useContext } from 'react';
import { Text, View, StyleSheet, FlatList, Button } from 'react-native';
import { Context } from '../context/BlogContext';
import { Feather } from '@expo/vector-icons';

const IndexScreen = () => {
  const { state, addBlogPost } = useContext(Context);

  return (
    <View>
      <Button 
        title="Add Post"
        onPress={addBlogPost} 
      />
      <FlatList 
        data={state}
        keyExtractor={blogPost => blogPost.title}
        renderItem={({item}) => {
          return (
            <View style={styles.rowStyle}>
              <Text style={styles.titleStyle}>{item.title}</Text>
              <Feather name="trash" style={styles.iconStyle} />
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  rowStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    borderBottomWidth: 1,
  },
  titleStyle: {
    fontSize: 18
  },
  iconStyle: {
    fontSize: 25
  }
});

export default IndexScreen;