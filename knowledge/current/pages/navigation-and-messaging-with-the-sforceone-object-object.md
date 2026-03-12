---
title: "Navigation and Messaging with the  sforce.one Object Object"
domain: pages
topic: navigation-and-messaging-with-the-sforceone-object-object
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:24.473Z
estimatedTokens: 2364
keywords: [Navigation, Messaging, sforce.one, Salesforce, Platform, includes, event, mechanism, exposed, Visualforce, JavaScript, It’s, any, appears, mobile]
---

# Navigation and Messaging with the  sforce.one Object Object

> The Salesforce Platform includes an event mechanism for navigation and messaging. This
    is exposed in Visualforce as a JavaScript object called sforce.one. It’s available in any page that appears in the Salesforce mobile
    app.

# Navigation and Messaging with the sforce.one Object Object

The Salesforce Platform includes an event mechanism for navigation and messaging. This is exposed in Visualforce as a JavaScript object called sforce.one. It’s available in any page that appears in the Salesforce mobile app.

The sforce.one object provides the following functions. Reference the function using dotted notation from the sforce.one object. For example: sforce.one.navigateToSObject(recordId, view).

Further details of the underlying events fired by these functions can be found in the [Lightning Aura Components Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.lightning.meta/lightning/ref_events.htm).

| Function | Description |
| --- | --- |
| back(​[refresh]) | Navigates to the previous state that’s saved in the sforce.one history. It’s equivalent to clicking a browser’s Back button.refresh is optional. By default, the page doesn’t refresh. Pass true to refresh the page if possible. |
| navigateToSObject(​recordId​[, view]) | Navigates to an sObject record, specified by recordId. This record “home” has several views, which in the Salesforce mobile app are available as slides that the user can swipe between.view is optional and defaults to detail. view specifies the slide within record home to display initially.NoteRecord IDs corresponding to ContentNote SObjects aren’t supported.The possible values are as follows.detail: the record detail slidechatter: the Chatter sliderelated: the view of related slide |
| navigateToURL(​url​[, isredirect]) | Navigates to the specified URL.Relative root and absolute URLs are supported. Relative URLs are relative to the Lightning domain root, and retain navigation history. For example, the relative root URL for a Visualforce page is prefixed by a forward slash, such as /apex/c__Listen. Relative URLs like ../apex/c__Listen or apex/c__Listen are not supported. External URLs—that is, URLs that are outside the Lightning domain—open in a separate browser window.NoteDepending on the user’s device platform, device settings, version of Salesforce, and authentication requirements for the external URL being opened, the separate browser window might require authentication or re-authentication.Use relative URLs to navigate to different screens within your app. Use external URLs to allow the user to access a different site or app, where they can take actions that don’t need to be preserved in your app. To return to your app, the separate window that’s opened by an external URL must be closed when the user is finished with the other app. The new window has a separate history from your app, and this history is discarded when the window is closed. This also means that the user can’t click a Back button to go back to your app; the user must close the new window.mailto:, tel:, geo:, and other URL schemes are supported for launching external apps and attempt to “do the right thing.” However, support varies by mobile platform and device. mailto: and tel: are reliable, but we recommend that you test any other URLs on a range of expected devices.isredirect is optional and defaults to false. Set it to true to indicate that the new URL should replace the current one in the navigation history.When you navigate to a URL from a modal, such as from a component that’s enabled for quick actions, the modal isn’t closed automatically by default. To automatically close the modal when navigating, set isredirect to true.NoteBe careful when using navigateToURL within the onClick handler of an <apex:commandButton> or any <button type="submit"> or <input type="submit">. Even if isredirect=true, the default click action of the command button is a form post. In this scenario, the command button performs a form post and a navigateToURL action, requiring the user to click the back button twice to navigate to the previous page. To prevent the default click action, configure the onClick handler to either call event.preventDefault() or return false.NoteURLs corresponding to ContentNote SObjects aren’t supported. |
| navigateToFeed(​subjectId, type) | Navigates to the feed of the specified type, scoped to the subjectId. For some feed types, the subjectId is required but ignored. For those feed types, pass the current user’s ID as the subjectId.type is the feed type. The possible values are as follows.BOOKMARKS: Contains all feed items saved as bookmarks by the context user. Pass the current user’s ID as the subjectId.COMPANY: Contains all feed items except feed items of type TrackedChange. To see the feed item, the user must have sharing access to its parent. Pass the current user’s ID as the subjectId.FILES: Contains all feed items that contain files posted by people or groups that the context user follows. Pass the current user’s ID as the subjectId.GROUPS: Contains all feed items from all groups the context user either owns or is a member of. Pass the current user’s ID as the subjectId.NEWS: Contains all updates for people the context user follows, groups the user is a member of, and files and records the user is following. Contains all updates for records whose parent is the context user. Pass the current user’s ID as the subjectId.PEOPLE: Contains all feed items posted by all people the context user follows. Pass the current user’s ID as the subjectId.RECORD: Contains all feed items whose parent is a specified record, which could be a group, user, object, file, or any other standard or custom object. When the record is a group, the feed also contains feed items that mention the group. When the record is a user, the feed contains only feed items on that user. You can get another user’s record feed. Pass the record’s ID as the subjectId.TO: Contains all feed items with mentions of the context user. Contains feed items the context user commented on and feed items created by the context user that are commented on. Pass the current user’s ID as the subjectId.TOPICS: Contains all feed items that include the specified topic. Pass the topic’s ID as the subjectId. This value is supported in Salesforce for mobile web only. Topics aren’t available in Salesforce for iOS or Salesforce for Android. |
| navigateToFeedItemDetail(​feedItemId) | Navigates to the specific feed item, feedItemId, and any associated comments. |
| navigateToRelatedList(​relatedListId, parentRecordId) | Navigates to a related list for the parentRecordId. For example, to display a related list for a Warehouse object, the parentRecordId is Warehouse__c.Id.relatedListId is the API name or ID of the related list to display. |
| navigateToList(​listViewId​, listViewName, scope) | Navigates to the list view that’s specified by the listViewId, which is the ID of the list view to be displayed.listViewName sets the title for the list view. It doesn’t need to match the actual name that’s saved for the list view. To use the saved name, set listViewName to null.Set scope to the name of the sObject in the view, for example, “Account” or “MyObject__c”. |
| createRecord(​entityName​[, recordTypeId][, defaultFieldValues]) | Opens the page to create a record for the specified entityName, for example, “Account” or “MyObject__c”.recordTypeId is optional and specifies the record type for the created object. Calling createRecord without providing a recordTypeId may result in an error.defaultFieldValues is optional and, if provided, prepopulates fields on a record create panel, including fields not displayed on the panel. Users must have create access to fields with prepopulated values. Errors during saving that are caused by field access limitations don’t display error messages. |
| editRecord(​recordId) | Opens the page to edit the record specified by recordId. |
| showToast({toastParams}) | Shows a toast. A toast displays a message below the header at the top of a view. The toastParams object sets the attributes for the toast. Use any attribute available for the force:showToast Aura event. For example:sforce.one.showToast({     "title": "Success!",     "message": "The record was updated successfully." }); |
| publish(​messageChannel, ​message) | Publishes a message to a messageChannel using Lightning Message Service. See Publish on a Message Channel. |
| subscribe(​messageChannel, ​function) | Subscribes to a messageChannel using Lightning Message Service. The function provided runs when a message on the subscribing message channel is published. The subscribe() function returns a subscription object that can be used with unsubscribe(). See Subscribe and Unsubscribe from a Message Channel. |
| unsubscribe(​subscription) | Unsubscribes a subscription object from a message channel. See Subscribe and Unsubscribe from a Message Channel. |

Keep the following in mind when using the sforce.one object:

-   Calls to sforce.one.navigateToURL may result in an “Unsupported Page” error if the URL references standard pages for objects or Chatter pages. To avoid this error, ensure that the URL begins with a forward slash (**/**\_ui instead of \_ui).
-   The sforce.one.createRecord method doesn’t respect Visualforce overrides on the standard action.
-   Developers can use the pageReference class to control navigation for the Salesforce mobile app. Some actions and their associated pageReference URLs are not yet fully supported. For example, standard\_recordPage with actions clone or edit may not work as expected. Full support is planned for future releases.

## Code Examples

```
sforce.one.showToast({
    "title": "Success!",
    "message": "The record was updated successfully."
});
```

## Related Topics

- Publish on a Message Channel (atlas.en-us.pages.meta/pages/message_channel_publish.htm)
- Subscribe and
                Unsubscribe from a Message Channel (atlas.en-us.pages.meta/pages/message_channel_subscribe.htm)
