---
title: "DigitalVerfSetupDetail"
domain: sfFieldRef
topic: digitalverfsetupdetail
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:56.145Z
estimatedTokens: 385
keywords: [DigitalVerfSetupDetail, Stores, contextual, digital, verification, setup, user, messages, display, time, API, version, 60.0, later]
---

# DigitalVerfSetupDetail

> Stores contextual details of a digital verification setup, such as the user who does
      the verification, and the messages that display at the time of verification. This object is
      available in API version 60.0 and later.

# DigitalVerfSetupDetail

Stores contextual details of a digital verification setup, such as the user who does the verification, and the messages that display at the time of verification. This object is available in API version 60.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see DigitalVerfSetupDetail in the Life Sciences Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| DesignatedVerifierId | Designated Verifier ID | reference |  | 18 |  |  |
| DigitalVerificationSetupId | Digital Verification Setup ID | reference |  | 18 |  |  |
| Id | Digital Verification Setup Detail ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| PostVerificationMessage | Post-Verification Message | textarea |  | 4000 |  |  |
| PreVerificationMessage | Pre-Verification Message | textarea |  | 4000 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| VerifierRank | Verifier Rank | picklist |  | 255 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
