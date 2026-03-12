---
title: "Omniscript"
domain: health-cloud-object-reference
topic: omniscript
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:33.346Z
estimatedTokens: 240
keywords: [Omniscript, discovery, framework, structure, stored, OmniProcess]
---

# Omniscript

> Get the discovery framework structure stored as OmniProcess.

# Omniscript

Get the discovery framework structure stored as OmniProcess.

Use this API to get the assessment form layout and submit the assessment data through any custom-built UI. You can show the questionnaire form, capture assessment responses, and save the assessment.

Resource

```

```

The omniScriptId property is the ID of the Omniscript to get the discovery framework structure stored as an OmniProcess.

Resource example

```

```

Available version

60.0

HTTP methods

GET

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| customType | String | Custom type of Omniscript. For example, Discovery Framework. | Required | 60.0 |

Response body for GET

[Omniscript Output](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_responses_omniscript_output.htm "Output representation of the details of the Omniscript.")

## Code Examples

```
/connect/omniscript/omniScriptId
```

```
https://yourInstance.salesforce.com/services/data/v60.0/connect/omniscript/CreditCard_DisputeTransaction_English_1?customType=DiscoveryFramework
```

## Related Topics

- Omniscript Output (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_responses_omniscript_output.htm)
