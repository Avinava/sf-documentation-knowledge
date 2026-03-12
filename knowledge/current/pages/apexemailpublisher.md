---
title: "apex:emailPublisher"
domain: pages
topic: apexemailpublisher
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:22.413Z
estimatedTokens: 1107
keywords: [apex, emailPublisher, email, publisher, lets, support, agents, Case, Feed, compose, send, messages, customers, customize, templates]
---

# apex:emailPublisher

> The email publisher lets support agents who use Case Feed compose and send email messages to customers. You can customize this publisher to support email templates and attachments. This component can only be used in organizations that have Case Feed and Email-to-Case enabled. Ext JS versions less th

# apex:emailPublisher

The email publisher lets support agents who use Case Feed compose and send email messages to customers. You can customize this publisher to support email templates and attachments. This component can only be used in organizations that have Case Feed and Email-to-Case enabled. Ext JS versions less than 3 should not be included on pages that use this component.

## This example displays the email publisher.

```

```

## Attributes

| Attribute Name | Attribute Type | Description | Required? | API Version | Access |
| --- | --- | --- | --- | --- | --- |
| autoCollapseBody | Boolean | A Boolean value that specifies whether the email body will be collapsed to a small height when it is empty. |  | 25.0 |  |
| bccVisibility | String | The visibility of the BCC field can be 'editable', 'editableWithLookup', 'readOnly', or 'hidden'. |  | 25.0 |  |
| ccVisibility | String | The visibility of the CC field can be 'editable', 'editableWithLookup', 'readOnly', or 'hidden'. |  | 25.0 |  |
| emailBody | String | The default text value of the email body. |  | 25.0 |  |
| emailBodyFormat | String | The format of the email body can be 'text', 'HTML', or 'textAndHTML'. |  | 25.0 |  |
| emailBodyHeight | String | The height of the email body in em. |  | 25.0 |  |
| enableQuickText | Boolean | If the quick text autocomplete functionality will be available in the publisher. |  | 25.0 |  |
| entityId | id | Entity ID of the record for which to display the email publisher. In the current version only Case record ids are supported. | Yes | 25.0 |  |
| expandableHeader | Boolean | A Boolean value that specifies whether the header is expandable or fixed. |  | 25.0 |  |
| fromAddresses | String | A restricted set of from addresses. |  | 25.0 |  |
| fromVisibility | String | The visibility of the From field can be 'selectable' or 'hidden'. |  | 25.0 |  |
| id | String | An identifier that allows the component to be referenced by other components in the page. |  | 14.0 | global |
| onSubmitFailure | String | The JavaScript invoked if the email failed to be sent. |  | 25.0 |  |
| onSubmitSuccess | String | The JavaScript invoked if the email was successfully sent. |  | 25.0 |  |
| rendered | Boolean | A Boolean value that specifies whether the component is rendered on the page. If not specified, this value defaults to true. |  | 14.0 | global |
| reRender | Object | The ID of one or more components that are redrawn when the email was successfully sent. This value can be a single ID, a comma-separated list of IDs, or a merge field expression for a list or collection of IDs. |  | 25.0 |  |
| sendButtonName | String | The name of the send button in the email publisher. |  | 25.0 |  |
| showAdditionalFields | Boolean | A Boolean value that specifies whether the additional fields defined in the publisher layout should be displayed. |  | 25.0 |  |
| showAttachments | Boolean | A Boolean value that specifies whether the attachment selector should be displayed. |  | 25.0 |  |
| showSendButton | Boolean | A Boolean value that specifies whether the send button should be displayed. |  | 25.0 |  |
| showTemplates | Boolean | A Boolean value that specifies whether the template selector should be displayed. |  | 25.0 |  |
| subject | String | The default value of the Subject. |  | 25.0 |  |
| subjectVisibility | String | The visibility of the Subject field can be 'editable', 'readOnly', or 'hidden'. |  | 25.0 |  |
| submitFunctionName | String | The name of a function that can be called from JavaScript to send the email. |  | 25.0 |  |
| title | String | The title displayed in the email publisher header. |  | 25.0 |  |
| toAddresses | String | The default value of the To field. |  | 25.0 |  |
| toVisibility | String | The visibility of the To field can be 'editable', 'editableWithLookup', 'readOnly', or 'hidden'. |  | 25.0 |  |
| verticalResize | Boolean | A Boolean value that specifies whether the publisher allows vertical resizing. |  | 30.0 |  |
| width | String | The width of the email publisher in pixels (px) or percentage (%). |  | 25.0 |  |

#### See Also

-   [*Publisher and Quick Action Developer Guide*: Customizing the Email Action](https://developer.salesforce.com/docs/atlas.en-us.260.0.case_feed_dev.meta/case_feed_dev/case_feed_dev_guide_email_publisher.htm "Publisher and Quick Action Developer Guide:
    Customizing the Email Action - html (New Window)")

## Code Examples

```
<apex:page standardController="Case" showHeader="true">
                <apex:emailPublisher id="myEmailPublisher" 
                    entityId="{!case.id}" 
                    width="600px"
                    title="Send an Email"
                    expandableHeader="false"
                    autoCollapseBody="false"
                    showAdditionalFields="false"
                    fromVisibility="selectable"
                    toVisibility="editable"
                    bccVisibility="hidden" 
                    ccVisibility="hidden"
                    emailBody=""
                    subject=""
                    toAddresses=""
                    onSubmitFailure="alert('failed');"
                    fromAddresses="person1@mycompany.com,person2@mycompany.com"
                />  
            </apex:page>
```
