import Cockaded1 from '../assets/images/cockaded_1.jpg';
import Cockaded2 from '../assets/images/cockaded_2.jpg';
import Cockaded3 from '../assets/images/cockaded_3.jpg';
import call1 from "../assets/sounds/Calls1.mp3";
import call2 from "../assets/sounds/Calls2.mp3";
import call3 from "../assets/sounds/Calls3.mp3";
import drum1 from "../assets/sounds/Drum1.mp3";
import juvenileCall1 from "../assets/sounds/JuvenileCall1.mp3";

const itemCardData = [
  {
    name: 'Red-Cockaded Woodpecker',
    images: [
      Cockaded1,
      Cockaded2,
      Cockaded3
    ],
    caption: 'A cute Red-Cockaded Woodpecker chillin.',
    conservationStatus: 'Near Threatened',
    sounds: [
      { src: call1, callType: 'Call 1', date: 'March 02, 2007', citation: 'Recorded by Martha Fischer / Macaulay Library', duration: '0:21' },
      { src: call2, callType: 'Call 2', date: '2022-01-02', citation: 'Recorded by Jane Doe', duration: '0:45' },
      { src: call3, callType: 'Call 3', date: '2022-01-03', citation: 'Recorded by John Doe', duration: '1:00' },
      { src: drum1, callType: 'Drum 1', date: '2022-01-04', citation: 'Recorded by Jane Doe', duration: '0:30' },
      { src: juvenileCall1, callType: 'Juvenile Call 1', date: '2022-01-05', citation: 'Recorded by John Doe', duration: '0:45' },
    ],
  },
];

export default itemCardData;