---
title: "AuthorizationFormConsent"
domain: sfFieldRef
topic: authorizationformconsent
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:49.263Z
estimatedTokens: 551
keywords: [AuthorizationFormConsent, date, way, user, consented, authorization, form, API, version, 46.0, later]
---

# AuthorizationFormConsent

> Represents the date and way in which a user consented to an
			authorization form. This object is available in API version 46.0 and
		later.

# AuthorizationFormConsent

Represents the date and way in which a user consented to an authorization form. This object is available in API version 46.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [AuthorizationFormConsent](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_authorizationformconsent.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AuthorizationFormTextId | Authorization Form Text ID | reference |  | 18 |  |  |
| Browser | Browser | string |  | 255 |  |  |
| ConsentCapturedDateTime | Consent Captured Date Time | datetime |  |  |  |  |
| ConsentCapturedSource | Consent Captured Source | string |  | 255 |  |  |
| ConsentCapturedSourceType | Consent Captured Source Type | picklist |  | 255 |  |  |
| ConsentExpirationDateTime | Consent Expiration Date Time | datetime |  |  |  |  |
| ConsentGiverId | Consent Giver ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| DocumentVersionId | Content Version ID | reference |  | 18 |  |  |
| Email | Email | email |  | 80 |  |  |
| Id | Authorization Form Consent ID | id |  | 18 |  |  |
| InfoAuthRequestFormId | Info Authorization Request Form ID | reference |  | 18 |  |  |
| Ip | IP | string |  | 39 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Location | Location | string |  | 255 |  |  |
| Name | Name | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| RelatedRecordId | Related Record ID | reference |  | 18 |  |  |
| Status | Status | picklist |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
