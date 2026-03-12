---
title: "toDateTime(string,
      format)"
domain: bi-dev-guide-saql
topic: todatetimestring-format
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:06.551Z
estimatedTokens: 162
keywords: [toDateTime, Converts, date, DateTime, “format”, any]
---

# toDateTime(string,
      format)

> Converts a date in string format to a DateTime
    type. “format” specifies the date format and can be any valid date
    format.

# toDateTime(string, format)

Converts a date in string format to a DateTime type. “format” specifies the date format and can be any valid date format.

```

```

For the allowed formats, see [Date Formats](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_date_formats.htm "For Date fields, specify the format of the date by using one of the following supported formats. Dates must match the format exactly and can't have any extra text.").

If a format argument isn’t provided, the function uses the format yyyy-MM-dd HH:mm:ss. format is only valid for converting date string values. It isn’t valid for converting epoch numerical values.

## Code Examples

```
q = foreach q generate toDateTime('CloseDate',"yyyy/MM/dd") as DateTime;
```

## Related Topics

- Date Formats (atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_date_formats.htm)
