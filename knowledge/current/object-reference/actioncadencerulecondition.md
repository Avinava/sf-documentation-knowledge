---
title: "ActionCadenceRuleCondition"
domain: object-reference
topic: actioncadencerulecondition
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:03.781Z
estimatedTokens: 668
keywords: [ActionCadenceRuleCondition, logic, branch, step, API, version, 48.0, later, Calls, Usage]
---

# ActionCadenceRuleCondition

> Represents the logic for a branch step. This object is available in API
    version 48.0 and later.

# ActionCadenceRuleCondition

Represents the logic for a branch step. This object is available in API version 48.0 and later.

## Supported Calls

describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

## Fields

| Field | Details |
| --- | --- |
| ActionCadenceRuleId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the ActionCadenceRule that this condition is associated with. |
| Operator | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe conditional operator for this rule. Possible values are:Equal |
| Resource | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe field to evaluate. Possible values are:CallDispositionCategoryUse by branch steps.EmailEngagementUsed by ListenerBranch steps. |
| RuleConditionName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe name of the rule condition. Every rule condition in a cadence must have a unique name. |
| Value | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe event that your cadence rule condition listens for to decide when the event is complete.Possible values for emails are:EmailOpenEmailLinkClickPossible values for calls are:CallMeaningfulConnectCallUnqualifiedCallLeftVoicemailCallNotInterestedCallCallBackLater |

## Usage

Use ActionCadenceRuleContion to see all the rule conditions associated with a branch step:

```

```

#### See Also

-   [ActionCadence](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_actioncadence.htm "Represents the definition of a cadence. This object is available in API version 45.0 and later.")

-   [ActionCadenceRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_actioncadencerule.htm "Represents the logic that a branch step uses to determine which branch an action cadence tracker follows in an action cadence. Use ActionCadenceRule to learn about a branch step, including its logic and what the next step is. This object is available in API version 48.0 and later.")

-   [ActionCadenceStep](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_actioncadencestep.htm "Represents a step in a cadence. Use ActionCadenceStep to learn which steps belong to a cadence, and how the steps are connected to each other. This object is available in API version 48.0 and later.")

-   [ActionCadenceStepTracker](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_actioncadencesteptracker.htm "Represents a step in an active cadence for a specific cadence target. This object is available in API version 48.0 and later.")

## Code Examples

```
select RuleConditionName from ActionCadenceRuleCondition where ActionCadenceStepId= <ID of a branch step>
```

## Related Topics

- ActionCadence (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_actioncadence.htm)
- ActionCadenceRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_actioncadencerule.htm)
- ActionCadenceStep (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_actioncadencestep.htm)
- ActionCadenceStepTracker (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_actioncadencesteptracker.htm)
