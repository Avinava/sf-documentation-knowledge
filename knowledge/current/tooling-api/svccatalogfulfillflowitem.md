---
title: "SvcCatalogFulfillFlowItem"
domain: tooling-api
topic: svccatalogfulfillflowitem
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:46.913Z
estimatedTokens: 879
keywords: [SvcCatalogFulfillFlowItem, Represents, variable, fulfillment, flow, Service, Catalog, accept, input., API, version, 53.0, through, 56.0., Supported, SOAP, Calls, REST, Special, Access]
---

# SvcCatalogFulfillFlowItem

> Represents a variable in a fulfillment flow for Service Catalog that can
         accept input. This object is available in API version 53.0 through 56.0.

# SvcCatalogFulfillFlowItem

Represents a variable in a fulfillment flow for Service Catalog that can accept input. This object is available in API version 53.0 through 56.0.

## Supported SOAP API Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Supported REST API Methods

DELETE, GET, HEAD, PATCH, POST, Query

## Special Access Rules

Available to customers with Employee Productivity Plus or IT Service Center add-ons.

## Fields

| Field | Details |
| --- | --- |
| CatalogFulfillmentId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionId of the SvcCatalogFulfillmentFlow that this item belongs to.This is a relationship field.Relationship NameCatalogFulfillmentRelationship TypeLookupRefers ToSvcCatalogFulfillmentFlow |
| CatalogInputVariable | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe FlowVariable the fulfillment flow property represents. |
| DisplayType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe display options available.Possible values are:CheckboxLookupNumberPicklistTextThe default value is 'Lookup'. |
| FieldDefinition | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe name of a field in the object provided in ObjectLookupDomainId that specifies the value for this variable. If DisplayType is Picklist, this value must be the name of a picklist field. If DisplayType is Lookup and FieldLookupDomainId is FieldDefinition, this value must be the name of a relationship field. This value can be a field from a standard or custom object. |
| FieldLookupDomainId | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of a standard or custom object that specifies the domain of that lookup or picklist. This value is relevant only if displayType is Lookup or Picklist.This is a relationship field.Relationship NameFieldLookupDomainRelationship TypeLookupRefers ToEntityDefinition |
| IsAdditionalQuestionsInputVariable | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionDetermines if this variable accepts input for all additional questions that were asked to a user. This value can only be true if the DisplayType for this item is Text. Only one item per SvcCatalogFulfillmentFlow component can set this attribute to true.The default value is 'false'. |
| IsRequired | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionDetermines if the field is required for the related fulfillment flow to be executed.The default value is 'false'. |
| LookupDomainFieldType | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThis value specifies the fields for the object specified by ObjectLookupDomainId that are displayed in the Catalog Builder by type. This value is only relevant if DisplayType is Lookup and fieldLookupDomain is FieldDefinition. |
| MasterLabel | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe primary label for the fulfillment flow record. |
| ObjectLookupDomainId | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of a custom or standard object. If DisplayType is Lookup or Picklist, this value filters the available options to a specific object.This is a relationship field.Relationship NameObjectLookupDomainRelationship TypeLookupRefers ToEntityDefinition |
