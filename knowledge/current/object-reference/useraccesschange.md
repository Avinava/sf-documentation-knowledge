---
title: "UserAccessChange"
domain: object-reference
topic: useraccesschange
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:18.669Z
estimatedTokens: 170
keywords: [UserAccessChange, change, user, access, API, version, 57.0, later, Calls, Special, Rules]
---

# UserAccessChange

> Represents a change related to user access. This object is
      available in API version 57.0 and later.

# UserAccessChange

Represents a change related to user access. This object is available in API version 57.0 and later.

UserAccessChange records are created through different access-related operations. For example, being assigned to or removed from a permission set.

## Supported Calls

describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

## Special Access Rules

To access UserAccessChange records, users must have the View Setup and Configuration permission.

## Fields

| Field | Details |
| --- | --- |
| Source | TypestringPropertiesFilter, Group, idLookup, Nillable, SortDescriptionThe source of the user access change. For example, UserAccessPolicyId. |
