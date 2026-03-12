---
title: "starts_with()"
domain: bi-dev-guide-saql
topic: startswith
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:06.516Z
estimatedTokens: 201
keywords: [starts_with, starts, characters, _with, Usage]
---

# starts_with()

> Returns true if the string starts with the
        specified characters.

# starts\_with()

Returns true if the string starts with the specified characters.

## Syntax

starts\_with(string, prefix)

## Usage

Returns true if string starts with prefix, otherwise returns false. String comparison is case-sensitive. If any of the parameters are null, then the function returns null. If prefix is an empty string, then the function returns null.

## Example

Suppose that you want to count the opportunities where the owner role starts with "Sales". Use starts\_with() in a case statement.

```

```

The resulting chart shows the number of opportunities where the owner role starts with "Sales", grouped by owner role.

![Number of opportunities where the owner ID starts with Sales.](/docs/resources/img/en-us/260.0?doc_id=images%2Fbi_saql_string_sw.png&folder=bi_dev_guide_saql)

## Code Examples

```
q = load "DTC_Opportunity";

-- Select rows where the owner roles starts with "Sales"
q = foreach q generate count() as 'count', (case
 when starts_with('Owner_Role', "Sales") then 'Owner_Role'
end) as 'Owner_Role';

q = group q by 'Owner_Role';
q = foreach q generate count() as 'count', 'Owner_Role' as 'Owner_Role';
```
