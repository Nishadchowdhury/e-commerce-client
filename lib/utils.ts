import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatter = new Intl.NumberFormat("en-US", {
  // The Intl object in JavaScript provides internationalization capabilities
  // we can use it to formate date, collator => ["amm", "Jaam", "lichu"] output => will be alphabetically ordered.
  // pluralRules => it takes number for 1 = one , and 2,3,4,435,43,45 => other

  // const parser = new Intl.NumberFormat("en-US").formatToParts;
  // const parts = parser("$10.99");
  // console.log(parts); //=> Outputs: [{ "type": "currency", "value": "$" }, { "type": "integer", "value": "10" }, { "type": "decimal", "value": "." }, { "type": "fraction", "value": "99" }]
  
  style: "currency",
  currency: "USD",
});
