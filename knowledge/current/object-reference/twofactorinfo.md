---
title: "TwoFactorInfo"
domain: object-reference
topic: twofactorinfo
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:18.313Z
estimatedTokens: 355
keywords: [TwoFactorInfo, Stores, user’s, secret, multi-factor, operations, customizing, authentication, organization, formerly, two-factor, API, version, 32.0, later]
---

# TwoFactorInfo

> Stores a user’s secret for
				multi-factor operations. Use this object when customizing multi-factor
			authentication in your organization. (Note that multi-factor authentication was formerly
			called two-factor authentication.) This object is available in API version 32.0 and
		later.

# TwoFactorInfo

Stores a user’s secret for multi-factor operations. Use this object when customizing multi-factor authentication in your organization. (Note that multi-factor authentication was formerly called two-factor authentication.) This object is available in API version 32.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Special Access Rules

You need the Manage Multi-Factor Authentication in API permission to create or update this object.

## Fields

| Field Name | Details |
| --- | --- |
| SharedKey | TypestringPropertiesCreate, Group, Sort, UpdateDescriptionThis field is never read-enabled, though it is write-enabled. A request for this value always returns null. The value must be a base32-encoded string of a 20-byte secret.You can use the Apex method Auth.SessionManagement.getQrCode() to get a value to write to this field.NoteIf you write a secret to this field, in API version 37.0 and later the user gets an email notification that a new identity verification method was added to the user’s account. |
| Type | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe multi-factor method.TOTP—The time-based one-time password. |
| UserId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID for the user who’s associated with the authentication secret. |
