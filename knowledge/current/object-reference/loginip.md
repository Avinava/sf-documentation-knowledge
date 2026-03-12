---
title: "LoginIp"
domain: object-reference
topic: loginip
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:12.588Z
estimatedTokens: 354
keywords: [LoginIp, validated, address, version, 28.0, later, Calls, Usage]
---

# LoginIp

> Represents a validated IP address. This object is available in
  version 28.0 and later.

# LoginIp

Represents a validated IP address. This object is available in version 28.0 and later.

## Supported Calls

describeSObjects(), delete(), query(), retrieve()

## Fields

| Field | Details |
| --- | --- |
| ChallengeMethod | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe challenge method used to confirm the user’s identity. Possible values include the following.EmailSMSTOTP_CHOICE: The user chooses multi-factor authentication.TOTP_ONLY: The user is required to use multi-factor authentication. |
| ChallengeSentDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time that the user was authenticated. |
| IsAuthenticated | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIf true, the user has already been authenticated. |
| SourceIp | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe IP address the user logged in from. |
| UsersId | TypereferencePropertiesFilter, Group, SortDescriptionThe ID of the user associated with this item.This is a relationship field.Relationship NameUsersRelationship TypeLookupRefers ToUser |

## Usage

At every login, the IP address of the login request is checked against the validated IP addresses using LoginIp. A match means the login IP address is a known IP address. If there’s no match, the address is unknown, and the user is asked to confirm their identity.
