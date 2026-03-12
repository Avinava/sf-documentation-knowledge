---
title: "BusinessProcess"
domain: tooling-api
topic: businessprocess
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:43.941Z
estimatedTokens: 346
keywords: [BusinessProcess, business, process, SOAP, Calls, REST, HTTP, Special, Access, Rules]
---

# BusinessProcess

> Represents a business
        process.

# BusinessProcess

Represents a business process.

This object is available in API version 33.0 and later.

## Supported SOAP Calls

-   getDeleted(), getUpdated(), query(), retrieve(), and upsert() are available in API version 33.0 and later.

-   create() and update() are available in API version 36.0 and later.


## Supported REST HTTP Methods

GET, PATCH, POST

## Special Access Rules

Access to this object requires the View Setup and Configuration permission.

## Fields

| Field | Details |
| --- | --- |
| Description | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe business process description, limited to 255 characters. |
| IsActive | TypebooleanPropertiesDefaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether this business process is active (true) or not (false). |
| ManageableState | TypeManageableState enumerated listPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionIndicates the manageable state of the specified component that is contained in a package:betadeleteddeprecateddeprecatedEditableinstalledinstalledEditablereleasedunmanaged |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe process name. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionA unique string to distinguish this type from any others. |
