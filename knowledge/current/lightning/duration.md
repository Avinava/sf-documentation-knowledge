---
title: "duration()"
domain: lightning
topic: duration
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:49.484Z
estimatedTokens: 106
keywords: [duration, representing, length, time, Sample, Code]
---

# duration()

> Returns an object representing a length of time.

# duration()

Returns an object representing a length of time.

## Signature

duration (number num, String unit)

## Parameters

num

Type: number

The length of time in a given unit.

unit

Type: String

A datetime unit. The default is 'milliseconds'. The options are 'years, 'months', 'weeks', 'days', 'hour', 'minutes', 'seconds', 'milliseconds'.

## Returns

Type: Object

A duration object.

## Sample Code

```

```

## Code Examples

```
var dur = $A.localizationService.duration(2, 'days');
```
