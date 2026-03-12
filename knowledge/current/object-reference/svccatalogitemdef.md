---
title: "SvcCatalogItemDef"
domain: object-reference
topic: svccatalogitemdef
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:17.644Z
estimatedTokens: 1124
keywords: [SvcCatalogItemDef, service, catalog, item, requested, user, API, version, 53.0, later, Calls, Special, Access, Rules]
---

# SvcCatalogItemDef

> Represents a service catalog item that can be requested by a service
         catalog user. This object is available in API version 53.0 and later.

# SvcCatalogItemDef

Represents a service catalog item that can be requested by a service catalog user. This object is available in API version 53.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), query(), retrieve(), search(), update(), upsert()

## Special Access Rules

To access this object, get the Service Catalog Access permission set license, Employee Productivity Starter license, or Employee Productivity Plus add-on license.

## Fields

| Field | Details |
| --- | --- |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe definition of the catalog item. This field is visible on the Service Catalog page. |
| DeveloperName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe unique developer name for the catalog item. |
| FlowName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe flow called when the user navigates to the request page for the catalog item. Available in API version 55.0 and later. |
| FulfillmentFlowId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the fulfillment flow. Available in API version 56.0 and later.This field is a relationship field.Relationship NameFulfillmentFlowRelationship TypeLookupRefers ToSvcCatalogFulfillmentFlow |
| ImageId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe image ID used for the catalog item.This field is a relationship field.Relationship NameImageRelationship TypeLookupRefers ToContentAsset |
| ImageReference | TypestringPropertiesFilter, Group, Nillable, SortDescriptionDerived field from ImageId to expose ContentAssetId on item definitions. Available in API version 61.0 and later. |
| InternalNotes | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionA place for the Service Catalog Builder to leave internal notes about the catalog item. |
| IsActive | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionDerived field from Status to indicate whether the service catalog item is active.The default value is false.Available in API version 59.0 and later. |
| IsAvailableToAllCustomers | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UdpateDescriptionIndicates whether the Service Catalog item is available to all customers. The default value is false.Available in API version 61.0 and later. |
| IsFeatured | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionSpecifies whether a catalog item is marked as a favorite for the org. Favorites display as a featured item on the Service Catalog home page.The default value is false. |
| IsGuestAccessible | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the Service Catalog item can be accessed by guest users. The default value is false.Available in API version 61.0 and later. |
| IsOutOfSync | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the fulfillment flow that the Service Catalog item is based on has been updated. Available in API version 58.0 and later.The default value is false. If value is true, try updating and saving the service catalog item again. |
| Language | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSupported languages for catalog items. |
| Product | TypepicklistPropertiesDefaulted on create, Filter, Group, Restricted picklist, SortDescriptionThe product associated with the Service Catalog item. The value is derived from UsageType. Available in API version 59.0 and later.Possible values are:FinancialServicesServiceCatalog—Default |
| ShortDescription | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe short description of the catalog item. |
| Status | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionAllows the Service Catalog Builder to control whether the flow is displayed to users within the Service Catalog.Possible values are:DeprecatedDraft—DefaultPendingChangesPublished |
| UsageType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe business type for which the Service Catalog is used. Available in API version 57.0 and later.Possible values are:CustomerServiceEmployee—DefaultFinancialServicesIndustry |
