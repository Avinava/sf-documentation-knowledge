---
title: "messaging:emailTemplate"
domain: pages
topic: messagingemailtemplate
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:22.792Z
estimatedTokens: 511
keywords: [messaging, emailTemplate, Visualforce, email, template, tags, wrapped, inside, component, tag, contain, either, htmlEmailBody, plainTextEmailBody, detail]
---

# messaging:emailTemplate

> Defines a Visualforce email template. All email template tags must be wrapped inside a single emailTemplate component tag. emailTemplate must contain either an htmlEmailBody tag or a plainTextEmailBody tag. The detail and form components are not permitted as child nodes. This component can only be u

# messaging:emailTemplate

Defines a Visualforce email template. All email template tags must be wrapped inside a single emailTemplate component tag. emailTemplate must contain either an htmlEmailBody tag or a plainTextEmailBody tag. The detail and form components are not permitted as child nodes. This component can only be used within a Visualforce email template. Email templates can be created and managed through Setup | Communication Templates | Email Templates.

## Example

```

```

## Translated Template Example

```

```

## Attributes

| Attribute Name | Attribute Type | Description | Required? | API Version | Access |
| --- | --- | --- | --- | --- | --- |
| id | String | An identifier that allows the emailTemplate component to be referenced by other components in the page. |  | 14.0 | global |
| language | String | The language used to display the email template. Valid values: Salesforce-supported language keys, for example, "en" or "en-US". Accepts merge fields from recipientType and relatedToType. |  | 18.0 |  |
| recipientType | String | The Salesforce object receiving the email. |  | 14.0 |  |
| relatedToType | String | The Salesforce object from which the template retrieves merge field data. Valid objects: objects that have a standard controller, including custom objects Visualforce supports. |  | 14.0 |  |
| rendered | Boolean | A Boolean value that specifies whether the component is rendered on the page. If not specified, this value defaults to true. |  | 14.0 | global |
| replyTo | String | Sets the reply-to email header. |  | 14.0 |  |
| subject | String | Sets the email subject line. Limit: 100 characters. | Yes | 14.0 |  |

#### See Also

-   [Visualforce Email Templates](atlas.en-us.pages.meta/pages/pages_email_templates_intro.htm "Developers and administrators can use Visualforce to create email templates. The advantage of using Visualforce over standard HTML email templates is that Visualforce gives you the ability to perform advanced operations on data that is sent to a recipient.")

## Code Examples

```
<messaging:emailTemplate recipientType="Contact"
    relatedToType="Account"
    subject="Your account's cases"
    replyTo="cases@acme.nomail.com" >

    <messaging:htmlEmailBody >
    <html>
        <body>
        <p>Hello {!recipient.name}--</p>
        <p>Here is a list of the cases we currently have for account {!relatedTo.name}:</p>
        <apex:datatable cellpadding="5" var="cx" value="{!relatedTo.Cases}">
            <apex:column value="{!cx.CaseNumber}" headerValue="Case Number"/>
            <apex:column value="{!cx.Subject}" headerValue="Subject"/>
            <apex:column value="{!cx.Contact.email}" headerValue="Creator's Email" />
            <apex:column value="{!cx.Status}" headerValue="Status" />
        </apex:datatable>
        </body>
    </html>
    </messaging:htmlEmailBody>

    <messaging:attachment renderas="pdf" filename="cases.pdf">
        <html>
        <body>
        <h3>Cases currently associated with {!relatedTo.name}</h3>
        <apex:datatable border="2" cellspacing="5" var="cx" value="{!relatedTo.Cases}">
            <apex:column value="{!cx.CaseNumber}" headerValue="Case Number"/>
            <apex:column value="{!cx.Subject}" headerValue="Subject"/>
            <apex:column value="{!cx.Contact.email}" headerValue="Creator's Email" />
            <apex:column value="{!cx.Status}" headerValue="Status" />
        </apex:datatable>
        </body>
        </html>
    </messaging:attachment>

    <messaging:attachment filename="cases.csv" >
        <apex:repeat var="cx" value="{!relatedTo.Cases}">
            {!cx.CaseNumber}, {!cx.Subject}, {!cx.Contact.email}, {!cx.Status}
        </apex:repeat>
    </messaging:attachment>
</messaging:emailTemplate>
```

```
<!-- This example requires that Label Workbench is enabled and that you have created the referenced labels. The example assumes that the Contact object has a custom language field that contains a valid language key. -->

<messaging:emailTemplate recipientType="Contact"
	relatedToType="Account"
	language="{!recipient.language__c}"
	subject="{!$Label.email_subject}"
	replyTo="cases@acme.nomail.com" >

	<messaging:htmlEmailBody >
	<html>
		<body>
		<p>{!$Label.email_greeting} {!recipient.name}--</p>
		<p>{!$Label.email_body}</p>
		</body>
	</html>
	</messaging:htmlEmailBody>

   </messaging:emailTemplate>
```

## Related Topics

- Visualforce Email Templates (atlas.en-us.pages.meta/pages/pages_email_templates_intro.htm)
