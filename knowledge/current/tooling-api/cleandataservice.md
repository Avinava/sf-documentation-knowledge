---
title: "CleanDataService"
domain: tooling-api
topic: cleandataservice
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:44.006Z
estimatedTokens: 724
keywords: [CleanDataService, data, service, adds, updates, records, org, SOAP, Calls, REST, HTTP]
---

# CleanDataService

> Represents a data service that adds and
            updates data in existing records in an org.

# CleanDataService

Represents a data service that adds and updates data in existing records in an org.

This object is available in API version 38.0 and later.

## Supported SOAP Calls

create(), delete(), describeSObjects(), query(), retrieve(), search(), update(), upsert()

## Supported REST HTTP Methods

GET

## Fields

| Field | Details |
| --- | --- |
| Description | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionUser-friendly text that describes the data service. |
| DeveloperName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionA unique name for this data service. This name can contain only underscores and alphanumeric characters, and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. Provides a globally unique identifier for the data service, which prevents conflicts with other data services that have the same MasterLabel.NoteOnly users with View DeveloperName OR View Setup and Configuration permission can view, group, sort, and filter this field. |
| Language | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe language of the data service. The following values are supported:Chinese (Simplified): zh_CNChinese (Traditional): zh_TWDanish: daDutch: nl_NLEnglish: en_USFinnish: fiFrench: frGerman: deItalian: itJapanese: jaKorean: koNorwegian: noPortuguese (Brazil): pt_BRRussian: ruSpanish: esSpanish (Mexico): es_MX Spanish (Mexico) defaults to Spanish for customer-defined translations.Swedish: svThai: th The Salesforce user interface is fully translated to Thai, but Help is in English. |
| ManageableState | TypeManageableState enumerated listPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionIndicates the manageable state of the specified component that is contained in a package:betadeleteddeprecateddeprecatedEditableinstalledinstalledEditablereleasedunmanaged |
| MasterLabel | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionMaster label for this object. This display value is the internal label that is not translated. |
| MatchEngine | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA key that maps to the internal data service identifier. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe namespace prefix associated with the data service, which is assigned to the Lightning Platform AppExchange package. This name can contain only underscores and alphanumeric characters, and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. The namespace helps differentiate custom objects and fields from those in use by other data services. |
