---
title: "Salesforce Mobile App Navigation Methods for Use with Canvas Apps"
domain: platform-connect
topic: salesforce-mobile-app-navigation-methods-for-use-with-canvas-apps
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:27.396Z
estimatedTokens: 2139
keywords: [Salesforce, Mobile, App, Navigation, Canvas, Apps, framework, includes, smoothly, integrate, needing, Visualforce]
---

# Salesforce Mobile App Navigation Methods for Use with Canvas Apps

> The Canvas framework includes methods that you can
      use to smoothly integrate navigation between a canvas app and the Salesforce mobile app,
      without needing to use Visualforce.

# Salesforce Mobile App Navigation Methods for Use with Canvas Apps

The Canvas framework includes methods that you can use to smoothly integrate navigation between a canvas app and the Salesforce mobile app, without needing to use Visualforce.

To circumvent the navigational limitations of the iframe that contains a canvas app, use Canvas methods. These methods offer a simpler alternative to Visualforce pages for controlling navigation to or from canvas apps in the Salesforce app.

For example, your canvas app code can call Salesforce "create record" logic to navigate to the page where the **Create Account** button resides. Clicking the button triggers a navigation method to go to the record creation page, which is outside of the canvas app.

These methods within the Canvas framework are events that reside in the JavaScript library. When you call one of the navigation methods from your canvas code, you send an event into Salesforce that reads the payload and directs the user to the specified destination.

Calling the methods from your canvas app is slightly different than calling functions from a Visualforce page, because the methods are proxied to the Salesforce container through the Canvas cross-domain API.

Reference the navigation method as an event variable, with name and payload. For example:

var event = {name:"s1.createRecord", payload: {entityName: "Account", recordTypeId: "00h300000001234"}};

The following table shows the name, payload, and purpose of the navigation methods in Salesforce.

