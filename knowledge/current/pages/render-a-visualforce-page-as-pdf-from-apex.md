---
title: "Render a Visualforce Page as PDF from Apex"
domain: pages
topic: render-a-visualforce-page-as-pdf-from-apex
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:23.871Z
estimatedTokens: 1208
keywords: [Render, Visualforce, PDF, Apex, PageReference.getContentAsPDF, data, code, convert, email, attachment, document, Chatter, post]
---

# Render a Visualforce Page as PDF from Apex

> You can use the PageReference.getContentAsPDF() method in Apex to render a Visualforce page as
        PDF data. Then use Apex code to convert that PDF data to an email attachment, a document, a
        Chatter post, and so on.

# Render a Visualforce Page as PDF from Apex

You can use the PageReference.getContentAsPDF() method in Apex to render a Visualforce page as PDF data. Then use Apex code to convert that PDF data to an email attachment, a document, a Chatter post, and so on.

The following example is a simple three element form that selects an account and a report format, and then sends the resulting report to the specified email address.

```

```

This page is a simple user interface. When you’re generating a PDF file from Apex, all the action is in the Apex code.

In this example, that code is in the PdfEmailerController class that’s specified as the page’s controller.

```

```

This Apex controller can be conceptually divided into four parts.

-   The three public properties at the beginning capture the values submitted by the three input elements on the form.
-   The sendReport() action method fires when the Send Account Summary button is clicked.
-   The two public helper properties supply the values to use in the two select list input elements.
-   The private helpers at the end encapsulate the list of possible PDF report formats. You can add your own report by creating a Visualforce page and then adding an entry for it in this section.

When the sendReport() action method fires, the code does the following.

-   It performs rudimentary error checking to ensure that the form fields have useful values.

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pages)

    #### Note

    This error checking is inadequate for a form that must survive contact with real people. Perform more complete form validation in your production code.

-   Next it uses the value of the selected account to look up the name of that account. The account name is used in text that’s added to the email message. This lookup is also an opportunity to further validate the form value and ensure that a real account was selected.
-   It uses the Messaging.SingleEmailMessage class to assemble an email message, setting the To, Subject, and Body email message values.
-   The code creates a PageReference for the selected report format and then sets a page request parameter on it. The parameter is named “id”, and its value is set to the selected account’s ID. This PageReference represents a specific request to access this page in the context of the specified account. When getContentAsPdf() is called, the referenced Visualforce page has access to the specified account, and the page is rendered with that account’s details.
-   Finally, the PDF data is added to an attachment, and the attachment is added to the email message created earlier. The message is then sent.

When using PageReference.getContentAsPdf(), the return type of the method call is Blob, which stands for “binary large object.” In Apex, the Blob data type represents untyped binary data. It’s only when the reportPdf variable is added to the Messaging.EmailFileAttachment with a content type of “application/pdf” that the binary data becomes a PDF file.

In addition, the call to getContentAsPdf() is wrapped in a try/catch block. If the call fails, the catch replaces the hoped for PDF data with a Blob version of the exception’s message text.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pages)

#### Note

PDF generation can throw a variety of different exceptions. Not all of them can be caught. Your code should be prepared to manage uncatchable exceptions like System.LimitException. For details, see “Exceptions that Can’t be Caught” in [Exception Statements](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_exception_statements.htm) in the Apex Developer Guide.

Rendering a Visualforce page as PDF data is treated semantically as a callout to an external service for various reasons. One reason is that the rendering service can fail in all the same ways that an external service can fail. For instance, the page references external resources that aren’t available. Another example is when the page contains too much data—usually in the form of images—or the rendering time exceeds a limit. For this reason, always wrap the getContentAsPdf() rendering call in a try/catch block when rendering a Visualforce page as PDF data in Apex.

For completeness, here’s the report template page that’s rendered into PDF data by the Apex code.

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pages)

#### Note

Don’t use the PageReference.getContent() or PageReference.getContentAsPDF() methods to retrieve the output of a different Visualforce page with the same controller and controller extensions. Doing so can cause unexpected problems that are difficult to debug. Instead, pass the base URL of the destination page.

```

```

## Code Examples

```
<apex:page title="Account Summary" tabStyle="Account"
    controller="PdfEmailerController">

    <apex:pageMessages />

    <apex:form >
        <apex:pageBlock title="Account Summary">
    
        <p>Select a recently modified account to summarize.</p>
        <p/>
        
        <apex:pageBlockSection title="Report Format">
        
            <!-- Select account menu -->
            <apex:pageBlockSectionItem>
                <apex:outputLabel for="selectedAccount" value="Account"/> 
                <apex:selectList id="selectedAccount" value="{! selectedAccount }" 
                                 size="1">
                    <apex:selectOption /> <!-- blank by default -->
                    <apex:selectOptions value="{! recentAccounts }" />
                </apex:selectList>
            </apex:pageBlockSectionItem>

            <!-- Select report format menu -->
            <apex:pageBlockSectionItem >
                <apex:outputLabel for="selectedReport" value="Summary Format"/> 
                <apex:selectList id="selectedReport" value="{! selectedReport }" 
                                 size="1">
                    <apex:selectOptions value="{! reportFormats }" />
                </apex:selectList>
            </apex:pageBlockSectionItem>

            <!-- Email recipient input field -->
            <apex:pageBlockSectionItem >
                <apex:outputLabel for="recipientEmail" value="Send To"/> 
                <apex:inputText value="{! recipientEmail }" size="40"/>
            </apex:pageBlockSectionItem>

        </apex:pageBlockSection>
            
        <apex:pageBlockButtons location="bottom">
            <apex:commandButton action="{! sendReport }" value="Send Account Summary" />
        </apex:pageBlockButtons>
    
    </apex:pageBlock>
    </apex:form>

</apex:page>
```

