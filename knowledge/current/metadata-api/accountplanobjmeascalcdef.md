---
title: "AccountPlanObjMeasCalcDef"
domain: metadata-api
topic: accountplanobjmeascalcdef
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:45:50.264Z
keywords: [AccountPlanObjMeasCalcDef, Important, Parent, Type, File, Suffix, Directory, Location, Version, Special, Access, Rules, Fields, AccountPlanObjMeasCalcCond, Declarative, Metadata, Sample, Definition]
---

# AccountPlanObjMeasCalcDef

# AccountPlanObjMeasCalcDef

Represents the metadata associated with an account plan objective measure calculation definition. An account plan objective measure calculation definition contains a target object, rollup field, and logic for calculating the current value of a sales account plan objective measure.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Parent Type

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

## File Suffix and Directory Location

AccountPlanObjMeasCalcDef components have the suffix .accountPlanObjMeasCalcDef and are stored in the accountPlanObjMeasCalcDefs folder.

## Version

AccountPlanObjMeasCalcDef components are available in API version 63.0 and later.

## Special Access Rules

To access AccountPlanObjMeasCalcDef components, enable account plans.

## Fields

| Field Name | Description |
| --- | --- |
| conditions | Field TypeAccountPlanObjMeasCalcCondDescriptionThe field and value combinations for filtering records to include in the calculation definition. |
| description | Field TypestringDescriptionA summary of the calculation definition that’s visible to users when they select the definition for an account plan objective measure. |
| developerName | Field TypestringDescriptionRequired.The unique name of the object in the API. The name:must be 40 characters or fewermust begin with a lettercan contain only underscores and alphanumeric characterscan’t include spacescan’t end with an underscorecan’t contain 2 consecutive underscores |
| masterLabel | Field TypestringDescriptionRequired.Label for this calculation definition. This display value is the internal label that doesn't get translated. |
| rollupType | Field TypestringDescriptionRequired.The method for calculating the account plan objective measure’s current value from records that match the calculation definition and any optional conditions.Possible values are:CountMaxMinSumIn Setup, this field’s label is Calculation Type. |
| status | Field TypestringDescriptionRequired.Specifies the status of the calculation definition. Possible values are:ActiveDraftInactiveOnly active calculation definitions are available for users to select when they specify an account plan objective measure. |
| targetField | Field TypestringDescriptionThe field on TargetObject to use for calculating the account plan objective measure’s current value. Rollup fields on the Campaign, Case, Contact, or Opportunity object are supported.In Setup, this field’s label is Rollup Field. |
| targetObject | Field TypestringDescriptionRequired.The object to use for calculating the account plan objective measure’s current value.Possible values are:CampaignCaseContactOpportunity |

## AccountPlanObjMeasCalcCond

Represents a field and value combination for filtering records to include in the calculation of a sales account plan objective measure’s current value.

| Field Name | Description |
| --- | --- |
| fieldName | Field TypestringDescriptionRequired.A field on the calculation definition’s TargetObject that you want to filter by. Fields on the Campaign, Case, Contact, or Opportunity objects are supported. |
| operation | Field TypestringDescriptionRequired.The logical operator for matching records with the specified field value.Possible values are:ContainsEqualsGreaterOrEqualGreaterThanLessOrEqualLessThanNotContainNotEqualStartsWith |
| value | Field TypestringDescriptionRequired.The value to match for the specified field. |

## Declarative Metadata Sample Definition

The following is an example of an AccountPlanObjMeasCalcDef component.

```

```

The following is an example package.xml that references the previous definition.

```

```