---
title: "AccountPlanObjMeasCalcDef"
domain: object-reference
topic: accountplanobjmeascalcdef
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:03.672Z
estimatedTokens: 1003
keywords: [AccountPlanObjMeasCalcDef, definition, target, rollup, logic, calculating, current, sales, account, plan, objective, measure, API, version, 63.0]
---

# AccountPlanObjMeasCalcDef

> Represents the definition of a target object, rollup field, and logic for
         calculating the current value of a sales account plan objective measure. This object
      is available in API version 63.0 and later.

# AccountPlanObjMeasCalcDef

Represents the definition of a target object, rollup field, and logic for calculating the current value of a sales account plan objective measure. This object is available in API version 63.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Special Access Rules

This object is available if sales account plans are turned on.

## Fields

| Field | Details |
| --- | --- |
| Description | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA summary of the calculation definition that’s visible to users when they select the definition for an account plan objective measure. |
| DeveloperName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe unique name of the object in the API. The name:must be 40 characters or fewermust begin with a lettercan contain only underscores and alphanumeric characterscan’t include spacescan’t end with an underscorecan’t contain 2 consecutive underscores |
| Language | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe combined language and locale ISO code, which controls the language of the calculation definition. |
| MasterLabel | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionLabel for this calculation definition. This display value is the internal label that doesn't get translated. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe namespace prefix that is associated with this object. Each Developer Edition org that creates a managed package has a unique namespace prefix. Limit: 15 characters. You can refer to a component in a managed package by using the namespacePrefix__componentName notation.The namespace prefix can have one of these values.In Developer Edition orgs, NamespacePrefix is set to the namespace prefix of the org for all objects that support it, unless an object is in an installed managed package. In that case, the object has the namespace prefix of the installed managed package. This field’s value is the namespace prefix of the Developer Edition org of the package developer.In orgs that aren’t Developer Edition orgs, NamespacePrefix is set only for objects that are part of an installed managed package. All other objects have no namespace prefix. |
| RollupType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe method for calculating the account plan objective measure’s current value from records that match the calculation definition and any optional conditions.Possible values are:CountMaxMinSumIn Setup, this field’s label is Calculation Type. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionPossible values are:ActiveDraftInactiveOnly active calculation definitions are available for users to select when they specify an account plan objective measure. |
| TargetField | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe field on TargetObject to use for calculating the account plan objective measure’s current value. Rollup fields on the Campaign, Case, Contact, or Opportunity object are supported.In Setup, this field’s label is Rollup Field. |
| TargetObject | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, SortDescriptionThe object to use for calculating the account plan objective measure’s current value.Possible values are:CampaignCaseContactOpportunity |
| ValueType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe data type for calculating the account plan objective measure’s current value.Possible values are:CurrencyNumberPercent |

## Usage

Let’s say that a calculation definition tracks the currency amount on opportunities. The calculation definition’s TargetObject is Opportunity, TargetField is Amount, and RollupType is Sum.
