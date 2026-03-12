---
title: "UnderwritingRuleGroup"
domain: financial-services-cloud-object-reference
topic: underwritingrulegroup
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:31.718Z
estimatedTokens: 907
keywords: [UnderwritingRuleGroup, underwriting, rule, that's, associated, product, API, version, 63.0, later, Calls, Objects]
---

# UnderwritingRuleGroup

> Represents the underwriting rule that's associated with a product. This
      object is available in API version 63.0 and later.

# UnderwritingRuleGroup

Represents the underwriting rule that's associated with a product. This object is available in API version 63.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| EvaluationCriteria | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe criteria used to evaluate the underwriting rule. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the underwriting rule. |
| ObjectName | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe name of the object to which the underwriting rules apply.Possible values are:InsurancePolicyQuote |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThis field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| ProductId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe product associated with the underwriting rule.This field is a relationship field.Relationship NameProductRefers ToProduct2 |
| RuleSetApiName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe API name of the rule set that's created during the underwriting rule creation. |
| StageTransition | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe ID of the stage transition to which the underwriting rules apply. |
| StageTransitionName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the stage transition. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[UnderwritingRuleGroupHistory](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[UnderwritingRuleGroupOwnerSharingRule](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[UnderwritingRuleGroupShare](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- UnderwritingRuleGroupHistory (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_history.htm)
- UnderwritingRuleGroupOwnerSharingRule (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- UnderwritingRuleGroupShare (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_share.htm)
