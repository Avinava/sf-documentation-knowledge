---
title: "Sync Sustainability Carbon Credit Output"
domain: netzero-cloud-dev-guide
topic: sync-sustainability-carbon-credit-output
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:57.386Z
estimatedTokens: 161
keywords: [Sync, Sustainability, Carbon, Credit, Output, representation, trigger]
---

# Sync Sustainability Carbon Credit Output

> Output representation for the sync sustainability carbon credit
      trigger.

# Sync Sustainability Carbon Credit Output

Output representation for the sync sustainability carbon credit trigger.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| code | Integer | The error code returned in case of failure to sync sustainability carbon credits. | Small, 57.0 | 57.0 |
| message | String | Provides information about the reason for failure. | Small, 57.0 | 57.0 |
| syncSustainabilityCarbonCreditErrors | Sync Sustainability Carbon Credit Error | Error messages to troubleshoot the sync request failure. | Small, 57.0 | 57.0 |

## Code Examples

```
{
   "message": "", //In case of error
   "code": "", // In case of error
   "syncSustainabilityCarbonCreditErrors": { /// Make it a generic error and consolidate all validation errors in one pass
        "enumMappingErrors":[
        {
            "entityName": "",
            "errorMessage", ""
            "externalIdentifier": "",
            "fieldName": ""
        }, {...}, {...}
        ],
        "requiredFieldErrors":[
        {
            "entityName": "",
            "errorMessage", ""
            "externalIdentifier": "",
            "fieldName": ""
        }, {...}, {...},
        "validationRuleErrors":[
        {
            "entityName": "",
            "errorMessage", ""
            "externalIdentifier": "",
            "fieldName": ""
        }, {...}, {...}
        ],
   }
}
```

## Related Topics

- Sync Sustainability Carbon Credit Error (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/connect_responses_sync_sustainability_carbon_credit_error.htm)
