import { Button } from "@react-native-material/core";
import React, { useContext, useEffect, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { CartContext } from "../../App";

const Cart = ({ navigation, route }) => {
    const { item } = route.params.product;
    const [product, setProduct] = useState({ ...item, quantity: 1 });
    const [cart, setCart] = useState([]);

    const cartContext = useContext(CartContext);

    useEffect(() => {
        const check = cartContext.cart.find((item) => item.id === product.id);

        console.log(check);

        if (check) {
            // setCart([...cartContext.cart]);
            // cartContext.setCart([...cartContext.cart]);
            handleIncreaseProduct(product);
        } else {
            setCart([...cartContext.cart, product]);
            cartContext.setCart([...cartContext.cart, product]);
        }
    }, []);

    const handleIncreaseProduct = (product) => {
        const newCart = cartContext.cart.map((item) => {
            if (item.id === product.id) {
                const newItem = {
                    ...item,
                    quantity: item.quantity + 1,
                };
                return newItem;
            }
            return item;
        });
        setCart([...newCart]);
        cartContext.setCart([...newCart]);
    };

    const handleDecreaseProduct = (product) => {
        const newCart = cartContext.cart.map((item) => {
            if (item.id === product.id) {
                if (item.quantity <= 1) {
                    return item;
                }

                const newItem = {
                    ...item,
                    quantity: item.quantity - 1,
                };
                return newItem;
            }
            return item;
        });
        setCart([...newCart]);
        cartContext.setCart([...newCart]);
    };

    const handleRemoveItem = (product) => {
        console.log(cart);
        const newCart = cart.filter((item) => item.id !== product.id);
        setCart([...newCart]);
        cartContext.setCart([...newCart]);
    };

    return (
        <View>
            {cart.map((item, index) => (
                <View key={index} style={{ flexDirection: "row" }}>
                    <Image
                        source={{
                            uri: item.img,
                        }}
                        style={{ width: 60, height: 100 }}
                    />
                    <View style={{ marginLeft: 10 }}>
                        <Text>{item.title}</Text>
                        <Text>{item.price}</Text>
                        <View
                            style={{
                                flexDirection: "row",
                                justifyContent: "space-between",
                                width: "70%",
                            }}
                        >
                            <View
                                style={{
                                    flexDirection: "row",
                                    width: 50,
                                    justifyContent: "space-between",
                                }}
                            >
                                <TouchableOpacity
                                    onPress={() => handleIncreaseProduct(item)}
                                >
                                    <Text>+</Text>
                                </TouchableOpacity>
                                <Text>{item.quantity}</Text>
                                <TouchableOpacity
                                    onPress={() => handleDecreaseProduct(item)}
                                >
                                    <Text>-</Text>
                                </TouchableOpacity>
                            </View>
                            <Button
                                title="remove"
                                onPress={() => handleRemoveItem(item)}
                            />
                        </View>
                    </View>
                </View>
            ))}
        </View>
    );
};

export default Cart;
