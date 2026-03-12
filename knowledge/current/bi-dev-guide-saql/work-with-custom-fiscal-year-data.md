---
title: "Work with Custom Fiscal Year Data"
domain: bi-dev-guide-saql
topic: work-with-custom-fiscal-year-data
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:06.253Z
estimatedTokens: 513
keywords: [Work, Custom, Fiscal, Year, Data, inheriting, years, SAQL, queries, support]
---

# Work with Custom Fiscal Year Data

> After inheriting custom fiscal years, SAQL queries support custom
         fiscal year data.

# Work with Custom Fiscal Year Data

After inheriting custom fiscal years, SAQL queries support custom fiscal year data.

Analytics supports custom fiscal year data by generating new fields that describe the custom fiscal year. Each of these new fields is named with the \_Fiscal suffix. By working with these fields, SAQL supports custom fiscal year data.

Make sure that a dataset’s dataflow has run after inheriting custom fiscal years and before writing SAQL based on custom fiscal year data.

Each of the queries in the examples is based off the following dataset. These examples presume that Analytics inherited custom fiscal years that begin on February 1 and end on January 31. Custom fiscal years are defined from 2017 until 2022.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=bi_dev_guide_saql)

#### Note

You can’t use custom fiscal year data with the fill or timeseries statements.

| Opportunity Name | Created Date | Amount |
| --- | --- | --- |
| Widgets | 2/15/2017 | 100 |
| Widgets | 1/25/2018 | 200 |
| Widgets | 3/30/2018 | 100 |
| Widgets | 3/30/2019 | 100 |
| Widgets | 3/30/2020 | 100 |
| Widgets | 3/30/2021 | 100 |
| Widgets | 3/30/2022 | 100 |

-   **[Group by a Custom Fiscal Year](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_cfy_group.htm)**
    Here’s how to group by a custom fiscal year.
-   **[Filter by a Custom Fiscal Year](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_cfy_filter.htm)**
    Here’s how to filter by a custom fiscal year date.
-   **[Dates Outside Ranges Defined by Custom Fiscal Year](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_cfy_ranges.htm)**
    If your query includes a date that falls outside of a range defined by an inherited fiscal year, SAQL does not return data for that date.

#### See Also

-   [https://help.salesforce.com/s/articleView?id=bi\_integrate\_date\_formats\_and\_fiscal\_dates.htm](https://help.salesforce.com/s/articleView?id=bi_integrate_date_formats_and_fiscal_dates.htm&language=en_US)

## Related Topics

- Group by a Custom Fiscal Year (atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_cfy_group.htm)
- Filter by a Custom Fiscal Year (atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_cfy_filter.htm)
- Dates Outside Ranges Defined by Custom Fiscal Year (atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_cfy_ranges.htm)
