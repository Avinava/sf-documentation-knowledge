---
title: "ListEmailRecipientSource"
domain: object-reference
topic: listemailrecipientsource
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:12.262Z
estimatedTokens: 388
keywords: [ListEmailRecipientSource, email, Salesforce, dynamically, defined, sources, recipient, addresses, record, link, view, campaign, examined, sent, one-to-many]
---

# ListEmailRecipientSource

> For a list email in Salesforce, represents the dynamically defined
         sources of recipient email addresses. Each record represents a link to a single list view
         or campaign that is examined when the list email is sent. Has a one-to-many relationship
         with ListEmail. This object is available in API version 41.0 and later.

# ListEmailRecipientSource

For a list email in Salesforce, represents the dynamically defined sources of recipient email addresses. Each record represents a link to a single list view or campaign that is examined when the list email is sent. Has a one-to-many relationship with ListEmail. This object is available in API version 41.0 and later.

## Supported Calls

The visibility and accessibility of this object is inherited from the related list email.

create(), delete(), describeSObjects(), query(), getDeleted(), getUpdated(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ListEmailId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe related list email record. Required on record creation; read-only otherwise.This is a relationship field.Relationship NameListEmailRelationship TypeLookupRefers ToListEmail |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe auto-generated name of the list email recipient source. |
| SourceListId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. The id of a list view to send the list email to. Read-only except when list email is in draft state.This is a polymorphic relationship field.Relationship NameSourceListRelationship TypeLookupRefers ToCampaign, ListView, Topic |
| SourceType | TypereferencePropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionRequired. Read-only except when list email is in draft state.Valid values:Include |
