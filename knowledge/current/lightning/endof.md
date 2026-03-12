---
title: "endOf()"
domain: lightning
topic: endof
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:49.487Z
estimatedTokens: 131
keywords: [endOf, date, end, unit, time, Sample, Code]
---

# endOf()

> Returns a date that is the end of a unit of time for the given
   date.

# endOf()

Returns a date that is the end of a unit of time for the given date.

## Signature

endOf(string | number | Date date, string unit)

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
var date = new Date();
// Returns the time at the end of the day
// in the format "Fri Oct 09 2015 23:59:59 GMT-0700 (PDT)"
var day = $A.localizationService.endOf(date, 'day');
```
