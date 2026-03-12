---
title: "apex:inputFile"
domain: pages
topic: apexinputfile
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:22.587Z
estimatedTokens: 1274
keywords: [apex, inputFile, component, creates, input, upload, file, Attributes]
---

# apex:inputFile

> A component that creates an input field to upload a file.

# apex:inputFile

A component that creates an input field to upload a file.

**Note:** The maximum file size that can be uploaded via Visualforce is 10 MB.

## Example

```

```

## Attributes

| Attribute Name | Attribute Type | Description | Required? | API Version | Access |
| --- | --- | --- | --- | --- | --- |
| accept | String | Comma-delimited set of content types. This list can be used by the browser to limit the set of file options that is made available for selection. If not specified, no content type list will be sent and all file types will be accessible. |  | 14.0 |  |
| accessKey | String | The keyboard access key that puts the component in focus. |  | 14.0 |  |
| alt | String | An alternate text description of the component. |  | 14.0 |  |
| contentType | String | String property that stores the uploaded file's content type. |  | 14.0 |  |
| dir | String | The direction in which the generated HTML component should be read. Possible values include "RTL" (right to left) or "LTR" (left to right). |  | 14.0 |  |
| disabled | Boolean | A Boolean value that specifies whether this component should be displayed in a disabled state. If set to true, the component appears disabled. If not specified, this value defaults to false. |  | 14.0 |  |
| fileName | String | String property that stores the uploaded file's name. |  | 14.0 |  |
| fileSize | Integer | Integer property that stores the uploaded file's size. |  | 14.0 |  |
| id | String | An identifier that allows the component to be referenced by other components in the page. |  | 14.0 | global |
| lang | String | The base language for the generated HTML output, for example, "en" or "en-US". For more information, see the W3C specification on this attribute: http://www.w3.org/TR/REC-html40/struct/dirlang.html |  | 14.0 |  |
| onblur | String | The JavaScript invoked if the onblur event occurs--that is, if the focus moves off of the component. |  | 14.0 |  |
| onchange | String | The JavaScript invoked if the onchange event occurs--that is, if the user changes the content of the component field. |  | 14.0 |  |
| onclick | String | The JavaScript invoked if the onclick event occurs--that is, if the user clicks the component. |  | 14.0 |  |
| ondblclick | String | The JavaScript invoked if the ondblclick event occurs--that is, if the user clicks the component twice. |  | 14.0 |  |
| onfocus | String | The JavaScript invoked if the onfocus event occurs--that is, if the focus is on the component. |  | 14.0 |  |
| onkeydown | String | The JavaScript invoked if the onkeydown event occurs--that is, if the user presses a keyboard key. |  | 14.0 |  |
| onkeypress | String | The JavaScript invoked if the onkeypress event occurs--that is, if the user presses or holds down a keyboard key. |  | 14.0 |  |
| onkeyup | String | The JavaScript invoked if the onkeyup event occurs--that is, if the user releases a keyboard key. |  | 14.0 |  |
| onmousedown | String | The JavaScript invoked if the onmousedown event occurs--that is, if the user clicks a mouse button. |  | 14.0 |  |
| onmousemove | String | The JavaScript invoked if the onmousemove event occurs--that is, if the user moves the mouse pointer. |  | 14.0 |  |
| onmouseout | String | The JavaScript invoked if the onmouseout event occurs--that is, if the user moves the mouse pointer away from the component. |  | 14.0 |  |
| onmouseover | String | The JavaScript invoked if the onmouseover event occurs--that is, if the user moves the mouse pointer over the component. |  | 14.0 |  |
| rendered | Boolean | A Boolean value that specifies whether the component is rendered on the page. If not specified, this value defaults to true. |  | 14.0 | global |
| required | Boolean | A Boolean value that specifies whether this component is a required field. If set to true, the user must specify a value for this component. If not selected, this value defaults to false. |  | 14.0 |  |
| size | Integer | Size of the file selection box to be displayed. |  | 14.0 |  |
| style | String | The style used to display the component, used primarily for adding inline CSS styles. |  | 14.0 |  |
| styleclass | String | The style class used to display the component, used primarily to designate which CSS styles are applied when using an external CSS stylesheet. |  | 14.0 |  |
| tabindex | Integer | The order in which this component is selected compared to other page components when a user presses the Tab key repeatedly. This value must be an integer between 0 and 32767, with component 0 being the first component that is selected when a user presses the Tab key. |  | 14.0 |  |
| title | String | The text displayed next to the component when the mouse hovers over it. |  | 14.0 |  |
| value | Blob | A merge field that references the controller class variable that is associated with this component. For example, if the name of the associated variable in the controller class is myInputFile, use value="{!myInputFile}" to reference the variable. | Yes | 14.0 |  |

#### See Also

-   [apex:input](atlas.en-us.pages.meta/pages/pages_compref_input.htm)

## Code Examples

```apex
<!-- Upload a file and put it in your personal documents folder-->

<!-- Page: -->
<apex:page standardController="Document" extensions="documentExt">
    <apex:messages />
    <apex:form id="theForm">
      <apex:pageBlock>
          <apex:pageBlockSection>
            <apex:inputFile value="{!document.body}" filename="{!document.name}"/>
            <apex:commandButton value="Save" action="{!save}"/>
          </apex:pageBlockSection>
       </apex:pageBlock>
    </apex:form>
</apex:page>
                
/*** Controller ***/
public class documentExt {
    public documentExt(ApexPages.StandardController controller) {
        Document d = (Document) controller.getRecord();
        d.folderid = UserInfo.getUserId(); //this puts it in My Personal Documents
    }                 
}
```

## Related Topics

- apex:input (atlas.en-us.pages.meta/pages/pages_compref_input.htm)
