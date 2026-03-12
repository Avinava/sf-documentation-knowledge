---
title: "StagedUnmtchdEmailAddr"
domain: object-reference
topic: stagedunmtchdemailaddr
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:17.403Z
estimatedTokens: 686
keywords: [StagedUnmtchdEmailAddr, data, email, address, identified, Einstein, Activity, Capture, doesn’t, match, user, contact, lead, record, addresses]
---

# StagedUnmtchdEmailAddr

> Represents data about an email address identified by Einstein Activity
         Capture that doesn’t match to an existing user, contact, or lead record. These addresses
         are only stored temporarily. Related to StagedUnmtchdEmailAddrRela, which represents data
         about the email message or calendar event activity associated with an unmatched email.
      This object is available in API version 66.0 and later.

# StagedUnmtchdEmailAddr

Represents data about an email address identified by Einstein Activity Capture that doesn’t match to an existing user, contact, or lead record. These addresses are only stored temporarily. Related to StagedUnmtchdEmailAddrRela, which represents data about the email message or calendar event activity associated with an unmatched email. This object is available in API version 66.0 and later.

These addresses are only stored temporarily. An unmatched email address is automatically deleted from StagedUnmtchdEmailAddr if it converts into a contact record. To convert, a user saves it from their Suggested Contacts list or the address crosses a threshold in the automatic contact creation setting. An unmatched email address is also deleted after 30 days from the initial appearance without subsequent activity.

## Supported Calls

delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update()

## Special Access Rules

This object is available with Einstein Activity Capture when Sync Email as Salesforce Activity is turned on. If you turn on Einstein Activity Capture in Summer ’25 or later, Sync Email as Salesforce Activity is enabled by default.

## Fields

| Field | Details |
| --- | --- |
| CreatedContactOrLeadId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID for the contact or lead record created from a suggestion. Read only.This field is a polymorphic relationship field.Relationship NameCreatedContactOrLeadRefers ToContact, Lead |
| EmailAddress | TypeemailPropertiesFilter, Group, idLookup, SortDescriptionThe email address of the suggested contact. This address doesn’t match any existing user, contact, or lead. (Read only.) |
| FirstName | TypestringPropertiesFilter, Group, Nillable, Sort, UpdateDescriptionFirst name of the suggested contact. |
| IgnoreSuggestionEndDate | TypedatePropertiesFilter, Group, Nillable, Sort, UpdateDescriptionIf a user dismisses a suggestion, it isn't suggested again until this date. |
| LastInteractionDate | TypedatePropertiesFilter, Group, Nillable, SortDescriptionThe date the user last interacted with the unmatched email address through email or a scheduled calendar event. (Read only.) |
| LastName | TypestringPropertiesFilter, Group, Nillable, Sort, UpdateDescriptionLast name of the suggested contact. |
| OccurrenceCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionTotal number of times the user and the unmatched email address occur together. (Read only.) |
| UserId | TypereferencePropertiesFilter, Group, SortDescriptionThe unique ID of the user associated with the unknown email address. (Read only.)This field is a relationship field.Relationship NameUserRefers ToUser |
