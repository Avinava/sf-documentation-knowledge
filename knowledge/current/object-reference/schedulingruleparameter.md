---
title: "SchedulingRuleParameter"
domain: object-reference
topic: schedulingruleparameter
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:16.624Z
estimatedTokens: 365
keywords: [SchedulingRuleParameter, scheduling, rule, associated, API, version, 52.0, later, Calls, Special, Access, Rules]
---

# SchedulingRuleParameter

> Represents scheduling rule parameters associated with a scheduling rule.
      This object is available in API version 52.0 and later.

# SchedulingRuleParameter

Represents scheduling rule parameters associated with a scheduling rule. This object is available in API version 52.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Special Access Rules

The org must have the Workforce Engagement license. To view, create, edit, or delete records, the user needs to have the Workforce Engagement Planner permission set.

## Fields

| Field | Details |
| --- | --- |
| SchedulingParameterKey | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe scheduling rule parameter name.Possible values are:ConsiderAbsence—Consider absences when determining a service resource’s availability. This type is available in API version 56.0 and later.ConsiderSTM—Consider service territory membership when determining a service resource’s availability. Service territory membership defines the resource’s working hours in a location. This type is available in API version 56.0 and later.C—Constraint Field NameL—Limit TypeR—ResolutionT—Time ResolutionW—Work Unit |
| SchedulingRuleId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe scheduling rule ID.This is a relationship field.Relationship NameSchedulingRuleRelationship TypeLookupRefers ToSchedulingRule |
| Value | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe scheduling rule parameter value. |
