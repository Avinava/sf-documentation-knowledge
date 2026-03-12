---
title: "messaging:attachment"
domain: pages
topic: messagingattachment
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:22.778Z
estimatedTokens: 480
keywords: [messaging, attachment, Compose, append, email, Attributes]
---

# messaging:attachment

> Compose an attachment and append it to the email.

# messaging:attachment

Compose an attachment and append it to the email.

## Example

```

```

## Attributes

| Attribute Name | Attribute Type | Description | Required? | API Version | Access |
| --- | --- | --- | --- | --- | --- |
| filename | String | Sets a file name on the attachment. If a filename isn’t provided, one is generated for you. |  | 14.0 |  |
| id | String | An identifier that other components in the page use to reference the attachment component. |  | 14.0 | global |
| inline | Boolean | Sets the HTTP Content-Disposition header of the attachment in the email to inline. |  | 17.0 |  |
| renderAs | String | Indicates how the attachment is rendered. The default value is "text".Although any MIME type/subtype is a valid renderAs value, Visualforce supports content conversion of only PDFs.Visualforce doesn’t generate other file formats. It only sets the Content-Type field of the HTTP response header to the specified MIME type. Some file formats, such as .xlsx, can fail to render. |  | 14.0 |  |
| rendered | Boolean | A Boolean value that specifies whether the component is rendered on the page. If not specified, this value defaults to true. |  | 14.0 | global |

#### See Also

-   [Visualforce Email Templates](atlas.en-us.pages.meta/pages/pages_email_templates_intro.htm "Developers and administrators can use Visualforce to create email templates. The advantage of using Visualforce over standard HTML email templates is that Visualforce gives you the ability to perform advanced operations on data that is sent to a recipient.")

-   [Add Attachments to a Visualforce Email Template](atlas.en-us.pages.meta/pages/pages_email_templates_attachments.htm "You can add attachments to your Visualforce email templates. Each attachment is encapsulated within a single <messaging:attachment> component. Code within <messaging:attachment> can be a combination of HTML and Visualforce tags.")

## Code Examples

```
<messaging:emailTemplate recipientType="Contact"
	relatedToType="Account"
	subject="Case report for Account: {!relatedTo.name}"
	replyTo="support@example.com">

	<messaging:htmlEmailBody>
	<html>
		<body>
		<p>Dear {!recipient.name},</p>
		<p>Attached is a list of cases related to {!relatedTo.name}.</p>
		<center>
		<apex:outputLink value="https://salesforce.com">
			For more detailed information log in to Salesforce.com
		</apex:outputLink>
		</center>
		</body>
	</html>
	</messaging:htmlEmailBody>

	<messaging:attachment renderAs="PDF" filename="yourCases.pdf">
	<html>
		<body>
		<p>You can display your {!relatedTo.name} cases as a PDF</p>
		<table border="0" >
		<tr>
			<th>Case Number</th><th>Origin</th>
			<th>Creator Email</th><th>Status</th>
		</tr>
		<apex:repeat var="cx" value="{!relatedTo.Cases}">
		<tr>
			<td><a href = 
			     "https://na1.salesforce.com/{!cx.id}">{!cx.CaseNumber}
				</a></td>
			<td>{!cx.Origin}</td>
			<td>{!cx.Contact.email}</td>
			<td>{!cx.Status}</td>
		</tr>
		</apex:repeat> 
		</table>
		</body>
	</html>
	</messaging:attachment>
</messaging:emailTemplate>
```

## Related Topics

- content conversion (atlas.en-us.pages.meta/pages/pages_output_pdf_renderas.htm)
- Visualforce Email Templates (atlas.en-us.pages.meta/pages/pages_email_templates_intro.htm)
- Add Attachments to a Visualforce Email Template (atlas.en-us.pages.meta/pages/pages_email_templates_attachments.htm)
