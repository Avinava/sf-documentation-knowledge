---
title: "Using Bounds"
domain: apex-guide
topic: using-bounds
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:32.686Z
estimatedTokens: 269
keywords: [Bounds, region, delimited, anchoring, means, line, anchors, match, boundaries, moved, start, end, input, specify, whether]
---

# Using Bounds

> By default, a region is delimited by anchoring bounds, which means that the line anchors (such as ^ or $) match at the region boundaries, even if the region boundaries
have been moved from the start and end of the input string. You can
specify whether a region uses anchoring bounds with the useAncho

# Using Bounds

By default, a region is delimited by anchoring bounds, which means that the line anchors (such as ^ or $) match at the region boundaries, even if the region boundaries have been moved from the start and end of the input string. You can specify whether a region uses anchoring bounds with the useAnchoringBounds method. By default, a region always uses anchoring bounds. If you set useAnchoringBounds to false, the line anchors match only the true ends of the input string.

By default, all text located outside of a region is not searched, that is, the region has opaque bounds. However, using transparent bounds it is possible to search the text outside of a region. Transparent bounds are only used when a region no longer contains the entire input string. You can specify which type of bounds a region has by using the useTransparentBounds method.

Suppose you were searching the following string, and your region was only the word “STRING”:

```

```

If you searched for the word “cat”, you wouldn't receive a match unless you had transparent bounds set.

## Code Examples

```
This is a concatenated STRING of cats and dogs.
```
