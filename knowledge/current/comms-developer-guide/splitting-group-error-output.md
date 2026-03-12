---
title: "Splitting Group Error Output"
domain: comms-developer-guide
topic: splitting-group-error-output
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:23.101Z
estimatedTokens: 141
keywords: [Splitting, Group, Error, Output, representation, detailing, reasons, why, recipient, updated]
---

# Splitting Group Error Output

> Output representation detailing the reasons why the recipient group
      was not updated.

# Splitting Group Error Output

Output representation detailing the reasons why the recipient group was not updated.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| statusCode | String | An internal status code to indicate whether a synchronous operation wasn't executed. | Small, 64.0 | 64.0 |
| errorMessage | String | The reason why recipient ID wasn't updated. | Small, 64.0 | 64.0 |
| recordId | String | The ID of the record due to which the API request failed. | Small, 64.0 | 64.0 |
