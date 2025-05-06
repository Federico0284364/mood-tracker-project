export function findIconByMood(moodString){
  const mood = moodString?.toLowerCase();
  const iconMap = {
    "very happy": "/mood-laugh-svgrepo-com.svg",
    "happy": "/mood-smile-svgrepo-com.svg",
    "neutral": "/mood-flat-svgrepo-com.svg",
    "sad": "/mood-frown-svgrepo-com.svg",
    "very sad": "/mood-sad-svgrepo-com.svg",
  };
  return iconMap[mood] || null;
}