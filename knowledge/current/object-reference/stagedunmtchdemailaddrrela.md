---
title: "StagedUnmtchdEmailAddrRela"
domain: object-reference
topic: stagedunmtchdemailaddrrela
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:17.408Z
estimatedTokens: 445
keywords: [StagedUnmtchdEmailAddrRela, data, message, event, activity, associated, email, address, Einstein, Capture, can’t, match, user, contact, lead]
---

# StagedUnmtchdEmailAddrRela

> Represents data about the message or event activity associated with an email
         address that Einstein Activity Capture can’t match with an existing user, contact, or lead
         record. Related to StagedUnmtchdEmailAddr, which represents data about the unmatched email
         address. This object is available in API version 66.0 and later.

# StagedUnmtchdEmailAddrRela

Represents data about the message or event activity associated with an email address that Einstein Activity Capture can’t match with an existing user, contact, or lead record. Related to StagedUnmtchdEmailAddr, which represents data about the unmatched email address. This object is available in API version 66.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=object_reference)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported Calls

describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

## Special Access Rules

This object is available with Einstein Activity Capture when Sync Email as Salesforce Activity is turned on. If you turn on Einstein Activity Capture in Summer ’25 or later, Sync Email as Salesforce Activity is enabled by default.

## Fields

| Field | Details |
| --- | --- |
| RelatedActivityId | TypereferencePropertiesFilter, Group, SortDescriptionThe unique ID of the related activity record, such as an email message or calendar event.This field is a polymorphic relationship field.Relationship NameRelatedActivityRefers ToEmailMessage, Event, StagedEmail |
| SourceActivity | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe activity type. Possible values are:EventStagedEmailEmailAddress |
| StagedUnmatchedEmailAddressId | TypereferencePropertiesFilter, Group, SortDescriptionThe unique ID of the related unmatched email address record.This field is a relationship field.Relationship NameStagedUnmatchedEmailAddressRelationship TypeMaster-detailRefers ToStagedUnmtchdEmailAddr |
