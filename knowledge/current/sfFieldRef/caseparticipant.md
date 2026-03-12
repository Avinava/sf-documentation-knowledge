---
title: "CaseParticipant"
domain: sfFieldRef
topic: caseparticipant
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:52.668Z
estimatedTokens: 498
keywords: [CaseParticipant, junction, case, account, contact, stores, participant, associated, applicant, co-applicant, household, business, API, version, 54.0]
---

# CaseParticipant

> Represents a junction between a case, and an account or a contact. This
         object stores the details of the participant associated with a case. This participant could
         be the applicant, co-applicant, a household, or even a business account. This object
      is available in API version 54.0 and later.

# CaseParticipant

Represents a junction between a case, and an account or a contact. This object stores the details of the participant associated with a case. This participant could be the applicant, co-applicant, a household, or even a business account. This object is available in API version 54.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [CaseParticipant](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_caseparticipant.htm "HTML (New Window)") in the Case Management Guide, Object Reference for the Salesforce Platform, and Public Sector Solutions Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AuthorizationProof | Authorization Proof | picklist |  | 40 |  |  |
| CaseId | Case ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| Id | Case Participant ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| ParticipantId | Participant ID | reference |  | 18 |  |  |
| PreferredCallTimeFrom | Preferred Contact Start Time | time |  |  |  |  |
| PreferredCallTimeTo | Preferred Contact End Time | time |  |  |  |  |
| PreferredCommunicationMode | Preferred Communication Mode | picklist |  | 40 |  |  |
| Role | Role | picklist |  | 40 |  |  |
| Status | Status | picklist |  | 40 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
