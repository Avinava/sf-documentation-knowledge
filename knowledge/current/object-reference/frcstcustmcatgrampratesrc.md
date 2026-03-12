---
title: "FrcstCustmCatgRampRateSrc"
domain: object-reference
topic: frcstcustmcatgrampratesrc
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:10.784Z
estimatedTokens: 461
keywords: [FrcstCustmCatgRampRateSrc, total, contract, custom, bulk, adjustments, API, version, 63.0, later, Calls]
---

# FrcstCustmCatgRampRateSrc

> Represents the total contract value used for custom bulk adjustments. 
      This object is available in API version 63.0 and later.

# FrcstCustmCatgRampRateSrc

Represents the total contract value used for custom bulk adjustments. This object is available in API version 63.0 and later.

## Supported Calls

create(), describeSObjects(), query(), retrieve(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| BaseValueFrcstSrcDefinitionId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe DMO that contains the field in which the total contract value exists. This field is a relationship field.Relationship NameBaseValueFrcstSrcDefinitionRefers ToForecastingSourceDefinition |
| DeveloperName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe unique name of the object in the API. The name:must be 40 characters or fewermust begin with a lettercan contain only underscores and alphanumeric characterscan’t include spacescan’t end with an underscorecan’t contain 2 consecutive underscoresIn managed packages, this field prevents naming conflicts on package installations. With this field, a developer can change the object’s name in a managed package and the changes are reflected in a subscriber’s organization. |
| ForecastingCustomCategoryId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe ID of the forecasting custom category.This field is a relationship field.Relationship NameForecastingCustomCategoryRefers ToForecastingCustomCategory |
| Language | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe combined language and locale ISO code, which controls the language of the FrcstCustmCatgRampRateSrc. |
| MasterLabel | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionLabel for this FrcstCustmCatgRampRateSrc value. This display value is the internal label that doesn't get translated. |
