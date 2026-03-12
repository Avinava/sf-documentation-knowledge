---
title: "toString()"
domain: bi-dev-guide-saql
topic: tostring
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:06.362Z
estimatedTokens: 160
keywords: [toString, Converts, date, Usage]
---

# toString()

> Converts a date to a string.

# toString()

Converts a date to a string.

## Syntax

toString(date, formatString)

For the allowed formats, see [Date Formats](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_date_formats.htm "For Date fields, specify the format of the date by using one of the following supported formats. Dates must match the format exactly and can't have any extra text.").

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=bi_dev_guide_saql)

#### Note

This function is identical to date\_to\_string().

## Usage

This function must take a toDate() or now(​) function as its first argument.

## Example

```

```

## Code Examples

```
q = foreach q generate toString(now(​), "yyyy-MM-dd HH:mm:ss") as ds1;
```

## Related Topics

- Date Formats (atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_date_formats.htm)
