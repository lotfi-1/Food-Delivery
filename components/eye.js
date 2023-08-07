import EyeOpen from '../assets/icons/eye-open.svg';
import EyeClosed from '../assets/icons/eye-closed.svg';
import { View, Animated, StyleSheet, Pressable } from 'react-native';

export default function Eye({ open, handelClick, color }) {

    return (
        <Pressable style={styles.view} onPress={handelClick}>
            {open ? <EyeOpen width={25} height={25} stroke={color} /> : <EyeClosed width={25} height={25} stroke={color} />}
        </Pressable>
    );
}

const styles = StyleSheet.create({
    view: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: '50%',
        right: 20,
        transform: [{ translateY: -20}],
    }
})