---
title: "ActionableListDefinition"
domain: omnistudio
topic: actionablelistdefinition
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:50.524Z
estimatedTokens: 1475
keywords: [ActionableListDefinition, data, source, definition, associated, actionable, Parent, File, Suffix, Directory, Location, Version, ActionableListDatasetColumn, ActionableListMemberStatus, Declarative]
---

# ActionableListDefinition

> Represents the data source definition details
			associated with an actionable list.

# ActionableListDefinition

Represents the data source definition details associated with an actionable list.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=industries_reference)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Parent Type

This type extends the Metadata metadata type and inherits its fullName field.

## File Suffix and Directory Location

ActionableListDefinition components have the suffix .actionableListDefinition and are stored in the actionableListDefinitions folder.

## Version

ActionableListDefinition components are available in API version 57.0 and later.

## Fields

| Field Name | Description |
| --- | --- |
| actionableListDatasetColumns | Field TypeActionableListDatasetColumn[]DescriptionThe object that stores columns in a dataset associated with an actionable list. |
| actionableListMemberStatuses | Field TypeActionableListMemberStatus[]DescriptionThe object that stores the status and the corresponding status icon details of an individual actionable list member. |
| batchCalcJobDefinition | Field TypestringDescriptionThe batch calculation job definition that's associated with the creation of an actionable list. This field is a relationship field. |
| datasetName | Field TypestringDescriptionThe name of the dataset that is associated with the actionable list. |
| edgeMart | Field TypestringDescriptionThe edgemart dataset that's associated with the actionable list. Available in API version 58.0 and later. |
| isActive | Field TypebooleanDescriptionIndicates whether the actionable list definition is active (true) or not (false).The default value is false. |
| masterLabel | Field TypestringDescriptionRequired.The master label of the actionable list definition. |
| objectName | Field TypestringDescriptionRequired.The object for which the actionable list is created.Possible values are organized by the API version in which they were introduced. Values are available in all versions after introduction unless noted otherwise.Possible values are:API version 60.0 and later:PersonLifeEventAPI version 60.0 and later with Insurance Managed Package:ClaimInsurancePolicyQuoteAPI version 59.0 and later with Health Cloud:CareFacilityBedCareRequestCareRequestItemCareServiceVisitCareServiceVisitPlanClinicalServiceRequestAPI version 59.0 and later with Loyalty Cloud:LoyaltyProgramMemberAPI version 59.0 and later:CaseAPI version 58.0 and later with Automotive Cloud:VehicleAPI version 58.0 and later:AssetLeadOpportunityAPI version 57.0 and later:AccountContact |

## ActionableListDatasetColumn

Represents the information about the columns in a dataset associated with an actionable list.

| Field Name | Description |
| --- | --- |
| dataDomain | Field TypeDatasetColumnDataType (enumeration of type string)DescriptionThe data domain that is mapped to the data type of the dataset column.Possible values are:DatesDimensionsMeasures |
| dataType | Field TypeDatatableDataType (enumeration of type string)PropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe data type of the dataset column in the actionable list. Available in API version 58.0 and later.Possible values are:BooleanCurrencyDateDateTimeEmailLocationNumberPercentPhoneTextUrl |
| displayOrder | Field TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe order in which the actionable list dataset columns are displayed. Available in API version 58.0 and later. |
| isDefault | Field TypebooleanDescriptionIndicates whether the dataset column is added to the actionable list by default (true) or not (false).The default value is false. |
| isGroupedByListDefObj | Field TypebooleanDescriptionIndicates whether the dataset column is grouped by the object defined in the actionable list definition (true) or not (false). Available in API version 59.0 and later. |
| IsTypeAheadSearchEnabled | Field TypebooleanDescriptionIndicates whether the type-ahead search for filters is enabled (true) or not (false). Available in API version 60.0 and later. |
| objectName | Field TypestringDescriptionThe name of the object that's associated with the dataset column.Possible values are:API version 60.0 and later:PersonLifeEventAPI version 60.0 and later with Insurance Managed Package:ClaimInsurancePolicyQuoteAPI version 59.0 and later with Health Cloud:CareFacilityBedCareRequestCareRequestItemCareServiceVisitCareServiceVisitPlanClinicalServiceRequestAPI version 59.0 and later with Loyalty Cloud:LoyaltyProgramMemberAPI version 59.0 and later:CaseAPI version 58.0 and later with Automotive Cloud:VehicleAPI version 58.0 and later:AssetLeadOpportunityAPI version 57.0 and later:AccountContact |
| sourceColumnApiName | Field TypestringDescriptionThe API name of the column in the source dataset. |
| sourceFieldName | Field TypestringDescriptionThe name of the field in the object for which the actionable list dataset is created. |

## ActionableListMemberStatus

Represents the status and the corresponding status icon details of an individual actionable list member.

| Field Name | Description |
| --- | --- |
| iconName | Field TypestringDescriptionThe name of the icon that's mapped to the status. |
| status | Field TypestringDescriptionThe status of the actionable list member. |

## Declarative Metadata Sample Definition

The following is an example of a ActionableListDefinition component.

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
<ActionableListDefinition
	xmlns="http://soap.sforce.com/2006/04/metadata">
	<actionableListDatasetColumns>
		<isDefault>true</isDefault>
		<sourceFieldName>NewColumn1</sourceFieldName>
	</actionableListDatasetColumns>
	<actionableListDatasetColumns>
		<sourceColumnApiName>ApiName</sourceColumnApiName>
		<dataDomain>Dimensions</dataDomain>
		<isDefault>false</isDefault>
		<sourceFieldName>NewColumn2</sourceFieldName>
		<objectName>Account</objectName>
		<displayOrder>1</displayOrder>
		<dataType>Text</dataType>
	</actionableListDatasetColumns>
	<actionableListMemberStatuses>
		<iconName>NewMember1</iconName>
		<status>Active</status>
	</actionableListMemberStatuses>
	<isActive>true</isActive>
	<masterLabel>NewMember2</masterLabel>
	<objectName>Account</objectName>
	<isProtected>true</isProtected>
	<batchCalcJobDefinition>Test1</batchCalcJobDefinition>
	<datasetName>AccountDef</datasetName>
</ActionableListDefinition>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
   <types>
      <members>*</members>
      <name>ActionableListDefinition</name>
   </types>
   <version>66.0</version>
</Package>
```
