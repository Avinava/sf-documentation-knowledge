---
title: "Functions"
domain: pages
topic: functions
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:24.311Z
estimatedTokens: 6684
keywords: [Functions, transform, data, records, perform, calculations, provide, Visualforce, attributes, Date, Time, Logical, Math, Text, Advanced]
---

# Functions

> Use functions to transform data from records, perform calculations, or to provide
    values for Visualforce attributes.

# Functions

Use functions to transform data from records, perform calculations, or to provide values for Visualforce attributes.

Functions must be used in a Visualforce expression to be evaluated. You can use the following functions in your Visualforce pages.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pages)

#### Note

Within an email template, merge fields can only be used in formula functions and operations when the merge field belongs to the record the email will be related to, otherwise these fields won’t resolve.

## Date and Time Functions

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pages)

#### Note

The date/time data type might not evaluate correctly in formula expressions for Visualforce pages with an API version less than 20.0. It may be incorrectly interpreted as just a date type.

| Function | Description | Use |
| --- | --- | --- |
| ADDMONTHS | Returns the date that is the indicated number of months before or after a specified date. If the specified date is the last day of the month, the resulting date is the last day of the resulting month. Otherwise, the result has the same date component as the specified date. | ADDMONTHS (date, num) and replace date with the start date and num with the number of months to be added. |
| DATE | Returns a date value from year, month, and day values you enter. Salesforce displays an error on the detail page if the value of the DATE function in a formula field is an invalid date, such as February 29 in a non-leap year. | DATE(year,month,day) and replace year with a four-digit year, month with a two-digit month, and day with a two-digit day. |
| DATEVALUE | Returns a date value for a date/time or text expression. | DATEVALUE(expression) and replace expression with a date/time or text value, merge field, or expression. |
| DATETIMEVALUE | Returns a year, month, day, and GMT time value. | DATETIMEVALUE(expression) and replace expression with a date/time or text value, merge field, or expression. |
| DAY | Returns a day of the month in the form of a number between 1 and 31. | DAY(date) and replace date with a date field or value such as TODAY(). |
| HOUR | Returns the local time hour value without the date in the form of a number from 1 through 24. | HOUR(time) and replace time with a time value or value such as TIMENOW(). |
| MILLISECOND | Returns a milliseconds value in the form of a number from 0 through 999. | MILLISECOND(time) and replace time with a time value or value such as TIMENOW(). |
| MINUTE | Returns a minute value in the form of a number from 0 through 60. | MINUTE(time) and replace time with a time value or value such as TIMENOW(). |
| MONTH | Returns the month, a number between 1 (January) and 12 (December) in number format of a given date. | MONTH(date) and replace date with the field or expression for the date containing the month you want returned. |
| NOW | Returns a date/time representing the current moment.The NOW function returns the current date and time in the GMT timezone. {!NOW()} For example:Today's date and time is: {!NOW()}produces the following:Today's date and time is: Mon Jul 21 16:12:10 GMT 2008TipsDon’t remove the parentheses.Keep the parentheses empty. They do not need to contain a value.Use addition or subtraction operators and a number with a NOW function to return a different date and time. For example {!NOW() +5} calculates the date and time five days ahead of now.If you prefer to use a date time field, use TODAY. | NOW() |
| SECOND | Returns a seconds value in the form of a number from 0 through 60. | SECOND(time) and replace time with a time value or value such as TIMENOW(). |
| TIMENOW | Returns a time value in GMT representing the current moment. Use this function instead of the NOW function if you only want to track time, without a date. | TIMENOW() |
| TIMEVALUE | Returns the local time value without the date, such as business hours. | TIMEVALUE(value) and replace value with a date/time or text value, merge field, or expression. |
| TODAY | Returns the current date as a date data type.The TODAY function returns the current day. For example, The following markup:Today's date is: {!TODAY()}produces the following output:Today's date is: Mon Jul 21 00:00:00 GMT 2008TipsDo not remove the parentheses.Keep the parentheses empty. They do not need to contain a value.Use addition and subtraction operators with a TODAY function and numbers to return a date. For example {!TODAY() +7} calculates the date seven days ahead of now.If you prefer to use a date time field, use NOW. | TODAY() |
| WEEKDAY | Returns the day of the week for the given date, using 1 for Sunday, 2 for Monday, through 7 for Saturday. | WEEKDAY(date) |
| YEAR | Returns the four-digit year in number format of a given date. | YEAR(date) and replace date with the field or expression that contains the year you want returned. |

