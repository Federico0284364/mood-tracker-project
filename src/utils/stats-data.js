import { useMemo } from "react";
import {
  calculateAverageMood,
  calculateAverageSleep,
  getMood,
  getMoodSubtitle,
  getSleepRange,
  getSleepSubtitle,
} from "../utils/functions";

export function useStatsData(initialRecordList) {
  const recordList = initialRecordList.slice(1);

  const averageMoodValue = useMemo(() => calculateAverageMood(recordList), [recordList.length, ...Object.values(recordList)]);
  const prevAverageMoodValue = useMemo(() => calculateAverageMood(recordList, 5), [recordList.length, ...Object.values(recordList)]);
  const averageMood = getMood(averageMoodValue);
  const moodSubtitle = getMoodSubtitle(averageMoodValue, prevAverageMoodValue);

  const averageSleepHours = useMemo(() => calculateAverageSleep(recordList), [recordList.length, ...Object.values(recordList)]);
  const prevAverageSleepHours = useMemo(() => calculateAverageSleep(recordList, 5), [recordList.length, ...Object.values(recordList)]);
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

