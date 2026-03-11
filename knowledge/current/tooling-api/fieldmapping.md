---
title: "FieldMapping"
domain: tooling-api
topic: fieldmapping
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:46:37.961Z
keywords: [FieldMapping, Supported, SOAP, Calls, REST, HTTP, Methods, Fields]
---

# FieldMapping

# FieldMapping

Represents a mapping between fields in an object in the org and fields in a data service. A data service uses two separate field maps: one controls how the data service matches records in an object, and the other controls how the data service adds or updates data for an existing record.

This object is available in API version 38.0 and later.

## Supported SOAP Calls

query(),search()

## Supported REST HTTP Methods

GET

## Fields

| Field | Details |
| --- | --- |
| DeveloperName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionA unique name for this FieldMapping. This name can contain only underscores and alphanumeric characters, and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. Provides a globally unique identifier for the FieldMapping, which prevents conflicts with FieldMapping objects from other packages that have the same MasterLabel.NoteOnly users with View DeveloperName OR View Setup and Configuration permission can view, group, sort, and filter this field. |
| FieldMappingClientId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionA foreign key reference to a CleanRule that uses this FieldMapping. |
| Language | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe language of the FieldMapping. The following values are supported:Chinese (Simplified): zh_CNChinese (Traditional): zh_TWDanish: daDutch: nl_NLEnglish: en_USFinnish: fiFrench: frGerman: deItalian: itJapanese: jaKorean: koNorwegian: noPortuguese (Brazil): pt_BRRussian: ruSpanish: esSpanish (Mexico): es_MX Spanish (Mexico) defaults to Spanish for customer-defined translations.Swedish: svThai: th The Salesforce user interface is fully translated to Thai, but Help is in English. |
| MasterLabel | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionMaster label for this object. This display value is the internal label that is not translated. |
| SobjectType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, SortDescriptionAn object that’s acted on by this FieldMapping. The set of picklist values includes all the standard and custom object types in your org. However, if you specify an object that the data service doesn’t support, the API call returns an error. |