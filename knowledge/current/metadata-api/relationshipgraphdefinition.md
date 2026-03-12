---
title: "RelationshipGraphDefinition"
domain: metadata-api
topic: relationshipgraphdefinition
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:42.310Z
estimatedTokens: 827
keywords: [RelationshipGraphDefinition, Represents, definition, graph, configure, organization, traverse, hierarchies, record, details, giving, glimpse, how, business, works., Important, Parent, File, Suffix, Directory]
---

# RelationshipGraphDefinition

> Represents a definition of a graph that you can
            configure in your organization to traverse object hierarchies and record details, giving
            you a glimpse of how your business works.

# RelationshipGraphDefinition

Represents a definition of a graph that you can configure in your organization to traverse object hierarchies and record details, giving you a glimpse of how your business works.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Parent Type

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

## File Suffix and Directory Location

RelationshipGraphDefinition components have the suffix .relationshipGraphDefinition and are stored in the relationshipGraphDefinitions folder.

## Version

RelationshipGraphDefinition components are available in API version 55.0 and later.

## Special Access Rules

The Financial Services Cloud permission set license is required to access this object.

## Fields

| Field Name | Description |
| --- | --- |
| isActive | Field TypebooleanDescriptionRequired.Indicates whether the relationship graph is available for use (true) or not (false). The default value is true.NoteThis field is read-only in API version 55.0. |
| isTemplate | Field TypebooleanDescriptionRequired.Indicates whether you can configure this relationship graph as a template (true or not false). The default value is false. In the UI, this field is Set as Template. |
| masterLabel | Field TypestringDescriptionRequired.A user-friendly name for RelationshipGraphDefinition, which is defined when the RelationshipGraphDefinition is created. In the UI, this field is Label. |
| relationshipGraphDefVersions | Field TypeRelationshipGraphDefVersion[]DescriptionRepresents a list of graph versions associated with the relationship graph definition. |

## RelationshipGraphDefVersion

The list of graph versions associated with the relationship graph definition.

| Field Name | Description |
| --- | --- |
| graphDefinition | Field TypestringDescriptionRequired.Specifies a set of properties required to create a relationship graph, such as parent node, child relationships, filter and sort fields, and graph UI elements. |
| graphType | Field TypestringDescriptionRequired.Specifies the type of graph. In API version 55.0, only HorizontalHierarchy graph type is supported. |

## Declarative Metadata Sample Definition

The following is an example of a RelationshipGraphDefinition component.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

## Code Examples

```apex
<?xml version="1.0" encoding="UTF-8"?>
<RelationshipGraphDefinition xmlns="http://soap.sforce.com/2006/04/metadata">
     <isActive>false</isActive>
     <isTemplate>true</isTemplate>
     <masterLabel>Account Graph</masterLabel>
     <relationshipGraphDefVersions>
         <graphDefinition>{
   "graph" : {
     "rootNode" : {
       "object" : {
         "entity" : "Account"
       },
       "configurationType" : "Primary",
       "sortFields" : [ {
         "field" : {
           "field" : "LastModifiedDate",
           "whichEntity" : "TARGET"
         },
         "order" : "DESC"
       } ],
       "nodeUiConfig" : {
         "fieldsToDisplay" : [ ],
         "showFieldLabels" : true,
         "actions" : { }
       },
       "childRelationships" : [ {
         "OneToMany" : {
           "targetObjectNode" : {
             "object" : {
               "entity" : "Contact"
             },
             "configurationType" :"Custom",
             "sortFields" : [ {
               "field" : {
                 "field" : "LastModifiedDate",
                 "whichEntity" : "TARGET"
               },
               "order" : "DESC"
             } ],
             "nodeUiConfig" : {
               "fieldsToDisplay" : [ {
                 "field" : "Name",
                 "whichEntity" : "TARGET"
               }, {
                 "field" : "Phone",
                 "whichEntity" :"TARGET"
               } ],
               "showFieldLabels" : true,
               "actions" : {
                 "containerActions" : [ {
                   "action" : "New"
                 } ],
                 "recordActions" : [ {
                   "action" : "Edit"
                 }, {
                   "action" : "Delete"
                 } ]
               }
             },
             "childRelationships" : [ ]
           },
           "relationshipUiConfig" : { },
           "filter" : {
             "filterCriteria" : [ {
               "field" : {
                 "field" : "Name",
                 "whichEntity" : "TARGET"
               },
               "operator" : "eq",
               "value" : "Salesforce"
             } ],
             "booleanFilter" : "1"
           },
           "targetObjectField" : {
             "field" : "AccountId",
             "whichEntity" : "TARGET"
           }
         }
       } ]
     },
     "globalUiConfig" : {
       "borderColor" : "Green2",
       "borderThickness" : "2px";,
       "colorShading" : "Black",
       "fieldLayout" : "Vertically Stacked",
       "recordContainerExpansion" : true,
       "recordExpansion" : true
     }
   }
 }</graphDefinition>
         <graphType>HorizontalHierarchy</graphType>
     </relationshipGraphDefVersions>
</RelationshipGraphDefinition>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
   <fullName>Package1</fullName>
   <types>
       <members>*</members>
       <name>RelationshipGraphDefinition</name>
   </types>
   <version>55.0</version>
</Package>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
