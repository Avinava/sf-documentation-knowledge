---
title: "AdvAcctForecastDimSource"
domain: mfg-api-devguide
topic: advacctforecastdimsource
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:55.532Z
estimatedTokens: 720
keywords: [AdvAcctForecastDimSource, dimensions, advanced, account, forecast, generate, records, API, version, 53.0, later, Calls]
---

# AdvAcctForecastDimSource

> Represents information about the dimensions that can be used by advanced
         account forecast sets to generate advanced account forecast records. This object is
      available in API version 53.0 and later.

# AdvAcctForecastDimSource

Represents information about the dimensions that can be used by advanced account forecast sets to generate advanced account forecast records. This object is available in API version 53.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AdvAcctForecastDimSrcName | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the dimension source. |
| DeveloperName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe unique name of the object in the API. The name:must be 40 characters or fewermust begin with a lettercan contain only underscores and alphanumeric characterscan’t include spacescan’t end with an underscorecan’t contain 2 consecutive underscoresIn managed packages, this field prevents naming conflicts on package installations. With this field, a developer can change the object’s name in a managed package and the changes are reflected in a subscriber’s organization.Available in API version 54.0 and later. |
| Language | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe combined language and locale ISO code, which controls the language of the advanced account forecast dimension source record.Available in API version 54.0 and later. |
| MasterLabel | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionLabel for this advanced account forecast dimension source record value. This display value is the internal label that doesn't get translated.Available in API version 54.0 and later. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe namespace prefix that is associated with this object. Each Developer Edition org that creates a managed package has a unique namespace prefix. Limit: 15 characters. You can refer to a component in a managed package by using the namespacePrefix__componentName notation.The namespace prefix can have one of the following values.In Developer Edition orgs, NamespacePrefix is set to the namespace prefix of the org for all objects that support it, unless an object is in an installed managed package. In that case, the object has the namespace prefix of the installed managed package. This field’s value is the namespace prefix of the Developer Edition org of the package developer.In orgs that are not Developer Edition orgs, NamespacePrefix is set only for objects that are part of an installed managed package. All other objects have no namespace prefix.Available in API version 58.0 and later. |
| SourceObjectName | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe API name of the object that's used as a dimension to generate the advanced account forecast records. |
