---
title: "Operations That Don't Invoke Triggers"
domain: apex-guide
topic: operations-that-dont-invoke-triggers
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:43:47.748Z
keywords: [Operations, Don't, Invoke, Triggers, Note]
---

# Operations That Don't Invoke Triggers

# Operations That Don't Invoke Triggers

Some operations don’t invoke triggers.

Triggers are invoked for Data Manipulation Language (DML) operations that the Java application server initiates or processes. Therefore, some system bulk operations don't invoke triggers. Some examples include:

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

#### Note

Inserts, updates, and deletes on person accounts fire Account triggers, not Contact triggers.

-   Cascading delete operations. Only records that initiate a delete cause trigger evaluation.
-   Cascading updates of child records that are reparented as a result of a merge operation
-   Mass campaign status changes
-   Mass division transfers
-   Mass address updates
-   Mass approval request transfers
-   Mass email actions
-   Modifying custom field data types
-   Renaming or replacing picklists
-   Managing price books
-   Changing a user's default division with the transfer division option checked
-   Changes to these objects:
    -   BrandTemplate
    -   MassEmailTemplate
    -   Folder
-   Update account triggers don't fire before or after a business account record type changes to person account. They also don’t fire before or after a person account record type changes to business account.
-   Update triggers don’t fire on FeedItem when the LikeCount counter increases.

The before triggers associated with these operations fire during lead conversion only if validation and triggers for lead conversion are enabled in the organization:

-   insert of accounts, contacts, and opportunities
-   update of accounts and contacts

Opportunity triggers don’t fire when:

-   The account owner changes as a result of the associated opportunity’s owner changing.
-   The opportunity owner changes as a result of the associated account’s owner changing.

The before and after triggers and the validation rules don't fire for an opportunity when:

-   You modify an opportunity product on an opportunity.
-   An opportunity product schedule changes an opportunity product, even if the opportunity product changes the opportunity.

However, roll-up summary fields do get updated, and workflow rules associated with the opportunity do run.

The getContent and getContentAsPDF PageReference methods aren't allowed in triggers.

Note the following for the ContentVersion object:

-   Content pack operations involving the ContentVersion object, including slides and slide autorevision, don't invoke triggers.
    
    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)
    
    #### Note
    
    Content packs are revised when a slide inside the pack is revised.
    
-   Values for the TagCsv and VersionData fields are only available in triggers if the request to create or update ContentVersion records originates from the API.
-   You can't use before or after delete triggers with the ContentVersion object.

Triggers on the Attachment object don’t fire when:

-   The attachment is created via Case Feed publisher.
-   The user sends email via the Email related list and adds an attachment file.

Triggers fire when the Attachment object is created via Email-to-Case or via the UI.

-   [← Previous](atlas.en-us.apexcode.meta/apexcode/apex_triggers_order_of_execution.htm "Triggers and Order of Execution")
-   [Next →](atlas.en-us.apexcode.meta/apexcode/apex_triggers_fields_not_updated.htm "Entity and Field Considerations in Triggers")