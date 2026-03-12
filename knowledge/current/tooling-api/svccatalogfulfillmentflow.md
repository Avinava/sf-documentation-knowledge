---
title: "SvcCatalogFulfillmentFlow"
domain: tooling-api
topic: svccatalogfulfillmentflow
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:46.921Z
estimatedTokens: 670
keywords: [SvcCatalogFulfillmentFlow, Represents, flow, associated, specific, catalog, item, Service, Catalog., API, version, 53.0, later., Supported, SOAP, Calls, REST, Special, Access, Rules]
---

# SvcCatalogFulfillmentFlow

> Represents the flow associated with a specific catalog item in the Service
         Catalog. This object is available in API version 53.0 and later.

# SvcCatalogFulfillmentFlow

Represents the flow associated with a specific catalog item in the Service Catalog. This object is available in API version 53.0 and later.

## Supported SOAP API Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Supported REST API Methods

DELETE, GET, HEAD, PATCH, POST, Query

## Special Access Rules

Available to customers with Employee Productivity Plus or IT Service Center add-ons.

## Fields

| Field | Details |
| --- | --- |
| Description | TypetextareaPropertiesNillableDescriptionFree-text description of the fulfillment flow. |
| DeveloperName | TypestringPropertiesFilter, Group, SortDescriptionDeveloper name for this fulfillment flow. |
| FlowId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe flow represented by this SvcCatalogFulfillmentFlow.This is a relationship field.Relationship NameFlowRelationship TypeLookupRefers ToFlowDefinition |
| FullName | TypestringPropertiesCreate, Group, NillableDescriptionThe full name of the fulfillment flow. This name has the following requirements:It must be unique across the org.It must contain only alphanumeric characters and underscores.It must begin with a letter.It must not include spaces.It must not end with an underscore.It must not contain two consecutive underscores.Query this field only if the query result contains up to one record. Otherwise, an error is returned. If more than one record exists, use multiple queries to retrieve the records. This limit protects performance. |
| Icon | TypestringPropertiesFilter, Group, Nillable, SortDescriptionReserved for future use. |
| ManageableState | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionDescribes the manageable state of a fulfillment flow that is contained in a package.Possible values are:beta—Managed-Betadeleted—Managed-Proposed-Deleteddeprecated—Managed-Proposed-DeprecateddeprecatedEditable—SecondGen-Installed-Deprecatedinstalled—Managed-InstalledinstalledEditable—SecondGen-Installed-Editablereleased—Managed-Releasedunmanaged—Unmanaged |
| MasterLabel | TypestringPropertiesFilter, Group, SortDescriptionThe primary label for the fulfillment flow record. |
| Metadata | TypecomplexvaluePropertiesCreate, Nillable, UpdateDescriptionThe fulfillment flow’s metadata. Query this field only if the query result contains up to one record. Otherwise, an error is returned. If more than one record exists, use multiple queries to retrieve the records. This limit protects performance. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe namespace associated with this fulfillment flow. |
