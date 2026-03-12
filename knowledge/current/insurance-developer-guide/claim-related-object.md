---
title: "Claim Related Object"
domain: insurance-developer-guide
topic: claim-related-object
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:40.410Z
estimatedTokens: 101
keywords: [Claim, Output, representation]
---

# Claim Related Object

> Output representation for a related object on a claim.

# Claim Related Object

Output representation for a related object on a claim.

JSON example

```

```

| Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| related​RecordId | String | ID of the related claim item record. | Big, 65.0 | 65.0 |
| relatedRecord​ObjName | String | Object name of the related claim item record. | Big, 65.0 | 65.0 |

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
