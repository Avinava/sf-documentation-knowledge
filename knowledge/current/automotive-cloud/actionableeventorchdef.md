---
title: "ActionableEventOrchDef"
domain: automotive-cloud
topic: actionableeventorchdef
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:00.698Z
estimatedTokens: 711
keywords: [ActionableEventOrchDef, definition, actionable, event, orchestration, records, migrated, org, another, Parent, File, Suffix, Directory, Location, Version]
---

# ActionableEventOrchDef

> Represents the definition of an actionable event
			orchestration so that the records can be migrated from one org to another.

# ActionableEventOrchDef

Represents the definition of an actionable event orchestration so that the records can be migrated from one org to another.

## Parent Type

This type extends the Metadata metadata type and inherits its fullName field.

## File Suffix and Directory Location

ActionableEventOrchDef components have the suffix .actionableEventOrchDef and are stored in the ActionableEventOrchDef folder.

## Version

ActionableEventOrchDef components are available in API version 64.0 and later.

## Fields

| Field Name | Description |
| --- | --- |
| actionableEventUsageType | Field TypestringDescriptionThe usage type of the actionable event orchestration definition.Valid values are:Automotive—1Manufacturing—2Standard—3 |
| apiName | Field TypestringDescriptionRequired.The API name of the actionable event orchestration definition record. |
| contextDefinitionDeveloperName | Field TypestringDescriptionThe developer name of a context definition that's associated with the actionable event orchestration definition. |
| contextMappingTitle | Field TypestringDescriptionThe title of a context mapping that's associated with the actionable event orchestration definition. |
| eventCategory | Field TypestringDescriptionThe category of an actionable event orchestration definition. |
| eventSubtypeApiName | Field TypestringDescriptionThe API name of an actionable event orchestration definition subtype. |
| eventTypeApiName | Field TypestringDescriptionRequired.The API name of an actionable event orchestration definition type. |
| executionProcedureAPIName | Field TypestringDescriptionThe API name of the flow definition or the expression set template that executes the orchestration. |
| executionProcedureType | Field TypestringDescriptionSpecifies the type of automated procedure that executes the orchestration.Valid values are:ExpressionSetBasedOrchestration—1FlowBasedOrchestration—2 |
| isActive | Field TypebooleanDescriptionRequired.Specifies if an actionable event orchestration definition record is active (true) or not (false). The default value is false. |
| isTemplate | Field TypebooleanDescriptionRequired.Indicates whether the actionable event orchestration definition is a template (true) or not (false).The default value is false. |
| label | Field TypestringDescriptionRequired.The label of the actionable event orchestration definition record. |

## Declarative Metadata Sample Definition

The following is an example of an ActionableEventOrchDef component.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see Deploying and Retrieving Metadata with the Zip File.

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<ActionableEventOrchDef xmlns="http://soap.sforce.com/2006/04/metadata">
    <actionableEventUsageType>1</actionableEventUsageType>
    <apiName>Create_Asset_Registration</apiName>
    <contextDefinitionDeveloperName>AssetRegistrationCreateRecordDetails_stdctx</contextDefinitionDeveloperName>
    <contextMappingTitle>VehicleFaultEventDetailMapping</contextMappingTitle>
    <eventSubtypeApiName>Create_Registration_Records_SubType</eventSubtypeApiName>
    <eventTypeApiName>Create_Registration_Records</eventTypeApiName>
    <executionProcedureAPIName>CreateAssetFlow</executionProcedureAPIName>
    <executionProcedureType>2</executionProcedureType>
    <isActive>true</isActive>
    <label>Create Asset Registration</label>
</ActionableEventOrchDef>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>*</members>
        <name>ActionableEventOrchDef</name>
    </types>
<version>64.0</version>
</Package>
```
