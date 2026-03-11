---
title: "Record Alerts (GET)"
domain: omnistudio
topic: record-alerts-get
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:25:08.854Z
keywords: [Record, Alerts, GET]
---

# Record Alerts (GET)

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

[Record Alert Collection](atlas.en-us.industries_reference.meta/industries_reference/connect_responses_record_alert_collection.htm "Output representation of a collection of record alerts.")

JSON example of response body

```

```