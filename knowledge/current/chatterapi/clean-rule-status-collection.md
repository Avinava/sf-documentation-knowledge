---
title: "Clean Rule Status Collection"
domain: chatterapi
topic: clean-rule-status-collection
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:17.722Z
estimatedTokens: 122
keywords: [Clean, Rule, Status, Collection, Statuses, active, data, integration, rules, record]
---

# Clean Rule Status Collection

> Statuses of all active data integration rules for a
    record.

# Clean Rule Status Collection

Statuses of all active data integration rules for a record.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| cleanStatus​Records | Clean Rule Status[] | Collection of update statuses for a record’s data integration rules. | Small, 37.0 | 37.0 |
| entityId | String | ID of the record. | Small, 37.0 | 37.0 |
| statusUri | String | URI for the update status. | Medium, 37.0 | 37.0 |

## Related Topics

- Clean Rule Status (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_clean_status.htm)
