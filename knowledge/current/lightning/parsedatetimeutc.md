---
title: "parseDateTimeUTC()"
domain: lightning
topic: parsedatetimeutc
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:49.582Z
estimatedTokens: 176
keywords: [parseDateTimeUTC, Parses, JavaScript, Date, Sample, Code]
---

# parseDateTimeUTC()

> Parses a string and returns a JavaScript Date.

# parseDateTimeUTC()

Parses a string and returns a JavaScript Date.

## Signature

parseDateTime(string dateTimeString, string parseFormat, string | boolean locale, boolean strictParsing)

## Parameters

dateTimeString

Type: string

A datetime string.

parseFormat

Type: string

An optional Java format string used to parse the datetime. The default is from the $Locale global value provider.

locale

Type: string | boolean

This parameter is deprecated.

strictParsing

Type: string

Set this optional parameter to true to turn off forgiving parsing and use strict validation.

## Returns

Type: Date

Returns a JavaScript Date object, or null if dateTimeString is invalid.

## Sample Code

```

```

## Code Examples

```
var date = "2015-10-9";
// Returns "Thu Oct 08 2015 17:00:00 GMT-0700 (PDT)"
$A.localizationService.parseDateTimeUTC(date);
```
