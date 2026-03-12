---
title: "apex:input"
domain: pages
topic: apexinput
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:22.545Z
estimatedTokens: 1585
keywords: [apex, input, HTML5-friendly, general, purpose, component, adapts, data, expected, form, uses, HTML, attribute, allow, client]
---

# apex:input

> An HTML5-friendly general purpose input component that adapts to the data expected by a form field. It uses the HTML type attribute to allow client browsers to display type-appropriate user input widgets, such as a date picker or range slider, or to perform client-side formatting or validation, such

# apex:input

An HTML5-friendly general purpose input component that adapts to the data expected by a form field. It uses the HTML type attribute to allow client browsers to display type-appropriate user input widgets, such as a date picker or range slider, or to perform client-side formatting or validation, such as with a numeric range or a telephone number. Use this component to get user input for a controller property or method that does **not** correspond to a field on a Salesforce object.

This component doesn't use Salesforce styling. Also, since it doesn't correspond to a Salesforce field, or any other data on an object, custom code is required to use the value the user enters.

This component supports [HTML pass-through attributes](https://developer.salesforce.com/docs/atlas.en-us.260.0.pages.meta/pages/pages_html_features_pass_through_attributes.htm "html (New Window)") using the "html-" prefix. Pass-through attributes are attached to the generated <input\> tag.

## Example

```

```

The example above renders the following HTML:

```

```

## Attributes

| Attribute Name | Attribute Type | Description | Required? | API Version | Access |
| --- | --- | --- | --- | --- | --- |
| accesskey | String | The keyboard access key that puts the field in focus. When the text box is in focus, a user can select or deselect the field value. |  | 29.0 |  |
| alt | String | An alternate text description of the field. |  | 29.0 |  |
| dir | String | The direction in which the generated HTML component should be read. Possible values include "RTL" (right to left) or "LTR" (left to right). |  | 29.0 |  |
| disabled | Boolean | A Boolean value that specifies whether this text box should be displayed in a disabled state. If set to true, the text box appears disabled. If not specified, this value defaults to false. |  | 29.0 |  |
| id | String | An identifier that allows the field component to be referenced by other components in the page. |  | 29.0 | global |
| label | String | A text value that allows to display a label next to the control and reference the control in the error message |  | 29.0 |  |
| lang | String | The base language for the generated HTML output, for example, "en" or "en-US". For more information on this attribute, see the W3C specifications. |  | 29.0 |  |
| list | Object | A list of auto-complete values to be added to an HTML <datalist> block associated with the input field.The list attribute is specified as either a comma-delimited static string or a Visualforce expression. An expression can resolve to either a comma-delimited string, or a list of objects. List elements can be any data type, as long as that type can be coerced to a string, either as an Apex language feature or via a toString() method. |  | 29.0 |  |
| onblur | String | The JavaScript invoked if the onblur event occurs--that is, if the focus moves off of the field. |  | 29.0 |  |
| onchange | String | The JavaScript invoked if the onchange event occurs--that is, if the user changes the content of the field. |  | 29.0 |  |
| onclick | String | The JavaScript invoked if the onclick event occurs--that is, if the user clicks the field. |  | 29.0 |  |
| ondblclick | String | The JavaScript invoked if the ondblclick event occurs--that is, if the user clicks the field twice. |  | 29.0 |  |
| onfocus | String | The JavaScript invoked if the onfocus event occurs--that is, if the focus is on the field. |  | 29.0 |  |
| onkeydown | String | The JavaScript invoked if the onkeydown event occurs--that is, if the user presses a keyboard key. |  | 29.0 |  |
| onkeypress | String | The JavaScript invoked if the onkeypress event occurs--that is, if the user presses or holds down a keyboard key. |  | 29.0 |  |
| onkeyup | String | The JavaScript invoked if the onkeyup event occurs--that is, if the user releases a keyboard key. |  | 29.0 |  |
| onmousedown | String | The JavaScript invoked if the onmousedown event occurs--that is, if the user clicks a mouse button. |  | 29.0 |  |
| onmousemove | String | The JavaScript invoked if the onmousemove event occurs--that is, if the user moves the mouse pointer. |  | 29.0 |  |
| onmouseout | String | The JavaScript invoked if the onmouseout event occurs--that is, if the user moves the mouse pointer away from the field. |  | 29.0 |  |
| onmouseover | String | The JavaScript invoked if the onmouseover event occurs--that is, if the user moves the mouse pointer over the field. |  | 29.0 |  |
| onmouseup | String | The JavaScript invoked if the onmouseup event occurs--that is, if the user releases the mouse button. |  | 29.0 |  |
| rendered | Boolean | A Boolean value that specifies whether the component is rendered on the page. If not specified, this value defaults to true. |  | 29.0 |  |
| required | Boolean | A Boolean value that specifies whether this field is a required field. If set to true, the user must specify a value for this field. If not selected, this value defaults to false. |  | 29.0 |  |
| size | Integer | The width of the input field, as expressed by the number of characters that can display at a time. |  | 29.0 |  |
| style | String | The style used to display the input component, used primarily for adding inline CSS styles. |  | 29.0 |  |
| styleClass | String | The style class used to display the input component, used primarily to designate which CSS styles are applied when using an external CSS stylesheet. |  | 29.0 |  |
| tabindex | String | The order in which this field is selected compared to other page components when a user presses the Tab key repeatedly. This value must be an integer between 0 and 32767, with component 0 being the first component that is selected when a user presses the Tab key. |  | 29.0 |  |
| title | String | The text to display as a tooltip when the user's mouse pointer hovers over this component. |  | 29.0 |  |
| type | String | The HTML5 type attribute to add to the generated <input> element. Valid type values are:autodatedatetimedatetime-localmonthweektimeemailnumberrangesearchteltexturl |  | 29.0 |  |
| value | Object | An expression that references the controller class variable that is associated with this field. For example, if the name of the associated variable in the controller class is myTextField, use value="{!myTextField}" to reference the variable. |  | 29.0 |  |

## Code Examples

```
<apex:input value="{!inputValue}" id="theTextInput"/>
```

```
<input id="theTextInput" type="text" name="theTextInput" />
```
