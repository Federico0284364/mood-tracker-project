import { moodIcons } from '../data.js';
const { veryHappyIcon, happyIcon, neutralIcon, sadIcon, verySadIcon } = moodIcons;

export function findIconByMood(moodString){
  const mood = moodString?.toLowerCase();
  const iconMap = {
    "very happy": veryHappyIcon,
    "happy": happyIcon,
    "neutral": neutralIcon,
    "sad": sadIcon,
    "very sad": verySadIcon,
  };
  return iconMap[mood] || null;
}

export function getSleepRange(sleepHours){
    let range;
    if (sleepHours >= 9){
      range = "9+ hours"
    } else if (sleepHours >= 7){
      range = "7-8 hours"
    } else if (sleepHours >= 5){
      range = "5-6 hours"
    } else if (sleepHours >= 3){
      range = "3-4 hours"
    } else {
      range = "0-2 hours"
    }
    return range;
  }