---
title: "apex:inputCheckbox"
domain: pages
topic: apexinputcheckbox
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:22.561Z
estimatedTokens: 1541
keywords: [apex, inputCheckbox, HTML, input, element, checkbox, component, user, controller, correspond, Salesforce, Attributes]
---

# apex:inputCheckbox

> An HTML input element of type checkbox. Use this component to get
		user input for a controller method that does not correspond to a field
		on a Salesforce object.

# apex:inputCheckbox

An HTML input element of type checkbox. Use this component to get user input for a controller method that does not correspond to a field on a Salesforce object.

Use this component to get user input for a controller method that does not correspond to a field on an sObject. Only <apex:inputField\> and <apex:outputField\> can be used with sObject fields.

This component supports [HTML pass-through attributes](https://developer.salesforce.com/docs/atlas.en-us.260.0.pages.meta/pages/pages_html_features_pass_through_attributes.htm "html (New Window)") using the "html-" prefix. Pass-through attributes are attached to the generated <input\> tag.

## Example

```

```

The example renders the following HTML:

```

```

## Attributes

| Attribute Name | Attribute Type | Description | Required? | API Version | Access |
| --- | --- | --- | --- | --- | --- |
| accesskey | String | The keyboard access key that puts the checkbox in focus. When the checkbox is in focus, a user can select or deselect the checkbox value. |  | 10.0 | global |
| dir | String | The direction in which the generated HTML component should be read. Possible values include "RTL" (right to left) or "LTR" (left to right). |  | 10.0 | global |
| disabled | Boolean | A Boolean value that specifies whether this checkbox should be displayed in a disabled state. If set to true, the checkbox appears disabled. If not specified, this value defaults to false. |  | 10.0 | global |
| id | String | An identifier that allows the checkbox component to be referenced by other components in the page. |  | 10.0 | global |
| immediate | Boolean | A Boolean value that specifies whether the action associated with this component should happen immediately, without processing any validation rules associated with the fields on the page. If set to true, the action happens immediately and validation rules are skipped. If not specified, this value defaults to false. See Use the immediate Attribute Carefully. |  | 11.0 | global |
| label | String | A text value that allows to display a label next to the control and reference the control in the error message |  | 23.0 |  |
| lang | String | The base language for the generated HTML output, for example, "en" or "en-US". For more information on this attribute, see the W3C specifications. |  | 10.0 | global |
| onblur | String | The JavaScript invoked if the onblur event occurs--that is, if the focus moves off of the checkbox. |  | 10.0 | global |
| onchange | String | The JavaScript invoked if the onchange event occurs--that is, if the user changes the content of the checkbox field. |  | 10.0 | global |
| onclick | String | The JavaScript invoked if the onclick event occurs--that is, if the user clicks the checkbox. |  | 10.0 | global |
| ondblclick | String | The JavaScript invoked if the ondblclick event occurs--that is, if the user clicks the checkbox twice. |  | 10.0 | global |
| onfocus | String | The JavaScript invoked if the onfocus event occurs--that is, if the focus is on the checkbox. |  | 10.0 | global |
| onkeydown | String | The JavaScript invoked if the onkeydown event occurs--that is, if the user presses a keyboard key. |  | 10.0 | global |
| onkeypress | String | The JavaScript invoked if the onkeypress event occurs--that is, if the user presses or holds down a keyboard key. |  | 10.0 | global |
| onkeyup | String | The JavaScript invoked if the onkeyup event occurs--that is, if the user releases a keyboard key. |  | 10.0 | global |
| onmousedown | String | The JavaScript invoked if the onmousedown event occurs--that is, if the user clicks a mouse button. |  | 10.0 | global |
| onmousemove | String | The JavaScript invoked if the onmousemove event occurs--that is, if the user moves the mouse pointer. |  | 10.0 | global |
| onmouseout | String | The JavaScript invoked if the onmouseout event occurs--that is, if the user moves the mouse pointer away from the checkbox. |  | 10.0 | global |
| onmouseover | String | The JavaScript invoked if the onmouseover event occurs--that is, if the user moves the mouse pointer over the checkbox. |  | 10.0 | global |
| onmouseup | String | The JavaScript invoked if the onmouseup event occurs--that is, if the user releases the mouse button. |  | 10.0 | global |
| onselect | String | The JavaScript invoked if the onselect event occurs--that is, if the user selects the checkbox. |  | 10.0 | global |
| rendered | Boolean | A Boolean value that specifies whether the component is rendered on the page. If not specified, this value defaults to true. |  | 10.0 | global |
| required | Boolean | A Boolean value that specifies whether this checkbox is a required field. If set to true, the user must specify a value for this checkbox. If not selected, this value defaults to false. |  | 10.0 | global |
| selected | Boolean | A Boolean value that specifies whether this checkbox should be rendered in its "checked" state. If not selected, this value defaults to false. |  | 10.0 | global |
| style | String | The style used to display the inputCheckbox component, used primarily for adding inline CSS styles. |  | 10.0 | global |
| styleClass | String | The style class used to display the inputCheckbox component, used primarily to designate which CSS styles are applied when using an external CSS stylesheet. |  | 10.0 | global |
| tabindex | String | The order in which this checkbox is selected compared to other page components when a user presses the Tab key repeatedly. This value must be an integer between 0 and 32767, with component 0 being the first component that is selected when a user presses the Tab key. |  | 10.0 | global |
| title | String | The text to display as a tooltip when the user's mouse pointer hovers over this component. |  | 10.0 | global |
| value | Object | A merge field that references the controller class variable that is associated with this checkbox. For example, if the name of the associated variable in the controller class is myCheckbox, use value="{!myCheckbox}" to reference the variable. |  | 10.0 | global |

#### See Also

-   [apex:input](atlas.en-us.pages.meta/pages/pages_compref_input.htm)

## Code Examples

```
<!-- For this example to render properly, you must associate the Visualforce page 
with a valid opportunity record in the URL. 
For example, if 001D000000IRt53 is the opportunity ID, the resulting URL should be: 
https://MyDomain_login_URL/apex/myPage?id=001D000000IRt53
See the Visualforce Developer's Guide Quick Start Tutorial for more information. -->
         
<apex:page standardController="Opportunity" recordSetVar="opportunities" tabstyle="opportunity">
    <apex:form id="changePrivacyForm">
        <apex:pageBlock >
        <apex:pageMessages />
        <apex:pageBlockButtons>
            <apex:commandButton value="Save" action="{!save}"/>
        </apex:pageBlockButtons>

        <apex:pageBlockTable value="{!opportunities}" var="o">
        <apex:column value="{!o.name}"/>
        <apex:column value="{!o.account.name}"/>
        <apex:column headerValue="Private?">
            <apex:inputCheckbox value="{!o.isprivate}"/>
        </apex:column>
        </apex:pageBlockTable>
        </apex:pageBlock>
    </apex:form>
</apex:page>
```

```
<!-- allows you to change the privacy option of your opportunity -->
<form id="j_id0:changePrivacyForm" name="j_id0:changeStatusForm" method="post"
    action="/apex/sandbox" enctype="application/x-www-form-urlencoded">
    <!-- opening div tags -->
    <table border="0" cellpadding="0" cellspacing="0">
        <tr>
			<td class="pbTitle"> </td>
            <td id="j_id0:changePrivacyForm:j_id1:j_id29" class="pbButton">
                <input type="submit"
                    name="j_id0:changePrivacyForm:j_id1:j_id29:j_id30"
                    value="Save" class="btn"/>
            </td>
        </tr>
    </table>
    
    <div class="pbBody">
        <table class="list" border="0" cellpadding="0" cellspacing="0">
            <colgroup span="3"/>
            <thead>
                <tr class="headerRow ">
                    <th class="headerRow  " scope="col">Opportunity Name</th>
                    <th class="headerRow " scope="col">Account Name</th>
                    <th class="headerRow  " scope="col">Privacy?</th>
                </tr>
            </thead>
            
            <tbody>
                <tr class="dataRow even  first ">
                    <td class="dataCell"><span>Burlington Textiles Weaving Plant Generator</span></td>
                    <td class="dataCell"><span>Burlington Textiles Corp of America</span></td>
                    <td class="dataCell"><input type="checkbox" name="j_id0:changePrivacyForm:j_id1:j_id31:0:j_id35" checked="checked" /></td>
                </tr>
                
                <tr class="dataRow odd last ">
                    <td class="dataCell"><span>Edge Emergency Generator</span></td>
                    <td class="dataCell"><span>Edge Communications</span></td>
                    <td class="dataCell"><input type="checkbox" name="j_id0:changePrivacyForm:j_id1:j_id31:0:j_id35" checked="checked" /></td>
                </tr>
            </tbody>
        </table>
    </div>
    <!-- closing div tags -->
</form>
```

## Related Topics

- Use the immediate Attribute Carefully (atlas.en-us.pages.meta/pages/pages_best_practices_perf_immediate_attr.htm)
- apex:input (atlas.en-us.pages.meta/pages/pages_compref_input.htm)
