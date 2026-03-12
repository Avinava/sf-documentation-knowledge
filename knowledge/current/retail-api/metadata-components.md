---
title: "Metadata Components"
domain: retail-api
topic: metadata-components
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:37.104Z
estimatedTokens: 5206
keywords: [Metadata, Components, topic, metadata-driven, wizards, Text, Number, Label, Empty, Date, Duration, Checkbox, Picklist, ListController]
---

# Metadata Components

> This topic describes the list of available components that can be
      used on metadata-driven wizards.

# Metadata Components

This topic describes the list of available components that can be used on metadata-driven wizards.

## Text

| Property | Type | Supports Expression? | Default Value | Required? | Description |
| --- | --- | --- | --- | --- | --- |
| id | String | No |  | Yes | Case-sensitive unique identifier of the component instance. This identifier must be unique between all components in the wizard metadata configuration |
| type | String | No |  | Yes | Value is Text. |
| visible | Boolean | Yes | true | No | Determines whether the component is rendered or not. Even if a component isn’t rendered, validations occur and the value are set on the wizard result. |
| editable | Boolean | Yes | true | No | Determines if the value of the component can be edited. |
| active | Boolean | Yes | true | No | Determines if the values of the component are set as part of the wizard result. |
| label | String | Yes | <empty> | No | Display label for the field. |
| required | Boolean | No | false | No | Determines if the field is required. If the field is required and no value is provided, the user is unable to submit the wizard. |
| outputProperty | String | No | <empty> | No | Property of the result where the value of the input is set. |
| defaultValue | String | Yes | <empty> | No | Default value of the component. |
| maxLength | Number | Yes | Infinity | No | Maximum length the input can be. If exceeded, the input won’t be considered valid and the wizard can’t be submitted. |
| minLength | Number | Yes | -Infinity | No | Minimum length the input can be. If the length of the input is less than the minimum length, the input isn’t valid and the wizard can’t be submitted. |
| placeholder | String | Yes | <empty> | No | Placeholder on the input field for when a value isn’t set. |

Example

```

```

Expression Value

When referenced on an expression, this component returns the current text value of the input.

Result Value

When generating the result, this component sets the value of the text input on the property defined by the outputProperty attribute in the result object. If outputProperty isn’t set or the active property resolves to false, no data is set on the output object.

## Number

This component displays a numeric field.

| Property | Type | Supports Expression | Default Value | Required | Description |
| --- | --- | --- | --- | --- | --- |
| id | String | No |  | Yes | Case-sensitive unique identifier of the component instance. This identifier must be unique between all components in the wizard metadata configuration |
| defaultValue | String | Yes | <empty> | No | Default value of the component. |
| visible | Boolean | Yes | true | No | Determines if the component is rendered or not. Even if a component isn’t rendered, validations occur and the value is on the wizard result. |
| required | Boolean | No | false | No | Determines if the field is required. If the field is required and no value is provided, the user will not be able to submit the wizard. |
| editable | Boolean | Yes | true | No | Determines if the value of the component can be edited. |
| active | Boolean | Yes | true | No | Determines if the value of the component is set as part of the wizard result. |
| label | String | Yes | <empty> | No | Display label for the field. |
| autoAdjust | Boolean | No | false | No | If enabled, after a user sets a value in the input, the value will be adjusted to the boundaries defined by the max and min properties in order for the input to be valid. If disabled, the wrong input is notified to the user as an invalid input. |
| decimalPlaces | Number | Yes | Infinity | No | Maximum amount of decimal places a value can have. If exceeded, the additional decimal places are truncated. |
| max | Number | Yes | Infinity | No | Maximum value the input can be. If the value of the input exceeds the maximum value, the input will not be considered valid and the wizard can’t be submitted. |
| min | Number | Yes | -Infinity | No | Minimum value the input can be. If the value of the input is less than the minimum, the input will not be considered valid and the wizard can’t be submitted. |
| placeholder | String | Yes | <empty> | No | Placeholder on the input field for when a value isn’t set. |
| outputProperty | String | No | <empty> | No | Property of the result where the value of the input is set. |
| type | String | No |  | Yes | Value is Number. |

Example

```

```

Expression Value

When referenced on an Expression, this component returns the current numeric value of the input.

Result Value

When generating the result, this component sets the value of the numeric input on the property defined by the outputProperty attribute in the result object. If outputProperty isn’t set or the active property resolves to false, no data is set on the output object.

## Label

This component displays a non-editable text.

**Properties**

