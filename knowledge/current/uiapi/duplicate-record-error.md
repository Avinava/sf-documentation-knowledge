---
title: "Duplicate Record Error"
domain: uiapi
topic: duplicate-record-error
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:20.775Z
estimatedTokens: 194
keywords: [Duplicate, Record, Error, errors, rules, control, whether, save, records, Salesforce, tell, action, take, attempt]
---

# Duplicate Record Error

> Information about duplicate record errors. Duplicate rules are used
      to control whether and when you can save duplicate records within Salesforce. Duplicate rules
      tell Salesforce what action to take when you attempt to create a duplicate record.

# Duplicate Record Error

Information about duplicate record errors. Duplicate rules are used to control whether and when you can save duplicate records within Salesforce. Duplicate rules tell Salesforce what action to take when you attempt to create a duplicate record.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| matchResults | Match Result[] | A collection of duplicate rule match results. Each duplicate rule requires at least one matching rule to identify which existing records are possible duplicates. | Small, 41.0 | 41.0 |

#### See Also

-   [Record Exception Error](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_record_exception_error.htm "Information about a record exception error.")

## Related Topics

- Match Result (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_match_result.htm)
- Record Exception Error (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_record_exception_error.htm)
