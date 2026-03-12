---
title: "Create Routes for Specific Users"
domain: maps-developer-guide
topic: create-routes-for-specific-users
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:53.831Z
estimatedTokens: 1026
keywords: [Routes, Specific, Users, StartAdvancedOptimizationForUsers, Apex, creates, assigned, any, active, Salesforce, Maps, Advanced, visit, plan, leverage]
---

# Create Routes for Specific Users

> The StartAdvancedOptimizationForUsers() Apex method creates routes for users
            assigned to any active Salesforce Maps Advanced visit plan. Use this method to leverage
            Salesforce Maps Advanced visit planning from your custom workflow or app, such as a
            retail execution app. By using Apex, you can generate routes for reps automatically
            without having to make field reps click through the UI to manually generate
        routes.

# Create Routes for Specific Users

The StartAdvancedOptimizationForUsers() Apex method creates routes for users assigned to any active Salesforce Maps Advanced visit plan. Use this method to leverage Salesforce Maps Advanced visit planning from your custom workflow or app, such as a retail execution app. By using Apex, you can generate routes for reps automatically without having to make field reps click through the UI to manually generate routes.

The StartAdvancedOptimizationForUsers() Apex method is the equivalent of clicking **Plan My Visits** for users in Maps Advanced Route.

When you use this method, only the user’s future shifts are included for planning visits along the route. If a user’s shift has started or is within 2 hours of starting at the time the method runs, the method doesn’t change visit appointments for today’s date. In that case, one day is added to the starting date (startDate).

Visits are created from startDate through a visit plan’s end date. If a user is assigned to more than one visit plan, then visits are planned for the length of time dictated by the visit plan with the end date furthest in the future.

## Example

A user is assigned to consecutive plans Visit Plan A and Visit Plan B. At the time the method is run, Visit Plan A has 10 days remaining until its end date. Visit Plan B has a start date immediately after Visit Plan A’s end date, and has 30 days remaining until its end date. When the method runs, visits are scheduled for the user for the remainder of Visit Plan A (10 days), and scheduled for 20 days in Visit Plan B, for a total of 30 days.

## Signature

```

```

Where,

-   maps is the namespace that's available after you install Salesforce Maps.
-   API is the class that contains the global methods exposed to developers.
-   StartAdvancedOptimizationForUsers() is the method.
-   userIds is a set of IDs of the Salesforce users for which you want to generate routes. Every user must be assigned to an active visit plan for the date you specify in startDate.
-   startDate is optional. If not specified, the method uses today’s date as the date to start planning visits. If startDate occurs during a user’s shift or within 2 hours of the user’s next shift, then one day is added to the specified startDate.

## Sample Code

![Warning](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_warning.png&folder=maps_developer_guide)

#### Warning

If you invoke methods within a flow, process builder, or trigger, avoid uncommitted work errors when you perform one of the following.

-   Call the methods through a future method
-   Call the methods as queueable

Uncommitted work errors can also arise if calling out to Salesforce Maps methods more than one time in a single transaction and the Salesforce Maps token hasn’t refreshed in the last 24 hours. If these errors occur, separate each callout into individual transactions.

Different processes refresh the token, such as plotting a route or schedule. The refresh process is almost immediate after each qualifying action occurs.

**Example**

```

```

## Sample Response

This method returns an Apex Map<String, Object> object that contains a boolean flag indicating whether the routes were created successfully.

```

```

If the routes weren’t created successfully, an error message is returned. In this context, optimization refers to creating routes.

```

```

If the routes were created successfully for some users, but not others, a warning is returned. In this example, some users weren’t assigned to an active visit plan for the startDate, so those users were skipped.

```

```

#### See Also

-   [*Knowledge Article:* Generate Routes for a Single User Assigned to Maps Advanced Visit Plan](https://help.salesforce.com/s/articleView?id=000363030&type=1&language=en_US "Knowledge Article: Generate Routes for a Single User Assigned to Maps
    Advanced Visit Plan - HTML (New Window)")

-   [*Apex Developer Guide*](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_dev_guide.htm "Apex Developer Guide - HTML (New Window)")

## Code Examples

```apex
Map<String, Object> maps.API.StartAdvancedOptimizationForUsers(Set<Id> userIds, Date startDate)
```

```apex
// Create a userIds variable to hold the Salesforce user IDs.
Set<Id> userIds = new Set<Id>();

// Create a variable for the current or future date.
Date today = Date.today();

// Check that each user is assigned to an active visit plan for specified date.
List<maps__AdvRouteTemplate__c> activeTemplates = [SELECT Id FROM maps__AdvRouteTemplate__c WHERE 
maps__StartDate__c <= :today AND (maps__EndDate__c >= :today OR maps__IsRepeating__c = TRUE) AND 
maps__Active__c = TRUE LIMIT 1];

// Query for the IDs of all users for which we want to generate routes.
for (User u : [SELECT Id FROM User WHERE Name IN ('User1, User2')]) {
    userIds.add(u.Id);
}

// Call the method.
if (!activeTemplates.isEmpty() && !userIds.isEmpty()) {
    maps.API.StartAdvancedOptimizationForUsers(userIds, today);
}
```

```
{
    success: true
}
```

```
{
    success: false
    error: "Please provide either the current or future date in the request to complete optimization."
}
```

```
{
    success: true, 
    warning: "No visit plans are set up for routing on the date you selected for the following users: [userId]"
}
```
