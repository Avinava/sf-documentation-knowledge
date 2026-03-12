---
title: "BenefitAction"
domain: loyalty
topic: benefitaction
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:52.472Z
estimatedTokens: 837
keywords: [BenefitAction, action, triggered, automatically, benefit.This, extends, Metadata, inherits, fullName, File, Suffix, Directory, Location, Version, Special, benefit, API, version, 51.0, later]
---

# BenefitAction

> Represents details of an action that can be triggered for a benefit.
      This object is available in API version 51.0 and later.

# BenefitAction

Represents details of an action that can be triggered for a benefit. This object is available in API version 51.0 and later.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=loyalty)

#### Note

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported SOAP API Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Supported REST API Methods

DELETE, GET, HEAD, PATCH, POST, Query

## Special Access Rules

To use this object, the Loyalty Management license is required.

## Fields

| Field | Details |
| --- | --- |
| Description | TypetextareaPropertiesFilter, Group, Nillable, SortDescriptionThe description of the benefit action. |
| DeveloperName | TypestringPropertiesFilter, Group, SortDescriptionThe unique name of the object in the API. This name can contain only underscores and alphanumeric characters, and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. In managed packages, this field prevents naming conflicts on package installations. With this field, a developer can change the object’s name in a managed package and the changes are reflected in a subscriber’s organization. This field is automatically generated, but you can supply your own value if you create the record using the API.When creating large sets of data, always specify a unique DeveloperName for each record. If no DeveloperName is specified, performance may slow while Salesforce generates one for each record. |
| FlowDefinition | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe ID of the flow associated with the benefit action. The possible values depend on the flows defined in the org. |
| FlowInstance | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe flow associated with the benefit action. |
| FullName | TypestringPropertiesCreate, Group, NillableDescriptionThe full name of the associated in Metadata API.Query this field only if the query result contains no more than one record. Otherwise, an error is returned. If more than one record exists, use multiple queries to retrieve the records. This limit protects performance. |
| IsActive | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the benefit action is active.The default value is false. |
| IsBenefitExpirationAllowed | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the benefit action is allowed to expire the benefit.The default value is false. |
| IsBenefitUpdateAllowed | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the benefit action is allowed to update the benefit.The default value is false. |
| Language | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionThe language of the benefit action. |
| ManageableState | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionIndicates the manageable state of the specified component that is contained in a package.Possible values are:beta—Managed-Betadeleted—Managed-Proposed-Deleteddeprecated—Managed-Proposed-DeprecateddeprecatedEditable—SecondGen-Installed-Deprecatedinstalled—Managed-InstalledinstalledEditable—SecondGen-Installed-Editablereleased—Managed-Releasedunmanaged—Unmanaged |
| MasterLabel | TypestringPropertiesFilter, Group, SortDescriptionThe UI label of the benefit action. |
| MemberBenefitVariableName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe name of the input variable that stores the member benefit ID in the flow specified for the benefit action. The field is available in API version 52.0 and later. |
| Metadata | TypeBenefitActionPropertiesCreate, Nillable, UpdateDescriptionProvides access to the associated metadata type and related fields in Tooling API.Query this field only if the query result contains no more than one record. Otherwise, an error is returned. If more than one record exists, use multiple queries to retrieve the records. This limit protects performance. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe namespace prefix that is associated with this object. Each Developer Edition org that creates a managed package has a unique namespace prefix. Limit: 15 characters. You can refer to a component in a managed package by using the namespacePrefix__componentName notation. |
| ProcessType | TypepicklistPropertiesDefaulted on create, Filter, Group, Restricted picklist, SortDescriptionThe process type of the benefit action.Possible value is:LoyaltyThe default value is Loyalty. |
| Type | TypepicklistPropertiesDefaulted on create, Filter, Group, Restricted picklist, SortDescriptionThe type of the benefit action.Possible value is:FlowThe default value is Flow. |

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<BenefitAction xmlns="http://soap.sforce.com/2006/04/metadata">
   <description>Metadata API Test</description>
   <flowDefinition>test</flowDefinition>
   <isActive>true</isActive>
   <isBenefitExpirationAllowed>true</isBenefitExpirationAllowed>
   <isBenefitUpdateAllowed>true</isBenefitUpdateAllowed>
   <masterLabel>Test1</masterLabel>
   <processType>1</processType>
   <memberBenefitVariableName>test</memberBenefitVariableName>
   <benefitActionParameters>
      <name>test</name>
      <picklistName>Type</picklistName>
      <masterLabel>test</masterLabel>
      <dataType>Picklist</dataType>
      <objectName>Account</objectName>
      <parameterValues>
        <parameterValue>string</parameterValue>
      </parameterValues>
   </benefitActionParameters>
   <type>1</type>
</BenefitAction>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
   <types>
      <members>*</members>
      <name>BenefitAction</name>
   </types>
   <types>
      <members>test</members>
      <name>Flow</name>
   </types>
   <version>52.0</version>
</Package>
```
