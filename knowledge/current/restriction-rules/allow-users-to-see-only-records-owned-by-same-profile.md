---
title: "Allow Users to See Only Records Owned by Same Profile"
domain: restriction-rules
topic: allow-users-to-see-only-records-owned-by-same-profile
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:36.383Z
estimatedTokens: 180
keywords: [Allow, Users, Records, Owned, Profile, restriction, rule, active, events, dot, notation, traverse, relationships, recordFilter, Tooling]
---

# Allow Users to See Only Records Owned by Same Profile

> This restriction rule allows active users to see only the events owned by users that
        have the same profile. You can use dot notation to traverse object and field relationships
        in the recordFilter field.

# Allow Users to See Only Records Owned by Same Profile

This restriction rule allows active users to see only the events owned by users that have the same profile. You can use dot notation to traverse object and field relationships in the recordFilter field.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=restriction_rules)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

| Available in: Lightning Experience in Enterprise, Performance, Unlimited, and Developer Editions |
| --- |


## Tooling API

```

```

## Metadata API

```

```

## Code Examples

```
{
    "FullName":"restictionruleeventsprofile",
    "Metadata": {
        "active":true,
        "description":"Allows active users to see only events owned by users of the same profile.",
        "enforcementType":"Restrict",
        "masterLabel":"Events Owned by Same Profile",
        "recordFilter":"Owner:User.ProfileId = $User.ProfileId",
        "targetEntity":"Event",
        "userCriteria":"$User.IsActive = true",
        "version":1
    }
}
```

```
<?xml version="1.0" encoding="UTF-8"?>
<RestrictionRule xmlns="http://soap.sforce.com/2006/04/metadata">
    <active>true</active>
    <description>Allows active users to see only events owned by users of the same profile.</description>
    <enforcementType>Restrict</enforcementType>
    <masterLabel>Events Owned by Same Profile</masterLabel>
    <recordFilter>Owner:User.ProfileId = $User.ProfileId</recordFilter>
    <targetEntity>Event</targetEntity>
    <userCriteria>$User.IsActive = true</userCriteria>
    <version>1</version>
</RestrictionRule>
```
