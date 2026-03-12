---
title: "Fire the Events"
domain: lightning
topic: fire-the-events
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:48.909Z
estimatedTokens: 608
keywords: [Fire, Events, client-side, controller, helper, functions, force, handled, Lightning, Experience, Salesforce, mobile, app, let’s, view]
---

# Fire the Events

> Fire the events in your client-side controller or helper functions. The force events are handled by Lightning Experience and the Salesforce
        mobile app, but let’s view and test the components in Lightning Experience to simplify
        things.

# Fire the Events

Fire the events in your client-side controller or helper functions. The force events are handled by Lightning Experience and the Salesforce mobile app, but let’s view and test the components in Lightning Experience to simplify things.

This demo builds on the contacts component you created in [Load the Contacts](atlas.en-us.lightning.meta/lightning/events_one_demo_load.htm "Create an Apex controller and load your contacts. An Apex controller is the bridge that connects your components and your Salesforce data.").

1.  In the **contacts** sidebar, click **CONTROLLER** to create a resource named contactsController.js. Replace the placeholder code with the following code and then save.

    ```

    ```

    The onclick event handler in the following button component triggers the goToRecord client-side controller when the button is clicked.

    ```

    ```

    You set the parameters to pass into the events using the event.setParams() syntax. In this case, you’re passing in the Id of the contact record to navigate to. There are other events besides force:navigateToSObject that simplify navigation within Lightning Experience and the Salesforce app. For more information, see [Events Handled in the Salesforce Mobile App and Lightning Experience](atlas.en-us.lightning.meta/lightning/events_one.htm "The Salesforce mobile app and Lightning Experience handle some events, which you can fire in your Aura component.").

2.  To test the event, refresh your custom tab in Lightning Experience, and click the **Details** button.

    The force:navigateToSObject is fired, which updates the view to display the contact record page.


We stepped through creating a component that loads contact data using a combination of client-side controllers and Apex controller methods to create a custom UI with your Salesforce data. The possibilities of what you can do with Aura components are endless. While we showed you how to surface a component via a tab in Lightning Experience and the Salesforce app, you can take this tutorial further by surfacing the component on record pages via the Lightning App Builder and even Experience Builder. To explore the possibilities, blaze the trail with the resources available at [Trailhead: Explore Lightning Aura Components Resources](atlas.en-us.lightning.meta/lightning/qs_aotp_app.htm "Learn the fundamentals of Lightning Aura components with Trailhead resources.").

## Code Examples

```
({
    goToRecord : function(component, event, helper) {
        // Fire the event to navigate to the contact record
        var sObjectEvent = $A.get("e.force:navigateToSObject");
        sObjectEvent.setParams({
            "recordId": component.get("v.contact.Id")
        })
        sObjectEvent.fire();
    }
})
```

```
<lightning:button name="details" label="Details" onclick="{!c.goToRecord}" />
```

## Related Topics

- Load the Contacts (atlas.en-us.lightning.meta/lightning/events_one_demo_load.htm)
- Events Handled in the Salesforce Mobile App and Lightning Experience (atlas.en-us.lightning.meta/lightning/events_one.htm)
- Trailhead: Explore Lightning Aura Components Resources (atlas.en-us.lightning.meta/lightning/qs_aotp_app.htm)
