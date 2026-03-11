---
title: "ConnectionParams Class"
domain: apex-reference
topic: connectionparams-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:33.564Z
keywords: [ConnectionParams, Class, username, authenticating, external, system., Signature, Property, Value]
---

# ConnectionParams Class

> The username for authenticating to the external
    system.

### username

The username for authenticating to the external system.

#### Signature

public String username {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The value depends on the Identity Type field of the external data source definition in Salesforce.

-   If Identity Type is set to Named Principal, the credentials come from the external data source definition.
-   If Identity Type is set to Per User:
    -   For queries and searches, the credentials are specific to the current user who invokes the query or search. The credentials come from the user’s authentication settings for the external system.
    -   For administrative connections, such as syncing the external system’s schema, the credentials come from the external data source definition.