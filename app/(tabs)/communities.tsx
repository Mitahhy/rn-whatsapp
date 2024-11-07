import { View, Text, FlatList, Pressable } from 'react-native'
import React from 'react'
import Header from '@/components/Header'
import CommunityItem from '@/components/CommunityItem'
import data from '@/assets/data/channelItems.json'
import className from 'twrnc'
import CameraIcon from '@/assets/icons/CameraIcon'
import { router } from 'expo-router'

const communities = () => {
  return (
    <View>
      <Header title='Communities' />
      <FlatList data={data} renderItem={({ item }) =>
        <CommunityItem source={item.image} title={item.name} />} />
      <Pressable onPress={() => router.push('/cameraScreen')} style={className`bg-green-500 p-3 rounded-xl 
        absolute bottom-[-179px] right-2`}>
        <CameraIcon />
      </Pressable>
    </View>
  )
}

export default communities