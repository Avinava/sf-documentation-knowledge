---
title: "Entity and Field Considerations in Triggers"
domain: apex-guide
topic: entity-and-field-considerations-in-triggers
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T05:14:34.185Z
estimatedTokens: 1019
keywords: [Entity, Field, Considerations, Triggers, create, triggers, consider, behavior, certain, entities, fields, operations., QuestionDataCategorySelection, After, Insert, Fields, Updateable, Before, Event, DateTime]
---

# Entity and Field Considerations in Triggers

> When you create triggers, consider the behavior of certain entities, fields, and
        operations.

# Entity and Field Considerations in Triggers

When you create triggers, consider the behavior of certain entities, fields, and operations.

## QuestionDataCategorySelection Entity Not Available in After Insert Triggers

The after insert trigger that fires after inserting one or more Question records doesn’t have access to the QuestionDataCategorySelection records that are associated with the inserted Questions. For example, the following query doesn’t return any results in an after insert trigger:

```

```

## Fields Not Updateable in Before Triggers

Some field values are set during the system save operation, which occurs after before triggers have fired. As a result, these fields cannot be modified or accurately detected in before insert or before update triggers. Some examples include:

-   Task.isClosed
-   Opportunity.amount\*
-   Opportunity.ForecastCategory
-   Opportunity.isWon
-   Opportunity.isClosed
-   Contract.activatedDate
-   Contract.activatedById
-   Case.isClosed
-   Solution.isReviewed
-   Id (for all records)\*\*
-   createdDate (for all records)\*\*
-   lastUpdated (for all records)
-   Event.WhoId (when Shared Activities is enabled)
-   Task.WhoId (when Shared Activities is enabled)

\* When Opportunity has no lineitems, Amount can be modified by a before trigger.

\*\* Id and createdDate can be detected in before update triggers, but cannot be modified.

## Fields Not Updateable in After Triggers

The following fields can’t be updated by after insert or after update triggers.

-   Event.WhoId
-   Task.WhoId

## Considerations for Event DateTime Fields in Insert and Update Triggers

We recommend using the following date and time fields to create or update events.

-   When creating or updating a timed Event, use ActivityDateTime to avoid issues with inconsistent date and time values.
-   When creating or updating an all-day Event, use ActivityDate to avoid issues with inconsistent date and time values.
-   We recommend that you use DurationInMinutes because it works with all updates and creates for Events.

## Operations Not Supported in Insert and Update Triggers

The following operations aren’t supported in insert and update triggers.

-   Manipulating an activity relation through the TaskRelation or EventRelation object, if Shared Activities is enabled
-   Manipulating an invitee relation on a group event through the Invitee object, whether or not Shared Activities is enabled

## Entities Not Supported in After Undelete Triggers

Certain objects can’t be restored, and therefore, shouldn’t have after undelete triggers.

-   CollaborationGroup
-   CollaborationGroupMember
-   FeedItem
-   FeedComment

## Considerations for Update Triggers

Field history tracking honors the permissions of the current user. If the current user doesn’t have permission to directly edit an object or field, but the user activates a trigger that changes an object or field with history tracking enabled, no history of the change is recorded.

## Considerations for the Salesforce Side Panel for Salesforce for Outlook

When an email is associated to a record using the Salesforce Side Panel for Salesforce for Outlook, the email associations are represented in the WhoId or WhatId fields on a task record. Associations are completed after the task is created, so the Task.WhoId and Task.WhatId fields aren’t immediately available in before or after Task triggers for insert and update events, and their values are initially null. The WhoId and WhatId fields are set on the saved task record in a subsequent operation, however, so their values can be retrieved later.

-   [← Previous](atlas.en-us.apexcode.meta/apexcode/apex_triggers_ignoring_operations.htm "Operations That Don't Invoke Triggers")
-   [Next →](atlas.en-us.apexcode.meta/apexcode/apex_triggers_fields_not_updated_chatter.htm "Triggers for Chatter Objects")

#### See Also

-   [Triggers for Chatter Objects](atlas.en-us.apexcode.meta/apexcode/apex_triggers_fields_not_updated_chatter.htm "You can write triggers for the FeedItem and FeedComment objects.")

## Code Examples

```
QuestionDataCategorySelection[] dcList = 
    [select Id,DataCategoryName from QuestionDataCategorySelection where ParentId IN :questions];
```

## Related Topics

- ← Previous (atlas.en-us.apexcode.meta/apexcode/apex_triggers_ignoring_operations.htm)
- Next → (atlas.en-us.apexcode.meta/apexcode/apex_triggers_fields_not_updated_chatter.htm)
- Triggers for Chatter Objects (atlas.en-us.apexcode.meta/apexcode/apex_triggers_fields_not_updated_chatter.htm)
