import Cockaded1 from '../assets/images/cockaded_1.jpg';
import Cockaded2 from '../assets/images/cockaded_2.jpg';
import Cockaded3 from '../assets/images/cockaded_3.jpg';
import Cockaded4 from '../assets/images/cockaded_4.jpg';
import call1 from "../assets/sounds/Calls1.mp3";
import call2 from "../assets/sounds/Calls2.mp3";
import call3 from "../assets/sounds/Calls3.mp3";
import call4 from "../assets/sounds/Calls4.mp3";
import drum1 from "../assets/sounds/Drum1.mp3";
import juvenileCall1 from "../assets/sounds/JuvenileCall1.mp3";

const itemCardData = [
  {
    name: 'Red-Cockaded Woodpecker',
    images: [
      { src: Cockaded1, caption: "Red-Cockaded Woodpecker on tree with noticable tags on it's feet" },
      { src: Cockaded2, caption: "Red-Cockaded Woodpecker fluttering its wings near an opening of its nest" },
      { src: Cockaded3, caption: 'Illustration of the three Red-Cockaded Woodpeckers drawn by John James Audobon' },
      { src: Cockaded4, caption: 'Red-Cockaded Woodpecker sticking its head out of a longleaf pine nest' },
    ],
    conservationStatus: 'Near Threatened',
    sounds: [
      { src: call1, callType: 'Call 1', date: 'March 02, 2007', citation: 'Recorded by Martha Fischer / Macaulay Library', duration: '0:21' },
      { src: call2, callType: 'Call 2', date: 'May 21, 2012', citation: 'Recorded by Andrew Spencer', duration: '0:20' },
      { src: call3, callType: 'Call 3', date: 'May 21, 2012', citation: 'Recorded by Andrew Spencer', duration: '0:23' },
      { src: call4, callType: 'Call 4', date: 'May 02, 1963', citation: 'Recorded by Robert C. Stein / Macaulay Library', duration: '0:10' },
      { src: drum1, callType: 'Drum 1', date: 'April 25, 1982', citation: 'Recorded by Rose Ann Rowlett / Macaulay Library', duration: '0:21' },
      { src: juvenileCall1, callType: 'Juvenile Call 1', date: 'June 04, 2017', citation: 'Recorded by Paul Marvin / Macaulay Library', duration: '0:12' },
    ],
  },
];

export default itemCardData;