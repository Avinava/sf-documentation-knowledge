---
title: "Record Alerts (Person Accounts)"
domain: financial-services-cloud-object-reference
topic: record-alerts-person-accounts
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:28.453Z
estimatedTokens: 190
keywords: [Record, Alerts, Person, Accounts, Retrieve, active]
---

# Record Alerts (Person Accounts)

> Retrieve a list of active record alerts on person
    accounts.

# Record Alerts (Person Accounts)

Retrieve a list of active record alerts on person accounts.

The following is a list of alerts retrieved for a person account:

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

54.0

Requires Chatter

No

HTTP methods

GET

Response body for GET

[Record Alert Collection](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/connect_responses_record_alert_collection.htm "Output representation of a collection of record alerts.")

JSON example of response body

```

```

## Code Examples

```
/financialservices/recordalerts/person/${personId}
```

```
https://yourInstance.salesforce.com/services/data/vXX.X/financialservices
/recordalerts/person/001RO000002Kn4BYAS
```

```
{
   "recordAlerts" : [ {
      "actions" : {
      "actionInfoCollection" : [ {
        "actionName" : "dismiss",
        "parameters" : [ ]
      }, {
        "actionName" : "snooze",
        "parameters" : [ "effectiveDate" ]
      } ]
      },
      "description" : "Alert description from an external source system",
      "severity" : "Test",
      "source" : "External",
      "sourceSystemId" : "sourceSystemId",
      "subject" : "foo apex subject",
      "whatId" : "001RO000002Kn4BYAS"
   }, {
      "actions" : {
        "actionInfoCollection" : [ {
          "actionName" : "dismiss",
          "parameters" : [ ]
        }, {
          "actionName" : "snooze",
          "parameters" : [ "effectiveDate" ]
        } ]
      },
      "active" : true,
      "description" : "Unauthorized transaction on card",
      "effectiveDate" : "2021-11-10T20:00:00.000Z",
      "id" : "0qZRO000000003Z",
      "recordAlertCategoryName" : "Fraud",
      "severity" : "Error",
      "source" : "Internal",
      "subject" : "Fraud Transaction 3",
      "validUntilDate" : "2022-11-10T20:00:00.000Z",
      "whatId" : "001RO000002Kn4B"
   }, {
      "actions" : {
        "actionInfoCollection" : [ {
          "actionName" : "dismiss",
          "parameters" : [ ]
        }, {
          "actionName" : "snooze",
          "parameters" : [ "effectiveDate" ]
        } ]
      },
      "active" : true,
      "description" : "Your card was used in a fraudulent transaction on 11/4/2021",
      "effectiveDate" : "2021-11-10T20:00:00.000Z",
      "id" : "0qZRO000000003K",
      "recordAlertCategoryName" : "Fraud",
      "severity" : "Error",
      "source" : "Internal",
      "subject" : "Fraud Transaction Alert",
      "validUntilDate" : "2022-11-04T19:00:00.000Z",
      "whatId" : "001RO000002Kn4B"
   } ]
}
```

## Related Topics

- Record Alert Collection (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/connect_responses_record_alert_collection.htm)
