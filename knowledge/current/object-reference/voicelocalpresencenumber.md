---
title: "VoiceLocalPresenceNumber"
domain: object-reference
topic: voicelocalpresencenumber
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:19.259Z
estimatedTokens: 189
keywords: [VoiceLocalPresenceNumber, phone, number, area, code, person, who’s, Calls, Special, Access, Rules]
---

# VoiceLocalPresenceNumber

> Represents a phone number with the same area code as the person who’s
         being called.

# VoiceLocalPresenceNumber

Represents a phone number with the same area code as the person who’s being called.

## Supported Calls

query(), retrieve()

## Special Access Rules

As of Spring ’20 and later, only your Salesforce org's internal users can access this object.

## Fields

| Field Name | Details |
| --- | --- |
| CountryCode | TypestringPropertiesFilter, Group, idLookup, SortDescriptionThe country code of the phone number. |
| LastUsedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date the phone number was last used. |
| PhoneNumber | TypephonePropertiesFilter, Group, SortDescriptionThe local presence phone number. |
| Prefix | TypereferencePropertiesFilter, Group, SortDescriptionThe area code of the phone number. |
