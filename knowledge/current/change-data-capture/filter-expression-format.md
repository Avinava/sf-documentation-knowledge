---
title: "Filter Expression Format"
domain: change-data-capture
topic: filter-expression-format
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:34:09.582Z
estimatedTokens: 1444
keywords: [Filter, Expression, SOQL, supports, subset, operators, contain, expressions, joined, logical, operator, Comparison, Considerations, Allocations]
---

# Filter Expression Format

> The filter expression format is based on SOQL and supports a subset of SOQL operators
  and field types. The filter expression can contain one or more field expressions, joined by a
  logical operator.

# Filter Expression Format

The filter expression format is based on SOQL and supports a subset of SOQL operators and field types. The filter expression can contain one or more field expressions, joined by a logical operator.

Single-field expression:

```

```

Example of multiple-field expressions joined by logical operators:

```

```

Text field values are included within single quotes. Examples of a single-field expression filtering on a Text field:

```

```

Example of a single-field expression filtering on a Date field:

```

```

Example of a single-field expression filtering on a Time field (the UTC time zone designator Z is required):

```

```

Example of a single-field expression filtering on a ChangeEventHeader field:

```

```

Examples of a multiple-field expression:

```

```

Example of a multiple-field expression using parentheses and the AND and OR logical operators:

```

```

## Supported Field Types

All field types supported for enriched fields are supported in filter expressions.

-   Address
-   Auto Number
-   Checkbox
-   Currency
-   Date, Date/Time, Time
-   Email
-   External Lookup Relationship
-   Geolocation
-   Hierarchical Relationship on User
-   Lookup Relationship
-   Master-Detail Relationship
-   Name
-   Number
-   Percent
-   Phone (and Fax)
-   Picklist
-   Picklist (Multi-select)
-   Roll-Up Summary
-   Text
-   TextArea
-   URL

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=change_data_capture)

#### Note

-   Only the TextArea field type is supported, and not TextArea (Long), TextArea (Rich), or TextArea (Encrypted).
-   For Picklist (Multi-select) fields, the selected picklist values are in a delimited string. You can use any of the supported comparison operators, but not INCLUDES or EXCLUDES because they aren’t supported.
-   Formula fields aren’t supported in filter expressions because they aren’t supported for change events.

Standard and custom compound fields are supported in filter expressions when you specify their component fields in the filter expression but not the compound field itself. This table contains compound fields and examples of component fields that you can use in a filter expression.

| Compound field | Examples of component fields to use in the filter expression |
| --- | --- |
| Name | Name component fields include the FirstName and LastName of a contact, lead, or a person account:Name.FirstName = 'John'  Name.LastName = 'Smith'If you have person accounts enabled in Salesforce but reference a business account, or if you don’t have person accounts enabled, specify the account Name field with a text value:Name = 'John Smith' |
| Address | BillingAddress.City = 'San Francisco'For more information, see Address Compound Fields in the Object Reference for Salesforce and Lightning Platform. |
| Geolocation | My_Location__c.Latitude > 40For more information, see Geolocation Compound Field in the Object Reference for Salesforce and Lightning Platform. |

## Supported Comparison Operators

These comparison operators are supported in filter expressions.

-   \=
-   !=
-   \>
-   <
-   \>=
-   <=
-   LIKE

## Considerations for the LIKE Operator

The LIKE operator is supported for Text fields. The text string value must be enclosed in single quotes. The LIKE operator can match partial text string values when used with the % and \_ wildcards. The % wildcard matches zero or more characters. The \_ wildcard matches exactly one character.

For example, this expression matches messages with Industry values that start with 'A', such as 'Agriculture' and 'Apparel'. But it doesn’t match Industry values that don’t start with 'A', such as 'Education'.

```

```

This expression matches messages with Industry values that start with 'Agricultur' and end with any single character. For example, 'Agriculture' is a match.

```

```

## Supported Logical Operators

These logical operators are supported in filter expressions.

-   AND
-   OR
-   NOT

## Considerations for the NOT Operator

Use the NOT operator to negate an expression. For example, this expression states that the industry isn’t Banking.

```

```

In this next expression, the NOT operator negates two conditions evaluated with the AND operator. The filter matches events that have the industry set to a value other than Banking or NumberOfEmployees is less than or equal to 1,000. If an event has both the industry set to Banking and the NumberOfEmployees is greater than 1,000, it doesn’t match the filter criteria and isn’t delivered.

```

```

If there’s more than one expression, including the expression with the NOT operator, parentheses around NOT and its expression are required. In this example, two field expressions are joined by the AND operator. NOT is used only for the first expression. It must be enclosed within parentheses because there are two expressions. The entire filter expression states that the industry is not Banking and NumberOfEmployees is greater than 1,000.

```

```

This example also requires enclosing the NOT operator in parentheses. This filter expression matches events that have a last viewed date greater than 2021-10-21T09:30:11 in the Pacific time zone and the industry is not Banking or NumberOfEmployees is less than or equal to 1,000.

```

```

## Filter Expression Allocations

-   You can add up to 10 fields in a filter expression.
-   The filter expression’s maximum length is 131,072 characters.
-   Each channel member can contain one filter expression.

#### See Also

-   [*Salesforce Object Query Language (SOQL) Reference*](https://developer.salesforce.com/docs/atlas.en-us.260.0.soql_sosl.meta/soql_sosl/sforce_api_calls_soql.htm "Salesforce Object Query Language (SOQL) Reference - HTML (New Window)")

## Code Examples

```
<FieldName> <Comparison Operator> <Value>
```

```
<FieldName> <Comparison Operator> <Value> AND (<FieldName> <Comparison Operator> <Value>
  OR <FieldName> <Comparison Operator> <Value>) ...
```

```
Industry = 'Agriculture'
Industry LIKE 'A%'
```

```
LastViewedDate > 2021-11-03T09:30:11-08:00
```

```
OpenTime__c >= 14:30:00Z
```
