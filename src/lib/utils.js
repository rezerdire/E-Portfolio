import {clsx} from 'clsx';
import { twMerge } from 'tailwind-merge';


export const cn = (...inputs) => {
  return twMerge(clsx(inputs));
}


// LIBRARY FOR TAILWIND MERGE WITH REACT