---
title: "Using the InboundEmail Object"
domain: apex-guide
topic: using-the-inboundemail-object
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:32.587Z
estimatedTokens: 530
keywords: [InboundEmail, every, email, Apex, service, domain, receives, Salesforce, creates, separate, contents, attachments, classes, implement, Messaging.InboundEmailHandler]
---

# Using the InboundEmail Object

> For every email the Apex email service domain receives, Salesforce creates a separate
        InboundEmail object that contains the contents and attachments of that email. You can use
        Apex classes that implement the Messaging.InboundEmailHandler interface to handle an inbound email message.
        Using the handleInboundEmail method in that class,
        you can access an InboundEmail object to retrieve the contents, headers, and attachments of
        inbound email messages, as well as perform many functions.

# Using the InboundEmail Object

For every email the Apex email service domain receives, Salesforce creates a separate InboundEmail object that contains the contents and attachments of that email. You can use Apex classes that implement the Messaging.InboundEmailHandler interface to handle an inbound email message. Using the handleInboundEmail method in that class, you can access an InboundEmail object to retrieve the contents, headers, and attachments of inbound email messages, as well as perform many functions.

## Example 1: Create Tasks for Contacts

The following is an example of how you can look up a contact based on the inbound email address and create a new task.

```

```

## Example 2: Handle Unsubscribe Email

Companies that send marketing email to their customers and prospects must provide a way to let the recipients unsubscribe. The following is an example of how an email service can process unsubscribe requests. The code searches the subject line of inbound email for the word “unsubscribe.” If the word is found, the code finds all contacts and leads that match the From email address and sets the Email Opt Out field (HasOptedOutOfEmail) to True.

```

```

```

```

-   [← Previous](atlas.en-us.apexcode.meta/apexcode/apex_classes_email_inbound_what_is.htm "Apex Email Service")
-   [Next →](atlas.en-us.apexcode.meta/apexcode/apex_pages.htm "Visualforce Classes")

#### See Also

-   [*Apex Reference Guide*: InboundEmail Class](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_classes_email_inbound_inbound.htm "Apex Reference Guide: InboundEmail Class - HTML (New Window)")

-   [*Apex Reference Guide*: InboundEnvelope Class](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_classes_email_inbound_envelope.htm "Apex Reference Guide: InboundEnvelope Class - HTML (New Window)")

-   [*Apex Reference Guide*: InboundEmailResult Class](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_classes_email_inbound_result.htm "Apex Reference Guide: InboundEmailResult Class - HTML (New Window)")

## Code Examples

```apex
public with sharing class CreateTaskEmailExample implements Messaging.InboundEmailHandler {
 
  public Messaging.InboundEmailResult handleInboundEmail(Messaging.inboundEmail email, 
                                                       Messaging.InboundEnvelope env){
 
    // Create an InboundEmailResult object for returning the result of the 
    // Apex Email Service
    Messaging.InboundEmailResult result = new Messaging.InboundEmailResult();
  
    String myPlainText= '';
    
    // Add the email plain text into the local variable 
    myPlainText = email.plainTextBody;
   
    // New Task object to be created
    Task[] newTask = new Task[0];
   
    // Try to look up any contacts based on the email from address
    // If there is more than one contact with the same email address,
    // an exception will be thrown and the catch statement will be called.
    try {
      Contact vCon = [SELECT Id, Name, Email
        FROM Contact
        WHERE Email = :email.fromAddress
        WITH USER_MODE
        LIMIT 1];
      
      // Add a new Task to the contact record we just found above.
      newTask.add(new Task(Description =  myPlainText,
           Priority = 'Normal',
           Status = 'Inbound Email',
           Subject = email.subject,
           IsReminderSet = true,
           ReminderDateTime = System.now()+1,
           WhoId =  vCon.Id));
     
     // Insert the new Task 
     insert as user newTask;    
     
     System.debug('New Task Object: ' + newTask );   
    }
    // If an exception occurs when the query accesses 
    // the contact record, a QueryException is called.
    // The exception is written to the Apex debug log.
   catch (QueryException e) {
       System.debug('Query Issue: ' + e);
   }
   
   // Set the result to true. No need to send an email back to the user 
   // with an error message
   result.success = true;
   
   // Return the result for the Apex Email Service
   return result;
  }
}
```

