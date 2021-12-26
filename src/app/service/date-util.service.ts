import {Injectable} from '@angular/core';
import {addMonths, addYears, differenceInDays, differenceInMonths, differenceInYears} from 'date-fns';

@Injectable({
  providedIn: 'root'
})
export class DateUtilService {

  constructor() {
  }

  getDiffToNow(diff: string | number | Date): any {
    let result: string[] = [];
    let now = new Date();
    diff = new Date(diff);


    let years = differenceInYears(now, diff);
    if (years > 0) {
      result.push(`${years}years`);
      diff = addYears(diff, years);
    }
    let months = differenceInMonths(now, diff)
    result.push(`${months} months`);
    if (months > 0) {
      diff = addMonths(diff, months);
    }

    let days = differenceInDays(now, diff)
    if (days > 0){
      result.push(`${days}days`);
    }

    return result.join('')
  }


}
