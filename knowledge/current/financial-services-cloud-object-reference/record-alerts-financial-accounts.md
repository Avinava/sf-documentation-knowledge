---
title: "Record Alerts (Financial Accounts)"
domain: financial-services-cloud-object-reference
topic: record-alerts-financial-accounts
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:28.442Z
estimatedTokens: 178
keywords: [Record, Alerts, Financial, Accounts, Retrieve, active]
---

# Record Alerts (Financial Accounts)

> Retrieve a list of active record alerts on financial
    accounts.

# Record Alerts (Financial Accounts)

Retrieve a list of active record alerts on financial accounts.

The following is a list of alerts retrieved for a financial account:

-   Alerts for the specified financial account.
-   Alerts on financial transactions that are related to the financial account.

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
/financialservices/recordalerts/financialaccount/${financialAccountId}
```

```
https://yourInstance.salesforce.com/services/data/vXX.X/financialservices
/recordalerts/financialaccount/a0URO000000Ccbz2AC
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
      "description" : "Alert description from external source system",
      "severity" : "Test",
      "source" : "External",
      "sourceSystemId" : "sourceSystemId",
      "subject" : "Test external subject",
      "whatId" : "a0URO000000Ccbz2AC"
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
      "description" : "abc",
      "effectiveDate" : "2021-11-11T20:40:06.000Z",
      "id" : "0qZRO000000000Q",
      "parentId" : "a0URO000000Ccbz",
      "recordAlertCategoryName" : "Fraud",
      "severity" : "Error",
      "source" : "Internal",
      "subject" : "Alert on FAT1",
      "validUntilDate" : "2022-03-10T20:00:00.000Z",
      "whatId" : "a0TRO000000DrWJ"
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
      "description" : "Unauthorized transaction on card ending with -XXXX on Nov. 11, 2021 in Norfolk, VA",
      "effectiveDate" : "2021-11-03T19:00:00.000Z",
      "id" : "0qZRO000000003e",
      "recordAlertCategoryName" : "Fraud",
      "severity" : "Error",
      "source" : "Internal",
      "subject" : "Fraudulent Transaction",
      "validUntilDate" : "2022-11-10T20:00:00.000Z",
      "whatId" : "a0URO000000Ccbz"
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
      "description" : "Transaction has an issue",
      "effectiveDate" : "2021-11-10T21:02:48.000Z",
      "id" : "0qZRO000000000u",
      "parentId" : "a0URO000000Ccbz",
      "recordAlertCategoryName" : "Fraud",
      "severity" : "Error",
      "source" : "Internal",
      "subject" : "Transaction has an issue",
      "validUntilDate" : "2021-12-17T20:00:00.000Z",
      "whatId" : "a0TRO000000DrWO"
   } ]
}
```

## Related Topics

- Record Alert Collection (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/connect_responses_record_alert_collection.htm)
