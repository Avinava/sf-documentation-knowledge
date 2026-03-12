---
title: "Allow Users to See Only Records That They Own"
domain: restriction-rules
topic: allow-users-to-see-only-records-that-they-own
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:36.389Z
estimatedTokens: 153
keywords: [Allow, Users, Records, They, Own, restriction, rule, designated, profile, tasks, Tooling, API, Metadata]
---

# Allow Users to See Only Records That They Own

> This restriction rule allows users with the designated profile to see only the tasks
        that they own.

# Allow Users to See Only Records That They Own

This restriction rule allows users with the designated profile to see only the tasks that they own.

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
    "FullName":"restriction_rule_tasks_you_own",
    "Metadata": {
        "active":true,
        "description":"Allows users of a specific profile to see only tasks that they own.",
        "enforcementType":"Restrict",
        "masterLabel":"Tasks You Own",
        "recordFilter":"OwnerId = $User.Id",
        "targetEntity":"Task",
        "userCriteria":"$User.ProfileId = '00exxxxxxxxxxxx'",
        "version":1
    }
}
```

```
<?xml version="1.0" encoding="UTF-8"?>
<RestrictionRule xmlns="http://soap.sforce.com/2006/04/metadata">
    <active>true</active>
    <description>Allows users with a specific profile to see only tasks that they own.</description>
    <enforcementType>Restrict</enforcementType>
    <masterLabel>Tasks You Own</masterLabel>
    <recordFilter>OwnerId = $User.Id</recordFilter>
    <targetEntity>Task</targetEntity>
    <userCriteria>$User.ProfileId = '00exxxxxxxxxxxx'</userCriteria>
    <version>1</version>
</RestrictionRule>
```