| Property | Type | Supports Expression | Default Value | Required | Description |
| --- | --- | --- | --- | --- | --- |
| id | String | No |  | Yes | Case-sensitive unique identifier of the component instance. This identifier must be unique between all components in the wizard metadata configuration |
| type | String | No |  | Yes | Value is Label |
| visible | Boolean | Yes | true | No | Determines if the component is rendered or not. Even if a component isn’t rendered, validations still occur and the value is set on the wizard result. |
| color | String | No | black | No | Color of the text. |
| message | String | Yes | <empty> | No | Message to display on the label. |

Example

```

```

Expression Value

When referenced on an Expression, this component returns an empty value.

Result Value

This component doesn’t push any value to the result structure.

## Empty

This component doesn’t display any input. It takes the space any other input would take.

| Property | Type | Supports Expression? | Default Value | Required? | Description |
| --- | --- | --- | --- | --- | --- |
| id | String | No |  | Yes | Case-sensitive unique identifier of the component instance. This identifier must be unique between all components in the wizard metadata configuration |
| type | String | No |  | Yes | Value is Empty |
| visible | Boolean | Yes | true | No | Determines if the component is rendered or not. Even if a component isn’t rendered, validations still occur and the value is set on the wizard result. |

Example

```

```

Expression Value

When referenced on an Expression, this component returns an empty value.

Result Value

This component doesn’t push any value to the result structure.

## Date

This component displays a Date Picker field. The Date Picker date value is displayed according to the user's locale.

| Property | Type | Supports Expression? | Default Value | Required? | Description |
| --- | --- | --- | --- | --- | --- |
| id | String | No |  | Yes | Case-sensitive unique identifier of the component instance. This identifier must be unique between all components in the wizard metadata configuration |
| type | String | No |  | Yes | Value is Date |
| visible | Boolean | Yes | true | No | Determines if the component is rendered or not. Even if a component isn’t rendered, validations still take place and the value is set on the wizard result. |
| editable | Boolean | Yes | true | No | Determines if the value of the component can be edited. |
| active | Boolean | Yes | true | No | Determines if the value of the component is set as part of the wizard result. |
| label | String | Yes | <empty> | No | Display label for the field. |
| required | Boolean | No | false | No | Determines if the field is required. If the field is required and no value is provided, the user won't be able to submit the wizard. |
| outputProperty | String | No | <empty> | No | Property of the result where the value of the input is set. |
| defaultValue | String | Yes | <empty> | No | Default value of the component. The Date value must be provided as a String with format YYYY-MM-DD . |

Example

```

```

Expression Value

When referenced on an Expression, this component returns the current date of the control as a string with the format YYYY-MM-DD .

Result Value

When generating the result, this component sets the value of the date input on the property defined by the outputProperty attribute in the result object. If outputProperty isn’t set or the active property resolves to false, no data is set on the output object. The result data is set as a String with the format YYYY-MM-DD .

## Duration

This component displays a control with 2 inputs. A numeric field and a picklist field. On the numeric field, the user can input a number. On the picklist field, the user can select Days, Weeks, or Months. This control is used to calculate a second date based on another reference date by adding a number of weeks or months to it.

| Property | Type | Supports Expression | Default Value | Required | Description |
| --- | --- | --- | --- | --- | --- |
| id | String | No |  | Yes | Case-sensitive unique identifier of the component instance. This identifier must be unique between all components in the wizard metadata configuration |
|  |  |  |  |  |  |
| type | String | No |  | Yes | Value is Duration |
| visible | Boolean | Yes | true | No | Determines if the component is rendered or not. Even if a component isn’t rendered, validations still occur and the value is set on the wizard result. |
| editable | Boolean | Yes | true | No | Determines if the value of the component can be edited. |
| active | Boolean | Yes | true | No | Determines if the value of the component is set as part of the wizard result. |
| label | String | Yes | <empty> | No | Display label for the field. |
| required | Boolean | No | false | No | Determines if the field is required. If the field is required and no value is provided, the user won't be able to submit the wizard. |
| outputProperty | String | No | <empty> | No | Property of the result where the value of the input will be set. |
| defaultValue | Object | Yes | {      metric :  week ,      quantity : 1 } | No | Default values for the Number field and the Weeks/Months picklist of the component.Possible values:dayweekmonth |
| referenceDate | String | Yes |  | Yes | Initial date to add the number of selected weeks/months to. Format: YYYY-MM-DD |

Example

```

```

Expression Value

When referenced on an Expression, this component returns the computed date of the control as a string with the format YYYY-MM-DD .

