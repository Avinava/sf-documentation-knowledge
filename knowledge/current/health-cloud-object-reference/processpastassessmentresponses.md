---
title: "processPastAssessmentResponses"
domain: health-cloud-object-reference
topic: processpastassessmentresponses
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:32.642Z
estimatedTokens: 159
keywords: [processPastAssessmentResponses, Calls, PreviousAssessmentResponses, Connect, API, retrieve, suggestions, prior, responses]
---

# processPastAssessmentResponses

> Calls the PreviousAssessmentResponses Connect API to retrieve
      suggestions based on prior responses.

# processPastAssessmentResponses

Calls the PreviousAssessmentResponses Connect API to retrieve suggestions based on prior responses.

## Signature

public healthcloudext.SuggestedResponseAssessmentService processPastAssessmentResponses(healthcloudext.SuggestedResponseAssessmentService request)

```

```

## Parameters

input

Type: Map<String,String>

A map of key-value pairs that contains assessment details provided as input from Integration Procedure.

output

Type: Map<String,String>

A map output that is sent back to Integration Procedure.

options

Type: Map<String,String>

Configuration options from Integration Procedure.

## Code Examples

```
healthcloudext.SuggestedResponseAssessmentInteropAdapter, processPastAssessmentResponses, [healthcloudext.SuggestedResponseAssessmentService], healthcloudext.SuggestedResponseAssessmentService
```
