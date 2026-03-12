---
title: "startOf()"
domain: lightning
topic: startof
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:49.585Z
estimatedTokens: 132
keywords: [startOf, date, start, unit, time, Sample, Code]
---

# startOf()

> Returns a date that is the start of a unit of time for the given
   date.

# startOf()

Returns a date that is the start of a unit of time for the given date.

## Signature

startOf(string | number | Date date, string unit)

## Parameters

date

Type: string | number | Date

A datetime string in ISO8601 format, or a timestamp in milliseconds, or a Date object.

unit

Type: string

A datetime unit. Options are 'year', 'month', 'week', 'day', 'hour', 'minute', or 'second'.

## Returns

Type: Date

A JavaScript Date object. If a unit is not provided, returns a parsed date.

## Sample Code

```

```

## Code Examples

```
var date = "2015-10-9";
// Returns "Thu Oct 01 2015 00:00:00 GMT-0700 (PDT)"
$A.localizationService.startOf(date, 'month');
```
