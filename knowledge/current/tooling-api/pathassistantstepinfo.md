---
title: "PathAssistantStepInfo"
domain: tooling-api
topic: pathassistantstepinfo
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:45.476Z
estimatedTokens: 326
keywords: [PathAssistantStepInfo, guidance, step, Path, Tooling, API, version, 36.0, later, SOAP, Calls, REST, HTTP]
---

# PathAssistantStepInfo

> Represents guidance for a step on a Path. Available in
        Tooling API version 36.0 and later.

# PathAssistantStepInfo

Represents guidance for a step on a Path. Available in Tooling API version 36.0 and later.

## Supported SOAP Calls

update(), query()

## Supported REST HTTP Methods

GET, PATCH

## Fields

| Field | Details |
| --- | --- |
| DeveloperName | TypestringPropertiesFilter, Group, SortDescriptionThe unique name of the path guidance information. |
| Info | TypestringPropertiesFilter, Nillable, SortDescriptionThe text of the guidance displayed to the user in the user interface. |
| IsDeleted | TypebooleanPropertiesSortDescriptionIndicates whether the record has been moved to the Recycle Bin (true) or not (false). |
| Language | TypestringPropertiesFilter, Group, Restricted picklist, SortDescriptionThe language of the path. Valid values are:Chinese (Simplified): zh_CNChinese (Traditional): zh_TWDanish: daDutch: nl_NLEnglish: en_USFinnish: fiFrench: frGerman: deItalian: itJapanese: jaKorean: koNorwegian: noPortuguese (Brazil): pt_BRRussian: ruSpanish: esSpanish (Mexico): es_MX Spanish (Mexico) defaults to Spanish for customer-defined translations.Swedish: svThai: th The Salesforce user interface is fully translated to Thai, but Help is in English. |
| MasterLabel | TypestringPropertiesFilter, Group, SortDescriptionLabel for this path guidance information record. |
