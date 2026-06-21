---
title: "Global Properties and Settings"
domain: revenue-cloud
topic: global-properties-and-settings
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-06-21T00:39:49.544Z
estimatedTokens: 659
keywords: [Settings, Header-level, declarations, define, model, including, constants, external, foundation, CML, code, Regex, Pattern]
---

> Header-level declarations define the global properties and settings for a model, including
    constants, properties, and external values that set up the foundation of the CML code.

# Global Properties and Settings

Header-level declarations define the global properties and settings for a model, including constants, properties, and external values that set up the foundation of the CML code.

Use these declarations to create reusable components and configuration settings that you can reference throughout the model.

## Global Constants

Use global constants to define values that remain fixed throughout the model. These constants can be numeric values, strings, lists, or other supported data types. Use constants to create standardized settings or options that you can reference multiple times. See [Example 1: Use Regex Global Variable](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/cml_cml_core_concepts.htm "Constraint Modeling Language (CML) includes components that cover high-level global configurations to specific data types and constraints.").

In the example, MAX\_COUNT is a global constant that is hard-coded to 100: define MAX\_COUNT 100.

Regex (regular expressions) can be used to define global constants. The generalized abstract syntax structure for regex expressions is define <CONSTANT\_NAME> "^<REGEX\_PATTERN\_STRING>$".

## Regex Pattern Components

This table lists regex components and their details.

| Regex Component | Description | Generalization |
| --- | --- | --- |
| ^ and $ | Anchors that ensure the pattern matches the entire string, from the beginning (^) to the end ($). | Ensures strict adherence to the required format. |
| () | Capturing Groups used to isolate portions of the matched string. You can reference the captured parts later by using $1, $2, and so on, in functions such as regexpreplace. See String Variable Functions and Operators. | Allows extraction of specific data fields from a string. |
| + | Character Class and Quantifier that matches one or more (+) digits or characters. | Defines the permitted characters and minimum occurrences for the data fields. |
| / | Literal Character matching the forward slash separator present in the input data. | Matches fixed delimiters in the input string. |

In the example, VOLTAGE\_REGEX is a global constant that defines a fixed regular expression pattern used for validation or parsing throughout the model define VOLTAGE\_REGEX "^(\[0-9\]+)/(\[0-9\]+)$".

For more on the usage of global properties, see [External Variables](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/cml_external_variables.htm "External variables are global Constraint Modeling Language (CML) variables defined within a virtual CML type.").

## Related Topics

- Example 1: Use Regex Global Variable (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/cml_cml_core_concepts.htm)
- String Variable Functions and
                  Operators (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/cml_string_variable_functions_and_operators.htm)
- External
        Variables (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/cml_external_variables.htm)
