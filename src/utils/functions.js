import { availableMoods, moodIcons, availableSleepRanges } from "../data.js";
const { veryHappyIcon, happyIcon, neutralIcon, sadIcon, verySadIcon } =
	moodIcons;

export function findIconByMood(moodString) {
	const mood = moodString?.toLowerCase();
	const iconMap = {
		"very happy": veryHappyIcon,
		happy: happyIcon,
		neutral: neutralIcon,
		sad: sadIcon,
		"very sad": verySadIcon,
	};
	return iconMap[mood] || null;
}

export function getSleepRange(hours) {
	let range;
	if (hours >= 9) {
		range = "9+ hours";
	} else if (hours >= 7) {
		range = "7-8 hours";
	} else if (hours >= 5) {
		range = "5-6 hours";
	} else if (hours >= 3) {
		range = "3-4 hours";
	} else {
		range = "0-2 hours";
	}
	return range;
}

export function getMood(value) {
	return availableMoods[value];
}

export function getSleepHours(range = '7-8') {
	let hours;

	range = range.replace(" hours", "");

	if (range === "9+") {
		hours = 9;
	} else if (range === "7-8") {
		hours = (7 + 8) / 2;
	} else if (range === "5-6") {
		hours = (5 + 6) / 2;
	} else if (range === "3-4") {
		hours = (3 + 4) / 2;
	} else if (range === "0-2") {
		hours = (0 + 2) / 2;
	} else {
		hours = null;
	}

	return hours;
}

export function calculateAverageMood(recordList, shift = 0) {
	const last5Entries = recordList.slice(recordList.length - 5 - shift);
	const moodValues = last5Entries.map((entry) =>
		availableMoods.indexOf(entry.mood)
	);
	const totalMoodValue = moodValues.reduce((accumulator, entry) => {
		return accumulator + entry;
	});
	const averageMoodValue = Math.round(totalMoodValue / moodValues.length);

	return averageMoodValue;
}

export function calculateAverageSleep(recordList, shift = 0) {
	const last5Entries = recordList.slice(recordList.length - 5 - shift);
	const hours = last5Entries.map((entry) => {
		return getSleepHours(entry.sleep);
	});
	const totalHours = hours.reduce((accumulator, entry) => {
		return accumulator + entry;
	});
	const averageHours = totalHours / hours.length;

	return averageHours;
}

export function getSleepSubtitle(current, previous) {
		if (current === previous) return "Same as";
		if (
			availableSleepRanges.indexOf(current) >
			availableSleepRanges.indexOf(previous)
		)
			return "Increase from";
		return "Decrease from";
	}

	export function getMoodSubtitle(current, previous) {
		if (current === previous) return "Same as";
		if (current > previous) return "Increase from";
		return "Decrease from";
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