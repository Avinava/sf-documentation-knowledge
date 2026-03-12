---
title: "apex:inputText"
domain: pages
topic: apexinputtext
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:22.616Z
estimatedTokens: 1626
keywords: [apex, inputText, HTML, input, element, text, component, user, controller, correspond, Salesforce, Attributes]
---

# apex:inputText

> An HTML input element of type text. Use this component to get user input for a controller method that does not correspond to a field on a Salesforce object.

# apex:inputText

An HTML input element of type text. Use this component to get user input for a controller method that does **not** correspond to a field on a Salesforce object.

Use this component to get user input for a controller method that does not correspond to a field on an sObject. Only <apex:inputField\> and <apex:outputField\> can be used with sObject fields.

This component doesn't use Salesforce styling. Also, since it doesn't correspond to a field, or any other data on an object, custom code is required to use the value the user enters.

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
| accesskey | String | The keyboard access key that puts the field in focus. When the text box is in focus, a user can select or deselect the field value. |  | 10.0 | global |
| alt | String | An alternate text description of the field. |  | 10.0 | global |
| dir | String | The direction in which the generated HTML component should be read. Possible values include "RTL" (right to left) or "LTR" (left to right). |  | 10.0 | global |
| disabled | Boolean | A Boolean value that specifies whether this text box should be displayed in a disabled state. If set to true, the text box appears disabled. If not specified, this value defaults to false. |  | 10.0 | global |
| id | String | An identifier that allows the field component to be referenced by other components in the page. |  | 10.0 | global |
| label | String | A text value that allows to display a label next to the control and reference the control in the error message |  | 23.0 |  |
| lang | String | The base language for the generated HTML output, for example, "en" or "en-US". For more information on this attribute, see the W3C specifications. |  | 10.0 | global |
| list | Object | A list of auto-complete values to be added to an HTML <datalist> block associated with the input field.The list attribute is specified as either a comma-delimited static string or a Visualforce expression. An expression can resolve to either a comma-delimited string, or a list of objects. List elements can be any data type, as long as that type can be coerced to a string, either as an Apex language feature or via a toString() method. |  | 29.0 |  |
| maxlength | Integer | The maximum number of characters that a user can enter for this field, expressed as an integer. |  | 10.0 | global |
| onblur | String | The JavaScript invoked if the onblur event occurs--that is, if the focus moves off of the field. |  | 10.0 | global |
| onchange | String | The JavaScript invoked if the onchange event occurs--that is, if the user changes the content of the field. |  | 10.0 | global |
| onclick | String | The JavaScript invoked if the onclick event occurs--that is, if the user clicks the field. |  | 10.0 | global |
| ondblclick | String | The JavaScript invoked if the ondblclick event occurs--that is, if the user clicks the field twice. |  | 10.0 | global |
| onfocus | String | The JavaScript invoked if the onfocus event occurs--that is, if the focus is on the field. |  | 10.0 | global |
| onkeydown | String | The JavaScript invoked if the onkeydown event occurs--that is, if the user presses a keyboard key. |  | 10.0 | global |
| onkeypress | String | The JavaScript invoked if the onkeypress event occurs--that is, if the user presses or holds down a keyboard key. |  | 10.0 | global |
| onkeyup | String | The JavaScript invoked if the onkeyup event occurs--that is, if the user releases a keyboard key. |  | 10.0 | global |
| onmousedown | String | The JavaScript invoked if the onmousedown event occurs--that is, if the user clicks a mouse button. |  | 10.0 | global |
| onmousemove | String | The JavaScript invoked if the onmousemove event occurs--that is, if the user moves the mouse pointer. |  | 10.0 | global |
| onmouseout | String | The JavaScript invoked if the onmouseout event occurs--that is, if the user moves the mouse pointer away from the field. |  | 10.0 | global |
| onmouseover | String | The JavaScript invoked if the onmouseover event occurs--that is, if the user moves the mouse pointer over the field. |  | 10.0 | global |
| onmouseup | String | The JavaScript invoked if the onmouseup event occurs--that is, if the user releases the mouse button. |  | 10.0 | global |
| rendered | Boolean | A Boolean value that specifies whether the component is rendered on the page. If not specified, this value defaults to true. |  | 10.0 | global |
| required | Boolean | A Boolean value that specifies whether this field is a required field. If set to true, the user must specify a value for this field. If not selected, this value defaults to false. |  | 10.0 | global |
| size | Integer | The width of the input field, as expressed by the number of characters that can display at a time. |  | 10.0 | global |
| style | String | The style used to display the inputText component, used primarily for adding inline CSS styles. |  | 10.0 | global |
| styleClass | String | The style class used to display the inputText component, used primarily to designate which CSS styles are applied when using an external CSS stylesheet. |  | 10.0 | global |
| tabindex | String | The order in which this field is selected compared to other page components when a user presses the Tab key repeatedly. This value must be an integer between 0 and 32767, with component 0 being the first component that is selected when a user presses the Tab key. |  | 10.0 | global |
| title | String | The text to display as a tooltip when the user's mouse pointer hovers over this component. |  | 10.0 | global |
| value | Object | A merge field that references the controller class variable that is associated with this field. For example, if the name of the associated variable in the controller class is myTextField, use value="{!myTextField}" to reference the variable. |  | 10.0 | global |

#### See Also

-   [apex:input](atlas.en-us.pages.meta/pages/pages_compref_input.htm)

-   [Using Input Components in a Page](atlas.en-us.pages.meta/pages/pages_quick_start_input_components.htm)

## Code Examples

```
<apex:inputText value="{!inputValue}" id="theTextInput"/>
```

```
<input id="theTextInput" type="text" name="theTextInput" />
```

## Related Topics

- apex:input (atlas.en-us.pages.meta/pages/pages_compref_input.htm)
- Using Input Components in a Page (atlas.en-us.pages.meta/pages/pages_quick_start_input_components.htm)
