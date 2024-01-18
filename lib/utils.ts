import type { ClassValue } from "clsx";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
import "dayjs/locale/zh-cn"; // 导入本地化语言
dayjs.locale("zh-cn"); // 使用本地化语言
dayjs.extend(localizedFormat);

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const objectKeys = <Obj extends object>(obj: Obj) =>
  Object.keys(obj) as [keyof Obj];

export type WithRequired<T, K extends keyof T> = T & { [P in K]-?: T[P] };

export const formatDay = (day: string) => dayjs(day).format("ll");
