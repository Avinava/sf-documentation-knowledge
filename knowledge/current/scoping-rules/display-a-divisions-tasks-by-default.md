---
title: "Display a Division’s Tasks by Default"
domain: scoping-rules
topic: display-a-divisions-tasks-by-default
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:44.284Z
estimatedTokens: 72
keywords: [Display, Division’s, Tasks, scoping, rule, displays, records, associated, particular, division, user, Tooling, API, Metadata]
---

# Display a Division’s Tasks by Default

> This scoping rule displays records associated with a particular division by default for
  a user.

# Display a Division’s Tasks by Default

This scoping rule displays records associated with a particular division by default for a user.

| Available in: Lightning Experience in Performance,Unlimited, and Developer editions. |
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
    "FullName":"Task scoping rule on current user’s Division",
    "Metadata": {
         "active":true,
         "description":"View tasks in the current user’s Division.",
         "enforcementType":"Scoping",
         "masterLabel":"SR for Divisions",
         "recordFilter":"Division=$User.Division",
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
    <description>View tasks in the current user’s Division.</description>
    <enforcementType>Scoping</enforcementType>
    <masterLabel>SR for Divisions</masterLabel>
    <recordFilter>Division=$User.Division</recordFilter>
    <targetEntity>Task</targetEntity>
    <userCriteria>$User.ProfileId = '00exxxxxxxxxxxx'</userCriteria>
    <version>1</version>
</RestrictionRule>
```
