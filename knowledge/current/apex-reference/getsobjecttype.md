---
title: "getSObjectType()"
domain: apex-reference
topic: getsobjecttype
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:41.347Z
keywords: [getSObjectType, Returns, Salesforce, object, type, which, field, originates., Signature, Return, Value, Example]
---

# getSObjectType()

> Returns the Salesforce object type from which this field originates.

### getSObjectType()

Returns the Salesforce object type from which this field originates.

#### Signature

public Schema.SObjectType getSObjectType()

#### Return Value

Type: [Schema.SObjectType](atlas.en-us.apexref.meta/apexref/apex_class_Schema_SObjectType.htm#apex_class_Schema_SObjectType "A Schema.sObjectType object is returned from the field describe result using the getReferenceTo method, or from the sObject describe result using the getSObjectType method.")

#### Example

Schema.DescribeFieldResult f = Account.Industry.getDescribe(); Schema.sObjectType sourceType = f.getSObjectType(); Assert.areEqual(Account.sObjectType, sourceType);