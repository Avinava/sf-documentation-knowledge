---
title: "Care Request Case"
domain: life-sciences-dev-guide
topic: care-request-case
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:42.620Z
estimatedTokens: 683
keywords: [Care, Case]
---

# Care Request Case

> Case related to the care request.

# Care Request Case

Case related to the care request.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| accountName | String | Name of the account. | Big, 46.0 | 46.0 |
| caseNumber | String | Case number. | Big, 46.0 | 46.0 |
| caseOrigin | String | The source of the case, such as Email, Phone, or Web. Maps to: Case.Origin | Big, 46.0 | 46.0 |
| caseOwner | String | Case owner. | Big, 46.0 | 46.0 |
| caseReason | String | The reason why the case was created, such as Instructions not clear, or User didn’t attend training. Maps to: Case.Reason | Big, 46.0 | 46.0 |
| closed | Boolean | Indicates if the case is closed. | Big, 46.0 | 46.0 |
| contactName | String | Contact Name. | Big, 46.0 | 46.0 |
| createdBy | String | Case created by. | Big, 46.0 | 46.0 |
| dateClosed | String | Date and time when the case was closed. | Big, 46.0 | 46.0 |
| dateOpened | String | Date and time when the case was opened. | Big, 46.0 | 46.0 |
| description | String | A text description of the case. | Big, 46.0 | 46.0 |
| escalated | Boolean | Indicates if the case is escalated. | Big, 46.0 | 46.0 |
| lastModifiedBy | String | Last modified by. | Big, 46.0 | 46.0 |
| lastModifiedDate | String | Last modified date of the case. | Big, 46.0 | 46.0 |
| lastReferencedDate | String | Last referenced date of the case. | Big, 46.0 | 46.0 |
| lastViewedDate | String | Last viewed date of the case. | Big, 46.0 | 46.0 |
| parentCase | String | Parent Case. | Big, 46.0 | 46.0 |
| priority | String | The importance or urgency of the case, such as High, Medium, or Low. Maps to: Case.Priority | Big, 46.0 | 46.0 |
| status | String | The status of the case. Maps to: Case.Status | Big, 46.0 | 46.0 |
| subject | String | The subject of the case. Maps to: Case.Subject | Big, 46.0 | 46.0 |
| type | String | The type of case, such as Feature Request or Question. Maps to: Case.Type | Big, 46.0 | 46.0 |
| webCompany | String | The company name that was entered when the case was created. This field can't be updated after the case has been created. Maps to: Case.SuppliedCompany | Big, 46.0 | 46.0 |
| webEmail | String | The email address that was entered when the case was created. This field can't be updated after the case has been created. Maps to: Case.SuppliedEmail | Big, 46.0 | 46.0 |
| webName | String | The name that was entered when the case was created. This field can't be updated after the case has been created. Maps to: Case.SuppliedName | Big, 46.0 | 46.0 |
| webPhone | String | The phone number that was entered when the case was created. This field can't be updated after the case has been created. Maps to: Case.SuppliedPhone | Big, 46.0 | 46.0 |
