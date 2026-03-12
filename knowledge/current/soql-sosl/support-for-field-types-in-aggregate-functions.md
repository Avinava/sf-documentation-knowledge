---
title: "Support for Field Types in Aggregate Functions"
domain: soql-sosl
topic: support-for-field-types-in-aggregate-functions
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:19.633Z
estimatedTokens: 804
keywords: [Support, Aggregate, Functions, SOQL, queries, powerful, way, analyze, records, aren’t, relevant, base64, don’t, because, they]
---

# Support for Field Types in Aggregate Functions

> Using aggregate functions in SOQL queries is a powerful way to analyze records, but the
  functions aren’t relevant for all field types. For example, base64 fields don’t support aggregate
  functions because they wouldn’t generate any meaningful data.

# Support for Field Types in Aggregate Functions

Using aggregate functions in SOQL queries is a powerful way to analyze records, but the functions aren’t relevant for all field types. For example, base64 fields don’t support aggregate functions because they wouldn’t generate any meaningful data.

Aggregate functions are supported for several primitive data types and field types. The following table lists support by the aggregate functions for the [primitive data types](https://developer.salesforce.com/docs/atlas.en-us.260.0.api.meta/api/primitive_data_types.htm "HTML (New Window)").

| Data Type | AVG() | COUNT() | COUNT_DISTINCT() | MIN() | MAX() | SUM() |
| --- | --- | --- | --- | --- | --- | --- |
| base64 | No | No | No | No | No | No |
| boolean | No | No | No | No | No | No |
| byte | No | No | No | No | No | No |
| date | No | Yes | Yes | Yes | Yes | No |
| dateTime | No | Yes | Yes | Yes | Yes | No |
| double | Yes | Yes | Yes | Yes | Yes | Yes |
| int | Yes | Yes | Yes | Yes | Yes | Yes |
| string | No | Yes | Yes | Yes | Yes | No |
| time | No | No | No | No | No | No |

In addition to the primitive data types, the API uses an extended set of [field types](https://developer.salesforce.com/docs/atlas.en-us.260.0.api.meta/api/field_types.htm "HTML (New Window)") for object fields. The following table lists support by the aggregate functions for these field types.

| Data Type | AVG() | COUNT() | COUNT_DISTINCT() | MIN() | MAX() | SUM() |
| --- | --- | --- | --- | --- | --- | --- |
| address | No | No | No | No | No | No |
| anyType | No | No | No | No | No | No |
| calculated | Depends on data type* | Depends on data type* | Depends on data type* | Depends on data type* | Depends on data type* | Depends on data type* |
| combobox | No | Yes | Yes | Yes | Yes | No |
| currency** | Yes | Yes | Yes | Yes | Yes | Yes |
| DataCategoryGroupReference | No | Yes | Yes | Yes | Yes | No |
| email | No | Yes | Yes | Yes | Yes | No |
| encryptedstring | No | No | No | No | No | No |
| floatarray | No | No | No | No | No | No |
| location | No | No | No | No | No | No |
| ID | No | Yes | Yes | Yes | Yes | No |
| masterrecord | No | Yes | Yes | Yes | Yes | No |
| multipicklist | No | No | No | No | No | No |
| percent | Yes | Yes | Yes | Yes | Yes | Yes |
| phone | No | Yes | Yes | Yes | Yes | No |
| picklist | No | Yes | Yes | Yes | Yes | No |
| reference | No | Yes | Yes | Yes | Yes | No |
| textarea*** | No | Yes | Yes | Yes | Yes | No |
| textarray | No | No | No | No | No | No |
| url | No | Yes | Yes | Yes | Yes | No |

\* Calculated fields are custom fields defined by a formula, which is an algorithm that derives its value from other fields, expressions, or values. Therefore, support for aggregate functions depends on the type of the calculated field.

\*\* Aggregate function results on currency fields default to the system currency.

\*\*\* Text Area (Long) and Text Area (Rich) fields don't support aggregate functions.

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=soql_sosl)

#### Tip

Some object fields have a field type that doesn’t support grouping. You can't include fields with these field types in a GROUP BY clause.
