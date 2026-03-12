---
title: "Managing Navigation"
domain: pages
topic: managing-navigation
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:24.556Z
estimatedTokens: 1167
keywords: [Managing, Navigation, Salesforce, mobile, app, manages, events, event, framework, made, JavaScript, number, utility, functions, creating]
---

# Managing Navigation

> The Salesforce mobile app manages navigation using events. The navigation event
        framework is made available as a JavaScript object that provides a number of utility
        functions that make creating programmatic navigation that “just works” a breeze. The
        advantage is a navigation experience that’s more natural for a mobile context. It also makes
        creating post-completion navigation, such as redirecting to an order page after the order is
        successfully submitted, easier for Salesforce developers.

# Managing Navigation

The Salesforce mobile app manages navigation using events. The navigation event framework is made available as a JavaScript object that provides a number of utility functions that make creating programmatic navigation that “just works” a breeze. The advantage is a navigation experience that’s more natural for a mobile context. It also makes creating post-completion navigation, such as redirecting to an order page after the order is successfully submitted, easier for Salesforce developers.

In the Salesforce mobile app, programmatic navigation for Visualforce pages generally works something like this:

1.  A user invokes a Visualforce page, usually from the navigation menu, or from an action in the action bar.
2.  The Visualforce page loads and runs, including any custom controller or extension code called by the page.
3.  The user interacts with the page in some way: for example, to fill in some form values.
4.  The user submits the form, or performs some other action on the page that commits a change.
5.  Controller or extension code runs, saving the changes to Salesforce, and returning the results of the action.
6.  The Visualforce page, using JavaScript response handlers, receives the results of the action, and when successful, responds by redirecting the user to a new page that shows the results of their action.

This scenario is easily handled by the app’s navigation framework.

Another common use case is simply adding links or other user interface controls to a page, which move from that Visualforce page to another page in the app. This navigation is also easily managed by the app’s navigation framework.

In these cases, navigation is handled by a special utility JavaScript object, sforce.one. The sforce.one object is automatically added to all Visualforce pages when they run inside the Salesforce mobile app. This object provides a number of functions that trigger navigation events when they run. To use these functions, you can call them directly from your page’s JavaScript code, or you can attach calls as click handlers to elements on the page.

Here’s a JavaScript function that creates markers to add to a Google map.

```

```

The very first line builds a string, warehouseNavUrl, that, when used as a JavaScript URL, navigates to the detail page for the warehouse. The link is created around the warehouse name, and appears in the information panel (put together in the warehouseDetails string) that appears when you click a marker. Clicking the warehouse name takes you to the detail page for that warehouse (the omitted part of the function code deals with the Google Maps API calls to create a marker and add it to the map).

If you have JavaScript code or HTML markup that runs inside of the Salesforce mobile app, keep these considerations in mind:

-   Don’t directly manipulate the browser URL using window.location.href. This doesn’t work well with the app’s navigation management system.
-   Don’t use target="\_blank" in navigation URLs; you can’t open new windows inside the app.

## Navigation Methods within the Canvas Framework

If you’re using Canvas, there’s a simpler way to control navigation around canvas apps and canvas personal apps in the Salesforce mobile app.

You can use Lightning Platform methods to control navigation in the app. These methods within the Canvas framework are events that reside in the JavaScript library. When you call one of the navigation methods from your canvas code, you send an event into Salesforce that reads the payload and directs the user to the specified destination.

Reference the navigation method as an event variable, with name and payload. For example:

var event = {name:"s1.createRecord", payload: {entityName: "Account", recordTypeId: "00h300000001234"}};

For more information about using the new methods, see Salesforce Mobile App Navigation Methods for Use with Canvas Apps in the Canvas Developer Guide.

-   **[Navigation and Messaging with the sforce.one Object Object](atlas.en-us.pages.meta/pages/salesforce1_dev_jsapi_sforce_one.htm)**
    The Salesforce Platform includes an event mechanism for navigation and messaging. This is exposed in Visualforce as a JavaScript object called sforce.one. It’s available in any page that appears in the Salesforce mobile app.
-   **[How sforce.one Handles API Versions Handles API Versions](atlas.en-us.pages.meta/pages/salesforce1_dev_jsapi_sforce_one_versioning.htm)**
    The sforce.one object is frequently improved in new releases. To maintain backward compatibility, sforce.one provides version-specific behavior, and you can use a specific version of sforce.one in your apps.

## Code Examples

```
function setupMarker(){ 

    // Use JavaScript nav function to determine if we are
    // in the Salesforce mobile app and set navigation link appropriately
    var warehouseNavUrl = 
        'sforce.one.navigateToSObject(\'' + warehouse.Id + '\')';

    // Wrap the warehouse details with the link to 
    // navigate to the warehouse details
    var warehouseDetails = 
        '<a href="javascript:' + warehouseNavUrl + '">' + 
        warehouse.Name + '</a><br/>' + 
        warehouse.Street_Address__c + '<br/>' + 
        warehouse.City__c + '<br/>' + 
        warehouse.Phone__c;
   
    // Create a panel that will appear when a marker is clicked
    var infowindow = new google.maps.InfoWindow({ 
        content: warehouseDetails
    });
   
    // ...
}
```

## Related Topics

- Navigation and Messaging with the sforce.one Object Object (atlas.en-us.pages.meta/pages/salesforce1_dev_jsapi_sforce_one.htm)
- How sforce.one Handles API Versions Handles API Versions (atlas.en-us.pages.meta/pages/salesforce1_dev_jsapi_sforce_one_versioning.htm)
