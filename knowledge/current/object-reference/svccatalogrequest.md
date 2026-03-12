---
title: "SvcCatalogRequest"
domain: object-reference
topic: svccatalogrequest
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:17.659Z
estimatedTokens: 1065
keywords: [SvcCatalogRequest, made, user, Service, Catalog, builders, report, activity, API, version, 53.0, later, Calls, Special, Access]
---

# SvcCatalogRequest

> Represents a request made by a user using the Service Catalog. Catalog
         builders use this object to report on Service Catalog activity. This object is
      available in API version 53.0 and later.

# SvcCatalogRequest

Represents a request made by a user using the Service Catalog. Catalog builders use this object to report on Service Catalog activity. This object is available in API version 53.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

To access this object, get the Service Catalog Access permission set license, Employee Productivity Starter license, or Employee Productivity Plus add-on license.

## Fields

| Field | Details |
| --- | --- |
| CatalogItemDescription | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionDescription for the catalog item. |
| CatalogItemName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionName of the catalog item. |
| CatalogItemVersion | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionVersion for the catalog item.This is a calculated field. Available in API version 58.0 and later. |
| ClosedDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time when the request was closed. This field is automatically populated when IsClosed is 'true'. |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionISO code of the currency. Must be one of the valid alphabetic, three-letter currency ISO codes defined by the ISO 4217 standard, such as USD, GBP, or JPY. Must be unique within your organization. Default value is USD-U.S. Dollar. |
| FlowInterviewGuid | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionUnique GUID associated with the automation that was executed as part of the catalog item. Available in API version 60.0 and later. |
| IsClosed | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the request has been resolved. This field is automatically checked when ClosedDate is populated.The default value is false. |
| ItemFlowVersion | TypestringPropertiesFilter, Group, Nillable, SortDescriptionVersion for the item flow.This is a calculated field. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record, a record related to this record, or a list view. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, the user might have only accessed this record or list view (LastReferencedDate) but not viewed it. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe Service Catalog request number. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID for the owner record.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| Status | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe status of the service catalog request. Available in API version 60.0 and later.Possible values are:CompletedExecution—DefaultCreatedRequestStartedExecution |
| SubmitterId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID for the submitter record.This is a relationship field.Relationship NameSubmitterRelationship TypeLookupRefers ToUser |
| SvcCatalogItemDefinitionId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe catalog item that was used to create this request.This is a relationship field.Relationship NameSvcCatalogItemDefinitionRelationship TypeLookupRefers ToSvcCatalogItemDef |
| TargetCustomerId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe customer ID that the request was submitted for. For example, when an agent runs a catalog item for a given contact, the contact is represented by the TargetCustomerId. Available in API version 61.0 and later.This is a polymorphic relationship field.Relationship NameTargetCustomerRelationship TypeLookupRefers ToContact, User |
