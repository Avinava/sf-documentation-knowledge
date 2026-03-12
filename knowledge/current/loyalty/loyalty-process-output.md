---
title: "Loyalty Process Output"
domain: loyalty
topic: loyalty-process-output
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:51.421Z
estimatedTokens: 196
keywords: [Loyalty, Process, Output, representation]
---

# Loyalty Process Output

> Output representation of the loyalty process
    response.

# Loyalty Process Output

Output representation of the loyalty process response.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| message | String | The message that provides details of the error in executing the loyalty process request. | Small, 56.0 | 56.0 |
| outputParameters | Map<String, Object> | The parameters returned after the execution of a loyalty process. | Small, 56.0 | 56.0 |
| simulationDetails | Map<String, Object> | Specifies the simulation execution type details including detailed steps on how the process is executed.NoteThis property is for future use. | Small, 56.0 | 56.0 |
| status | Boolean | Indicates whether the request succeeded (true) or failed (false). | Small, 56.0 | 56.0 |
