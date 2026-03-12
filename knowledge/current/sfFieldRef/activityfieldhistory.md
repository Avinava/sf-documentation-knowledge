---
title: "ActivityFieldHistory"
domain: sfFieldRef
topic: activityfieldhistory
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:46.417Z
estimatedTokens: 437
keywords: [ActivityFieldHistory, change, tracked, big, API, version, 55.0, later]
---

# ActivityFieldHistory

> Represents a change in a field value for a tracked object or field.
      This object is a big
      object. This object is available in API version 55.0 and later.

# ActivityFieldHistory

Represents a change in a field value for a tracked object or field. This object is a big object. This object is available in API version 55.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [ActivityFieldHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_activityfieldhistory.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| ActivityId | Task or Event ID | reference |  | 18 |  |  |
| ChangedById | User ID | reference |  | 18 |  |  |
| ChangedDate | Changed Date | datetime |  |  |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| DataType | Data Type | picklist |  | 255 |  |  |
| FieldName | Field | string |  | 120 |  |  |
| Id | Entity History ID | id |  | 18 |  |  |
| IsDataAvailable | Data Available | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| NewValueDateTime | New Date | datetime |  |  |  |  |
| NewValueNumber | New Number Val | double |  |  | 18 | 0 |
| NewValueText | New String Val | string |  | 4000 |  |  |
| OldValueDateTime | Old Date | datetime |  |  |  |  |
| OldValueNumber | Old Number Val | double |  |  | 18 | 0 |
| OldValueText | Old String Val | string |  | 4000 |  |  |
| Operation | Change Operation | picklist |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
