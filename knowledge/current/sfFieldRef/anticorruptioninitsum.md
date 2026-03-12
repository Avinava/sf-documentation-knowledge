---
title: "AntiCorruptionInitSum"
domain: sfFieldRef
topic: anticorruptioninitsum
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:47.140Z
estimatedTokens: 438
keywords: [AntiCorruptionInitSum, initiatives, taken, organization, communicate, train, employee, anti-corruption, policies, procedures]
---

# AntiCorruptionInitSum

> Represents information about the initiatives taken by an organization
         to communicate and train the employee on anti-corruption policies and procedures.

# AntiCorruptionInitSum

Represents information about the initiatives taken by an organization to communicate and train the employee on anti-corruption policies and procedures.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see AntiCorruptionInitSum in the Net Zero Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| Country | Country | picklist |  | 255 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Description | Description | textarea |  | 32000 |  |  |
| DisclsReportingPeriodId | Disclosure Reporting Period ID | reference |  | 18 |  |  |
| EmployeeType | Employee Type | picklist |  | 40 |  |  |
| Id | Anti-Corruption Initiative Summary ID | id |  | 18 |  |  |
| InitiativeType | Initiative Type | picklist |  | 40 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| RecipientCategory | Recipient Category | picklist |  | 40 |  |  |
| RecipientCount | Recipient Count | double |  |  | 10 | 0 |
| RecipientPercentage | Recipient Percentage | percent |  |  | 13 | 3 |
| Region | Region | picklist |  | 40 |  |  |
| SubsidiaryAccountId | Account ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
