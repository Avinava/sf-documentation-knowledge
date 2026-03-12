---
title: "Clean Rule Status"
domain: chatterapi
topic: clean-rule-status
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:17.718Z
estimatedTokens: 312
keywords: [Clean, Rule, Status, active, data, integration, record]
---

# Clean Rule Status

> Status of an active data integration rule for a
    record.

# Clean Rule Status

Status of an active data integration rule for a record.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| dataServiceName | String | Data service associated with the data integration rule. | Small, 37.0 | 37.0 |
| lastCleanDate | String | Date when the record was last updated with the data integration rule in ISO 8601 format. | Small, 37.0 | 37.0 |
| needCompare | Boolean | Indicates whether there are field value differences between the Salesforce record and the matching record in the data service. | Small, 37.0 | 37.0 |
| ruleId | String | ID of the data integration rule. | Small, 37.0 | 37.0 |
| ruleName | String | Name of the data integration rule. | Small, 37.0 | 37.0 |
| status | String | Status of the data integration rule. For more information and available values, see “Statuses for Data Integration” in Salesforce Help. | Small, 37.0 | 37.0 |
| statusId | String | ID of the status for the data integration rule. | Small, 37.0 | 37.0 |

#### See Also

-   [Clean Rule Status Collection](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_clean_status_collection.htm "Statuses of all active data integration rules for a record.")

## Related Topics

- Clean Rule Status Collection (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_clean_status_collection.htm)
