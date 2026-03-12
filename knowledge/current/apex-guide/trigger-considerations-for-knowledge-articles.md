---
title: "Trigger Considerations for Knowledge Articles"
domain: apex-guide
topic: trigger-considerations-for-knowledge-articles
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:33:34.195Z
estimatedTokens: 1049
keywords: [Trigger, Considerations, Knowledge, Articles, write, triggers, KnowledgeArticleVersion, objects, actions, don’t, fire, archiving, Apex, Impact, Lightning]
---

# Trigger Considerations for Knowledge Articles

> You can write triggers for KnowledgeArticleVersion objects. Learn when you can use
    triggers, and which actions don’t fire triggers, like archiving articles.

# Trigger Considerations for Knowledge Articles

You can write triggers for KnowledgeArticleVersion objects. Learn when you can use triggers, and which actions don’t fire triggers, like archiving articles.

In general, KnowledgeArticleVersion (KAV) records can use these triggers:

-   Creating a KAV record calls the before insert and after insert triggers. This includes creating an article, and creating drafts from archived, published, and master-language articles using the Restore, Edit as Draft, and Submit for Translation actions.
-   Editing an existing KAV record calls the before update and after update triggers.
-   Deleting a KAV record calls the before delete and after delete triggers.
-   Importing articles calls the before insert and after insert triggers. Importing articles with translations also calls the before update and after update triggers.


Actions that change the publication status of a KAV record, such as Publish and Archive, do not fire Apex or flow triggers. However, sometimes publishing an article from the UI causes the article to be saved, and in these instances the before update and after update triggers are called.

## Knowledge Actions and Apex Triggers

Consider the following when writing Apex triggers for actions on KnowledgeArticleVersion:

Save, Save and Close

When an article is saved, the before update and after update triggers are called. When a new article is saved for the first time, the before insert and after insert triggers work instead.

Edit, Edit as Draft

-   When a draft translation is edited, you can use the before update and after update triggers.
-   The Edit as Draft action creates a draft from a published article, so the before insert and after insert triggers fire.
-   In Salesforce Classic, no triggers fire when a draft master-language article is edited.
-   In Salesforce Classic, the before insert and after insert triggers are called when editing an archived article from the Article Management tab. This creates a draft KAV record.

Cancel, Delete

The before delete and after delete triggers are called in these cases:

-   When deleting a translation draft.
-   From the Article Management or Knowledge tab in Salesforce Classic, after editing a published article and then clicking Cancel. This deletes the new draft.

Submit for Translation

This action creates a draft translation, so you can generally use the before insert and after insert triggers. In Salesforce Classic, you can use the before update and after update triggers when you create a new article from the Knowledge tab, save it, and then submit for translation. The before update and after update triggers fire when the master-language article is currently being edited, but not from list views or when viewing the article.

Assign

The before update and after update triggers are called only when doing so causes a record save first. This happens when the article is being edited before the Assign button is clicked.

## Actions That Don’t Fire Triggers

These actions can’t fire Apex triggers:

-   Undelete articles from the recycle bin.
-   Preview and archive articles.

## Impact on Lightning Migration

Migrating from Knowledge in Salesforce Classic to Lightning Knowledge affects Apex triggers. Writing an Apex trigger on KnowledgeArticleVersion objects creates dependencies and prevents the KAV object from being deleted. When you migrate an org with multiple article types to Lightning Knowledge, you must remove any Apex triggers that reference the KAV article types. During migration, admins see an error message if Apex triggers still reference the article type KAV objects that are deleted during migration. If you cancel Lightning Knowledge migration while Apex triggers exist that refer to the new KAV object, admins are notified and you must remove the Apex code.

## Sample Knowledge Trigger

For example, you can define a trigger that enters summary text when an article is created.

```

```

-   [← Previous](atlas.en-us.apexcode.meta/apexcode/apex_triggers_fields_not_updated_chatter.htm "Triggers for Chatter Objects")
-   [Next →](atlas.en-us.apexcode.meta/apexcode/apex_triggers_exceptions.htm "Trigger Exceptions")

## Code Examples

```
trigger KAVTrigger on KAV_Type__kav (before insert) {
    for (KAV_Type__kav kav : Trigger.New) {
        kav.Summary__c = 'Updated article summary before insert';
    }  
}
```

## Related Topics

- ← Previous (atlas.en-us.apexcode.meta/apexcode/apex_triggers_fields_not_updated_chatter.htm)
- Next → (atlas.en-us.apexcode.meta/apexcode/apex_triggers_exceptions.htm)
