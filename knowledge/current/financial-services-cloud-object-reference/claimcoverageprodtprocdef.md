---
title: "ClaimCoverageProdtProcDef"
domain: financial-services-cloud-object-reference
topic: claimcoverageprodtprocdef
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:29.746Z
estimatedTokens: 925
keywords: [ClaimCoverageProdtProcDef, definition, custom, configurations, that's, processing, claim, coverage, payment, API, version, 65.0, later, Calls]
---

# ClaimCoverageProdtProcDef

> Represents the definition for custom configurations that's used for
         processing claim coverage payment details. This object is available in API version
      65.0 and later.

# ClaimCoverageProdtProcDef

Represents the definition for custom configurations that's used for processing claim coverage payment details. This object is available in API version 65.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CalcAdjustmentDefId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe definition that's associated with the policy coverage used to calculate the adjusted amount for claim payments.This field is a polymorphic relationship field.Relationship NameCalcAdjustmentDefRefers ToExpressionSetDefinition, OmniIntegrationProcConfig |
| ClaimPaymentType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies the type of claim coverage payment detail.Possible values are:ExpenseLoss |
| DeveloperName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe unique name of the object in the API. |
| DisplayFieldSetValue | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe custom field set that contains additional fields to be displayed on the claim coverage payment detail UI.This field is a calculated field. |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the claim coverage processing definition is active (true) or not (false).The default value is false. |
| Language | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe combined language and locale ISO code, which controls the language of the ClaimCoverageProdtProcDef object.Possible values are:da—Danishde—Germanen_US—Englishes—Spanishes_MX—Spanish (Mexico)fi—Finnishfr—Frenchit—Italianja—Japaneseko—Koreannl_NL—Dutchno—Norwegianpt_BR—Portuguese (Brazil)ru—Russiansv—Swedishth—Thaizh_CN—Chinese (Simplified)zh_TW—Chinese (Traditional) |
| LimitProcessingDefId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe definition that's associated with the policy coverage used to process the limits during claim payments.This field is a polymorphic relationship field.Relationship NameLimitProcessingDefRefers ToExpressionSetDefinition, OmniIntegrationProcConfig |
| MasterLabel | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe label for this ClaimCoverageProdtProcDef object value. This display value is the internal label that doesn't get translated. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe namespace prefix that is associated with this object. Each Developer Edition org that creates a managed package has a unique namespace prefix. Limit: 15 characters. You can refer to a component in a managed package by using the namespacePrefix__componentName notation.The namespace prefix can have one of the following values.In Developer Edition orgs, NamespacePrefix is set to the namespace prefix of the org for all objects that support it, unless an object is in an installed managed package. In that case, the object has the namespace prefix of the installed managed package. This field's value is the namespace prefix of the Developer Edition org of the package developer.In orgs that are not Developer Edition orgs, NamespacePrefix is set only for objects that are part of an installed managed package. All other objects have no namespace prefix. |
| PolicyCoverageProdt | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe policy coverage product that's associated with the claim coverage product processing definition. |
