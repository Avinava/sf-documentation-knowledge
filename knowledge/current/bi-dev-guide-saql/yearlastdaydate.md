---
title: "year_last_day(date)"
domain: bi-dev-guide-saql
topic: yearlastdaydate
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:06.595Z
estimatedTokens: 90
keywords: [year_last_day, date, day, year, specific, _last, _day]
---

# year_last_day(date)

> Returns the date of the last day of the year for a specific date.

# year\_last\_day(date)

Returns the date of the last day of the year for a specific date.

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=bi_dev_guide_saql)

#### Note

This function always returns December 31. It’s included for uses such as finding the number of days to the year end and for use in a specific locale.

## Code Examples

```
q = foreach q generate year_last_day('BillDate') as "Year Last Day";
```
