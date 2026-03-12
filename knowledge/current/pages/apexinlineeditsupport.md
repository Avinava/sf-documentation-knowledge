---
title: "apex:inlineEditSupport"
domain: pages
topic: apexinlineeditsupport
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:22.533Z
estimatedTokens: 609
keywords: [apex, inlineEditSupport, component, inline, editing, support, <apex, outputField>, various, container, components, order, form>, tag, Attributes]
---

# apex:inlineEditSupport

> This component provides inline editing support to <apex:outputField> and various container components. In order to support inline editing, this component must also be within an <apex:form> tag.

# apex:inlineEditSupport

This component provides inline editing support to <apex:outputField\> and various container components. In order to support inline editing, this component must also be within an <apex:form\> tag.

The <apex:inlineEditSupport\> component can only be a descendant of the following tags:

-   <apex:dataList\>
-   <apex:dataTable\>
-   <apex:form\>
-   <apex:outputField\>
-   <apex:pageBlock\>
-   <apex:pageBlockSection\>
-   <apex:pageBlockTable\>
-   <apex:repeat\>

See also: the inlineEdit attribute of <apex:detail\>

## Example

```

```

## Attributes

| Attribute Name | Attribute Type | Description | Required? | API Version | Access |
| --- | --- | --- | --- | --- | --- |
| changedStyleClass | String | The name of a CSS style class used when the contents of a field have changed. |  | 21.0 |  |
| disabled | Boolean | A Boolean value that indicates whether inline editing is enabled or not. If not specified, this value defaults to true. |  | 21.0 |  |
| event | String | The name of a standard DOM event, such as ondblclick or onmouseover, that triggers inline editing on a field. |  | 21.0 |  |
| hideOnEdit | Object | A comma-separated list of button IDs. These buttons hide when inline editing is activated. |  | 21.0 |  |
| id | String | An identifier that allows the component to be referenced by other components in the page. |  | 10.0 | global |
| rendered | Boolean | A Boolean value that specifies whether the component is rendered on the page. If not specified, this defaults to true. |  | 21.0 |  |
| resetFunction | String | The name of the JavaScript function that is called when values are reset. |  | 21.0 |  |
| showOnEdit | Object | A comma-separated list of button IDs. These buttons display when inline editing is activated. |  | 21.0 |  |

#### See Also

-   [*Knowledge Article*: Apex:outputField No Longer Supported when Edit Permission is Disabled](https://help.salesforce.com/articleView?id=000354546&language=en_US&type=1&mode=1 "Knowledge Article: Apex:outputField No Longer
    Supported when Edit Permission is Disabled - html (New Window)")

-   [apex:detail](atlas.en-us.pages.meta/pages/pages_compref_detail.htm)

-   [apex:form](atlas.en-us.pages.meta/pages/pages_compref_form.htm)

-   [apex:outputField](atlas.en-us.pages.meta/pages/pages_compref_outputField.htm)

-   [Enabling Inline Editing](atlas.en-us.pages.meta/pages/pages_quick_start_inline_editing.htm)

## Code Examples

```
<!-- For this example to render properly, you must associate the Visualforce page 

with a valid contact record in the URL. 

For example, if 001D000000IRt53 is the contact ID, the resulting URL should be: 

https://MyDomain_login_URL/apex/myPage?id=001D000000IRt53

See the Visualforce Developer's Guide Quick Start Tutorial for more information. -->

<apex:page standardController="Contact">
    <apex:form >
        <apex:pageBlock mode="inlineEdit">
            <apex:pageBlockButtons >
                <apex:commandButton action="{!edit}" id="editButton" value="Edit"/>
                <apex:commandButton action="{!save}" id="saveButton" value="Save"/>
                <apex:commandButton onclick="resetInlineEdit()" id="cancelButton" value="Cancel"/>
            </apex:pageBlockButtons>
            <apex:pageBlockSection >
                <apex:outputField value="{!contact.lastname}">
                    <apex:inlineEditSupport showOnEdit="saveButton, cancelButton" 
                        hideOnEdit="editButton" event="ondblclick" 
                        changedStyleClass="myBoldClass" resetFunction="resetInlineEdit"/>
                </apex:outputField>
                <apex:outputField value="{!contact.accountId}"/>
                <apex:outputField value="{!contact.phone}"/>
            </apex:pageBlockSection>
        </apex:pageBlock>
    </apex:form>
</apex:page>
```

## Related Topics

- apex:detail (atlas.en-us.pages.meta/pages/pages_compref_detail.htm)
- apex:form (atlas.en-us.pages.meta/pages/pages_compref_form.htm)
- apex:outputField (atlas.en-us.pages.meta/pages/pages_compref_outputField.htm)
- Enabling Inline Editing (atlas.en-us.pages.meta/pages/pages_quick_start_inline_editing.htm)
