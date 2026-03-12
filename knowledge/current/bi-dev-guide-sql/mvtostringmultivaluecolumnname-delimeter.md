---
title: "mv_to_string(multivalue_column_name,
    [delimeter])"
domain: bi-dev-guide-sql
topic: mvtostringmultivaluecolumnname-delimeter
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:07.278Z
estimatedTokens: 693
keywords: [mv_to_string, multivalue_column_name, delimeter, Converts, multivalue, _to, _string, _column, _name, Simple, Custom, Grouping]
---

# mv_to_string(multivalue_column_name,
    [delimeter])

> Converts multivalue fields to string fields.

# mv\_to\_string(multivalue\_column\_name, \[delimeter\])

Converts multivalue fields to string fields.

MV\_TO\_STRING() takes this syntax.

MV\_TO\_STRING(multivalue\_column\_name, delimeter)

multivalue\_column\_name

Name of the multivalue field to be converted to a string.

delimiter

Optional. The characters used to delimit values in the converted string. Maximum length is 2 characters.

Returns an alphabetically sorted, delimited string representation of a multivalue field. The default delimiter is a comma followed by a space (, ).

You can’t use MV\_TO\_STRING() in a WHERE or GROUP BY clause. Use it in the SELECT statement only. If you run MV\_TO\_STRING() on single-value dimensions or on unindexed multivalue dimensions, the function returns a single value.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=bi_dev_guide_sql)

#### Note

To enable multivalue fields, you must select the **Enable indexing of multivalue fields** in CRM Analytics preference in Setup. If you run MV\_TO\_STRING() without the preference selected, the function returns the first value in the first field only.

1.  From Settings, in the Quick Find box, enter Analytics, and then select **Settings** from the list of Analytics options.
2.  In Settings, select **Enable indexing of multivalue fields in CRM Analytics**.

![Image of checkbox to enable mv_to_string function in Settings](/docs/resources/img/en-us/260.0?doc_id=images%2Fbi_sql_enable_mv.png&folder=bi_dev_guide_sql)

## Simple Example

This query converts the multivalue field flight\_attendants to a string and returns values that contain the name “maria.”

```

```

| Flight_Attendants |
| --- |
| kate, maria, mark, martin, sara |
| maria, sarah |
| kate, maria, mark, martin, sara |
| maria, sarah |
| kate, maria, mark, martin, sara |
| maria, sarah |

## Example with Custom Delimeter

This query returns all values of the flight\_classes field and delimits them with “;;”.

```

```

| Flight_Classes |
| --- |
| business;;economy |
| business;;economy;;first |
| business;;economy |
| business;;economy |
| business;;economy |
| business;;economy;;first |
| business;;economy |
| business;;economy |
| business;;economy |
| business;;economy;;first |

## Example with Grouping

The custom delimeter example returns two result values: business;;economy and business;;economy;;first. Let's group by the flight\_classes field and display the counts for each of these values. Since MV\_TO\_STRING() throws an error if included in a GROUP BY statement, we can nest the SELECT statement containing MV\_TO\_STRING() as a subquery and group the results in the outer query.

```

```

| Flight_Classes | cnt |
| --- | --- |
| business;;economy | 18 |
| business;;economy;;first | 6 |

## Code Examples

```
SELECT MV_TO_STRING(flight_attendants) as Flight_Attendants
FROM "FlightsWithNullDim"
WHERE "flight_attendants" IN ('maria')
```

```
SELECT MV_TO_STRING(flight_classes, ';;') as Flight_Classes
FROM "FlightsWithNullDim"
LIMIT 10;
```

```
SELECT Flight_Classes, count() as cnt
FROM (
    SELECT MV_TO_STRING(flight_classes, ';;') as Flight_Classes
    FROM "FlightsWithNullDim"
)
GROUP BY Flight_Classes;
```
