---
title: "Valid CSV Record Rows"
domain: api-asynch
topic: valid-csv-record-rows
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:59.428Z
estimatedTokens: 339
keywords: [CSV, Record, Rows, Bulk, API, uses, strict, optimize, processing, large, data]
---

# Valid CSV Record Rows

> The Bulk API uses a strict format for field values to optimize processing for large sets
  of data.

# Valid CSV Record Rows

The Bulk API uses a strict format for field values to optimize processing for large sets of data.

Note the following when generating CSV files that contain Salesforce records:

-   The delimiter for field values in a row must be a comma.
-   If a field value contains a comma, a new line, or a double quote, the field value must be contained within double quotes: for example, "Director of Operations, Western Region".
-   If a field value contains a double quote, the double quote must be escaped by preceding it with another double quote: for example, "This is the ""gold"" standard".
-   Field values aren't trimmed. A space before or after a delimiting comma is included in the field value. A space before or after a double quote generates an error for the row. For example, John,Smith is valid; John, Smith is valid, but the second value is " Smith"; ."John", "Smith" is not valid.
-   Empty field values are ignored when you update records. To set a field value to null, use a field value of #N/A.
-   Fields with a double data type can include fractional values. Values can be stored in scientific notation if the number is large enough (or, for negative numbers, small enough), as indicated by the[W3C XML Schema Part 2: Datatypes Second Edition specification](http://www.w3.org/TR/xmlschema-2/#double "HTML (New Window)")
