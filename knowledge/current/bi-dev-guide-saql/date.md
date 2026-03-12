---
title: "date()"
domain: bi-dev-guide-saql
topic: date
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:06.397Z
estimatedTokens: 248
keywords: [date, filter, function, year, month, day, dimension, input, Usage]
---

# date()

> Returns a date that can be used in a filter. This function takes a year, a month, and
        a day dimension as input.

# date()

Returns a date that can be used in a filter. This function takes a year, a month, and a day dimension as input.

## Syntax

date(year, month, day)

## Usage

Specify the year, month, and day. Each input value must be a date dimension type.

```

```

## Example

Which opportunities have your reps closed in the past 30 days? Use date() to select records with a close date in the past 30 days.

```

```

#### See Also

-   [toDate()](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_functions_toDate.htm "Converts a string or Unix epoch seconds to a date. Returns a date that can be used in another function such as daysBetween(​). The returned date cannot be used in a filter.")

-   [Time-Based Filtering](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_functions_daterange.htm "SAQL gives you many ways to specify the range of dates that you want to look at, such as \"all ops from the last fiscal quarter\" or \"all cases from the last seven days\".")

## Code Examples

```
date('OrderDate_Year', 'OrderDate_Month', 'OrderDate_Day')
```

```
q = load "DTC_Opportunity";

-- use date() to create a date that you can use in a filter
-- 'CloseDate_Year', 'CloseDate_Month', and 'CloseDate_Day' are date fields in the DTC_Opportunity data set

q = filter q by date('CloseDate_Year', 'CloseDate_Month', 'CloseDate_Day') in ["30 days ago".."current day"];
q = group q by 'Account_Owner';
q = foreach q generate 'Account_Owner' as 'Account_Owner', sum('Amount') as 'sum_Amount';
q = order q by 'Account_Owner' asc;
```

## Related Topics

- toDate() (atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_functions_toDate.htm)
- Time-Based Filtering (atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_functions_daterange.htm)
