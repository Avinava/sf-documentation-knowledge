---
title: "DecisionMatrixDefinition"
domain: omnistudio
topic: decisionmatrixdefinition
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:25:12.433Z
keywords: [DecisionMatrixDefinition, Supported, SOAP, API, Calls, REST, Methods, Fields]
---

# DecisionMatrixDefinition

# DecisionMatrixDefinition

Represents information about a decision matrix definition. This object is available in API version 55.0 and later.

## Supported SOAP API Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Supported REST API Methods

DELETE, GET, HEAD, PATCH, POST, Query

## Fields

| Field | Details |
| --- | --- |
| DeveloperName | TypestringPropertiesFilter, Group, SortDescriptionThe developer name of the decision matrix definition. |
| FullName | TypestringPropertiesCreate, Group, NillableDescriptionFull name of the associated metadata type in Metadata API. Query this field only if the query result contains no more than one record. Otherwise, an error is returned. If more than one record exists, use multiple queries to retrieve the records. This limit protects performance. |
| Language | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionThe language in which this decision matrix definition is created.Possible values are:da—Danishde—Germanen_US—Englishes—Spanishes_MX—Spanish (Mexico)fi—Finnishfr—Frenchit—Italianja—Japaneseko—Koreannl_NL—Dutchno—Norwegianpt_BR—Portuguese (Brazil)ru—Russiansv—Swedishth—Thaizh_CN—Chinese (Simplified)zh_TW—Chinese (Traditional) |
| ManageableState | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionIndicates the manageable state of the specified component that is contained in a package.Possible values are:beta—Managed-Betadeleted—Managed-Proposed-Deleteddeprecated—Managed-Proposed-DeprecateddeprecatedEditable—SecondGen-Installed-Deprecatedinstalled—Managed-InstalledinstalledEditable—SecondGen-Installed-Editablereleased—Managed-Releasedunmanaged—Unmanaged |
| MasterLabel | TypestringPropertiesFilter, Group, SortDescriptionThe label of the decision matrix definition. |
| Metadata | TypecomplexvaluePropertiesCreate, Nillable, UpdateDescriptionDecision matrix definition metadata. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe namespace prefix associated with this object. Each Developer Edition org that creates a managed package has a unique namespace prefix. |