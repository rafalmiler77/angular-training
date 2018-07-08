export const getPastDate = (diff: number): Date => {
  const date = new Date();
  date.setDate(date.getDate() - diff);
  return date;
};
export const getFutureDate = (diff: number): Date => {
  const date = new Date();
  date.setDate(date.getDate() + diff);
  return date;
};
