---
title: "FormulaFunction"
domain: tooling-api
topic: formulafunction
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:45.777Z
estimatedTokens: 925
keywords: [FormulaFunction, Represents, function, used, building, formula, including, examples, uses., Tooling, API, version, 39.0, later., Supported, SOAP, Calls, REST, HTTP, Special]
---

# FormulaFunction

> Represents a function used when building a formula, including
            examples and uses. This object is available in Tooling API version 39.0 and
        later.

# FormulaFunction

Represents a function used when building a formula, including examples and uses. This object is available in Tooling API version 39.0 and later.

## Supported SOAP Calls

describeSObjects(), query()

## Supported REST HTTP Methods

GET

## Special Access Rules

In API version 45.0 and later, only users with the ViewSetup and Configuration permission can access FormulaFunction or FormulaFunctionCategory.

## Fields

| Field | Details |
| --- | --- |
| Category | TypeFormulaFunctionCategoryPropertiesFilter, Group, Nillable, SortDescriptionTheFormulaFunctionCategory to which the formula belongs. |
| CategoryId | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe ID of the FormulaFunctionCategory. |
| Description | TypestringPropertiesFilter, Group, Nillable, SortDescriptionDescription of the formula function. |
| DurableId | TypestringPropertiesFilter, Group, Nillable, SortDescriptionUnique identifier for the field. Always retrieve this value before using it, as the value isn’t guaranteed to stay the same from one release to the next. To simplify queries, use this field. |
| ExampleString | TypestringPropertiesFilter, Group, Nillable, SortDescriptionDescribes the function and what arguments you can use with it. |
| IsAllowedInEntityContext | TypebooleanPropertiesFilter, Group, Nillable, SortDescriptionRemoved. Indicates whether you can use the formula function on an Entity (true) or not (false). For example, you can’t use the PRIORVALUE function in a custom Account formula field. This field is available in API versions 39.0 to 47.0. Use the FormulaFunctionAllowedType object in API version 48.0 and later. |
| IsAllowedInFlowContext | TypebooleanPropertiesFilter, Group, Nillable, SortDescriptionRemoved. Indicates whether the formula function is allowed in a Flow (true) or not (false). This field is available in API versions 39.0 to 47.0. Use the FormulaFunctionAllowedType object instead in API version 48.0 and later. |
| IsAllowedInVisualforceContext | TypebooleanPropertiesFilter, Group, Nillable, SortDescriptionRemoved. Indicates whether the formula function is allowed in Visualforce (true) or not (false). This field is available in API versions 39.0 to 47.0. Use the FormulaFunctionAllowedType object instead in API version 48.0 and later. |
| Label | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe formula function label that appears in the user interface. |
| Name | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe name of the formula function. |
| Types | TypeQueryResultPropertiesFilter, Group, Nillable, RestrictedPicklist, SortDescriptionAllowed formula types for functions.This field is available in Tooling API version 48.0 and later. |

## FormulaFunctionCategory

| Field Name | Details |
| --- | --- |
| DurableId | TypestringPropertiesFilter, Group, Nillable, SortDescriptionUnique identifier for the field. Always retrieve this value before using it, as the value isn’t guaranteed to stay the same from one release to the next. To simplify queries, use this field. |
| Functions | TypeQueryResultPropertiesFilter, Group, Nillable, SortDescriptionA list of functions that belong to the FormulaFunctionCategory. |
| Label | TypestringPropertiesFilter, Group, Nillable, SortDescriptionLabel of the FormulaFunctionCategory that appears in the user interface. |
| Name | TypestringPropertiesFilter, Group, Nillable, SortDescriptionName of the FormulaFunctionCategory. |

## Query Examples

To get all the functions in FormulaFunction using REST:

```

```

To get the DurableID of a function category using SOQL:

```

```

To get all the categories and their functions using SOQL:

```

```

## Code Examples

```
req.setEndpoint('http://instance.salesforce.com/services/data/v66.0/tooling/query?q=SELECT+label+FROM+FormulaFunction );
req.setMethod('GET');
```

```
SELECT DurableID FROM FormulaFunctionCategory
```

```
SELECT Name, Label, (SELECT Name, Label, Description, ExampleString FROM Functions) FROM FormulaFunctionCategory
```

## Related Topics

- FormulaFunctionAllowedType (atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_formulafunctionallowedtype.htm)
- QueryResult (atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_queryresult.htm)
