---
title: "Switch Statements"
domain: apex-guide
topic: switch-statements
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:34.768Z
estimatedTokens: 848
keywords: [Switch, Statements, Apex, statement, tests, whether, expression, matches, several, branches, accordingly, Blocks, Else, Block, Examples]
---

# Switch Statements

> Apex provides a switch statement that tests
        whether an expression matches one of several values and branches accordingly.

# Switch Statements

Apex provides a switch statement that tests whether an expression matches one of several values and branches accordingly.

The syntax is:

```

```

The when value can be a single value, multiple values, or sObject types. For example:

```

```

```

```

```

```

The switch statement evaluates the expression and executes the code block for the matching when value. If no value matches, the when else code block is executed. If there isn’t a when else block, no action is taken.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

#### Note

There is no fall-through. After the code block is executed, the switch statement exits.

Apex switch statement expressions can be one of the following types.

-   Integer
-   Long
-   sObject
-   String
-   Enum

## When Blocks

Each when block has a value that the expression is matched against. These values can take one of the following forms.

-   when literal {} (a when block can have multiple, comma-separated literal clauses)
-   when SObjectType identifier {}
-   when enum\_value {}

The value null is a legal value for all types.

Each when value must be unique. For example, you can use the literal x only in one when block clause. A when block is matched one time at most.

## When Else Block

If no when values match the expression, the when else block is executed.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

#### Note

Salesforce recommends including a when else block, especially with enum types, although it isn’t required. When you build a switch statement using enum values provided by a managed package, your code might not behave as expected if a new version of the package contains additional enum values. You can prevent this problem by including a when else block to handle unanticipated values.

If you include a when else block, it must be the last block in the switch statement.

## Examples with Literals

You can use literal when values for switching on Integer, Long, and String types. String clauses are case-sensitive. For example, “orange” is a different value than “ORANGE.”

**Single Value Example**

The following example uses integer literals for when values.

```

```

**Null Value Example**

Because all types in Apex are nullable, a when value can be null.

```

```

**Multiple Values Examples**

The Apex switch statement doesn’t fall-through, but a when clause can include multiple literal values to match against. You can also nest Apex switch statements to provide multiple execution paths within a when clause.

```

```

**Method Example**

Instead of switching on a variable expression, the following example switches on the result of a method call.

```

```

## Example with sObjects

Switching on an sObject value allows you to implicitly perform instanceof checks and casting. For example, consider the following code that uses if-else statements.

```

```

You can replace and simplify this code with the following switch statement.

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

#### Note

You can use only one sObject type per when block.

## Example with Enums

A switch statement that uses enum when values doesn’t require a when else block, but it is recommended. You can use multiple enum values per when block clause.

```

```

## Code Examples

```
switch on expression {
    when value1 {		// when block 1
        // code block 1
    }	
    when value2 {		// when block 2
        // code block 2
    }
    when value3 {		// when block 3
        // code block 3
    }
    when else {		  // default block, optional
        // code block 4
    }
}
```

```
when value1 {
}
```

```
when value2, value3 {
}
```

```
when TypeName VariableName {
}
```

```apex
switch on i {
   when 2 {
       System.debug('when block 2');
   }
   when -3 {
       System.debug('when block -3');
   }
   when else {
       System.debug('default');
   }
}
```
