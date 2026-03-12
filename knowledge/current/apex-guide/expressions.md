---
title: "Expressions"
domain: apex-guide
topic: expressions
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:34.795Z
estimatedTokens: 416
keywords: [Expressions, expression, construct, made, variables, operators, invocations, evaluates, single, value.]
---

# Expressions

> An expression is a construct made up of variables, operators, and method invocations
        that evaluates to a single value.

# Expressions

An expression is a construct made up of variables, operators, and method invocations that evaluates to a single value.

In Apex, an expression is always one of the following types:

-   A literal expression. For example:

    ```

    ```

-   A new sObject, Apex object, list, set, or map. For example:

    ```

    ```

-   Any value that can act as the left-hand of an assignment operator (L-values), including variables, one-dimensional list positions, and most sObject or Apex object field references. For example:

    ```

    ```

-   Any sObject field reference that is not an L-value, including:
    -   The ID of an sObject in a list (see [Lists](atlas.en-us.apexcode.meta/apexcode/langCon_apex_collections_lists.htm "A list is an ordered collection of elements that are distinguished by their indices. List elements can be of any data type—primitive types, collections, sObjects, user-defined types, and built-in Apex types."))
    -   A set of child records associated with an sObject (for example, the set of contacts associated with a particular account). This type of expression yields a query result, much like SOQL and SOSL queries.
-   A SOQL or SOSL query surrounded by square brackets, allowing for on-the-fly evaluation in Apex. For example:

    ```

    ```

    For information, see [SOQL and SOSL Queries](atlas.en-us.apexcode.meta/apexcode/langCon_apex_SOQL.htm "You can evaluate Salesforce Object Query Language (SOQL) or Salesforce Object Search Language (SOSL) statements on-the-fly in Apex by surrounding the statement in square brackets.").

-   A static or instance method invocation. For example:

    ```

    ```

## Code Examples

```apex
new Account(<field_initializers>)
new Integer[<n>]
new Account[]{<elements>}
new List<Account>()
new Set<String>{}
new Map<String, Integer>()
new myRenamingClass(string oldName, string newName)
```

```
Integer i
myList[3]
myContact.name
myRenamingClass.oldName
```

```apex
Account[] aa = [SELECT Id, Name FROM Account WHERE Name ='Acme'];
Integer i = [SELECT COUNT() FROM Contact WHERE LastName ='Weissman'];
List<List<SObject>> searchList = [FIND 'map*' IN ALL FIELDS RETURNING Account (Id, Name), Contact, Opportunity, Lead];
```

```apex
System.assert(true)
myRenamingClass.replaceNames()
changePoint(new Point(x, y));
```

## Related Topics

- Lists (atlas.en-us.apexcode.meta/apexcode/langCon_apex_collections_lists.htm)
- SOQL and SOSL
                        Queries (atlas.en-us.apexcode.meta/apexcode/langCon_apex_SOQL.htm)
