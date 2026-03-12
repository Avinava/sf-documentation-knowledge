---
title: "WHERE"
domain: soql-sosl
topic: where
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:19.655Z
estimatedTokens: 784
keywords: [condition, expression, clause, SOQL, query, includes, expressions, specify, multiple, logical, operators, conditionExpression, fieldExpression, SOSL, retrieves, rows, visible, user, including, archived]
---

# WHERE

> By default, a SOSL query on an object retrieves all rows that are visible to the
		user, including archived rows. To limit the search, you can filter the search result by
		specific field values.

# WHERE

By default, a SOSL query on an object retrieves all rows that are visible to the user, including archived rows. To limit the search, you can filter the search result by specific field values.

## conditionExpression

The *conditionExpression* of the WHERE clause uses the following syntax:

```

```

You can add multiple field expressions to a condition expression by using logical operators.

The condition expressions in SOSL FIND statements appear in bold in these examples:

-   FIND {test} RETURNING Account (id WHERE **createddate = THIS\_FISCAL\_QUARTER**)
-   FIND {test} RETURNING Account (id WHERE **cf\_\_c includes('AAA')**)

You can use parentheses to define the order in which fieldExpressions are evaluated. You must specify parentheses when nesting operators. However, multiple operators of the same type don’t need to be nested. In the following example, the expression is true if fieldExpression1 is true and either fieldExpression2 or fieldExpression3 are true.

```

```

However, the following expression is true if either fieldExpression3 is true or both fieldExpression1 and fieldExpression2 are true.

```

```

## fieldExpression

A fieldExpression uses the following syntax:

```

```

where:

| Syntax | Description |
| --- | --- |
| fieldName | The name of a field for the specified object. Use of single or double quotes around the name result in an error. You must have at least read-level permissions to the field. It can be any field except a long text area field, encrypted data field, or base64-encoded field. The name doesn’t need to be a field in the fieldList. |
| comparisonOperator | Operators that compare values, such as =,<=, IN, and LIKE. Operators are case insensitive for most fields, but case sensitive for case-sensitive fields. |
| value | A value used to compare with the value in the fieldName. Supply a value whose data type matches the field type of the specified field. The value must be a valid value, not other field names or calculations. If quotes are required, use single quotes. Double quotes result in an error. Quotes are unnecessary for dates and numbers.The date format is the same as the one used for SOQL. |

## Comparison Operators

The following table lists the *comparisonOperator* values that are used in fieldExpression syntax. Comparisons on strings are case-insensitive.

| Operator | Name | Description |
| --- | --- | --- |
| = | Equals | Expression is true if the value in the fieldName equals the value in the expression. |
| != | Not equals | Expression is true if the value in the fieldName doesn’t equal the specified value. |
| < | Less than | Expression is true if the value in the fieldName is less than the specified value. |
| <= | Less or equal | Expression is true if the value in the fieldName is less than or equal to the specified value. |
| > | Greater than | Expression is true if the value in the fieldName is greater than the specified value. |
| >= | Greater or equal | Expression is true if the value in the fieldName is greater than or equal to the specified value. |
| LIKE | Like | Expression is true if the value in the fieldName matches the characters of the text string in the specified value. The text string in the specified value must be enclosed in single quotes.The LIKE operator is supported for string fields only. The operator provides a mechanism for matching partial text strings and includes support for:.The % and _ wildcards.The % wildcard matches zero or more characters.The _ wildcard matches exactly one character.The escaping of special characters % or _.NoteDon’t use the backslash (\) character in a search except to escape a special character. See Quoted String Escape Sequences.This example query matches Appleton, Apple, and Appl, but not Bappl.FIND {test} IN ALL FIELDS RETURNING Contact(AccountId, FirstName, LastName WHERE LastName LIKE 'appl%') |
| IN | IN | If the value equals any one of the values in a WHERE clause. The string values for IN must be in parentheses and surrounded by single quotes.You can query values in a field where another field on the same object has a specified set of values, using IN. For example:FIND {test} IN ALL FIELDS RETURNING Account(Name WHERE BillingState IN ('California', 'New York'))You can also use IN and NOT IN for semi-joins and anti-joins when querying on ID (primary key) or reference (foreign key) fields. |
| NOT IN | NOT IN | If the value doesn’t equal any of the values in a WHERE clause. The string values for NOT IN must be in parentheses and surrounded by single quotes. For example:FIND {test} IN ALL FIELDS RETURNING Account(Name WHERE BillingState NOT IN ('California', 'New York'))NoteThe logical operator NOT is unrelated to this comparison operator. |
| INCLUDES EXCLUDES |  | Applies only to multi-select picklists. See Query Multi-Select Picklists. |

