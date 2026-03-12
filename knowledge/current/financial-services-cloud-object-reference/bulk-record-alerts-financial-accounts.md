---
title: "Bulk Record Alerts (Financial Accounts)"
domain: financial-services-cloud-object-reference
topic: bulk-record-alerts-financial-accounts
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:28.445Z
estimatedTokens: 245
keywords: [Bulk, Record, Alerts, Financial, Accounts, Retrieve]
---

# Bulk Record Alerts (Financial Accounts)

> Retrieve bulk record alerts.

# Bulk Record Alerts (Financial Accounts)

Retrieve bulk record alerts. Use to fetch bulk record alerts associated with financial accounts.

You can retrieve these alerts for a financial account:

-   Alerts for the specified financial account.
-   Alerts on financial transactions that are related to the financial account.

Resource

```

```

Resource Examples

```

```

Available version

55.0

Requires Chatter

No

HTTP methods

GET

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| financialAccountIds | String[] | The IDs of the financial account records on which record alerts are created. | Required | 55.0 |

Response body for GET

[Record Alert Collection Map](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/connect_responses_record_alert_collection_map.htm "Output representation of the bulk record alerts request.")

## Code Examples

```
/recordalerts/batch
```

```
https://yourInstance.salesforce.com/services/data/vXX.X/recordalerts/batch?
financialAccountIds=0x3R0000026YJ8uIAG,0x3R0000026YJ8uIAG,0x3Dx00000004X2F
```

## Related Topics

- Record Alert Collection Map (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/connect_responses_record_alert_collection_map.htm)
