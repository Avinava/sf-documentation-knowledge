---
title: "AccountPlanObjMeasCalcDef"
domain: tooling-api
topic: accountplanobjmeascalcdef
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:44.470Z
estimatedTokens: 1203
keywords: [AccountPlanObjMeasCalcDef, Represents, metadata, associated, account, plan, objective, measure, calculation, definition., definition, contains, target, rollup, field, logic, calculating, current, sales, measure.]
---

# AccountPlanObjMeasCalcDef

> Represents the metadata associated with an account plan objective measure calculation definition. An account plan objective measure calculation definition contains a target object, rollup field, and logic for calculating the current value of a sales account plan objective measure. This object is available in API version 63.0 and later.

# AccountPlanObjMeasCalcDef

Represents the metadata associated with an account plan objective measure calculation definition. An account plan objective measure calculation definition contains a target object, rollup field, and logic for calculating the current value of a sales account plan objective measure. This object is available in API version 63.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_tooling)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported SOAP API Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Supported REST API Methods

DELETE, GET, HEAD, PATCH, POST, Query

## Special Access Rules

To access AccountPlanObjMeasCalcDef components, enable account plans.

## Fields

| Field | Details |
| --- | --- |
| Description | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA summary of the calculation definition that’s visible to users when they select the definition for an account plan objective measure. |
| DeveloperName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe unique name of the object in the API. This name can contain only underscores and alphanumeric characters, and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. In managed packages, this field prevents naming conflicts on package installations. With this field, a developer can change the object’s name in a managed package and the changes are reflected in a subscriber’s organization. Label is Record Type Name. |
| ManageableState | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionTypeManageableState enumerated listPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionIndicates the manageable state of the specified component that is contained in a package:betadeleteddeprecateddeprecatedEditableinstalledinstalledEditablereleasedunmanaged |
| MasterLabel | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionLabel for the AccountPlanObjMeasCalcDef object. In the UI, this field is Label. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe namespace prefix associated with this object. Each Developer Edition organization that creates a managed package has a unique namespace prefix. Limit: 15 characters. You can refer to a component in a managed package by using the namespacePrefix__componentName notation.The namespace prefix can have one of the following values:In Developer Edition organizations, the namespace prefix is set to the namespace prefix of the organization for all objects that support it. There is an exception if an object is in an installed managed package. In that case, the object has the namespace prefix of the installed managed package. This field’s value is the namespace prefix of the Developer Edition organization of the package developer.In organizations that are not Developer Edition organizations, NamespacePrefix is only set for objects that are part of an installed managed package. There is no namespace prefix for all other objects. |
| RollupType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe method for calculating the account plan objective measure’s current value from records that match the calculation definition and any optional conditions.Possible values are:CountMax—MaximumMin—MinimumSum |
| Status | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies the status of the calculation definition. Only active calculation definitions are available for users to select when they specify an account plan objective measure.Possible values are:ActiveDraftInactive |
| TargetField | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe field on TargetObject to use for calculating the account plan objective measure’s current value. Rollup fields on the Campaign, Case, Contact, or Opportunity object are supported.In Setup, this field’s label is Rollup Field. |
| TargetObject | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, SortDescriptionThe object to use for calculating the account plan objective measure’s current value.Possible values are:CampaignCaseContactOpportunity |
| ValueType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe data type for calculating the account plan objective measure’s current value.Possible values are:CurrencyNumberPercent |
