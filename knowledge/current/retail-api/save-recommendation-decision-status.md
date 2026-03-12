---
title: "Save Recommendation Decision Status"
domain: retail-api
topic: save-recommendation-decision-status
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:36.956Z
estimatedTokens: 173
keywords: [Save, Recommendation, Decision, Status, Output, representation]
---

# Save Recommendation Decision Status

> Output representation of the status of the save recommendation
      decision.

# Save Recommendation Decision Status

Output representation of the status of the save recommendation decision.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| code | String | The HTTP POST response code. | Small, 51.0 | 51.0 |
| message | String | Get Error Message. Indicates whether the call succeeded or failed, and in case of failure also provides the reason. | Small, 51.0 | 51.0 |
| successCount | Integer | The total number of the recommendations that were processed successfully. | Small, 51.0 | 51.0 |
| totalRecommendations | Integer | The total number of the input recommendations. | Small, 51.0 | 51.0 |
