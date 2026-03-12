---
title: "messaging:plainTextEmailBody"
domain: pages
topic: messagingplaintextemailbody
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:22.801Z
estimatedTokens: 233
keywords: [messaging, plainTextEmailBody, plain, text, non-HTML, version, email, Attributes]
---

# messaging:plainTextEmailBody

> The plain text (non-HTML) version of the email body.

# messaging:plainTextEmailBody

The plain text (non-HTML) version of the email body.

## Example

```

```

## Attributes

| Attribute Name | Attribute Type | Description | Required? | API Version | Access |
| --- | --- | --- | --- | --- | --- |
| id | String | An identifier that allows the plainTextEmailBody component to be referenced by other components in the page. |  | 14.0 | global |
| rendered | Boolean | A Boolean value that specifies whether the component is rendered on the page. If not specified, this value defaults to true. |  | 14.0 | global |

#### See Also

-   [Visualforce Email Templates](atlas.en-us.pages.meta/pages/pages_email_templates_intro.htm "Developers and administrators can use Visualforce to create email templates. The advantage of using Visualforce over standard HTML email templates is that Visualforce gives you the ability to perform advanced operations on data that is sent to a recipient.")

## Code Examples

```
<messaging:emailTemplate recipientType="Contact"
	relatedToType="Account"
	subject="Case report for Account: {!relatedTo.name}"
	replyTo="support@acme.com">
            
	<messaging:plainTextEmailBody>
		Dear {!recipient.name}, 
            
		Below is a list of cases related to {!relatedTo.name}.
            
		<apex:repeat var="cx" value="{!relatedTo.Cases}">         
			Case Number: {!cx.CaseNumber}
			Origin: {!cx.Origin}
			Contact-email: {!cx.Contact.email}
			Status: {!cx.Status}         
		</apex:repeat> 
            
		For more detailed information login to Salesforce.com
            
	</messaging:plainTextEmailBody>
            
</messaging:emailTemplate>
```

## Related Topics

- Visualforce Email Templates (atlas.en-us.pages.meta/pages/pages_email_templates_intro.htm)
