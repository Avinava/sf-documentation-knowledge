---
title: "Claim Related Object Input"
domain: insurance-developer-guide
topic: claim-related-object-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:39.689Z
estimatedTokens: 100
keywords: [Claim, Input, representation]
---

# Claim Related Object Input

> Input representation for a related object on a claim.

# Claim Related Object Input

Input representation for a related object on a claim.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| recordId | String | ID of the related claim item record. | Optional | 65.0 |
| recordObjName | String | Object name of the related claim item record. | Optional | 65.0 |

## Code Examples

```
{
      "relatedObjects": [
        {
          "relatedRecordId": "500xx000000OpQrStU",
          "relatedRecordObjName": "Police_Report__c"
        }
      ]
  }
```
