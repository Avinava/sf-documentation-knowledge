---
title: "date_to_string(DateTime |
        DateOnly, format)"
domain: bi-dev-guide-saql
topic: datetostringdatetime-dateonly-format
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:06.538Z
estimatedTokens: 177
keywords: [date_to_string, DateTime, DateOnly, Converts, date, _to, _string]
---

# date_to_string(DateTime |
        DateOnly, format)

> Converts a date to a string.

# date\_to\_string(DateTime | DateOnly, format)

Converts a date to a string.

This function takes a DateTime, DateOnly, or now() as its first argument. For the allowed formats, see the Date Formats section in [Date Formats](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_date_formats.htm "For Date fields, specify the format of the date by using one of the following supported formats. Dates must match the format exactly and can't have any extra text.").

Use date\_to\_string() to display the close date for your opportunities in the format yyyy-MM-dd.. CloseDate must be a DateTime or DateOnly type.

```

```

If CloseDate is a Date type, convert it to a DateOnly type with toDate().

```

```

## Code Examples

```
q = foreach q generate date_to_string('CloseDate', "yyyy-MM-dd") as 'Close Date';
```

```
q = foreach q generate date_to_string(toDate('CloseDate', "yyyy-MM-dd"), "yyyy-MM-dd") as 'Close Date';
```

## Related Topics

- Date Formats (atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_date_formats.htm)
