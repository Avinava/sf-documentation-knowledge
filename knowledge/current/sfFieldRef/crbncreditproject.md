---
title: "CrbnCreditProject"
domain: sfFieldRef
topic: crbncreditproject
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:54.896Z
estimatedTokens: 602
keywords: [CrbnCreditProject, environmental, project, generates, carbon, credits, removing, greenhouse, gasses, preventing, certain, quantity, released]
---

# CrbnCreditProject

> Represents information about the environmental project that generates carbon
         credits by removing greenhouse gasses or preventing a certain quantity of greenhouse gasses
         from being released.

# CrbnCreditProject

Represents information about the environmental project that generates carbon credits by removing greenhouse gasses or preventing a certain quantity of greenhouse gasses from being released.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see CrbnCreditProject in the Net Zero Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AdditionalBenefits | Additional Benefits | multipicklist |  | 4099 | 0 |  |
| Country | Country | picklist |  | 255 |  |  |
| CrbnCrMethodology | Carbon Credit Methodology | string |  | 80 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Description | Description | textarea |  | 4000 |  |  |
| DeveloperAccountId | Supplier ID | reference |  | 18 |  |  |
| ExternalIdentifier | External Identifier | string |  | 80 |  |  |
| FundedBy | Funded By | string |  | 255 |  |  |
| Id | Carbon Credit Project ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| MitigationType | Mitigation Type | picklist |  | 40 |  |  |
| Name | Name | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| ProjRegistryIdentifier | Project Registry Identifier | string |  | 80 |  |  |
| ProjectType | Project Type | picklist |  | 40 |  |  |
| ProjectUrl | Project URL | url |  | 255 |  |  |
| Region | Region | picklist |  | 40 |  |  |
| StandardsAgencyName | Standards Agency Name | picklist |  | 40 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TotalCrbnCrAllocInTco2e | Total Carbon Credits Allocated (tCO2e) | double |  |  | 18 | 2 |
| TotalCrbnCrAvlInTco2e | Total Carbon Credits Available (tCO2e) | double |  |  | 18 | 2 |
| TotalCrbnCrPurchInTco2e | Total Carbon Credits Purchased (tCO2e) | double |  |  | 18 | 0 |
| TotalSpend | Total Spend | currency |  |  | 18 | 0 |
| VerifiedBy | Verified By | string |  | 255 |  |  |
| VoluntaryRegistryName | Voluntary Registry Name | string |  | 80 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
