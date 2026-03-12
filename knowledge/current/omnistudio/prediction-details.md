---
title: "Prediction Details"
domain: omnistudio
topic: prediction-details
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:49.236Z
estimatedTokens: 184
keywords: [Prediction, Output, representation]
---

# Prediction Details

> Output representation of the prediction details.

# Prediction Details

Output representation of the prediction details.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| historyRefPointScore | Double | Represents a reference point for a comparison between current and previous prediction scores. | Small, 55.0 | 55.0 |
| insights | Insight[] | Represents insights for the prediction scores. | Small, 55.0 | 55.0 |
| missingColumns | String[] | A list of missing columns for the predict result. | Small, 55.0 | 55.0 |
| outOfBoundsColumns | Column[] | A list of out of bounds columns for the predict result. | Small, 55.0 | 55.0 |
| score | Double | The score predicted by the use case model. | Small, 55.0 | 55.0 |

## Related Topics

- Insight (atlas.en-us.industries_reference.meta/industries_reference/connect_responses_insigh.htm)
- Column (atlas.en-us.industries_reference.meta/industries_reference/connect_responses_colum.htm)
