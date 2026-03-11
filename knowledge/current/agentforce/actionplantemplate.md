---
title: "ActionPlanTemplate"
domain: agentforce
topic: actionplantemplate
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:08:17.695Z
keywords: [ActionPlanTemplate, Parent, Type, File, Suffix, Directory, Location, Version, Special, Access, Rules, Fields, ActionPlanTemplateItem, ActionPlanTemplateItemDependency, ActionPlanTemplateItemValue, Declarative, Metadata, Sample, Definition, Wildcard]
---

# ActionPlanTemplate

# ActionPlanTemplate

Represents the instance of an action plan template.

## Parent Type

This type extends the Metadata metadata type and inherits its fullName field.

## File Suffix and Directory Location

ActionPlanTemplate components have the suffix .apt and are stored in the actionPlanTemplates folder.

## Version

Action Plan Template components are available in API version 47.0 and later.

## Special Access Rules

To create or access action plan templates, you must have the Customize Application permission and the IndustriesActionPlans license.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| actionPlanTemplateItem | ActionPlanTemplateItem | The instance of an item on an action plan template version. |
| actionPlanTemplateItemDependencies | ActionPlanTemplateItemDependency[] | Defines the dependencies between action plan template items. Available in API version 59.0 and later. |
| actionPlanType | ActionPlanTemplateType (enumeration of type string) | Type of the action plan template. Valid values are:IndustriesRetailITSM—Available in API version 65.0 and later.PrvdEngmtComplianceKAMAvailable in API version 63.0 and later. |
| category | string | Category for this action plan template. Available in API version 64.0 and later. |
| description | string | The description of the action plan template. |
| estimatedCompletionDays | int | Estimated number of days required to complete the action plan. Available in API version 64.0 and later. |
| fileBasedTemplatePath | string | File path for a file-based action plan template. Available in API version 64.0 and later. |
| isAdHocItemCreationEnabled | boolean | Required. Indicates whether ad hoc item creation is enabled for this action plan template (true) or not (false). Available in API version 59.0 and later. |
| name | string | Required. The name of the action plan template. |
| ParentTemplateId | reference | The ID of the parent Action Plan Template record. This field is a relationship field to the ParentTemplate and refers to ActionPlanTemplate. Available in API version 66.0 and later. |
| sourceType | string | Source type of the action plan template. Available in API version 64.0 and later. |
| status | string | Status of the action plan template. Available in API version 64.0 and later. |
| subcategory | string | Subcategory for this action plan template. Available in API version 64.0 and later. |
| targetEntityType | string | Required. The parent object this action plan template relates to. Supported parent objects are Account, BusinessMilestone, Campaign, Case, Claim, Contact, Contract, InsurancePolicy, InsurancePolicyCoverage, Lead, Opportunity, PersonLifeEvent, and Visit and custom objects with activities enabled. |
| uniqueName | string | Required. The unique identifier for this action plan template record. |

## ActionPlanTemplateItem

Represents the instance of an item on an action plan template version.

| Field Name | Field Type | Description |
| --- | --- | --- |
| actionPlanTemplateItemValue | ActionPlanTemplateItemValue | The value associated with the action plan template item. |
| displayOrder | int | The order in which this item is displayed within the action plan template version. |
| isRequired | boolean | Indicates whether the task created from this template item is required. |
| itemEntityType | string | Required. The name of the field on the action plan template item that this value is for. Available in API version 48.0 and later. |
| name | string | Required. The name of the action plan template item. |
| uniqueName | string | Required. The unique identifier for this action plan template item record. |

## ActionPlanTemplateItemDependency

Represents a dependency between action plan template items, defining the sequential relationship and creation timing of items. Available in API version 59.0 and later.

| Field Name | Field Type | Description |
| --- | --- | --- |
| creationType | string | Required. Defines how the dependent item is created in the action plan. |
| name | string | Required. Name of the dependency relationship. |
| previousTemplateItem | ActionPlanTemplateItem | Required. Reference to the prerequisite template item that must be completed before the dependent item begins. |
| templateItem | ActionPlanTemplateItem | Required. Reference to the dependent template item that relies on the completion of the previous item. |

## ActionPlanTemplateItemValue

Represents the value associated with an action plan template item.

| Field Name | Field Type | Description |
| --- | --- | --- |
| itemEntityType | string | Required. The name of the field on the action plan template item that this value is for. Available in API version 48.0 and later. |
| name | string | Required. The name of the action plan template item value. |
| valueFormula | string | The formula for this action plan template item. |
| valueLiteral | string | The value for this action plan template item. |

## Declarative Metadata Sample Definition

The following is an example of an ActionPlanTemplate component.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/file_based.htm "HTML (New Window)").