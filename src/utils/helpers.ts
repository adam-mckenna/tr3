export const getFormattedDate = (isoDate: string) => {
  const date = new Date(isoDate);
  const pad = (n: number) => n.toString().padStart(2, "0");
  return `${pad(date.getDate())}.${pad(date.getMonth() + 1)}.${date.getFullYear()}`;
};
