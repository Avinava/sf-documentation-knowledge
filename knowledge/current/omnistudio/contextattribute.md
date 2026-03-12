---
title: "ContextAttribute"
domain: omnistudio
topic: contextattribute
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:54.643Z
estimatedTokens: 746
keywords: [ContextAttribute, Represents, information, attribute, used, describe, context, node., node, many, attributes, associated, it., API, version, 59.0, later., Supported, SOAP, Calls]
---

# ContextAttribute

> Represents information about an attribute used to describe a context node.
         Each node can have one or many attributes associated with it.  This object is
      available in API version 59.0 and later.

# ContextAttribute

Represents information about an attribute used to describe a context node. Each node can have one or many attributes associated with it. This object is available in API version 59.0 and later.

## Supported SOAP API Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Supported REST API Methods

DELETE, GET, HEAD, PATCH, POST, Query

## Fields

| Field | Details |
| --- | --- |
| ContextNodeId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe context node record that's associated with the context attribute.This field is a relationship field.Relationship NameContextNodeRelationship TypeLookupRefers ToContextNode |
| DataType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies the type of data that's stored in the context attribute.Possible values are:booleanBooleancurrency—Currencydate—Datedatetime—Datetimelookup—Lookupnumber—Numberpercent—Percentpicklist—Picklistreference—Referencestring—StringThe default value is string. |
| DomainSet | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe list of node references to show a parent-child relationship between nodes in a definition. |
| FieldType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionList of node references to depict parent/child relation between the nodes in a definitionPossible values are:input—INPUTinputoutput—INPUTOUTPUToutput—OUTPUTThe default value is input. |
| IsKey | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the attribute is a key attribute in the node (true) or not (false).The default value is false. |
| IsTransient | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates if an attribute must be skipped in context persistence.The default value is false. |
| IsValue | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates the attribute that identifies as a value in a node.The default value is false. |
| ManageableState | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionIndicates the manageable state of the specified component that is contained in a package.Possible values are:beta—Managed-Betadeleted—Managed-Proposed-Deleteddeprecated—Managed-Proposed-DeprecateddeprecatedEditable—SecondGen-Installed-Deprecatedinstalled—Managed-InstalledinstalledEditable—SecondGen-Installed-Editablereleased—Managed-Releasedunmanaged—Unmanaged |
| Title | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe name of the context attribute. |
| InheritedFrom | TypestringPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe name of the parent attribute that's used to derive the current attribute.This field is available in API version 60.0 and later. |
