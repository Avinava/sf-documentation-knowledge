---
title: "Customize How Users Resume Paused Flow Interviews"
domain: pages
topic: customize-how-users-resume-paused-flow-interviews
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:23.636Z
estimatedTokens: 626
keywords: [Customize, How, Users, Resume, Paused, Flow, Interviews, their, component, home, want, pausedInterviewId, attribute, <flow, interview>]
---

# Customize How Users Resume Paused Flow Interviews

> By default, users can resume their paused interviews from the Paused Interviews
    component on their home page. If you want to customize how and where users can resume their
    interviews, use the pausedInterviewId attribute on the
      <flow:interview> component.

# Customize How Users Resume Paused Flow Interviews

By default, users can resume their paused interviews from the Paused Interviews component on their home page. If you want to customize how and where users can resume their interviews, use the pausedInterviewId attribute on the <flow:interview\> component.

The following example shows how you can resume an interview—or start a new one—from a button on a page layout. When users click **Survey Customer** from a contact record, the Visualforce page does one of two things, depending on whether the user has any paused interviews for the “Survey Customers” flow.

-   If the user does, it resumes the first one.
-   If the user doesn’t, it starts a new one.

## Create the Visualforce and Apex Controller

Because the Visualforce page will be referenced in a contact-specific button, it must use that standard controller. Use a controller extension to add more logic to the page with Apex, which is where the page gets the ID of the interview to resume.

```

```

This Apex controller extension performs a SOQL query to get a list of paused interviews. If nothing is returned from the query, getPausedId() returns a null value, and the Visualforce page starts a new interview. If at least one interview is returned from the query, the Visualforce page resumes the first interview in that list.

```

```

## Reference the Visualforce Page from a Page Layout

To actually expose this Visualforce page to your users, make it available from the Contact page layout.

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=pages)

#### Tip

If you embed the Visualforce page directly in a page layout, every time a user accesses a contact, they automatically resume the first of their paused interviews—possibly unintentionally. It’s better for the user to make the conscious choice to start or resume an interview, so let’s use a custom button.

First create a custom button for the Contact object that links to the Visualforce page. Use these field values to create the button.

| Field | Value |
| --- | --- |
| Label | Survey Customer |
| Display Type | Detail Page Button |
| Content Source | Visualforce Page |
| Content | YourVisualforcePage |

Finally, add the button to your Contact page layout.

#### See Also

-   [Define Custom Buttons and Links to Visualforce Pages](atlas.en-us.pages.meta/pages/pages_controller_define_custom_buttons.htm "Create a custom button or link on an object that opens a Visualforce page.")

## Code Examples

```
<apex:page
   standardController="Contact" extensions="MyControllerExtension_SurveyCustomers">
   <flow:interview name="Survey_Customers" pausedInterviewId="{!pausedId}"/>
</apex:page>
```

```apex
public class MyControllerExtension_SurveyCustomers {
    
    // Empty constructor, to allow use as a controller extension
    public MyControllerExtension_SurveyCustomers(
        ApexPages.StandardController stdController) { }
    
    // Flow support methods
    public String getInterviews() { return null; }
    
    public String showList { get; set; }
    
    public String getPausedId() {
        String currentUser = UserInfo.getUserId();
        List<FlowInterview> interviews = 
            [SELECT Id FROM FlowInterview WHERE CreatedById = :currentUser AND InterviewLabel LIKE '%Survey Customers%'];

        if (interviews == null || interviews.isEmpty()) {
            return null; // early out
        }
        
        // Return the ID for the first interview in the list
        return interviews.get(0).Id;
    }
}
```

## Related Topics

- Define Custom Buttons and Links to Visualforce Pages (atlas.en-us.pages.meta/pages/pages_controller_define_custom_buttons.htm)
