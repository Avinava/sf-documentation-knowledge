---
title: "ORDER BY  Clause"
domain: soql-sosl
topic: order-by-clause
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:19.901Z
estimatedTokens: 331
keywords: [ORDER, Clause, specify, search, results, SOSL, query, display, empty, records, beginning, end, Examples]
---

# ORDER BY  Clause

> You can specify the order in which search results are returned from a SOSL query using
  the ORDER BY clause. You can also use the clause to display
  empty records at the beginning or end of the results.

# ORDER BY Clause

You can specify the order in which search results are returned from a SOSL query using the ORDER BY clause. You can also use the clause to display empty records at the beginning or end of the results.

Use one or more ORDER BY clauses in a SOSL statement.

## Syntax

```

```

| Syntax | Description |
| --- | --- |
| ASC or DESC | Orders the results in ascending or descending order. The default is ascending. You can have more than one ORDER BY clause. |
| NULLS [first \| last] | Orders null records at the beginning (NULLS FIRST) or end (NULLS LAST) of the results. By default, null values are sorted first. |

## Examples

This example orders the account names in ascending ID order.

```

```

This example, which shows multiple ORDER BY clauses, orders contacts in ascending order by name and by account description.

```

```

This search returns account records in descending alphabetical order by name, with accounts that have null names appearing last.

```

```

This search returns custom objects that contain "San Francisco" in any field and have geolocation or address fields with locations that are within 500 miles of the latitude and longitude coordinates 37 and 122, respectively. The results are sorted in descending order by the locations’ distance from the coordinates.

```

```

## Code Examples

```
ORDER BY fieldname [ASC | DESC] [NULLS [first | last]]
```

```
FIND {MyName} RETURNING Account(Name, Id ORDER BY Id)
```

```
FIND {MyContactName} RETURNING Contact(Name, Id ORDER BY Name), Account(Description, Id ORDER BY Description)
```

```
FIND {MyAccountName} IN NAME FIELDS RETURNING Account(Name, Id ORDER BY Name DESC NULLS last)
```

```
FIND {San Francisco} RETURNING My_Custom_Object__c (Name, Id WHERE DISTANCE(My_Location_Field__c,GEOLOCATION(37,122),'mi') < 500 ORDER BY DISTANCE(My_Location_Field__c,GEOLOCATION(37,122),'mi') DESC)
```
