---
title: "ContextDefinitionReference"
domain: omnistudio
topic: contextdefinitionreference
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:53.020Z
estimatedTokens: 395
keywords: [ContextDefinitionReference, Context, Definition, another, API, version, 60.0, later, SOAP, Calls, REST]
---

# ContextDefinitionReference

> Represents information about reference from one Context Definition to another
         Context Definition.  This object is available in API version 60.0 and
      later.

# ContextDefinitionReference

Represents information about reference from one Context Definition to another Context Definition. This object is available in API version 60.0 and later.

## Supported SOAP API Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Supported REST API Methods

DELETE, GET, HEAD, PATCH, POST, Query

## Fields

| Field | Details |
| --- | --- |
| ContextDefinitionId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe context definition record that's associated with the context definition reference.This field is a relationship field.Relationship NameContextDefinitionRelationship TypeMaster-detailRefers ToContextDefinition |
| InheritedFrom | TypestringPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe name of the parent context definition that's used to derive the current context definition.This field is available in API version 60.0 and later. |
| ManageableState | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionIndicates the manageable state of the specified component that is contained in a package.Possible values are:beta—Managed-Betadeleted—Managed-Proposed-Deleteddeprecated—Managed-Proposed-DeprecateddeprecatedEditable—SecondGen-Installed-Deprecatedinstalled—Managed-InstalledinstalledEditable—SecondGen-Installed-Editablereleased—Managed-Releasedunmanaged—Unmanaged |
| ReferenceContextDefinition | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies the referred context definition. |
