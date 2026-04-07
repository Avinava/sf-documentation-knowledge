---
title: "SimpleOperators"
domain: mc-apis
topic: simpleoperators
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:40:20.312Z
estimatedTokens: 725
keywords: [SimpleOperators, operators, filtering, Filter]
---

> The SimpleOperators object contains operators to use when filtering data.

# SimpleOperators

The SimpleOperators object contains operators to use when filtering data.

## Properties

| Name | Data Type | Description |
| --- | --- | --- |
| beginsWith | Enumeration | Searches for values that begin with the specified string. |
| between | Enumeration | Matches values that occur between the two specified values. |
| contains | Enumeration | Matches values that contain the specified value. |
| endsWith | Enumeration | Matches values that end with the specified value. |
| equals | Enumeration | Searches for values that are equal to a given value. |
| existsInString | Enumeration | Matches values that contain specified value within a string. |
| existsInStringAsAWord | Enumeration | Searches for values that exist within a string as a word. |
| greaterThan | Enumeration | Specifies that one numeric value is greater than another. |
| greaterThanAnniversary | Enumeration | Specifies a date value occurs after a given anniversary date. |
| greaterThanOrEqual | Enumeration | Searches for values greater than or equal to a specified value. |
| IN | Enumeration | Searches for values in the specified list. You can include multiple IN values in a filter part. |
| isAnniversary | Enumeration | Searches for a date value that exists as an anniversary of an event. |
| isNotAnniversary | Enumeration | Searches for values that are not the anniversary of a given data value. |
| isNotNull | Enumeration | Searches for a value that is not null. |
| isNull | Enumeration | Searches for a null value. |
| lessThan | Enumeration | Searches for a value less than a specified value. |
| lessThanAnniversary | Enumeration | Searches for date values that occur before a given anniversary date. |
| lessThanOrEqual | Enumeration | Searches for a value less than or equal to a given value. |
| like | Enumeration | Specifies a string of characters to find in a larger string. This property automatically appends percent signs to the beginning and end of the Like value. |
| notContains | Enumeration | Searches for a value that does not contain a specific value. |
| notEquals | Enumeration | Searches for a value that does not equal a specified value. |
| notExistsInString | Enumeration | Searches for values that don't contain a specific value within a string. |

## Filter Operators

Use these operators when building filters for most objects.

-   equals
-   notEquals
-   greaterThan
-   lessThan
-   isNull
-   isNotNull
-   greaterThanOrEqual
-   lessThanOrEqual
-   between
-   IN
-   like

The following operators work only for the DataFilter property:

-   existsInString
-   existsInStringAsAWord
-   notExistsInString
-   beginsWith
-   endsWith
-   contains
-   notContains
-   isAnniversary
-   isNotAnniversary
-   greaterThanAnniversary
-   lessThanAnniversary

The IN property evaluates to **True** if the value of the specified property is in the specified list.
