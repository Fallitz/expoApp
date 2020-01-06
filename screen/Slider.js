import { SliderBox } from 'react-native-image-slider-box';
import React, {Component} from 'react';
import { Button } from 'react-native';

export default class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        images: [
          'https://source.unsplash.com/1024x768/?nature',
          'https://source.unsplash.com/1024x768/?water',
          'https://source.unsplash.com/1024x768/?girl',
          'https://source.unsplash.com/1024x768/?tree'
        ]
      };
    }
    render() {
        return (
    <> 
<SliderBox
    images={this.state.images}
    onCurrentImagePressed={index =>
        console.warn(`image ${index} pressed`)
    }
/>
<Button onPress ></Button>


    </>
    );}}