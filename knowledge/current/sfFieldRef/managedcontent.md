---
title: "ManagedContent"
domain: sfFieldRef
topic: managedcontent
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:03.648Z
estimatedTokens: 443
keywords: [ManagedContent, managed, content, Salesforce, CMS, workspace, Experience, Cloud, site, channel, instance, record, consistent, identifier, variants]
---

# ManagedContent

> Represents managed content in a Salesforce CMS workspace for use in an
         Experience Cloud site or a channel. The ManagedContent object represents the complete
         instance of a managed content record. It provides a consistent identifier for the managed
         content so that variants of the content item can be created over time. This object is
      available in API version 56.0 and later.

# ManagedContent

Represents managed content in a Salesforce CMS workspace for use in an Experience Cloud site or a channel. The ManagedContent object represents the complete instance of a managed content record. It provides a consistent identifier for the managed content so that variants of the content item can be created over time. This object is available in API version 56.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [ManagedContent](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_managedcontent.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| ApiName | API Name | string |  | 80 |  |  |
| AuthoredManagedContentSpaceId | Managed Content Space ID | reference |  | 18 |  |  |
| ContentKey | Content Key | string |  | 80 |  |  |
| ContentTypeFullyQualifiedName | Content Type Fully Qualified Name | string |  | 255 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| ExternalId | External Id | string |  | 255 |  |  |
| Id | Managed Content ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| PrimaryLanguage | Primary Language | picklist |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
