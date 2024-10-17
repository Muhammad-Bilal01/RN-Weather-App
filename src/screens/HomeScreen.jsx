import {
  View,
  Text,
  Image,
  SafeAreaView,
  TextInput,
  StyleSheet,
  Platform,
  StatusBar,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
// import { StatusBar } from "expo-status-bar";
import { theme } from "../themes";

import {
  CalendarDaysIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline";
import { MapPinIcon } from "react-native-heroicons/solid";

const HomeScreen = () => {
  const [showSearch, toggleSearch] = useState(false);
  const [locations, setLocations] = useState([1, 2, 3]);

  const handleLocation = (loc) => {
    console.log("location", loc);
  };

  return (
    <View className="flex-1 relative ">
      <StatusBar barStyle="light-content" />
      <Image
        blurRadius={70}
        source={require("../../assets/images/bg.png")}
        className="absolute h-full w-full"
      />
      <SafeAreaView style={styles.AndroidSafeArea} className="flex flex-1">
        {/* Search Section Here */}
        <View style={{ height: "7%" }} className="mx-4 relative z-50">
          <View
            className="flex-row justify-end items-center rounded-full"
            style={{
              backgroundColor: showSearch ? theme.bgWhite(0.2) : "transparent",
            }}
          >
            {showSearch ? (
              <TextInput
                placeholder="Search city"
                placeholderTextColor={"lightgray"}
                className="flex-1 pl-6 h-10 pb-1 text-base text-white"
              />
            ) : null}

            <TouchableOpacity
              onPress={() => toggleSearch(!showSearch)}
              style={{ backgroundColor: theme.bgWhite(0.3) }}
              className="rounded-full p-3 m-1"
            >
              <MagnifyingGlassIcon color={"white"} size={"25"} />
            </TouchableOpacity>
          </View>
          {locations.length > 0 && showSearch ? (
            <View className="rounded-3xl w-full absolute bg-gray-300 top-16">
              {locations.map((loc, index) => {
                let showBorder = index + 1 !== locations.length;
                let borderClass = showBorder
                  ? "border-b-2 border-b-gray-400"
                  : "";

                return (
                  <TouchableOpacity
                    onPress={() => handleLocation(loc)}
                    key={index}
                    className={`flex-row items-center p-3 px-4 border-0 mb-1 ${borderClass}`}
                  >
                    <MapPinIcon color={"gray"} size={20} />
                    <Text className="text-black text-md ml-2">
                      London, United Kingdom
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          ) : null}
        </View>
        {/* Forecast section */}
        <View className="mx-4 flex justify-around flex-1 mb-2">
          <Text className="text-white text-2xl text-center font-bold">
            London,
            <Text className="text-lg font-semibold text-center text-gray-300">
              United Kingdom
            </Text>
          </Text>
          {/* whether image */}
          <View className="flex-row justify-center">
            <Image
              source={require("../../assets/images/partlycloudy.png")}
              className="w-52 h-52"
            />
          </View>
          {/* degree celcius data */}
          <View className="space-y-2">
            <Text className="text-6xl text-white text-center font-bold ml-5">
              23&#176;
            </Text>

            <Text className="text-xl text-white text-center tracking-widest">
              Partly cloudy
            </Text>
          </View>
          {/* Other stats */}
          <View className="flex-row justify-between mx-4">
            <View className="flex-row space-x-2 items-center">
              <Image
                source={require("../../assets/icons/wind.png")}
                className="h-6 w-6"
              />
              <Text className="text-white font-semibold text-base">22 Km</Text>
            </View>
            <View className="flex-row space-x-2 items-center">
              <Image
                source={require("../../assets/icons/drop.png")}
                className="h-6 w-6"
              />
              <Text className="text-white font-semibold text-base">60%</Text>
            </View>
            <View className="flex-row space-x-2 items-center">
              <Image
                source={require("../../assets/icons/sun.png")}
                className="h-6 w-6"
              />
              <Text className="text-white font-semibold text-base">
                06:09 PM
              </Text>
            </View>
          </View>
        </View>
        {/* Forecast for next day */}
        <View className="mb-2 space-y-2">
          <View className="flex-row items-center mx-5 space-x-2">
            <CalendarDaysIcon color={"white"} size="20" />
            <Text className="text-white text-base">Daily Forecast</Text>
          </View>
          <ScrollView
            horizontal
            contentContainerStyle={{ paddingHorizontal: 15 }}
            showsHorizontalScrollIndicator={false}
          >
            <View
              className="flex justify-center items-center w-24 rounded-3xl py-3 space-y-1 mr-4"
              style={{ backgroundColor: theme.bgWhite(0.15) }}
            >
              <Image
                source={require("../../assets/images/heavyrain.png")}
                className="h-11 w-11"
              />
              <Text className="text-white">Monday</Text>
              <Text className="text-white text-xl font-semibold">13&#176;</Text>
            </View>
            <View
              className="flex justify-center items-center w-24 rounded-3xl py-3 space-y-1 mr-4"
              style={{ backgroundColor: theme.bgWhite(0.15) }}
            >
              <Image
                source={require("../../assets/images/heavyrain.png")}
                className="h-11 w-11"
              />
              <Text className="text-white">Tuesday</Text>
              <Text className="text-white text-xl font-semibold">13&#176;</Text>
            </View>
            <View
              className="flex justify-center items-center w-24 rounded-3xl py-3 space-y-1 mr-4"
              style={{ backgroundColor: theme.bgWhite(0.15) }}
            >
              <Image
                source={require("../../assets/images/heavyrain.png")}
                className="h-11 w-11"
              />
              <Text className="text-white">Wedneday</Text>
              <Text className="text-white text-xl font-semibold">13&#176;</Text>
            </View>
            <View
              className="flex justify-center items-center w-24 rounded-3xl py-3 space-y-1 mr-4"
              style={{ backgroundColor: theme.bgWhite(0.15) }}
            >
              <Image
                source={require("../../assets/images/heavyrain.png")}
                className="h-11 w-11"
              />
              <Text className="text-white">Thursday</Text>
              <Text className="text-white text-xl font-semibold">13&#176;</Text>
            </View>
            <View
              className="flex justify-center items-center w-24 rounded-3xl py-3 space-y-1 mr-4"
              style={{ backgroundColor: theme.bgWhite(0.15) }}
            >
              <Image
                source={require("../../assets/images/heavyrain.png")}
                className="h-11 w-11"
              />
              <Text className="text-white">Friday</Text>
              <Text className="text-white text-xl font-semibold">13&#176;</Text>
            </View>
            <View
              className="flex justify-center items-center w-24 rounded-3xl py-3 space-y-1 mr-4"
              style={{ backgroundColor: theme.bgWhite(0.15) }}
            >
              <Image
                source={require("../../assets/images/heavyrain.png")}
                className="h-11 w-11"
              />
              <Text className="text-white">Saturday</Text>
              <Text className="text-white text-xl font-semibold">13&#176;</Text>
            </View>
            <View
              className="flex justify-center items-center w-24 rounded-3xl py-3 space-y-1 mr-4"
              style={{ backgroundColor: theme.bgWhite(0.15) }}
            >
              <Image
                source={require("../../assets/images/heavyrain.png")}
                className="h-11 w-11"
              />
              <Text className="text-white">Sunday</Text>
              <Text className="text-white text-xl font-semibold">13&#176;</Text>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  AndroidSafeArea: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

export default HomeScreen;
