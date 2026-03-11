---
title: "GetDurationDateRange"
domain: apex-reference
topic: getdurationdaterange
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:40.548Z
keywords: [GetDurationDateRange, Signature, Return, Value, Examples]
---

# GetDurationDateRange

# GetDurationDateRange

Returns the start and end date given a duration.For example, if you input the number 3 on the date 10/29/2024, it will return a start date of 7/1/2024 and an end date of 10/1/2024.

## Signature

call(String action, Map<String, Object\> args

## Return Value

Returns the start and end date for a specified duration.

## Examples

Output JSON example of the actions are as follows.

Output format:

{ "DurationStartDate": "2024-02-02T00:00:00.000Z", "DurationEndDate": "2024-05-02T00:00:00.000Z" }