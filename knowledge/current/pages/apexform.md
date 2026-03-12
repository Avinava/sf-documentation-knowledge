---
title: "apex:form"
domain: pages
topic: apexform
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:22.460Z
estimatedTokens: 1548
keywords: [apex, form, Visualforce, users, enter, input, submit, <apex, commandButton>, commandLink>, determines, data, way, it's, processed]
---

# apex:form

> A section of a Visualforce page that allows users to enter input and then submit it with an <apex:commandButton> or <apex:commandLink>. The body of the form determines the data that is displayed and the way it's processed. It's a best practice to use only one <apex:form> tag in a page or custom comp

# apex:form

A section of a Visualforce page that allows users to enter input and then submit it with an <apex:commandButton\> or <apex:commandLink\>. The body of the form determines the data that is displayed and the way it's processed. It's a best practice to use only one <apex:form\> tag in a page or custom component.

Use this component to get user input for a controller method that does not correspond to a field on an sObject. Only <apex:inputField\> and <apex:outputField\> can be used with sObject fields.

As of API version 18.0, this tag can't be a child component of <apex:repeat\>.

This component supports [HTML pass-through attributes](https://developer.salesforce.com/docs/atlas.en-us.260.0.pages.meta/pages/pages_html_features_pass_through_attributes.htm "html (New Window)") using the "html-" prefix. Pass-through attributes are attached to the generated <form\> tag.

## Example

```

```

The example above renders the following HTML:

```

```

## Attributes

| Attribute Name | Attribute Type | Description | Required? | API Version | Access |
| --- | --- | --- | --- | --- | --- |
| accept | String | A comma-separated list of content types that a server processing this form can handle. Possible values for this attribute include "text/html", "image/png", "image/gif", "video/mpeg", "text/css", and "audio/basic". For more information, including a complete list of possible values, see the W3C specifications. |  | 10.0 | global |
| acceptcharset | String | A comma-separated list of character encodings that a server processing this form can handle. If not specified, this value defaults to "UNKNOWN". |  | 10.0 | global |
| dir | String | The direction in which the generated HTML component should be read. Possible values include "RTL" (right to left) or "LTR" (left to right). |  | 10.0 | global |
| enctype | String | The content type used to submit the form to the server. If not specified, this value defaults to "application/x-www-form-urlencoded". |  | 10.0 | global |
| forceSSL | Boolean | The form will be submitted using SSL, regardless of whether the page itself was served with SSL. The default is false. If the value is false, the form will be submitted using the same protocol as the page. If forceSSL is set to true, when the form is submitted, the page returned will use SSL. |  | 14.0 |  |
| id | String | An identifier that allows the form component to be referenced by other components in the page. |  | 10.0 | global |
| lang | String | The base language for the generated HTML output, for example, "en" or "en-US". For more information on this attribute, see the W3C specifications. |  | 10.0 | global |
| onclick | String | The JavaScript invoked if the onclick event occurs--that is, if the user clicks the form. |  | 10.0 | global |
| ondblclick | String | The JavaScript invoked if the ondblclick event occurs--that is, if the user clicks the form twice. |  | 10.0 | global |
| onkeydown | String | The JavaScript invoked if the onkeydown event occurs--that is, if the user presses a keyboard key. |  | 10.0 | global |
| onkeypress | String | The JavaScript invoked if the onkeypress event occurs--that is, if the user presses or holds down a keyboard key. |  | 10.0 | global |
| onkeyup | String | The JavaScript invoked if the onkeyup event occurs--that is, if the user releases a keyboard key. |  | 10.0 | global |
| onmousedown | String | The JavaScript invoked if the onmousedown event occurs--that is, if the user clicks a mouse button. |  | 10.0 | global |
| onmousemove | String | The JavaScript invoked if the onmousemove event occurs--that is, if the user moves the mouse pointer. |  | 10.0 | global |
| onmouseout | String | The JavaScript invoked if the onmouseout event occurs--that is, if the user moves the mouse pointer away from the form. |  | 10.0 | global |
| onmouseover | String | The JavaScript invoked if the onmouseover event occurs--that is, if the user moves the mouse pointer over the form. |  | 10.0 | global |
| onmouseup | String | The JavaScript invoked if the onmouseup event occurs--that is, if the user releases the mouse button. |  | 10.0 | global |
| onreset | String | The JavaScript invoked if the onreset event occurs--that is, if the user clicks the reset button on the form. |  | 10.0 | global |
| onsubmit | String | The JavaScript invoked if the onsubmit event occurs--that is, if the user clicks the submit button on the form. |  | 10.0 | global |
| prependId | Boolean | A Boolean value that specifies whether or not this form should prepend its ID to the IDs of its child components during the clientid generation process. If not specified, the value defaults to true. |  | 10.0 | global |
| rendered | Boolean | A Boolean value that specifies whether the component is rendered on the page. If not specified, this value defaults to true. |  | 10.0 | global |
| style | String | The style used to display the form component, used primarily for adding inline CSS styles. |  | 10.0 | global |
| styleClass | String | The style class used to display the form component, used primarily to designate which CSS styles are applied when using an external CSS stylesheet. |  | 10.0 | global |
| target | String | The name of the frame that displays the response after the form is submitted. Possible values for this attribute include "_blank", "_parent", "_self", and "_top". You can also specify your own target names by assigning a value to the name attribute of a desired destination. |  | 10.0 | global |
| title | String | The text to display as a tooltip when the user's mouse pointer hovers over this component. |  | 10.0 | global |

#### See Also

-   [apex:commandButton](atlas.en-us.pages.meta/pages/pages_compref_commandButton.htm "A button that is rendered as an HTML input element with the type attribute set to submit, reset, or image, depending on the <apex:commandButton> tag's specified values.")

-   [apex:commandLink](atlas.en-us.pages.meta/pages/pages_compref_commandLink.htm "A link that executes an action defined by a controller, and then either refreshes the current page, or navigates to a different page based on the PageReference variable that is returned by the action.")

## Code Examples

```
<!-- For this example to render properly, you must associate the Visualforce page 
with a valid case record in the URL. 
For example, if 001D000000IRt53 is the case ID, the resulting URL should be: 
https://MyDomain_login_URL/apex/myPage?id=001D000000IRt53
See the Visualforce Developer's Guide Quick Start Tutorial for more information. -->
         

<apex:page standardController="Case" recordSetVar="cases" tabstyle="case">
    <apex:form id="changeStatusForm">
        <apex:pageBlock >
        <apex:pageMessages />
        <apex:pageBlockButtons>
            <apex:commandButton value="Save" action="{!save}"/>
        </apex:pageBlockButtons>
        <apex:pageBlockTable value="{!cases}" var="c">
            <apex:column value="{!c.casenumber}"/>
            <apex:column value="{!c.account.name}"/>
            <apex:column value="{!c.contact.name}"/>
            <apex:column value="{!c.subject}"/>
            <apex:column headerValue="Status">
                <apex:inputField value="{!c.Status}"/>
            </apex:column>
        </apex:pageBlockTable>
        </apex:pageBlock>
    </apex:form>
</apex:page>
```

```
<!-- allows you to change the status of your cases -->
<form id="j_id0:changeStatusForm" name="j_id0:changeStatusForm" method="post"
    action="/apex/sandbox" enctype="application/x-www-form-urlencoded">
    <!-- opening div tags -->
    <table border="0" cellpadding="0" cellspacing="0">
        <tr>
			<td class="pbTitle"> </td>
            <td id="j_id0:changeStatusForm:j_id1:j_id29" class="pbButton">
                <input type="submit"
                    name="j_id0:changeStatusForm:j_id1:j_id29:j_id30"
                    value="Save" class="btn"/>
            </td>
        </tr>
    </table>
    
    <div class="pbBody">
        <table class="list" border="0" cellpadding="0" cellspacing="0">
            <colgroup span="5"/>
            <thead>
                <tr class="headerRow ">
                    <th class="headerRow  " scope="col">Case Number</th>
                    <th class="headerRow " scope="col">Account Name</th>
                    <th class="headerRow  " scope="col">Name</th>
                    <th class="headerRow  " scope="col">Subject</th>
                    <th class="headerRow  " scope="col">Status</th>
                </tr>
            </thead>
            
            <tbody>
                <tr class="dataRow even  first ">
                    <td class="dataCell"><span>00001000</span></td>
                    <td class="dataCell"><span>Edge Communications</span></td>
                    <td class="dataCell"><span>Rose Gonzalez</span></td>
                    <td class="dataCell"><span>Starting generator after electrical failure</span></td>
                    <td class="dataCell">
                        <select>
                            <option value="">--None--</option>
                            <option value="New">New</option>
                            <option value="Working" selected="selected">Working</option>
                            <option value="Escalated">Escalated</option>
                            <option value="Closed">Closed</option>
                        </select>
                    </td>
                </tr>
                
                <tr class="dataRow odd last ">
                    <td class="dataCell"><span>00001027</span></td>
                    <td class="dataCell"><span>Joyce Bookings</span></td>
                    <td class="dataCell"><span>Andy Young</span></td>
                    <td class="dataCell"><span>Checking paper jam</span></td>
                    <td class="dataCell">
                        <select>
                            <option value="">--None--</option>
                            <option value="New">New</option>
                            <option value="Working" selected="selected">Working</option>
                            <option value="Escalated">Escalated</option>
                            <option value="Closed">Closed</option>
                        </select>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    <!-- closing div tags -->
</form>
```

## Related Topics

- apex:commandButton (atlas.en-us.pages.meta/pages/pages_compref_commandButton.htm)
- apex:commandLink (atlas.en-us.pages.meta/pages/pages_compref_commandLink.htm)
