---
title: "EmssnRdctnCommitment"
domain: sfFieldRef
topic: emssnrdctncommitment
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:57.074Z
estimatedTokens: 589
keywords: [EmssnRdctnCommitment, company's, commitment, reducing, carbon, emissions, line, Paris, Agreement’s, goal, achieve, low-carbon, future, companies, sign]
---

# EmssnRdctnCommitment

> Represents information about a company's commitment to reducing its carbon emissions. This commitment is in line with the Paris Agreement’s goal to achieve a low-carbon future. For example, companies sign the Business Ambition for 1.5°C commitment letter and commit to set emission reduction targets to limit temperature rise to 1.5°C above pre-industrial levels.

# EmssnRdctnCommitment

Represents information about a company's commitment to reducing its carbon emissions. This commitment is in line with the Paris Agreement’s goal to achieve a low-carbon future. For example, companies sign the Business Ambition for 1.5°C commitment letter and commit to set emission reduction targets to limit temperature rise to 1.5°C above pre-industrial levels.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see EmssnRdctnCommitment in the Net Zero Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| ApprovalDate | Approval Date | date |  |  |  |  |
| CommitmentLetterId | ContentDocument ID | reference |  | 18 |  |  |
| CommitmentProgram | Commitment Program | picklist |  | 255 |  |  |
| CommitmentType | Commitment Type | picklist |  | 255 |  |  |
| CompanyBusinessRegion | Company Business Region | picklist |  | 40 |  |  |
| CompanyEmployeeCount | Company Employee Count | int | 9 |  |  |  |
| CompanySector | Company Sector | multipicklist |  | 4099 | 0 |  |
| CompanyType | Company Type | picklist |  | 255 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CustomCommitmentProgram | Custom Commitment Program | string |  | 255 |  |  |
| CustomCommitmentType | Custom Commitment Type | string |  | 255 |  |  |
| Id | Emissions Reduction Commitment ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsSmallandMediumEnterprise | Small and medium enterprise | boolean |  |  |  |  |
| IsTargetUsedForForecasting | Target used for forecasting | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| PrimaryContactId | Contact ID | reference |  | 18 |  |  |
| Status | Status | picklist |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TargetSettingDueDate | Target Setting Due Date | date |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
