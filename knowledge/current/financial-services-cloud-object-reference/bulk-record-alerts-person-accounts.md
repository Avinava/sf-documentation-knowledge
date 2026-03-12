---
title: "Bulk Record Alerts (Person Accounts)"
domain: financial-services-cloud-object-reference
topic: bulk-record-alerts-person-accounts
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:28.456Z
estimatedTokens: 252
keywords: [Bulk, Record, Alerts, Person, Accounts, Retrieve]
---

# Bulk Record Alerts (Person Accounts)

> Retrieve bulk record alerts.

# Bulk Record Alerts (Person Accounts)

Retrieve bulk record alerts. Use to fetch bulk record alerts associated with person accounts.

You can retrieve these alerts for a person account:

-   Alerts for the specified person account.
-   Alerts for the financial accounts owned by the person.
-   Alerts on financial transactions that are related to the financial accounts.

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
| personIds | String[] | The IDs of the person records on which record alerts are created. | Required | 55.0 |

Response body for GET

[Record Alert Collection Map](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/connect_responses_record_alert_collection_map.htm "Output representation of the bulk record alerts request.")

## Code Examples

```
/recordalerts/batch
```

```
https://yourInstance.salesforce.com/services/data/vXX.X/recordalerts/batch?
personIds=001R0000026YJ8uIAG,001R0000026YJ8uIAG,001x00000004
```

## Related Topics

- Record Alert Collection Map (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/connect_responses_record_alert_collection_map.htm)
