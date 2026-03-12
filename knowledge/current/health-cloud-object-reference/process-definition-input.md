---
title: "Process Definition Input"
domain: health-cloud-object-reference
topic: process-definition-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:33.119Z
estimatedTokens: 118
keywords: [Process, Definition, Input, representation, verification]
---

# Process Definition Input

> Input representation of the verification process
    definition.

# Process Definition Input

Input representation of the verification process definition.

Root XML tag

<processDefinition>

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| layoutType | String | Indicate whether the display layout of the search component is tab or stacked. | Optional | 54.0 |
| processDetail | Process Detail Input[] | Represents the verification-related details. | Required | 54.0 |

## Related Topics

- Process Detail Input (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_requests_process_detail_input.htm)
