import { useMemo } from "react";
import {
  calculateAverageMood,
  calculateAverageSleep,
  getMood,
  getMoodSubtitle,
  getSleepRange,
  getSleepSubtitle,
} from "../utils/functions";



export function useStatsData(recordList) {
  const averageMoodValue = useMemo(() => calculateAverageMood(recordList), [recordList.length]);
  const prevAverageMoodValue = useMemo(() => calculateAverageMood(recordList, 5), [recordList.length]);
  const averageMood = getMood(averageMoodValue);
  const moodSubtitle = getMoodSubtitle(averageMoodValue, prevAverageMoodValue);

  const averageSleepHours = useMemo(() => calculateAverageSleep(recordList), [recordList.length]);
  const prevAverageSleepHours = useMemo(() => calculateAverageSleep(recordList, 5), [recordList.length]);
  const averageSleepRange = getSleepRange(averageSleepHours);
  const prevAverageSleepRange = getSleepRange(prevAverageSleepHours);
  const sleepSubtitle = getSleepSubtitle(averageSleepRange, prevAverageSleepRange);

  return {
    averageMood,
    moodSubtitle,
    averageSleepRange,
    sleepSubtitle,
  };
}

function isPreviousDay(dateA, dateB) {
  const a = new Date(dateA.getFullYear(), dateA.getMonth(), dateA.getDate());
  const b = new Date(dateB.getFullYear(), dateB.getMonth(), dateB.getDate());

  a.setDate(a.getDate() + 1);

  return a.getTime() === b.getTime();
}

export function calculateStreak(recordList){
  const records = structuredClone(recordList);
  let streak = 0;

  if(records[records.length - 1].date.toLocaleDateString() != (new Date()).toLocaleDateString()){
    return streak;
  } else {
    streak ++;
  }
 
  for (let i = records.length - 1; i >= 1; i--){
    if (isPreviousDay(records[i - 1].date, records[i].date)){
      streak++;
    } else {
      return streak;
    }
  }

  return streak;
}