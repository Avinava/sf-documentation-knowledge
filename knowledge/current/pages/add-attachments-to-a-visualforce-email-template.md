---
title: "Add Attachments to a Visualforce Email Template"
domain: pages
topic: add-attachments-to-a-visualforce-email-template
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:23.564Z
estimatedTokens: 1006
keywords: [Add, Attachments, Visualforce, Email, Template, templates, attachment, encapsulated, <messaging, attachment>, component, Code, combination, HTML, tags]
---

# Add Attachments to a Visualforce Email Template

> You can add attachments to your Visualforce email templates. Each attachment is
		encapsulated within a single <messaging:attachment>
		component. Code within <messaging:attachment> can be
		a combination of HTML and Visualforce tags.

# Add Attachments to a Visualforce Email Template

You can add attachments to your Visualforce email templates. Each attachment is encapsulated within a single <messaging:attachment> component. Code within <messaging:attachment> can be a combination of HTML and Visualforce tags.

The example in [Create a Visualforce Email Template](atlas.en-us.pages.meta/pages/pages_email_templates_creating.htm "Use the Visualforce programming language to create email templates.") shows how to create a Visualforce email template by iterating through some data and displaying it to an email recipient.

1.  To create an attachment that contains the data from the example, use the <messaging:attachment> component. This attachment is an unformatted text file.

    ```

    ```

2.  To define the name of the attached file, set the filename attribute. While it’s good practice to define an easily identifiable name, it isn’t required. If you leave the name undefined, Salesforce generates a name for you. A file name without an extension defaults to a text file.

    To render the attached file as a CSV, add the .csv file extension to the file name.

    ```

    ```

    To render the attached file as an HTML file, add the .html file extension to the file name.

    ```

    ```

    Although you can define only one file name for every <messaging:attachment\> component, you can attach multiple files to an email.

3.  To render the attachment as a PDF, set the [renderAs](atlas.en-us.pages.meta/pages/pages_output_pdf_renderas.htm "You can generate a downloadable, printable PDF file of a Visualforce page using the PDF rendering service.") attribute to "PDF". Before using this feature, review the [Visualforce PDF Rendering Considerations and Limitations.](atlas.en-us.pages.meta/pages/pages_output_pdf_considerations.htm "Review these considerations and limitations when designing Visualforce pages intended to be rendered to PDF. Always verify the formatting and appearance of the PDF version of your page before you put it into production.")

    ```

    ```

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pages)

    #### Note

    The renderAs attribute accepts any MIME type as a valid value. However, Visualforce supports only PDF rendering. Visualforce doesn’t generate other file formats. It only sets the Content-Type field of the HTTP response header to the specified MIME type. Some file formats, such as .xlsx, can fail to render.

4.  You can also style your attachment with images or style sheets. Styles are associated with attachments [the same way as they are in Visualforce email templates](atlas.en-us.pages.meta/pages/pages_email_templates_stylesheets.htm "By default, Visualforce email templates always use the standard look and feel of other Salesforce components. However, you can extend or overwrite these styles by defining your own stylesheet."), either as inline code or by using a custom component.

    Attachments rendered as PDFs can reference static resources through the [$Resource global variable](atlas.en-us.pages.meta/pages/pages_resources.htm "Static resources allow you to upload content that you can reference in a Visualforce page, including archives (such as .zip and .jar files), images, style sheets, JavaScript, and other files. Static resources can be used only within your Salesforce org, so you can’t host content here for other apps or websites."), so you can refer to an image or style sheet within the body of the PDF.

    For example, this attachment includes a logo in the PDF:

    ```

    ```

    This attachment references a style sheet that’s saved as a static resource:

    ```

    ```

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pages)

    #### Note

    Referencing static resources on a remote server can increase the time it takes to render a PDF attachment.

    You can’t reference remote resources when creating PDF attachments in an Apex trigger. Doing so results in an exception.

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
					For more detailed information, log in to Salesforce.com
				</apex:outputLink>
			</center>
			</body>
		</html>
	</messaging:htmlEmailBody>

	<messaging:attachment>
		<apex:repeat var="cx" value="{!relatedTo.Cases}">
			Case Number: {!cx.CaseNumber}
			Origin: {!cx.Origin}
			Creator Email: {!cx.Contact.email}
			Case Number: {!cx.Status}
		</apex:repeat> 
	</messaging:attachment>
</messaging:emailTemplate>
```

```
<messaging:attachment filename="cases.csv">
	<apex:repeat var="cx" value="{!relatedTo.Cases}">
		{!cx.CaseNumber}
		{!cx.Origin}
		{!cx.Contact.email}
		{!cx.Status}
	</apex:repeat> 
</messaging:attachment>
```

```
<messaging:attachment filename="cases.html">
	<html>
		<body>
		<table border="0" >
			<tr>
				<th>Case Number</th><th>Origin</th>
				<th>Creator Email</th><th>Status</th>
			</tr>
			<apex:repeat var="cx" value="{!relatedTo.Cases}">
			<tr>
				<td><a href = 
					"https://MyDomain_login_URL/{!cx.id}">{!cx.CaseNumber}
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
```

```
<messaging:attachment renderAs="PDF" filename="cases.pdf">
	<html>
		<body>
		<p>You can display your {!relatedTo.name} cases as a PDF:</p>
			<table border="0" >
			<tr>
				<th>Case Number</th><th>Origin</th>
				<th>Creator Email</th><th>Status</th>
			</tr>
			<apex:repeat var="cx" value="{!relatedTo.Cases}">
			<tr>
				<td><a href = 
					"https://MyDomain_login_URL/{!cx.id}">{!cx.CaseNumber}
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
```

```
<messaging:attachment renderAs="PDF" filename="cases.pdf">
		<html>
			<body>
			<img src = "{!$Resource.logo}" />
			...
			</body>
		</html>
	</messaging:attachment>
```

## Related Topics

- Create a Visualforce Email Template (atlas.en-us.pages.meta/pages/pages_email_templates_creating.htm)
- renderAs (atlas.en-us.pages.meta/pages/pages_output_pdf_renderas.htm)
- Visualforce PDF Rendering Considerations and
						Limitations. (atlas.en-us.pages.meta/pages/pages_output_pdf_considerations.htm)
- the same way as they are in Visualforce email
						templates (atlas.en-us.pages.meta/pages/pages_email_templates_stylesheets.htm)
- $Resource global variable (atlas.en-us.pages.meta/pages/pages_resources.htm)
