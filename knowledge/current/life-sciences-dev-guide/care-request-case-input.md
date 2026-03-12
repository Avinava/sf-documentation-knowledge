---
title: "Care Request Case Input"
domain: life-sciences-dev-guide
topic: care-request-case-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:42.111Z
estimatedTokens: 466
keywords: [Care, Case, Input]
---

# Care Request Case Input

> Case related to the care request.

# Care Request Case Input

Case related to the care request.

Root XML tag

<case>

Properties

| Name | Type | Description | Required | Available Version |
| --- | --- | --- | --- | --- |
| caseOrigin | String | The source of the case, such as Email, Phone, or Web. Maps to: Case.Origin | Yes | 46.0 |
| caseReason | String | The reason why the case was created, such as Instructions not clear, or User didn’t attend training. Maps to: Case.Reason | No | 46.0 |
| description | String | A text description of the case. Limit: 32 KB. Maps to: Case.Description | No | 46.0 |
| parentCaseNumber | String | The ID of the parent case in the hierarchy. Maps to: Case.ParentId | No | 46.0 |
| priority | String | The importance or urgency of the case, such as High, Medium, or Low. Maps to: Case.Priority | No | 46.0 |
| status | String | The status of the case. Maps to: Case.Status | No | 46.0 |
| subject | String | The subject of the case. Limit: 255 characters. Maps to: Case.Subject | Yes | 46.0 |
| type | String | The type of case, such as Feature Request or Question. Maps to: Case.Type | No | 46.0 |
| suppliedCompany | String | The company name that was entered when the case was created. This field can't be updated after the case has been created. Maps to: Case.SuppliedCompany | No | 46.0 |
| suppliedEmail | String | The email address that was entered when the case was created. This field can't be updated after the case has been created. Maps to: Case.SuppliedEmail | No | 46.0 |
| suppliedName | String | The name that was entered when the case was created. This field can't be updated after the case has been created. Maps to: Case.SuppliedName | No | 46.0 |
| suppliedPhone | String | The phone number that was entered when the case was created. This field can't be updated after the case has been created. Maps to: Case.SuppliedPhone | No | 46.0 |
