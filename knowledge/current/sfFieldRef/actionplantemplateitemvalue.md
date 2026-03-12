---
title: "ActionPlanTemplateItemValue"
domain: sfFieldRef
topic: actionplantemplateitemvalue
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:46.289Z
estimatedTokens: 448
keywords: [ActionPlanTemplateItemValue, associated, action, plan, template, item, API, version, 44.0, later]
---

# ActionPlanTemplateItemValue

> Represents the value associated with an action plan template item.
		This object is available in API version 44.0 and later.

# ActionPlanTemplateItemValue

Represents the value associated with an action plan template item. This object is available in API version 44.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [ActionPlanTemplateItemValue](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_actionplantemplateitemvalue.htm "HTML (New Window)") in the Life Sciences Cloud Developer Guide, Object Reference for the Salesforce Platform, and Public Sector Solutions Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| ActionPlanTemplateItemId | Action Plan Template Item ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| Id | Action Plan Template Item Value ID | id |  | 18 |  |  |
| IsActive | Is Active | boolean |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| ItemEntityFieldName | Field Name | picklist |  | 255 |  |  |
| ItemEntityType | Item Entity Type | picklist |  | 255 |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Item Value Name | string |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| ValueFormula | Field Value - Dynamic | string |  | 255 |  |  |
| ValueLiteral | Field Value - Static | textarea |  | 32000 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
