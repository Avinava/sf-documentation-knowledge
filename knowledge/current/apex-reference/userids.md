---
title: "userIds"
domain: apex-reference
topic: userids
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:33.277Z
keywords: [userIds, user, external, that's, associated, data, passed, login_hint, parameter., there, multiple, users, return, IDs, headless, discovery, fails., Signature, Property, Value]
---

# userIds

> The user ID for the external user that's associated with the data passed into the login_hint parameter. If there are multiple users associated with
    the data, it can return multiple IDs, but headless user discovery fails.

### userIds

The user ID for the external user that's associated with the data passed into the login\_hint parameter. If there are multiple users associated with the data, it can return multiple IDs, but headless user discovery fails.

#### Signature

public Set<Id> userIds {get; set;}

#### Property Value

Type: [Set](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_methods_system_set.htm)<[Id](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_methods_system_id.htm)\>