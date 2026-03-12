---
title: "Sample Date Formulas"
domain: formula-date-time-tipsheet
topic: sample-date-formulas
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:31.819Z
estimatedTokens: 2376
keywords: [Sample, Date, Formulas, topic, manipulate, perform, calculations, time, Day, Month, Year, Leap, Quarter, Week, Whether]
---

# Sample Date Formulas

> Use the sample formulas in this topic to manipulate and perform calculations with date
    and time.

# Sample Date Formulas

Use the sample formulas in this topic to manipulate and perform calculations with date and time.

| Available in: both Salesforce Classic and Lightning Experience |
| --- |
| Available in: All Editions |


## Find the Day, Month, or Year from a Date

Use the functions DAY( date ), MONTH( date ), and YEAR( date ) to return their numerical values. Replace date with a value of type Date (for example, TODAY()).

To use these functions with Date/Time values, first convert them to a date with the DATEVALUE() function. For example, DAY( DATEVALUE( date/time )).

## Find Out If a Year Is a Leap Year

This formula determines whether a year is a leap year. A year is only a leap year if it’s divisible by 400, or if it’s divisible by four but not by 100.

```

```

## Find Which Quarter a Date Is In

For standard quarters, you can determine which quarter a date falls in using this formula. This formula returns the number of the quarter that date falls in (1–4) by dividing the current month by three (the number of months in each quarter) and taking the ceiling.

```

```

The formula for shifted quarters is similar, but shifts the month of the date by the number of months between January and the first quarter of the fiscal year. The following example shows how to find a date’s quarter if Q1 starts in February instead of January.

```

```

ITo check whether a date is in the current quarter, add a check to compare the date’s year and quarter with TODAY()’s year and quarter.

```

```

## Find the Week of the Year a Date Is In

To find the number of a date’s week of the year, use this formula:

```

```

To find the current week number, determine the days to date in the current year and divide that value by 7. The IF() statement ensures that the week number the formula returns doesn’t exceed 52. So if the given date is December 31 of the given year, the formula returns 52, even though it’s more than 52 weeks after the first week of January.

## Find Whether Two Dates Are in the Same Month

To determine whether two Dates fall in the same month, say for a validation rule to determine whether an opportunity Close Date is in the current month, use this formula:

```

```

## Find the Last Day of the Month

The easiest way to find the last day of a month is to find the first day of the next month and subtract a day.

```

```

## Display the Month as a String instead of a Number

To return the month as a text string instead of a number, use:

```

```

If your organization uses multiple languages, you can replace the names of the month with a custom label:

```

```

## Find and Display the Day of the Week from a Date

To find the day of the week from a Date value, use a known Sunday, for example, January 7, 1900, and subtract it from the date, for example, TODAY(), to get the difference in days. The MOD() function finds the remainder of this result when divided by 7 to give the numerical value of the day of the week between 0 (Sunday) and 6 (Saturday). This formula finds the result and then returns the text name of that day.

```

```

This formula only works for dates after 01/07/1900. If you work with older dates, use the same process with any Sunday before to your earliest date, for example, 01/05/1800.

You can adjust this formula if your week starts on a different day. For example, if your week starts on Monday, you can use January 8, 1900 in your condition. The new formula looks like this:

```

```

To get the formula for the name of the month, if your organization uses multiple languages, you can replace the names of the day of the week with a variable like $Label.Day\_of\_Week\_1, and so on.

## Find the Next Day of the Week After a Date

To find the date of the next occurrence of a particular day of the week following a given Date, get the difference in the number of days of the week between a date and a day\_of\_week, a number 0–6 where 0 = Sunday and 6 = Saturday. By adding this difference to the current date, you can find the date of the day\_of\_week. The IF() statement in this formula handles cases where the day\_of\_week is before the day of the week of the date value (for example date is a Thursday and day\_of\_week is a Monday) by adding 7 to the difference.

```

```

You can substitute either a constant or another field in for the day\_of\_week value based on your needs.

## Find the Number of Days Between Two Dates

To find the number of days between two dates, date\_1, and date\_2, subtract the earlier date from the later date: date\_1 — date\_2

You can alter this formula slightly if you want to determine a date that’s a certain number of days in the past. For example, to create a formula to return true if some date field is more than 30 days before the current date and false otherwise, use a formula such as the following:

```

```

## Find the Number of Weekdays Between Two Dates

Calculating how many weekdays passed between two dates is slightly more complex than calculating total elapsed days. In this example, weekdays are Monday through Friday. The basic strategy is to choose a reference Monday from the past and find out how many full weeks and any additional portion of a week have passed between the reference date and your date. These values are multiplied by five for a five-day work week, and then the difference between them is taken to calculate weekdays.

