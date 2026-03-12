---
title: "ExpressionSetVersion"
domain: omnistudio
topic: expressionsetversion
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:52.433Z
estimatedTokens: 1240
keywords: [ExpressionSetVersion, specific, version, expression, accessible, API, components, Lightning, Web, LWC, 55.0, later, Calls, Associated, Objects]
---

# ExpressionSetVersion

> Represents information about a specific version of an expression set.
         This object is also accessible through the UI API, which enables its use in components like
         Lightning Web Components (LWC). This object is available in API version 55.0 and
      later.

# ExpressionSetVersion

Represents information about a specific version of an expression set. This object is also accessible through the UI API, which enables its use in components like Lightning Web Components (LWC). This object is available in API version 55.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ApiName | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe API name of the expression set version. This is a required field and it requires a unique value. |
| Description | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe description of the expression set version, |
| DecimalScale | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe number of decimal places to apply to non-local resources such as context tags. |
| EndDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time when the expression set version becomes inactive. |
| ExpressionSetDefinitionVerId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe expression set definition version associated with this expression set version. This is a required field.This is a relationship field.Relationship NameExpressionSetDefinitionVerRelationship TypeLookupRefers ToExpressionSetDefinitionVersion |
| ExpressionSetId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the parent expression set record that’s associated with this expression set version. This is a required field.This is a relationship field.Relationship NameExpressionSetRelationship TypeLookupRefers ToExpressionSet |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the expression set version is active (true) or not (false). This is a required field.The default value is false. |
| IsLoopingEnabled | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether looping is active for this expression set version (true) or not (false).The default value is false. |
| LatestSimulationResult | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe result of the simulation service that processes the input variables defined for the expression set version, in JSON format. |
| LoopEndVariableName | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the resource that’s used to determine which resource can be processed last in the loop. |
| LoopIncrementVariableName | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the variable that’s used to determine which resource can be processed next in the loop. |
| LoopStartVariableName | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the variable that’s processed when the loop starts. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the expression set version. This is a required field. |
| Rank | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe rank of the expression set version. An expression set version's rank is used to determine when the version is chosen for processing. When more than one enabled version matches an expression set call, and the start and end date time periods overlap, the version with the highest rank is chosen. |
| ShouldShowExplExternally | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the decision explanation is exposed to external users (true) or not (false).The default value for this field is false.This field is available in API version 56.0 and later. |
| StartDateTime | TypedateTimePropertiesCreate, Defaulted on create, Filter, Nillable, Sort, UpdateDescriptionThe date and time when the expression set version becomes active. |
| VersionNumber | TypeintPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe version number of this expression set. This is a required field. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later

[ExpressionSetVersionFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_feed.htm "HTML (New Window)")

Feed tracking is available for the object.

[ExpressionSetVersionHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_history.htm "HTML (New Window)")

History is available for tracked fields of the object.
