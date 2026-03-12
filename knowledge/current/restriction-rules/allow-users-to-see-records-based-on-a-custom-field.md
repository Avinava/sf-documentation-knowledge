---
title: "Allow Users to See Records Based on a Custom Field"
domain: restriction-rules
topic: allow-users-to-see-records-based-on-a-custom-field
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:36.374Z
estimatedTokens: 198
keywords: [Allow, Users, Records, Custom, restriction, rule, high-volume, contracts, user's, department, matches, contract's, uses, Department__c, appropriate]
---

# Allow Users to See Records Based on a Custom Field

> This restriction rule allows high-volume users to see only the contracts where the
        user's department matches the contract's department. This rule uses a custom field,
            Department__c, that must have the appropriate value set through
        Apex, Process Builder, workflows, or flows.

# Allow Users to See Records Based on a Custom Field

This restriction rule allows high-volume users to see only the contracts where the user's department matches the contract's department. This rule uses a custom field, Department\_\_c, that must have the appropriate value set through Apex, Process Builder, workflows, or flows.

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
    "FullName":"Contract restriction rule for Customer Community",
    "Metadata": {
        "active":true,
        "description":"Show high-volume user by department",
        "enforcementType":"Restrict",
        "masterLabel":"RR for Internal Contracts",
        "recordFilter":"Department__c = $User.Department",
        "targetEntity":"Contract",
        "userCriteria":"$User.UserType = 'CSPLitePortal'",
        "version":1 
    } 
}
```

```
<?xml version="1.0" encoding="UTF-8"?>
<RestrictionRule xmlns="http://soap.sforce.com/2006/04/metadata">
    <active>true</active>
    <description>Show high-volume user by department</description>
    <enforcementType>Restrict</enforcementType>
    <masterLabel>RR for Internal Contracts</masterLabel>
    <recordFilter>Department__c = $User.Department</recordFilter>
    <targetEntity>Contract</targetEntity>
    <userCriteria>$User.UserType = 'CSPLitePortal'</userCriteria>
    <version>1</version>
</RestrictionRule>
```
