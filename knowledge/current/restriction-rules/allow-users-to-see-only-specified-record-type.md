---
title: "Allow Users to See Only Specified Record Type"
domain: restriction-rules
topic: allow-users-to-see-only-specified-record-type
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:36.386Z
estimatedTokens: 154
keywords: [Allow, Users, Record, restriction, rule, designated, contracts, Tooling, API, Metadata]
---

# Allow Users to See Only Specified Record Type

> This restriction rule allows the designated users to see only contracts that have a
  specified record type.

# Allow Users to See Only Specified Record Type

This restriction rule allows the designated users to see only contracts that have a specified record type.

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
    "FullName":"Contract restriction rule on RecordType",
    "Metadata": {
        "active":true,
        "description":"View Contracts with RecordType = Internal.",
        "enforcementType":"Restrict",
        "masterLabel":"RR for Internal Contracts",
        "recordFilter":"RecordTypeId = '012xxxxxxxxxxxx'",
        "targetEntity":"Contract",
        "userCriteria":"$User.UserRoleId = '00Exxxxxxxxxxxx'",
        "version":1
    }
}
```

```
<?xml version="1.0" encoding="UTF-8"?>
<RestrictionRule xmlns="http://soap.sforce.com/2006/04/metadata">
    <active>true</active>
    <description>View Contracts with RecordType = Internal.</description>
    <enforcementType>Restrict</enforcementType>
    <masterLabel>RR for Internal Contracts</masterLabel>
    <recordFilter>RecordTypeId = '012xxxxxxxxxxxx'</recordFilter>
    <targetEntity>Contract</targetEntity>
    <userCriteria>$User.UserRoleId = '00Exxxxxxxxxxxx'</userCriteria>
    <version>1</version>
</RestrictionRule>
```
