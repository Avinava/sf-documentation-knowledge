---
title: "Filter on Polymorphic Relationship Fields"
domain: soql-sosl
topic: filter-on-polymorphic-relationship-fields
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:19.707Z
estimatedTokens: 352
keywords: [Filter, Polymorphic, Relationship, search, SOQL, query, current, several]
---

# Filter on Polymorphic Relationship Fields

> You can search polymorphic relationship fields on a SOQL query. A polymorphic
  relationship is one where the current object can be one of several object types.

# Filter on Polymorphic Relationship Fields

You can search polymorphic relationship fields on a SOQL query. A polymorphic relationship is one where the current object can be one of several object types.

To filter on a polymorphic relationship field, use the Type qualifier.

```

```

| Syntax | Description |
| --- | --- |
| polymorphicRelationship | A polymorphic relationship field in object being queried that can reference multiple object types. For example, the Who relationship field of a Task can be a Contact or a Lead. |
| comparisonExpression | The comparison being made against the object type in the polymorphic relationship. For more information, see fieldExpression syntax . Note that type names returned by Type are string values, like ‘User’. |

The following example only returns records where the What field of Event is referencing an Account or Opportunity. If an Event record referenced a Campaign in the What field, it wouldn’t be returned as part of this SELECT.

```

```

See [Understanding Relationship Fields and Polymorphic Fields](atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_relationships_and_polymorph_keys.htm#sforce_api_calls_soql_relationships_and_polymorph_keys "In a polymorphic relationship, the referenced object of the relationship can be one of several different types of object.") for details on polymorphic relationships, and more filtering examples.

## Code Examples

```
WHERE polymorphicRelationship.Type comparisonExpression
```

```
SELECT Id
FROM Event
WHERE What.Type IN ('Account', 'Opportunity')
```

## Related Topics

- fieldExpression (atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_select_conditionexpression.htm)
- Understanding Relationship Fields and Polymorphic Fields (atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_relationships_and_polymorph_keys.htm)
