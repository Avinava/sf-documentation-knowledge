---
title: "UserCriteria"
domain: tooling-api
topic: usercriteria
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:46.110Z
estimatedTokens: 590
keywords: [UserCriteria, member, criteria, Experience, Cloud, site, moderation, rules, Tooling, API, version, 39.0, later, SOAP, Calls]
---

# UserCriteria

> Represents the member
            criteria to use in Experience Cloud site moderation rules. Available in Tooling API
        version 39.0 and later.

# UserCriteria

Represents the member criteria to use in Experience Cloud site moderation rules. Available in Tooling API version 39.0 and later.

## Supported SOAP Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Supported REST HTTP Methods

GET

## Fields

| Field | Details |
| --- | --- |
| Description | TypetextareaPropertiesFilter, Nillable, SortDescriptionThe description of the user criteria. |
| Developer Name | TypestringPropertiesFilter, Group, SortDescriptionAPI name of the developer. This name can contain only underscores and alphanumeric characters and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. In managed packages, this field prevents naming conflicts on package installations. With this field, a developer can change the object’s name in a managed package and the changes are reflected in a subscriber’s organization. |
| FullName | TypestringPropertiesCreate, Group, NillableDescriptionThe full name of the associated metadata object in Metadata API. Query this field only if the query result contains no more than one record. Otherwise, an error is returned. If more than one record exists, use multiple queries to retrieve the records. This limit protects performance. |
| Language | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionThe language of the moderation rule. Valid values are:Chinese (Simplified): zh_CNChinese (Traditional): zh_TWDanish: daDutch: nl_NLEnglish: en_USFinnish: fiFrench: frGerman: deItalian: itJapanese: jaKorean: koNorwegian: noPortuguese (Brazil): pt_BRRussian: ruSpanish: esSpanish (Mexico): es_MX Spanish (Mexico) defaults to Spanish for customer-defined translations.Swedish: svThai: th The Salesforce user interface is fully translated to Thai, but Help is in English. |
| MasterLabel | TypestringPropertiesFilter, Group SortDescriptionThe label for the user criteria. |
| Metadata | Typemns:UserCriteriaPropertiesCreate, Nillable, UpdateDescriptionThe user criteria metadata. Query this field only if the query result contains no more than one record. Otherwise, an error is returned. If more than one record exists, use multiple queries to retrieve the records. This limit protects performance. |
