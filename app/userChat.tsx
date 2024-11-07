import { View, Text } from 'react-native'
import React from 'react'
import UserHeader from '@/components/UserHeader'
import BottomBar from '@/components/BottomBar'
import className from 'twrnc'

const userChat = () => {
  return (
    <View style={className`flex-1 bg-gray-900
    justify-betwwen`}>
      <UserHeader/>

      <View style={className`flex-1 p-2 items-start`}>
        <Text style={className`text-white text-xl p-2
          bg-gray-900 rounded-xl`}>Hello Spagoo
          <Text style={className`text-xs text-gray-300 
            ml-3`}>08:21pm</Text></Text>
         <Text style={className`text-white text-xl p-2
          bg-green-800 rounded-xl mt-3 ml-75`}>Hi Ali
          <Text style={className`text-xs text-gray-300 
            ml-3`}>08:22pm</Text></Text>
        
        <Text style={className`text-white text-xl p-2
          bg-gray-900 rounded-xl`}>Where are you now?
          <Text style={className`text-xs text-gray-300 
            ml-3`}>08:22pm</Text></Text>
         <Text style={className`text-white text-xl p-2
          bg-green-800 rounded-xl mt-3 ml-75`}>I'm in
          Skardu now
          <Text style={className`text-xs text-gray-300 
            ml-3`}>08:23pm</Text></Text>
      </View>

      <BottomBar/>
    </View>
  )
}

export default userChat