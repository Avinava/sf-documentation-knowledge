---
title: "formatDateTime()"
domain: lightning
topic: formatdatetime
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:49.497Z
estimatedTokens: 312
keywords: [formatDateTime, formatted, date, time, Sample, Code]
---

# formatDateTime()

> Returns a formatted date time.

# formatDateTime()

Returns a formatted date time.

## Signature

formatDateTime (string | number | Date date, string formatString, string locale)

## Parameters

date

Type: string | number | Date

A datetime string in ISO8601 format , or a timestamp in milliseconds, or a Date object. If you provide a String value, use ISO 8601 format to avoid parsing warnings. If no timezone is specified, defaults to the browser timezone offset.

formatString

Type: string

Optional. A string containing tokens to format the given date. For example, "yyyy-MM-dd" formats 15th January, 2017 as "2017-01-15". The default format string comes from the $Locale value provider. For details on available tokens, see [Formatting Dates in JavaScript](atlas.en-us.lightning.meta/lightning/js_cb_format_dates.htm "The AuraLocalizationService JavaScript API provides methods for formatting and localizing dates.").

locale

Type: string

Optional. A locale to format the given date. The default value is $Locale.langLocale. We strongly recommended that you use the locale value from $Locale. We fall back to the value in $Locale.langLocale if you use an unavailable locale.

## Returns

Type: string

A formatted and localized date time string.

## Sample Code

```

```

## Code Examples

```
var date = new Date();
// Returns datetime in the format "Oct 9, 2015 9:00:00 AM"
$A.localizationService.formatDateTime(date);
```

## Related Topics

- Formatting Dates in JavaScript (atlas.en-us.lightning.meta/lightning/js_cb_format_dates.htm)
