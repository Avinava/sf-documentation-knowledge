---
title: "date_to_string()"
domain: bi-dev-guide-saql
topic: datetostring
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:06.381Z
estimatedTokens: 162
keywords: [date_to_string, Converts, date, _to, _string, Usage]
---

# date_to_string()

> Converts a date to a string.

# date\_to\_string()

Converts a date to a string.

## Syntax

date\_to\_string(date, formatString)

For the allowed formats, see [Date Formats](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_date_formats.htm "For Date fields, specify the format of the date by using one of the following supported formats. Dates must match the format exactly and can't have any extra text.").

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=bi_dev_guide_saql)

#### Note

This function is identical to toString().

## Usage

This function must take a toDate() or now(​) function as its first argument.

## Example

```

```

## Code Examples

```
q = foreach q generate date_to_string(now(​), "yyyy-MM-dd HH:mm:ss") as ds1;
```

## Related Topics

- Date Formats (atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_date_formats.htm)
