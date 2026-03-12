---
title: "Events Handled in the Salesforce Mobile App and Lightning
      Experience"
domain: lightning
topic: events-handled-in-the-salesforce-mobile-app-and-lightning-experience
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:48.902Z
estimatedTokens: 844
keywords: [Events, Handled, Salesforce, Mobile, App, Lightning, Experience, handle, fire, Aura, component, Customizing, Client-Side, Logic, Standalone]
---

# Events Handled in the Salesforce Mobile App and Lightning
      Experience

> The Salesforce mobile app and Lightning Experience handle some events, which you can
    fire in your Aura component.

# Events Handled in the Salesforce Mobile App and Lightning Experience

The Salesforce mobile app and Lightning Experience handle some events, which you can fire in your Aura component.

If you fire one of these force or lightning events in your Lightning apps or components outside of the Salesforce mobile app or Lightning Experience:

-   You must handle the event by using the <aura:handler> tag in the handling component.
-   Use the <aura:registerEvent> or <aura:dependency> tags to ensure that the event is sent to the client, when needed.

| Event Name | Description |
| --- | --- |
| force:closeQuickAction | Closes a quick action panel. Only one quick action panel can be open in the app at a time. |
| force:createRecord | Opens a page to create a record for the specified entityApiName, for example, “Account” or “myNamespace__MyObject__c”. |
| force:editRecord | Opens the page to edit the record specified by recordId. |
| force:navigateToComponent (Beta) | Navigates from one Aura component to another. |
| force:navigateToList | Navigates to the list view specified by listViewId. |
| force:navigateToObjectHome | Navigates to the object home specified by the scope attribute. |
| force:navigateToRelatedList | Navigates to the related list specified by parentRecordId. |
| force:navigateToSObject | Navigates to an sObject record specified by recordId. |
| force:navigateToURL | Navigates to the specified URL. |
| force:recordSave | Saves a record. |
| force:recordSaveSuccess | Indicates that the record has been successfully saved. |
| force:refreshView | Reloads the view. |
| force:showToast | Displays a toast notification with a message. (Not available on login pages.) |
| lightning:openFiles | Opens one or more file records from the ContentDocument and ContentHubItem objects. |

## Customizing Client-Side Logic for the Salesforce Mobile App, Lightning Experience, and Standalone Apps

Since the Salesforce mobile app and Lightning Experience automatically handle many events, you have to do extra work if your component runs in a standalone app. Instantiating the event using $A.get() can help you determine if your component is running within the Salesforce mobile app and Lightning Experience or a standalone app. For example, you want to display a toast when a component loads in the Salesforce mobile app and Lightning Experience. You can fire the force:showToast event and set its parameters for the Salesforce mobile app and Lightning Experience, but you have to create your own implementation for a standalone app.

```

```

#### See Also

-   [aura:dependency](atlas.en-us.lightning.meta/lightning/ref_tag_dependency.htm "The <aura:dependency> tag enables you to declare dependencies, which improves their discoverability by the framework.")

-   [Fire Component Events](atlas.en-us.lightning.meta/lightning/events_component_fire.htm "Fire a component event to communicate data to another component. A component event can be handled by the component that fired the event or by a component in the containment hierarchy that receives the event.")

-   [Fire Application Events](atlas.en-us.lightning.meta/lightning/events_application_fire.htm "Application events follow a traditional publish-subscribe model. An application event is fired from an instance of a component. All components that provide a handler for the event are notified.")

## Code Examples

```
displayToast : function (component, event, helper) {
    var toast = $A.get("e.force:showToast");
    if (toast){
        //fire the toast event in Salesforce app and Lightning Experience
        toast.setParams({
            "title": "Success!",
            "message": "The component loaded successfully."
        });
        toast.fire();
    } else {
        //your toast implementation for a standalone app here
    }
}
```

## Related Topics

- aura:dependency (atlas.en-us.lightning.meta/lightning/ref_tag_dependency.htm)
- Fire Component Events (atlas.en-us.lightning.meta/lightning/events_component_fire.htm)
- Fire Application Events (atlas.en-us.lightning.meta/lightning/events_application_fire.htm)
