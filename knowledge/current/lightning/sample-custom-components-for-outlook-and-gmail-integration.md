---
title: "Sample Custom Components for Outlook and Gmail
        Integration"
domain: lightning
topic: sample-custom-components-for-outlook-and-gmail-integration
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:48.263Z
estimatedTokens: 808
keywords: [Sample, Custom, Components, Outlook, Gmail, Integration, Review, samples, Aura, implement, email, application, pane, Apply, Selected]
---

# Sample Custom Components for Outlook and Gmail
        Integration

> Review samples of custom Aura components that you can implement in the email
        application pane for Outlook integration and Gmail Integration.

# Sample Custom Components for Outlook and Gmail Integration

Review samples of custom Aura components that you can implement in the email application pane for Outlook integration and Gmail Integration.

## Apply the Selected Email Context

Here’s an example of a custom Aura component you can include in your email application pane for the Outlook or Gmail integration. This component applies the context of the selected email or appointment.

```

```

## Display Record Data Based On Recipients

In this example, the custom component displays account and opportunity information based on the email recipients’ email addresses. The component calls a JavaScript controller function, handlePeopleChange(), on initialization.

```

```

The Apex controller includes Aura-enabled methods that accept a list of emails as parameters. It queries the Contact and OpportunityContactRoles objects using SOQL and assigns the results to a List variable. You can also modify the example with your own custom objects.

/\*ComponentController.cls\*/ public class ComponentController { /\* This method searches for Contacts with matching emails in the email list, and includes Account information in the fields. Then, it filters the information to return a list of objects to use on the client side. \*/ @AuraEnabled public static List<Map<String, Object>> findAccountAges(List<String> emails) { List<Map<String, Object>> ret = new List<Map<String, Object>>(); List<Contact> contacts = \[SELECT Name, Account.Name, Account.CreatedDate FROM Contact WHERE Contact.Email IN :emails\]; for (Contact c: contacts) { Map<String, Object> item = new Map<String, Object>(); item.put('name', c.Account.Name); item.put('age', Date.valueOf(c.Account.CreatedDate).daysBetween( System.Date.today())); ret.add(item); } return ret; } /\* This method searches for OpportunityContactRoles with matching emails in the email list. Then, it calculates the number of days until closing to return a list of objects to use on the client side. \*/ @AuraEnabled public static List<Map<String, Object>> findOpportunityCloseDateTime(List<String> emails) { List<Map<String, Object>> ret = new List<Map<String, Object>>(); List<OpportunityContactRole> contacts = \[SELECT Opportunity.Name, Opportunity.CloseDate FROM OpportunityContactRole WHERE isPrimary=true AND Contact.Email IN :emails\]; for (OpportunityContactRole c: contacts) { Map<String, Object> item = new Map<String, Object>(); item.put('name', c.Opportunity.Name); item.put('closesIn', System.Date.today().daysBetween( Date.valueOf(c.Opportunity.CloseDate))); ret.add(item); } return ret; } }

On component initialization, this JavaScript controller calls the helper method, filterEmails(), which builds a list of email addresses from the available people.

The JavaScript controller then makes a call to the server to run the actions to display information. It calls the findOpportunityCloseDateTime method on the Apex controller to query the opportunities days until closing. It calls the findAccountAges method to query the accounts ages.

Once the server returns the values, it sets the appropriate values to display on the client side.

```

```

This helper function filters emails from objects.

```

```

## Code Examples

```
<!-- customEmailPane.cmp -->
<aura:component implements="clients:availableForMailAppAppPage,clients:hasItemContext">

<!--
    Add these handlers to customize what happens when the attributes change
    <aura:handler name="change" value="{!v.subject}" action="{!c.handleSubjectChange}" />
    <aura:handler name="change" value="{!v.people}" action="{!c.handlePeopleChange}" />
-->

    <div id="content">
          <aura:if isTrue="{!v.mode == 'edit'}">
            You are composing the following Item: <br/>
            <aura:set attribute="else">
                You are reading the following Item: <br/>
            </aura:set>
        </aura:if>

        <h1><b>Email subject</b></h1>
        <span id="subject">{!v.subject}</span>

        <h1>To:</h1>
        <aura:iteration items="{!v.people.to}" var="to">
            {!to.name} - {!to.email} <br/>
        </aura:iteration>

        <h1>From:</h1>
        {!v.people.from.name} - {!v.people.from.email}

        <h1>CC:</h1>
        <aura:iteration items="{!v.people.cc}" var="cc">
            {!cc.name} - {!cc.email} <br/>
        </aura:iteration>

        <span class="greeting">New Email Arrived</span>, {!v.subject}!
    </div>
</aura:component>
```

```
<!-- customEmailDisplay.cmp -->
<!--
This component handles the email context on initialization. 
It retrieves accounts and opportunities based on the email addresses included 
in the email recipients list. 
It then calculates the account and opportunity ages based on when the accounts 
were created and when the opportunities will close.
-->

<aura:component 
    implements="clients:availableForMailAppAppPage,clients:hasItemContext"
    controller="ComponentController">
    
    <aura:handler name="init" value="{!this}" action="{!c.handlePeopleChange}" />
    <aura:attribute name="accounts" type="List" />
    <aura:attribute name="opportunities" type="List" />
    <aura:iteration items="{!v.accounts}" var="acc">
            {!acc.name} => {!acc.age}
    </aura:iteration>
    <aura:iteration items="{!v.opportunities}" var="opp">
            {!opp.name} => {!opp.closesIn} Days till closing
    </aura:iteration>
    
</aura:component>
```

```
/* customEmailDisplayController.js */
({
    handlePeopleChange: function(component, event, helper){
        var people = component.get("v.people");
        var peopleEmails = helper.filterEmails(people);
        var action = component.get("c.findOpportunityCloseDateTime");
        action.setParam("emails", peopleEmails);

        action.setCallback(this, function(response){
            var state = response.getState();
            if(state === "SUCCESS"){
               component.set("v.opportunities", response.getReturnValue());
            } else{
               component.set("v.opportunities",[]);
        }
});
        $A.enqueueAction(action);
        var action = component.get("c.findAccountAges");
        action.setParam("emails", peopleEmails);

        action.setCallback(this, function(response){
            var state = response.getState();
            if(state === "SUCCESS"){
               component.set("v.accounts", response.getReturnValue());
            } else{
               component.set("v.accounts",[]);
        }
});
$A.enqueueAction(action);
}
})
```

```
/* customEmailDisplayHelper.js */({
    filterEmails : function(people){
            return this.getEmailsFromList(people.to).concat(
                this.getEmailsFromList(people.cc));
    },

    getEmailsFromList : function(list){
            var ret = [];
            for (var i in list) {
            ret.push(list[i].email);
    }
     return ret;
  }
})
```
