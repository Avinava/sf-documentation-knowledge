---
title: "Write Through Tags (PATCH)"
domain: omnistudio
topic: write-through-tags-patch
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:25:09.020Z
keywords: [Write, Through, Tags, PATCH]
---

# Write Through Tags (PATCH)

# Write Through Tags (PATCH)

Update Context Attributes through tags.

Resource

```

```

Available version

63.0

HTTP methods

PATCH

Request body for PATCH

```

```

Request parameters for PATCH

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| contextId | String | ID of context which will get updated. | Required | 63.0 |
| nodePath​And​TagValues | List<Node​PathAndTag​ValuesInput​Representation> | Node path which needs to update with tag details. | Required | 63.0 |

Response body for PATCH

[ContextOutputRepresentation](atlas.en-us.industries_reference.meta/industries_reference/connect_responses_context_output.htm "Output Representation of attributes associated with defined context.")