---
title: "Field Considerations"
domain: platform-events
topic: field-considerations
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:35:27.800Z
estimatedTokens: 1210
keywords: [Considerations, Keep, mind, filter, expression, Text, Checkbox, Date, Number, Platform, Event]
---

# Field Considerations

> Keep these considerations in mind for the fields in a filter expression.

# Field Considerations

Keep these considerations in mind for the fields in a filter expression.

## Text Field Considerations

-   Enclose Text field values in single quotes. For example, MyTextField\_\_c='Hello' is valid, but MyTextField\_\_c=Hello isn’t valid.
-   Text values are case-insensitive. For example, MyTextField\_\_c='ABC' and MyTextField\_\_c='abc' are considered the same. Events with any combination of uppercase and lowercase letters of the field value match the filter and are delivered.
-   A Text value can contain spaces and tabs between words. Because leading and trailing spaces and tabs in Text field values are stripped in the received event messages, don’t include them in the filter string. If you do, the filter comparison fails.
-   Text fields support all comparison operators. Comparisons of Text fields using <, <=, \>, and \>= are lexicographic, similar to SOQL.
-   If a Text field value includes special characters such as a double quote ("), you can escape the characters, with some exceptions. You can’t escape the backslash (\\), underscore (\_), and percent (%) characters. For more information, see [Quoted String Escape Sequences](https://developer.salesforce.com/docs/atlas.en-us.260.0.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_select_quotedstringescapes.htm) in the SOQL and SOSL Reference.

## Checkbox Field Considerations

-   Checkbox fields support only the \= and != comparison operators. Using another operator causes an error.
-   Comparing a Checkbox field to null is equivalent to comparing it to a value of false.

## Date Field Considerations

-   For Date/Time fields, the supported formats include the time zone offset preceded by + or \-: YYYY-MM-DDThh:mm:ss+hh:mm and YYYY-MM-DDThh:mm:ss-hh:mm, and the UTC time zone designator Z: YYYY-MM-DDThh:mm:ssZ.
-   You can compare Date and Date/Time fields to hardcoded date values only, such as 2021-07-09 or 2021-07-09T10:30:11-08:00. You can’t compare them to date literals such as TOMORROW. For more information, see [Date Formats and Date Literals](https://developer.salesforce.com/docs/atlas.en-us.260.0.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_select_dateformats.htm) in the SOQL and SOSL Reference.

## Number Field Considerations

-   If a filter expression contains a Number field with a value greater than 2147483647, when you attempt to save the channel member containing the filter expression you get a FIELD\_INTEGRITY\_EXCEPTION with an error message that starts with "A number format error occurred". The error is due to a limitation in SOQL, which is described in this [known issue](https://issues.salesforce.com/issue/a028c00000qPxwA/trying-to-query-a-number-field-without-decimals-via-soql-using-a-where-clause-with-a-number-greater-than-2147483647-will-fail). To save the filter expression, append .0 to the value so that it becomes a decimal value. For example: "filterExpression" : "MyNumberField\_\_c = 1657093404000.0"

## Null Field Considerations

-   When comparing a field to null, only the \= and != operators are supported.

## Platform Event Field Considerations

-   Deleting event fields—If a field is referenced in a filter expression, you can’t delete it. If you delete it, you get an error.
-   Deleting a custom platform event—If a custom platform event is referenced in a filter expression in a channel member, you can’t delete the custom event definition.
-   Renaming event fields—If you rename a field that’s referenced in a filter expression, the filter continues to be applied correctly. The system maps the old field name to the renamed field. It’s not necessary to update the field name in the filter expression. If you rename a field label, the field name doesn’t change, and filtering continues to work correctly.

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=platform_events)

    #### Note

    If a filter expression was created before Winter ’23, renamed fields work only after you update the filter expression and save the channel member again.

-   Namespace prefix—If a filter expression was created before an org had a namespace and the filter expression didn’t contain the namespace prefix in the field names, the filter expression is automatically updated with the namespace prefix and continues to work.
-   Changing field types—You can’t change the type of a field that’s referenced in a filter expression. If you change it, you get an error.
-   Field name case in the filter expression—The names of fields used in a filter expression are case-insensitive. The case of field names in the filter expression and the platform event schema can differ.
-   Missing event fields—If a filter expression references a valid field that isn’t part of a published event message, the field is evaluated as null or false for a Checkbox field.
