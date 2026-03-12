---
title: "messaging:emailHeader"
domain: pages
topic: messagingemailheader
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:22.783Z
estimatedTokens: 278
keywords: [messaging, emailHeader, Adds, custom, email, limited, characters, Attributes]
---

# messaging:emailHeader

> Adds a custom header to the email. The body of a header is limited to 1000 characters.

# messaging:emailHeader

Adds a custom header to the email. The body of a header is limited to 1000 characters.

## Example

```

```

The example above renders the following HTML:

```

```

## Attributes

| Attribute Name | Attribute Type | Description | Required? | API Version | Access |
| --- | --- | --- | --- | --- | --- |
| id | String | An identifier that allows the emailHeader component to be referenced by other components in the page. |  | 14.0 | global |
| name | String | The name of the header. Note: X-SFDC-X- is prepended to the name. | Yes | 14.0 |  |
| rendered | Boolean | A Boolean value that specifies whether the component is rendered on the page. If not specified, this value defaults to true. |  | 14.0 | global |

#### See Also

-   [Visualforce Email Templates](atlas.en-us.pages.meta/pages/pages_email_templates_intro.htm "Developers and administrators can use Visualforce to create email templates. The advantage of using Visualforce over standard HTML email templates is that Visualforce gives you the ability to perform advanced operations on data that is sent to a recipient.")

## Code Examples

```
<messaging:emailTemplate recipientType="Contact"
	relatedToType="Account"
	subject="Testing a custom header"
	replyTo="support@acme.com">
            
	<messaging:emailHeader name="customHeader">
		BEGIN CUSTOM HEADER
		Account Id: {!relatedTo.Id}
		END CUSTOM HEADER
	</messaging:emailHeader>
            
	<messaging:htmlEmailBody >
	<html>
	<body>
            
	<p>Dear {!recipient.name},</p>
   	<p>Check out the header of this email!</p>
	</body>
	</html>
	</messaging:htmlEmailBody>
</messaging:emailTemplate>
```

```
Date: Thu, 5 Feb 2009 19:35:59 +0000
From: Admin User <support@salesforce.com>
Sender: <no-reply@salesforce.com>
Reply-To: support@acme.com
To: "admin@salesforce.com" <admin@salesforce.com>
Message-ID: <19677436.41233862559806.JavaMail.admin@admin-WS>
Subject: Testing a custom header
MIME-Version: 1.0
Content-Type: multipart/alternative;
boundary="----=_Part_8_14667134.1233862559806"
X-SFDC-X-customHeader: BEGIN CUSTOM HEADER Account Id: 001x000xxx3BIdoAAG END CUSTOM HEADER
X-SFDC-LK: 00Dx000000099jh
X-SFDC-User: 005x0000000upVu
X-Sender: postmaster@salesforce.com
X-mail_abuse_inquiries: https://salesforce.com/company/abuse.jsp
X-SFDC-Binding: 1WrIRBV94myi25uB
X-OriginalArrivalTime: 05 Feb 2009 19:35:59.0747 (UTC) FILETIME=[F8FF7530:01C987C8]
X-MS-Exchange-Organization-SCL: 0
```

## Related Topics

- Visualforce Email Templates (atlas.en-us.pages.meta/pages/pages_email_templates_intro.htm)
