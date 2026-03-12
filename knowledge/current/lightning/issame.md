---
title: "isSame()"
domain: lightning
topic: issame
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:49.572Z
estimatedTokens: 164
keywords: [isSame, Checks, date1, date2, Sample, Code]
---

# isSame()

> Checks if date1 is the same
   as date2.

# isSame()

Checks if date1 is the same as date2.

## Signature

isSame(string | number | Date date1, string | number | Date date2, string unit)

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

Returns true if date1 is the same as date2, or false otherwise.

## Sample Code

```

```

## Code Examples

```
var date = new Date();
var day = $A.localizationService.endOf(date, 'day');
// Returns false
$A.localizationService.isSame(date, day, 'hour');
// Returns true
$A.localizationService.isSame(date, day, 'day');
```
