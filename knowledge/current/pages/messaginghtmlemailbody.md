---
title: "messaging:htmlEmailBody"
domain: pages
topic: messaginghtmlemailbody
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:22.797Z
estimatedTokens: 226
keywords: [messaging, htmlEmailBody, HTML, version, email, Attributes]
---

# messaging:htmlEmailBody

> The HTML version of the email body.

# messaging:htmlEmailBody

The HTML version of the email body.

## Example

```

```

## Attributes

| Attribute Name | Attribute Type | Description | Required? | API Version | Access |
| --- | --- | --- | --- | --- | --- |
| id | String | An identifier that allows the htmlEmailBody component to be referenced by other components in the page. |  | 14.0 | global |
| rendered | Boolean | A Boolean value that specifies whether the component is rendered on the page. If not specified, this value defaults to true. |  | 14.0 | global |

#### See Also

-   [Visualforce Email Templates](atlas.en-us.pages.meta/pages/pages_email_templates_intro.htm "Developers and administrators can use Visualforce to create email templates. The advantage of using Visualforce over standard HTML email templates is that Visualforce gives you the ability to perform advanced operations on data that is sent to a recipient.")

## Code Examples

```
<messaging:emailTemplate recipientType="Contact"
	relatedToType="Account"
	subject="Case report for Account: {!relatedTo.name}"
	replyTo="support@acme.com">
		<messaging:htmlEmailBody>
		<html>
		<style type="text/css">
			body {font-family: Courier; size: 12pt;}
            
            table {
            border-width: 5px;
            border-spacing: 5px;
            border-style: dashed;
            border-color: #FF0000;
            background-color: #FFFFFF;
            }
            
            td {
            border-width: 1px;
            padding: 4px;
            border-style: solid;
            border-color: #000000;
            background-color: #FFEECC;
            }
            
            th { 
            color: #000000;
            border-width: 1px ;
            padding: 4px ;
            border-style: solid ;
            border-color: #000000;
            background-color: #FFFFF0;
            }
		</style>
		<body>
            <p>Dear {!recipient.name},</p>
            <p>Below is a list of cases related to {!relatedTo.name}.</p>
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
            <p/>
            <center>
            	<apex:outputLink value="https://salesforce.com">
            	For more detailed information login to Salesforce.com
            </apex:outputLink>
            </center>
            
		</body>
		</html>
	</messaging:htmlEmailBody>
</messaging:emailTemplate>
```

## Related Topics

- Visualforce Email Templates (atlas.en-us.pages.meta/pages/pages_email_templates_intro.htm)
