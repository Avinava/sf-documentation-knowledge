---
title: "Using Regions"
domain: apex-guide
topic: using-regions
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:32.665Z
estimatedTokens: 211
keywords: [Regions, Matcher, finds, matches, subset, its, input, called, region., default, region, always, entirety, string., However, change, start, end, points, query]
---

# Using Regions

> A Matcher object finds matches in a subset of its input string
called a region. The default region for a Matcher object
is always the entirety of the input string. However, you can change
the start and end points of a region by using the region method, and you can query
the region's end points by us

# Using Regions

A Matcher object finds matches in a subset of its input string called a region. The default region for a Matcher object is always the entirety of the input string. However, you can change the start and end points of a region by using the region method, and you can query the region's end points by using the regionStart and regionEnd methods.

The region method requires both a start and an end value. The following table provides examples of how to set one value without setting the other.

| Start of the Region | End of the Region | Code Example |
| --- | --- | --- |
| Specify explicitly | Leave unchanged | MyMatcher.region(start, MyMatcher.regionEnd()); |
| Leave unchanged | Specify explicitly | MyMatcher.region(MyMatcher.regionStart(), end); |
| Reset to the default | Specify explicitly | MyMatcher.region(0, end); |
