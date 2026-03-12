---
title: "FulfillmentFalloutRule"
domain: revenue-cloud
topic: fulfillmentfalloutrule
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:11.401Z
estimatedTokens: 995
keywords: [FulfillmentFalloutRule, fulfillment, fallout, handling, rule, API, version, 61.0, later, Calls, Associated, Objects]
---

# FulfillmentFalloutRule

> Represents the fulfillment fallout handling rule. This object is
      available in API version 61.0 and later.

# FulfillmentFalloutRule

Represents the fulfillment fallout handling rule. This object is available in API version 61.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ErrorCode | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe failure error code of the fulfillment step that's associated with the rule. |
| FalloutQueueId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe fallout queue that's associated with the fallout task. This field is available in API version 62.0 and later.This field is a relationship field.Relationship NameFalloutQueueRefers ToGroup |
| FlowDefinitionName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the flow definition that's associated with the AutoTask type of fulfillment step. |
| IntegrationDefinitionId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe integration definition that's associated with the Callout type of fulfillment step.This field is a relationship field.Relationship NameIntegrationDefinitionRelationship TypeLookupRefers ToIntegrationProviderDef |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date when a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date when a user viewed this record. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the flow definition that's associated with the AutoTask type of fulfillment step. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user who created the fulfillment record.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| RetriesAllowed | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe maximum number of times a retry policy is run before the fulfillment step is considered failed. |
| RetryIntervals | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe interval after which the selected retry policy is run when the fulfillment step fails. This field is available in API version 62.0 and later. |
| RetryPolicy | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the retry policy used when the fulfillment step fails.Valid value is:ImmediateMonotonousStaggered |
| StepType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the type of fulfillment step associated with the fallout rule.Valid values are:AutoTaskCalloutManualTaskMilestonePause |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[FulfillmentFalloutRuleHistory](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[FulfillmentFalloutRuleShare](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- FulfillmentFalloutRuleHistory (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_history.htm)
- FulfillmentFalloutRuleShare (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_share.htm)
