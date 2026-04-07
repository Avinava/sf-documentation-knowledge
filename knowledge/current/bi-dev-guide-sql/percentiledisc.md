---
title: "percentile_disc"
domain: bi-dev-guide-sql
topic: percentiledisc
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:37:01.520Z
estimatedTokens: 40
keywords: [percentile_disc, corresponding, percentile, Accepts, measure, _disc]
---

> Returns the value corresponding to a given percentile. Accepts measure fields as
  input.

# percentile\_disc

Returns the value corresponding to a given percentile. Accepts measure fields as input.

percentile\_cont() follows this syntax.

```

```

## Code Examples

```
SELECT percentile_disc(percentage) WITHIN GROUP (ORDER BYfield1)
FROM dataset;
```
