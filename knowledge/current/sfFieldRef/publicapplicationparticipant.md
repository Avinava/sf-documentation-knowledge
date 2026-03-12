---
title: "PublicApplicationParticipant"
domain: sfFieldRef
topic: publicapplicationparticipant
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:10.847Z
estimatedTokens: 427
keywords: [PublicApplicationParticipant, junction, individual, application, business, license, account, contact, stores, participants, associated, participant, applicant, co-applicant, household]
---

# PublicApplicationParticipant

> Represents a junction between an individual application or business license
         application, and an account or a contact. This object stores the details of the
         participants associated with an application. This participant could be the applicant,
         co-applicant, a household, or even a business account that is added to an application.
      This object is available in API version 58.0 and later.

# PublicApplicationParticipant

Represents a junction between an individual application or business license application, and an account or a contact. This object stores the details of the participants associated with an application. This participant could be the applicant, co-applicant, a household, or even a business account that is added to an application. This object is available in API version 58.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see PublicApplicationParticipant in the Public Sector Solutions Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| ApplicationId | Application ID | reference |  | 18 |  |  |
| BenefitEligibilityStatus | Benefit Eligibility Status | picklist |  | 40 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| Id | Public Application Participant ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| ParticipantId | Participant ID | reference |  | 18 |  |  |
| RelationshipType | Relationship Type | picklist |  | 40 |  |  |
| Role | Role | picklist |  | 40 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
