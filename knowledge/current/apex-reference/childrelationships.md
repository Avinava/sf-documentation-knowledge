---
title: "childrelationships"
domain: apex-reference
topic: childrelationships
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:41.710Z
keywords: [childrelationships, list, child, relationships, which, name, sObject, foreign, key, being, described., Signature, Property, Value]
---

# childrelationships

> A list of child relationships, which is the name of the sObject that has a foreign key to
    the sObject being described.

### childrelationships

A list of child relationships, which is the name of the sObject that has a foreign key to the sObject being described.

#### Signature

public List<Schema.ChildRelationship> childrelationships {get; set;}

#### Property Value

Type: List<[Schema.ChildRelationship](atlas.en-us.apexref.meta/apexref/apex_class_Schema_ChildRelationship.htm#apex_class_Schema_ChildRelationship "Contains methods for accessing the child relationship as well as the child sObject for a parent sObject.")\>