---
title: "ContextDefinitionSync"
domain: omnistudio
topic: contextdefinitionsync
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:53.025Z
estimatedTokens: 394
keywords: [ContextDefinitionSync, Stores, sync, operation, custom, definition, standard, API, version, 62.0, later, SOAP, Calls, REST]
---

# ContextDefinitionSync

> Stores information for the sync operation of the custom definition
         with the standard definition. This object is available in API version 62.0 and
      later.

# ContextDefinitionSync

Stores information for the sync operation of the custom definition with the standard definition. This object is available in API version 62.0 and later.

## Supported SOAP API Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Supported REST API Methods

DELETE, GET, HEAD, PATCH, POST, Query

## Fields

| Field | Details |
| --- | --- |
| ContextDefinitionName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe context definition the sync is running for. |
| EndDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time when the synchronization ends. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the context definition sync record. This is a default field created for a platform entity. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the owner who created the record. This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| StartDateTime | TypedateTimePropertiesCreate, Filter, Sort, UpdateDescriptionThe date and time when the synchronization starts. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe status of the sync operation.Valid values are:failedin_progresssuccess |
| SynchronizationInformation | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe details of the context definition synchronization. |
