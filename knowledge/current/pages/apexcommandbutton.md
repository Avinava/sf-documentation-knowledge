---
title: "apex:commandButton"
domain: pages
topic: apexcommandbutton
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:22.318Z
estimatedTokens: 1765
keywords: [apex, commandButton, button, rendered, HTML, input, element, attribute, submit, reset, image, depending, <apex, commandButton>, tag's]
---

# apex:commandButton

> A button that is rendered as an HTML input element with the type
		attribute set to submit, reset, or image, depending on the <apex:commandButton> tag's
		specified values.

# apex:commandButton

A button that is rendered as an HTML input element with the type attribute set to submit, reset, or image, depending on the <apex:commandButton\> tag's specified values.

The button executes an action defined by a controller, and then either refreshes the current page, or navigates to a different page based on the PageReference variable that is returned by the action.

An <apex:commandButton\> component must always be a child of an <apex:form\> component.

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
| accesskey | String | The keyboard access key that puts the command button in focus. When the command button is in focus, pressing the Enter key is equivalent to clicking the button. |  | 10.0 | global |
| action | ApexPages.Action | The action method invoked by the AJAX request to the server. Use merge-field syntax to reference the method. For example, action="{!save}" references the save method in the controller. If an action isn't specified, the page simply refreshes. Note that command buttons associated with the save, edit, or delete actions in a standard controller are rendered only if the user has the appropriate permissions. Likewise, command buttons associated with the edit and delete actions are rendered only if a record is associated with the page. |  | 10.0 | global |
| alt | String | An alternate text description of the command button. |  | 10.0 | global |
| dir | String | The direction in which the generated HTML component should be read. Possible values include "RTL" (right to left) or "LTR" (left to right). |  | 10.0 | global |
| disabled | Boolean | A Boolean value that specifies whether this button should be displayed in a disabled state. If set to true, the button appears disabled. If not specified, this value defaults to false. |  | 10.0 | global |
| id | String | An identifier that allows the commandButton component to be referenced by other components in the page. |  | 10.0 | global |
| image | String | The absolute or relative URL of the image displayed as this button. If specified, the type of the generated HTML input element is set to "image". |  | 10.0 | global |
| immediate | Boolean | A Boolean value that specifies whether the action associated with this component should happen immediately, without processing any validation rules associated with the fields on the page. If set to true, the action happens immediately and validation rules are skipped. If not specified, this value defaults to false. See Use the immediate Attribute Carefully. |  | 11.0 | global |
| lang | String | The base language for the generated HTML output, for example, "en" or "en-US". For more information on this attribute, see the W3C specifications. |  | 10.0 | global |
| onblur | String | The JavaScript invoked if the onblur event occurs--that is, if the focus moves off of the command button. |  | 10.0 | global |
| onclick | String | The JavaScript invoked if the onclick event occurs--that is, if the user clicks the command button. |  | 10.0 | global |
| oncomplete | String | The JavaScript invoked when the result of an AJAX update request completes on the client. |  | 10.0 | global |
| ondblclick | String | The JavaScript invoked if the ondblclick event occurs--that is, if the user clicks the command button twice. |  | 10.0 | global |
| onfocus | String | The JavaScript invoked if the onfocus event occurs--that is, if the focus is on the command button. |  | 10.0 | global |
| onkeydown | String | The JavaScript invoked if the onkeydown event occurs--that is, if the user presses a keyboard key. |  | 10.0 | global |
| onkeypress | String | The JavaScript invoked if the onkeypress event occurs--that is, if the user presses or holds down a keyboard key. |  | 10.0 | global |
| onkeyup | String | The JavaScript invoked if the onkeyup event occurs--that is, if the user releases a keyboard key. |  | 10.0 | global |
| onmousedown | String | The JavaScript invoked if the onmousedown event occurs--that is, if the user clicks a mouse button. |  | 10.0 | global |
| onmousemove | String | The JavaScript invoked if the onmousemove event occurs--that is, if the user moves the mouse pointer. |  | 10.0 | global |
| onmouseout | String | The JavaScript invoked if the onmouseout event occurs--that is, if the user moves the mouse pointer away from the command button. |  | 10.0 | global |
| onmouseover | String | The JavaScript invoked if the onmouseover event occurs--that is, if the user moves the mouse pointer over the command button. |  | 10.0 | global |
| onmouseup | String | The JavaScript invoked if the onmouseup event occurs--that is, if the user releases the mouse button. |  | 10.0 | global |
| rendered | Boolean | A Boolean value that specifies whether the component is rendered on the page. If not specified, this value defaults to true. |  | 10.0 | global |
| reRender | Object | The ID of one or more components that are redrawn when the result of an AJAX update request returns to the client. This value can be a single ID, a comma-separated list of IDs, or a merge field expression for a list or collection of IDs. |  | 10.0 | global |
| status | String | The ID of an associated component that displays the status of an AJAX update request. See the actionStatus component. |  | 10.0 | global |
| style | String | The style used to display the commandButton component, used primarily for adding inline CSS styles. |  | 10.0 | global |
| styleClass | String | The style class used to display the commandButton component, used primarily to designate which CSS styles are applied when using an external CSS stylesheet. |  | 10.0 | global |
| tabindex | String | The order in which this button is selected compared to other page components when a user presses the Tab key repeatedly. This value must be a number between 0 and 32767, with component 0 being the first component that is selected when a user presses the Tab key. |  | 10.0 | global |
| timeout | Integer | The amount of time (in milliseconds) before an AJAX update request should time out. |  | 10.0 | global |
| title | String | The text to display as a tooltip when the user's mouse pointer hovers over this component. |  | 10.0 | global |
| value | Object | The text displayed on the commandButton as its label. |  | 10.0 | global |

#### See Also

-   [apex:commandLink](atlas.en-us.pages.meta/pages/pages_compref_commandLink.htm "A link that executes an action defined by a controller, and then either refreshes the current page, or navigates to a different page based on the PageReference variable that is returned by the action.")

## Code Examples

```
<apex:commandButton action="{!save}" value="Save" id="theButton"/>
```

```
<input id="thePage:theForm:theButton" type="submit" name="thePage:theForm:theButton" value="Save" />
```

## Related Topics

- Use the immediate Attribute Carefully (atlas.en-us.pages.meta/pages/pages_best_practices_perf_immediate_attr.htm)
- apex:commandLink (atlas.en-us.pages.meta/pages/pages_compref_commandLink.htm)
