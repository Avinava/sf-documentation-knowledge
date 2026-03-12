---
title: "FulfillmentTaskAssignmentRule"
domain: revenue-cloud
topic: fulfillmenttaskassignmentrule
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:10.378Z
estimatedTokens: 1039
keywords: [FulfillmentTaskAssignmentRule, Represents, set, actions, assign, task, user, queue., API, version, 63.0, later., Supported, Calls, Fields, Associated, Objects]
---

# FulfillmentTaskAssignmentRule

> Represents a set of actions that assign a task to a user or
         queue. This object is available in API version 63.0 and later.

# FulfillmentTaskAssignmentRule

Represents a set of actions that assign a task to a user or queue. This object is available in API version 63.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ConditionData | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe condition for executing the fulfillment task assignment rule. The condition is defined as a rule or a set of rules in JSON format. This field is available in API version 66.0 and later. |
| ConditionId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionCondition ID that's used to determine the task assignment.This field is a polymorphic relationship field.Relationship NameConditionRefers ToExpressionSet |
| DestinationId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionDestination ID of the task assignment such as, Queue or User.This field is a polymorphic relationship field.Relationship NameDestinationRefers ToGroup, User |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date when a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date when a user viewed this record. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the object that specifies the condition used to determine the task assignment. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user who created the task assignment rule record.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| Priority | TypeintPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe priority of the rule for execution. |
| SourceId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionSource ID of the task assignment such as Queue.This field is a relationship field.Relationship NameSourceRefers ToGroup |
| TaskAllocationType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe method of assigning the manual step.Valid values are:ContextBasedLeastLoadedRoundRobin |
| UsageType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionName of the usage type.Possible values are:FulfillmentGenericInsuranceRuleAction—Insurance Rule ActionIntegrationOrchestrator—Integration OrchestratorStageManagement—Stage ManagementThe default value is Fulfillment. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[FulfillmentTaskAssignmentRuleFeed](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[FulfillmentTaskAssignmentRuleHistory](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[FulfillmentTaskAssignmentRuleShare](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- FulfillmentTaskAssignmentRuleFeed (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_feed.htm)
- FulfillmentTaskAssignmentRuleHistory (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_history.htm)
- FulfillmentTaskAssignmentRuleShare (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_share.htm)