```

```

In this formula, date\_1 is the more recent date and date\_2 is the earlier date. If your work week runs shorter or longer than five days, replace all fives in the formula with the length of your week.

## Find the Number of Months Between Two Dates

To find the number of months between two dates, subtract the year of the earlier date from the year of the later date and multiply the difference by 12. Next, subtract the month of the earlier date from the month of the later date, and add that difference to the value of the first set of operations.

```

```

## Add Days, Months, and Years to a Date

If you want to add a certain number of days to a date, add that number to the date directly. For example, to add 5 days to a date, the formula is date + 5.

If you want to add a certain number of months to a date, use this function.

```

```

For example, if you want to add 4 months to a date, use this formula.

```

```

If the date that you provide is the last of any month, this formula returns the last day of the resulting month.

To add a certain number of years to a date, use this formula.

```

```

If the date that you provide is February 29, and the resulting year isn’t a leap year, the formula returns the date as February 28. In this scenario, if you want the resulting date as March 1, use this formula.

```

```

## Add Business Days to a Date

This formula finds three business days from a given date.

```

```

This formula finds the day of the week of the date field value. If the date is a Wednesday, Thursday, or Friday, the formula adds five calendar days, two weekend days, three weekdays, to the date to account for the weekend. If date is a Saturday, you need four additional calendar days. For any other day of the week Sunday Tuesday, simply add three days. You can easily modify this formula to add more or fewer business days. The tip for getting the day of the week is useful to use to adjust this formula.

## Find the Hour, Minute, or Second from a Date/Time

To get the hour, minute, and second from a Date/Time field as a numerical value, use the following formulas where TZoffset is the difference between the user’s time zone and GMT. For hour in 24–hour format:

```

```

For hour in 12–hour format:

```

```

For minutes:

```

```

For seconds:

```

```

And, to get “AM” or “PM” as a string, use:

```

```

To return the time as a string in “HH:MM:SS A/PM” format, use the following formula:

```

```

When working with time in formula fields, always consider the time difference between your organization and GMT. See [A Note About Date/Time and Time Zones](atlas.en-us.formula_date_time_tipsheet.meta/formula_date_time_tipsheet/formula_using_date_datetime.htm#timezone) for more information about the time zone offset used in this formula.

## Find the Elapsed Time Between Date/Times

To find the difference between two Date values as a number, subtract one from the other like so: date\_1 — date\_2 to return the difference in days.

Finding the elapsed time between two Date/Time values is slightly more complex. This formula converts the difference between two Date/Time values, datetime\_1 and datetime\_2, to days, hours, and minutes.

```

```

## Find the Number of Business Hours Between Two Date/Times

The formula to find business hours between two Date/Time values expands on the formula to find elapsed business days. It works on the same principle of using a reference Date/Time. In this case 1/8/1900 at 16:00 GMT, or 9:00 AM PDT, and then finding your Dates’ respective distances from that reference. The formula rounds the value it finds to the nearest hour and assumes an 8–hour, 9:00 AM5:00 PM work day.

```

```

You can change the eights in the formula to account for a longer or shorter work day. If you live in a different time zone or your work day doesn’t start at 9:00 AM, change the reference time to the start of your work day in GMT. See [A Note About Date/Time and Time Zones](atlas.en-us.formula_date_time_tipsheet.meta/formula_date_time_tipsheet/formula_using_date_datetime.htm#timezone) for more information.

## Code Examples

```
OR( 
  MOD( YEAR( date ), 400 ) = 0, 
  AND( 
   MOD( YEAR( date ), 4 ) = 0,
    MOD( YEAR( date ), 100 ) != 0
  )
)
```

```
CEILING( MONTH ( date ) / 3 )
```

```
CEILING( ( MONTH ( date ) - 1 ) / 3)
```

```
AND(
   CEILING( MONTH( date ) / 3 ) = CEILING( MONTH( TODAY() ) / 3 ),
   YEAR( date ) = YEAR( TODAY() )
)
```

```
IF( 
  CEILING( ( date - DATE( YEAR( date ), 1, 1) + 1) / 7) > 52,
  52,
  CEILING( ( date - DATE( YEAR( date ), 1, 1) + 1) / 7)
)
```

## Related Topics

- A Note About
          Date/Time and Time Zones (atlas.en-us.formula_date_time_tipsheet.meta/formula_date_time_tipsheet/formula_using_date_datetime.htm)
- A Note About Date/Time and Time
          Zones (atlas.en-us.formula_date_time_tipsheet.meta/formula_date_time_tipsheet/formula_using_date_datetime.htm)
