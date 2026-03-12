---
title: "AuthorizationFormText"
domain: sfFieldRef
topic: authorizationformtext
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:49.304Z
estimatedTokens: 471
keywords: [AuthorizationFormText, authorization, form’s, text, language, settings, API, version, 46.0, later]
---

# AuthorizationFormText

> Represents an authorization form’s text and language settings.
		This object is available in API version 46.0 and later.

# AuthorizationFormText

Represents an authorization form’s text and language settings. This object is available in API version 46.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [AuthorizationFormText](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_authorizationformtext.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AuthorizationFormId | Authorization Form ID | reference |  | 18 |  |  |
| ContentDocumentId | Content Document ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| DetailAuthorizationFormText | Detail Authorization Form Text | textarea |  | 32768 |  |  |
| FullAuthorizationFormUrl | Full Authorization Form URL | string |  | 255 |  |  |
| Id | Authorization Form Text ID | id |  | 18 |  |  |
| IsActive | Is Active | boolean |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsReadOnly | Is Read Only | boolean |  |  |  |  |
| LastActivationDateTime | Last Activation Date Time | datetime |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Locale | Locale | picklist |  | 255 |  |  |
| LocaleSelection | Locale | picklist |  | 255 |  |  |
| Name | Name | string |  | 255 |  |  |
| SummaryAuthFormText | Summary Auth Form Text | string |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
