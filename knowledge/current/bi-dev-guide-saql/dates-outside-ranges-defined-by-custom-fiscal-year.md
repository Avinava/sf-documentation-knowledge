---
title: "Dates Outside Ranges Defined by Custom Fiscal Year"
domain: bi-dev-guide-saql
topic: dates-outside-ranges-defined-by-custom-fiscal-year
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:06.265Z
estimatedTokens: 494
keywords: [Dates, Outside, Ranges, Defined, Custom, Fiscal, Year, query, includes, date, falls, range, inherited, SAQL, data]
---

# Dates Outside Ranges Defined by Custom Fiscal Year

> If your query includes a date that falls outside of a range defined
         by an inherited fiscal year, SAQL does not return data for that date.

# Dates Outside Ranges Defined by Custom Fiscal Year

If your query includes a date that falls outside of a range defined by an inherited fiscal year, SAQL does not return data for that date.

If a date falls outside of a range defined by an inherited custom fiscal year from Salesforce, then SAQL returns null for that date. When grouping by a date field that includes dates outside a range defined by an inherited custom fiscal year, no group is returned for undefined dates. If you group data based on non-fiscal periods, dates that aren’t included in a custom fiscal year return data as expected.

## Example

If your fiscal year ends in March 2021, and a date field, CreatedDate, is in April 2021, grouping by CreatedDate\_Month\_Fiscal returns null or no group for April 2021. Grouping by CreatedDate\_Month returns data as expected.

Consider this example dataset.

| Opportunity Name | Created Date | Amount |
| --- | --- | --- |
| Widgets | 2/1/2017 | 100 |
| Widgets | 2/1/2018 | 100 |
| Widgets | 2/1/2019 | 100 |
| Widgets | 2/1/2020 | 100 |
| Widgets | 2/1/2021 | 100 |
| Widgets | 2/1/2022 | 100 |
| Widgets | 2/1/2023 | 100 |

In Salesforce, you have custom fiscal years defined as January 1 to December 31 for each year from 2018 through 2022. Inherit them in Analytics by using the **Start Date** setting.

When running a query like this:

```

```

SAQL returns these results:

| Created Date | Fiscal Year |
| --- | --- |
| 2/1/2017 | - |
| 2/1/2018 | 2018 |
| 2/1/2019 | 2019 |
| 2/1/2020 | 2020 |
| 2/1/2021 | 2021 |
| 2/1/2022 | 2022 |
| 2/1/2023 | - |

Because a custom fiscal year definition doesn’t include 2/1/2017 or 2/1/2023, SAQL returns null.

Now, let’s group the dataset.

```

```

SAQL returns these results:

| Fiscal Year | Count |
| --- | --- |
| 2018 | 1 |
| 2019 | 1 |
| 2020 | 1 |
| 2021 | 1 |
| 2022 | 1 |

Since the custom fiscal year definition doesn’t include 2/1/2017 or 2/1/2023, the query excludes these dates from the results.

## Code Examples

```
q = load "opportunities";
q = foreach q generate 'CreatedDate' as 'Created Date', CreatedDate_Year_Fiscal as 'Fiscal Year';
q = limit q 2000;
```

```
q = load "opportunities";
q = group q by 'CreatedDate_Year_Fiscal';
q = foreach q generate 'CreatedDate_Year_Fiscal' as 'Fiscal Year', count() as 'Count';
q = order q by 'CreatedDate_Year_Fiscal';
q = limit q 2000;
```
