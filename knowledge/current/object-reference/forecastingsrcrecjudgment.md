---
title: "ForecastingSrcRecJudgment"
domain: object-reference
topic: forecastingsrcrecjudgment
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:10.723Z
estimatedTokens: 363
keywords: [ForecastingSrcRecJudgment, forecast, managers’, judgment, whether, they, consider, opportunity-related, deal, certain, close, API, version, 59.0, later]
---

# ForecastingSrcRecJudgment

> Represents forecast managers’ judgment of whether they consider an
         opportunity-related deal to be certain to close. This object is available in API
      version 59.0 and later.

# ForecastingSrcRecJudgment

Represents forecast managers’ judgment of whether they consider an opportunity-related deal to be certain to close. This object is available in API version 59.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe currency code of the judgment. If omitted, the default is USD. |
| JudgmentOwnerId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the forecast manager.This field is a relationship field.Relationship NameJudgmentOwnerRelationship TypeLookupRefers ToUser |
| JudgmentValue | TypepicklistPropertiesCreate, Filter, Group, Sort, UpdateDescriptionWhether the deal is likely to close (IN) or not (OUT). |
| ReferenceObjectId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the opportunity-related object.This field is a polymorphic relationship field.Relationship NameReferenceObjectRelationship TypeLookupRefers ToOpportunity |
| Territory2Id | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionThe ID of the territory that the judgment is on.This field is a polymorphic relationship field.Relationship NameReferenceObjectRelationship TypeLookupRefers ToTerritory2 |
