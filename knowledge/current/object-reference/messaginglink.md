---
title: "MessagingLink"
domain: object-reference
topic: messaginglink
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:12.838Z
estimatedTokens: 358
keywords: [MessagingLink, link, Messaging, Channel, it's, shared, API, version, 47.0, later, Calls]
---

# MessagingLink

> Represents the link between a Messaging Channel and where it's shared.
    This object is available in API version 47.0 and later.

# MessagingLink

Represents the link between a Messaging Channel and where it's shared. This object is available in API version 47.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), query(), retrieve(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| EntityType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionPossible values are:AccountCaseContactCustomEntityDefinition—Custom Object DefinitionLeadOpportunity |
| MessagingChannelId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe channel being shared. This is a relationship field.Relationship NameMessagingChannelRelationship TypeLookupRefers ToMessagingChannel |
| RecordTypeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThis is a relationship field.Relationship NameRecordTypeRelationship TypeLookupRefers ToRecordType |
| ShouldAttemptAutoLink | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionNo longer in use. Indicated that an incoming messaging session was auto-linked to a Salesforce contact or account based on information such as a phone number. |
| ShouldPromptCreate | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionNo longer in use. Indicated that a contact or account was created for the messaging user if none existed. |
