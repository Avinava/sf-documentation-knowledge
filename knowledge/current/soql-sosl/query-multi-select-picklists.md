---
title: "Query Multi-Select Picklists"
domain: soql-sosl
topic: query-multi-select-picklists
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:19.552Z
estimatedTokens: 343
keywords: [Query, Multi-Select, Picklists, search, individual, regularly, client, applications, Examples]
---

# Query Multi-Select Picklists

> You can search for individual values in multi-select picklists, which are regularly used
  in client applications.

# Query Multi-Select Picklists

You can search for individual values in multi-select picklists, which are regularly used in client applications.

Client applications use a specific syntax for querying multi-select picklists, which allows selection of multiple items . In API version 39.0 and later, query for picklist values by the value’s API name, which can be different from the actual value.

The following operators are supported for querying multi-select picklists:

| Operator | Description |
| --- | --- |
| = | Equals the specified string. |
| != | Does not equal the specified string. |
| includes | Contains the specified string. |
| excludes | Does not contain the specified string. |
| ; | Specifies AND for two or more strings. Use ; for multi-select picklists when two or more items must be selected. For example:'AAA;BBB' |

## Examples

The following query filters on values in the MSP1\_\_c field that are equal to AAA and BBB selected (exact match):

```

```

In the following query:

```

```

the query filters on values in the MSP1\_\_c field that contains either of these values:

-   AAA and BBB selected.
-   CCC selected.

A match will result on any field value that contains 'AAA' and 'BBB' or any field that contains 'CCC'. For example, the following will be matched:

-   matches with ' AAA;BBB':

```

```

-   matches with ' CCC':

```

```

## Code Examples

```
SELECT Id, MSP1__c FROM CustObj__c WHERE MSP1__c = 'AAA;BBB'
```

```
SELECT Id, MSP1__c from CustObj__c WHERE MSP1__c includes ('AAA;BBB','CCC')
```

```
'AAA;BBB'
             'AAA;BBB;DDD'
```

```
'CCC'
             'CCC;EEE'
                      'AAA;CCC'
```
