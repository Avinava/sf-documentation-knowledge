---
title: "Provide User Access With Multiple String or ID Values in Record Criteria"
domain: restriction-rules
topic: provide-user-access-with-multiple-string-or-id-values-in-record-criteria
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:36.380Z
estimatedTokens: 213
keywords: [Provide, User, Access, Multiple, Record, Criteria, restriction, rule, active, users, records, whose, Name__c, matches, rule’s]
---

# Provide User Access With Multiple String or ID Values in Record Criteria

> This restriction rule allows active users to see records whose Name__c field matches the
  rule’s record criteria value. The record criteria contains strings separated by a comma. ID values
  are also supported. Double-quotes specify that the value inside the quotes isn’t considered a
  delimiter.

# Provide User Access With Multiple String or ID Values in Record Criteria

This restriction rule allows active users to see records whose Name\_\_c field matches the rule’s record criteria value. The record criteria contains strings separated by a comma. ID values are also supported. Double-quotes specify that the value inside the quotes isn’t considered a delimiter.

| Available in: Lightning Experience in Enterprise, Performance, Unlimited, and Developer Editions |
| --- |


This rule uses a custom object called Agent\_\_c with a custom text field called Name\_\_c.

## Tooling API

```

```

## Metadata API

```

```

This restriction rule allows active users to see records owned by two different managers. In this example, the rule’s record criteria contains IDs separated by a comma.

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
        "enforcementType":"Restrict",
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
    <enforcementType>Restrict</enforcementType>
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
        "enforcementType":"Restrict",
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
    <enforcementType>Restrict</enforcementType>
    <masterLabel>RR for manager records</masterLabel>
    <recordFilter>Agent__c.Owner:User.ManagerId=001xx000003HNy7, 001xx000003HNut</recordFilter>
    <targetEntity>Agent__c</targetEntity>
    <userCriteria>$User.IsActive=true</userCriteria>
    <version>1</version>
</RestrictionRule>
```
