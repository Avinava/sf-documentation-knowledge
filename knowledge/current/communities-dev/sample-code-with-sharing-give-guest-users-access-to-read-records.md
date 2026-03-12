---
title: "Sample Code With Sharing: Give Guest Users Access to Read Records"
domain: communities-dev
topic: sample-code-with-sharing-give-guest-users-access-to-read-records
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:23.422Z
estimatedTokens: 943
keywords: [Sample, Code, Sharing, Give, Guest, Users, Access, Records, collection, samples, user, enters, date, range, views]
---

# Sample Code With Sharing: Give Guest Users Access to Read Records

> In this collection of code samples, the guest user enters a date range and then views
        events within that range. The guest user has read access to the records via sharing
        rules.

# Sample Code With Sharing: Give Guest Users Access to Read Records

In this collection of code samples, the guest user enters a date range and then views events within that range. The guest user has read access to the records via sharing rules.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=communities_dev)

#### Important

Before you give read access to guest users, see [Give Guest Users Access to Read Records](atlas.en-us.communities_dev.meta/communities_dev/communities_dev_give_guest_users_read_access_to_records.htm "When you allow guest users access to read record data, you expose your data to the public. Review our guidelines, and design your implementation to allow the necessary access to guest users without compromising your data.").

## Aura Component: DisplayEvents.cmp

This sample Aura component displays two lightning:input components, where the user enters a start and end date to view events. The lightning:card component displays each event’s StartDateTime, EndDateTime, Subject, and Location.

```

```

## Component Controller: DisplayEventsController.js

This sample JavaScript controller processes events for the Aura component and calls the methods in the helper file.

```

```

## JavaScript Helper: DisplayEventsHelper.js

This JavaScript helper creates an asynchronous request to find events within the two timestamps that the user submitted and defines the actions to take when the request completes.

```

```

## Apex Controller: GuestUserEventsAuraController.cls

This sample Apex controller receives the call to find records from the JavaScript helper. It selects events that match these criteria:

-   The event’s StartDateTime is greater than the Start\_Date parameter.
-   The event’s EndDateTime is less than the End\_Date parameter.
-   The event’s isPrivate value is False.
-   The event’s isArchived value is False.

The query returns these fields for each of the events:

-   StartDateTime
-   EndDateTime
-   Location
-   Subject
-   Id

Because the guest users don’t need the record ID, a for loop copies all the other fields to a new Event object. Then, we add the new objects to a new list and return that list to the client.

The guest user has access to the records with sharing rules, so we define the class with the with sharing keyword.

![Warning](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_warning.png&folder=communities_dev)

#### Warning

Any system or individual on the internet can invoke @AuraEnabled methods. Protect the execution of the method by implementing procedural access checks. Make sure that the query selects only the desired records and only the required fields.

```

```

#### See Also

-   [*Salesforce Developers Wiki*: Enforcing CRUD and FLS](https://developer.salesforce.com/wiki/enforcing_crud_and_fls "Salesforce Developers Wiki: Enforcing CRUD and FLS - HTML (New Window)")

-   [*Salesforce Help*: Secure Guest Users’ Sharing Settings and Record Access](https://help.salesforce.com/articleView?id=networks_secure_guest_user_sharing.htm&language=en_US "Salesforce Help: Secure Guest Users’ Sharing Settings and Record
    Access - HTML (New Window)")

-   [*Salesforce Help*: Sharing Rules](https://help.salesforce.com/articleView?id=security_about_sharing_rules.htm&language=en_US "Salesforce Help: Sharing Rules - HTML (New Window)")

-   [*Apex Developer Guide*](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_dev_guide.htm "Apex Developer Guide - HTML (New Window)")

-   [*Lightning Aura Components Developer Guide*](https://developer.salesforce.com/docs/atlas.en-us.260.0.lightning.meta/lightning/intro_framework.htm "Lightning Aura Components Developer Guide - HTML (New Window)")

## Code Examples

```
<aura:component controller="GuestUserEventsAuraController">

    <aura:attribute name="events" type="Event[]"/>
    <aura:attribute name="StartDate" type="String" default=""/>
    <aura:attribute name="EndDate" type="String" default=""/>

    <lightning:input type="datetime" name="StartDate" value="{!v.StartDate}" aura:id="StartDate" label="Start after: " required="true"/>
    <lightning:input type="datetime" name="EndDate" value="{!v.EndDate}" aura:id="EndDate" label="End before: " required="true"/>
    <lightning:button name="Submit" variant="brand" label="Find events" title="Find events" onclick="{!c.handleSearch}"/>
    
    <lightning:card title="Events">
        <p class="slds-p-horizontal--small">
            <aura:iteration items="{!v.events}" var="event">
                {!event.Subject} ({!event.Location}) starts at {!event.StartDateTime} and ends at {!event.EndDateTime} <br/>
            </aura:iteration>
        </p>
    </lightning:card>
</aura:component>
```

```
({
    handleSearch : function(component, event, helper) {
        helper.doSearch(component, event, helper);
    }
})
```

```
({
        doSearch : function(component, event, helper) {
            var start_date = component.find("StartDate").get("v.value");
            var end_date = component.find("EndDate").get("v.value");
            var action = component.get("c.searchEvents");
            action.setParams({
                "start_date": start_date,
                "end_date": end_date
            });
            action.setCallback(this, function(response){
                component.set("v.events", response.getReturnValue());
            });
            $A.enqueueAction(action);
        }
})
```

```apex
public with sharing class GuestUserEventsAuraController {
	
    @AuraEnabled
    public static List<Event> searchEvents(Datetime start_date, Datetime end_date){
        List<Event> results = [SELECT Event.Subject,
                                  Event.StartDateTime,
                                  Event.EndDateTime,
                                  Event.Location
                FROM Event 
                WHERE Event.EndDateTime<:end_date AND 
                      Event.StartDateTime>:start_date AND 
                      Event.isPrivate=False AND 
                      Event.isArchived=False];

        List<Event> filtered_events = new List<Event>();
        for (Event event : results) {
            Event new_event = new Event(Subject = event.Subject, 
                                                              StartDateTime = event.StartDateTime, 
                                                              EndDateTime = event.EndDateTime,
                                                              Location = event.Location);
            filtered_events.add(new_event);
        }
        return filtered_events;
    }
}
```

## Related Topics

- Give Guest Users Access to Read Records (atlas.en-us.communities_dev.meta/communities_dev/communities_dev_give_guest_users_read_access_to_records.htm)
