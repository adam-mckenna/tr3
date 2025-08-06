import { format } from "date-fns";

export const getFormattedDate = (isoDate: string) => {
  const date = new Date(isoDate);
  return format(date, "MMMM do, yyyy");
};
