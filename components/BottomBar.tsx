import { View, Text, TextInput, Pressable } from "react-native";
import React from "react";
import className from "twrnc";
import Emojee from "@/assets/icons/Emojee";
import Micro from "@/assets/icons/Micro";
import CameraIcon from "@/assets/icons/CameraIcon";
import MediaIcon from "@/assets/icons/MediaIcon";

const BottomBar = () => {
    return (
        <Pressable>
            <View
                style={className`p-3 flex-row items-center gap-1
                justify-between`}
            >
                <View
                    style={className`bg-gray-800 rounded-full p-1
                    flex-row items-center px-2 gap-2 w-[340px]`}
                >
                    <Emojee />
                    <TextInput
                        placeholder="Message"
                        style={className`text-xl text-gray-300 p-3 flex-1`}
                    />
                    {/**<MediaIcon/> */}
                    <CameraIcon/>
                </View>
                <View style={className`bg-green-600 p-3
                    rounded-full`}>
                    <Micro />
                </View>
            </View>
        </Pressable>
    );
};

export default BottomBar;
