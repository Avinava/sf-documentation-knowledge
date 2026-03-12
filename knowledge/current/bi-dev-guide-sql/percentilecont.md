---
title: "percentile_cont"
domain: bi-dev-guide-sql
topic: percentilecont
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:06.958Z
estimatedTokens: 38
keywords: [percentile_cont, Calculates, percentile, continuous, distribution, column, _cont]
---

# percentile_cont

> Calculates a percentile based on a continuous distribution of the column
  value.

# percentile\_cont

Calculates a percentile based on a continuous distribution of the column value.

percentile\_disc() follows this syntax.

```

```

## Code Examples

```
SELECT percentile_cont(percentage) WITHIN GROUP (ORDER BYfield1)
FROM dataset;
```
