---
title: "QuickActionDefaultsHandler Interface"
domain: apex-reference
topic: quickactiondefaultshandler-interface
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:29.888Z
estimatedTokens: 1462
namespace: QuickAction
keywords: [QuickActionDefaultsHandler, QuickAction.QuickActionDefaultsHandler, lets, specify, default, values, standard, Email, Send, actions, case, feed., address, BCC, subject, email, body, action, pre-populate, fields]
---

# QuickActionDefaultsHandler Interface

> The QuickAction.QuickActionDefaultsHandler interface lets you specify the default
      values for the standard Email and Send Email actions in the case feed. You can use this
      interface to specify the From address, CC address, BCC address, subject, and email body for the Email
      action in the case feed. You can use the interface to pre-populate these fields based on the
      context where the action is displayed, such as the case origin (for example, country) and
      subject.

**Namespace:** `QuickAction`

# QuickActionDefaultsHandler Interface

The QuickAction.QuickActionDefaultsHandler interface lets you specify the default values for the standard Email and Send Email actions in the case feed. You can use this interface to specify the From address, CC address, BCC address, subject, and email body for the Email action in the case feed. You can use the interface to pre-populate these fields based on the context where the action is displayed, such as the case origin (for example, country) and subject.

## Namespace

[QuickAction](atlas.en-us.apexref.meta/apexref/apex_namespace_QuickAction.htm "The QuickAction namespace provides classes and methods for quick actions.")

## Usage

To specify default values for the standard Email action in the case feed, create a class that implements QuickAction.QuickActionDefaultsHandler.

The QuickAction.QuickActionDefaultsHandler interface works in Salesforce Classic and Lightning Experience.

When working in Lightning Experience, keep the following things in mind:

-   The interface overrides email values set up with predefined IDs.
-   The interface works with the out-of-the-box Email action provided on cases. You can also use the interface with custom Email actions for the case object.
-   The interface in Lightning Experience doesn’t support:
    -   Email attachments
    -   Custom email fields
    -   Visualforce email templates, which are a type of email template available in Salesforce Classic
-   The From field determines the from address picklist. While you can’t customize this picklist in Send Email action types via the QuickActionDefaultsHandler interface, you can customize the From Address field. To customize this field, remove the From field from the SendEmail quick action layout and add the From Address field instead. Then provide a valid and verified from address in the QuickActionDefaultsHandler code. This address must be the current user’s address, an organization-wide email address that the current user has access to, or an Email-to-Case routing address.
-   If your Apex interface adds content to the email body, merge fields display as unresolved. During preview and send, the merge fields resolve.

When you implement this interface, provide an empty parameterless constructor.

