---
title: "ApplicationSubtypeDefinition"
domain: omnistudio
topic: applicationsubtypedefinition
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:25:12.320Z
keywords: [ApplicationSubtypeDefinition, Important, Supported, SOAP, API, Calls, REST, Methods, Fields]
---

# ApplicationSubtypeDefinition

# ApplicationSubtypeDefinition

Represents a subtype of an application within an application domain. Available in API version 54.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=industries_reference)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported SOAP API Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Supported REST API Methods

DELETE, GET, HEAD, PATCH, POST, Query

## Fields

| Field | Details |
| --- | --- |
| ApplicationUsageType | TypestringPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the application's domain that defines the application's subtype.Possible values are:Explainability ServiceThe default value is ExplainabilityService. |
| Description | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe description of the application subtype definition record. |
| DeveloperName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe unique name of the application subtype definition. |
| Language | TypestringPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe language of the application subtype definition. |
| ManageableState | TypestringPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionIndicates the manageable state of the specified component that is contained in a package.Possible values are:beta—Managed-Betadeleted—Managed-Proposed-Deleteddeprecated—Managed-Proposed-DeprecateddeprecatedEditable—SecondGen-Installed-Deprecatedinstalled—Managed-InstalledinstalledEditable—SecondGen-Installed-Editablereleased—Managed-Releasedunmanaged—Unmanaged |
| MasterLabel | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe UI label of the application subtype definition. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe namespace prefix that is associated with this object. Each Developer Edition org that creates a managed package has a unique namespace prefix. Limit: 15 characters. You can refer to a component in a managed package by using the namespacePrefix__componentName notation. |