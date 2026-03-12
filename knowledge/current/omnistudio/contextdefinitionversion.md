---
title: "ContextDefinitionVersion"
domain: omnistudio
topic: contextdefinitionversion
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:53.032Z
estimatedTokens: 451
keywords: [ContextDefinitionVersion, context, definition, version, active, time, API, 59.0, later, SOAP, Calls, REST]
---

# ContextDefinitionVersion

> Represents information about the context definition version. Only one version
         can be active at a time. This object is available in API version 59.0 and later.

# ContextDefinitionVersion

Represents information about the context definition version. Only one version can be active at a time. This object is available in API version 59.0 and later.

## Supported SOAP API Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Supported REST API Methods

DELETE, GET, HEAD, PATCH, POST, Query

## Fields

| Field | Details |
| --- | --- |
| ContextDefinitionId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe context definition record associated with the context definition version.This field is a relationship field.Relationship NameContextDefinitionRelationship TypeLookupRefers ToContextDefinition |
| EndDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time when the context definition version becomes inactive. |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the context definition version is active (true) or not (false).The default value is false. |
| ManageableState | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionIndicates the manageable state of the specified component that is contained in a package.Possible values are:beta—Managed-Betadeleted—Managed-Proposed-Deleteddeprecated—Managed-Proposed-DeprecateddeprecatedEditable—SecondGen-Installed-Deprecatedinstalled—Managed-InstalledinstalledEditable—SecondGen-Installed-Editablereleased—Managed-Releasedunmanaged—Unmanaged |
| StartDate | TypedateTimePropertiesCreate, Filter, Sort, UpdateDescriptionThe date and time when the context definition version becomes active. |
| VersionNumber | TypeintPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe context definition version number. |
