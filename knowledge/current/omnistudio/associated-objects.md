---
title: "Associated Objects"
domain: omnistudio
topic: associated-objects
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:25:11.442Z
keywords: [Associated, Objects]
---

# Associated Objects

# Associated Objects

This section provides a list of objects associated to Industries standard objects and their standard fields.

Some fields may not be listed for some objects. To see the system fields for each object, see [System Fields](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/system_fields.htm "HTML (New Window)") in the Object Reference for Salesforce and Lightning Platform.

To verify the complete list of fields for an object, use a describe call from the API or inspect with an appropriate tool. For example, inspect the WSDL or use a schema viewer.

-   **[StandardObjectNameChangeEvent](atlas.en-us.industries_reference.meta/industries_reference/sforce_api_associated_objects_change_event.htm)**  
    A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.
-   **[StandardObjectNameFeed](atlas.en-us.industries_reference.meta/industries_reference/sforce_api_associated_objects_feed.htm)**  
    StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.
-   **[StandardObjectNameHistory](atlas.en-us.industries_reference.meta/industries_reference/sforce_api_associated_objects_history.htm)**  
    StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.
-   **[StandardObjectNameOwnerSharingRule](atlas.en-us.industries_reference.meta/industries_reference/sforce_api_associated_objects_ownersharingrule.htm)**  
    StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.
-   **[StandardObjectNameShare](atlas.en-us.industries_reference.meta/industries_reference/sforce_api_associated_objects_share.htm)**  
    StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.