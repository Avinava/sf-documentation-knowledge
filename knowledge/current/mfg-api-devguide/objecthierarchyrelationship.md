---
title: "ObjectHierarchyRelationship"
domain: mfg-api-devguide
topic: objecthierarchyrelationship
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:55.280Z
estimatedTokens: 1455
keywords: [ObjectHierarchyRelationship, organization’s, custom, mappings, sales, agreement, conversion, mapped, Opportunity, Quotes, SalesAgreement, SalesAgreementProduct, File, Suffix, Directory]
---

# ObjectHierarchyRelationship

> Represents an organization’s custom field mappings
      for sales agreement conversion. Fields can be mapped from Opportunity and Quotes to
      SalesAgreement and SalesAgreementProduct.

# ObjectHierarchyRelationship

Represents an organization’s custom field mappings for sales agreement conversion. Fields can be mapped from Opportunity and Quotes to SalesAgreement and SalesAgreementProduct.

This type extends the Metadata metadata type and inherits its fullName field.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=mfg_api_devguide)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## File Suffix and Directory Location

ObjectHierarchyRelationship components have the suffix ObjectHierarchyRelationship.settings and are stored in the ObjectHierarchyRelationship folder.

## Version

ObjectHierarchyRelationship components are available in API version 51.0 and later.

## Fields

| Field Name | Description |
| --- | --- |
| childObjectMapping | Field TypeObjectMappingDescriptionSet of inputObject, mappingFields, and outputObject entries. For example, fields from the input object of OpportunityLineItem maps to fields of the output object of SalesAgreementProduct. |
| childObjectMappingId | Field TypeStringDescriptionThe ID of the child object mapping record. This field is available in API version 56.0 and later. |
| inputObjRecordsGrpFieldName | Field TypestringDescriptionThe field name in the input object used to group the records. This field is available in API version 55.0 and later. |
| mappingType | Field TypeObjHierarchyMappingType (enumeration of type string)DescriptionSpecifies the type of relationship between two objects. This field is available in API version 55.0 and later.Valid values are:ChildToChildParentToChildParentToParentSupport |
| masterLabel | Field TypestringDescriptionLabel name of the mapping definition. |
| outputPntRelationshipFieldName | Field TypestringDescriptionThe field name that defines the relationship between a parent and child for the output object. This field is available in API version 55.0 and later. |
| parentObjectMapping | Field TypeObjectMappingDescriptionRequired.Set of inputObject, mappingFields, and outputObject entries. For example, fields from the input object of Opportunity maps to fields of the output object of SalesAgreement. |
| parentObjectMappingId | Field TypestringDescriptionThe ID of the parent object mapping record. This field is available in API version 56.0 and later. |
| parentRecord | Field TypestringDescriptionThe parent record for this object hierarchy relationship. This field is available in API version 55.0 and later. |
| parentRelationshipFieldName | Field TypestringDescriptionName of the field that defines the relationship between the parent and child. |
| sourceReferenceRelaFieldName | Field TypestringDescriptionThe field name in an object that's used to define the relationship between a source and reference object. This field is available in API version 56.0 and later. |
| usageType | Field TypeMappingUsageType (enumeration of type string)DescriptionRequired.Name of the usage type of an object hierarchy relationship.Valid value is:ConvertToSalesAgreementCLMFieldMappingEligibleProgramRebateTypeMapJournalToMemberAggregateTransformationMapping |

## ObjectMapping

Represents a set of inputObject, mappingFields, and outputObject entries.

## Fields

| Field Name | Description |
| --- | --- |
| inputObject | Field TypestringDescriptionRequired.Name of the input object type containing the source fields for mapping. For example, Opportunity or OpportunityLineItem. |
| mappingFields | Field TypeObjectMapping​FieldDescriptionMapping of source object input fields to target object for SalesAgreement and SalesAgreementProduct. |
| outputObject | Field TypestringDescriptionRequired.Name of the output object type receiving data conversion. For example, SalesAgreement or SalesAgreementProduct. |

## ObjectMappingField

Represents a set of inputField and outputField entries.

## Fields

| Field Name | Description |
| --- | --- |
| inputField | Field TypestringDescriptionRequired.Field in the object specified by the inputObject field in ObjectMapping. This field is mapped to the field in outputField, which is a field in the object specified by the outputObject field in ObjectMapping. |
| outputField | Field TypestringDescriptionRequired.Field in the object specified by the outputObject field in ObjectMapping. This field is mapped to the field name in inputField, which is a field in the object specified by the inputObject field in ObjectMapping. |

## Declarative Metadata Sample Definition

The following is an example of a ObjectHierarchyRelationship component.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Usage

Use the deploy() call to deploy metadata with a .zip file. Every .zip file contains a project manifest, a file that’s named package.xml, and a set of directories that contain the components. The manifest file defines the components that you’re trying to retrieve or deploy in the .zip file. The manifest also defines the API version that’s used for the deployment or retrieval. For more information on the .zip file, deploying, and retrieving metadata, see [Deploying and Retrieving Metadata with the Zip File](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/file_based_zip_file.htm "HTML (New Window)"). You can also deploy and retrieve the metadata API using Postman.

Ensure you map all the required fields for sales agreement conversion.

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see Deploying and Retrieving Metadata with the Zip File.

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<ObjectHierarchyRelationship xmlns="http://soap.sforce.com/2006/04/metadata">

  <parentObjectMapping>
    <inputObject>Opportunity</inputObject>
    <mappingFields>
      <inputField>Name</inputField>
      <outputField>Name</outputField>
    </mappingFields>
    <mappingFields>
      <inputField>CloseDate</inputField>
      <outputField>StartDate</outputField>
    </mappingFields>
    <mappingFields>
      <inputField>Account</inputField>
      <outputField>Account</outputField>
    </mappingFields>
    <mappingFields>
      <inputField>Pricebook2</inputField>
      <outputField>Pricebook</outputField>
    </mappingFields>
    <outputObject>SalesAgreement</outputObject>
  </parentObjectMapping>

  <childObjectMapping>
    <inputObject>OpportunityLineItem</inputObject>
    <mappingFields>
      <inputField>Id</inputField>
      <outputField>Name</outputField>
    </mappingFields>
    <mappingFields>
      <inputField>UnitPrice</inputField>
      <outputField>SalesPrice</outputField>
    </mappingFields>
    <mappingFields>
      <inputField>PricebookEntry</inputField>
      <outputField>PricebookEntry</outputField>
    </mappingFields>
    <mappingFields>
      <inputField>Quantity</inputField>
      <outputField>InitialPlannedQuantity</outputField>
    </mappingFields>
    <outputObject>SalesAgreementProduct</outputObject>
  </childObjectMapping>

  <masterLabel>ObjectHierarchyRelationship</masterLabel>
  <usageType>ConvertToSalesAgreement</usageType>
  <parentRelationshipFieldName>Opportunity</parentRelationshipFieldName>
  <outputPntRelationshipFieldName>SalesAgreement</outputPntRelationshipFieldName>
  <parentRecord></parentRecord>
  <inputObjRecordsGrpFieldName>Account</inputObjRecordsGrpFieldName>
  <mappingType>ParentToParent</mappingType>

</ObjectHierarchyRelationship>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
      <members>*</members>
      <name>ObjectHierarchyRelationship</name>
    </types>
    <version>51.0</version>
</Package>
```
