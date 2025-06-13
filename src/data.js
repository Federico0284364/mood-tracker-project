import veryHappyIcon from "/mood-laugh-svgrepo-com.svg";
import happyIcon from "/mood-smile-svgrepo-com.svg";
import neutralIcon from "/mood-flat-svgrepo-com.svg";
import sadIcon from "/mood-frown-svgrepo-com.svg";
import verySadIcon from "/mood-sad-svgrepo-com.svg";

export const availableMoods = ["Very sad", "Sad", "Neutral", "Happy", "Very happy"];

export const moodIcons = {
	veryHappyIcon,
	happyIcon,
	neutralIcon,
	sadIcon,
	verySadIcon,
};

export const availableSleepRanges = [
	"0-2 hours",
	"3-4 hours",
	"5-6 hours",
	"7-8 hours",
	"9+ hours",
];

export const DUMMY_RECORD_LIST =  [{},
  {
    date: new Date('2025-06-10T08:00:00'),
    mood: 'Happy',
    sleep: '7-8 hours',
    comment: 'Feeling pretty good today!'
  },
  {
    date: new Date('2025-06-11T08:00:00'),
    mood: 'Very happy',
    sleep: '9+ hours',
    comment: 'Slept like a baby, super energized.'
  },
  {
    date: new Date('2025-06-12T08:00:00'),
    mood: 'Neutral',
    sleep: '5-6 hours',
    comment: 'Just a normal day, nothing special.'
  },
  {
    date: new Date('2025-06-13T08:00:00'),
    mood: 'Sad',
    sleep: '3-4 hours',
    comment: 'Couldn’t sleep well, feeling down.'
  },
  {
    date: new Date('2025-06-14T08:00:00'),
    mood: 'Very sad',
    sleep: '0-2 hours',
    comment: 'Tough night, really tired and upset.'
  }
];
