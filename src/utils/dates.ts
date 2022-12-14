import dayjs, { Dayjs } from 'dayjs';

interface MonthYearProps {
  month: string;
  year: number;
}

interface CurrentDate {
  date: string;
  month: string;
  year: number;
}
export const getMonthYearDateText = (date: string): MonthYearProps => {
  return {
    month: dayjs(date).format('MMMM'),
    year: dayjs(date).year(),
  };
};

export const getPreviousMonthDate = (date: Dayjs): Dayjs => {
  return dayjs(date).subtract(1, 'month');
};

export const getNextMonthDate = (date: Dayjs): Dayjs => {
  return dayjs(date).add(1, 'month');
};

export const getCurrentDate = (): CurrentDate => {
  const currentDate = dayjs().toISOString();
  const { month, year } = getMonthYearDateText(currentDate);

  return {
    date: currentDate,
    month,
    year,
  };
};
