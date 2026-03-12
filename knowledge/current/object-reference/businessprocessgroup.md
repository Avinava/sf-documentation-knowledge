---
title: "BusinessProcessGroup"
domain: object-reference
topic: businessprocessgroup
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:05.781Z
estimatedTokens: 375
keywords: [BusinessProcessGroup, Setup, stores, customer, lifecycle, maps, track, scores, provided, customers, across, their, Salesforce, Surveys, reserved]
---

# BusinessProcessGroup

> Setup object that stores information about customer lifecycle maps. Customer
      lifecycle maps are used to track the scores provided by customers across their lifecycle using
      Salesforce Surveys. This object is reserved for internal use, and is available in API
    version 49.0 and later.

# BusinessProcessGroup

Setup object that stores information about customer lifecycle maps. Customer lifecycle maps are used to track the scores provided by customers across their lifecycle using Salesforce Surveys. This object is reserved for internal use, and is available in API version 49.0 and later.

## Supported Calls

describeSObjects(), query(), retrieve()

## Fields

| Field | Details |
| --- | --- |
| CustomerSatisfactionMetric | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionRepresents the question type that measures the customers' Net Promote Score or satisfaction score across their lifecycle.Possible values are:NPSRating |
| Description | TypetextareaPropertiesNillableDescriptionDescription of the customer lifecycle map. |
| DeveloperName | TypestringPropertiesFilter, Group, SortDescriptionDeveloper name the customer lifecycle map.NoteOnly users with View DeveloperName OR View Setup and Configuration permission can view, group, sort, and filter this field. |
| Language | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe language of the MasterLabel.Possible values are:da—Danishde—Germanen_US—Englishes—Spanishes_MX—Spanish (Mexico)fi—Finnishfr—Frenchit—Italianja—Japaneseko—Koreannl_NL—Dutchno—Norwegianpt_BR—Portuguese (Brazil)ru—Russiansv—Swedishth—Thaizh_CN—Chinese (Simplified)zh_TW—Chinese (Traditional) |
| MasterLabel | TypestringPropertiesFilter, Group, SortDescriptionLabel of the customer lifecycle map. |
