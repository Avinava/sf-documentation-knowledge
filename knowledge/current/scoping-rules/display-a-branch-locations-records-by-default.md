---
title: "Display a Branch Location’s Records by Default"
domain: scoping-rules
topic: display-a-branch-locations-records-by-default
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:44.307Z
estimatedTokens: 94
keywords: [Display, Branch, Location’s, Records, scoping, rule, displays, task, associated, particular, bank, location, custom, Branch__c, stores]
---

# Display a Branch Location’s Records by Default

> This scoping rule displays task records associated with a particular bank branch location
    by default. A custom field called Branch__c stores the bank’s branch locations.

# Display a Branch Location’s Records by Default

This scoping rule displays task records associated with a particular bank branch location by default. A custom field called Branch\_\_c stores the bank’s branch locations.

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
    "FullName":"Task scoping rule on Bank Branch 1",
    "Metadata": {
         "active":true,
         "description":"View tasks for Bank Branch 1.",
         "enforcementType":"Scoping",
         "masterLabel":"SR for Bank Branch 1",
         "recordFilter":"Branch__c = $User.Branch__c",
         "targetEntity":"Task",
         "userCriteria":"$User.UserRoleId = '00Exxxxxxxxxxxx'",
         "version":1
    }
}
```

```
<?xml version="1.0" encoding="UTF-8"?>
<RestrictionRule xmlns="http://soap.sforce.com/2006/04/metadata">
    <active>true</active>
    <description>View tasks for Bank Branch 1.</description>
    <enforcementType>Scoping</enforcementType>
    <masterLabel>SR for Bank Branch 1</masterLabel>
    <recordFilter>Branch__c = $User.Branch__c</recordFilter>
    <targetEntity>Task</targetEntity>
    <userCriteria>$User.UserRoleId = '00Exxxxxxxxxxxx'</userCriteria>
    <version>1</version>
</RestrictionRule>
```
