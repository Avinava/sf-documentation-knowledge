---
title: "Audience"
domain: object-reference
topic: audience
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:05.259Z
estimatedTokens: 662
keywords: [Audience, defined, criteria, assigned, targeting, Experience, Cloud, site, API, version, 44.0, later, Calls]
---

# Audience

> Represents an audience that is defined by criteria and can be assigned and used
      for targeting in an Experience Cloud site. This object is available in API version 44.0
    and later.

# Audience

Represents an audience that is defined by criteria and can be assigned and used for targeting in an Experience Cloud site. This object is available in API version 44.0 and later.

## Supported Calls

delete(), describeSObjects(), query(), retrieve(), update()

## Fields

| Field | Details |
| --- | --- |
| AudienceName | TypestringPropertiesFilter, Group, Sort, UpdateDescriptionName of the audience. |
| ContainerId | TypereferencePropertiesFilter, Group, SortDescriptionID of the site or org that contains the audience. ContainerId is nillable in API versions 47.0 and earlier. |
| Description | TypestringPropertiesFilter, Group, Nillable, Sort, UpdateDescriptionDescription of the audience. |
| DeveloperName | TypestringPropertiesFilter, Group, Sort, UpdateDescriptionThe unique name of the audience in the API. This name can contain only underscores and alphanumeric characters, and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. This field is automatically generated, but you can supply your own value if you create the record using the API.NoteWhen creating large sets of data, always specify a unique DeveloperName for each record. If no DeveloperName is specified, performance may slow while Salesforce generates one for each record.NoteOnly users with View DeveloperName OR View Setup and Configuration permission can view, group, sort, and filter this field. |
| FormulaFilterType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionFormula filter for the criteria used to define the audience. Valid values are:AllCriteriaMatch—Matching all the conditions (AND).AnyCriterionMatches—Matching at least one condition (OR).CustomLogicMatches—Matching condition logic (AND and OR) and numbered criteria groups. This value is available in API version 45.0 and later. |
| Language | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionLanguage of the audience. Valid values are:Chinese (Simplified): zh_CNChinese (Traditional): zh_TWDanish: daDutch: nl_NLEnglish: en_USFinnish: fiFrench: frGerman: deItalian: itJapanese: jaKorean: koNorwegian: noPortuguese (Brazil): pt_BRRussian: ruSpanish: esSpanish (Mexico): es_MX Spanish (Mexico) defaults to Spanish for customer-defined translations.Swedish: svThai: th The Salesforce user interface is fully translated to Thai, but Help is in English. |
| MasterLabel | TypestringPropertiesFilter, Group, Sort, UpdateDescriptionMaster label for the audience. This internal name doesn’t get translated. |
