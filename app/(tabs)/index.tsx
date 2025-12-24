import Buttons from "@/components/Buttons";
import CircleButton from "@/components/CircleButton";
import EmojiList from "@/components/EmojiList";
import EmojiPicker from "@/components/EmojiPicker";
import EmojiSticker from "@/components/EmojiSticker";
import IconButton from "@/components/IconButton";
import ImageViewer from "@/components/ImageViewer";
import domtoimage from 'dom-to-image';
import * as ImagePicker from 'expo-image-picker';
import * as MediaLibrary from 'expo-media-library';
import { useEffect, useRef, useState } from "react";
import { ImageSourcePropType, Platform, StyleSheet, View } from "react-native";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { captureRef } from 'react-native-view-shot';

const PlaceholderImage = require('../../assets/images/background-image.png')

export default function Index() {
  const [selectedImage, setselectedImage] = useState<string | undefined>(undefined);
  const [showAppOptions, setshowAppOptions] = useState<boolean>(false);
  const [isModalVisible, setisModalVisible] = useState<boolean>(false);
  const [PickedEmoji, setPickedEmoji] = useState<ImageSourcePropType | undefined>(undefined);
  const [permissionResponse, requestPermission] = MediaLibrary.usePermissions();

  useEffect(() => {
    if (!permissionResponse?.granted) {
      requestPermission();
    }
  }, [])

  const imageRef = useRef<View>(null)

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    })

    if (!result.canceled) {
      setselectedImage(result.assets[0].uri);
      setshowAppOptions(true);
    } else {
      alert('Pick an image')
    }
  }

  const onReset = () => {
    setshowAppOptions(false);
  }

  const onAddSticker = () => {
    console.log('Clicked')
    setisModalVisible(true);
  }

  const onModalClose = () => {
    setisModalVisible(false);
  }

 const onSaveImageAsync = async () => {
    if (Platform.OS !== 'web') {
      try {
        const localUri = await captureRef(imageRef, {
          height: 440,
          quality: 1,
        });

        await MediaLibrary.saveToLibraryAsync(localUri);
        if (localUri) {
          alert('Saved!');
        }
      } catch (e) {
        console.log(e);
      }
    } else {
      try {
        const dataUrl = await domtoimage.toJpeg(imageRef.current, {
          quality: 0.95,
          width: 320,
          height: 440,
        });

        let link = document.createElement('a');
        link.download = 'sticker-smash.jpeg';
        link.href = dataUrl;
        link.click();
      } catch (e) {
        console.log(e);
      }
    }
  };

  return (
    <GestureHandlerRootView style={styles.container}>
      <View style={styles.imagecontainer}>
        <View ref={imageRef} collapsable={false}>
          <ImageViewer ImageSource={selectedImage || PlaceholderImage} />
          {PickedEmoji && <EmojiSticker imageSize={40} stickerSource={PickedEmoji} />}
        </View>
      </View>
      {showAppOptions ? (
        <View style={styles.optionsContainer}>
          <View style={styles.optionsRow}>
            <IconButton icon="refresh" label="Reset" onPress={onReset} />
            <CircleButton onPress={onAddSticker}/>
            <IconButton icon="save-alt" label="Save" onPress={onSaveImageAsync} />
          </View>
        </View>

      ) : (
        <View style={styles.containersec}>
          <Buttons onPress={pickImageAsync} theme='primary' label="Choose a Photo" />
          <Buttons label="Use this Photo" onPress={() => { setshowAppOptions(true), setisModalVisible(true) }} />
        </View>
      )}
      <EmojiPicker isVisible={isModalVisible} onClose={onModalClose}>
        <EmojiList onSelect={setPickedEmoji} onCloseModal={onModalClose} />
      </EmojiPicker>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#25292e',
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imagecontainer: {
    flex: 1,
  },
  containersec: {
    flex: 1 / 3,
  },
  optionsContainer: {
    position: 'absolute',
    bottom: 80,
  },
  optionsRow: {
    alignItems: 'center',
    flexDirection: 'row',
  },
})
