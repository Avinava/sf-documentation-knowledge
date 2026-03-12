---
title: "$System.OriginDateTime"
domain: pages
topic: systemorigindatetime
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:24.444Z
estimatedTokens: 89
keywords: [$System.OriginDateTime, merge, literal, 1900-01-01, Usage]
---

# $System.OriginDateTime

> A global merge field that represents the literal value of 1900-01-01
  00:00:00.

# $System.OriginDateTime

A global merge field that represents the literal value of 1900-01-01 00:00:00.

## Usage

Use this global variable when performing date/time offset calculations, or to assign a literal value to a date/time field.

## Example

The following example calculates the number of days that have passed since January 1, 1900:

```

```

## Code Examples

```apex
{!NOW() - $System.OriginDateTime}
```
