---
title: "InvocableVariable Annotation"
domain: apex-guide
topic: invocablevariable-annotation
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:43:46.461Z
keywords: [InvocableVariable, Annotation, Supported, Modifiers, Tip, Note, Example, Considerations, See]
---

# InvocableVariable Annotation

# InvocableVariable Annotation

To identify variables used by invocable methods in custom classes, use the InvocableVariable annotation.

The InvocableVariable annotation identifies a class variable used as an input or output parameter for an InvocableMethod method’s invocable action. If you create your own custom class to use as the input or output to an invocable method, you can annotate individual class member variables to make them available to the method.

This code sample shows an invocable method with invocable variables.

```

```

This code sample shows an invocable method with invocable variables that have the generic sObject data type.

```

```

## Supported Modifiers

All modifiers are optional.

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=apexcode)

#### Tip

Default values, labels, and placeholder text appear in Flow Builder for the Action element that corresponds to an invocable method. These modifiers help admins understand how to use variables in the flow.

defaultValue

Provide a vaule to the action at runtime, if no value is provided then these default values are provided to the action at runtime. Valid invocable variable data types are:

-   Boolean - fields must have a value of 'true' or 'false' and case-insensitive.
    
    ```
    
    ```
    
-   Decimal - fields must have a value of 'validDecimalValue' where the floating point value can’t have a suffix.
    
    ```
    
    ```
    
-   Double - fields must have a value of 'validDoubleValue' where the d suffix is required and case-insensitive.
    
    ```
    
    ```
    
-   Integer - fields must have a value of 'validIntegerValue' where the inter value can’t have a suffix.
    
    ```
    
    ```
    
-   Long - fields must have a value of 'validLongValue' where the l suffix is required and case-insensitive.
    
    ```
    
    ```
    
-   String - fields can use any valid string value including the empty string.
    
    ```
    
    ```
    

description

The description for the variable. The default is Null.

label

The label for the variable. The default is the variable name.

placeholderText

Provides examples or additional guidance about the invocable variable, such as examples of values that can set the invocable variable. Valid invocable variable data types are:

-   Double - fields must have a value of 'validDoubleValue' where the d suffix is required and case-insensitive.
-   Integer - fields must have a value of 'validIntegerValue' where the inter value can’t have a suffix.
-   String - fields can use any valid string value including the empty string.

required

Specifies whether the variable is required. If not specified, the default is false. The value is ignored for output variables.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

#### Note

The defaultValue modifier throws an error when used with required.

## Example

The invocable variable annotation supports the modifiers shown in this example.

```

```

The invocable variable annotation supports defaultValue in this example.

```

```

## InvocableVariable Considerations

-   Other annotations can’t be used with the InvocableVariable annotation.
-   Only global and public variables can be invocable variables.
-   The invocable variable can’t be any of these:
    -   A non-member variable such as a static or local variable.
    -   A property.
    -   A final variable.
    -   Protected or private.
-   The data type of the invocable variable must be one of these:
    -   A primitive other than Object
    -   An sObject, either the generic sObject or a specific sObject
    -   A list or a list of lists of primitives, sObjects, objects created from Apex classes, or collections
-   The invocable variable name in Apex must match the name in the flow. The name is case-sensitive.
-   For managed packages:
    -   Public invocable variables can be set in flows and processes within the same managed package.
    -   Global invocable variables can be set anywhere in the subscriber org. Only global invocable variables appear in Flow Builder and Process Builder in the subscriber org.

-   [← Previous](atlas.en-us.apexcode.meta/apexcode/apex_classes_annotation_InvocableMethod.htm "InvocableMethod Annotation")
-   [Next →](atlas.en-us.apexcode.meta/apexcode/apex_classes_annotation_isTest.htm "IsTest Annotation")

#### See Also

-   [*Apex Developer Guide*: InvocableMethod Annotation](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_classes_annotation_InvocableMethod.htm "Apex Developer Guide: InvocableMethod Annotation
    - HTML (New Window)")
    
-   [*Apex Reference Guide*: Action Class](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_class_Invocable_Action.htm)
    
-   [Customize Invocable Action Input Order in Flow Builder](atlas.en-us.apexcode.meta/apexcode/apex_forcecom_flow_invocable_action_extension_customize_input_order_example.htm "Control the display order and grouping of input parameters for your Apex invocable actions in Flow Builder using the InvocableActionExtension metadata file.")