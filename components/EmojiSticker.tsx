  import { ImageSourcePropType } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';


  type Props = {
    imageSize: number;
    stickerSource: ImageSourcePropType;
  };

  export default function EmojiSticker({ imageSize, stickerSource }: Props) {
    const scaleimage = useSharedValue(imageSize)
    const translateX = useSharedValue(0)
    const translateY = useSharedValue(0)

    const drag = Gesture.Pan().onChange(event => {
      translateX.value += event.changeX;
      translateY.value += event.changeY;
    })

    const containerStyle = useAnimatedStyle(() => {
      return{
        transform:[
          {
            translateX: translateX.value,
          },
          {
            translateY: translateY.value,
          }
        ]
      }
    })

    const doubletap = Gesture.Tap()
    .numberOfTaps(2)
    .onStart(() => {
      if(scaleimage.value !== imageSize*2){
        scaleimage.value = scaleimage.value * 2;
      } else {
        scaleimage.value = Math.round(scaleimage.value / 2);
      }
    })

    const imageStyle = useAnimatedStyle(() => {
    return {
      width: withSpring(scaleimage.value),
      height: withSpring(scaleimage.value),
    };
  });
    return (
      <GestureDetector gesture={drag}>
      <Animated.View style={[containerStyle, { top: -350 }]}>
        <GestureDetector gesture={doubletap}>
        <Animated.Image source={stickerSource} resizeMode='contain' 
        style={[imageStyle, {width: imageSize, height: imageSize} ]} />
        </GestureDetector>
      </Animated.View>
      </GestureDetector>
    );
  }