| Name | Payload | Description |
| --- | --- | --- |
| s1.back | {"refresh" : true} | Navigates to the previous state that’s saved in the sforce.one history. It’s equivalent to clicking a browser’s Back button.refresh is optional. By default, the page doesn’t refresh. Pass true to refresh the page if possible. |
| s1.navigateTo​SObject | {"recordId" : "001XXXXXXXXXXXX", "view" : "chatter"} | Navigates to an sObject record, specified by a 15-character or 18-character recordId. This record “home” has several views, which in the Salesforce app are available as slides that the user can swipe between.view is optional and defaults to detail. view specifies the slide within record home to display initially.Record IDs corresponding to ContentNote SObjects aren’t supported.The possible values are:detail: the record detail slidechatter: the Chatter sliderelated: the view of related slide |
| s1.navigateTo​URL | {"url" : "https://salesforce.com/​apex/v.apexp", "isredirect" : true} | Navigates to the specified URL.Relative and absolute URLs are supported. Relative URLs are relative to the Lightning domain, and retain navigation history. External URLs—that is, URLs that are outside the Lightning domain—open in a separate browser window.NoteDepending on the user’s device platform, device settings, version of Salesforce, and authentication requirements for the external URL being opened, the separate browser window might require authentication or reauthentication.Use relative URLs to navigate to different screens within your app. Use external URLs to allow the user to access a different site or app, where those actions don’t need to be preserved in your app. To return the user to your app, the separate window that’s opened by an external URL must be closed when the user is finished with the other app. The new window has a separate history from your app, and this history is discarded when the window is closed. Discarding the history of a new window prevents the user from clicking a Back button to go back to your app; the user must close the new window.mailto:, tel:, geo:, and other URL schemes are supported for launching external apps and attempt to “do the right thing.” However, support varies by mobile platform and device. mailto: and tel: are reliable, but we recommend that you test any other URLs on a range of expected devices.isredirect is optional and defaults to false. Set it to true to indicate that the new URL should replace the current one in the navigation history.Be careful when using navigateToURL within the onClick handler of an <apex:commandButton> or any <button type="submit"> or <input type="submit">. Even if isredirect=true, the default click action of the command button is a form post. In this scenario, the command button performs a form post and a navigateToURL action, requiring the user to click the back button twice to navigate to the previous page. To prevent the default click action, configure the onClick handler to either call event.preventDefault() or return false.URLs corresponding to ContentNote SObjects aren’t supported. |
| s1.navigateTo​Feed | {"subjectId" : "001XXXXXXXXXXXX", "type" : "NEWS"} | Navigates to the feed of the specified type, scoped to the subjectId. For some feed types, the subjectId is required but ignored. For those feed types, pass the current user’s ID as the subjectId.The possible values for type are:BOOKMARKS: Contains all feed items saved as bookmarks by the context user. Pass the current user’s ID as the subjectId.COMPANY: Contains all feed items except feed items of type TrackedChange. To see the feed item, the user must have sharing access to its parent. Pass the current user’s ID as the subjectId.FILES: Contains all feed items that contain files posted by people or groups that the context user follows. Pass the current user’s ID as the subjectId.GROUPS: Contains all feed items from all groups the context user either owns or is a member of. Pass the current user’s ID as the subjectId.NEWS: Contains all updates for people the context user follows, groups the user is a member of, and files and records the user is following. Contains all updates for records whose parent is the context user. Pass the current user’s ID as the subjectId.PEOPLE: Contains all feed items posted by all people the context user follows. Pass the current user’s ID as the subjectId.RECORD: Contains all feed items whose parent is a specified record, which could be a group, user, object, file, or any other standard or custom object. When the record is a group, the feed also contains feed items that mention the group. When the record is a user, the feed contains only feed items on that user. You can get another user’s record feed. Pass the record’s ID as the subjectId.TO: Contains all feed items with mentions of the context user. Contains feed items the context user commented on and feed items created by the context user that are commented on. Pass the current user’s ID as the subjectId.TOPICS: Contains all feed items that include the specified topic. Pass the topic’s ID as the subjectId. This value is supported in Salesforce for mobile web only. Topics aren’t available in Salesforce for iOS or Salesforce for Android. |
| s1.navigateTo​FeedItemDetail | {"feedItemId" : "001XXXXXXXXXXXX"} | Navigates to the specific feed item, feedItemId, and any associated comments. |
| s1.navigateTo​RelatedList | {"relatedListId" : "001XXXXXXXXXXXX", "parentRecordId" : "001XXXXXXXXXXXX" } | Navigates to a related list for the parentRecordId. For example, to display a related list for a Warehouse object, the parentRecordId is Warehouse__c.Id.relatedListId is the API name or ID of the related list to display. |
| s1.navigateTo​List | {"listViewId" : "001XXXXXXXXXXXX", "listViewName" : "myListView", "scope" : "scope"} | Navigates to the list view that’s specified by the listViewId, which is the ID of the list view to be displayed.listViewName sets the title for the list view. It doesn’t need to match the actual name that’s saved for the list view. To use the saved name, set listViewName to null.Set scope to the name of the sObject in the view, for example, “Account” or “MyObject__c”. |
| s1.create​Record | {"entityName" : "MyObject__c", "recordTypeId" : "001XXXXXXXXXXXX"} | Opens the page to create a record for the specified entityName, for example, “Account” or “MyObject__c”.recordTypeId is optional and specifies the record type for the created object. Calling createRecord without providing a recordTypeId may result in an error. |
| s1.editRecord | {"recordId" : "001XXXXXXXXXXXX"} | Opens the page to edit the record specified by recordId. |

For information about navigation methods for use with Visualforce, see the Salesforce Mobile App Developer’s Guide.

#### See Also

-   [Visualforce Considerations](atlas.en-us.platform_connect.meta/platform_connect/canvas_app_vf_considerations.htm)

-   [Canvas in the Salesforce Mobile App](atlas.en-us.platform_connect.meta/platform_connect/canvas_apps_in_salesforce1.htm)

## Related Topics

- Visualforce Considerations (atlas.en-us.platform_connect.meta/platform_connect/canvas_app_vf_considerations.htm)
- Canvas in the Salesforce Mobile App (atlas.en-us.platform_connect.meta/platform_connect/canvas_apps_in_salesforce1.htm)
