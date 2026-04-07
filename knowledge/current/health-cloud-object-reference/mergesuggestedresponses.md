---
title: "mergeSuggestedResponses"
domain: health-cloud-object-reference
topic: mergesuggestedresponses
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:37:40.279Z
estimatedTokens: 135
keywords: [mergeSuggestedResponses, Merges, suggestion, sources]
---

> Merges suggestion from both sources.

# mergeSuggestedResponses

Merges suggestion from both sources.

## Signature

public healthcloudext.SuggestedResponseAssessmentService mergeSuggestedResponses(healthcloudext.SuggestedResponseAssessmentService request)

```

```

## Parameters

input

Type: Map<String,String>

A map of key-value pairs that contains assessment details provided as input from Integration Procedure.

output

Type: Map<String,String>

A map output that is sent back to IP.

options

Type: Map<String,String>

Configuration options from Integration Procedure.

## Code Examples

```
healthcloudext.SuggestedResponseAssessmentInteropAdapter, mergeSuggestedResponses, [healthcloudext.SuggestedResponseAssessmentService], healthcloudext.SuggestedResponseAssessmentService
```
