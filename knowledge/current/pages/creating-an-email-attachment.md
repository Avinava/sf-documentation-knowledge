---
title: "Creating an Email Attachment"
domain: pages
topic: creating-an-email-attachment
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:23.554Z
estimatedTokens: 647
keywords: [Creating, Email, Attachment, want, add, few, lines, code, custom, controller, attachments, Blob, file, Apex, Messaging.EmailFileAttachment]
---

# Creating an Email Attachment

> If you want to add an attachment to your email, you will need to add only a few lines of
            code to your custom controller. Email attachments are Blob file types. To create an attachment, you need to use the Apex Messaging.EmailFileAttachment class. You must define
            both the file

# Creating an Email Attachment

If you want to add an attachment to your email, you will need to add only a few lines of code to your custom controller. Email attachments are Blob file types. To create an attachment, you need to use the Apex Messaging.EmailFileAttachment class. You must define both the file name and the content of an EmailFileAttachment object.

## Adding a PDF Attachment

The following example demonstrates how to transform a PageReference to a Visualforce page rendered as a PDF into an email attachment. First, create a page called attachmentPDF:

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pages)

#### Note

See [Best Practices for Rendering PDF Files](atlas.en-us.pages.meta/pages/pages_compref_additional_render_pdf.htm#pages_compref_additional_render_pdf "Rendering a Visualforce page as a PDF file is a great way to share information about your Salesforce organization. Here are some best practices for you to consider.") for details of which components are recommended for use in PDF attachments.

Next, create the EmailFileAttachment object in the send() method of your custom controller. The following examples must be placed before calling Messaging.sendEmail:

```

```

If your SingleEmailMessage object is named email, then you associate the attachment like this:

```

```

## Defining a Custom Component as an Attachment

By creating a custom component and using it on the Visualforce email form and to render the PDF for the email, users can see a preview of the content they are trying to send.

The following markup defines a custom component named attachment that represents the attachment for the email:

```

```

Replace your attachmentPDF page like this:

```

```

Then add the custom component to render at the bottom of your previous sendEmailPage:

```

```

If you want to make changes to both the attachment and the preview, the attachment custom component needs to be modified in only one location.

## Example: Sending an Email with an Attachment

The following example shows the [previous sendEmail example](atlas.en-us.pages.meta/pages/pages_email_intro.htm) with a custom component that adds a Visualforce page as an attachment. First, the controller:

```

```

Next, the Visualforce page that sends the email:

```

```

#### See Also

-   [*Apex Developer Guide*: EmailFileAttachment Class](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_classes_email_outbound_attachment.htm "Apex Developer Guide: EmailFileAttachment Class - HTML (New Window)")

## Code Examples

```
<apex:page standardController="Account" renderAs="PDF">

  <h1>Account Details</h1>
  
  <apex:panelGrid columns="2">

      <apex:outputLabel for="Name" value="Name"/>
      <apex:outputText id="Name" value="{!account.Name}"/>
      
      <apex:outputLabel for="Owner" value="Account Owner"/>
      <apex:outputText id="Owner" value="{!account.Owner.Name}"/>
      
      <apex:outputLabel for="AnnualRevenue" value="Annual Revenue"/>
      <apex:outputText id="AnnualRevenue" value="{0,number,currency}">
          <apex:param value="{!account.AnnualRevenue}"/>
      </apex:outputText>
      
      <apex:outputLabel for="NumberOfEmployees" value="Employees"/>
      <apex:outputText id="NumberOfEmployees" value="{!account.NumberOfEmployees}"/>
      
  </apex:panelGrid>

</apex:page>
```

```
// Reference the attachment page, pass in the account ID
    PageReference pdf = Page.attachmentPDF;
    pdf.getParameters().put('id',(String)account.id);
    pdf.setRedirect(true);

    // Take the PDF content
    Blob b = pdf.getContent();

    // Create the email attachment
    Messaging.EmailFileAttachment efa = new Messaging.EmailFileAttachment();
    efa.setFileName('attachment.pdf');
    efa.setBody(b);
```

```
email.setFileAttachments(new Messaging.EmailFileAttachment[] {efa});
```

```apex
<apex:component access="global">
  <h1>Account Details</h1>
  
  <apex:panelGrid columns="2">

      <apex:outputLabel for="Name" value="Name"/>
      <apex:outputText id="Name" value="{!account.Name}"/>
      
      <apex:outputLabel for="Owner" value="Account Owner"/>
      <apex:outputText id="Owner" value="{!account.Owner.Name}"/>
      
      <apex:outputLabel for="AnnualRevenue" value="Annual Revenue"/>
      <apex:outputText id="AnnualRevenue" value="{0,number,currency}">
          <apex:param value="{!account.AnnualRevenue}"/>
      </apex:outputText>
      
      <apex:outputLabel for="NumberOfEmployees" value="Employees"/>
      <apex:outputText id="NumberOfEmployees" value="{!account.NumberOfEmployees}"/>
      
  </apex:panelGrid>
</apex:component>
```

```
<apex:page standardController="account" renderAs="PDF">
    <c:attachment/>
</apex:page>
```

## Related Topics

- Best Practices for Rendering PDF Files (atlas.en-us.pages.meta/pages/pages_compref_additional_render_pdf.htm)
- previous sendEmail
                    example (atlas.en-us.pages.meta/pages/pages_email_intro.htm)