## Logical Operators

The following table lists the logical operator values that are used in fieldExpression syntax:

| Operator | Syntax | Description |
| --- | --- | --- |
| AND | fieldExpressionX AND fieldExpressionY | true if both fieldExpressionX and fieldExpressionY are true. |
| OR | fieldExpressionX OR fieldExpressionY | true if either fieldExpressionX or fieldExpressionY is true.In a WHERE clause that uses OR, records are returned even if the foreign key value in a record is null.FIND {test} IN ALL FIELDS RETURNING Contact(Id WHERE LastName = 'Young' OR Account.Name = 'Quarry') |
| NOT | not fieldExpressionX | true if fieldExpressionX false.There’s also a comparison operator NOT IN, which is different from this logical operator.FIND {test} IN ALL FIELDS RETURNING Account(Name WHERE AnnualRevenue > 0 AND (NOT Type = 'Prospect')) |

## Quoted String Escape Sequences

You can use the following escape sequences with SOSL:

| Sequence | Meaning |
| --- | --- |
| or \N | New line |
| \r or \R | Carriage return |
| \t or \T | Tab |
| \b or \B | Bell |
| \f or \F | Form feed |
| " | One double-quote character |
| \' | One single-quote character |
| \\ | Backslash |
| LIKE expression only: \_ | Matches a single underscore character ( _ ) |
| LIKE expression only:\% | Matches a single percent sign character ( % ) |
| \uXXXX | A Unicode character with XXXX as the code (for example, \u00e9 represents the é character) |

If you use a backslash character in any other context, an error occurs.

## Example WHERE Clauses

| Example(s) |
| --- |
| FIND {test}     RETURNING Account (id WHERE createddate = THIS_FISCAL_QUARTER) |
| FIND {test}     RETURNING Account (id WHERE cf__c includes('AAA')) |
| FIND {test}     RETURNING Account (id), User(Field1,Field2 WHERE Field1 = 'test' order by id ASC, Name DESC) |
| FIND {test} IN ALL FIELDS     RETURNING Contact(Salutation, FirstName, LastName, AccountId WHERE Name = 'test'),         User(FirstName, LastName),         Account(id WHERE BillingState IN ('California', 'New York')) |
| FIND {test}     RETURNING Account (id WHERE (Name = 'New Account')         or (Id = '001z00000008Vq7'         and Name = 'Account Insert Test')         or (NumberOfEmployees < 100 or NumberOfEmployees = null)         ORDER BY NumberOfEmployees) |
| To search for a Salesforce Knowledge article by ID:FIND {tourism}     RETURNING KnowledgeArticleVersion (Id, Title WHERE id = 'ka0D0000000025eIAA') |
| To search for multiple Salesforce Knowledge articles by ID:FIND {tourism}     RETURNING KnowledgeArticleVersion         (Id, Title WHERE id IN ('ka0D0000000025eIAA', 'ka0D000000002HCIAY')) |
| To search for "San Francisco" in all fields of all My_Custom_Object__c objects that have a geolocation or address location within 500 miles of the latitude and longitude coordinates 37 and 122, respectively:FIND {San Francisco}     RETURNING My_Custom_Object__c (Id          WHERE DISTANCE(My_Location_Field__c,GEOLOCATION(37,122),'mi') < 100) |

#### See Also

-   [*SOQL and SOSL reference*: Date Formats and Date Literals in WHERE](atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_select_dateformats.htm "You can specify date values or date literals in WHERE clauses to filter SOQL query results. Dates represent a specific day or time, while date literals represent a relative range of time, such as last month, this week, or next year.")

## Code Examples

```
WHERE conditionExpression
```

```
fieldExpression [logicalOperator fieldExpression2][...]
```

```
WHERE BooleanField = TRUE 

WHERE BooleanField = FALSE
```

```
fieldName comparisonOperator value
```

```
fieldExpression1 AND (fieldExpression2 OR fieldExpression3)
```

## Related Topics

- Date Functions (atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_select_date_functions.htm)
- Quoted String Escape
										Sequences (atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_select_quotedstringescapes.htm)
- Query Multi-Select
									Picklists (atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_querying_multiselect_picklists.htm)
- SOQL and SOSL reference: Date Formats and Date Literals in WHERE (atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_select_dateformats.htm)
