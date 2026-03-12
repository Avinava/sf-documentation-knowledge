---
title: "UserRelatedRecordContent"
domain: object-reference
topic: userrelatedrecordcontent
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:18.996Z
estimatedTokens: 326
keywords: [UserRelatedRecordContent, link, managed, content, record, account, event, opportunity, user, reserved, future, Calls]
---

# UserRelatedRecordContent

> Represents the link between a managed content record, an account, event, or opportunity record, and a user record.  This object is  reserved for future use.

# UserRelatedRecordContent

Represents the link between a managed content record, an account, event, or opportunity record, and a user record. This object is reserved for future use.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ContentOwnerId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe user who owns the managed content record associated with the given account, event, or opportunity record.This field is a relationship field.Relationship NameContentOwnerRefers ToUser |
| ManagedContentId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the managed content record created for the associated Salesforce record. One unique managed content record is created per account, event, or opportunity record per user.This field is a relationship field.Relationship NameManagedContentRefers ToManagedContent |
| RelatedRecordId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the Salesforce record (e.g., account, opportunity, or event) associated with the managed content record.This field is a polymorphic relationship field.Relationship NameRelatedRecordRefers ToAccount, Event, Opportunity |
