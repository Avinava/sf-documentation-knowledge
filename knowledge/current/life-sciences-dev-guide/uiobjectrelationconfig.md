---
title: "UIObjectRelationConfig"
domain: life-sciences-dev-guide
topic: uiobjectrelationconfig
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:44.792Z
estimatedTokens: 1018
keywords: [UIObjectRelationConfig, admin-created, configuration, relation, component, Parent, File, Suffix, Directory, Location, Version, Special, Access, Rules, UIObjectRelationFieldConfig]
---

# UIObjectRelationConfig

> Represents the admin-created configuration of the object
			relation UI component.

# UIObjectRelationConfig

Represents the admin-created configuration of the object relation UI component.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=life_sciences_dev_guide)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Parent Type

This type extends the [Metadata](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/metadata.htm "HTML (New Window)") metadata type and inherits its fullName field.

## File Suffix and Directory Location

UIObjectRelationConfig components have the suffix .uiObjectRelationConfig and are stored in the uiObjectRelationConfigs folder.

## Version

UIObjectRelationConfig components are available in API version 54.0 and later.

## Special Access Rules

You must be a Health Cloud or Life Sciences Cloud customer to use this metadata type

## Fields

| Field Name | Description |
| --- | --- |
| contextObject | Field TypestringDescriptionRequired.The object that provides the context for this object relation configuration. |
| contextObjectRecordType | Field TypestringDescriptionThe record type of the context object for this configuration, if applicable. |
| directRelationshipField | Field TypestringDescriptionFor direct relationships, the child relationship field on the related object that matches the context object. |
| indirectObjectContextField | Field TypestringDescriptionFor indirect relationships, the field on the junction object that matches the context object. |
| indirectObjectRelatedField | Field TypestringDescriptionFor indirect relationships, the field on the junction object that matches the related object. |
| indirectRelationshipObject | Field TypestringDescriptionFor indirect relationships, the junction object representing the relationship between the related object and its context object. |
| isActive | Field TypebooleanDescriptionIndicates whether the configuration is active (true) or not (false). |
| masterLabel | Field TypestringDescriptionRequired.Label for the UIObjectRelationConfig. In the UI, this field is UI Object Relation Config. |
| relatedObject | Field TypestringDescriptionRequired.The object containing the data that this object relation configuration displays. |
| relatedObjectRecordType | Field TypestringDescriptionThe record type of the related object for this configuration. |
| relationshipType | Field TypeObjectRelationshipType (enumeration of type string)DescriptionRequired.A string indicating the type of relationship between the related object and context object.Valid values are:DirectIndirectInverseDirectSelf |
| UIObjectRelationFieldConfigs | Field TypeUIObjectRelationFieldConfig[]DescriptionProvides a configuration for an object relation field on a specific row of content. |

## UIObjectRelationFieldConfig

Represents a configuration for a single row of content on a specific object relation configuration.

| Field Name | Description |
| --- | --- |
| displayLabel | Field TypestringDescriptionRequired.A string containing the user-defined label for this field, to be displayed on each object relation of this type. |
| queryText | Field TypestringDescriptionRequired.A case-insensitive template query for generating the content in this field. |
| rowOrder | Field TypeintDescriptionRequired.Determines the top-to-bottom display order of this field on the object relation UI. |

## Declarative Metadata Sample Definition

This is an example of a UIObjectRelationConfig component.

```

```

This is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/file_based_zip_file.htm "HTML (New Window)").

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
 <UIObjectRelationConfig xmlns="http://soap.sforce.com/2006/04/metadata">
     <UIObjectRelationFieldConfigs>
         <displayLabel>Address:</displayLabel>
         <queryText>{
     "startNode": {
         "initialObject": "RelatedObject"
     },
     "traversalNodes": [],
     "fieldNode": {
         "fieldEnumOrId": "ShippingAddress"
     }
 }</queryText>
         <rowOrder>1</rowOrder>
     </UIObjectRelationFieldConfigs>
     <UIObjectRelationFieldConfigs>
         <displayLabel>Phone:</displayLabel>
         <queryText>{
     "startNode": {
         "initialObject": "RelatedObject"
     },
     "traversalNodes": [],
     "fieldNode": {
         "fieldEnumOrId": "Phone"
     }
 }</queryText>
         <rowOrder>2</rowOrder>
     </UIObjectRelationFieldConfigs>
     <UIObjectRelationFieldConfigs>
         <displayLabel>Fax:</displayLabel>
         <queryText>{
     "startNode": {
         "initialObject": "RelatedObject"
     },
     "traversalNodes": [],
     "fieldNode": {
         "fieldEnumOrId": "Fax"
     }
 }</queryText>
         <rowOrder>3</rowOrder>
     </UIObjectRelationFieldConfigs>
     <UIObjectRelationFieldConfigs>
         <displayLabel>Parent Organization:</displayLabel>
         <queryText>{
     "startNode": {
         "initialObject": "RelatedObject"
     },
     "traversalNodes": [
         {
             "destinationObjectEnumOrId": "Account",
             "fieldEnumOrId": "ParentId",
             "traversalDirection": "parent"
         }
     ],
     "fieldNode": {
         "fieldEnumOrId": "Name"
     }
 }</queryText>
         <rowOrder>4</rowOrder>
     </UIObjectRelationFieldConfigs>
     <contextObject>Contact</contextObject>
     <directRelationshipField>AccountId</directRelationshipField>
     <isActive>true</isActive>
     <masterLabel>Sample Primary Account Configuration</masterLabel>
     <relatedObject>Account</relatedObject>
     <relationshipType>Direct</relationshipType>
     <indirectObjectRelatedField></indirectObjectRelatedField>
     <indirectObjectContextField></indirectObjectContextField>
     <contextObjectRecordType></contextObjectRecordType>
     <indirectRelationshipObject></indirectRelationshipObject>
     <relatedObjectRecordType></relatedObjectRecordType>
 </UIObjectRelationConfig>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
  <types>
      <members>*</members>
      <name>UIObjectRelationConfig</name>
  </types>
    <version>54.0</version>
</Package>
```
