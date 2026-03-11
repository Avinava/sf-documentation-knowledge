---
title: "DecisionTableDatasetLink"
domain: omnistudio
topic: decisiontabledatasetlink
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:25:12.463Z
keywords: [DecisionTableDatasetLink, Note, Supported, SOAP, API, Calls, REST, Methods, Fields]
---

# DecisionTableDatasetLink

# DecisionTableDatasetLink

Represents a dataset link associated with a decision table. Use dataset links in a decision table to select an object whose records the decision table must evaluate and provide outcomes for. This object is available in API version 51.0 and later.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=industries_reference)

#### Note

Dataset links are supported only for Standard decision tables.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=industries_reference)

#### Note

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported SOAP API Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Supported REST API Methods

DELETE, GET, HEAD, PATCH, POST, Query

## Fields

| Field | Details |
| --- | --- |
| DecisionTableId | TypereferencePropertiesFilter, Group, SortDescriptionRequired. The unique identifier of the associated decision table.This is a relationship field.Relationship NameDecisionTableRelationship TypeLookupRefers ToDecisionTable |
| Description | TypetextareaPropertiesFilter, Nillable, SortDescriptionThe description of the dataset link. |
| DeveloperName | TypestringPropertiesFilter, Group, SortDescriptionThe developer name of the dataset link. |
| FullName | TypestringPropertiesCreate, Group, NillableDescriptionThe name of the decision table dataset link.Query this field only if the query result contains no more than one record. Otherwise, an error is returned. If more than one record exists, use multiple queries to retrieve the records. This limit protects performance. |
| IsDefault | TypebooleanPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionIndicates whether a dataset link is the default dataset link for a decision table. |
| Language | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionThe language in which the dataset link is created.Possible values are:da—Danishde—Germanen_US—Englishes—Spanishes_MX—Spanish (Mexico)fi—Finnishfr—Frenchit—Italianja—Japaneseko—Koreannl_NL—Dutchno—Norwegianpt_BR—Portuguese (Brazil)ru—Russiansv—Swedishth—Thaizh_CN—Chinese (Simplified)zh_TW—Chinese (Traditional) |
| ManageableState | TypeManageableState enumerated listPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionIndicates the manageable state of the specified component that is contained in a package:betadeleteddeprecateddeprecatedEditableinstalledinstalledEditablereleasedunmanaged |
| MasterLabel | TypestringPropertiesFilter, Group, SortDescriptionThe label of the dataset link. |
| Metadata | TypecomplexvaluePropertiesCreate, Nillable, UpdateDescriptionDecision table dataset link metadata.Query this field only if the query result contains no more than one record. Otherwise, an error is returned. If more than one record exists, use multiple queries to retrieve the records. This limit protects performance. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe namespace prefix that is associated with this object. Each Developer Edition org that creates a managed package has a unique namespace prefix. Limit: 15 characters. You can refer to a component in a managed package by using the namespacePrefix__componentName notation.The namespace prefix can have one of the following values.In Developer Edition orgs, NamespacePrefix is set to the namespace prefix of the org for all objects that support it, unless an object is in an installed managed package. In that case, the object has the namespace prefix of the installed managed package. This field’s value is the namespace prefix of the Developer Edition org of the package developer.In orgs that are not Developer Edition orgs, NamespacePrefix is set only for objects that are part of an installed managed package. All other objects have no namespace prefix. |
| SetupName | TypestringPropertiesFilter, Group, SortDescriptionRequired. The name of the dataset link, which appears in Setup. |
| SourceObject | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe name of the dataset link's source object. |