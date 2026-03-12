---
title: "apex:inputTextarea"
domain: pages
topic: apexinputtextarea
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:22.629Z
estimatedTokens: 1566
keywords: [apex, inputTextarea, text, area, input, element, component, user, controller, correspond, Salesforce, requires, Attributes]
---

# apex:inputTextarea

> A text area input element. Use this component to get user input for a controller method that does not correspond to a field on a Salesforce object, for a value that requires a text area.

# apex:inputTextarea

A text area input element. Use this component to get user input for a controller method that does not correspond to a field on a Salesforce object, for a value that requires a text area.

This component supports [HTML pass-through attributes](https://developer.salesforce.com/docs/atlas.en-us.260.0.pages.meta/pages/pages_html_features_pass_through_attributes.htm "html (New Window)") using the "html-" prefix. Pass-through attributes are attached to the generated <textarea\> tag.

## Example

```

```

The example above renders the following HTML:

```

```

## Attributes

| Attribute Name | Attribute Type | Description | Required? | API Version | Access |
| --- | --- | --- | --- | --- | --- |
| accesskey | String | The keyboard access key that puts the text area in focus. When the text area is in focus, a user can enter a value. |  | 10.0 | global |
| cols | Integer | The width of the field, as expressed by the number of characters that can display in a single row at a time. |  | 10.0 | global |
| dir | String | The direction in which the generated HTML component should be read. Possible values include "RTL" (right to left) or "LTR" (left to right). |  | 10.0 | global |
| disabled | Boolean | A Boolean value that specifies whether this text area should be displayed in a disabled state. If set to true, the text area appears disabled. If not specified, this value defaults to false. |  | 10.0 | global |
| id | String | An identifier that allows the checkbox component to be referenced by other components in the page. |  | 10.0 | global |
| label | String | A text value that allows to display a label next to the control and reference the control in the error message |  | 23.0 |  |
| lang | String | The base language for the generated HTML output, for example, "en" or "en-US". For more information on this attribute, see the W3C specifications. |  | 10.0 | global |
| onblur | String | The JavaScript invoked if the onblur event occurs--that is, if the focus moves off of the text area. |  | 10.0 | global |
| onchange | String | The JavaScript invoked if the onchange event occurs--that is, if the user changes the content of the text area. |  | 10.0 | global |
| onclick | String | The JavaScript invoked if the onclick event occurs--that is, if the user clicks the text area. |  | 10.0 | global |
| ondblclick | String | The JavaScript invoked if the ondblclick event occurs--that is, if the user clicks the text area twice. |  | 10.0 | global |
| onfocus | String | The JavaScript invoked if the onfocus event occurs--that is, if the focus is on the text area. |  | 10.0 | global |
| onkeydown | String | The JavaScript invoked if the onkeydown event occurs--that is, if the user presses a keyboard key. |  | 10.0 | global |
| onkeypress | String | The JavaScript invoked if the onkeypress event occurs--that is, if the user presses or holds down a keyboard key. |  | 10.0 | global |
| onkeyup | String | The JavaScript invoked if the onkeyup event occurs--that is, if the user releases a keyboard key. |  | 10.0 | global |
| onmousedown | String | The JavaScript invoked if the onmousedown event occurs--that is, if the user clicks a mouse button. |  | 10.0 | global |
| onmousemove | String | The JavaScript invoked if the onmousemove event occurs--that is, if the user moves the mouse pointer. |  | 10.0 | global |
| onmouseout | String | The JavaScript invoked if the onmouseout event occurs--that is, if the user moves the mouse pointer away from the text area. |  | 10.0 | global |
| onmouseover | String | The JavaScript invoked if the onmouseover event occurs--that is, if the user moves the mouse pointer over the text area. |  | 10.0 | global |
| onmouseup | String | The JavaScript invoked if the onmouseup event occurs--that is, if the user releases the mouse button. |  | 10.0 | global |
| onselect | String | The JavaScript invoked if the onselect event occurs--that is, if the user selects text in the text area. |  | 10.0 | global |
| readonly | Boolean | A Boolean value that specifies whether this text area should be rendered as read-only. If set to true, the text area value cannot be changed. If not selected, this value defaults to false. |  | 10.0 | global |
| rendered | Boolean | A Boolean value that specifies whether the component is rendered on the page. If not specified, this value defaults to true. |  | 10.0 | global |
| required | Boolean | A Boolean value that specifies whether this text area is a required field. If set to true, the user must specify a value for this text area. If not selected, this value defaults to false. |  | 10.0 | global |
| richText | Boolean | A Boolean value that specifies whether this text area should save as rich text or plain text. If set to true, the value saves as rich text. If not selected, this value defaults to false. |  | 10.0 | global |
| rows | Integer | The height of the text area, as expressed by the number of rows that can display at a time. |  | 10.0 | global |
| style | String | The style used to display the text area component, used primarily for adding inline CSS styles. |  | 10.0 | global |
| styleClass | String | The style class used to display the text area component, used primarily to designate which CSS styles are applied when using an external CSS stylesheet. |  | 10.0 | global |
| tabindex | String | The order in which this text area is selected compared to other page components when a user presses the Tab key repeatedly. This value must be an integer between 0 and 32767, with component 0 being the first component that is selected when a user presses the Tab key. |  | 10.0 | global |
| title | String | The text to display as a tooltip when the user's mouse pointer hovers over this component. |  | 10.0 | global |
| value | Object | A merge field that references the controller class variable that is associated with this text area. For example, if the name of the associated variable in the controller class is myLongDescription, use value="{!myLongDescription}" to reference the variable. |  | 10.0 | global |

#### See Also

-   [apex:input](atlas.en-us.pages.meta/pages/pages_compref_input.htm)

-   [Using Input Components in a Page](atlas.en-us.pages.meta/pages/pages_quick_start_input_components.htm)

## Code Examples

```
<!-- For this example to render properly, you must associate the Visualforce page 
with a valid contract record in the URL. 
For example, if 001D000000IRt53 is the contract ID, the resulting URL should be: 
https://MyDomain_login_URL/apex/myPage?id=001D000000IRt53
See the Visualforce Developer's Guide Quick Start Tutorial for more information. -->
         
<apex:page standardController="Contract">
    <apex:form id="changeDescription">
    <apex:pageBlock>
        <p>Current description: {!contract.description}</p>
        <p>Change description to:</p> 
        <apex:inputTextarea id="newDesc" value="{!contract.description}"/><p/>
        <apex:commandButton value="Save" action="{!save}"/>
    </apex:pageBlock>
    </apex:form>
</apex:page>
```

```
<!-- changes the value of {!contract.description} on save -->

<form id="j_id0:changeDescription" name="j_id0:changeDescription" method="post" action="/apex/sandbox" enctype="application/x-www-form-urlencoded">
    <input type="hidden" name="j_id0:changeDescription" value="j_id0:changeDescription" />
    <!-- opening div tags -->
          <p>Current description: To facilitate better deals</p>
          <p>Change description to:</p>
             <textarea id="j_id0:changeDescription:j_id1:newDesc" name="j_id0:changeDescription:j_id1:newDesc"/>
          <input type="submit" name="j_id0:changeDescription:j_id1:j_id4" value="Save" class="btn" />
    <!-- closing div tags -->
</form>
```

## Related Topics

- apex:input (atlas.en-us.pages.meta/pages/pages_compref_input.htm)
- Using Input Components in a Page (atlas.en-us.pages.meta/pages/pages_quick_start_input_components.htm)
