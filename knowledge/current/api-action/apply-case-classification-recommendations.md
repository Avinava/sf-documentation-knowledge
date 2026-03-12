---
title: "Apply Case Classification Recommendations"
domain: api-action
topic: apply-case-classification-recommendations
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:57.952Z
estimatedTokens: 179
keywords: [Apply, Case, Classification, Recommendations, Recommends, record, Requires, active, Einstein, model, REST, HTTP, Inputs, Outputs]
---

# Apply Case Classification Recommendations

> Recommends values for fields on a given case record. Requires an
         active Einstein Case Classification model.

# Apply Case Classification Recommendations

Recommends values for fields on a given case record. Requires an active Einstein Case Classification model.

These actions are available in API version 55.0 and later.

## Supported REST HTTP Methods

URI

Get a case SObject with recommended values for fields:

/services/data/vXX.X/actions/standard/applyCaseClassificationRecommendations

Formats

JSON, XML

HTTP Methods

GET, HEAD, POST

Authentication

Authorization: Bearer token

## Inputs

| Input | Details |
| --- | --- |
| caseId | TypeIDDescriptionRequired. The ID of a case. |

## Outputs

| Input | Details |
| --- | --- |
| caseSObject | TypeSObjectDescriptionA case SObject with recommendations applied. |
