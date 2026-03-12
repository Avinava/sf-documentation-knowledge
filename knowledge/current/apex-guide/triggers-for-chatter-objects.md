---
title: "Triggers for Chatter Objects"
domain: apex-guide
topic: triggers-for-chatter-objects
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:33:34.185Z
estimatedTokens: 1414
keywords: [Triggers, Chatter, Objects, write, FeedItem, FeedComment, Trigger, Considerations, FeedAttachment]
---

# Triggers for Chatter Objects

> You can write triggers for the FeedItem and FeedComment objects.

# Triggers for Chatter Objects

You can write triggers for the FeedItem and FeedComment objects.

## Trigger Considerations for FeedItem, FeedAttachment, and FeedComment

-   Only FeedItems of type TextPost, QuestionPost, LinkPost, HasLink, ContentPost, and HasContent can be inserted, and therefore invoke the before or after insert trigger. User status updates don't cause the FeedItem triggers to fire.
-   While FeedPost objects were supported for API versions 18.0, 19.0, and 20.0, don't use any insert or delete triggers saved against versions before 21.0.
-   For FeedItem, the following fields aren’t available in the before insert trigger:

    -   ContentSize
    -   ContentType

    In addition, the ContentData field isn’t available in any delete trigger.

-   Triggers on FeedItem objects run before their attachment and capabilities information is saved, which means that ConnectApi.FeedItem.attachment information and ConnectApi.FeedElement.capabilities information may not be available in the trigger.

    The attachment and capabilities information may not be available from these methods: ConnectApi.ChatterFeeds.getFeedItem, ConnectApi.ChatterFeeds.getFeedElement, ConnectApi.ChatterFeeds.getFeedPoll, ConnectApi.ChatterFeeds.getFeedElementPoll, ConnectApi.ChatterFeeds.postFeedItem, ConnectApi.ChatterFeeds.postFeedElement, ConnectApi.ChatterFeeds.shareFeedItem, ConnectApi.ChatterFeeds.shareFeedElement, ConnectApi.ChatterFeeds.voteOnFeedPoll, and ConnectApi.ChatterFeeds.voteOnFeedElementPoll

-   FeedAttachment isn’t a triggerable object. You can access feed attachments in FeedItem *update* triggers through a SOQL query. For example:

    ```

    ```

-   When you insert a feed item with associated attachments, the FeedItem is inserted first, then the FeedAttachment records are created. On update of a feed item with associated attachments, the FeedAttachment records are inserted first, then the FeedItem is updated. As a result of this sequence of operations, in Salesforce Classic FeedAttachment is available in Update and AfterInsert triggers. When the attachment is done through Lightning Experience, it’s available in both the Update and AfterInsert triggers; but in the AfterInsert trigger, use the future method to access FeedAttachments.
-   The following feed attachment operations cause the FeedItem *update* triggers to fire.
    -   A FeedAttachment is added to a FeedItem and causes the FeedItem type to change.
    -   A FeedAttachment is removed from a FeedItem and causes the FeedItem type to change.
-   FeedItem triggers aren’t fired when inserting or updating a FeedAttachment that doesn’t cause a change on the associated FeedItem.
-   You can’t insert, update, or delete FeedAttachments in *before update* and *after update* FeedItem triggers.
-   For FeedComment *before insert* and *after insert* triggers, the fields of a ContentVersion associated with the FeedComment (obtained through FeedComment.RelatedRecordId) aren’t available.

## Other Chatter Trigger Considerations

-   Apex code uses extra security when executing in a Chatter context. To post to a private group, the user running the code must be a member of that group. If the running user isn't a member, you can set the CreatedById field to be a member of the group in the FeedItem record.
-   When CollaborationGroupMember is updated, CollaborationGroup is automatically updated as well to ensure that the member count is correct. As a result, when CollaborationGroupMember update or delete triggers run, CollaborationGroup update triggers run as well.

-   [← Previous](atlas.en-us.apexcode.meta/apexcode/apex_triggers_fields_not_updated.htm "Entity and Field Considerations in Triggers")
-   [Next →](atlas.en-us.apexcode.meta/apexcode/apex_triggers_knowledge_considerations.htm "Trigger Considerations for Knowledge Articles")

#### See Also

-   [Entity and Field Considerations in Triggers](atlas.en-us.apexcode.meta/apexcode/apex_triggers_fields_not_updated.htm "When you create triggers, consider the behavior of certain entities, fields, and operations.")

-   [*Object Reference for Salesforce and Lightning Platform*: FeedItem](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_feeditem.htm "Object Reference for Salesforce and Lightning Platform:
    FeedItem - HTML (New Window)")

-   [*Object Reference for Salesforce and Lightning Platform*: FeedAttachment](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_feedattachment.htm "Object Reference for Salesforce and Lightning Platform:
    FeedAttachment - HTML (New Window)")

-   [*Object Reference for Salesforce and Lightning Platform*: FeedComment](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_feedcomment.htm "Object Reference for Salesforce and Lightning Platform:
    FeedComment - HTML (New Window)")

-   [*Object Reference for Salesforce and Lightning Platform*: CollaborationGroup](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_collaborationgroup.htm "Object Reference for Salesforce and Lightning Platform:
    CollaborationGroup - HTML (New Window)")

-   [*Object Reference for Salesforce and Lightning Platform*: CollaborationGroupMember](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_collaborationgroupmember.htm "Object Reference for Salesforce and Lightning Platform:
    CollaborationGroupMember - HTML (New Window)")

## Code Examples

```apex
trigger FeedItemTrigger on FeedItem (after update) {

    List<FeedAttachment> attachments =  [SELECT Id, Title, Type, FeedEntityId 
                                         FROM FeedAttachment 
                                         WHERE FeedEntityId IN :Trigger.new ];
    
    for (FeedAttachment attachment : attachments) {
        System.debug(attachment.Type);
    }
}
```

## Related Topics

- ← Previous (atlas.en-us.apexcode.meta/apexcode/apex_triggers_fields_not_updated.htm)
- Next → (atlas.en-us.apexcode.meta/apexcode/apex_triggers_knowledge_considerations.htm)
- Entity and Field Considerations in Triggers (atlas.en-us.apexcode.meta/apexcode/apex_triggers_fields_not_updated.htm)
