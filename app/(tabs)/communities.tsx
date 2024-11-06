import { View, Text, FlatList } from 'react-native'
import React from 'react'
import Header from '@/components/Header'
import CommunityItem from '@/components/CommunityItem'
import data from '@/assets/data/channelItems.json'
import className from 'twrnc'

const communities = () => {
  return (
    <View style={className`flex-1`}>
      <Header title='Communities' />
      <FlatList data={data} renderItem={({item})=>
      <CommunityItem source={item.image} title={item.name}/> } />
    </View>
  )
}

export default communities