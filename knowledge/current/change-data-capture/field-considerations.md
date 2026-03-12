---
title: "Field Considerations"
domain: change-data-capture
topic: field-considerations
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:34:09.572Z
estimatedTokens: 1541
keywords: [Considerations, Keep, mind, filter, expression, Text, Checkbox, Date, Time, Number, Relationship, General]
---

# Field Considerations

> Keep these considerations in mind for the fields in a filter expression.

# Field Considerations

Keep these considerations in mind for the fields in a filter expression.

## Text Field Considerations

-   Enclose Text field values in single quotes. For example, MyTextField\_\_c='Hello' is valid, but MyTextField\_\_c=Hello isn’t valid.
-   Text values are case-insensitive except for custom fields that are marked as case-sensitive through the Unique field attribute. For example, for a field not marked as case-sensitive, MyTextField\_\_c='ABC' and MyTextField\_\_c='abc' are considered the same. Events with any combination of uppercase and lowercase letters of the field value match the filter and are delivered.
-   If an administrator changes the case sensitivity of a custom Text field, the change isn’t reflected in the filter in an active subscription until you stop and restart the subscription.
-   A Text value can contain spaces and tabs between words. Because leading and trailing spaces and tabs in Text field values are stripped in the received event messages, don’t include them in the filter string. If you do, the filter comparison fails.
-   Text fields support all comparison operators. Comparisons of Text fields using <, <=, \>, and \>= are lexicographic, similar to SOQL.
-   If a Text field value includes special characters such as a double quote ("), you can escape the characters, with some exceptions. You can’t escape the backslash (\\), underscore (\_), and percent (%) characters. For more information, see [Quoted String Escape Sequences](https://developer.salesforce.com/docs/atlas.en-us.260.0.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_select_quotedstringescapes.htm) in the SOQL and SOSL Reference.

## Checkbox Field Considerations

-   Checkbox fields support only the \= and != comparison operators. Using another operator causes an error.
-   Comparing a Checkbox field to null is equivalent to comparing it to a value of false.

## Date and Time Field Considerations

-   For Date/Time fields, the supported formats include the time zone offset preceded by + or \-: YYYY-MM-DDThh:mm:ss+hh:mm and YYYY-MM-DDThh:mm:ss-hh:mm, and the format that includes the UTC time zone designator Z: YYYY-MM-DDThh:mm:ssZ.
-   Time field values require that the UTC time zone designator Z be included in this format: hh:mm:ssZ. Time field values are saved and retrieved in UTC.
-   You can compare Date and Date/Time fields to hardcoded date values only, such as 2021-07-09 or 2021-07-09T10:30:11-08:00. You can’t compare them to date literals such as TOMORROW. For more information, see [Date Formats and Date Literals](https://developer.salesforce.com/docs/atlas.en-us.260.0.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_select_dateformats.htm) in the SOQL and SOSL Reference.

## Number Field Considerations

-   If a filter expression contains a Number field with a value greater than 2147483647, when you attempt to save the channel member containing the filter expression you get a FIELD\_INTEGRITY\_EXCEPTION with an error message that starts with "A number format error occurred". The error is due to a limitation in SOQL, which is described in this [known issue](https://issues.salesforce.com/issue/a028c00000qPxwA/trying-to-query-a-number-field-without-decimals-via-soql-using-a-where-clause-with-a-number-greater-than-2147483647-will-fail). To save the filter expression, append .0 to the value so that it becomes a decimal value. For example, "filterExpression" : "MyNumberField\_\_c = 1657093404000.0".

## Null Field Considerations

-   When comparing a field to null, only the \= and != operators are supported.

## Relationship Field Considerations

-   A filter expression can contain relationship fields that are included in change events, such as LastModifiedById. Traversed relationship fields, such as LastModifiedBy.Name, aren’t supported in filter expressions because those fields aren’t included in change events. For example, a filter expression can contain the field expression LastModifiedById='005RM000001dTr0YAE', but not LastModifiedBy.Name='Joe Smith'.

## General Field Considerations

-   Deleting fields—If a field is referenced in a filter expression, you can’t delete it. If you delete it, you get an error.
-   Deleting a custom object—If a filter expression references fields of a custom object, you can’t delete the custom object.
-   Renaming fields—If you rename a field that’s referenced in a filter expression, the filter continues to be applied correctly. The system maps the old field name to the renamed field. It’s not necessary to update the field name in the filter expression. If you rename a field label, the field name doesn’t change, and filtering continues to work correctly.

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=change_data_capture)

    #### Note

    If a filter expression was created before Winter ’23, renamed fields work only after you update the filter expression and save the channel member again.

-   Namespace prefix—If a filter expression was created before an org had a namespace, and the filter expression didn’t contain the namespace prefix in the field names, the filter expression is automatically updated with the namespace prefix and continues to work.
-   Changing field types—You can’t change the type of a field that’s referenced in a filter expression. If you change it, you get an error.
-   Field name case in the filter expression—The names of fields used in a filter expression are case-insensitive. The case of field names in the filter expression and the change event schema can differ.
-   Null enriched fields—Fields in a filter expression are also enriched fields. If an enriched field is null, it’s excluded from the change event message. In the filter expression, the field is evaluated as null.
-   Field-level security—When filter expressions are evaluated, field-level security is ignored. Filter expressions are evaluated on all fields included even if the subscriber doesn’t have access to the fields. Events delivered in the filtered stream include only the fields that the subscriber has access to, and they exclude the fields the subscriber doesn’t have access to.
