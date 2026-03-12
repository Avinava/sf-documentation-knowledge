---
title: "Metadata Wizard Expression"
domain: retail-api
topic: metadata-wizard-expression
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:37.117Z
estimatedTokens: 694
keywords: [Metadata, Wizard, Expression, Expressions, provide, dynamic, Components, accept, their, access, instance, dynamically, attributes, conditions, Component]
---

# Metadata Wizard Expression

> Expressions provide dynamic values to Wizard Components. Wizard
      Components accept expressions in some of their metadata properties. With expressions, you can
      also access instance values of other Wizard Components and dynamically set the metadata
      attributes, and create conditions. When a Wizard Component has an expression as a metadata
      attribute, the Wizard Component gets re-rendered every time the expression value
    changes.

# Metadata Wizard Expression

Expressions provide dynamic values to Wizard Components. Wizard Components accept expressions in some of their metadata properties. With expressions, you can also access instance values of other Wizard Components and dynamically set the metadata attributes, and create conditions. When a Wizard Component has an expression as a metadata attribute, the Wizard Component gets re-rendered every time the expression value changes.

## Literal Value

An expression that doesn’t match the structure of the other expression types.

Example

```

```

Access the properties of identifiers using the dot notation:

```

```

| Literal | Example | Resolves to |
| --- | --- | --- |
| true | "{! true }" | Boolean true |
| false | "{! false }" | Boolean false |
| null | "{! null }" | null |

## String Expressions

A string with a specific start and end sequence of characters ("{!" and "}").

Use these expressions to retrieve values from other Wizard Component instances by specifying the component ID of the Wizard Component instance.

Example

```

```

## Logical Expressions

An object with these three properties - left, right, and operator.

Use this expression to perform operations between different values.

Example

```

```

List of available operators:

-   and
-   or
-   equal
-   notEqual
-   greaterThan
-   lessThan
-   greaterThanOrEqual
-   lessThanOrEqual
-   sum
-   subtract
-   multiply
-   divide

## Expression Variables

Additional values can also be referenced from expressions:

-   \_input\_ → The input payload passed to the Wizard instance during its creation. Use this variable to set default values:
    -   "{! \_input\_.Slogan }"

## Identifiers for Custom, SObject, and SObject Field Labels

To get custom, sObject, and sObject field labels, use the identifiers, $Label and $SObjectType in expressions.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=retail_api)

#### Note

All Wizard Components support expressions with the $Label and $SObjectType identifiers.

Expression Syntax for a Custom Label

{! $Label.<Label name with namespace> }

Expression Syntax for an sObject Label

{! $SObjectType.<SObject names with namespace>.label }

Expression Syntax for a Field Label

$SObjectType.<SObject names with namespace>.fields.<SObject Field with namespace>.label }

Examples

{! $Label.cgcloud\_\_NPW\_KPI }

{! 'Test ' + $Label.cgcloud\_\_NPW\_KPI + ' Test' }

{! $SObjectType.cgcloud\_\_Promotion\_\_c.label }

{! $SObjectType.cgcloud\_\_Promotion\_\_c.pluralLabel }

{! $SObjectType.cgcloud\_\_Promotion\_\_c.fields.cgcloud\_\_Slogan\_\_c.label }

{! $SObjectType.cgcloud\_\_Promotion\_\_c.label + ' - ' + $SObjectType.cgcloud\_\_Promotion\_\_c.fields.cgcloud\_\_Slogan\_\_c.label }

## Code Examples

```
"{! !(promoTemplate.Name == 'Test' || promoTemplate.Name != 'Test2') }"
...
```

```
"{! promoTemplate.Name }"
```

```
...
{
    "id": "myCheckboxField",
    "type": "Checkbox",
},
...
{
    "id": "myOtherField",
    "active": "{! myCheckboxField }",
...
```

```
{
    "left": <expression>
    "operator": "equal",
    "right" : <expression>
}
  
// Example
...
"active" : {
    "left": "{! myCheckbox}",
    "operator":"equal",
    "right": true
},
...
```
