---
title: "FldSvcObjChgDtl"
domain: sfFieldRef
topic: fldsvcobjchgdtl
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:58.211Z
estimatedTokens: 316
keywords: [FldSvcObjChgDtl, change, made, service, appointment’s, tracked, API, version, 63.0, later]
---

# FldSvcObjChgDtl

> Represents the details of a change made to one of a service appointment’s
         tracked fields. This object is available in API version 63.0 and later.

# FldSvcObjChgDtl

Represents the details of a change made to one of a service appointment’s tracked fields. This object is available in API version 63.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [FldSvcObjChgDtl](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_fldsvcobjchgdtl.htm "HTML (New Window)") in the Field Service Developer Guide and Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| FieldChangedName | Field Changed Name | string |  | 40 |  |  |
| FieldChangedValue | Field Changed Value | string |  | 1000 |  |  |
| FldSvcObjChgId | Field Service Object Change ID | reference |  | 18 |  |  |
| Id | Field Service Object Change Detail ID | id |  | 18 |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
