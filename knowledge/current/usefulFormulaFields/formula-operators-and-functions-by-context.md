---
title: "Formula Operators and Functions by Context"
domain: usefulFormulaFields
topic: formula-operators-and-functions-by-context
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:21.220Z
estimatedTokens: 4059
keywords: [Formula, Operators, Functions, Context, building, formulas, everywhere, include, validation, rules, approval, processes, workflow, unless, otherwise]
---

# Formula Operators and Functions by Context

> Use these operators and functions when building formulas. All functions are available
      everywhere that you can include a formula, such as formula fields, validation rules, approval
      processes, and workflow rules, unless otherwise specified.

# Formula Operators and Functions by Context

Use these operators and functions when building formulas. All functions are available everywhere that you can include a formula, such as formula fields, validation rules, approval processes, and workflow rules, unless otherwise specified.

Within an email template, merge fields can only be used in formula functions and operations when the merge field belongs to the record that the email is related to. Otherwise, these fields don’t resolve.

Extraneous spaces in these samples are ignored.

-   [Math Operators](#math_operators)
-   [Logical Operators](#legal_operators)
-   [Text Operators](#text_operators)
-   [Date and Time Functions](#date_and_time_functinons)
-   [Logical Functions](#logical_functions)
-   [Math Functions](#math_functions)
-   [Text Functions](#text_functions)
-   [Summary Functions](#summary_functions)
-   [Advanced Functions](#advanced_functions)

## Math Operators

| Operator | Description |
| --- | --- |
| + (Add) | Calculates the sum of two values. |
| - (Subtract) | Calculates the difference of two values. |
| * (Multiply) | Multiplies its values. |
| / (Divide) | Divides its values. |
| ^ (Exponentiation) | Raises a number to the power of a specified number. |
| () (Open Parenthesis and Closed Parenthesis) | Specifies that the expressions within the open parenthesis and close parenthesis are evaluated first. All other expressions are evaluated using standard operator precedence. |

## Logical Operators

| Operator | Description |
| --- | --- |
| = and == (Equal) | Evaluates if two values are equivalent. The = and == operators are interchangeable. |
| <> and != (Not Equal) | Evaluates if two values aren’t equivalent. |
| < (Less Than) | Evaluates if a value is less than the value that follows this symbol. |
| > (Greater Than) | Evaluates if a value is greater than the value that follows this symbol. |
| <= (Less Than or Equal) | Evaluates if a value is less than or equal to the value that follows this symbol. |
| >= (Greater Than or Equal) | Evaluates if a value is greater than or equal to the value that follows this symbol. |
| && (And) | Evaluates if two values or expressions are both true. Use this operator as an alternative to the logical function AND. |
| \|\| (Or) | Evaluates if at least one of multiple values or expressions is true. Use this operator as an alternative to the logical function OR. |

## Text Operators

| Operator | Description |
| --- | --- |
| & and + (Concatenate) | Connects two or more strings. |

## Date and Time Functions

| Function | Description |
| --- | --- |
| ADDMONTHS | Returns the date that is the indicated number of months before or after a specified date. If the specified date is the last day of the month, the resulting date is the last day of the resulting month. Otherwise, the result has the same date component as the specified date. |
| DATE | Returns a date value from the year, month, and day values that you enter. Salesforce displays an error on the detail page if the value of the DATE function in a formula field is an invalid date, such as February 29 in a non-leap year. |
| DATEVALUE | Returns a date value for a date/time or text expression. |
| DATETIMEVALUE | Returns a year, month, day, and GMT time value. |
| DAY | Returns a day of the month in the form of a number from 1 through 31. |
| DAYOFYEAR | Returns the day of the calendar year in the form of a number from 1 through 366. |
| FORMATDURATION | Formats the number of seconds with optional days, or the difference between times or dateTimes as HH:MI:SS. |
| HOUR | Returns the local time hour value without the date in the form of a number from 1 through 24. |
| ISOWEEK | Returns the ISO 8601-week number, from 1 through 53, for the given date, ensuring that the first week starts on a Monday. |
| ISOYEAR | Returns the ISO 8601 week-numbering year in 4 digits for the given date, ensuring that the first day is a Monday. |
| MILLISECOND | Returns a milliseconds value in the form of a number from 0 through 999. |
| MINUTE | Returns a minute value in the form of a number from 0 through 60. |
| MONTH | Returns the month, a number from 1 (January) through 12 (December) in number format of a given date. |
| NOW | Returns a date/time representing the current moment. |
| SECOND | Returns a seconds value in the form of a number from 0 through 60. |
| TIMENOW | Returns a time value in GMT representing the current moment. Use this function instead of the NOW function if you only want to track time, without a date. |
| TIMEVALUE | Returns the time value without the date, such as business hours. |
| TODAY | Returns the current date as a date data type. |
| UNIXTIMESTAMP | Returns the number of seconds since 1 Jan 1970 for the given date, or number of seconds in the day for a time. |
| WEEKDAY | Returns the day of the week for the given date, using 1 for Sunday, 2 for Monday, through 7 for Saturday. |
| YEAR | Returns the four-digit year in number format of a given date. |

## Logical Functions

| Function | Description |
| --- | --- |
| AND | Returns a TRUE response if all values are true, and returns a FALSE response if one or more values are false. |
| BLANKVALUE | Determines if an expression has a value, and returns a substitute expression if it doesn’t. If the expression has a value, returns the value of the expression. |
| CASE | Checks a given expression against a series of values. If the expression is equal to a value in the series, returns the corresponding result. If it isn’t equal to a value in the series, returns the else_result. |
| IF | Determines if expressions are true or false. Returns a given value if true and another value if false. |
| ISBLANK | Determines if an expression has a value, and returns TRUE if it doesn’t. If it contains a value, returns FALSE. |
| ISCLONE | Checks if the record is a clone of another record, and returns TRUE if one item is a clone. Otherwise, returns FALSE. |
| ISNEW | Checks if the formula is running during the creation of a new record, and returns TRUE if it is. If an existing record is being updated, returns FALSE. |
| ISNULL | Determines if an expression is null (blank), and returns TRUE if it is. If it contains a value, returns FALSE.You must use ISBLANK instead of ISNULL in new formulas. ISBLANK has the same functionality as ISNULL, but also supports text fields. Salesforce continues to support ISNULL, so you don’t change any existing formulas. |
| ISNUMBER | Determines if a text value is a number, and returns TRUE if it is. Otherwise, returns FALSE. |
| NOT | Returns FALSE for TRUE and TRUE for FALSE. |
| NULLVALUE | Determines if an expression is null (blank) and returns a substitute expression if it is. If the expression isn’t blank, returns the value of the expression.You must use BLANKVALUE instead of NULLVALUE in new formulas. BLANKVALUE has the same functionality as NULLVALUE, but it also supports text fields. Salesforce continues to support NULLVALUE, so changing the existing formulas isn’t necessary. |
| OR | Determines if expressions are true or false. Returns TRUE if any expression is true, and returns FALSE if all expressions are false. |
| PRIORVALUE | Returns the previous value of a field. |

## Math Functions

| Function | Description |
| --- | --- |
| ABS | Calculates the absolute value of a number. The absolute value of a number is the number without its positive or negative sign. |
| ACOS | Returns the arc cosign of the number in radians, if the given number is from -1 through 1. Otherwise, returns NULL. |
| ASIN | Returns the arc sine of the number in radians, if the given number is from -1 through 1. Otherwise, returns NULL. |
| ATAN | Returns the arc tangent of the number in radians. |
| ATAN2 | Returns the arc tangent of the quotient of y and x in radians. |
| CEILING | Rounds a number up to the nearest integer, away from zero if negative. |
| CHR | Returns a string with the first character’s code point as the given number. |
| COS | Returns the cosine of the number in radians, if the given number is from -1 through 1. Otherwise, returns NULL. |
| DISTANCE | Calculates the distance between two locations in miles or kilometers. |
| EXP | Returns a value for e raised to the power of a number that you specify. |
| FLOOR | Returns a number rounded down to the nearest integer, towards zero if negative. |
| FROMUNIXTIME | Returns the datetime that represents the given number as the seconds elapsed since 1 Jan 1970. |
| GEOLOCATION | Returns a geolocation based on the provided latitude and longitude. Must be used with the DISTANCE function. |
| LN | Returns the natural logarithm of a specified number. Natural logarithms are based on the constant e value of 2.71828182845904. |
| LOG | Returns the base 10 logarithm of a number. |
| MAX | Returns the highest number from a list of numbers. |
| MCEILING | Rounds a number up to the nearest integer, towards zero if negative. |
| MFLOOR | Rounds a number down to the nearest integer, away from zero if negative. |
| MIN | Returns the lowest number from a list of numbers. |
| MOD | Returns a remainder after a number is divided by a specified divisor. |
| PI | Returns pi. |
| PICKLISTCOUNT | Returns the number of selected values in a multi-select picklist. |
| ROUND | Returns the nearest number to a number that you specify, constraining the new number by a specified number of digits. |
| SIN | Returns the sine of the number, where the number is given in radians. |
| SQRT | Returns the positive square root of a given number. |
| TAN | Returns the tangent of the number, where the number is given in radians. |
| TRUNC | Truncates a number to a specified number of digits. |

## Text Functions

| Function | Description |
| --- | --- |
| ASCII | Returns the first character’s code point from the given string as a number. |
| BEGINS | Determines if text begins with specific characters. Returns TRUE if it does, and returns FALSE if it doesn't. |
| BR | Inserts a line break in a string of text. |
| CASESAFEID | Converts a 15-character ID to a case-insensitive 18-character ID. |
| CONTAINS | Compares two arguments of text, and returns TRUE if the first argument contains the second argument. If not, returns FALSE. |
| FIND | Returns the position of a string within a string of text represented as a number. |
| GETSESSIONID | Returns the user’s session ID. |
| HTMLENCODE | Encodes text and merge field values for use in HTML by replacing characters that are reserved in HTML, such as the greater-than sign (>), with HTML entity equivalents, such as &gt;. |
| HYPERLINK | Creates a link to a URL specified that is linkable from the text specified. |
| IMAGE | Inserts an image with alternate text and height and width specifications. |
| INCLUDES | Determines if any value selected in a multi-select picklist field equals a text literal that you specify. |
| INITCAP | Returns the text as lowercase with the first character of each word in uppercase. |
| ISPICKVAL | Determines if the value of a picklist field is equal to a text literal that you specify. |
| JSENCODE | Encodes text and merge field values for use in JavaScript by inserting escape characters, such as a backslash (\), before unsafe JavaScript characters, such as the apostrophe ('). |
| JSINHTMLENCOD | Encodes text and merge field values for use in JavaScript inside HTML tags by replacing characters that are reserved in HTML with HTML entity equivalents and inserting escape characters before unsafe JavaScript characters. JSINHTMLENCODE(someValue) is a convenience function that is equivalent to JSENCODE(HTMLENCODE((someValue)). That is, JSINHTMLENCODE first encodes someValue with HTMLENCODE, and then encodes the result with JSENCODE. |
| LEFT | Returns the specified number of characters from the beginning of a text string. |
| LEN | Returns the number of characters in a specified text string. |
| LOWER | Converts all letters in the specified text string to lowercase. Any characters that aren’t letters are unaffected by this function. Locale rules are applied if a locale is provided. |
| LPAD | Inserts characters that you specify to the left-side of a text string. |
| MID | Returns the specified number of characters from the middle of a text string given the starting position. |
| REVERSE | Returns the characters of a source text string in reverse order. |
| RIGHT | Returns the specified number of characters from the end of a text string. |
| RPAD | Inserts characters that you specify to the right-side of a text string. |
| SUBSTITUTE | Substitutes new text for old text in a text string. |
| TEXT | Converts a percent, number, date, date/time, or currency type field into text anywhere formulas are used. Also, converts picklist values to text in approval rules, approval step rules, workflow rules, escalation rules, assignment rules, auto-response rules, validation rules, formula fields, field updates, and custom buttons and links. |
| TRIM | Removes the spaces and tabs from the beginning and end of a text string. |
| UPPER | Converts all letters in the specified text string to uppercase. Any characters that aren’t letters are unaffected by this function. Locale rules are applied if a locale is provided. |
| URLENCODE | Encodes text and merge field values for use in URLs by replacing characters that are illegal in URLs, such as blank spaces, with the code that represent those characters as defined in RFC 3986, Uniform Resource Identifier (URI): Generic Syntax. For example, blank spaces are replaced with %20, and exclamation points are replaced with %21. |
| VALUE | Converts a text string to a number. |

## Summary Functions

These functions are available with summary, matrix, and joined reports.

| Function | Description |
| --- | --- |
| PARENTGROUPVAL | Returns the value of a specified parent grouping. A “parent” grouping is any level above the one containing the formula. You can use this function only in custom summary formulas and at grouping levels for reports, but not at summary levels. |
| PREVGROUPVAL | Returns the value of a specified previous grouping. A “previous” grouping is one that comes before the current grouping in the report. Choose the grouping level and increment. The increment is the number of columns or rows before the current summary. The default is 1, the maximum is 12. You can use this function only in custom summary formulas and at grouping levels for reports, but not at summary levels. |

## Advanced Functions

| Function | Description |
| --- | --- |
| CURRENCYRATE | Returns the conversion rate to the corporate currency for the given currency ISO code. If the currency is invalid, returns 1.0. |
| GETRECORDIDS | Returns an array of strings in the form of record IDs for the selected records in a list, such as a list view or related list. |
| IMAGEPROXYURL | Securely retrieves external images, and prevents unauthorized requests for user credentials. |
| INCLUDE | Returns content from an s-control snippet. Use this function to reuse common code in many s-controls. |
| ISCHANGED | Compares the value of a field to the previous value, and returns TRUE if the values are different. If the values are the same, returns FALSE. |
| JUNCTIONIDLIST | Returns a JunctionIDList based on the provided IDs. |
| LINKTO | Returns a relative URL in the form of a link (href and anchor tags) for a custom s-control or Salesforce page. |
| PREDICT | Returns an Einstein Discovery prediction for a record based on the specified record ID or for a list of fields and their values. |
| REGEX | Compares a text field to a regular expression, and returns TRUE if there’s a match. Otherwise, returns FALSE. A regular expression is a string used to describe a format of a string according to certain syntax rules. |
| REQUIRESCRIPT | Returns a script tag with source for a URL that you specify. Use this function when referencing the Lightning Platform AJAX Toolkit or other JavaScript toolkits. |
| URLFOR | Returns a relative URL for an action, s-control, Visualforce page, or a file in a static resource archive in a Visualforce page. |
| VLOOKUP | Returns a value by looking up a related value on a custom object similar to the VLOOKUP() Excel function. |
