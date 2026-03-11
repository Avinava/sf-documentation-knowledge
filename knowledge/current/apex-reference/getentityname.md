---
title: "getEntityName()"
domain: apex-reference
topic: getentityname
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:35.916Z
keywords: [getEntityName, Returns, entity, name, used, report, filter., handle, ambiguous, field, names, across, entities, specifically, cross, filters., Syntax, Return, Value]
---

# getEntityName()

> Returns the entity name used in the report filter. Use the entity name to handle
  ambiguous field names across entities, specifically when using cross filters.

### getEntityName()

Returns the entity name used in the report filter. Use the entity name to handle ambiguous field names across entities, specifically when using cross filters.

#### Syntax

public String getEntityName()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")