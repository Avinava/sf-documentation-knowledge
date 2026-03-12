---
title: "FILL"
domain: bi-dev-guide-sql
topic: fill
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:07.110Z
estimatedTokens: 569
keywords: [FILL, function, any, gaps, date, specifying, check, creates, rows, contain, missing, month, day, week, quarter]
---

# FILL

> Use the FILL() table function to fill in any gaps
  in date fields. By specifying the date fields to check, FILL() creates rows that contain the missing month, day, week, quarter, or year and
  null data. Use it with TIMESERIES() to forecast future
  results when there are gaps in input data.

# FILL

Use the FILL() table function to fill in any gaps in date fields. By specifying the date fields to check, FILL() creates rows that contain the missing month, day, week, quarter, or year and null data. Use it with TIMESERIES() to forecast future results when there are gaps in input data.

FILL() takes the following syntax.

```

```

| Name | Description |
| --- | --- |
| INPUT | Required. A SELECT statement that includes date information and is the input to the FILL() function. |
| DATE_COLS | Required.DATE_FIELDS—The array of date fields in which to check for gaps.The DATE_COLUMN_TYPE string accepts these values.'YEAR_FIELD', 'MONTH_FIELD', 'Y-M''YEAR_FIELD', 'QUARTER_FIELD', 'Y-Q''YEAR_FIELD', 'Y''YEAR_FIELD', 'WEEK_FIELD', 'Y-W''YEAR_FIELD', 'MONTH_FIELD', 'DAY_FIELD', 'Y-M-D' |
| PARTITION | Optional. A field used to split query results into smaller partitions. The FILL() function resets when the field value changes. After each group of rows is completed for a given partition, FILL() runs on the next partition. |

## Example

This example uses FILL() to add missing quarter and year values to tourist data.

```

```

The input SELECT statement returns the year, quarter, and number of tourists for each quarter. Based on the results from the first three years represented in the dataset, the only date data available is for the first quarter.

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=bi_dev_guide_sql)

#### Tip

Another way to project all columns from the INPUT query is by using SELECT \* FROM FILL(...).

These are the results from executing only the INPUT SELECT query.

| year | quarter | tourists |
| --- | --- | --- |
| 2001 | 1 | 4127 |
| 2002 | 1 | 4173 |
| 2003 | 1 | 4621 |

FILL() specifies in the DATE\_COLS array to check for gaps in year and quarter fields in the input data. To have a complete dataset of years and quarters, FILL() adds the 2nd, 3rd, and 4th quarters for each year and a null value for the number of tourists.

| year | quarter | tourists |
| --- | --- | --- |
| 2001 | 1 | 4127 |
| 2001 | 2 | - |
| 2001 | 3 | - |
| 2001 | 4 | - |
| 2002 | 1 | 4173 |
| 2002 | 2 | - |
| 2002 | 3 | - |
| 2002 | 4 | - |
| 2003 | 1 | 4621 |
| 2003 | 2 | - |
| 2003 | 3 | - |
| 2003 | 4 | - |

## Code Examples

```
SELECT <PROJECTION_LIST>|* FROM FILL(
    INPUT=>(SELECT STATEMENT),
    DATE_COLS=>ARRAY[<DATE_FIELDS>, 'DATE_COLUMN_TYPE'],
    [PARTITION=>'FIELD_NAME']
)
```

```
SELECT "year", "quarter", tourists FROM FILL(
    INPUT=>(SELECT EXTRACT(YEAR FROM "date") as "year", EXTRACT(QUARTER FROM "date") as "quarter",
tourists FROM "TouristsData"),
    DATE_COLS=>ARRAY['year', 'quarter', 'Y-Q']);
```
