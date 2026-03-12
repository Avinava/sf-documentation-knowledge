---
title: "ActionPlanTemplate"
domain: sfFieldRef
topic: actionplantemplate
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:46.259Z
estimatedTokens: 537
keywords: [ActionPlanTemplate, instance, action, plan, template, API, version, 44.0, later]
---

# ActionPlanTemplate

> Represents the instance of an action plan template. This object is
		available in API version 44.0 and later.

# ActionPlanTemplate

Represents the instance of an action plan template. This object is available in API version 44.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [ActionPlanTemplate](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_actionplantemplate.htm "HTML (New Window)") in the Education Cloud Developer Guide, Emergency Response Management Object Reference, Life Sciences Cloud Developer Guide, Object Reference for the Salesforce Platform, and Public Sector Solutions Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| ActionPlanType | Action Plan Type | picklist |  | 255 |  |  |
| Category | Category | picklist |  | 40 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| Description | Description | textarea |  | 255 |  |  |
| EstimatedCompletionDays | Estimated Completion Days | int | 9 |  |  |  |
| FileBasedTemplatePath | File Based Template Path | string |  | 255 |  |  |
| Id | Action Plan Template ID | id |  | 18 |  |  |
| IsAdHocItemCreationEnabled | Let users add items to action plans | boolean |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| SourceType | Source Type | picklist |  | 40 |  |  |
| Status | Status | picklist |  | 255 |  |  |
| Subcategory | Subcategory | picklist |  | 40 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TargetEntityType | Target Object | picklist |  | 255 |  |  |
| UniqueName | Unique Name | string |  | 80 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
