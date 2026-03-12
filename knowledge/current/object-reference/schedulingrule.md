---
title: "SchedulingRule"
domain: object-reference
topic: schedulingrule
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:16.619Z
estimatedTokens: 477
keywords: [SchedulingRule, scheduling, rules, hard, constraints, logic, engine, API, version, 52.0, later, Calls, Special, Access]
---

# SchedulingRule

> Represents scheduling rules that are hard constraints in the scheduling logic
         engine.  This object is available in API version 52.0 and later.

# SchedulingRule

Represents scheduling rules that are hard constraints in the scheduling logic engine. This object is available in API version 52.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), query(), retrieve(), update(), upsert()

## Special Access Rules

The org must have the Workforce Engagement license. To view, create, edit, and delete records, the user needs to have the Workforce Engagement Planner permission set.

## Fields

| Field | Details |
| --- | --- |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe scheduling rule description. |
| DeveloperName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe developer name value of the record.NoteOnly users with View DeveloperName OR View Setup and Configuration permission can view, group, sort, and filter this field. |
| Language | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe language of the scheduling rule. |
| MasterLabel | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe scheduling rule name. |
| SchedulingCategory | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, SortDescriptionShifts.Possible values are:A—AppointmentB—Shift |
| SchedulingRuleType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, SortDescriptionThe scheduling rule type.Possible values are:A—Active ResourcesB—Match SkillsC—AvailabilityLimitNonstandardShifts—Specifies a rule type that limits how many non-standard shifts can be assigned to each agent. This type is available in API version 54.0 and later.M—Match TerritoryQ—Match QueuesRestTimeMinutes—Specifies a rule type that requires the agent to have a minimum rest time between consecutive shifts. This type is available in API version 56.0 and later.W—Work Limit |
