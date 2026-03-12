---
title: "Create a Visualforce Email Template"
domain: pages
topic: create-a-visualforce-email-template
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:23.571Z
estimatedTokens: 1357
keywords: [Visualforce, Email, Template, programming, language, templates]
---

# Create a Visualforce Email Template

> Use the Visualforce programming language to create email templates.

# Create a Visualforce Email Template

Use the Visualforce programming language to create email templates.

This example shows how you can define a Visualforce email template that displays all the cases associated with a contact. It uses an <apex:repeat\> tag to iterate through all the cases related to a contact and incorporate them into the body of the template:

```

```

Notice the following about the markup:

-   The attributes recipientType and relatedToType act as controllers for the email template. With them you can access the same merge fields that are available to other standard controllers. The recipientType attribute represents the recipient of the email. The relatedToType attribute represents the record to associate with the email.
-   The <messaging:htmlEmailBody\> component can include a mix of Visualforce markup and HTML. The <messaging:plainTextEmailBody\> component can only include Visualforce markup and plain text.
-   To translate Visualforce email templates based on recipients’ or related objects’ languages, use the <messaging:emailTemplate\> tag's language attribute (valid values: Salesforce supported language keys, for example, “en-US”). The language attribute accepts merge fields from the email template's recipientType and relatedToType attributes. You create custom language fields for use in the merge fields.

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pages)

    #### Note

    The Translation Workbench is required to translate email templates.

    The example uses a merge field to obtain a language attribute for the contact receiving the email.

1.  Choose one of these options.
    -   If you have permission to edit public templates, from Setup, enter Email Templates in the Quick Find box, then select **Classic Email Templates**.
    -   If you don't have permission to edit public templates, go to your personal settings. Enter Templates in the Quick Find box, then select **Email Templates** or **My Templates**—whichever one appears.
2.  Click **New Template**.
3.  Choose Visualforce and click **Next**.
4.  Choose a folder in which to store the template.
5.  To make the template available for use, select the **Available For Use** checkbox.
6.  Enter an email template name.
7.  If necessary, change the Template Unique Name. This unique name refers to the component when you use the Lightning Platform API. In managed packages, this unique name prevents naming conflicts in package installations. This name can contain only underscores and alphanumeric characters, and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. With the Template Unique Name field, you can change certain components' names in a managed package and the changes are reflected in a subscriber's organization.
8.  If desired, choose a different character set from the Encoding dropdown list.
9.  Enter a description for the template. Both template name and description are for your internal use only.
10.  Enter a subject line for your template in Email Subject.
11.  In the Recipient Type dropdown list, select the type of recipient to receive email created from the template.
12.  If desired, in the Related To Type dropdown list, select the object from which the template retrieves merge field data.
13.  Click **Save**.
14.  On the View and Edit Email Templates in Salesforce Classic page, click **Edit Template**.
15.  Enter markup text for your Visualforce email template.

     ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pages)

     #### Note

     If you are including an image, we recommend uploading it to the Documents tab to reference the copy of the image on our server. For example:

     ```

     ```

16.  To specify the version of Visualforce and the API used with this email template, click **Version Settings**. If you’ve installed managed packages from AppExchange , you can also specify which version of each managed package to use with this email template. Generally, use the default value for all versions, to associate the email template with the most recent version of Visualforce, the API, and each managed package. To maintain specific behavior, you can specify an older version of Visualforce and the API. To access components or functionality that differ from the most recent package version, you can specify an older version of a managed package.
17.  To view the details of the template, click **Save**. To continue editing your template, click **Quick Save**. Your Visualforce markup must be valid before you can save your template.

     ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pages)

     #### Note

     The maximum size of a Visualforce email template is 1 MB.

     You can't send a mass email using a Visualforce email template. The {!Receiving\_User.field\_name} and {!Sending\_User.field\_name} merge fields work only for mass email and list email and are unavailable in Visualforce email templates.


#### See Also

-   [Use a Custom Stylesheet in a Visualforce Email Template](atlas.en-us.pages.meta/pages/pages_email_templates_stylesheets.htm "By default, Visualforce email templates always use the standard look and feel of other Salesforce components. However, you can extend or overwrite these styles by defining your own stylesheet.")

## Code Examples

```
<messaging:emailTemplate recipientType="Contact"
				relatedToType="Account"
				subject="Case report for Account: {!relatedTo.name}"
				language="{!recipient.language__c}"
				replyTo="support@acme.com">
			
				<messaging:htmlEmailBody>
					<html>
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
									"https://yourInstance.salesforce.com/{!cx.id}">{!cx.CaseNumber}
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

```
<apex:image id="Logo" value="https://yourInstance.salesforce.com/servlet/servlet.ImageServer?
id=015D0000000Dpwc&oid=00DD0000000FHaG&lastMod=127057656800" />
```

## Related Topics

- Use a Custom Stylesheet in a Visualforce Email Template (atlas.en-us.pages.meta/pages/pages_email_templates_stylesheets.htm)
