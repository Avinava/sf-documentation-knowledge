---
title: "Party Profile Risk Input"
domain: omnistudio
topic: party-profile-risk-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:25:08.439Z
keywords: [Party, Profile, Risk, Input]
---

# Party Profile Risk Input

# Party Profile Risk Input

Input representation of the details of the party profile risk.

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| customFields | Custom Fields Input[] | Custom fields related to the party profile risk. | Optional | 61.0 |
| isRisk​Overridden | Boolean | Indicates whether the risk assessment result of the party was overridden (true) or not (false). | Optional | 61.0 |
| name | String | Name of the party profile risk record. | Required | 61.0 |
| overridden​RiskCategory | String | Risk category that's overridden for a party after the assessment is complete. | Optional | 61.0 |
| recordTypeId | String | ID of the record type assigned to this object. | Optional | 61.0 |
| riskCategory | String | Risk category that's assigned to a party profile after the assessment is complete. | Optional | 61.0 |
| riskOverridden​ById | String | User who overrode the risk assessment result of the party. | Optional | 61.0 |
| riskOverride​Reason | String | Reason for overriding the risk assessment result. | Optional | 61.0 |
| type | String | Type of risk assessment. | Optional | 61.0 |