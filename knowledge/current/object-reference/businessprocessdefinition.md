---
title: "BusinessProcessDefinition"
domain: object-reference
topic: businessprocessdefinition
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:05.770Z
estimatedTokens: 336
keywords: [BusinessProcessDefinition, Setup, stores, stages, customer, lifecycle, map, associated, surveys, questions, created, Salesforce, reserved, internal, API]
---

# BusinessProcessDefinition

> Setup object that stores information about stages in a customer lifecycle map.
      The stages are associated with surveys and questions created using Salesforce Surveys.
    This object is reserved for internal use, and is available in API version 49.0 and
    later.

# BusinessProcessDefinition

Setup object that stores information about stages in a customer lifecycle map. The stages are associated with surveys and questions created using Salesforce Surveys. This object is reserved for internal use, and is available in API version 49.0 and later.

## Supported Calls

describeSObjects(), query(), retrieve()

## Fields

| Field | Details |
| --- | --- |
| BusinessProcessGroupId | TypereferencePropertiesFilter, Group, SortDescriptionUnique identifier of the customer lifecycle map associated with the stage. |
| DeveloperName | TypestringPropertiesFilter, Group, SortDescriptionDeveloper name of the stage. |
| Language | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe language of the MasterLabel.Possible values are:da—Danishde—Germanen_US—Englishes—Spanishes_MX—Spanish (Mexico)fi—Finnishfr—Frenchit—Italianja—Japaneseko—Koreannl_NL—Dutchno—Norwegianpt_BR—Portuguese (Brazil)ru—Russiansv—Swedishth—Thaizh_CN—Chinese (Simplified)zh_TW—Chinese (Traditional) |
| MasterLabel | TypestringPropertiesFilter, Group, SortDescriptionLabel of the stage. |
| ProcessDescription | TypetextareaPropertiesNillableDescriptionDescription of the stage. |
| SequenceNumber | TypeintPropertiesFilter, Group, SortDescriptionThe position of the stage in the associated customer lifecycle map. |
