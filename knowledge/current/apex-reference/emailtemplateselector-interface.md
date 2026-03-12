---
title: "EmailTemplateSelector Interface"
domain: apex-reference
topic: emailtemplateselector-interface
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:29.386Z
estimatedTokens: 625
namespace: Support
keywords: [EmailTemplateSelector, Support.EmailTemplateSelector, enables, providing, default, email, templates, Case, Feed., specified, preloaded, cases, based, criteria, such, case, origin, subject., getDefaultTemplateId, caseId]
---

# EmailTemplateSelector Interface

> The Support.EmailTemplateSelector interface
  enables providing default email templates in Case Feed. With default email templates, specified
  email templates are preloaded for cases based on criteria such as case origin or subject.

**Namespace:** `Support`

# EmailTemplateSelector Interface

The Support.EmailTemplateSelector interface enables providing default email templates in Case Feed. With default email templates, specified email templates are preloaded for cases based on criteria such as case origin or subject.

Support.EmailTemplateSelector works only in Salesforce Classic, not in Lightning Experience. Lightning Experience users can specify default values for emails using the QuickActionDefaultsHandler interface.

## Namespace

[Support](atlas.en-us.apexref.meta/apexref/apex_namespace_Support.htm "The Support namespace provides an interface used for Case Feed.")

To specify default templates, you must create a class that implements Support.EmailTemplateSelector.

When you implement this interface, provide an empty parameterless constructor.

-   **[EmailTemplateSelector Methods](atlas.en-us.apexref.meta/apexref/apex_email_template_selector.htm#apex_Support_EmailTemplateSelector_methods)**

-   **[EmailTemplateSelector Example Implementation](atlas.en-us.apexref.meta/apexref/apex_email_template_selector.htm#apex_email_template_selector_example)**


## EmailTemplateSelector Methods

The following are methods for EmailTemplateSelector.

-   **[getDefaultTemplateId(caseId)](atlas.en-us.apexref.meta/apexref/apex_email_template_selector.htm#apex_Support_EmailTemplateSelector_getDefaultTemplateId)**
    Returns the ID of the email template to preload for the case currently being viewed in the case feed using the specified case ID.

### getDefaultTemplateId(caseId)

Returns the ID of the email template to preload for the case currently being viewed in the case feed using the specified case ID.

#### Signature

public ID getDefaultTemplateId(ID caseId)

#### Parameters

caseId

Type: [ID](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")

#### Return Value

Type: [ID](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")

## EmailTemplateSelector Example Implementation

This is an example implementation of the Support.EmailTemplateSelector interface.

The getDefaultEmailTemplateId method implementation retrieves the subject and description of the case corresponding to the specified case ID. Next, it selects an email template based on the case subject and returns the email template ID.

```

```

The following example tests the above code:

```

```

## Code Examples

```apex
global class MyCaseTemplateChooser implements Support.EmailTemplateSelector {
    // Empty constructor 
    global MyCaseTemplateChooser() {    }

    // The main interface method 
    global ID getDefaultEmailTemplateId(ID caseId) {
        // Select the case we're interested in, choosing any fields that are relevant to our decision
        Case c = [SELECT Subject, Description FROM Case WHERE Id=:caseId];

        EmailTemplate et;

        if (c.subject.contains('LX-1150')) {
            et = [SELECT id FROM EmailTemplate WHERE DeveloperName = 'LX1150_template'];
        } else if(c.subject.contains('LX-1220')) {
            et = [SELECT id FROM EmailTemplate WHERE DeveloperName = 'LX1220_template'];
        } 
        
        // Return the ID of the template selected
        return et.id;
    }
}
```

```apex
@isTest
private class MyCaseTemplateChooserTest {

    static testMethod void testChooseTemplate() {
    
        MyCaseTemplateChooser chooser = new MyCaseTemplateChooser();

        // Create a simulated case to test with
        Case c = new Case();
        c.Subject = 'I\'m having trouble with my LX-1150';
        Database.insert(c);
            
        // Make sure the proper template is chosen for this subject
        Id actualTemplateId = chooser.getDefaultEmailTemplateId(c.Id);
        EmailTemplate expectedTemplate = 
          [SELECT id FROM EmailTemplate WHERE DeveloperName = 'LX1150_template'];
        Id expectedTemplateId = expectedTemplate.Id;
        System.assertEquals(actualTemplateId, expectedTemplateId);
  
        // Change the case properties to match a different template
        c.Subject = 'My LX1220 is overheating';
        Database.update(c);
  
        // Make sure the correct template is chosen in this case
       actualTemplateId = chooser.getDefaultEmailTemplateId(c.Id);
        expectedTemplate = 
          [SELECT id FROM EmailTemplate WHERE DeveloperName = 'LX1220_template'];
        expectedTemplateId = expectedTemplate.Id;
        System.assertEquals(actualTemplateId, expectedTemplateId);
    
    }
}
```

## Related Topics

- Support (atlas.en-us.apexref.meta/apexref/apex_namespace_Support.htm)
- EmailTemplateSelector Methods (atlas.en-us.apexref.meta/apexref/apex_email_template_selector.htm)
- EmailTemplateSelector Example Implementation (atlas.en-us.apexref.meta/apexref/apex_email_template_selector.htm)
- getDefaultTemplateId(caseId) (atlas.en-us.apexref.meta/apexref/apex_email_template_selector.htm)
