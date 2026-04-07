---
title: "CareTaskDetail"
domain: sfFieldRef
topic: caretaskdetail
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:39:33.137Z
estimatedTokens: 299
keywords: [CareTaskDetail, extra, healthcare-related, task, detail, record, code, API, 61.0]
---

> Represents extra details about a healthcare-related task such as the detail
         type, detail record, detail code, and detail value. This object is available in API
      version 61.0 and later.

# CareTaskDetail

Represents extra details about a healthcare-related task such as the detail type, detail record, detail code, and detail value. This object is available in API version 61.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see CareTaskDetail in the Life Sciences Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CareTaskId | Care Task ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| DetailType | Detail Type | picklist |  | 255 |  |  |
| Id | Care Task Detail ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
