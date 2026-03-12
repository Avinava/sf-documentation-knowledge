---
title: "Using Date, Date/Time, and Time Values in Formulas"
domain: usefulFormulaFields
topic: using-date-datetime-and-time-values-in-formulas
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:21.240Z
estimatedTokens: 2535
keywords: [Date, Time, Formulas, useful, managing, payment, deadlines, contract, ages, any, features, organization, dependent, TODAY, NOW]
---

# Using Date, Date/Time, and Time Values in Formulas

> Date formulas are useful for managing payment deadlines, contract ages, or any other
		features of your organization that are time or date dependent.

# Using Date, Date/Time, and Time Values in Formulas

Date formulas are useful for managing payment deadlines, contract ages, or any other features of your organization that are time or date dependent.

| Available in: both Salesforce Classic and Lightning Experience |
| --- |
| Available in: All Editions |


Two data types are used for working with dates: Date and Date/Time. ﻿ One data type, Time, is independent of the date for tracking time such as business hours. Most values that are used when working with dates are of the Date data type, which store the year, month, and day. Some fields, such as CreatedDate, are Date/Time fields, meaning they not only store a date value, but also a time value (stored in GMT but displayed in the users’ time zone). Date, Date/Time, and Time fields are formatted in the user’s locale when viewed in reports and record detail pages. A Time value’s precision is in milliseconds. A Date/Time value’s precision is in seconds.

You can use operations like addition and subtraction on Date, Date/Time, and TIme values to calculate a future date or elapsed time between two dates or times. If you subtract one date from another, for example, the resulting value will be the difference between the two initial values in days (Number data type). The same operation between two Date/Time values returns a decimal value indicating the difference in number of days, hours, and minutes. ﻿The same operation between two Time values returns millisecond

For example, if the difference between two Date/Time values is 5.52, that means the two values are separated by five days, 12 hours (0.5 of a day), and 28 minutes (0.02 of a day). You can also add numeric values to Dates and Date/Times. For example, the operation TODAY() + 3 returns three days after today’s date. For more information and examples of working with dates, see the list of [Sample Date Formulas](atlas.en-us.usefulFormulaFields.meta/usefulFormulaFields/formula_examples_dates.htm "Use the sample formulas in this topic to manipulate and perform calculations with date and time.").

Throughout the examples, the variables date and date/time are used in place of actual Date and Date/Time fields or values.

Keep in mind that complex date functions tend to compile to a larger size than text or number formula functions, so you might run into issues with formula compile size.

## TODAY(), NOW() and TIMENOW()

The TODAY() function returns the current day, month, and year as a Date data type. This function is useful for formulas where you are concerned with how many days have passed since a previous date, the date of a certain number of days in the future, or if you just want to display the current date.

The NOW() function returns the Date/Time value of the current moment. It’s useful when you are concerned with specific times of day as well as the date.

The TIMENOW() function returns a value in GMT representing the current time without the date. Use this function instead of the NOW() function if you want the current hour, minute, seconds, or milliseconds. This value is useful for tracking time like work shifts or elapsed time,

For details on how to convert between Date values and Date/Time values, see [Converting Between Date/Time and Date](#convert-date-dt).

## The DATE() Function

The DATE() function returns a Date value, given a year, month, and day. Numerical Y/M/D values and the YEAR(), MONTH(), and DAY() functions are valid parameters for DATE(). For example DATE( 2013, 6, 1 ) returns June 1, 2013. Similarly, DATE( YEAR( TODAY() ), MONTH( TODAY() ) + 3, 1) returns the Date value of the first day three months from today in the current year, assuming the date is valid (for example, the month falls between 1 and 12).

If the inputted Y/M/D values result in an invalid date, the DATE() function returns an error, so error checking is an important part of working with Date values. You can read about methods for handling invalid dates in [Sample Date Formulas](atlas.en-us.usefulFormulaFields.meta/usefulFormulaFields/formula_examples_dates.htm "Use the sample formulas in this topic to manipulate and perform calculations with date and time.").

## Converting Between Date/Time and Date

Date and Date/Time aren’t interchangeable data types, so when you want to perform operations between Date and Date/Time values, you need to convert the values so they are both the same type. Some functions (such as YEAR(), MONTH(), and DAY()) also only work on Date values, so Date/Time values must be converted first.

Use the DATEVALUE( date/time ) function to return the Date value of a Date/Time. For example, to get the year from a Date/Time, use YEAR( DATEVALUE( date/time ) ) ).

