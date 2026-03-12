---
title: "AIApplication"
domain: object-reference
topic: aiapplication
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:04.121Z
estimatedTokens: 489
keywords: [AIApplication, application, Einstein, Prediction, Builder, API, version, 50.0, later, Calls]
---

# AIApplication

> Represents an AI application such as Einstein Prediction Builder. This object is available in API version 50.0 and later.

# AIApplication

Represents an AI application such as Einstein Prediction Builder. This object is available in API version 50.0 and later.

## Supported Calls

describeSObjects(), query(), retrieve()

## Fields

| Field | Details |
| --- | --- |
| DeveloperName | TypestringPropertiesFilter, Group, SortDescriptionThe unique name of the object in the API. This name can contain only underscores and alphanumeric characters, and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. In managed packages, this field prevents naming conflicts on package installations. With this field, a developer can change the object’s name in a managed package and the changes are reflected in a subscriber’s organization.NoteOnly users with View DeveloperName OR View Setup and Configuration permission can view, group, sort, and filter this field. |
| Language | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe language of the application. Possible values are:da—Danishde—Germanen_US—Englishes—Spanishes_MX—Spanish (Mexico)fi—Finnishfr—Frenchit—Italianja—Japaneseko—Koreannl_NL—Dutchno—Norwegianpt_BR—Portuguese (Brazil)ru—Russiansv—Swedishth—Thaizh_CN—Chinese (Simplified)zh_TW—Chinese (Traditional) |
| MasterLabel | TypestringPropertiesFilter, Group, SortDescriptionLabel that identifies the AI application throughout the Salesforce user interface. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionSpecifies the namespace of the application if installed with a managed package. |
| Status | TypepicklistPropertiesDefaulted on create, Filter, Group, Restricted picklist, SortDescriptionStatus of the AI application. Possible values are:DisabledEnabledMigrated |
| Type | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe type of application. Possible values are:PredictionBuilder |