```apex
public with sharing class PdfEmailerController {
    
    // Form fields
    public Id selectedAccount    { get; set; }  // Account selected on Visualforce page
    public String selectedReport { get; set; }  // Report selected
    public String recipientEmail { get; set; }  // Send to this email
    
    // Action method for the [Send Account Summary] button
    public PageReference sendReport() {

        // NOTE: Abbreviated error checking to keep the code sample short
        //       You, of course, would never do this little error checking
        if(String.isBlank(this.selectedAccount) || String.isBlank(this.recipientEmail)) {
            ApexPages.addMessage(new 
                ApexPages.Message(ApexPages.Severity.ERROR, 
               'Errors on the form. Please correct and resubmit.'));
            return null; // early out
        }
        
        // Get account name for email message strings
        Account account = [SELECT Name 
                           FROM Account 
                           WHERE Id = :this.selectedAccount 
                           LIMIT 1];
        if(null == account) {
            // Got a bogus ID from the form submission
            ApexPages.addMessage(new 
                ApexPages.Message(ApexPages.Severity.ERROR, 
               'Invalid account. Please correct and resubmit.'));
            return null; // early out
        }
        
        // Create email
        Messaging.SingleEmailMessage message = new Messaging.SingleEmailMessage();
        message.setToAddresses(new String[]{ this.recipientEmail });
        message.setSubject('Account summary for ' + account.Name);
        message.setHtmlBody('Here\'s a summary for the ' + account.Name + ' account.');
        
        // Create PDF
        PageReference reportPage = 
            (PageReference)this.reportPagesIndex.get(this.selectedReport);
        reportPage.getParameters().put('id', this.selectedAccount);
        Blob reportPdf;
        try {
            reportPdf = reportPage.getContentAsPDF();
        }
        catch (Exception e) {
            reportPdf = Blob.valueOf(e.getMessage());
        }
        
        // Attach PDF to email and send
        Messaging.EmailFileAttachment attachment = new Messaging.EmailFileAttachment();
        attachment.setContentType('application/pdf');
        attachment.setFileName('AccountSummary-' + account.Name + '.pdf');
        attachment.setInline(false);
        attachment.setBody(reportPdf);
        message.setFileAttachments(new Messaging.EmailFileAttachment[]{ attachment });
        Messaging.sendEmail(new Messaging.SingleEmailMessage[]{ message });
        
        ApexPages.addMessage(new 
            ApexPages.Message(ApexPages.Severity.INFO,
           'Email sent with PDF attachment to ' + this.recipientEmail));

        return null; // Stay on same page, even on success
    }
    
    
    /***** Form Helpers *****/
    
    // Ten recently-touched accounts, for the Account selection menu
    public List<SelectOption> recentAccounts {
        get {
            if(null == recentAccounts){
                recentAccounts = new List<SelectOption>();
                for(Account acct : [SELECT Id,Name,LastModifiedDate 
                                    FROM Account 
                                    ORDER BY LastModifiedDate DESC 
                                    LIMIT 10]) {
                    recentAccounts.add(new SelectOption(acct.Id, acct.Name));
                }
            }
            return recentAccounts;
        }
        set;
    }
    
    // List of available reports, for the Summary Format selection menu
    public List<SelectOption> reportFormats {
        get {
            if(null == reportFormats) {
                reportFormats = new List<SelectOption>();
                for(Map <String,Object> report : reports) {
                    reportFormats.add(new SelectOption(
                        (String)report.get('name'), (String)report.get('label')));
                }
            }
            return reportFormats;
        }
        set;
    }

    
    /***** Private Helpers *****/
    
    // List of report templates to make available
    // These are just Visualforce pages you might print to PDF
    private Map<String,PageReference> reportPagesIndex;
    private List<Map<String,Object>> reports {
        get {
            if(null == reports) {
                reports = new List<Map<String,Object>>();
                // Add one report to the list of reports
                Map<String,Object> simpleReport = new Map<String,Object>();
                simpleReport.put('name',  'simple');
                simpleReport.put('label', 'Simple');
                simpleReport.put('page',   Page.ReportAccountSimple);
                reports.add(simpleReport);
                
                // Add your own, more complete list of PDF templates here

                // Index the page names for the reports
                this.reportPagesIndex = new Map<String,PageReference>();
                for(Map<String,Object> report : reports) {
                    this.reportPagesIndex.put(
                        (String)report.get('name'), (PageReference)report.get('page'));
                }
            }
            return reports;
        }
        set;
    }
}
```

```
<apex:page showHeader="false" standardStylesheets="false"
    standardController="Account">
    
    <!-- 
    This page must be called with an Account ID in the request, e.g.:
    https://MyDomainName--PackageName.vf.force.com/apex/ReportAccountSimple?id=001D000000JRBet
    -->

    <h1>Account Summary for {! Account.Name }</h1>
    
    <table>
        <tr><th>Phone</th>  <td><apex:outputText value="{! Account.Phone }"/></td></tr>
        <tr><th>Fax</th>    <td><apex:outputText value="{! Account.Fax }"/></td></tr>
        <tr><th>Website</th><td><apex:outputText value="{! Account.Website }"/></td></tr>
    </table>

    <p><apex:outputText value="{! Account.Description }"/></p>
        
</apex:page>
```

```
new PageReference(Site.getBaseUrl() + 
    '/apex/VisualforcePageName').getContentAsPdf();
```
