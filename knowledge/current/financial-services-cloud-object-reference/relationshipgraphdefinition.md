---
title: "RelationshipGraphDefinition"
domain: financial-services-cloud-object-reference
topic: relationshipgraphdefinition
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:29.213Z
estimatedTokens: 718
keywords: [RelationshipGraphDefinition, definition, graph, configure, organization, traverse, hierarchies, record, giving, glimpse, how, business, works, Parent, File, API, version]
---

# RelationshipGraphDefinition

> Represents a definition of a graph that you can configure in your
         organization to traverse object hierarchies and record details, giving you a glimpse of how
         your business works. This object is available in API version 55.0 and
      later.

# RelationshipGraphDefinition

Represents a definition of a graph that you can configure in your organization to traverse object hierarchies and record details, giving you a glimpse of how your business works. This object is available in API version 55.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=financial_services_cloud_object_reference)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported SOAP API Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Supported REST API Methods

DELETE, GET, HEAD, PATCH, POST, Query

## Special Access Rules

The Financial Services Cloud permission set license is required to access this object.

## Fields

| Field | Details |
| --- | --- |
| DeveloperName | TypestringPropertiesFilter, Group, SortDescriptionThe unique name of the object in the API. This name can contain only underscores and alphanumeric characters, and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. In managed packages, this field prevents naming conflicts on package installations. With this field, a developer can change the object’s name in a managed package and the changes are reflected in a subscriber’s organization. Label is Record Type Name. |
| FullName | TypestringPropertiesCreate, Group, NillableDescriptionThe full name of the associated relationship graph in Metadata API. The full name can include a namespace prefix.Query this field only if the query result contains no more than one record. Otherwise, an error is returned. If more than one record exists, use multiple queries to retrieve the records. This limit protects performance. |
| IsActive | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the relationship graph is available for use (true) or not (false).The default value is true.NoteThis field is read-only in API version 55.0. |
| IsTemplate | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether you can configure this relationship graph as a template (true) or not (false).The default value is false. In the UI, this field is Set as Template. |
| Language | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionThe language of the relationship graph instance.Possible values are:da—Danishde—Germanen_US—Englishes—Spanishes_MX—Spanish (Mexico)fi—Finnishfr—Frenchit—Italianja—Japaneseko—Koreannl_NL—Dutchno—Norwegianpt_BR—Portuguese (Brazil)ru—Russiansv—Swedishth—Thaizh_CN—Chinese (Simplified)zh_TW—Chinese (Traditional) |
| ManageableState | TypeManageableState enumerated listPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionIndicates the manageable state of the specified component that is contained in a package:betadeleteddeprecateddeprecatedEditableinstalledinstalledEditablereleasedunmanaged |
| MasterLabel | TypestringPropertiesFilter, Group, SortDescriptionRequired. Label for the relationship graph instance. In the UI, this field is Label. |
| Metadata | TypeRelationshipGraphDefinitionPropertiesCreate, Nillable, UpdateDescriptionThe relationship graph’s metadata.Query this field only if the query result contains no more than one record. Otherwise, an error is returned. If more than one record exists, use multiple queries to retrieve the records. This limit protects performance. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe namespace prefix associated with this object. Each Developer Edition organization that creates a managed package has a unique namespace prefix. Limit: 15 characters. You can refer to a component in a managed package by using the namespacePrefix__componentName notation.The namespace prefix can have one of the following values:In Developer Edition organizations, the namespace prefix is set to the namespace prefix of the organization for all objects that support it. There is an exception if an object is in an installed managed package. In that case, the object has the namespace prefix of the installed managed package. This field’s value is the namespace prefix of the Developer Edition organization of the package developer.In organizations that are not Developer Edition organizations, NamespacePrefix is only set for objects that are part of an installed managed package. There is no namespace prefix for all other objects. |
| RootObjectId | TypestringPropertiesFilter, Group, SortDescriptionThe ID of the root object, which is the starting point or parent node in the relationship graph. For example, in a graph that displays how accounts, contacts, and financial goals are related, the account object is the root object, and its ID is the RootObjectId.This field is a relationship field.NoteReserved for internal use.Relationship NameRootObjectRelationship TypeLookupRefers ToEntityDefinition |

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
