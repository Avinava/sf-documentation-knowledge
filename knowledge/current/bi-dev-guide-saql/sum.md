---
title: "sum()"
domain: bi-dev-guide-saql
topic: sum
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:03:13.959Z
estimatedTokens: 58
keywords: [sum, numeric, Calculate, Total, Meeting, Time]
---

# sum()

> Returns the sum of a numeric field.

# sum()

Returns the sum of a numeric field.

## Example - Calculate the Total Meeting Time

Suppose that you have a database of meeting information. Use sum() to see that the total time spent meeting with each account.

```

```

## Code Examples

```
q = load "Meetings";
q = group q by 'Company';
q = foreach q generate 'Company' as 'Company', sum('MeetingDuration') as 'sum_meetings';
```
