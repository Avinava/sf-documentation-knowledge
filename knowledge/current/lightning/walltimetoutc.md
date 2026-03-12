---
title: "WallTimeToUTC"
domain: lightning
topic: walltimetoutc
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:49.458Z
estimatedTokens: 112
keywords: [WallTimeToUTC, Converts, datetime, timezone, UTC]
---

# WallTimeToUTC

> Converts a datetime from a specified timezone to
  UTC.

# WallTimeToUTC

Converts a datetime from a specified timezone to UTC.

## Signature

WallTimeToUTC (Date date, string timezone, function callback)

## Parameters

date

Type: Date

A JavaScript Date object.

timezone

Type: String

A time zone ID based on the class, for example, "America/Los\_Angeles".

callback

Type: function

A function to call after the conversion is done. Access the converted value in the first parameter of the callback.
