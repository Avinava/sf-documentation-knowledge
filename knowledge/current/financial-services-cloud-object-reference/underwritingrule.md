---
title: "UnderwritingRule"
domain: financial-services-cloud-object-reference
topic: underwritingrule
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:31.710Z
estimatedTokens: 933
keywords: [UnderwritingRule, underwriting, rule, product, API, version, 63.0, later, Calls, Associated, Objects]
---

# UnderwritingRule

> Represents details of an underwriting rule for a product. This object is
      available in API version 63.0 and later.

# UnderwritingRule

Represents details of an underwriting rule for a product. This object is available in API version 63.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ApiName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe API name of the underwriting rule. |
| Description | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe description about the underwriting rule. |
| DynamicRuleDefinition | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe scope and conditions specified for the dynamic rule. |
| EffectiveFromDateTime | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time from when the underwriting rule became active. |
| EffectiveToDateTime | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time after when the underwriting rules became inactive. |
| EvaluationFailureTaskGroupId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe group of tasks related to a fulfillment plan that’s executed when the rule evaluation fails.This field is a relationship field.Relationship NameEvaluationFailureTaskGroupRefers ToFulfillmentStepDefinitionGroup |
| EvaluationSuccessTaskGroupId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe group of tasks related to a fulfillment plan that’s executed when the rule evaluation is successful.This field is a relationship field.Relationship NameEvaluationSuccessTaskGroupRefers ToFulfillmentStepDefinitionGroup |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the underwriting rule. |
| ProductPath | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA path containing the product IDs that roll up to the parent product. |
| Sequence | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe sequence in which the rule is executed. |
| Status | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionSpecifies the status of the underwriting rule.Possible values are:ActiveDraftInactiveThe default value is Draft. |
| UnderwritingRuleGroupId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe underwriting rule group associated with this underwriting rule.This field is a relationship field.Relationship NameUnderwritingRuleGroupRelationship TypeMaster-detailRefers ToUnderwritingRuleGroup (the master object) |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[UnderwritingRuleHistory](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- UnderwritingRuleHistory (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_history.htm)
