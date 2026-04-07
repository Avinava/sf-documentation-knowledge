---
title: "AMPscript Date and Time Formats - Format() and FormatDate()"
domain: mc-programmatic-content
topic: ampscript-date-and-time-formats---format-and-formatdate
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:40:22.239Z
estimatedTokens: 636
keywords: [AMPscript, Date, Time, Formats, FormatDate, Compare, functions, column, result, force, single-character, token, behave, it’s, multi-character, applicable]
---

> Compare date and time formats for the AMPscript functions Format() and FormatDate(). The % column shows the result when you use % to force a single-character token to behave as if it’s in a multi-character string, if applicable.

# AMPscript Date and Time Formats - Format() and FormatDate()

Compare date and time formats for the AMPscript functions Format() and FormatDate(). The % column shows the result when you use % to force a single-character token to behave as if it’s in a multi-character string, if applicable.

## Date Formats

Example: 10/5/2017 8:09:34 PM

| Token | Format() Result | % | FormatDate() Result | % |
| --- | --- | --- | --- | --- |
| d | 10/5/2017 | 5 | 10/5/2017 | 5 |
| dd | 05 |  | 05 |  |
| ddd | Thu |  | T8ur345a17 |  |
| dddd | Thursday |  | Thu |  |
| ddddd | Thursday |  | Thursday |  |
| f | Thursday, October 5, 2017 8:09 PM | 0 | Thursday, October 5, 2017 8:09 PM | 5 |
| ff | 00 |  | 56 |  |
| fff | 000 |  | 567 |  |
| ffff | 0000 |  | 5678 |  |
| fffff | 00000 |  | 56789 |  |
| g | 10/5/2017 8:09 PM | A.D. | 10/5/2017 8:09 PM | A.D. |
| gg | A.D. |  | A.D. |  |
| M | October 5 | 10 | October 5 | 10 |
| MM | 10 |  | 10 |  |
| MMM | Oct |  | Oct |  |
| MMMM | October |  | October |  |
| y | October 2017 | 17 | October 2017 | 17 |
| yy | 17 |  | 17 |  |
| yyy | 2017 |  | 2017 |  |
| yyyy | 2017 |  | 2017 |  |
| sortable | 34orPable |  | 2017-10-05 |  |
| iso | i34o |  | 2017-10-05T20:09:34.5678900-06:00 |  |
| r | Thu, 05 Oct 2017 20:09:34 GMT | r | Thu, 05 Oct 2017 20:09:34 GMT | r |
| rfc | r0c |  | Thu, 05 Oct 2017 20:09:34 GMT |  |
| s | 2017-10-05T20:09:34 | 34 | 10/5/2017 | 34 |
| S | 10/5/2017 8:09:34 PM | S | 10/5/2017 | S |
| u | 2017-10-05 20:09:34Z | u | 2017-10-05 20:09:34Z | u |
| U | Friday, October 6, 2017 2:09:34 AM | U | Friday, October 6, 2017 2:09:34 AM | U |
| t | 8:09 PM | P | 8:09 PM | P |
| T | 8:09:34 PM | T | 8:09:34 PM | T |

## Time Formats

Example: 10/5/2017 8:09:34 PM

| Token | Format() Result | % | FormatDate() Result | % |
| --- | --- | --- | --- | --- |
| h | 10/5/2017 8:09:34 PM | 8 | 20 | 20 |
| hh | 08 |  | 20 | hh |
| H | 10/5/2017 8:09:34 PM | 20 | 20 | 20 |
| HH | 20 |  | 20 |  |
| K | 10/5/2017 8:09:34 PM |  | -06:00 | -06:00 |
| m | October 5 | 9 | 9 | 9 |
| mm | 09 |  | 09 |  |
| s | 2017-10-05T20:09:34 | 34 | 8:09 PM | 34 |
| ss | 34 |  | 34 |  |
| t | 8:09 PM | P | P | P |
| tt | PM |  | PM |  |
| z | 10/5/2017 8:09:34 PM | -6 | -6 | -6 |
| zz | -06 |  | -06 |  |
| zzz | -06:00 |  | -06:00 |  |
| sortable | 34orPable |  | T20:09:34 |  |
| short | 348orP |  | 8:09 PM |  |
| s | 2017-10-05T20:09:34 | 34 | 8:09 PM | 34 |
| S | 10/5/2017 8:09:34 PM | S | 8:09 PM | 34 |
| long | lonA.D. |  | 8:09:34 PM |  |
| l | 10/5/2017 8:09:34 PM | l | 8:09:34 PM | l |