## Logical Functions

| Function | Description | Use |
| --- | --- | --- |
| AND | Returns a TRUE response if all values are true; returns a FALSE response if one or more values are false.The following markup displays the word “Small” if the price and quantity are less than one. This field is blank if the asset has a price or quantity greater than one.{!IF(AND(Price < 1,    Quantity < 1),    "Small", null)}You can use && instead of the word AND in your Visualforce markup. For example, AND(Price < 1, Quantity < 1) is the same as (Price < 1) && (Quantity < 1).Make sure the value_if_true and value_if_false expressions have the same data type. | AND(logical1,logical2,...) and replace logical1,logical2,... with the values that you want evaluated. |
| BLANKVALUE | Determines if an expression has a value and returns a substitute expression if it doesn’t. If the expression has a value, returns the value of the expression. | BLANKVALUE(expression, substitute_expression) and replace expression with the expression you want evaluated; replace substitute_expression with the value you want to replace any blank values. |
| CASE | Checks a given expression against a series of values. If the expression is equal to a value, returns the corresponding result. If it isn't equal to any values, it returns the else_result. | CASE(expression,value1, result1, value2, result2,..., else_result) and replace expression with the field or value you want compared to each specified value. Replace each value and result with the value that must be equivalent to return the result entry. Replace else_result with the value you want returned when the expression doesn't equal any values. |
| IF | Determines if expressions are true or false. Returns a given value if true and another value if false.The following markup returns “Private” if the opportunity IsPrivate field is set to true; it returns “Not Private” if the field is set to false.{!IF(opportunity.IsPrivate, "Private", "Not Private")} | IF(logical_test, value_if_true, value_if_false) and replace logical_test with the expression you want evaluated; replace value_if_true with the value you want returned if the expression is true; replace value_if_false with the value you want returned if the expression is false. |
| ISBLANK | Determines if an expression has a value and returns TRUE if it does not. If it contains a value, this function returns FALSE. | ISBLANK(expression) and replace expression with the expression you want evaluated. |
| ISCLONE | Checks if the record is a clone of another record and returns TRUE if one item is a clone. Otherwise, returns FALSE. | ISCLONE() |
| ISNEW | Checks if the formula is running during the creation of a new record and returns TRUE if it is. If an existing record is being updated, this function returns FALSE. | ISNEW() |
| ISNULL | Determines if an expression is null (blank) and returns TRUE if it is. If it contains a value, this function returns FALSE. | (IF(ISNULL(Maint_Amount__c), 0, 1) + ​  IF(ISNULL(Services_Amount__c), 0,1) + ​   IF(ISNULL(Discount_Percent__c), 0, 1) + ​    IF(ISNULL(Amount), 0, 1) +​     IF(ISNULL(Timeline__c), 0, 1)) / 5 |
| ISNUMBER | Determines if a text value is a number and returns TRUE if it is. Otherwise, it returns FALSE. | ISNUMBER(text) and replace text with the merge field name for the text field. |
| NOT | Returns FALSE for TRUE and TRUE for FALSE.The following markup returns the value of ReportAcct if the account IsActive field is set to false. It returns the value of SaveAcct if IsActive is set to true.{!IF(NOT(Account.IsActive)ReportAcct, SaveAcct)}You can use ! instead of the word NOT in your Visualforce markup. For example, NOT(Account.IsActive) is the same as !Account.IsActive). | NOT(logical) and replace logical with the expression that you want evaluated. |
| NULLVALUE | Determines if an expression is null (blank) and returns a substitute expression if it is. If the expression is not blank, returns the value of the expression. | NULLVALUE(expression, substitute_expression) and replace expression with the expression you want to evaluate; replace substitute_expression with the value you want to replace any blank values. |
| OR | Determines if expressions are true or false. Returns TRUE if any expression is true. Returns FALSE if all expressions are false.The following markup will return the value of VerifyAcct if either account field IsActive__c or IsNew__c is set to true.{!IF(OR(Account.IsActive__c,     Account.IsNew__C))     VerifyAcct, CloseAcct)}You can use \|\| instead of the word OR in your Visualforce markup. For example, OR(Price < 1, Quantity < 1) is the same as ((Price < 1) \|\| (Quantity < 1)). | OR(logical1, logical2...) and replace any number of logical references with the expressions you want evaluated. |
| PRIORVALUE | Returns the previous value of a field. | PRIORVALUE(field) |

