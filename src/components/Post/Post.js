import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

const Post = props => (
  <View style={styles.container}>
    <View style={styles.titleContainer}>
      <Text style={styles.title}>
        {props.post.titulo}
      </Text>
      <Text style={styles.author}>
      {props.post.autor}
      </Text>
    </View>
    <View style={styles.textContainer}>
      <Text style={styles.text}>
      {props.post.descricao}
      </Text>
    </View>
  </View>
);

export default Post;
