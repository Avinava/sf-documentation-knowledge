---
title: "date_to_epoch()"
domain: bi-dev-guide-saql
topic: datetoepoch
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:06.378Z
estimatedTokens: 51
keywords: [date_to_epoch, Converts, date, Unix, epoch, seconds, _to, _epoch, Usage]
---

# date_to_epoch()

> Converts a date to Unix epoch seconds.

# date\_to\_epoch()

Converts a date to Unix epoch seconds.

## Syntax

date\_to\_epoch(date)

## Usage

This function must take a toDate() or now(​) function as its first argument.

## Example

```

```

## Code Examples

```
q = foreach q generate date_to_epoch(toDate(​”yyyy-mm-dd hh:mm:ss”)) as ds1;
```
