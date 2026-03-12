---
title: "$Profile"
domain: pages
topic: profile
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:24.426Z
estimatedTokens: 102
keywords: [$Profile, merge, referencing, current, user’s, profile, license, Usage]
---

# $Profile

> A global merge field type to use when referencing information about the current
  user’s profile. Use profile merge fields to reference information about the user’s
  profile such as license type or name.

# $Profile

A global merge field type to use when referencing information about the current user’s profile. Use profile merge fields to reference information about the user’s profile such as license type or name.

## Usage

Use dot notation to access your organization’s information.

Note that you can’t use the following $Profile values in Visualforce:

-   LicenseType
-   UserType

## Example

```

```

## Code Examples

```
{!$Profile.Id}
{!$Profile.Name}
```
