---
title: "Display a Department’s Records by Default"
domain: scoping-rules
topic: display-a-departments-records-by-default
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:44.281Z
estimatedTokens: 104
keywords: [Display, Department’s, Records, scoping, rule, displays, contact, associated, particular, department, user, works, dynamically, matches, owner's]
---

# Display a Department’s Records by Default

> This scoping rule displays contact records associated with a particular department by
    default for a user who works on them. The rule dynamically matches the contact owner's
    department with the current user's department.

# Display a Department’s Records by Default

This scoping rule displays contact records associated with a particular department by default for a user who works on them. The rule dynamically matches the contact owner's department with the current user's department.

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
    "FullName":"Department A contact scoping rule",
    "Metadata": {
         "active":true,
         "description":"View contacts from Department A.",
         "enforcementType":"Scoping",
         "masterLabel":"SR for Department A",
         "recordFilter":"Department=$User.Department",
         "targetEntity":"Contact",
         "userCriteria":"$User.UserRoleId = '00Exxxxxxxxxxxx'",
         "version":1
    }
}
```

```
<?xml version="1.0" encoding="UTF-8"?>
<RestrictionRule xmlns="http://soap.sforce.com/2006/04/metadata">
    <active>true</active>
    <description>View tasks contacts from Department A.</description>
    <enforcementType>Scoping</enforcementType>
    <masterLabel>SR for Department A contacts</masterLabel>
    <recordFilter>Department=$User.Department</recordFilter>
    <targetEntity>Contact</targetEntity>
    <userCriteria>$User.UserRoleId = '00Exxxxxxxxxxxx'</userCriteria>
    <version>1</version>
</RestrictionRule>
```
