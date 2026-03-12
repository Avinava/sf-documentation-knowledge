---
title: "ObjectHierarchyRelationship"
domain: automotive-cloud
topic: objecthierarchyrelationship
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:00.740Z
estimatedTokens: 1234
keywords: [ObjectHierarchyRelationship, organization’s, mappings, conversion, lead’s, records, opportunity’s, mapped, LeadLineItem, LeadPreferredSeller, OpportunityLineItem, OpportunityPreferredSeller, respectively, File, Suffix]
---

# ObjectHierarchyRelationship

> Represents an organization’s field mappings for
      conversion of a lead’s related records to an opportunity’s related records. Fields can be
      mapped from LeadLineItem and LeadPreferredSeller to OpportunityLineItem and
      OpportunityPreferredSeller respectively.

# ObjectHierarchyRelationship

Represents an organization’s field mappings for conversion of a lead’s related records to an opportunity’s related records. Fields can be mapped from LeadLineItem and LeadPreferredSeller to OpportunityLineItem and OpportunityPreferredSeller respectively.

This type extends the Metadata metadata type and inherits its fullName field.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=automotive_cloud)

#### Note

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## File Suffix and Directory Location

ObjectHierarchyRelationship components have the suffix ObjectHierarchyRelationship.settings and are stored in the ObjectHierarchyRelationship folder.

## Version

ObjectHierarchyRelationship components are available in API version 51.0 and later.

## Fields

| Field Name | Description |
| --- | --- |
| childObjectMapping | Field TypeObjectMappingDescriptionSet of inputObject, mappingFields, and outputObject entries. For example, fields from the input object of LeadLineItem maps to fields of the output object of OpportunityLineItem. |
| inputObjRecordsGrpFieldName | Field TypestringDescriptionThe field name in the input object used to group the records. This field is available in API version 55.0 and later. |
| mappingType | Field TypeObjHierarchyMappingType (enumeration of type string)DescriptionSpecifies the type of relationship between two objects. This field is available in API version 55.0 and later.Valid values are:ChildToChildParentToChildParentToParentSupportNoteUse ParentToParent |
| masterLabel | Field TypestringDescriptionLabel name of the mapping definition. |
| outputPntRelationshipFieldName | Field TypestringDescriptionThe field name that defines the relationship between a parent and child for the output object. This field is available in API version 55.0 and later. |
| parentObjectMapping | Field TypeObjectMappingDescriptionRequired.Set of inputObject, mappingFields, and outputObject entries. For example, fields from the input object of LeadLineItem maps to fields of the output object of OpportunityLineItem. |
| parentRecord | Field TypestringDescriptionThe parent record for this object hierarchy relationship. This field is available in API version 55.0 and later. |
| parentRelationshipFieldName | Field TypestringDescriptionName of the field that defines the relationship between the parent and child. |
| usageType | Field TypeMappingUsageType (enumeration of type string)DescriptionRequired.Name of the usage type of an object hierarchy relationship.Valid value is:ConvertToSalesAgreementCLMFieldMappingEligibleProgramRebateTypeMapJournalToMemberAggregateTransformationMapping |

## ObjectMapping

Represents a set of inputObject, mappingFields, and outputObject entries.

## Fields

| Field Name | Description |
| --- | --- |
| inputObject | Field TypestringDescriptionRequired.Name of the input object type containing the source fields for mapping. For example, LeadLineItem or LeadPreferredSeller. |
| mappingFields | Field TypeObjectMapping​FieldDescriptionMapping of source object input fields to target object |
| outputObject | Field TypestringDescriptionRequired.Name of the output object type receiving data conversion. For example, OpportunityLineItem or OpportunityPreferredSeller. |

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

Use the deploy() call to deploy metadata with a .zip file. Every .zip file contains a project manifest, a file that’s named package.xml, and a set of directories that contain the components. The manifest file defines the components that you’re trying to retrieve or deploy in the .zip file. The manifest also defines the API version that’s used for the deployment or retrieval.

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see Deploying and Retrieving Metadata with the Zip File.

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<ObjectHierarchyRelationship xmlns="http://soap.sforce.com/2006/04/metadata">
 <parentObjectMapping>
     <inputObject>LeadPreferredSeller</inputObject>
     <outputObject>OpportunityPreferredSeller</outputObject>
       <mappingFields> 
       <inputField>AccountId</inputField>
       <outputField>AccountId</outputField> 
     </mappingFields> 

     <mappingFields> 
       <inputField>AccountRole</inputField>
       <outputField>AccountRole</outputField> 
     </mappingFields>

     <mappingFields> 
       <inputField>Name</inputField>
       <outputField>Name</outputField> 
     </mappingFields>

 </parentObjectMapping>
    <outputPntRelationshipFieldName/>
    <inputObjRecordsGrpFieldName></inputObjRecordsGrpFieldName>
    <parentRecord/>
    <mappingType>ParentToParent</mappingType>
    <usageType>TransformationMapping</usageType>
</ObjectHierarchyRelationship>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
      <members>*</members>
      <name>ObjectHierarchyRelationship</name>
    </types>
    <version>56.0</version>
</Package>
```
