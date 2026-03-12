---
title: "Filter Expression Format"
domain: platform-events
topic: filter-expression-format
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:35:27.804Z
estimatedTokens: 996
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

Examples of a multiple-field expression:

```

```

Example of a multiple-field expression using parentheses and the AND and OR logical operators:

```

```

Spaces within each field expression are optional. For the entire filter expression, if you use parentheses around each field expression, spaces are optional between the field expression pairs and the logical operator. Otherwise, include a space between the logical operator and the field expressions.

## Supported Field Types

All field types supported for custom platform event fields are supported in filter expressions.

-   Checkbox
-   Date
-   Date/Time
-   Number
-   Text
-   Text Area (Long)

## Supported Comparison Operators

These comparison operators are supported in filter expressions.

-   \=
-   !=
-   \>
-   <
-   \>=
-   <=
-   LIKE
-   IN
-   NOT IN

## Considerations for the LIKE Operator

The LIKE operator is supported for Text fields. The text string value must be enclosed in single quotes. The LIKE operator can match partial text string values when used with the % and \_ wildcards. The % wildcard matches zero or more characters. The \_ wildcard matches exactly one character.

For example, this expression matches messages with City\_\_c values that start with 'San F', such as 'San Francisco' and 'San Fernando'. But it doesn’t match the city value of 'San Mateo'.

```

```

This expression matches messages with City\_\_c values that start with 'Bake' and end with any character, such as 'Baker'.

```

```

## Supported Logical Operators

These logical operators are supported in filter expressions.

-   AND
-   OR
-   NOT

## Considerations for the NOT Operator

Use the NOT operator to negate an expression. For example, this expression states that the city isn’t New York.

```

```

In this next expression, the NOT operator negates two conditions evaluated with the AND operator. The filter matches events that have the city set to a value other than New York or the Amount set to a value other than 100. If an event has both the city set to New York and the Amount set to 100, it doesn’t match the filter criteria and isn’t delivered.

```

```

If there’s more than one expression, including the expression with the NOT operator, parentheses around NOT and its expression are required. In this example, two field expressions are joined by the AND operator, and NOT is used only for the first expression. It must be enclosed within parentheses because there are two expressions. The entire filter expression states that the city isn’t New York and the Amount value is greater than 10.50.

```

```

This example also requires enclosing the NOT operator in parentheses. This filter expression matches events that have a delivery date greater than 2021-10-21T09:30:11 in the Pacific time zone and whose city isn’t New York or amount isn’t 100.

```

```

## Filter Expression Allocations

-   You can add up to 10 fields in a filter expression.
-   The filter expression’s maximum length is 131,072 characters.
-   A filter expression is part of a channel member. The maximum number of filter expressions you can add per channel depends on the number of channel members you can create.

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
City__c = 'San Francisco'
City__c LIKE 'San F%'
```

```
Delivery_Date__c > 2022-07-14T09:30:11-08:00
```

```
City__c = 'San Francisco' AND Amount__c > 22.34 AND Has_Shipped__c = true
City__c = 'San Francisco' OR City__c = 'New York'
```
