---
title: "PlatformAction"
domain: sfFieldRef
topic: platformaction
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:08.400Z
estimatedTokens: 627
keywords: [PlatformAction, virtual, read-only, query, actions, user, context, device, record, Examples, include, standard, custom, buttons, quick]
---

# PlatformAction

> PlatformAction is a virtual read-only object. It enables you to query
   for actions displayed in the UI, given a user, a context, device format, and a record ID.
   Examples include standard and custom buttons, quick actions, and productivity
  actions.

# PlatformAction

PlatformAction is a virtual read-only object. It enables you to query for actions displayed in the UI, given a user, a context, device format, and a record ID. Examples include standard and custom buttons, quick actions, and productivity actions.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [PlatformAction](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_platformaction.htm "HTML (New Window)") in the Actions Developer Guide and Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| ActionListContext | Action List Context | picklist |  | 255 |  |  |
| ActionTarget | Action Target | textarea |  | 2048 |  |  |
| ActionTargetType | Action Target Type | picklist |  | 255 |  |  |
| ApiName | API Name | string |  | 255 |  |  |
| Category | Category | picklist |  | 255 |  |  |
| ConfirmationMessage | Confirmation Message | string |  | 255 |  |  |
| DeviceFormat | Device Format | picklist |  | 255 |  |  |
| ExternalId | Platform Action ID | string |  | 255 |  |  |
| GroupId | Group ID | reference |  | 18 |  |  |
| IconContentType | Icon Content Type | string |  | 255 |  |  |
| IconHeight | Icon Height | int | 9 |  |  |  |
| IconUrl | Icon URL | url |  | 255 |  |  |
| IconWidth | Icon Width | int | 9 |  |  |  |
| Id | Not used ID | id |  | 18 |  |  |
| InvocationStatus | Invocation Status | picklist |  | 255 |  |  |
| InvokedByUserId | User ID | reference |  | 18 |  |  |
| IsGroupDefault | Is Group Default | boolean |  |  |  |  |
| IsMassAction | Is Mass Action | boolean |  |  |  |  |
| Label | Label | string |  | 255 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| OpenType | Open Type | picklist |  | 255 |  |  |
| PrimaryColor | Primary Color | string |  | 255 |  |  |
| RelatedListRecordId | Related List Record ID | string |  | 255 |  |  |
| RelatedSourceEntity | Related Source Entity | string |  | 255 |  |  |
| RetrievalMode | Retrieval Mode | picklist |  | 255 |  |  |
| Section | Section | picklist |  | 255 |  |  |
| SourceEntity | Source Entity | string |  | 255 |  |  |
| Subtype | Subtype | string |  | 255 |  |  |
| TargetObject | Target Object | string |  | 255 |  |  |
| TargetUrl | Target URL | string |  | 2048 |  |  |
| Type | Type | picklist |  | 255 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
