---
title: "toDateTime(epoch)"
domain: bi-dev-guide-saql
topic: todatetimeepoch
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:06.548Z
estimatedTokens: 175
keywords: [toDateTime, epoch, Converts, day, DateTime]
---

# toDateTime(epoch)

> Converts an epoch day to a DateTime
  type.

# toDateTime(epoch)

Converts an epoch day to a DateTime type.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=bi_dev_guide_saql)

#### Note

You can only use this function when the time zone feature is enabled. If the time zone feature is disabled, use the [toDate()](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_functions_toDate.htm "Converts a string or Unix epoch seconds to a date. Returns a date that can be used in another function such as daysBetween(​). The returned date cannot be used in a filter.") function.

```

```

The format argument isn’t valid for converting epoch numerical values. It’s only valid for converting date string values.

## Code Examples

```
q = foreach q generate toDateTime(epoch) as "DateTime";
```

## Related Topics

- toDate() (atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_functions_toDate.htm)
