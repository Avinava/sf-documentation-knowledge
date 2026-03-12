---
title: "ExtDataShare"
domain: sfFieldRef
topic: extdatashare
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:57.716Z
estimatedTokens: 496
keywords: [ExtDataShare, data, share, collection, Cloud, objects, shared, orgs, third-party, partners, API, version, 56.0, later]
---

# ExtDataShare

> Represents a data share, which is a collection of Data Cloud objects that can
         be shared with other Data Cloud orgs or third-party partners. This object is available
      in API version 56.0 and later.

# ExtDataShare

Represents a data share, which is a collection of Data Cloud objects that can be shared with other Data Cloud orgs or third-party partners. This object is available in API version 56.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [ExtDataShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_extdatashare.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| DataShareConsentFormStatus | Consent | picklist |  | 255 |  |  |
| DataShareStatus | Data Share Status | picklist |  | 255 |  |  |
| DataShareType | Data Share Type | picklist |  | 255 |  |  |
| DataSpaceId | Data Space ID | reference |  | 18 |  |  |
| Id | Data Share ID | id |  | 18 |  |  |
| InboundDataShareName | Inbound Data Share Name | string |  | 255 |  |  |
| InboundDataShareOrgIdentifier | Inbound Data Share Organization Id | string |  | 255 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastDataChangeStatusDateTime | Last Data Change Status At | datetime |  |  |  |  |
| LastDataChangeStatusErrorCode | Last Data Change Status Error Code | string |  | 255 |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Data Share Name | string |  | 255 |  |  |
| ObjectCount | Number Of Objects | int | 9 |  |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
