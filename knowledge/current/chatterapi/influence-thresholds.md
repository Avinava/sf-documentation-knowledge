---
title: "Influence Thresholds"
domain: chatterapi
topic: influence-thresholds
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:19.193Z
estimatedTokens: 164
keywords: [Influence, Thresholds, Chatter]
---

# Influence Thresholds

> Chatter influence thresholds.

# Influence Thresholds

Chatter influence thresholds.

| Property | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| name | String | Description of this influencer category. For example: Active Influencer | Small, 29.0 | 24.0 |
| threshold | Double | Number expressed as a raw percentile that defines the bottom threshold for this influencer category. For example: 0.25 defines the cutoff for the Active Influencer category, which means it includes users with an influence rank equal to or greater than the 25th percentile (25%) and less than the next highest category threshold. | Small, 29.0 | 24.0 |
