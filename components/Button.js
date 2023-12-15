import { View, Text, Pressable } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import COLORS from "../constants/colors";
import { TouchableOpacity } from "react-native";

// const Button = (props) => {
//     const filledBgColor = props.color || COLORS.primary;
//     const outlinedColor = props.outlinedColor || COLORS.white;
//     const bgColor = props.filled ? filledBgColor : outlinedColor;
//     const textColor = props.filled ? COLORS.white : COLORS.primary;
//     return (
//         <TouchableOpacity
//             style={{
//                 ...styles.button,
//                 ...{ backgroundColor: bgColor },
//                 ...props.styles
//             }}
//             onPress={props.onPress}
//         >
//             <Text style={{ fontSize: 15, fontWeight: 500, position: "absolute", ... {color: textColor} }}>{props.title}</Text>
//         </TouchableOpacity>
//     )
// }

// const styles = StyleSheet.create({
//     button: {
//         paddingBottom: 16,
//         paddingVertical: 10,
//         borderColor: COLORS.outlinedColor,
//         borderWidth: 1,
//         borderRadius: 40,
//         alignItems: "center",
//         justifyContent: "center"
//     }
// }

// )

// export default Button

const Button = ({
    label = '',
    labelColor = COLORS.black,
    backgroundColor = COLORS.white,
    // borderColor = COLORS.primary,
    width,
    height,
    startIcon,
    endIcon,
    onPress
}) => {
    return (
        <View>
                <TouchableOpacity onPress={onPress}
                    style={[styles.button,
                    backgroundColor ? { backgroundColor: backgroundColor } : { backgroundColor: COLORS.white },
                    // borderColor ? { borderColor: borderColor } : { borderColor: COLORS.black },
                    width ? { width: width } : { width: "100%" },
                    height ? { height: height } : { height: 45 },]}
                >
                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", position: "absolute" }}>
                        {startIcon}
                        <Text style={[styles.buttonText, { color: labelColor }, { fontSize: 15, fontWeight: 500, paddingLeft: 10 }]}>{label}</Text>
                        {endIcon}
                    </View>
                </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        paddingBottom: 16,
        paddingVertical: 10,
        marginTop: 15,
        // borderColor: COLORS.outlinedColor,
        // borderWidth: 1,
        borderRadius: 40,
        alignItems: "center",
        justifyContent: "center"
    }
})

export default Button

