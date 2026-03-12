---
title: "BETWEEN Operator"
domain: bi-dev-guide-sql
topic: between-operator
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:06.987Z
estimatedTokens: 907
keywords: [Operator, check, whether, fall, range, accepts, numeric, date, data, aggregate, window, math, functions, TIMESTAMP, EXTRACT]
---

# BETWEEN Operator

> Use BETWEEN to check whether values fall within a
  given range. BETWEEN accepts numeric, string, and date data
  types, and can be used with aggregate, window, and math functions.

# BETWEEN Operator

Use BETWEEN to check whether values fall within a given range. BETWEEN accepts numeric, string, and date data types, and can be used with aggregate, window, and math functions.

BETWEEN takes this syntax.

```

```

## Numeric Example

This example filters results on flights whose prices are between $300 and $600.

```

```

| Dest | Origin | Price |
| --- | --- | --- |
| PHX | LAX | 300 |
| LAX | PHX | 400 |
| PHX | LAX | 400 |
| LAX | PHX | 500 |
| LAX | SFO | 550 |
| LAX | OAK | 560 |
| SFO | LAX | 600 |
| OAK | LAX | 600 |
| LAX | PHX | 600 |

## Aggregate and Window Functions Example

This example checks whether the sum of profits for each account is less than 5% of the total sum of profits for all accounts. It returns the account name, account ID, and IsLowPercent, a boolean value that is true if the sum of profits is less than 5%.

```

```

| Account ID | Account Name | isLowPercent |
| --- | --- | --- |
| 00137000003dT6qAAE | Alphenymp | true |
| 00137000003dT6rAAE | AboveRosa | true |
| 00137000003dT6sAAE | Acidyles | true |
| 00137000003dT6tAAE | Angelstage | true |
| 00137000003dT6uAAE | Animorror | true |
| 00137000003dT6vAAE | AnnouncerKing | true |
| 00137000003dT6wAAE | ApenguinInca | true |
| 00137000003dT6xAAE | AttractivePenguin | true |
| 00137000003dT6yAAE | BearDigestAir | true |
| 00137000003dT6zAAE | BertramWillow | true |

## Date Example with TIMESTAMP

This example returns ten CloseDate values that are between two TIMESTAMP values, 2014-12-31 and 2015-12-31.

```

```

| CloseDate |
| --- |
| 2014-12-31 16:00:00 |
| 2015-01-01 16:00:00 |
| 2015-01-30 16:00:00 |
| 2015-01-31 16:00:00 |
| 2015-02-28 16:00:00 |
| 2015-03-30 17:00:00 |
| 2015-03-31 17:00:00 |
| 2015-04-29 17:00:00 |
| 2015-04-30 17:00:00 |
| 2015-05-30 17:00:00 |

## Date Example with EXTRACT

This example uses SQL for CRM Analytics’s EXTRACT function to access the MONTH values from the CloseDate field and return dates between April (4) and July (7).

```

```

| CloseDate |
| --- |
| 2015-04-29 17:00:00 |
| 2015-04-30 17:00:00 |
| 2015-05-30 17:00:00 |
| 2015-05-31 17:00:00 |
| 2015-07-31 17:00:00 |

## Asymmetric and Symmetric Example

By default, the BETWEEN statement evaluates a value that falls between the lower and upper bounds in order of least to greatest as true. If the lower and upper bound values are reversed, BETWEEN evaluates the statement as false. To specify this behavior, use the ASYMMETRIC operator.

Let’s go back to the numeric example.

Here, the range is specified as ASYMMETRIC BETWEEN 300 and 600. The statement evaluates to true.

```

```

When the range is specified as ASYMMETRIC BETWEEN 600 and 300, the statement evaluates to false.

```

```

By using the SYMMETRIC operator, the order of the upper and lower bounds of your BETWEEN statement remain true if reversed. The order is irrelevant.

```

```

By using SYMMETRIC, the BETWEEN statement evaluates to true.

Here’s the date example using EXTRACT and the SYMMETRIC operator. By including SYMMETRIC, the query returns the same results, even though the months are filtered BETWEEN 7 AND 4.

```

```

#### See Also

-   [Access Parts of a Date](atlas.en-us.bi_dev_guide_sql.meta/bi_dev_guide_sql/bi_sql_date_access.htm "Use the EXTRACT() function to access parts of a date. You can use EXTRACT() in projections, filtering, grouping and ordering.")

-   [WHERE Clause](atlas.en-us.bi_dev_guide_sql.meta/bi_dev_guide_sql/bi_sql_where.htm "By default, a SQL query retrieves every row in your dataset. Use the optional WHERE clause to restrict your query results to a conditional expression.")

## Code Examples

```
<expr> BETWEEN (SYMMETRIC | ASYMMETRIC) <lower_bound> AND <upper_bound>
```

```
SELECT price, origin, dest
FROM FlightsData
WHERE price BETWEEN 300 and 600
ORDER BY price ASC
```

```
SELECT Account_ID, Account_Name, SUM(Profit) BETWEEN 0 AND 5 * SUM(SUM(Profit)) OVER (ROWS BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING) / 100 AS IsLowPercent
FROM "Opportunity"
GROUP BY Account_ID, Account_Name
LIMIT 10;
```

```
SELECT CloseDate
FROM "Opportunity"
WHERE CloseDate BETWEEN TIMESTAMP '2014-12-31 00:00:00' AND TIMESTAMP '2015-12-31 00:00:00'
LIMIT 10;
```

```
SELECT CloseDate
FROM "Opportunity"
WHERE EXTRACT(MONTH FROM CloseDate) BETWEEN 4 AND 7
LIMIT 10;
```

## Related Topics

- Access Parts of a Date (atlas.en-us.bi_dev_guide_sql.meta/bi_dev_guide_sql/bi_sql_date_access.htm)
- WHERE Clause (atlas.en-us.bi_dev_guide_sql.meta/bi_dev_guide_sql/bi_sql_where.htm)
