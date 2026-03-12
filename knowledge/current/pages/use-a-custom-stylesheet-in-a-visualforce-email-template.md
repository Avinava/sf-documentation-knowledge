---
title: "Use a Custom Stylesheet in a Visualforce Email Template"
domain: pages
topic: use-a-custom-stylesheet-in-a-visualforce-email-template
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:23.580Z
estimatedTokens: 614
keywords: [Custom, Stylesheet, Visualforce, Email, Template, templates, always, standard, look, feel, Salesforce, components, However, extend, overwrite]
---

# Use a Custom Stylesheet in a Visualforce Email Template

> By default, Visualforce email templates always use the standard look and feel of
		other Salesforce components. However, you can extend or overwrite these styles by defining
		your own stylesheet.

# Use a Custom Stylesheet in a Visualforce Email Template

By default, Visualforce email templates always use the standard look and feel of other Salesforce components. However, you can extend or overwrite these styles by defining your own stylesheet.

Unlike other Visualforce pages, Visualforce email templates cannot use referenced [page styles](atlas.en-us.pages.meta/pages/pages_styling.htm "It’s easy to style a Visualforce page, either by mimicking the look and feel of a standard Salesforce page, or by using your own stylesheets or content types.") or [static resources](atlas.en-us.pages.meta/pages/pages_resources.htm "Static resources allow you to upload content that you can reference in a Visualforce page, including archives (such as .zip and .jar files), images, style sheets, JavaScript, and other files. Static resources can be used only within your Salesforce org, so you can’t host content here for other apps or websites."). Although the CSS appears to render in the email template preview pane, it does not appear the same to the recipients of your email. You must define your style using CSS within <style\> tags.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pages)

#### Note

Email clients can limit CSS styling. Always test Visualforce email templates with your company’s email client on both web and mobile platforms.

This example changes the font of your email to Courier, adds a border to the table, and changes the color of the table rows.

```

```

Example of the Rendered Visualforce Email Template ![An example of the HTML preview of an email template](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fpages%2Fimages%2Fpages_email_templates_stylesheet.jpg&folder=pages)

## Define Visualforce Stylesheets in a Custom Component

Although you cannot reference an external stylesheet in a Visualforce email template, you can place the style definitions within a [custom component](atlas.en-us.pages.meta/pages/pages_comp_cust.htm) that can be referenced in other places. For example, you can modify the previous example to place the style information in a component named EmailStyle.

```

```

Then, in the Visualforce email template, you can reference just that component:

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pages)

#### Note

Any <apex:component\> tags used within a Visualforce email template must have an access level of global.

## Code Examples

```
<messaging:emailTemplate recipientType="Contact"
	relatedToType="Account"
	subject="Case report for Account: {!relatedTo.name}"
	replyTo="support@acme.com">

	<messaging:htmlEmailBody>
		<html>
			<head>
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
			</head>
			<body>
				<p>Dear {!recipient.name},</p>
				<table border="0" >
					<tr>
						<th>Case Number</th><th>Origin</th>
						<th>Creator Email</th><th>Status</th>
					</tr>
					<apex:repeat var="cx" value="{!relatedTo.Cases}">
						<tr>
							<td>
								<a href="https://MyDomain_login_URL/{!cx.id}">
									{!cx.CaseNumber}
								</a>
							</td>
							<td>{!cx.Origin}</td>
							<td>{!cx.Contact.email}</td>
							<td>{!cx.Status}</td>
						</tr>
					</apex:repeat> 
				</table>
			</body>
		</html>
	</messaging:htmlEmailBody>
</messaging:emailTemplate>
```

```apex
<apex:component access="global">
	<head>
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
	</head>
</apex:component>
```

```
<messaging:htmlEmailBody>
	<html>
		<c:EmailStyle />
		<body>
			<p>Dear {!recipient.name},</p>
			...
		</body>
	</html>
</messaging:htmlEmailBody>
```

## Related Topics

- page styles (atlas.en-us.pages.meta/pages/pages_styling.htm)
- static resources (atlas.en-us.pages.meta/pages/pages_resources.htm)
- custom
					component (atlas.en-us.pages.meta/pages/pages_comp_cust.htm)
