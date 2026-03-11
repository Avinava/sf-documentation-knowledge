---
title: "KeywordList"
domain: tooling-api
topic: keywordlist
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:46:38.162Z
keywords: [KeywordList, Supported, SOAP, Calls, REST, HTTP, Methods, Fields]
---

# KeywordList

# KeywordList

Represents a list of keywords used in Experience Cloud site moderation. Available in Tooling API version 36.0 and later.

This keyword list is a type of moderation criteria that defines offensive language or inappropriate content that you don’t want in your Experience Cloud site.

## Supported SOAP Calls

create(), delete(), query(), retrieve(), update()

## Supported REST HTTP Methods

DELETE, GET, PATCH, POST

## Fields

| Field | Details |
| --- | --- |
| Description | TypetextareaPropertiesFilter, Nillable, Sort.DescriptionA description of the keyword list. |
| DeveloperName | TypestringPropertiesFilter, Group, Namefield, SortDescriptionThe developer’s internal name for the keyword list used in the API. |
| FullName | TypestringPropertiesCreate, Group, Nillable.DescriptionThe full name of the associated metadata object in Metadata API.Query this field only if the query result contains no more than one record. Otherwise, an error is returned. If more than one record exists, use multiple queries to retrieve the records. This limit protects performance. |
| Language | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, Sort.DescriptionThe language of the keyword list. Valid values are:Chinese (Simplified): zh_CNChinese (Traditional): zh_TWDanish: daDutch: nl_NLEnglish: en_USFinnish: fiFrench: frGerman: deItalian: itJapanese: jaKorean: koNorwegian: noPortuguese (Brazil): pt_BRRussian: ruSpanish: esSpanish (Mexico): es_MX Spanish (Mexico) defaults to Spanish for customer-defined translations.Swedish: svThai: th The Salesforce user interface is fully translated to Thai, but Help is in English. |
| MasterLabel | TypestringPropertiesFilter, Group, Sort.DescriptionLabel for the keyword list. |
| Metadata | Typemns:KeywordListPropertiesCreate, Nillable, Update.DescriptionKeywordList metadata. Query this field only if the query result contains no more than one record. Otherwise, an error is returned. If more than one record exists, use multiple queries to retrieve the records. This limit protects performance. |