---
title: "Duplicates Configuration"
domain: uiapi
topic: duplicates-configuration
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:20.796Z
estimatedTokens: 360
keywords: [Duplicates, Configuration, duplicate, management, whether, configured, determine, records, exist, rules, active]
---

# Duplicates Configuration

> Contains information about duplicate management configuration for an
      object. Learn whether duplicate management is configured, which fields are used to determine
      whether duplicate records exist, and which duplicate rules are active.

# Duplicates Configuration

Contains information about duplicate management configuration for an object. Learn whether duplicate management is configured, which fields are used to determine whether duplicate records exist, and which duplicate rules are active.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| apiName | String | The API name of the object. | Small, 50.0 | 50.0 |
| dedupeEnabled | Boolean | Indicates whether any duplicate rules are active for the object (true) or not (false). | Small, 50.0 | 50.0 |
| dedupeFields | String[] | The fields used to determine whether a record is a duplicate. Lists all fields that are used in all matching rules that are currently active. | Small, 50.0 | 50.0 |
| duplicateRules | Duplicate Rule[] | The duplicate rules that are active for the object. | Small, 50.0 | 50.0 |
| predupeEnabled | Boolean | Indicates whether matching rules are active for the object (true) or not (false). | Small, 50.0 | 50.0 |

#### See Also

-   [Get Duplicate Management Configuration for a Specified Object](atlas.en-us.uiapi.meta/uiapi/ui_api_resources_duplicates_get.htm "Learn whether duplicate management is configured for the specified object. If duplicate management is configured, learn about the object's duplicate rules and matching rules. Use the information in the response to know when to check for duplicate records.")

## Related Topics

- Duplicate Rule (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_duplicate_rule.htm)
- Get Duplicate Management Configuration for a Specified Object (atlas.en-us.uiapi.meta/uiapi/ui_api_resources_duplicates_get.htm)
