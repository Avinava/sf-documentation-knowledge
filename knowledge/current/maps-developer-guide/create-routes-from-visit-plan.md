---
title: "Create Routes from Visit Plan"
domain: maps-developer-guide
topic: create-routes-from-visit-plan
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:53.836Z
estimatedTokens: 789
keywords: [Routes, Visit, Plan, StartAdvancedOptimizationForVisitPlan, Apex, creates, users, assigned, Salesforce, Maps, Advanced, leverage, planning, custom, workflow]
---

# Create Routes from Visit Plan

> The StartAdvancedOptimizationForVisitPlan() Apex method creates routes for all
            users assigned to a Salesforce Maps Advanced visit plan. Use this method to leverage
            Salesforce Maps Advanced visit planning from your custom workflow or app, such as a
            retail execution app. By using Apex, you can generate routes for reps automatically
            without having to make field reps click through the UI to manually generate
        routes.

# Create Routes from Visit Plan

The StartAdvancedOptimizationForVisitPlan() Apex method creates routes for all users assigned to a Salesforce Maps Advanced visit plan. Use this method to leverage Salesforce Maps Advanced visit planning from your custom workflow or app, such as a retail execution app. By using Apex, you can generate routes for reps automatically without having to make field reps click through the UI to manually generate routes.

The StartAdvancedOptimizationForVisitPlan() Apex method is the equivalent of clicking **Plan Visits** on an active visit plan in Maps Advanced Visit Plans.

When you use this method, only the user’s future shifts are included for planning visits along the route. If a user’s shift has started or is within 2 hours of starting at the time the method runs, the method doesn’t change visit appointments for today’s date. In that case, one day is added to the starting date (startDate).

Visits are created from startDate through a visit plan’s end date.

## Signature

```

```

Where,

-   maps is the namespace that's available after you install Salesforce Maps.
-   API is the class that contains the global methods exposed to developers.
-   StartAdvancedOptimizationForVisitPlan() is the method.
-   templateId is the Salesforce record id of a visit plan.
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

#### See Also

-   [*Knowledge Article:* Generate Routes for All Users Assigned to the Maps Advanced Visit Plan](https://help.salesforce.com/s/articleView?id=000362756&type=1&language=en_US "Knowledge Article: Generate Routes for All Users Assigned to the Maps
    Advanced Visit Plan - HTML (New Window)")

-   [*Apex Developer Guide*](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_dev_guide.htm "Apex Developer Guide - HTML (New Window)")

## Code Examples

```apex
Map<String, Object> maps.API.StartAdvancedOptimizationForVisitPlan(Id templateId, Date startDate)
```

```apex
// Create a variable for the current or future date.
Date today = Date.today();

// Query for the record ID of an active visit plan.
List<maps__AdvRouteTemplate__c> activeTemplates = [SELECT Id FROM maps__AdvRouteTemplate__c WHERE Name = 'NAME_OF_VISIT_PLAN' AND 
maps__StartDate__c <= :today AND (maps__EndDate__c >= :today OR maps__IsRepeating__c = TRUE) AND 
maps__Active__c = TRUE LIMIT 1];

// Call the method.
if (!activeTemplates.isEmpty()) {
maps.API.StartAdvancedOptimizationForVisitPlan(activeTemplates[0].Id, today);
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
