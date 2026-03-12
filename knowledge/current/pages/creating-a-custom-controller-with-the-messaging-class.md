---
title: "Creating a Custom Controller with the Messaging Class"
domain: pages
topic: creating-a-custom-controller-with-the-messaging-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:23.541Z
estimatedTokens: 549
namespace: Messaging
keywords: [Creating, Custom, Controller, Messaging, minimum, uses, Apex, needs, subject, recipient, email, acts, form, fill, deliver]
---

# Creating a Custom Controller with the Messaging Class

> At minimum, a custom controller that uses the Apex Messaging namespace needs a subject, a body, and a recipient for the
			email. You will need a page that acts as a form to fill out the subject and body and
			deliver the email.

**Namespace:** `Messaging`

# Creating a Custom Controller with the Messaging Class

At minimum, a custom controller that uses the Apex Messaging namespace needs a subject, a body, and a recipient for the email. You will need a page that acts as a form to fill out the subject and body and deliver the email.

Create a new page called sendEmailPage and use the following code:

```

```

Notice in the page markup that the account ID is retrieved from the URL of the page. For this example to render properly, you must associate the Visualforce page with a valid account record in the URL. For example, if 001D000000IRt53 is the account ID, the resulting URL should be:

```

```

[Displaying Field Values with Visualforce](atlas.en-us.pages.meta/pages/pages_quick_start_display_field_values.htm) has more information about retrieving the ID of a record.

The following code creates a controller named sendEmail that implements the Messaging.SingleEmailMessage class, and uses the contacts related to an account as recipients:

```

```

Notice in the controller that:

-   The subject and body of the email are set through a separate Visualforce page and passed into the controller.
-   The method that sends the email is called send(). This name must match the name of the action for the Visualforce button that sends the email.
-   The recipients of the email, that is, the email addresses stored in toAddresses\[\], come from the addresses of the contacts available in an associated account. When compiling a list of recipients from contacts, leads, or other records, it is a good practice to loop through all the records to verify that an email address is defined for each. The account ID is retrieved from the URL of the page.

Example of the Form on sendEmailPage ![A form on sendEmailpage called "Send an email to your Burlington Textiles Corp of America representatives."](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fpages%2Fimages%2Fpages_email_example.jpg&folder=pages)

#### See Also

-   [*Apex Developer Guide*: Outbound Email](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_forcecom_email_outbound.htm "Apex Developer Guide: Outbound Email - html (New Window)")

## Code Examples

```
<apex:page controller="sendEmail">
	<apex:messages />
	<apex:pageBlock title="Send an Email to Your 
			{!account.name} Representatives">
		<p>Fill out the fields below to test how you might send an email to a user.</p>
		<br />
		<apex:dataTable value="{!account.Contacts}" var="contact" border="1">
			<apex:column >
				<apex:facet name="header">Name</apex:facet>
				{!contact.Name}
			</apex:column>
			<apex:column >
				<apex:facet name="header">Email</apex:facet>
				{!contact.Email}
			</apex:column>
		</apex:dataTable>
    
		<apex:form >
		<br /><br />
			<apex:outputLabel value="Subject" for="Subject"/>:<br />     
			<apex:inputText value="{!subject}" id="Subject" maxlength="80"/>
			<br /><br />
			<apex:outputLabel value="Body" for="Body"/>:<br />     
			<apex:inputTextarea value="{!body}" id="Body"  rows="10" cols="80"/>           
			<br /><br /><br />
			<apex:commandButton value="Send Email" action="{!send}" /> 
		</apex:form>
	</apex:pageBlock>
</apex:page>
```

```
https://MyDomain_login_URL/apex/sendEmailPage?id=001D000000IRt53
```

```apex
public class sendEmail {
	public String subject { get; set; }
	public String body { get; set; }

	private final Account account;

	// Create a constructor that populates the Account object
	public sendEmail() {
		account = [select Name, (SELECT Contact.Name, Contact.Email FROM Account.Contacts) 
				from Account where id = :ApexPages.currentPage().getParameters().get('id')];
	}

	public Account getAccount() {
		return account;
	}

	public PageReference send() {
		// Define the email
		Messaging.SingleEmailMessage email = new Messaging.SingleEmailMessage(); 

    String addresses;
    if (account.Contacts[0].Email != null)
    {
        addresses = account.Contacts[0].Email;
        // Loop through the whole list of contacts and their emails
        for (Integer i = 1; i < account.Contacts.size(); i++) 
        {
            if (account.Contacts[i].Email != null)
            {
                addresses += ':' + account.Contacts[i].Email;
            }
        }
    }

		String[] toAddresses = addresses.split(':', 0);

		// Sets the paramaters of the email
		email.setSubject( subject );
		email.setToAddresses( toAddresses );
		email.setPlainTextBody( body );
    
		// Sends the email
		Messaging.SendEmailResult [] r = 
			Messaging.sendEmail(new Messaging.SingleEmailMessage[] {email});   
		
		return null;
	}
}
```

## Related Topics

- Displaying Field Values with Visualforce (atlas.en-us.pages.meta/pages/pages_quick_start_display_field_values.htm)
