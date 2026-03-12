---
title: "StagedInviteeEmail"
domain: object-reference
topic: stagedinviteeemail
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:17.397Z
estimatedTokens: 196
keywords: [StagedInviteeEmail, email, address, included, calendar, event, doesn’t, match, user, contact, lead, record, API, version, 66.0]
---

# StagedInviteeEmail

> Represents an email address that is included on a calendar event but that
         doesn’t match an existing user, contact, or lead record. This object is available in
      API version 66.0 and later.

# StagedInviteeEmail

Represents an email address that is included on a calendar event but that doesn’t match an existing user, contact, or lead record. This object is available in API version 66.0 and later.

## Supported Calls

delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete()

## Special Access Rules

This object is available with Einstein Activity Capture when Sync Email as Salesforce Activity is turned on.

## Fields

| Field | Details |
| --- | --- |
| Name | TypeemailPropertiesFilter, Group, idLookup, SortDescriptionThe invited email address. |
| OwnerId | TypereferencePropertiesFilter, Group, SortDescriptionThe ID of the record owner.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