Result Value

When generating the result, this component sets the value of the computed date on the property defined by the outputProperty attribute in the result object. If outputProperty isn’t set or the active property resolves to false, no data is set on the output object. The result data is set as a String with the format YYYY-MM-DD .

## Checkbox

This component displays a checkbox field.

| Property | Type | Supports Expression | Default Value | Required | Description |
| --- | --- | --- | --- | --- | --- |
| id | String | No |  | Yes | Case-sensitive unique identifier of the component instance. This identifier must be unique between all components in the wizard metadata configuration |
| type | String | No |  | Yes | Value is Checkbox |
| visible | Boolean | Yes | true | No | Determines if the component is rendered or not. Even if a component isn’t rendered, validations still occur and the value is set on the wizard result. |
| editable | Boolean | Yes | true | No | Determines if the value of the component can be edited. |
| active | Boolean | Yes | true | No | Determines if the value of the component is set as part of the wizard result. |
| label | String | Yes | <empty> | No | Display label for the field. |
| outputProperty | String | No | <empty> | No | Property of the result where the value of the input is set. |
| defaultValue | Boolean | Yes | false | No | Default value of the component. |

Example

```

```

Expression Value

When referenced on an Expression, this component returns the current value of the control as a Boolean.

Result Value

When generating the result, this component sets the value of the control on the property defined by the outputProperty attribute in the result object. If outputProperty isn’t set or the active property resolves to false, no data is set on the output object. The result data is set as a Boolean.

## Picklist

This component displays a picklist field.

| Property | Type | Supports Expression? | Default Value | Required? | Description |
| --- | --- | --- | --- | --- | --- |
| id | String | No |  | Yes | Case-sensitive unique identifier of the component instance. This identifier must be unique between all components in the wizard metadata configuration |
| type | String | No |  | Yes | Value is Picklist |
| visible | Boolean | Yes | true | No | Determines if the component is rendered or not. Even if a component isn’t rendered, validations still occur and the value is set on the wizard result. |
| editable | Boolean | Yes | true | No | Determines if the value of the component can be edited. |
| active | Boolean | Yes | true | No | Determines if the value of the component is set as part of the wizard result. |
| label | String | Yes | <empty> | No | Display label for the field. |
| required | Boolean | No | false | No | Determines if the field is required. If the field is required and no value is provided, the user won't be able to submit the wizard. |
| outputProperty | String | No | <empty> | No | Property of the result where the value of the input will be set. |
| defaultValue | String \|\| List<String> | Yes | <empty> | No | Default value of the component. |
| autoSelectFirstItem | Boolean | No | false | No | If set, when rendering the pick list, if no valid value is on the pick list, the system automatically selects the first item on the dataset as value. |
| defaultValueIndex | Number | Yes | <empty> | No | If set, when rendering the pick list, if no valid value is on the pick list, the system selects the item with the specified index from the dataset as value. |
| multiselect | Boolean | No | false | No | If enabled, the user is able to select multiple items on the pick list instead of just a single one. |
| maxSelectedItems | Number | No | Infinity | No | If the pick list is multiselect, it defines the maximum number of items that can be selected.NoteSelecting an additional item after the limit is reached will cause the first selected item to be unselected. |
| source | List<Object> \|\| Object | No |  | Yes | Refer to the pick list source section for more information. |
| itemLabelField | String | No | Name | No | The property name for each of the items in (or resolved by) the source that will be used as label on the pick list. |
| itemValueField | String | No | Id | No | The property name for each of the items in (or resolved by) the source that will be used as value on the pick list. |

Picklist Source

The list of available values for the picklist can be defined in 2 different ways.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=retail_api)

#### Note

It's important to note that the object records that are part of the dataset for a picklist field can have as many properties as needed. These properties can be accessed through Expressions in other components, as seen on the examples.

Static List of Values

In order to define a static list of values for a picklist, set the source property to be a list of objects. Each record on this list represents a possible value for the picklist:

```

```

APEX Provided List of Values

You can retrieve the list of possible values for a picklist. The APEX callable classes are called to retrieve the values. In the WizardComponentmetadata, specify from which APEX callable class and method we want to get the values from.

```

```

