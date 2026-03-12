---
title: "Translation"
domain: object-reference
topic: translation
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:18.296Z
estimatedTokens: 357
keywords: [Translation, languages, enabled, Salesforce, org, API, version, 47.0, later, Calls, Special, Access, Rules]
---

# Translation

> The Translation object represents the languages enabled for translation in your
      Salesforce org. This object is available in API version 47.0 and later.

# Translation

The Translation object represents the languages enabled for translation in your Salesforce org. This object is available in API version 47.0 and later.

## Supported Calls

create(), describeSObjects(), query(), retrieve(), update(), upsert()

## Special Access Rules

-   Your organization must be using Enterprise, Performance, Unlimited, or Developer edition.
-   To view this object, you must have the “View Setup and Configuration” permission.
-   To use the create(), update(), and upsert() calls, Translation Workbench must be enabled in your org.
-   To manage translations, Translation Workbench must be enabled in your org. Specify translators for each language through the Translation Language Settings Setup page.

## Fields

| Field | Details |
| --- | --- |
| CanManage | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the language is available for translation (true) or not (false).Specify translators for each language through the Translation Language Setup page. |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the translated values for this language display to users (true) or not (false). |
| Language | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, SortDescriptionThe language code. See the Salesforce Help for a full list of languages and their codes. |
