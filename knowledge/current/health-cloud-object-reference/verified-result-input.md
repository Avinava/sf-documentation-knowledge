---
title: "Verified Result Input"
domain: health-cloud-object-reference
topic: verified-result-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:33.201Z
estimatedTokens: 134
keywords: [Verified, Result, Input, representation, verifier]
---

# Verified Result Input

> Input representation of the verifier result.

# Verified Result Input

Input representation of the verifier result.

Root XML tag

<verifiedResult>

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| optionalVerifiers | Verifier Input[] | List of optional verifiers. | OptionalNoteThis field is required, if you don’t specify required verifiers. | 54.0 |
| requiredVerifiers | Verifier Input[] | List of required verifiers. | OptionalNoteThis field is required, if you don’t specify optional verifiers. | 54.0 |

## Related Topics

- Verifier Input (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_requests_verifier_input.htm)
- Verifier
                      Input (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_requests_verifier_input.htm)
