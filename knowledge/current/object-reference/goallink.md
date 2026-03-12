---
title: "GoalLink"
domain: object-reference
topic: goallink
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:10.969Z
estimatedTokens: 178
keywords: [GoalLink, relationship, two, goals, many-to-many, meaning, goal, link, Calls]
---

# GoalLink

> Represents the relationship between two goals. This is a
			many-to-many relationship, meaning that each goal can link to many other
		goals.

# GoalLink

Represents the relationship between two goals. This is a many-to-many relationship, meaning that each goal can link to many other goals.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field Name | Details |
| --- | --- |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, SortDescriptionThe auto-generated name of the goal link. |
| ParentGoalId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe ID of the parent goal. |
| SubgoalId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe ID of the subgoal. |
