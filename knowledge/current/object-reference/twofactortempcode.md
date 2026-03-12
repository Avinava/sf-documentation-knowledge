---
title: "TwoFactorTempCode"
domain: object-reference
topic: twofactortempcode
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:18.325Z
estimatedTokens: 310
keywords: [TwoFactorTempCode, Stores, user’s, temporary, verification, code, confirming, their, identity, logging, API, version, 37.0, later, Calls]
---

# TwoFactorTempCode

> Stores information about a user’s temporary verification code for
			confirming their identity when logging in. This object is available in API version
		37.0 and later.

# TwoFactorTempCode

Stores information about a user’s temporary verification code for confirming their identity when logging in. This object is available in API version 37.0 and later.

## Supported Calls

describeSObjects(), query(), retrieve()

## Special Access Rules

You need the Manage Multi-Factor Authentication in API permission to access this object. (Note that multi-factor authentication was formerly called two-factor authentication.)

## Fields

| Field Name | Details |
| --- | --- |
| Expiration | TypedateTimePropertiesFilter, SortDescriptionThe date and time when the temporary verification code expires. The code expires in 1 to 24 hours after it’s generated. Salesforce admins and non-admin users with the Manage Multi-Factor Authentication in User Interface permission set the expiration time when generating the code. |
| Identifier | TypestringPropertiesFilter, Group, SortDescriptionThe unique identifier for the temporary code. This is a required field that can take any value. |
| TempCode | TypeencryptedstringDescriptionA request for this value always returns null. |
| UserId | TypereferencePropertiesFilter, Group, SortDescriptionThe ID for the user who’s associated with the temporary verification code. |
