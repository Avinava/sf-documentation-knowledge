---
title: "ExpressionSetDefinitionVersion"
domain: omnistudio
topic: expressionsetdefinitionversion
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:54.839Z
estimatedTokens: 743
keywords: [ExpressionSetDefinitionVersion, Represents, information, expression, set, definition, version., API, version, 55.0, later., Supported, SOAP, Calls, REST, Fields]
---

# ExpressionSetDefinitionVersion

> Represents information about an expression set definition
         version. This object is available in API version 55.0 and later.

# ExpressionSetDefinitionVersion

Represents information about an expression set definition version. This object is available in API version 55.0 and later.

## Supported SOAP API Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Supported REST API Methods

DELETE, GET, HEAD, PATCH, POST, Query

## Fields

| Field | Details |
| --- | --- |
| DeveloperName | TypestringPropertiesFilter, Group, SortDescriptionThe developer name of the expression set definition version. |
| ExpressionSetDefinitionId | TypereferencePropertiesFilter, Group, SortDescriptionThe expression set definition record associated with this expression set definition version.This field is a relationship field.Relationship NameExpressionSetDefinitionRelationship TypeLookupRefers ToExpressionSetDefinition |
| FullName | TypestringPropertiesCreate, Group, NillableDescriptionFull name of the associated metadata type in Metadata API. Query this field only if the query result contains no more than one record. Otherwise, an error is returned. If more than one record exists, use multiple queries to retrieve the records. This limit protects performance. |
| Language | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionThe language in which this expression set definition version is created.Possible values are:da—Danishde—Germanen_US—Englishes—Spanishes_MX—Spanish (Mexico)fi—Finnishfr—Frenchit—Italianja—Japaneseko—Koreannl_NL—Dutchno—Norwegianpt_BR—Portuguese (Brazil)ru—Russiansv—Swedishth—Thaizh_CN—Chinese (Simplified)zh_TW—Chinese (Traditional) |
| ManageableState | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionIndicates the manageable state of the specified component that is contained in a package.Possible values are:beta—Managed-Betadeleted—Managed-Proposed-Deleteddeprecated—Managed-Proposed-DeprecateddeprecatedEditable—SecondGen-Installed-Deprecatedinstalled—Managed-InstalledinstalledEditable—SecondGen-Installed-Editablereleased—Managed-Releasedunmanaged—Unmanaged |
| MasterLabel | TypestringPropertiesFilter, Group, SortDescriptionThe label of the expression set definition version. |
| Metadata | TypecomplexvaluePropertiesCreate, Nillable, UpdateDescriptionExpression set definition version metadata. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe namespace prefix associated with this object. Each Developer Edition org that creates a managed package has a unique namespace prefix. |
| Status | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionIndicates the status of the expression set definition version.Possible values are:ActiveDraftInactiveInvalidDraftObsoleteThe default value is Draft. |
| VersionNumber | TypeintPropertiesFilter, Group, SortDescriptionThe version number of the expression set definition version. This is a required field. |
