---
title: "SchedulingObjective"
domain: object-reference
topic: schedulingobjective
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:16.614Z
estimatedTokens: 481
keywords: [SchedulingObjective, business, goals, scheduling, tools, consider, API, version, 53.0, later, Calls, Special, Access, Rules]
---

# SchedulingObjective

> Represents business goals that the scheduling tools consider. This
      object is available in API version 53.0 and later.

# SchedulingObjective

Represents business goals that the scheduling tools consider. This object is available in API version 53.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), query(), retrieve(), update(), upsert()

## Special Access Rules

The org must have the Workforce Engagement license. To view, create, edit, and delete records, the user needs to have the Workforce Engagement Planner permission set.

## Fields

| Field | Details |
| --- | --- |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe scheduling objective description. |
| DeveloperName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe developer name of the record.NoteOnly users with View DeveloperName OR View Setup and Configuration permission can view, group, sort, and filter this field. |
| Language | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionPossible values are the supported languages for Workforce Engagement. |
| MasterLabel | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe scheduling objective name. |
| SchedulingCategory | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, SortDescriptionThe record that the scheduling objective applies to.Possible values are:A—AppointmentB—Shift |
| SchedulingObjectiveType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, SortDescriptionThe type of scheduling objective.Possible values are:AgentPreference—Scheduling tools consider agents’ service resource preferences. In the UI, this value appears as Maximized Preferences.BalanceNonStandardShifts—Scheduling tools balance the number of shifts across available agents within a time period.BalanceShifts—Scheduling tools balance the number of non-standard shifts across available agents within a time period. |
