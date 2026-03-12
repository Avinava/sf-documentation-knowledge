---
title: "isBefore()"
domain: lightning
topic: isbefore
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:49.562Z
estimatedTokens: 163
keywords: [isBefore, Checks, date1, date2, Sample, Code]
---

# isBefore()

> Checks if date1 is before
    date2.

# isBefore()

Checks if date1 is before date2.

## Signature

isBefore(string | number | Date date1, string | number | Date date2, string unit)

## Parameters

date1

Type: string | number | Date

A datetime string in ISO8601 format, or a timestamp in milliseconds, or a Date object.

date2

Type: string | number | Date

A datetime string in ISO8601 format, or a timestamp in milliseconds, or a Date object.

unit

Type: string

A datetime unit. Options are 'year', 'month', 'week', 'day', 'hour', 'minute', 'second', or 'millisecond'.

## Returns

Type: boolean

Returns true if date1 is before date2, or false otherwise.

## Sample Code

```

```

## Code Examples

```
var date = new Date();
var day = $A.localizationService.endOf(date, 'day');
// Returns true, since date is before day
$A.localizationService.isBefore(date, day);
```
