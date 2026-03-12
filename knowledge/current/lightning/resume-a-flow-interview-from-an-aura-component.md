---
title: "Resume a Flow Interview from an Aura Component"
domain: lightning
topic: resume-a-flow-interview-from-an-aura-component
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:48.424Z
estimatedTokens: 383
keywords: [Resume, Flow, Interview, Aura, Component, users, interviews, they, paused, their, home, customize, how, embed, lightning]
---

# Resume a Flow Interview from an Aura Component

> By default, users can resume interviews that they paused from the Paused
                Interviews component on their home page. To customize how and where users can resume
                their interviews, embed the lightning:flow
                component in a custom Aura component. In your client-side controller, pass the
                interview ID into the resumeFlow method.

# Resume a Flow Interview from an Aura Component

By default, users can resume interviews that they paused from the Paused Interviews component on their home page. To customize how and where users can resume their interviews, embed the lightning:flow component in a custom Aura component. In your client-side controller, pass the interview ID into the resumeFlow method.

```

```

## Example

This example shows how you can resume an interview—or start a new one. When users click **Survey Customer** from a contact record, the Aura component does one of two things.

-   If the user has any paused interviews for the Survey Customers flow, it resumes the first one.
-   If the user doesn’t have any paused interviews for the Survey Customers flow, it starts a new one.

```

```

This Apex controller gets a list of paused interviews by performing a SOQL query. If nothing is returned from the query, getPausedId() returns a null value, and the component starts a new interview. If at least one interview is returned from the query, the component resumes the first interview in that list.

```

```

If the Apex controller returned an interview ID, the client-side controller resumes that interview. If the Apex controller returned a null interview ID, the component starts a new interview.

```

```

#### See Also

-   [*Component Library*: lightning:flow Component](https://developer.salesforce.com/docs/component-library/bundle/lightning:flow/documentation "Component Library: lightning:flow Component - HTML (New Window)")

## Code Examples

```
({
    init : function (component) {
        // Find the component whose aura:id is "flowData"
        var flow = component.find("flowData");
        
        // In that component, resume a paused interview. Provide the method with
        // the ID of the interview that you want to resume.
        flow.resumeFlow("pausedInterviewId");
     },
})
```

```
<aura:component controller="InterviewsController">
    <aura:handler name="init" value="{!this}" action="{!c.init}" />
    <lightning:flow aura:id="flowData" />
</aura:component>
```

```apex
public class InterviewsController {
   @AuraEnabled
   public static String getPausedId() {
      // Get the ID of the running user
      String currentUser = UserInfo.getUserId();
      // Find all of that user's paused interviews for the Survey customers flow
      List<FlowInterview> interviews =
         [ SELECT Id FROM FlowInterview
           WHERE CreatedById = :currentUser AND InterviewLabel LIKE '%Survey customers%'];
      
      if (interviews == null || interviews.isEmpty()) {
         return null; // early out
      }
      // Return the ID for the first interview in the list
      return interviews.get(0).Id;
   }
}
```

```
({
   init : function (component) {
       //Create request for interview ID
       var action = component.get("c.getPausedId");
       action.setCallback(this, function(response) {
          var interviewId = response.getReturnValue();
          // Find the component whose aura:id is "flowData"
          var flow = component.find("flowData");
          // If an interview ID was returned, resume it in the component
          // whose aura:id is "flowData".
          if ( interviewId !== null ) { 
             flow.resumeFlow(interviewID);
          }
          // Otherwise, start a new interview in that component. Reference
          // the flow's API Name.
          else {
             flow.startFlow("Survey_customers");
          }
       });
       //Send request to be enqueued
       $A.enqueueAction(action);
   },
})
```