| Property | Type | Default Value | Required? | Description |
| --- | --- | --- | --- | --- |
| class | String |  | Yes | The name of the APEX Callable class. |
| method | String | <empty> | No | An optional Method name to pass to the callable class. The method can be used to have a single APEX Callable class be able to return different datasets depending on the specified method. |
| cache | Boolean | false | No | If set, the response for a Callable APEX class will be cached in the browser. This implies that requests to the same APEX Callable class, to the same method and with the same parameters, will only be performed one time, and subsequent calls reuse the values from previous executions. |
| params | Object | {} | No | It's possible to pass additional parameters to the APEX Callable class using the params property. When calling the APEX class, the params object is passed to the APEX class as part of the request.The params object supports expressions as the value for their properties. These expressions values are resolved before calling the APEX callable class. |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=retail_api)

#### Note

When using expressions on the params property, the same rules as with other WizardComponents apply. Whenever a referenced component changes, the request to the APEX callable class will be executed again. It's highly advisable to enable caching ( cache : true) on the source in order to not execute duplicated calls against Salesforce servers and greatly improve performance.

Example Callable Class

```

```

Example

```

```

Expression Value

Depending if the field is multiselect or single select, the value that is accessible from expressions is different:

**singles elect**

When referenced on an Expression, this component returns the current dataset object that is selected on the picklist. For example, taking into account the above examples:

```

```

Since the picklist exposes an object as an expression value, Properties of these dataset records can be used on expressions using dot notation:

```

```

**multiselect**

When referenced on an Expression, this component returns the list of current dataset objects that are selected on the picklist.

```

```

Since the picklist exposes an array as an expression value, items on the array can be accessed using square bracket notation \[0\] . Also, Properties of these dataset records can be used on expressions using dot notation:

```

```

Result Value

**single select**

```

```

**multiselect**

```

```

## ListController

This component displays a control that allows users to add items to an Array. For each one of the items, the parameter list of WizardComponent metadata is replicated in order to provide components to handle each item of the list.

| Property | Type | Supports Expressions | Default Value | Required | Description |
| --- | --- | --- | --- | --- | --- |
| active | Boolean | Yes | true | No | Determines if the value of the component is set as part of the wizard result. |
| columns | Number | No | 3 | No | Defines the number of columns that each item in the list has as layout. |
| components | List<WizardComponent> | No | [ ] | No | The metadata of the components that will be replicated for each item in the list. |
| defaultItems | Number | Yes | 0 | No | When first rendering the control, the number of items that will be created by default. |
| editable | Boolean | Yes | true | No | Determines if the value of the component can be edited. |
| id | String | No |  | Yes | Case-sensitive unique identifier of the component instance. This identifier must be unique between all components in the wizard metadata configuration |
| itemUniqueKey | String | Yes | <empty> | No | When defined, the component evaluates the passed expression for each one of the items on the list. If it finds any duplicate values on the results of evaluating it, it shows an error message telling the user there are duplicate items and won't allow for the wizard to be submitted. |
| label | String | Yes | <empty> | No | Display label for the field. |
| maxItems | Number | Yes | Infinity | No | The maximum number of items the control can have. |
| outputProperty | String | No | <empty> | No | Property of the result where the value of the input will be set. |
| type | String | No |  | Yes | Value is Checkbox |
| visible | Boolean | Yes | true | No | Determines if the component is rendered or not. Even if a component isn’t rendered, validations still occur and the value is set on the wizard result. |

Example

```

```

Expression Value

Metadata configuration example

```

```

Expression scope

```

```

Result Value

When generating the result, this component sets the array of generated items on the property defined by the outputProperty attribute in the result object. If outputProperty isn’t set or the active property resolves to false, no data is set on the output object.

## Code Examples

```
{
     id :  promoSlogan ,
     type :  Text ,
     outputProperty :  Slogan ,
     required : true,
     label :  Slogan ,
     maxLength : 80,
     defaultValue :  {! _input_.Slogan } 
}
```

```
{
     id :  promoPrice ,
     type :  Number ,
     outputProperty :  Price ,
     required : true,
     label :  Price ,
     max : 1000000,
     min : 0,
     decimalPlaces : 2,
     autoAdjust : true
}
```

```
{
     id :  myLabel ,
     type :  Label ,
     color :  red ,
     visible : {
         left :  {! promoTemplate.Name } ,
         operator :  equal ,
         right  :  Customer Promotion 
    },
     message :  Selected Customer Promotion! 
}
```

```
{
     id :  myEmptyBlock ,
     type :  Empty ,
     visible : {
         left :  {! promoTemplate.Name } ,
         operator :  equal ,
         right  :  Customer Promotion 
    }
}
```

```
{
     id :  promoDateFrom ,
     type :  Date ,
     outputProperty :  DateFrom ,
     required : true,
     label :  Date From ,
     defaultValue :  2020-01-01 
}
```
