import { Button, TextInput } from "@react-native-material/core";
import React, { createContext, useEffect, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

const Home = ({ navigation }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        setData([
            {
                id: 1,
                img: "https://maivangthuduc.com/wp-content/uploads/2017/12/20-C%C3%82Y-XANH.jpg",
                title: "cay xanh",
                price: 20000,
            },
            {
                id: 2,
                img: "https://maivangthuduc.com/wp-content/uploads/2017/12/20-C%C3%82Y-XANH.jpg",
                title: "cay mai",
                price: 20000,
            },
            {
                id: 3,
                img: "https://maivangthuduc.com/wp-content/uploads/2017/12/20-C%C3%82Y-XANH.jpg",
                title: "cay",
                price: 20000,
            },
        ]);
    }, []);

    const handleBtnClick = (item) => {
        navigation.navigate("Cart", { product: { item } });
    };

    return (
        <View style={{ flex: 1, marginHorizontal: 10 }}>
            <View
                style={{
                    flexDirection: "row",
                    width: "100%",
                    justifyContent: "space-between",
                }}
            >
                <TextInput
                    variant="outlined"
                    label="Label"
                    style={{ width: "65%" }}
                />
                <Button title="Search" style={{ padding: 8 }} />
            </View>
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginTop: 50,
                }}
            >
                <View
                    style={{
                        width: "55%",
                        justifyContent: "space-between",
                    }}
                >
                    <View style={{}}>
                        <Text
                            style={{
                                fontSize: 30,
                                fontWeight: "700",
                                color: "red",
                            }}
                        >
                            Welcome!
                        </Text>
                        <Text style={{ marginTop: 10 }}>
                            chao mung ban den voi cai gi dochao mung ban den voi
                            cai gi dochao mung ban den voi cai gi do
                        </Text>
                    </View>
                    <Button
                        title="More to plan"
                        style={{ marginTop: 40, width: 150 }}
                    />
                </View>
                <Image
                    source={{
                        uri: "https://maivangthuduc.com/wp-content/uploads/2017/12/20-C%C3%82Y-XANH.jpg",
                    }}
                    style={{ width: 150, height: 250 }}
                />
            </View>
            <View
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                    backgroundColor: "#34eb58",
                    justifyContent: "space-between",
                    marginTop: 40,
                    paddingHorizontal: 10,
                    paddingVertical: 10,
                    borderRadius: 10,
                }}
            >
                <Image
                    source={{
                        uri: "https://maivangthuduc.com/wp-content/uploads/2017/12/20-C%C3%82Y-XANH.jpg",
                    }}
                    style={{ width: 70, height: 100 }}
                />
                <Text
                    style={{
                        flex: 1,
                        color: "#fff",
                        fontSize: 15,
                        fontWeight: "600",
                        marginLeft: 30,
                    }}
                >
                    Phan Dinh Nhat Gi Day Phan Dinh Nhat Gi Day Phan Dinh Nhat
                    Gi Day
                </Text>
            </View>
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginTop: 40,
                }}
            >
                {data.map((item, index) => (
                    <TouchableOpacity
                        style={{
                            paddingHorizontal: 3,
                            paddingVertical: 5,
                            backgroundColor: "#2e853f",
                            alignItems: "center",
                            width: "30%",
                            borderRadius: 10,
                        }}
                        key={item.id}
                        onPress={() => handleBtnClick(item)}
                    >
                        <View>
                            <Image
                                source={{
                                    uri: item.img,
                                }}
                                style={{ width: 60, height: 100 }}
                            />
                            <View
                                style={{
                                    backgroundColor: "#fff",
                                    width: "100%",
                                    borderRadius: 5,
                                    alignItems: "center",
                                }}
                            >
                                <Text>{item.title}</Text>
                                <Text>{item.price} vnd</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
};

export default Home;