You can convert a Date value to a Date/Time using the DATETIMEVALUE( date ) function. The time will be set to 12:00 a.m. in Greenwich Mean Time (GMT), and then converted to the time zone of the user viewing the record when it’s displayed. For a user located in San Francisco, DATETIMEVALUE( TODAY() ) returns 5:00 p.m. on the previous day (during Daylight Saving Time) rather than 12:00 a.m. of the current day. See [A Note About Date/Time and Time Zones](#timezone) for more information.

## Converting Between Date/Time and Time

The TIMEVALUE() function returns a Time data type value in “HH:MM:SS.MS” (hours:minutes:seconds.milliseconds) format using a 24-hour clock. Numerical H/M/S/MS values and the HOUR(), MINUTE(), SECONDS(), and MILLISECONDS() functions are valid parameters for TIMEVALUE().

Use the TIMEVALUE(value) function to return the Time value of a Date/Time type, text, merge field or expression. For example, extract the time from a ClosedDate Date/Time value with TIMEVALUE(ClosedDate).

## Converting Between Date and Text

If you want to include a date as part of a string, wrap the Date value in the TEXT() function to convert it to text. For example, if you want to return today’s date as text, use:

```

```

This returns the date in the format “YYYY-MM-DD” rather than in the locale-dependent format. You can change the format by extracting the day, month, and year from the date first and then recombining them in the format you want. For example:

```

```

You can also convert text to a Date so you can use the string value with your other Date fields and formulas. You’ll want your text to be formatted as “YYYY-MM-DD”. Use this formula to return the Date value:

```

```

## Converting Between Date/Time and Text

You can include Date/Time values in a string using the TEXT() function, but you need to be careful of time zones. For example, consider this formula:

```

```

In this formula, NOW() is offset to GMT. Normally, NOW() would be converted to the user’s time zone when viewed, but because it’s been converted to text, the conversion won’t happen. So if you execute this formula on August 1st at 5:00 PM in San Francisco time (GMT-7), the result is “The current date and time is 2013–08–02 00:00:00Z”.

When you convert a Date/Time to text, a “Z” is included at the end to indicate GMT. TEXT( date/time ) returns “Z” if the field is blank. So if the Date/Time value you’re working with might be blank, check for this before converting to text:

```

```

To convert a string to a Date/Time value, use DATETIMEVALUE() passing in a string in the format “YYYY-MM-DD HH:MM:SS”. This method returns the Date/Time value in GMT.

## Converting Between Time and Text

If you want to include time as part of a string, wrap the Time value in the TEXT() function to convert it to text. For example, if you want to return the current time as text, use:

```

```

This function returns the time in the format “HH:MM:SS.MS”.

You can also convert text to a Time data type so you can use the string value with your other Time fields and formulas. Format your text as “HH:MM:SS.MS” on a 24-hour clock. Use the TIMEVALUE() function:

```

```

## A Note About Date/Time and Time Zones

Date and Date/Time values are stored in GMT. When a record is saved, field values are adjusted from the user’s time zone to GMT, and then adjusted back to the viewer’s time zone when displayed in record detail pages and reports. With Date conversions this doesn't pose a problem, since converting a Date/Time to a Date results in the same Date value.

When working with Date/Time fields and values, however, the conversion is always done in GMT, not the user’s time zone. Subtracting a standard Date/Time field from another isn’t a problem because both fields are in the same time zone. When one of the values in the calculation is a conversion from a Text or Date value to a Date/Time value, however, the results are different.

Let’s say a San Francisco user enters a value of 12:00 AM on August 2, 2013 in a custom Date/Time field called Date\_Time\_c. This value is stored as 2013–08–02 07:00:00Z, because the time difference in Pacific Daylight Time is GMT-7. At 12:00 p.m. PDT on August 1st, the user views the record and the following formula is run:

```

```

In the calculation, NOW() is 2013–08–01 19:00:00Z, and then subtracted from 2013–08–02 07:00:00Z, to return the expected result of 0.5 (12 hours).

Suppose that instead of NOW(), the formula converts the string “2013–08–01 12:00:00” to a Date/Time value:

```

```

In this case, DATETIMEVALUE( “2013–08–01 12:00:00” ) is 2013–08–01 12:00:00Z, and returns a result of 0.79167, or 19 hours.

There’s no way to determine a user’s time zone in a formula. If all of your users are in the same time zone, you can adjust the time zone difference by adding or subtracting the time difference between the users’ time zone and GMT to your converted values. However, since time zones can be affected by Daylight Saving Time, and the start and end dates for DST are different each year, this is difficult to manage in a formula. We recommend using Apex for transactions that require converting between Date/Time values and Text or Date values.

-   **[Sample Date Formulas](atlas.en-us.usefulFormulaFields.meta/usefulFormulaFields/formula_examples_dates.htm)**
    Use the sample formulas in this topic to manipulate and perform calculations with date and time.

## Code Examples

```
"Today's date is " & TEXT( TODAY() )
```

```
"Today's date is " & TEXT( MONTH( date ) ) & "/" & TEXT( DAY( date ) ) & "/" & TEXT( YEAR( date ) ) )
```

```
DATEVALUE( "YYYY-MM-DD" )
```

```
"The current date and time is " & TEXT( NOW() )
```

```
IF(
	ISBLANK( date/time ),
	"",
	TEXT( date/time )
)
```

## Related Topics

- Sample Date
					Formulas (atlas.en-us.usefulFormulaFields.meta/usefulFormulaFields/formula_examples_dates.htm)
- Sample Date Formulas (atlas.en-us.usefulFormulaFields.meta/usefulFormulaFields/formula_examples_dates.htm)
