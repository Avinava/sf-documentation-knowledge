---
title: "ProviderSampleLimitTemplate"
domain: life-sciences-dev-guide
topic: providersamplelimittemplate
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:46.979Z
estimatedTokens: 955
keywords: [ProviderSampleLimitTemplate, Setup, definition, rules, sample, limits, templates, API, version, 65.0, later, Calls, SOAP, REST]
---

# ProviderSampleLimitTemplate

> Setup object that represents the definition and rules of sample limits
         templates. This object is available in API version 65.0 and later.

# ProviderSampleLimitTemplate

Setup object that represents the definition and rules of sample limits templates. This object is available in API version 65.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=life_sciences_dev_guide)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), query(), retrieve(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| DeveloperName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe unique name of the object in the API. |
| DiscrepancyAlertType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies whether a rule violation in the template is flagged as an error or a warning.Possible values are:ErrorWarningThe default value is Error. |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether this template is active or not.The default value is false. |
| IsAdvanced | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates the type of custom template. Defines whether or not the template is advanced.The default value is false. |
| IsCloned | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the template is a cloned generic template or not. Cloned generic templates and advanced templates not flagged as IsLawBased are flagged as True.The default value is false. |
| IsLawBased | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether an advanced template is a country regulation or not. If the template is law-based, the DiscrepancyAlertType setting is Error.The default value is false. |
| Language | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe language of the ProviderSampleLimitTemplate record. |
| MasterLabel | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe label for this provider sample limit template value. This display value is the internal label that doesn't get translated. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe namespace prefix that is associated with this object. Each Developer Edition org that creates a managed package has a unique namespace prefix. Limit: 15 characters. You can refer to a component in a managed package by using the namespacePrefix__componentName notation.The namespace prefix can have one of the following values.In Developer Edition orgs, NamespacePrefix is set to the namespace prefix of the org for all objects that support it, unless an object is in an installed managed package. In that case, the object has the namespace prefix of the installed managed package. This field’s value is the namespace prefix of the Developer Edition org of the package developer.In orgs that aren’t Developer Edition orgs, NamespacePrefix is set only for objects that are part of an installed managed package. All other objects have no namespace prefix. |
| PriorityNumber | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe priority order of the cloned generic template to be applied to a product. |
| RuleCondition | TypetextareaPropertiesCreate, UpdateDescriptionRequired. The rules that establish the limits for this template. |
| RuleExpression | TypetextareaPropertiesCreate, UpdateDescriptionRequired. Specifies the rules to be evaluated and the boolean operation (AND/OR) for combining multiple rules. |
