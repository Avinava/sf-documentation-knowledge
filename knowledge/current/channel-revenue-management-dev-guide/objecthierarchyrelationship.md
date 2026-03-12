---
title: "ObjectHierarchyRelationship"
domain: channel-revenue-management-dev-guide
topic: objecthierarchyrelationship
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:10.132Z
estimatedTokens: 1274
keywords: [ObjectHierarchyRelationship, organization’s, custom, mappings, eligible, rebate, mapped, Opportunity, OpportunityLineItem, Quote, QuoteLineItem, Contract, TransactionJournal, File, Suffix]
---

# ObjectHierarchyRelationship

> Represents an organization’s custom field mappings
      between a reference object and eligible rebate types. Fields can be mapped from Opportunity,
      OpportunityLineItem, Quote, QuoteLineItem, and Contract to
    TransactionJournal.

# ObjectHierarchyRelationship

Represents an organization’s custom field mappings between a reference object and eligible rebate types. Fields can be mapped from Opportunity, OpportunityLineItem, Quote, QuoteLineItem, and Contract to TransactionJournal.

This type extends the Metadata metadata type and inherits its fullName field.

## File Suffix and Directory Location

ObjectHierarchyRelationship components have the suffix ObjectHierarchyRelationship.settings and are stored in the ObjectHierarchyRelationship folder.

## Version

ObjectHierarchyRelationship components are available in API version 51.0 and later.

## Fields

| Field Name | Description |
| --- | --- |
| childObjectMapping | Field TypeObjectMappingDescriptionSet of inputObject, mappingFields, and outputObject entries. |
| inputObjRecordsGrpFieldName | Field TypestringDescriptionThe field name in the input object used to group the records. This field is available in API version 55.0 and later. |
| mappingType | Field TypeObjHierarchyMappingType (enumeration of type string)DescriptionSpecifies the type of relationship between two objects.Valid values are:ChildToChildParentToChildParentToParentSupportThis field is available in API version 55.0 and later. |
| masterLabel | Field TypestringDescriptionMaster label name of the mapping definition. |
| outputPntRelationshipFieldName | Field TypestringDescriptionThe field name that defines the relationship between a parent and child for the output object. This field is available in API version 55.0 and later. |
| parentObjectMapping | Field TypeObjectMappingDescriptionRequired.Set of inputObject, mappingFields, and outputObject entries. |
| parentRecord | Field TypestringDescriptionThe parent record for this object hierarchy relationship. This field is available in API version 55.0 and later. |
| parentRelationshipFieldName | Field TypestringDescriptionName of the field that defines the relationship between the parent and child. |
| usageType | Field TypeMappingUsageType (enumeration of type string)DescriptionRequired.Name of the usage type of an object hierarchy relationship.Valid value is:ConvertToSalesAgreementCLMFieldMappingEligibleProgramRebateTypeMapJournalToMemberAggregateTransformationMapping |

## ObjectMapping

Represents a set of inputObject, mappingFields, and outputObject entries.

## Fields

| Field Name | Description |
| --- | --- |
| inputObject | Field TypestringDescriptionRequired.Name of the input object type containing the source fields for mapping. For example, Opportunity or OpportunityLineItem.NoteYou can also use a custom object as the input object type. |
| mappingFields | Field TypeObjectMapping​FieldDescriptionMapping of source object input fields to target object. |
| outputObject | Field TypestringDescriptionRequired.Name of the output object type receiving data conversion. For example, TransactionJournal. |

## ObjectMappingField

Represents a set of inputField and outputField entries.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| inputField | string | Field TypestringDescriptionRequired.Field in the object specified by the inputObject field in ObjectMapping. This field is mapped to the field in outputField, which is a field in the object specified by the outputObject field in ObjectMapping.NoteYou can also use custom fields as the input field type. |
| outputField | string | Field TypestringDescriptionRequired.Field in the object specified by the outputObject field in ObjectMapping. This field is mapped to the field name in inputField, which is a field in the object specified by the inputObject field in ObjectMapping.NoteYou can also use custom fields as the output field type. |

## Declarative Metadata Sample Definition

The following are examples of a ObjectHierarchyRelationship component.

Example of mapping between Opportunity and Transaction Journal.

```

```

Example of mapping between Quote and Transaction Journal.

```

```

Example of mapping between Contract and Transaction Journal.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Usage

Use the deploy() call to deploy metadata with a .zip file. Every .zip file contains a project manifest, a file that’s named package.xml, and a set of directories that contain the components. The manifest file defines the components that you’re trying to retrieve or deploy in the .zip file. The manifest also defines the API version that’s used for the deployment or retrieval. For more information on the .zip file, deploying, and retrieving the metadata, see [Deploying and Retrieving Metadata with the Zip File](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/file_based_zip_file.htm "HTML (New Window)"). You can also deploy and retrieve the metadata API using Postman.

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see Deploying and Retrieving Metadata with the Zip File.

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<ObjectHierarchyRelationship xmlns="http://soap.sforce.com/2006/04/metadata">
   <parentObjectMapping>
      <inputObject>Opportunity</inputObject>
      <outputObject>TransactionJournal</outputObject>
      <mappingFields>
        <inputField>AccountId</inputField>
        <outputField>MemberId</outputField>
      </mappingFields>
      </mappingFields>  
   </parentObjectMapping>
   <childObjectMapping>
   <inputObject>OpportunityLineItem</inputObject>
      <outputObject>TransactionJournal</outputObject> 
      <mappingFields>
        <inputField>Product2Id</inputField>
        <outputField>ProductId</outputField>
      </mappingFields>
      <mappingFields>
        <inputField>Quantity</inputField>
        <outputField>Quantity</outputField>
      </mappingFields>
   </childObjectMapping>
   <usageType>EligibleProgramRebateType</usageType>
</ObjectHierarchyRelationship>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<ObjectHierarchyRelationship xmlns="http://soap.sforce.com/2006/04/metadata">
   <parentObjectMapping>
      <inputObject>Quote</inputObject>
      <outputObject>TransactionJournal</outputObject>
      <mappingFields> 
        <inputField>AccountId</inputField>
        <outputField>MemberId</outputField>
      </mappingFields> 
   </parentObjectMapping>
   <childObjectMapping>
      <inputObject>QuoteLineItem</inputObject>
      <outputObject>TransactionJournal</outputObject> 
     <mappingFields>
        <inputField>Product2Id</inputField>
        <outputField>ProductId</outputField>
      </mappingFields>
      <mappingFields>
        <inputField>Quantity</inputField>
        <outputField>Quantity</outputField>
      </mappingFields>
   </childObjectMapping>
   <usageType>EligibleProgramRebateType</usageType>
</ObjectHierarchyRelationship>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<ObjectHierarchyRelationship xmlns="http://soap.sforce.com/2006/04/metadata">
   <parentObjectMapping>
      <inputObject>Contract</inputObject>
      <outputObject>TransactionJournal</outputObject>
      <mappingFields>
        <inputField>AccountId</inputField>
        <outputField>MemberId</outputField>
      </mappingFields>
    </parentObjectMapping>
    <usageType>EligibleProgramRebateType</usageType>
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
