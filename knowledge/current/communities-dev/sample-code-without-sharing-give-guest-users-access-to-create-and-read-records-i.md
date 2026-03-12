---
title: "Sample Code Without Sharing: Give Guest Users Access to Create and Read Records in the
        Same Transaction"
domain: communities-dev
topic: sample-code-without-sharing-give-guest-users-access-to-create-and-read-records-i
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:23.432Z
estimatedTokens: 639
keywords: [Sample, Code, Sharing, Give, Guest, Users, Access, Records, Transaction, collection, samples, user, enters, report, support]
---

# Sample Code Without Sharing: Give Guest Users Access to Create and Read Records in the
        Same Transaction

> In this collection of code samples, the guest user enters details to report a support
        issue and Apex code creates a case. An Apex method retrieves the new record and Aura
        components display parts of the record to the guest user after creation. The Apex code runs
        without sharing because we aren’t relying on object permissions and platform sharing to
        allow the guest user to access the record.

# Sample Code Without Sharing: Give Guest Users Access to Create and Read Records in the Same Transaction

In this collection of code samples, the guest user enters details to report a support issue and Apex code creates a case. An Apex method retrieves the new record and Aura components display parts of the record to the guest user after creation. The Apex code runs without sharing because we aren’t relying on object permissions and platform sharing to allow the guest user to access the record.

## Aura Component: CreateCase.cmp

This sample Aura component displays several components where the user enters details about the case. After creation, the lightning:card component displays the new case’s case number and status.

```

```

## Component Controller: CreateCaseController.js

This sample JavaScript controller processes events for the Aura component and calls the methods in the helper file.

```

```

## JavaScript Helper: DisplayCaseHelper.js

This JavaScript helper creates an asynchronous request to create a case with the submitted data. When the request completes, the callback stores the case number and case status in variables used by the Aura component.

```

```

## Apex Controller: GuestUserCreateCase.apxc

This sample Apex controller creates the record, retrieves the new record, and returns the required fields from the new record to the client. Because object permissions and platform sharing aren’t used, this controller runs without sharing.

To avoid unintended exposure of record data, the CreateCase method returns only the CaseNumber and Status fields.

![Warning](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_warning.png&folder=communities_dev)

#### Warning

Any system or individual on the internet can invoke @AuraEnabled classes. Make sure that the method returns only the required fields from the new record.

```

```

#### See Also

-   [*Salesforce Help*: Secure Guest Users’ Sharing Settings and Record Access](https://help.salesforce.com/articleView?id=networks_secure_guest_user_sharing.htm&language=en_US "Salesforce Help: Secure Guest Users’ Sharing Settings and Record
    Access - HTML (New Window)")

-   [*Apex Developer Guide*](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_dev_guide.htm "Apex Developer Guide - HTML (New Window)")

-   [*Lightning Aura Component Developer Guide*](https://developer.salesforce.com/docs/atlas.en-us.260.0.lightning.meta/lightning/intro_framework.htm "Lightning Aura Component Developer Guide - HTML (New Window)")

## Code Examples

```
<aura:component controller="GuestUserCreateCase">

    <aura:attribute name="caseNumber" type="String"/>
    <aura:attribute name="status" type="String"/>
    <aura:attribute name="subject" type="String" default=""/>
    <aura:attribute name="description" type="String" default=""/>
    <aura:attribute name="email" type="String" default=""/>
    <aura:attribute name="name" type="String" default=""/>
    <aura:attribute name="reason" type="String"/>    
    <aura:attribute name="type" type="String" default=""/>

    <lightning:select name="select" label="Reason" required="true" value="{!v.reason}"  aura:id="reason">
        <option value="installation">Installation</option>
        <option value="equipmentcomplexity">Equipment Complexity</option>
        <option value="performance">Performance</option>
        <option value="breakdown">Breakdown</option>
        <option value="equipmentdesign">Equipment Design</option>
        <option value="feedback">Feedback</option>
        <option value="other">Other</option>
    </lightning:select>
    
    <lightning:select name="type" label="Type" required="true" value="{!v.type}"  aura:id="type">
        <option value="mechanical">Mechanical</option>
        <option value="electrical">Electrical</option>
        <option value="electronic">Electronic</option>
        <option value="structural">Structural</option>
        <option value="other">Other</option>
    </lightning:select>
    
    <lightning:input type="email" name="email" required="true" value="{!v.email}" aura:id="email" label="Where should we send email updates?"/>
    <lightning:input name="name" label="Name" required="true" value="{!v.name}" aura:id="name"/>
    
    
    <lightning:input name="subject" label="Subject" required="true" value="{!v.subject}" aura:id="subject"/>
    <lightning:textarea name="description" required="true" label="Description" value="{!v.description}" aura:id="description"/>
    
    <lightning:button name="submit" variant="brand" label="Submit case" title="Submit case" onclick="{!c.submitCase}"/>
    
    <aura:if isTrue="{!v.caseNumber}">
        <lightning:card title="Case">
            <p class="slds-p-horizontal--small">
                {!v.caseNumber} has status {!v.status}.
            </p>
        </lightning:card>
    </aura:if>
</aura:component>
```

```
({
    submitCase : function(component, event, helper) {
        helper.makeCase(component, event, helper);
    }
})
```

```
({
        makeCase : function(component, event, helper) {
            var subject = component.get("v.subject");
            var description = component.get("v.description");
            var email = component.get("v.email");
            var name = component.get("v.name");
            var reason = component.get("v.reason");
            var type = component.get("v.type");

            
            var action = component.get("c.CreateCase");
            action.setParams({
                "subject": subject,
                "description": description,
                "email": email,
                "name": name,
                "reason": reason,
                "caseType": type
            });
            action.setCallback(this, function(response){
                component.set("v.caseNumber", response.getReturnValue()[0]);
                component.set("v.status", response.getReturnValue()[1]);
            });
            $A.enqueueAction(action);
        }
})
```

```apex
public without sharing class GuestUserCreateCase {
    
    @AuraEnabled
    public static List<String> CreateCase(String subject, 
                                         String description, 
                                         String email,
                                         String name,
                                         String reason,
                                         String caseType,
                                         String phone){
		Case new_case = new Case(Subject=subject, 
                                 Description=description,
                                 SuppliedEmail=email,
                                 SuppliedName=name,
                                 Reason=reason,
                                 Type=caseType,
                                 SuppliedPhone=phone);
        insert new_case;
                                             
        List<Case> results = getCase(new_case.Id);

        List<String> response = new List<String>();
        response.add(results[0].CaseNumber);
        response.add(results[0].Status);
        return response;

    }

private static List<Case> getCase(String caseID)
{
    List<Case> results = [SELECT CaseNumber, Status 
	FROM Case 
    WHERE Case.Id=:caseID];
    return results;
}

}
```
