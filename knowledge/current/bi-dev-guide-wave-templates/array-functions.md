---
title: "array Functions"
domain: bi-dev-guide-wave-templates
topic: array-functions
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:07.556Z
estimatedTokens: 941
keywords: [array, Functions, rules, manipulate, arrays, asset, JSON, runtime, Function, forEach, forEachIndex, concat, unique, uniqueBy, union]
---

# array Functions

> Use array functions in rules to manipulate arrays
    in asset JSON at runtime.

# array Functions

Use array functions in rules to manipulate arrays in asset JSON at runtime.

Array functions can use the answer to a configuration wizard question to set runtime conditions. For example, array functions can check all selected values and set a condition to true or false. They can also take multiple values from an answer and iterate over a JSON array to put those values into the runtime JSON correctly.

Or, say that your wizard contains multiple questions with limited values to choose from, such as Yes/No, or a time frame in days or months. An array function can replace them with one question that asks the user to select multiple features to include in dashboards. In this case, the array function loops over the one question to check for values and set the features that the user picked via a conditional.

## Function Name: forEach

Parameters: Collection*<Object>* array, String returnValue

Returns: Collection*<Object>*

Recursive: Not supported>

Description: Evaluates returnValue as an EL expression for each item in the given array and collects each eval result in an array and returns it.

## Example

JSON template:

```

```

Produces:

```

```

## forEachIndex

Parameters: Int start, Int end, String returnValue

Returns: Collection*<Object>*

Recursive: Not supported

Description: Evaluates returnValue as an EL expression for the index number(s) int the array where the string is found.

## concat

Parameters: Collection*<Object>* array1, Collection*<Object>* array2

Returns: Collection*<Object>*

Recursive: Not supported

Description: Returns an array after concatenating the given array1 and array2.

## unique

Parameters: Collection*<String>* array

Returns: Collection*<String>*

Recursive: Not supported

Description: Returns an array of unique items. Uniqueness determined by the underlying objects contained in the array. For example, if the collection is an array of strings, all strings with identical values (case sensitive) are removed.

## uniqueBy

Parameters: String byFieldName, Collection*<Object>* array

Returns: Collection*<Object>*

Recursive: Not supported

Description: Returns an array of unique items. Expects an array of complex objects of similar shape. Uniqueness determined by comparing the value of a field identified by the given byFieldName.

## union

Parameters: Collection*<Object>* array1, Collection*<Object>* array2

Returns: Collection*<Object>*

Recursive: Not supported

Description: Returns a unique union between array1 and array2. Uniqueness determined by the underlying objects contained in the array.

## unionBy

Parameters: String byFieldName, Collection*<Object>* array1, Collection*<Object>* array2

Returns: Collection*<Object>*

Recursive: Not supported

Description: Returns an array which is a union of array1 and array2 items. Expects an array of complex objects of similar shape. Uniqueness determined by comparing the value of a field identified by the given byFieldName.

## contains

Parameters: Collection <Object> array, Object item

Returns: Boolean

Recursive: Not supported

Description: Returns true if the given item is in the given array, otherwise false.

## size

Parameters: Collection <Object> array

Returns: Integer

Recursive: Not supported

Description: Return the size of the array.

## last

Parameters: Collection <Object> array

Returns: Object

Recursive: Not supported

Description: Return the last item of the array.

-   **[Use Array Functions for Multi-Select Widgets and Looping](atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_array_functions_rules_mult_loop.htm)**
    Here’s how to use an array function to create a configuration wizard widget that lets the user select multiple values.

## Code Examples

```
{ 
    "fields": "${array:forEach(Variables.myArray, '{"name": "${var}"}')}"
}
```

```
{
    "fields": [{"name": "ProductName"}, 
               {"name": "Amount"}, 
               {"name": "CompanyName"}, 
               {"name": "Revenue"}]
};
```

## Related Topics

- Use Array Functions for Multi-Select Widgets and Looping (atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_array_functions_rules_mult_loop.htm)
