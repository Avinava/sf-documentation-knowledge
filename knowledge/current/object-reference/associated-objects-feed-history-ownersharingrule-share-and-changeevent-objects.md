---
title: "Associated Objects (Feed, History, OwnerSharingRule, Share, and
            ChangeEvent Objects)"
domain: object-reference
topic: associated-objects-feed-history-ownersharingrule-share-and-changeevent-objects
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:03.273Z
estimatedTokens: 703
keywords: [Associated, Objects, Feed, History, OwnerSharingRule, Share, ChangeEvent, standard, their]
---

# Associated Objects (Feed, History, OwnerSharingRule, Share, and
            ChangeEvent Objects)

> This section provides a list of objects associated to standard objects and their
        standard fields.

# Associated Objects (Feed, History, OwnerSharingRule, Share, and ChangeEvent Objects)

This section provides a list of objects associated to standard objects and their standard fields.

Some fields may not be listed for some objects. To see the system fields for each object, see [System Fields](atlas.en-us.object_reference.meta/object_reference/system_fields.htm "System fields are read-only fields found on most objects. These fields are automatically updated during API operations. For example, the ID field is automatically generated during a create operation and the LastModifiedDate is automatically updated when a user modifies a record.").

To verify the complete list of fields for an object, use a describe call from the API or inspect with an appropriate tool. For example, inspect the WSDL or use a schema viewer.

-   **[StandardObjectName Feed Feed](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)**
    StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.
-   **[StandardObjectName History History](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)**
    StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.
-   **[StandardObjectName OwnerSharingRule OwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)**
    StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.
-   **[StandardObjectName Share Share](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)**
    StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.
-   **[StandardObjectNameChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)**
    A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.

## Related Topics

- System Fields (atlas.en-us.object_reference.meta/object_reference/system_fields.htm)
- StandardObjectName Feed Feed (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)
- StandardObjectName History History (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)
- StandardObjectName OwnerSharingRule OwnerSharingRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- StandardObjectName Share Share (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
- StandardObjectNameChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
