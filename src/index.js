import React, { Component } from 'react';
import {
  View,
  ScrollView,
} from 'react-native';

import { colors, metrics } from './styles';

import Header from './components/Header';
import Post from './components/Post/Post';

export default class App extends Component {
  state = {
    posts: [
      {
        id: Math.random(),
        titulo: 'Aprendendo React Native',
        autor: 'Diego Schell Fernandes',
        descricao: 'Lorem ipsum nibh pellentesque purus etiam ut morbi sodales fringilla lectus orci consectetur porta, leo volutpat magna himenaeos porta class eget fringilla felis est tempuspurus etiam ut morbi pellentesque',
      },
      {
        id: Math.random(),
        titulo: 'Aprendendo React Native',
        autor: 'Diego Schell Fernandes',
        descricao: 'Lorem ipsum nibh pellentesque purus etiam ut morbi sodales fringilla lectus orci consectetur porta, leo volutpat magna himenaeos porta class eget fringilla felis est tempuspurus etiam ut morbi pellentesque.',
      },
      {
        id: Math.random(),
        titulo: 'Aprendendo React Native',
        autor: 'Diego Schell Fernandes',
        descricao: 'Lorem ipsum nibh pellentesque purus etiam ut morbi sodales fringilla lectus orci consectetur porta, leo volutpat magna himenaeos porta class eget fringilla felis est tempuspurus etiam ut morbi pellentesque.',
      },
      {
        id: Math.random(),
        titulo: 'Aprendendo React Native',
        autor: 'Diego Schell Fernandes',
        descricao: 'Lorem ipsum nibh pellentesque purus etiam ut morbi sodales fringilla lectus orci consectetur porta, leo volutpat magna himenaeos porta class eget fringilla felis est tempuspurus etiam ut morbi pellentesque.',
      },
      {
        id: Math.random(),
        titulo: 'Aprendendo React Native',
        autor: 'Diego Schell Fernandes',
        descricao: 'Lorem ipsum nibh pellentesque purus etiam ut morbi sodales fringilla lectus orci consectetur porta, leo volutpat magna himenaeos porta class eget fringilla felis est tempuspurus etiam ut morbi. pellentesque',
      },
      {
        id: Math.random(),
        titulo: 'Aprendendo React Native',
        autor: 'Diego Schell Fernandes',
        descricao: 'Lorem ipsum nibh pellentesque purus etiam ut morbi sodales fringilla lectus orci consectetur porta, leo volutpat magna himenaeos porta class eget fringilla felis est tempuspurus etiam ut morbi. pellentesque',
      },
    ],
  };

  render() {
    return (
      <View style={{ flex: metrics.flex, backgroundColor: colors.background }}>
        <Header />
        <ScrollView>
          {this.state.posts.map(post => <Post key={post.id} post={post} />)}
        </ScrollView>
      </View>
    );
  }
}
