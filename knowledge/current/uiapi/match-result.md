---
title: "Match Result"
domain: uiapi
topic: match-result
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:20.958Z
estimatedTokens: 364
keywords: [Match, Result, duplicate, rule, rules, control, whether, save, records, Salesforce, tell, action, take, attempt, record]
---

# Match Result

> A duplicate rule match. Duplicate rules are used to control whether
      and when you can save duplicate records within Salesforce. Duplicate rules tell Salesforce
      what action to take when you attempt to create a duplicate record. Each duplicate rule
      requires at least one matching rule to identify which existing records are possible
      duplicates.

# Match Result

A duplicate rule match. Duplicate rules are used to control whether and when you can save duplicate records within Salesforce. Duplicate rules tell Salesforce what action to take when you attempt to create a duplicate record. Each duplicate rule requires at least one matching rule to identify which existing records are possible duplicates.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| apiName | String | The API name of the object. | Small, 41.0 | 41.0 |
| isAllowSave | Boolean | Indicates whether the rule allows a duplicate to be saved. | Big, 41.0 | 41.0 |
| matchRecordIds | String[] | The IDs of the matching records. | Small, 41.0 | 41.0 |
| matchRule | String | The developer name of the matching duplicate rule. | Big, 41.0 | 41.0 |
| objectLabel | String | The object’s label. | Small, 41.0 | 41.0 |
| objectLabelPlural | String | The object’s label in plural form. | Small, 41.0 | 41.0 |
| themeInfo | Theme Info | Information about the object’s color and icon. | Small, 41.0 | 41.0 |

#### See Also

-   [Duplicate Record Error](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_duplicate_record_error.htm "Information about duplicate record errors. Duplicate rules are used to control whether and when you can save duplicate records within Salesforce. Duplicate rules tell Salesforce what action to take when you attempt to create a duplicate record.")

## Related Topics

- Theme Info (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_theme_info.htm)
- Duplicate Record Error (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_duplicate_record_error.htm)
