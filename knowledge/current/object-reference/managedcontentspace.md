---
title: "ManagedContentSpace"
domain: object-reference
topic: managedcontentspace
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:12.714Z
estimatedTokens: 494
keywords: [ManagedContentSpace, instance, Salesforce, CMS, workspace, stores, managed, content, Users, groups, designated, permissions, access, manage, API]
---

# ManagedContentSpace

> Represents the complete instance of a Salesforce CMS workspace that stores
         managed content. Users and groups with designated permissions can access and manage the
         content in a CMS workspace. This object is available in API version 56.0 and later.

# ManagedContentSpace

Represents the complete instance of a Salesforce CMS workspace that stores managed content. Users and groups with designated permissions can access and manage the content in a CMS workspace. This object is available in API version 56.0 and later.

## Supported Calls

describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

## Special Access Rules

ManagedContentSpace is available when the Digital Experiences app is enabled.

## Fields

| Field | Details |
| --- | --- |
| ApiName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe unique API name of an enhanced Salesforce CMS workspace. Name requirements:must be 40 characters or fewermust begin with a lettercan contain only underscores and alphanumeric characterscan't include spacescan’t end with an underscorecan’t contain two consecutive underscores |
| DefaultLanguage | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionDefault language for the Salesforce CMS workspace.Possible values are:da—Danishde—Germanen_US—Englishes—Spanishes_MX—Spanish (Mexico)fi—Finnishfr—Frenchit—Italianja—Japaneseko—Koreannl_NL—Dutchno—Norwegianpt_BR—Portuguese (Brazil)ru—Russiansv—Swedishth—Thaizh_CN—Chinese (Simplified)zh_TW—Chinese (Traditional) |
| Description | TypetextareaPropertiesFilter, Group, Nillable, SortDescriptionDescription of the Salesforce CMS workspace. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record, a record related to this record, or a list view. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, the user might have only accessed this record or list view (LastReferencedDate) but not viewed it. |
| Name | TypestringPropertiesFilter, Group, idLookup, SortDescriptionName of the Salesforce CMS workspace. |
