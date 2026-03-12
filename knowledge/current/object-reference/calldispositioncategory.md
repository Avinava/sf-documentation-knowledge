---
title: "CallDispositionCategory"
domain: object-reference
topic: calldispositioncategory
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:05.981Z
estimatedTokens: 424
keywords: [CallDispositionCategory, call, outcome, phone, reports, branching, criteria, cadences, API, version, 47.0, later, Calls, Special, Access]
---

# CallDispositionCategory

> Represents the call outcome of a phone call that is used in reports and
			branching criteria for cadences. This object is available in API version 47.0 and
		later.

# CallDispositionCategory

Represents the call outcome of a phone call that is used in reports and branching criteria for cadences. This object is available in API version 47.0 and later.

## Supported Calls

describeSObjects(), query(), retrieve()

## Special Access Rules

As of Spring ’20 and later, only your Salesforce org's internal users can access this object.

## Fields

| Field | Details |
| --- | --- |
| Category | TypestringPropertiesFilter, Group, idLookup, SortDescriptionThe name of the call outcome. |
| DeveloperName | TypestringPropertiesFilter, Group, SortDescriptionThe unique name of the object in the API. This name can contain only underscores and alphanumeric characters, and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. In managed packages, this field prevents naming conflicts on package installations. With this field, a developer can change the object’s name in a managed package and the changes are reflected in a subscriber’s organization.NoteOnly users with View DeveloperName OR View Setup and Configuration permission can view, group, sort, and filter this field. |
| Language | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe language of the call category.Possible values are:da—Danishde—Germanen_US—Englishes—Spanishes_MX—Spanish (Mexico)fi—Finnishfr—Frenchit—Italianja—Japaneseko—Koreannl_NL—Dutchno—Norwegianpt_BR—Portuguese (Brazil)ru—Russiansv—Swedishth—Thaizh_CN—Chinese (Simplified)zh_TW—Chinese (Traditional) |
| MasterLabel | TypestringPropertiesFilter, Group, SortDescriptionThe static name of the call outcome. |
