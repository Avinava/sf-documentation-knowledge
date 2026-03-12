---
title: "Primitive Data Types"
domain: object-reference
topic: primitive-data-types
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:03.222Z
estimatedTokens: 1786
keywords: [Primitive, Data, API, uses]
---

# Primitive Data Types

> The API uses the following primitive data types:

# Primitive Data Types

The API uses the following primitive data types:

| Value | Details |
| --- | --- |
| base64 | Base 64-encoded binary data. Fields of this type are used for storing binary files in Attachment records, Document records, and Scontrol records. In these objects, the Body or Binary field contains the (base64 encoded) data, while the BodyLength field defines the length of the data in the Body or Binary field. In the Document object, you can specify a URL to the document instead of storing the document directly in the record. |
| boolean | Boolean fields have one of these values: true (or 1), or false (or 0). |
| byte | A set of bits. |
| date | Date data. Fields of this type contain date values, such as ActivityDate in the Event object. Unlike dateTime fields, date fields contain no time value—the time portion of a date field is not relevant and is always set to midnight in the Coordinated Universal Time (UTC) time zone.If you specify a date value in a query, you can filter on date fields only. |
| dateTime | Date/time values (timestamps). Fields of this type handle date/time values (timestamps), such as ActivityDateTime in the Event object or the CreatedDate, LastModifiedDate, or SystemModstamp in many objects. Regular dateTime fields are full timestamps with a precision of one second. They are always transferred in the Coordinated Universal Time (UTC) time zone. In your client application, you might need to translate the timestamp to or from a local time zone.If you specify a dateTime value in a query, you can filter on dateTime fields only.Development tools differ in the way that they handle time data. Some development tools report the local time, while others report only the Coordinated Universal Time (UTC) time zone. To determine how your development tool handles time values, refer to its documentation.NoteThe Event object has a DurationInMinutes field that specifies the number of minutes for an event. Even though this is a temporal value, it is an integer type—not a dateTime type. |
| double | Double values. Fields of this type can contain fractional portions (digits to the right of the decimal place), such as ConversionRate in CurrencyType. In the API, all non-integer values (such as Currency Field Type and Percent Field Type) contain values of type double. Some restrictions may be applied to double values:scale: Maximum number of digits to the right of the decimal place.precision: Total number of digits, including those to the left and the right of the decimal placeThe maximum number of digits to the left of the decimal place is equal to precision minus scale. In the Salesforce user interface, precision is defined differently—it is the maximum number of digits allowed to the left of the decimal place.Values can be stored in scientific notation if the number is large enough (or, for negative numbers, small enough), as indicated by the W3C XML Schema Part 2: Datatypes Second Edition specification.WarningWhen the user sets the precision in custom fields in the Salesforce application, it displays the precision set by the user, even if the user enters a more precise value than defined for those fields. However, when you set the precision in custom fields using the API, no rounding occurs when the user retrieves the number field. |
| int | Fields of this type contain numbers with no fractional portion (digits to the right of a decimal place), such as the NumberOfEmployees in an Account. For integer fields, digits specifies the maximum number of digits that an int can have. |
| long | Large integers. They are similar to the int type but can hold a wider range of numbers. The smallest possible value for long is -9223372036854775808 and the largest possible value is 9223372036854775807. For long fields, digits specifies the maximum number of digits that the number can have. |
| string | Character strings. Fields that are of data type string contain text and some have length restrictions depending on the data being stored. For example, in the Contact object, the FirstName field is 40 characters, the LastName field is 80 characters, the MailingStreet is 255 characters.NoteFor fields that contain strings, behavior is different beginning with API version 15.0. In API versions previous to 15.0, if you specify a value for a field, and that value is too large, the value is truncated. For API version 15.0 and later, if a value is specified that is too large, the operation fails and the fault code STRING_TOO_LONG is returned. AllowFieldTruncationHeader allows you to specify that the previous behavior, truncation, be used instead of the new behavior in API versions 15.0 and later. This header has no effect in versions 14.0 and earlier. The affected fields are: anyType, email, encryptedstring, multipicklist, phone, picklist, string, and textarea. |
| time | Time values. Fields of this type handle time values, such as FridayEndTime in the BusinessHours object, with a precision of one millisecond.Development tools differ in the way that they handle time data. Some development tools report the local time, while others report only the Coordinated Universal Time (UTC) time zone. To determine how your development tool handles time values, refer to its documentation. |

These data types are used in the SOAP messages that are exchanged between your client application and the API. When writing your client application, follow the data typing rules defined for your programming language and development environment. Your development tool handles the mapping of typed data in your programming language with these SOAP data types.

The primitive data types are:

-   specified in the World Wide Web Consortium’s publication *XML Schema Part 2: Data Types* at the following URL: [http://www.w3.org/TR/xmlschema-2/](http://www.w3.org/TR/xmlschema-2/).
-   enumerated in the SOAPType field of the Field type, which is described in the fields property of the DescribeSObjectResult.

Primitive types are used as a standardized way to define, send, receive, and interpret basic data types in the SOAP messages exchanged between client applications and the API. In addition, primitive data types are interpreted in a Salesforce-specific way, which is useful for display formatting and for numeric conversion (adding values of different currencies).

For example, Salesforce chooses to interpret a double value passed via SOAP as a double in a number of possible ways, depending on the field definition. If the field type for that data is currency, Salesforce handles the display of the data by prepending it with a currency symbol and inserting a decimal for precision. Similarly, if the field type is percent, Salesforce handles the display of the data by appending a percent sign (%). Regardless of the field type, however, the value is sent in the SOAP message as a double.

The API uses data types called field types that are defined in the WSDLs. For more information, see [Field Types](atlas.en-us.object_reference.meta/object_reference/field_types.htm "In addition to the primitive data types, the API defines the following data types for fields.").

## Related Topics

- Currency Field
        Type (atlas.en-us.object_reference.meta/object_reference/field_types.htm)
- Percent Field Type (atlas.en-us.object_reference.meta/object_reference/field_types.htm)
- Field
    Types (atlas.en-us.object_reference.meta/object_reference/field_types.htm)