-   **[QuickActionDefaultsHandler Methods](atlas.en-us.apexref.meta/apexref/apex_interface_QuickAction_QuickActionDefaultsHandler.htm#apex_QuickAction_QuickActionDefaultsHandler_methods)**

-   **[QuickActionDefaultsHandler Example Implementations](atlas.en-us.apexref.meta/apexref/apex_interface_QuickAction_QuickActionDefaultsHandler.htm#apex_interface_QuickAction_QuickActionDefaultsHandler_Example)**
    These examples are implementations of the QuickAction.QuickActionDefaultsHandler interface.

## QuickActionDefaultsHandler Methods

The following are methods for QuickActionDefaultsHandler.

-   **[onInitDefaults(actionDefaults)](atlas.en-us.apexref.meta/apexref/apex_interface_QuickAction_QuickActionDefaultsHandler.htm#apex_QuickAction_QuickActionDefaultsHandler_onInitDefaults)**
    Implement this method to provide default values for the standard Email action in the case feed.

### onInitDefaults(actionDefaults)

Implement this method to provide default values for the standard Email action in the case feed.

#### Signature

public void onInitDefaults(QuickAction.QuickActionDefaults\[\] actionDefaults)

#### Parameters

actionDefaults

Type: [QuickAction.QuickActionDefaults\[\]](atlas.en-us.apexref.meta/apexref/apex_class_QuickAction_QuickActionDefaults.htm#apex_class_QuickAction_QuickActionDefaults "Represents an abstract Apex class that provides the context for running the standard Email Action on Case Feed and the container of the Email Message fields for the action payload. You can override the target fields before the standard Email Action is rendered.")

This array contains only one item of type QuickAction.SendEmailQuickActionDefaults.

#### Return Value

Type: void

## QuickActionDefaultsHandler Example Implementations

These examples are implementations of the QuickAction.QuickActionDefaultsHandler interface.

In this example, the onInitDefaults method checks whether the element passed in the array is for the standard Email action in the case feed. Then, it performs a query to retrieve the case that corresponds to the context ID. Next, it sets the value of the BCC address of the corresponding email message to a default value. The default value is based on the case reason. Finally, it sets the default values of the email template properties. The onInitDefaults method determines the default values based on two criteria: first, whether a reply action on an email message initiated the call to the method, and second, whether any previous emails attached to the case are associated with the call.

```

```

In this example, the onInitDefaults method checks whether the element passed in the array is for the standard Email action in the case feed. Then it performs a query to determine if the case Priority is set to High. If the Priority is set to High, the email address managers@acme.com is appended to the BCC field.

```

```

In this example, the onInitDefaults method checks whether the element passed in the array is for the standard Email action in the case feed. Then it performs a query to determine if the case Type is set to Problem. If the type is set to Problem, the First Response email template is inserted into the body of the email.

```

```

In this example, the onInitDefaults method checks whether the element passed in the array is for the standard Email action in the case feed. Then it performs a query to determine if the email is a Reply or Reply All email. If the email is a Reply or Reply All email, the corresponding email templates for these emails are inserted into the body of the email.

```

```

## Code Examples

```apex
global class EmailPublisherLoader implements QuickAction.QuickActionDefaultsHandler {
    // Empty constructor
    global EmailPublisherLoader() {
    }
    
    // The main interface method
    global void onInitDefaults(QuickAction.QuickActionDefaults[] defaults) {
        QuickAction.SendEmailQuickActionDefaults sendEmailDefaults = null;
    
    
        // Check if the quick action is the standard case feed Email action
        for (Integer j = 0; j < defaults.size(); j++) {
            if (defaults.get(j) instanceof QuickAction.SendEmailQuickActionDefaults && 
               defaults.get(j).getTargetSObject().getSObjectType() == 
                   EmailMessage.sObjectType && 
               defaults.get(j).getActionName().equals('Case.Email') && 
               defaults.get(j).getActionType().equals('Email')) {
                   sendEmailDefaults = 
                       (QuickAction.SendEmailQuickActionDefaults)defaults.get(j);
                   break;
            }
        }
        
        if (sendEmailDefaults != null) {
            Case c = [SELECT Status, Reason FROM Case 
                      WHERE Id=:sendEmailDefaults.getContextId()];
        
            EmailMessage emailMessage = (EmailMessage)sendEmailDefaults.getTargetSObject();    
            // Set BCC address to make sure each email goes for audit
            emailMessage.BccAddress = getBccAddress(c.Reason);
            
            /* 
            Set Template related fields 
            when the In Reply To Id field is null we know the interface 
            is called on page load. Here we check if 
            there are any previous emails attached to the case and load 
            the 'New_Case_Created' or 'Automatic_Response' template.
            When the In Reply To Id field is not null we know that 
            the interface is called on click of reply/reply all 
            of an email and we load the 'Default_reply_template' template
            */
            if (sendEmailDefaults.getInReplyToId() == null) {
                Integer emailCount = [SELECT count() FROM EmailMessage 
                                      WHERE ParentId=:sendEmailDefaults.getContextId()];
                if (emailCount!= null && emailCount > 0) {
                    sendEmailDefaults.setTemplateId(
                        getTemplateIdHelper('Automatic_Response'));
                } else {
                    sendEmailDefaults.setTemplateId(
                        getTemplateIdHelper('New_Case_Created'));
                }
                sendEmailDefaults.setInsertTemplateBody(false);
                sendEmailDefaults.setIgnoreTemplateSubject(false);
            } else {
                sendEmailDefaults.setTemplateId(
                    getTemplateIdHelper('Default_reply_template'));
                sendEmailDefaults.setInsertTemplateBody(false);
                sendEmailDefaults.setIgnoreTemplateSubject(true);
            }
        }
    }
    
    private Id getTemplateIdHelper(String templateApiName) {
        Id templateId = null;
        try {
            templateId = [select id, name from EmailTemplate 
                          where developername = : templateApiName].id;   
        } catch (Exception e) {
            system.debug('Unble to locate EmailTemplate using name: ' + 
                templateApiName + ' refer to Setup | Communications Templates ' 
                    + templateApiName);
        }
        return templateId;
    }
private String getBccAddress(String reason) {
        if (reason != null && reason.equals('Technical')) 
            { return 'support_technical@mycompany.com'; } 
        else if (reason != null && reason.equals('Billing')) 
            { return 'support_billing@mycompany.com'; } 
        else { return 'support@mycompany.com'; }
    }

    
}
```

```apex
global class EmailPublisherForHighPriorityCases implements QuickAction.QuickActionDefaultsHandler {
    // Empty constructor
    global EmailPublisherForHighPriorityCases() {
    }
    
    // The main interface method
    global void onInitDefaults(QuickAction.QuickActionDefaults[] defaults) {
        QuickAction.SendEmailQuickActionDefaults sendEmailDefaults = (QuickAction.SendEmailQuickActionDefaults)defaults.get(0);
        EmailMessage emailMessage = (EmailMessage)sendEmailDefaults.getTargetSObject(); 
        
        Case c = [SELECT CaseNumber, Priority FROM Case WHERE Id=:sendEmailDefaults.getContextId()];

        // If case severity is “High,” append “managers@acme.com” to the existing (and possibly blank) BCC field
        if (c.Priority != null && c.Priority.equals('High')) { // Priority is 'High'
            emailMessage.BccAddress = 'managers@acme.com';        
        }        
    } 
}
```

```apex
global class EmailPublisherForCaseType implements QuickAction.QuickActionDefaultsHandler {
    // Empty constructor
    global EmailPublisherForCaseType() {
    }
    
    // The main interface method
    global void onInitDefaults(QuickAction.QuickActionDefaults[] defaults) {
    QuickAction.SendEmailQuickActionDefaults sendEmailDefaults = (QuickAction.SendEmailQuickActionDefaults)defaults.get(0);
    EmailMessage emailMessage = (EmailMessage)sendEmailDefaults.getTargetSObject(); 
    
    Case c = [SELECT CaseNumber, Type FROM Case WHERE Id=:sendEmailDefaults.getContextId()];    
    
    // If case type is “Problem,” insert the “First Response” email template
    if (c.CaseNumber != null && c.Type.equals('Problem')) { 
        sendEmailDefaults.setTemplateId('Insert Email Template ID Here');   // Set the template Id corresponding to First Response
        sendEmailDefaults.setInsertTemplateBody(true);
        sendEmailDefaults.setIgnoreTemplateSubject(false);
    }
}
```

```apex
global class EmailPublisherForReplyAndReplyAll implements QuickAction.QuickActionDefaultsHandler {

    // Empty constructor
    global EmailPublisherForReplyAndReplyAll() {

    }   

    // The main interface method
    global void onInitDefaults(QuickAction.QuickActionDefaults[] defaults) {

    QuickAction.SendEmailQuickActionDefaults sendEmailDefaults = (QuickAction.SendEmailQuickActionDefaults)defaults.get(0);
    EmailMessage emailMessage = (EmailMessage)sendEmailDefaults.getTargetSObject();   

    // If the email is a “Reply” email, insert the “Reply Email Template” to the email body
    if (sendEmailDefaults.getActionName().equals('EmailMessage._Reply')) {
        sendEmailDefaults.setTemplateId('Insert Reply Email Template ID Here');

        sendEmailDefaults.setInsertTemplateBody(true);
        sendEmailDefaults.setIgnoreTemplateSubject(false);

    // If the email is a “Reply All” email, insert the “Reply All Email Template” to the email body
    } else if (sendEmailDefaults.getActionName().equals('EmailMessage._ReplyAll')) {
        sendEmailDefaults.setTemplateId('Insert Reply All Email Template ID Here');

        sendEmailDefaults.setInsertTemplateBody(true);
        sendEmailDefaults.setIgnoreTemplateSubject(false);

}
```

## Related Topics

- QuickAction (atlas.en-us.apexref.meta/apexref/apex_namespace_QuickAction.htm)
- QuickActionDefaultsHandler Methods (atlas.en-us.apexref.meta/apexref/apex_interface_QuickAction_QuickActionDefaultsHandler.htm)
- QuickActionDefaultsHandler Example Implementations (atlas.en-us.apexref.meta/apexref/apex_interface_QuickAction_QuickActionDefaultsHandler.htm)
- onInitDefaults(actionDefaults) (atlas.en-us.apexref.meta/apexref/apex_interface_QuickAction_QuickActionDefaultsHandler.htm)
- QuickAction.QuickActionDefaults[] (atlas.en-us.apexref.meta/apexref/apex_class_QuickAction_QuickActionDefaults.htm)
