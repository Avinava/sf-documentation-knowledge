---
title: "Scope Records Using Multiple String or ID Values in Record Criteria"
domain: scoping-rules
topic: scope-records-using-multiple-string-or-id-values-in-record-criteria
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:44.312Z
estimatedTokens: 211
keywords: [Scope, Records, Multiple, Record, Criteria, scoping, rule, active, users, they, whose, Name__c, matches, rule’s, strings]
---

# Scope Records Using Multiple String or ID Values in Record Criteria

> This scoping rule allows active users to scope the records they see to records whose
  Name__c field matches the rule’s record criteria value. The record criteria contains strings
  separated by a comma. ID values are also supported. Double-quotes specify that the value inside
  the quotes isn’t considered a delimiter.

# Scope Records Using Multiple String or ID Values in Record Criteria

This scoping rule allows active users to scope the records they see to records whose Name\_\_c field matches the rule’s record criteria value. The record criteria contains strings separated by a comma. ID values are also supported. Double-quotes specify that the value inside the quotes isn’t considered a delimiter.

| Available in: Lightning Experience in Performance,Unlimited, and Developer editions. |
| --- |


This rule uses a custom object called Agent\_\_c with a text field called Name\_\_c.

## Tooling API

```

```

## Metadata API

```

```

This scoping rule allows active users to see records owned by two different managers. In this example, the rule’s record criteria contains IDs separated by a comma.

## Tooling API

```

```

## Metadata API

```

```

## Code Examples

```
{
    "FullName":"Agent records matching name field",
    "Metadata": {
        "active":true,
        "description":"Show Records Matching Name__c field",
        "enforcementType":"Scoping",
        "masterLabel":"Records Matching Name__c field",
        "recordFilter":"Name__c='Tom, Anita, “Torres, Jia”'",
        "targetEntity":"Agent__c",
        "userCriteria":"$User.IsActive=true", 
        "version":1 
    }
}
```

```
<?xml version="1.0" encoding="UTF-8"?>
<RestrictionRule xmlns="http://soap.sforce.com/2006/04/metadata">
    <active>true</active>
    <description>Show Records Matching Name__c field</description>
    <enforcementType>Scoping</enforcementType>
    <masterLabel>Records Matching Name__c field</masterLabel>
    <recordFilter>Name__c='Tom, Anita, “Torres, Jia”</recordFilter>
    <targetEntity>Agent__c</targetEntity>
    <userCriteria>$User.IsActive=true</userCriteria>
    <version>1</version>
</RestrictionRule>
```

```
{
    "FullName":"Records Owned By Managers",
    "Metadata": {
        "active":true,
        "description":"Displays records owned by two department managers",
        "enforcementType":"Scoping",
        "masterLabel":"RR for manager records",
        "recordFilter":"Agent__c.Owner:User.ManagerId=001xx000003HNy7, 001xx000003HNut",
        "targetEntity":"Agent__c",
        "userCriteria":"$User.IsActive=true", 
        "version":1 
    }
}
```

```
<?xml version="1.0" encoding="UTF-8"?>
<RestrictionRule xmlns="http://soap.sforce.com/2006/04/metadata">
    <active>true</active>
    <description>Displays records owned by two department managers</description>
    <enforcementType>Scoping</enforcementType>
    <masterLabel>RR for manager records</masterLabel>
    <recordFilter>Agent__c.Owner:User.ManagerId=001xx000003HNy7, 001xx000003HNut</recordFilter>
    <targetEntity>Agent__c</targetEntity>
    <userCriteria>$User.IsActive=true</userCriteria>
    <version>1</version>
</RestrictionRule>
```
