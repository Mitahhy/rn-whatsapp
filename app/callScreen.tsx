import { View, Text, Image } from 'react-native'
import React from 'react'
import className from 'twrnc'
import LeftArrowIcon from '@/assets/icons/LeftArrowIcon'
import CommunitiesIcon from '@/assets/icons/CommunitiesIcon'
import ElipsisHorizontal from '@/assets/icons/ElipsisHorizontal'
import VideoIcon from '@/assets/icons/VideoIcon'
import SpeakerIcon from '@/assets/icons/SpeakerIcon'
import Micro from '@/assets/icons/Micro'
import CallsIcon from '@/assets/icons/CallsIcon'

const callScreen = () => {
    return (
        <View style={className`flex-1 bg-gray-900 p-3 flex-col
        justify-between`}>
            {/**header*/}
            <View style={className`flex-row justify-between
                item-center`}>
                <View style={className`bg-gray-800 p-3
                    rounded-full`}>
                <LeftArrowIcon/>
                </View>
                <View>
                    <Text style={className`text-white text-xl
        font-semibold`}>User</Text>
                    <Text style={className`text-gray-400 text-sm`}>
                        Calling
                    </Text>
                </View>
                <View style={className`bg-gray-800 p-3 rounded-full`}>
                    <CommunitiesIcon/>
                </View>
            </View>
            {/**End header*/}

            {/*Body*/}
            <View style={className`flex-col justify-center
                items-center`}>
                <Image style={className`h-44 w-44 rounded-full
                    bg-gray-800`}/>
            </View>
            {/*End Body*/}

            {/*Footer*/}
            <View style={className`bg-gray-800 p-2 rounded-3xl
                flex-row justify-between items-center`}>
                <View style={className`bg-gray-900 p-3 rounded-full`}>
                    <ElipsisHorizontal/>
                </View>

                <View style={className`bg-gray-900 p-3 rounded-full`}>
                    <VideoIcon/>
                </View>

                <View style={className`bg-gray-900 p-3 rounded-full`}>
                    <SpeakerIcon/>
                </View>
                <View style={className`bg-gray-900 p-3 rounded-full`}>
                    <Micro/>
                </View>

                <View style={className`bg-red-600 p-3 rounded-full`}>
                    <CallsIcon/>
                </View>
            </View>
            {/**End Footer */}

        </View>
    )
}

export default callScreen