## Math Functions

| Function | Description | Use |
| --- | --- | --- |
| ABS | Calculates the absolute value of a number. The absolute value of a number is the number without its positive or negative sign. | ABS(number) and replace number with a merge field, expression, or other numeric value that has the sign you want removed. |
| CEILING | Rounds a number up to the nearest integer, away from zero if negative. | CEILING(number) and replace number with the field or expression you want rounded. |
| EXP | Returns a value for e raised to the power of a number you specify. | EXP(number) and replace number with a number field or value such as 5. |
| FLOOR | Returns a number rounded down to the nearest integer, towards zero if negative. | FLOOR(number) and replace number with a number field or value such as 5.245. |
| LN | Returns the natural logarithm of a specified number. Natural logarithms are based on the constant e value of 2.71828182845904.= | LN(number) and replace number with the field or expression for which you want the natural logarithm. |
| LOG | Returns the base 10 logarithm of a number. | LOG(number) and replace number with the field or expression from which you want the base 10 logarithm calculated. |
| MAX | Returns the highest number from a list of numbers. | MAX(number, number,...) and replace number with the fields or expressions from which you want to retrieve the highest number. |
| MCEILING | Rounds a number up to the nearest integer, towards zero if negative. | MCEILING(number) |
| MFLOOR | Rounds a number down to the nearest integer, away from zero if negative. | MFLOOR(number) |
| MIN | Returns the lowest number from a list of numbers. | MIN(number, number,...) and replace number with the fields or expressions from which you want to retrieve the lowest number. |
| MOD | Returns a remainder after a number is divided by a specified divisor. | MOD(number, divisor) and replace number with the field or expression you want divided; replace divisor with the number to use as the divisor. |
| ROUND | Returns the nearest number to a number you specify, constraining the new number by a specified number of digits. | ROUND(number, num_digits) and replace number with the field or expression you want rounded; replace num_digits with the number of decimal places you want to consider when rounding. |
| SQRT | Returns the positive square root of a given number. | SQRT(number) and replace number with the field or expression you want computed into a square root. |

## Text Functions

