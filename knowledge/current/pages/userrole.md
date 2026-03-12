---
title: "$UserRole"
domain: pages
topic: userrole
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:24.448Z
estimatedTokens: 120
keywords: [$UserRole, merge, referencing, current, user’s, role, Usage]
---

# $UserRole

> A global merge field type to use when referencing information about the current
  user’s role. Role merge fields can reference information such as role name, description,
  and ID.

# $UserRole

A global merge field type to use when referencing information about the current user’s role. Role merge fields can reference information such as role name, description, and ID.

## Usage

Use dot notation to access information about the current user’s role.

Note that you can’t use the following $UserRole values in Visualforce:

-   CaseAccessForAccountOwner
-   ContactAccessForAccountOwner
-   OpportunityAccessForAccountOwner
-   PortalType

## Example

```

```

## Code Examples

```
{!$UserRole.LastModifiedById}
```
