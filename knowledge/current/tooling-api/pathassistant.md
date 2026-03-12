---
title: "PathAssistant"
domain: tooling-api
topic: pathassistant
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:46.333Z
estimatedTokens: 1085
keywords: [PathAssistant, Represents, Path., Tooling, API, version, 36.0, later., Important, Supported, SOAP, Calls, REST, HTTP, Fields]
---

# PathAssistant

> Represents a Path. Available in Tooling API version 36.0
        and later.

# PathAssistant

Represents a Path. Available in Tooling API version 36.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_tooling)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. Because changing terms in our code can break current implementations, we maintained this object’s name.

## Supported SOAP Calls

retrieve(), query()

## Supported REST HTTP Methods

DELETE, GET, PATCH, POST

## Fields

| Field | Details |
| --- | --- |
| DeveloperName | TypestringPropertiesFilter, Group, SortDescriptionThe unique name of the path in the API. |
| FullName | TypestringPropertiesGroup, NillableDescriptionThe name of the path in the Metadata API.Query this field only if the query result contains no more than 1 record. Otherwise, an error is returned. If more than 1 record exists, use multiple queries to retrieve the records. This limit protects performance. |
| IsActive | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the path is active (true) or inactive (false). |
| IsDeleted | TypebooleanPropertiesSortDescriptionIndicates whether the record has been moved to the Recycle Bin (true) or not (false). |
| IsMasterRecordType | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether this path is for the main record type (true) or not (false). |
| Language | TypestringPropertiesFilter, Group, Restricted picklist, SortDescriptionThe language of the path. Valid values are:Chinese (Simplified): zh_CNChinese (Traditional): zh_TWDanish: daDutch: nl_NLEnglish: en_USFinnish: fiFrench: frGerman: deItalian: itJapanese: jaKorean: koNorwegian: noPortuguese (Brazil): pt_BRRussian: ruSpanish: esSpanish (Mexico): es_MX Spanish (Mexico) defaults to Spanish for customer-defined translations.Swedish: svThai: th The Salesforce user interface is fully translated to Thai, but Help is in English. |
| ManageableState | TypeManageableState enumerated listPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionIndicates the manageable state of the specified component that is contained in a package:betadeleteddeprecateddeprecatedEditableinstalledinstalledEditablereleasedunmanaged |
| MasterLabel | TypestringPropertiesFilter, Group, SortDescriptionLabel for this path. |
| Metadata | Typemsn:PathAssistantPropertiesCreate, Nillable, UpdateDescriptionPath metadata from the msn namespace.Query this field only if the query result contains no more than 1 record. Otherwise, an error is returned. If more than 1 record exists, use multiple queries to retrieve the records. This limit protects performance. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe namespace prefix that is associated with this object. Each Developer Edition org that creates a managed package has a unique namespace prefix. Limit: 15 characters. You can refer to a component in a managed package by using the namespacePrefix__componentName notation.The namespace prefix can have one of the following values.In Developer Edition orgs, NamespacePrefix is set to the namespace prefix of the org for all objects that support it, unless an object is in an installed managed package. In that case, the object has the namespace prefix of the installed managed package. This field’s value is the namespace prefix of the Developer Edition org of the package developer.In orgs that are not Developer Edition orgs, NamespacePrefix is set only for objects that are part of an installed managed package. All other objects have no namespace prefix.This field can’t be accessed unless the logged-in user has the “Customize Application” permission. |
| RecordTypeId | TypeIDPropertiesFilter, Group, Nillable, SortDescriptionThe unique identifier for a record type. |
| SobjectProcessField | TypestringPropertiesFilter, Group, Restricted picklist, SortDescriptionName of the picklist field which determines the steps you can use in the path.For example, OpportunityStage in the case of opportunities or LeadStatus in the case of leads. |
| SobjectType | TypestringPropertiesFilter, Group, Restricted picklist, SortDescriptionThe object this path relates to. Valid values are: Opportunity, Lead, Quote, or the API name of a custom object. |
