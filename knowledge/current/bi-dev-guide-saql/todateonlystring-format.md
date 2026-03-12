---
title: "toDateOnly(string,
   format)"
domain: bi-dev-guide-saql
topic: todateonlystring-format
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:06.546Z
estimatedTokens: 166
keywords: [toDateOnly, Converts, date, DateOnly, any]
---

# toDateOnly(string,
   format)

> Converts a date in string format to a DateOnly
  type. format specifies the date format and can be any valid date
  format.

# toDateOnly(string, format)

Converts a date in string format to a DateOnly type. format specifies the date format and can be any valid date format.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=bi_dev_guide_saql)

#### Note

You can only use this function when the time zone feature is enabled. If the time zone feature is disabled, use the [toDate()](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_functions_toDate.htm "Converts a string or Unix epoch seconds to a date. Returns a date that can be used in another function such as daysBetween(​). The returned date cannot be used in a filter.") function.

```

```

## Code Examples

```
q = foreach q generate toDateOnly('CloseDate',"yyyy/MM/dd") as DateTime;
```

## Related Topics

- toDate() (atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_functions_toDate.htm)