| Function | Description | Use |
| --- | --- | --- |
| BEGINS | Determines if text begins with specific characters and returns TRUE if it does. Returns FALSE if it doesn't.The following markup will return true if the opportunity StageName field begins with the string “Closed”. Standard stage names “Closed Won” and “Closed Lost” would both return true.   {!BEGINS(opportunity.StageName, 'Closed')}  This function is case-sensitive so be sure your compare_text value has the correct capitalization. Also, this function only works with text, not with numbers or other data types. | BEGINS(text, compare_text) and replace text, compare_text with the characters or fields you want to compare. |
| BR | Inserts a line break in a string of text. | BR() |
| CASESAFEID | Converts a 15-character ID to a case-insensitive 18-character ID. | CASESAFEID(id) and replace id with the object’s ID. |
| CONTAINS | Compares two arguments of text and returns TRUE if the first argument contains the second argument. If not, returns FALSE.The following example checks the content of a custom text field named Product_Type and returns “Parts” for any product with the word “part” in it. Otherwise, it returns “Service.”{!IF(contains(opportunity.Product_Type__c, "part"), "Parts", "Service")}This function is case-sensitive so be sure your compare_text value has the correct capitalization. | CONTAINS(text, compare_text) and replace text with the text that contains the value of compare_text. |
| FIND | Returns the position of a string within a string of text represented as a number. | FIND(search_text, text[, start_num]) and replace search_text with the string you want to find, replace text with the field or expression you want to search, and replace start_num with the number of the character from which to start searching from left to right. |
| GETSESSIONID | Returns the user’s session ID. | GETSESSIONID() |
| HTMLENCODE | Encodes text and merge field values for use in HTML by replacing characters that are reserved in HTML, such as the greater-than sign (>), with HTML entity equivalents, such as &gt;. | {!HTMLENCODE(text)} and replace text with the merge field or text string that contains the reserved characters. |
| ISPICKVAL | Determines if the value of a picklist field is equal to a text literal you specify. | ISPICKVAL(picklist_field, text_literal) and replace picklist_field with the merge field name for the picklist; replace text_literal with the picklist value in quotes. text_literal cannot be a merge field or the result of a function. |
| JSENCODE | Encodes text and merge field values for use in JavaScript by inserting escape characters, such as a backslash (\), before unsafe JavaScript characters, such as the apostrophe ('). | {!JSENCODE(text)} and replace text with the merge field or text string that contains the unsafe JavaScript characters. |
| JSINHTMLENCODE | Encodes text and merge field values for use in JavaScript inside HTML tags by replacing characters that are reserved in HTML with HTML entity equivalents and inserting escape characters before unsafe JavaScript characters. JSINHTMLENCODE(someValue) is a convenience function that is equivalent to JSENCODE(HTMLENCODE((someValue)). That is, JSINHTMLENCODE first encodes someValue with HTMLENCODE, and then encodes the result with JSENCODE. | {!JSINHTMLENCODE(text)} and replace text with the merge field or text string that contains the unsafe JavaScript characters. |
| LEFT | Returns the specified number of characters from the beginning of a text string. | LEFT(text, num_chars) and replace text with the field or expression you want returned; replace num_chars with the number of characters from the left you want returned. |
| LEN | Returns the number of characters in a specified text string.{!LEN(Account.name)} returns the number of characters in the Account name. LEN counts spaces as well as characters. {!LEN("The Spot")} returns 8. | LEN(text) and replace text with the field or expression whose length you want returned. |
| LOWER | Converts all letters in the specified text string to lowercase. Any characters that are not letters are unaffected by this function. Locale rules are applied if a locale is provided. | LOWER(text, [locale]) and replace text with the field or text you wish to convert to lowercase, and locale with the optional two-character ISO language code or five-character locale code, if available. |
| LPAD | Inserts characters you specify to the left-side of a text string. | LPAD(text, padded_length[, pad_string]) and replace the variables:text is the field or expression you want to insert characters to the left of.padded_length is the number of total characters in the text that will be returned.pad_string is the character or characters that should be inserted. pad_string is optional and defaults to a blank space.If the value in text is longer than pad_string, text is truncated to the size of padded_length. |
| MID | Returns the specified number of characters from the middle of a text string given the starting position. | MID(text, start_num, num_chars) and replace text with the field or expression to use when returning characters; replace start_num with the number of characters from the left to use as a starting position; replace num_chars with the total number of characters to return. |
| RIGHT | Returns the specified number of characters from the end of a text string. | RIGHT(text, num_chars) and replace text with the field or expression you want returned; replace num_chars with the number of characters from the right you want returned. |
| RPAD | Inserts characters that you specify to the right-side of a text string. | RPAD(text, padded_length[, 'pad_string']) and replace the variables:text is the field or expression after which you want to insert characters.pad_length is the number of total characters in the text string that will be returned.pad_string is the character or characters to insert. pad_string is optional and defaults to a blank space.If the value in text is longer than pad_string, text is truncated to the size of padded_length. |
| SUBSTITUTE | Substitutes new text for old text in a text string. | SUBSTITUTE(text, old_text, new_text) and replace text with the field or value for which you want to substitute values, old_text with the text you want replaced, and new_text with the text you want to replace the old_text. |
| TEXT | Converts a percent, number, date, date/time, or currency type field into text anywhere formulas are used. Also, converts picklist values to text in approval rules, approval step rules, workflow rules, escalation rules, assignment rules, auto-response rules, validation rules, formula fields, field updates, and custom buttons and links. | TEXT(value) and replace value with the field or expression you want to convert to text format. Avoid using any special characters besides a decimal point (period) or minus sign (dash) in this function. |
| TRIM | Removes the spaces and tabs from the beginning and end of a text string. | TRIM(text) and replace text with the field or expression you want to trim. |
| UPPER | Converts all letters in the specified text string to uppercase. Any characters that are not letters are unaffected by this function. Locale rules are applied if a locale is provided. | UPPER(text, [locale]) and replace text with the field or expression you wish to convert to uppercase, and locale with the optional two-character ISO language code or five-character locale code, if available. |
| URLENCODE | Encodes text and merge field values for use in URLs by replacing characters that are illegal in URLs, such as blank spaces, with the code that represent those characters as defined in RFC 3986, Uniform Resource Identifier (URI): Generic Syntax. For example, blank spaces are replaced with %20, and exclamation points are replaced with %21. | {!URLENCODE(text)} and replace text with the merge field or text string that you want to encode. |
| VALUE | Converts a text string to a number. | VALUE(text) and replace text with the field or expression you want converted into a number. |

## Advanced Functions

| Function | Description | Use |
| --- | --- | --- |
| CURRENCYRATE | Returns the conversion rate to the corporate currency for the given currency ISO code. If the currency is invalid, returns 1.0. | CURRENCYRATE(currency_ISO_code) and replace currency_ISO_code with a currency ISO code, such as “USD”. |
| GETRECORDIDS | Returns an array of strings in the form of record IDs for the selected records in a list, such as a list view or related list. | {!GETRECORDIDS(object_type)} and replace object_type with a reference to the custom or standard object for the records you want to retrieve. |
| IMAGEPROXYURL | Securely retrieves external images and prevents unauthorized requests for user credentials. | <apex:image value="{!IMAGEPROXYURL("http://exampledomain.com/pic.png")}"/> and replace http://exampledomain.com/pic.png with your image. |
| INCLUDE | Returns content from an s-control snippet. Use this function to reuse common code in many s-controls. | {!INCLUDE(source, [inputs])} and replace source with the s-control snippet you want to reference. Replace inputs with any information you need to pass the snippet. |
| ISCHANGED | Compares the value of a field to the previous value and returns TRUE if the values are different. If the values are the same, this function returns FALSE. | ISCHANGED(field) and replace field with the name of the field you want to compare. |
| JUNCTIONIDLIST | Returns a JunctionIDList based on the provided IDs. | JUNCTIONIDLIST(id, id,...) and replace id with the Salesforce ID you want to use. |
| LINKTO | Returns a relative URL in the form of a link (href and anchor tags) for a custom s-control or Salesforce page. | {!LINKTO(label, target,​ id, [inputs], [no override]}​ and replace label with the text for the link, target with the URL, and id with a reference to the record. Inputs are optional and can include any additional parameters you want to add to the link. The no override argument is also optional and defaults to “false.” It applies to targets for standard Salesforce pages such as $Action.Account.New. Replace no override with “true” when you want to display a standard Salesforce page regardless of whether you have defined an override for it elsewhere. |
| PREDICT | Returns an Einstein Discovery prediction for a record based on the specified record ID or for a list of fields and their values. | PREDICT(PredDefId, [recordId] \| [field, value, ...]). Replace PredDefId with the Prediction Definition ID of a deployed prediction in your org. Specify the recordId of the record to predict or a list of fields and their associated values ([field, value, ...]). |
| REGEX | Compares a text field to a regular expression and returns TRUE if there is a match. Otherwise, it returns FALSE. A regular expression is a string used to describe a format of a string according to certain syntax rules. | REGEX(text, regex_text) and replace text with the text field, and regex_text with the regular expression you want to match. |
| REQUIRESCRIPT | Returns a script tag with source for a URL you specify. Use this function when referencing the Lightning Platform AJAX Toolkit or other JavaScript toolkits. | {!REQUIRESCRIPT(url)} and replace url with the link for the script that is required. |
| URLFOR | Returns a URL for an action, an s-control, a Visualforce page, or a file in a static resource archive. URLFOR is available for use in custom buttons and links, s-controls, and Visualforce pages.NoteAs of Winter ’25, all Visualforce pages are served on the force.com domain or a site domain. URLFOR currently returns an absolute URL for all Visualforce pages. See Ensure Access to Your Visualforce Pages in Summer ’24 and Winter ’25. | {!URLFOR(target, [id], [inputs], [no override])} and replace target with the URL or action, s-control, or static resource merge variable; id with an optional reference to the record; and inputs with any optional parameters. The no override argument is also optional and defaults to false. It applies to targets for standard Salesforce pages such as $Action.Account.New. Replace no override with true when you want to display a standard Salesforce page regardless of whether you have defined an override for it elsewhere.To access a Visualforce page, enter the page name preceded by $Page. For example, if your Visualforce page is named myTestPage, use:{!URLFOR($Page.myTestPage)}To return a reference to a file contained in a static resource archive (such as a .zip or .jar file), use the format {!URLFOR(resource, path)}. Replace resource with the name of the static resource archive expressed as a merge variable (for example, $Resource.resourceName), and path with the local path to the file in the archive that you want to reference.Use the [inputs] array to provide name-value pairs, which are added to the URL as query string parameters. Input values can be dynamic. For example, to include an account ID, specify:{!URLFOR($Page.myVisualforcePage, null, [accountId=Account.Id])}The resulting URL would include a parameter with the ID, such as:https://MyDomainName--PackageName.vf.force.com/apex/myVisualforcePage?accountId=001B0000002txolNoteParameter names are static This means you can’t use a variable to determine the parameter name. For example, if you use [myVariable="value1"] and set myVariable to "param1", the resulting URL includes ?myVariable=value1 and not the param1 value.Query string parameters are intended for short, simple values. Don’t try to be clever, for example, by encoding complex values as JSON. If your request needs to pass more data, use a Visualforce form component, and send the data in the POST request body. |
| VLOOKUP | Returns a value by looking up a related value on a custom object similar to the VLOOKUP() Excel function. | VLOOKUP(field_to_return, field_on_lookup_object, lookup_value) and replace field_to_return with the field that contains the value you want returned, field_on_lookup_object with the field on the related object that contains the value you want to match, and lookup_value with the value you want to match. You can only use VLOOKUP() in validation rules. If the function fails because, for example, the field_on_lookup_object doesn’t exist, you can specify an error message in the validation rule itself. |

## Code Examples

```
{!IF(AND(Price < 1,
   Quantity < 1),
   "Small", null)}
```

```
(IF(ISNULL(Maint_Amount__c), 0, 1) + ​
 IF(ISNULL(Services_Amount__c), 0,1) + ​
  IF(ISNULL(Discount_Percent__c), 0, 1) + ​
   IF(ISNULL(Amount), 0, 1) +​
    IF(ISNULL(Timeline__c), 0, 1)) / 5
```

```
{!IF(OR(Account.IsActive__c, 
   Account.IsNew__C)) 
   VerifyAcct, CloseAcct)}
```

## Related Topics

- static
                    resource (atlas.en-us.pages.meta/pages/pages_resources.htm)
