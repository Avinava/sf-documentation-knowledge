---
title: "AMPscript Date and Time Formatting"
domain: mc-programmatic-content
topic: ampscript-date-and-time-formatting
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:06:26.784Z
estimatedTokens: 981
keywords: [AMPscript, Date, Time, Formatting, assumes, datatype, en-US, UTC, output, several, different, formats, depending, needs]
---

# AMPscript Date and Time Formatting

> AMPscript assumes all date datatype values use en-US or UTC formatting. You can output several different date and time formats with AMPscript, depending on your needs.

# AMPscript Date and Time Formatting

AMPscript assumes all date datatype values use en-US or UTC formatting. You can output several different date and time formats with AMPscript, depending on your needs.

We recommend using the [Format()](https://developer.salesforce.com/docs/atlas.en-us.mc-programmatic-content.meta/mc-programmatic-content/Format.htm) function for date and time formatting that requires a locale setting.

This table shows available formats for both the [Format()](https://developer.salesforce.com/docs/atlas.en-us.mc-programmatic-content.meta/mc-programmatic-content/Format.htm) and [FormatDate()](https://developer.salesforce.com/docs/atlas.en-us.mc-programmatic-content.meta/mc-programmatic-content/FormatDate.htm) functions, illustrated by the subsequent examples. For a longer table of available tokens and formats, review [AMPscript Date and Time Formats: Format() and FormatDate()](atlas.en-us.noversion.mc-programmatic-content.meta/mc-programmatic-content/formatAndFormatDate.htm).

This table demonstrates the available formats:

| Year (Example: 2011) | Month (Example: August) | Date (Example: Monday, August 15) | Hours (Example: 20) | Minutes (Example: :00) | Seconds (Example: :05) | AM/PM (Example: PM) | Offset (Example: -6:00) |
| --- | --- | --- | --- | --- | --- | --- | --- |
| y = 11 | M = 8 | d = 15 | h = 8 | m = 0 | s = 5 | t = P | z = -6 |
| yy = 11 | MM = 08 | dd = 15 | hh = 08 | mm = 00 | ss = 05 | tt = PM | zz = -06 |
| yyy = 2011 | MMM = Aug | dddd = Mon | H = 8 | - | - | - | zzz = -06:00 |
| yyyy = 2011 | MMMM = August | ddddd = Monday | HH = 20 | - | - | - | - |

The output for M varies depending on whether M is used in a single function or within a group of functions.

The M variable in a single function displays as a numeral.

As a single M within a group of functions, the result is the full name of the month and the date in two-digit format. If you use the % character with the M variable in a group of functions, the M variable displays output as if it were in a single function.

The next example takes the results of the [Now()](https://developer.salesforce.com/docs/atlas.en-us.mc-programmatic-content.meta/mc-programmatic-content/Now.htm) function, and returns three different formats.

```
%%[
Output(Concat(Format(Now(),"M"), "<br>"))
Output(Concat(Format(Now(),"M-d-yy"), "<br>"))
Output(Concat(Format(Now(),"%M"), "<br>"))
]%%
```

or

```
%%[
Output(Concat(FormatDate(Now(),"M"), "<br>"))
Output(Concat(FormatDate(Now(),"M-d-yy"), "<br>"))
Output(Concat(FormatDate(Now(),"%M"), "<br>"))
]%%
```

Result:

```
September 06
9-6-19
9
```

This example below takes the results of the Now() function and returns it in the specified format.

```
%%=Format(Now(), "MMMM d, yyyy")=%%
```

or

```
%%=FormatDate(Now(), "MMMM d, yyyy")=%%
```

Result: August 15, 2011

This example formats a date and returns it in the specified format:

```
%%=Format("2011-08-15 20:00:05.567890", "MMM dd, yyyy h:mm:ss.tt", "Date", "en-US")=%%
```

or

```
%%=FormatDate("2011-08-15 20:00:05.567890", "MMM dd, yyyy", "l", "en-US")=%%
```

Result: Aug 15, 2011 8:00:05.PM

This example takes the value of Now(), offsets it using the DateAdd() function, and then returns that value in the specified format.

```
%%[
VAR @futureDate, @today
SET @today = Now(1)
SET @futureDate = DateAdd(@today, 11, "D")]%%
Date: %%=Format(@futureDate, "MMMM d, yyyy")=%%
```

or

```
%%[
VAR @futureDate, @today
SET @today = Now(1)
SET @futureDate = DateAdd(@today, 11, "D")
]%%
Date: %%=FormatDate(@futureDate, "MMMM d, yyyy")=%%
```

Given that the date is August 15, 2011, The output would be: Date: August 26, 2011

This example outputs the Birthday attribute of a subscriber, from all subs or the sendable data extension in the specified format.

```
%%[Output(Format([Birthday],"dd/MM/yyyy"))]%%
```

Given a Birthday attribute equal to August 15, 2011, The output would be: 15/08/2011

## Related Topics

- AMPscript Date and Time Formats: Format() and FormatDate() (atlas.en-us.noversion.mc-programmatic-content.meta/mc-programmatic-content/formatAndFormatDate.htm)
