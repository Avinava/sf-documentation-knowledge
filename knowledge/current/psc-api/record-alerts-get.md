---
title: "Record Alerts (GET)"
domain: psc-api
topic: record-alerts-get
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:30.513Z
estimatedTokens: 328
keywords: [Record, Alerts, Retrieve, active]
---

# Record Alerts (GET)

> Retrieve a list of active record alerts.

# Record Alerts (GET)

Retrieve a list of active record alerts.

Resource

```

```

Resource Examples

```

```

```

```

```

```

Available version

54.0

Requires Chatter

No

HTTP methods

GET

Query parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| parentId | String | The related parent record ID on which a record alert is created. | Optional | 54.0 |
| whatId | String | The Salesforce object record ID on which a record alert is created.NoteFor external alerts, whatId can be any valid Salesforce ID. For internal alerts, whatId can only be polymorphic objects including all custom objects.Supported polymorphic objects are:AccountAssetBusinessMilestoneCampaignContractContactCaseClaimInsurancePolicyInsurancePolicyCoverageInteractionSummaryLeadLoanApplicationLoanApplicantEmploymentLoanApplicantIncomeLoanApplicationPropertyLoanApplicationFinancialLoanApplicationAssetLoanApplicationLiabilityOpportunityPersonLifeEventResidentialLoanApplicationAll Custom Objects | Required | 54.0 |

Response body for GET

[Record Alert Collection](atlas.en-us.psc_api.meta/psc_api/connect_responses_record_alert_collection.htm "Output representation of a collection of record alerts.")

JSON example of response body

```

```

## Code Examples

```
/recordalerts
```

```
https://yourInstance.salesforce.com/services/data/vXX.X​/recordalerts
?whatId=a0URO000000Ccbz2AC
```

```
https://yourInstance.salesforce.com/services/data/vXX.Xrecordalerts
?parentId=001RO000002JPkrYAG
```

```
https://yourInstance.salesforce.com/services/data/vXX.Xrecordalerts
?whatId=a0URO000000Ccbz2AC&parentId=001RO000002JPkrYAG
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
    "active" : true,
    "description" : "Unauthorized transaction on card ending with -XXXX on Nov. 11, 2021 in Rome, Italy",
    "effectiveDate" : "2021-11-10T20:00:00.000Z",
    "id" : "0qZRO000000003o",
    "recordAlertCategoryName" : "Fraud",
    "severity" : "Error",
    "source" : "Internal",
    "subject" : "Fraud Transaction 3",
    "validUntilDate" : "2022-11-08T20:00:00.000Z",
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
    "description" : "Apex alert description from an external system",
    "severity" : "Test",
    "source" : "External",
    "sourceSystemId" : "sourceSystemId",
    "subject" : "Subject",
    "whatId" : "a0URO000000Ccbz2AC"
  } ]
}
```

## Related Topics

- Record Alert Collection (atlas.en-us.psc_api.meta/psc_api/connect_responses_record_alert_collection.htm)
