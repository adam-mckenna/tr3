import { format } from "date-fns";

export const getFormattedDate = (isoDate: string) => {
  const date = new Date(isoDate);
  return format(date, "MMMM do, yyyy");
};

export const slugify = (string: string) =>
  string
    .toLowerCase()
    .trim()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-+/, "");
