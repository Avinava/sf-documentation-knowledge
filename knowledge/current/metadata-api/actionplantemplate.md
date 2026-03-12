---
title: "ActionPlanTemplate"
domain: metadata-api
topic: actionplantemplate
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:36.573Z
estimatedTokens: 1427
keywords: [ActionPlanTemplate, Represents, instance, action, plan, template., Parent, File, Suffix, Directory, Location, Version, Special, Access, Rules, Fields, ActionPlanTemplateItem, ActionPlanTemplateItemDependency, ActionPlanTemplateItemValue, Declarative]
---

# ActionPlanTemplate

> Represents the instance of an action plan
    template.

# ActionPlanTemplate

Represents the instance of an action plan template.

## Parent Type

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

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

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<ActionPlanTemplate xmlns="http://soap.sforce.com/2006/04/metadata">
    <actionPlanTemplateItem>
        <actionPlanTemplateItemValue>
            <name>Subject</name>
            <valueLiteral>APT 01 Account Packaging APTI 01</valueLiteral>
            <itemEntityType>Task</itemEntityType>
        </actionPlanTemplateItemValue>
        <actionPlanTemplateItemValue>
            <name>Priority</name>
            <valueLiteral>Normal</valueLiteral>
            <itemEntityType>Task</itemEntityType>
        </actionPlanTemplateItemValue>
        <actionPlanTemplateItemValue>
            <name>ActivityDate</name>
            <valueFormula>StartDate + 10</valueFormula>
            <itemEntityType>Task</itemEntityType>
        </actionPlanTemplateItemValue>
        <displayOrder>1</displayOrder>
        <isRequired>true</isRequired>
        <itemEntityType>Task</itemEntityType>
        <name>APT 01 Account Packaging APTI 01</name>
        <uniqueName>APT_01_Account_Packaging_APTI_01_2827f387_9dbc_11e9_920a_e95716848ddd</uniqueName>
    </actionPlanTemplateItem>
    <actionPlanTemplateItem>
        <actionPlanTemplateItemValue>
            <name>Subject</name>
            <valueLiteral>APT 01 Account Packaging APTI 02</valueLiteral>
            <itemEntityType>Task</itemEntityType>
        </actionPlanTemplateItemValue>
        <actionPlanTemplateItemValue>
            <name>Priority</name>
            <valueLiteral>Normal</valueLiteral>
            <itemEntityType>Task</itemEntityType>
        </actionPlanTemplateItemValue>
        <actionPlanTemplateItemValue>
            <name>ActivityDate</name>
            <valueFormula>StartDate + 10</valueFormula>
            <itemEntityType>Task</itemEntityType>
        </actionPlanTemplateItemValue>
        <displayOrder>1</displayOrder>
        <isRequired>true</isRequired>
        <itemEntityType>Task</itemEntityType>
        <name>APT 01 Account Packaging APTI 02</name>
        <uniqueName>APT_01_Account_Packaging_APTI_02_3430da7b_9dbc_11e9_920a_b5d3292906c3</uniqueName>
    </actionPlanTemplateItem>
    <actionPlanTemplateItem>
        <actionPlanTemplateItemValue>
            <name>Subject</name>
            <valueLiteral>APT 01 Account Packaging APTI 03</valueLiteral>
            <itemEntityType>Task</itemEntityType>
        </actionPlanTemplateItemValue>
        <actionPlanTemplateItemValue>
            <name>Priority</name>
            <valueLiteral>Normal</valueLiteral>
            <itemEntityType>Task</itemEntityType>
        </actionPlanTemplateItemValue>
        <actionPlanTemplateItemValue>
            <name>ActivityDate</name>
            <valueFormula>StartDate + 10</valueFormula>
            <itemEntityType>Task</itemEntityType>
        </actionPlanTemplateItemValue>
        <displayOrder>1</displayOrder>
        <isRequired>true</isRequired>
        <itemEntityType>Task</itemEntityType>
        <name>APT 01 Account Packaging APTI 03</name>
        <uniqueName>APT_01_Account_Packaging_APTI_03_2d0363d9_9dbc_11e9_920a_219a003f176d</uniqueName>
    </actionPlanTemplateItem>
    <actionPlanTemplateItemDependencies>
        <name>APT Task Dependency</name>
        <creationType>OnPreviousItemCompleted</creationType>
        <previousTemplateItem>
            <actionPlanTemplateItemValue>
                <name>Subject</name>
                    <valueLiteral>APT 01 Account Packaging APTI 01</valueLiteral>
                    <itemEntityType>Task</itemEntityType>
                </actionPlanTemplateItemValue>
                <actionPlanTemplateItemValue>
                    <name>Priority</name>
                    <valueLiteral>Normal</valueLiteral>
                    <itemEntityType>Task</itemEntityType>
                </actionPlanTemplateItemValue>
                <actionPlanTemplateItemValue>
                    <name>ActivityDate</name>
                    <valueFormula>StartDate + 10</valueFormula>
                    <itemEntityType>Task</itemEntityType>
            </actionPlanTemplateItemValue>
            <displayOrder>1</displayOrder>
            <isRequired>true</isRequired>
            <itemEntityType>Task</itemEntityType>
            <name>APT 01 Account Packaging APTI 01</name>
            <uniqueName>APT_01_Account_Packaging_APTI_01_2827f387_9dbc_11e9_920a_e95716848ddd</uniqueName>
        </previousTemplateItem>
        <templateItem>
            <actionPlanTemplateItemValue>
            <name>Subject</name>
            <valueLiteral>APT 01 Account Packaging APTI 02</valueLiteral>
            <itemEntityType>Task</itemEntityType>
            </actionPlanTemplateItemValue>
            <actionPlanTemplateItemValue>
                <name>Priority</name>
                <valueLiteral>Normal</valueLiteral>
                <itemEntityType>Task</itemEntityType>
            </actionPlanTemplateItemValue>
            <actionPlanTemplateItemValue>
                <name>ActivityDate</name>
                <valueFormula>StartDate + 10</valueFormula>
                <itemEntityType>Task</itemEntityType>
            </actionPlanTemplateItemValue>
            <displayOrder>1</displayOrder>
            <isRequired>true</isRequired>
            <itemEntityType>Task</itemEntityType>
            <name>APT 01 Account Packaging APTI 02</name>
            <uniqueName>APT_01_Account_Packaging_APTI_02_3430da7b_9dbc_11e9_920a_b5d3292906c3</uniqueName>
        </templateItem>
    </actionPlanTemplateItemDependencies>
    <description>APT 01 Account Packaging Description</description>
    <name>APT 01 Account Packaging</name>
    <targetEntityType>Account</targetEntityType>
    <actionPlanType>Industries</actionPlanType>
    <uniqueName>APT_01_Account_Packaging_0c9e8b15_9dbc_11e9_920a_8d6ecf990219</uniqueName>
    <isAdHocItemCreationEnabled>false</isAdHocItemCreationEnabled>
    <category>Onboarding</category>
    <subcategory>OnBoarding Product</subcategory>
    <estimatedCompletionDays>4</estimatedCompletionDays>
    <sourceType>Migrated From SandBox</sourceType>
    <fileBasedTemplatePath>Action Plan Template</fileBasedTemplatePath>
    <status>Draft</status>
</ActionPlanTemplate>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>*</members>
        <name>ActionPlanTemplate</name>
    </types>
    <version>47.0</version>
</Package>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- enumeration (atlas.en-us.api_meta.meta/api_meta/meta_objects_intro.htm)
