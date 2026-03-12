---
title: "processSuggestedResponses"
domain: health-cloud-object-reference
topic: processsuggestedresponses
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:32.644Z
estimatedTokens: 146
keywords: [processSuggestedResponses, Calls, prompt, service, suggested, responses]
---

# processSuggestedResponses

> Calls the prompt service to get the suggested
    responses.

# processSuggestedResponses

Calls the prompt service to get the suggested responses.

## Signature

public healthcloudext.SuggestedResponseAssessmentService processSuggestedResponses(healthcloudext.SuggestedResponseAssessmentService request)

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
healthcloudext.SuggestedResponseAssessmentInteropAdapter, processSuggestedResponses, [healthcloudext.SuggestedResponseAssessmentService], healthcloudext.SuggestedResponseAssessmentService
```
