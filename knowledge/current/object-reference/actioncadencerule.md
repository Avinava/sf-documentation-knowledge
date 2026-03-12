---
title: "ActionCadenceRule"
domain: object-reference
topic: actioncadencerule
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:03.773Z
estimatedTokens: 1190
keywords: [ActionCadenceRule, logic, branch, step, uses, determine, action, cadence, tracker, follows, including, API, version, 48.0, later]
---

# ActionCadenceRule

> Represents the logic that a branch step uses to determine which branch
			an action cadence tracker follows in an action cadence. Use ActionCadenceRule to learn
			about a branch step, including its logic and what the next step is. This object is
		available in API version 48.0 and later.

# ActionCadenceRule

Represents the logic that a branch step uses to determine which branch an action cadence tracker follows in an action cadence. Use ActionCadenceRule to learn about a branch step, including its logic and what the next step is. This object is available in API version 48.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ActionCadenceStepId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ActionCadenceStep that this rule is associated with.This field is a relationship field.Relationship NameActionCadenceStepRelationship TypeLookupRefers ToActionCadenceStep |
| ConditionLogic | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe logical operator used to evaluate the rule conditions. Possible values are:ANDIf this rule has several conditions, all of them must be true for this step to be true. |
| GlobalEventType | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionIf the action cadence rule contains a global exit condition, this field contains the type of event that the rule represents.Possible values are:EmailReplyEmailHardBounceEmailSoftBounceCallMeaningfulConnectCallNotInterestedCallUnqualifiedCallLeftVoicemailCallCallBackLaterThis field is available in API version 49.0 and later. |
| GraphState | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionRepresents the state of the ActionCadenceRule within the step graph, or sequence, of the related action cadence. Available in API version 53.0 and later.Possible values are:Included—This step rule is part of the step graph.Orphaned—This step rule was removed from the step graph before the action cadence was activated. Orphaned step rules are deleted upon activation.Pending—This step rule has been created but hasn’t been added to the step graph. Pending step rules can be added to the step graph in the future.Retired—This step rule was previously part of an active action cadence step graph and was removed during an edit after activation. Retired step rules can have associated step trackers. |
| OutcomeNextStepName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe next step in the action cadence if this rule evaluates as true. If this rule evaluates as false, the next step is ActionCadenceStep.BranchDefaultStepName. |
| ParentRuleName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe value of the RuleName field of the previous rule in the action cadence. Must contain a valid rule name value unless this rule is the root rule. null if this rule is a root rule.This field is available in API version 49.0 and later. |
| RuleName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe name given to the rule. Every rule in an action cadence must have a unique name. |
| RuleType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe type of step that this rule applies to. Possible values are:BranchStep — The rule evaluates the condition of a branch step. A branch step is an ActionCadenceStep record with the field type equal to Branch.RepeatedStep— The rule evaluates the repeat steps for quick cadence. Available in API version 58.0 and later.RootStep— The rule evaluates a global exit condition.SubRootStep—Available in API version 58.0 and later.This field is available in API version 49.0 and later. |

## Usage

Use ActionCadenceRule to see all the rules associated with a branch step:

```

```

#### See Also

-   [ActionCadence](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_actioncadence.htm "Represents the definition of a cadence. This object is available in API version 45.0 and later.")

-   [ActionCadenceRuleCondition](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_actioncadencerulecondition.htm "Represents the logic for a branch step. This object is available in API version 48.0 and later.")

-   [ActionCadenceStep](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_actioncadencestep.htm "Represents a step in a cadence. Use ActionCadenceStep to learn which steps belong to a cadence, and how the steps are connected to each other. This object is available in API version 48.0 and later.")

-   [ActionCadenceStepTracker](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_actioncadencesteptracker.htm "Represents a step in an active cadence for a specific cadence target. This object is available in API version 48.0 and later.")

## Code Examples

```
select RuleName from ActionCadenceRule  where ActionCadenceStep.ActionCadence.Name = "High Priority CFO"
```

## Related Topics

- ActionCadence (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_actioncadence.htm)
- ActionCadenceRuleCondition (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_actioncadencerulecondition.htm)
- ActionCadenceStep (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_actioncadencestep.htm)
- ActionCadenceStepTracker (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_actioncadencesteptracker.htm)