```apex
public with sharing class unsubscribe implements Messaging.inboundEmailHandler{

    public Messaging.InboundEmailResult handleInboundEmail(Messaging.InboundEmail email, 
                         Messaging.InboundEnvelope env ) {
    
        // Create an inboundEmailResult object for returning 
        // the result of the email service.
        Messaging.InboundEmailResult result = new Messaging.InboundEmailResult();
         
        // Create contact and lead lists to hold all the updated records.
        List<Contact> lc = new List <contact>();
        List<Lead> ll = new List <lead>();
         
        // Convert the subject line to lower case so the program can match on lower case.
        String mySubject = email.subject.toLowerCase();
        // The search string used in the subject line.
        String s = 'unsubscribe';
         
        // Check the variable to see if the word "unsubscribe" was found in the subject line. 
        Boolean unsubMe;
        // Look for the word "unsubcribe" in the subject line. 
        // If it is found, return true; otherwise, return false.
        unsubMe = mySubject.contains(s);
         
         // If unsubscribe is found in the subject line, enter the IF statement.
         
        if (unsubMe == true) {
            
            try {
               
            // Look up all contacts with a matching email address.
               
            for (Contact c : [SELECT Id, Name, Email, HasOptedOutOfEmail
                          FROM Contact
                          WHERE Email = :env.fromAddress
                          AND hasOptedOutOfEmail = false
                          WITH USER_MODE
                          LIMIT 100]) {
                          
                // Add all the matching contacts into the list.   
                c.hasOptedOutOfEmail = true;
                lc.add(c);
            }
            // Update all of the contact records.
            update as user lc;
        }
        catch (System.QueryException e) {
            System.debug('Contact Query Issue: ' + e);
        }   
        
        try {
            // Look up all leads matching the email address.
            for (Lead l : [SELECT Id, Name, Email, HasOptedOutOfEmail
                     FROM Lead
                     WHERE Email = :env.fromAddress
                     AND isConverted = false
                     AND hasOptedOutOfEmail = false
                     WITH USER_MODE
                     LIMIT 100]) {
                // Add all the leads to the list.       
                l.hasOptedOutOfEmail = true;
                ll.add(l);
                   
                System.debug('Lead Object: ' + l);   
            } 
            // Update all lead records in the query.
            update as user ll;
        }
        
        catch (System.QueryException e) {
            System.debug('Lead Query Issue: ' + e);
        }   
        
        System.debug('Found the unsubscribe word in the subject line.');
         } 
         else {
            System.debug('No Unsuscribe word found in the subject line.' );
         }
        // Return True and exit.
        // True confirms program is complete and no emails 
        // should be sent to the sender of the unsubscribe request. 
        result.success = true;
        return result;
    }   
}
```

```apex
@isTest
private class unsubscribeTest {
    // The following test methods provide adequate code coverage 
    // for the unsubscribe email class.
    // There are two methods, one that does the testing
    // with a valid "unsubcribe" in the subject line
    // and one the does not contain "unsubscribe" in the
    // subject line.        
    static testMethod void testUnsubscribe() {
    
       // Create a new email and envelope object.
       Messaging.InboundEmail email = new Messaging.InboundEmail() ;
       Messaging.InboundEnvelope env    = new Messaging.InboundEnvelope();
    
       // Create a new test lead and insert it in the test method.
       Lead l = new lead(firstName='John', 
                lastName='Smith',
                Company='Salesforce', 
                Email='user@acme.com', 
                HasOptedOutOfEmail=false);
       insert l;
    
       // Create a new test contact and insert it in the test method.
       Contact c = new Contact(firstName='john', 
                    lastName='smith', 
                    Email='user@acme.com', 
                    HasOptedOutOfEmail=false);
       insert c;
       
       // Test with the subject that matches the unsubscribe statement.
       email.subject = 'test unsubscribe test';
       env.fromAddress = 'user@acme.com';
       
       // Call the class and test it with the data in the testMethod.
       unsubscribe unsubscribeObj = new unsubscribe();
       unsubscribeObj.handleInboundEmail(email, env );
                            
    }
     
    static testMethod void testUnsubscribe2() {
    
       // Create a new email and envelope object.
       Messaging.InboundEmail email = new Messaging.InboundEmail();
       Messaging.InboundEnvelope env = new Messaging.InboundEnvelope();
    
       // Create a new test lead and insert it in the test method.        
       Lead l = new lead(firstName='john', 
                lastName='smith',
                Company='Salesforce', 
                Email='user@acme.com', 
                HasOptedOutOfEmail=false);
       insert l;
    
       // Create a new test contact and insert it in the test method.    
       Contact c = new Contact(firstName='john', 
                    lastName='smith', 
                    Email='user@acme.com', 
                    HasOptedOutOfEmail=false);
       insert c;
       
       // Test with a subject that does not contain "unsubscribe."
       email.subject = 'test';
       env.fromAddress = 'user@acme.com';
    
       // Call the class and test it with the data in the test method.
       unsubscribe unsubscribeObj = new unsubscribe();
       unsubscribeObj.handleInboundEmail(email, env );                      
       // Assert that the Lead and Contact have been unsubscribed
       Lead updatedLead = [Select Id, HasOptedOutOfEmail from Lead where Id = :l.Id];
       Contact updatedContact = [Select Id, HasOptedOutOfEmail from Contact where Id = :c.Id];
       Assert.isTrue(l.HasOptedOutOfEmail);
       Assert.isTrue(c.HasOptedOutOfEmail);
    }     
}
```

## Related Topics

- ← Previous (atlas.en-us.apexcode.meta/apexcode/apex_classes_email_inbound_what_is.htm)
- Next → (atlas.en-us.apexcode.meta/apexcode/apex_pages.htm)
