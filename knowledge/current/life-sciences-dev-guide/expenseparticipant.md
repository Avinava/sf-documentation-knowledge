---
title: "ExpenseParticipant"
domain: life-sciences-dev-guide
topic: expenseparticipant
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:45.834Z
estimatedTokens: 618
keywords: [ExpenseParticipant, participant, expence, expense, allocation, API, version, 65.0, later, Calls, Associated, Objects]
---

# ExpenseParticipant

> Represents a participant in an expence and is used in expense allocation.
         This object is available in API version 65.0 and later..

# ExpenseParticipant

Represents a participant in an expence and is used in expense allocation. This object is available in API version 65.0 and later..

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Amount | TypecurrencyPropertiesCreate, Filter, Sort, UpdateDescriptionThe amount of the expense allocated to the participant. |
| ExpenseId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThis field is a relationship field.Relationship NameExpenseRelationship TypeMaster-detailRefers ToExpense (the master object) |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view.If this value is null, and LastReferenceDate is not null, the user accessed this record or list view indirectly. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the participant. |
| ParticipantId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe ID of participant.This field is a polymorphic relationship field.Relationship NameParticipantRefers ToAccount, Contact |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[expenseParticipantFeed](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[expenseParticipantHistory](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- expenseParticipantFeed (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm)
- expenseParticipantHistory (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm)
