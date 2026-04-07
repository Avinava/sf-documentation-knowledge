---
title: "AMPscript Common String Tokens"
domain: mc-programmatic-content
topic: ampscript-common-string-tokens
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:06:26.652Z
estimatedTokens: 966
keywords: [AMPscript, Common, Tokens, Review, examples, dates, times, FormatDate, functions, “s”, short, Token, “l”, long, “iso”]
---

# AMPscript Common String Tokens

> Review these examples of the common string tokens that you can use to format AMPscript dates and times with the Format() and FormatDate() functions.

# AMPscript Common String Tokens

Review these examples of the common string tokens that you can use to format AMPscript dates and times with the Format() and FormatDate() functions.

## “s” or "short" Token

Using any of the short token options for the time parameter adds a short time (for example: 1:09 PM) based on the culture code provided. This example uses the "s" short token to format the time value 18:30 as a 12-hour clock value in the specified format.

```
%%=FormatDate(Now(), "MMMMM d", "")=%% at %%=FormatDate(Now(), "", "s")=%%
```

Result: December 1 at 6:30 PM

Format() vs FormatDate() behave differently with different short date values.

-   If you use “s”, “S”, or “short”, FormatDate() outputs a short date (for example: 10/5/2017).

```
%%[Output(FormatDate(@date,"s"))]%% or
%%[Output(FormatDate(@date,"S"))]%% or
%%[Output(FormatDate(@date,"short"))]%%
```

Result: 10/5/2017

-   If you use “sortable”, FormatDate() outputs a sortable date (for example: 2017-10-05).

```
%%[Output(FormatDate(@date,"sortable"))]%%
```

Result: 2017-10-05

-   If you use “s”, Format() outputs a sortable date (for example: 2017-10-05).

```
%%[Output(FormatDate(@date,"sortable"))]%%
```

Result: 2017-10-05T13:09:34

-   If you use “S”, Format() outputs the same format as “L” (for example: 10/5/2017 1:09:34 PM).

```
%%[Output(Format(@date,"S"))]%%
```

Result: 10/5/2017 1:09:34 PM

## “l” or "long" Token

This example uses the "l" long token to format the date to a standard culture-based date format.

```
%%[
VAR @date1, @date2, @date3
SET @date1 = "2017-10-05 13:09:34.567-06:00"
SET @date2 = "2017-10-05 13:09:34"
SET @date3 = "10/5/2017 1:09:34 PM"
]%%
%%=Format(@date1, "L", "Date", "en-US")=%%
%%=Format(@date2, "L", "Date", "en-US")=%%
%%=Format(@date3, "L", "Date", "en-US")=%%
```

Result:

```
2017-10-05 13:09:34.567-06:00
2017-10-05 13:09:34
10/5/2017 1:09:34 PM
```

The “l” token generates a different string with FormatDate(). You can also use “long” with FormatDate().

```
%%=FormatDate(@date, "L")=%% or %%=FormatDate(@date, "long", "", "en-US")=%%
```

Result: Tuesday, September 10, 2019

Include the time long token to get a full long datetime.

```
%%=FormatDate(@date, "l", "l")=%%
```

Result: Tuesday, September 10, 2019 1:09:34 PM

## "o" or “iso” Token

These tokens return a datetime that conforms with the ISO 8601 standard for CST (-06:00). These tokens don’t alter the output based on the locale provided.

The "o" token is available for both Format() and FormatDate(). Format() doesn’t include subseconds or a timezone offset indicator. Using "o" with FormatDate() for both date and time outputs the full datetime stamp for each.

The “iso" token is available for FormatDate() and yields the same results as "o" for FormatDate(). The time parameter of FormatDate() doesn’t support "iso".

```
SET @date = '2017-10-05 13:09:34.567890-5:00'
%%=Format(@date, "o")=%%
```

Result: 2017-10-05T12:09:34.0000000

```
%%=FormatDate(@date, "o", "", "fi-FI")=%%
```

Result: 2017-10-05T12:09:34.5678900-06:00

## “rfc” or “r” Token

The “rfc” token returns a datetime that conforms with the RFC 1123 standard for CST (-06:00). This token doesn’t alter the output based on the locale provided. It appends GMT to the output even though the output is in server time (-06:00).

The "r" token is available for both Format() and FormatDate(). Using "r" with FormatDate() for both date and time outputs the full datetime stamp for each.

The "rfc" token is available for FormatDate() and yields the same results as "r" for FormatDate(). The time parameter of FormatDate() doesn’t support "rfc" as a value.

```
SET @date = '2017-10-05 13:09:34.567890-00:00'
%%=Format(@date, "r")=%%
```

Result: Thu, 05 Oct 2017 07:09:34 GMT

> We recommend using the Format() function for date and time formatting that requires a locale setting.
