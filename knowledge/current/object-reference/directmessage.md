---
title: "DirectMessage"
domain: object-reference
topic: directmessage
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:08.179Z
estimatedTokens: 248
keywords: [DirectMessage, direct, message, conversation, multiple, users, Chatter, API, version, 38.0, later, Calls, Special, Access, Rules]
---

# DirectMessage

> Represents a direct message conversation between multiple users in
      Chatter. This object is available in API version 38.0 and later.

# DirectMessage

Represents a direct message conversation between multiple users in Chatter. This object is available in API version 38.0 and later.

## Supported Calls

describeSObjects(), query(), retrieve(), update()

## Special Access Rules

You must have the Manage Chatter Messages and Direct Messages permission enabled to access the DirectMessage object.

## Fields

| Field | Details |
| --- | --- |
| Name | TypestringPropertiesFilter, Group, idLookup, Sort, UpdateDescriptionA default value that isn’t visible to users. |
| Subject | TypestringPropertiesFilter, Group, Nillable, Sort, UpdateDescriptionSubject of the overall direct message conversation. |

## Usage

DirectMessage is an object used by Salesforce to control DirectMessage conversations. It represents a record of a direct message conversation, but doesn’t include conversation data, such as posts or comments. It is most frequently used to moderate direct message data in order to meet data compliance regulations.
