---
title: "Use the CalendarService API"
domain: mobile-offline
topic: use-the-calendarservice-api
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:56.919Z
estimatedTokens: 1491
keywords: [CalendarService, API, develop, Lightning, web, component, calendar-based, features, accessing, device’s, native, calendar, functionality, Add, Test]
---

# Use the CalendarService API

> To develop a Lightning web component with calendar-based features, use the
  CalendarService API as your method for accessing a device’s native calendar functionality.

# Use the CalendarService API

To develop a Lightning web component with calendar-based features, use the CalendarService API as your method for accessing a device’s native calendar functionality.

1.  Import CalendarService into your component definition to make the CalendarService API functions available to your code.
2.  Test to make sure CalendarService is available before you call calendar-related functions.
3.  Use the calendar functions to create, read, update, and delete calendar events.

## Add CalendarService to a Lightning Web Component

In your component’s JavaScript file, import CalendarService using the standard JavaScript import statement. Specifically, import the getCalendarService() factory function from the lightning/mobileCapabilities module, like so:

```

```

After it’s imported into your component, use the factory function to get an instance of CalendarService. With your CalendarService instance, use the utility functions and constants to verify availability. Then use calendar-related functions to perform the associated functionality.

## Test CalendarService Availability

CalendarService depends on physical device hardware and platform features. A component that uses CalendarService renders without errors on a desktop computer or in a mobile browser, but calendar-related functions fail. To avoid these errors, test if CalendarService functionality is available before you use it.

```

```

## Get Calendars

It’s simple to import device calendars into your Lightning web component using CalendarService. First, use getCalendars() to enable access within your component to available device calendars. Then, process the calendar data in whatever manner you wish.

For example:

```

```

## Get Events

Fetch all calendar events within a specified date range with the getEvents() function. First, call the getEvents() function with the necessary parameters. Then, process or display event data in whatever manner you wish.

For example, if your calendar component has a “week view” and a “month view,” the startDateSecondsUTC and endDateSecondsUTC parameters need to be adjusted to capture the appropriate date range to be displayed. If you don’t want to display events from all mobile device calendars, specify the ones you want to work with in the calendars\[\] array.

For example:

```

```

## Create a Calendar Event

Create and add new calendar events to a mobile device with the addEvent() function. First, call the addEvent() function with the necessary parameters. Then, handle a successful outcome with a success message, or in any manner you wish. For more information on what the addEvent() function returns, see [Implicit Data Coercion](#implicitDataCoercion).

For example:

```

```

## Update a Calendar Event

Update calendar events on a mobile device with the updateEvent() function. First, call the updateEvent() function with the necessary parameters. Then, handle a successful outcome with a success message, or in any manner you wish. For more information on what the updateEvent() function returns, see [Implicit Data Coercion](#implicitDataCoercion).

For example:

```

```

![Warning](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_warning.png&folder=mobile_offline)

#### Warning

Using updateEvent() is an inherently dangerous action, as it allows event data to be irreversibly altered. Use caution when using this functionality in your component. At an absolute minimum, consider adding a confirmation window for your users that clearly states the outcome of the action, with an option for them to cancel if they wish.

## Remove a Calendar Event

Remove calendar events on a mobile device with the removeEvent() function. First, call the removeEvent() function with the necessary parameters. Then, handle a successful outcome with a success message, or in any manner you wish.

For example:

```

```

![Warning](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_warning.png&folder=mobile_offline)

#### Warning

Using removeEvent() is an inherently dangerous action, as it allows event data to be irreversibly altered. Use caution when using this functionality in your component. At an absolute minimum, consider adding a confirmation window for your users that clearly states the outcome of the action, with an option for them to cancel if they wish.

## Implicit Data Coercion

When passing in event data to a CalendarService function (namely the addEvent() and updateEvent() functions), CalendarService can change some event data before returning it. This behavior, referred to here as implicit data coercion, occurs when CalendarService adjusts the value of a property as a result of a user’s change of another property.

For example, if a new all-day event is added (or if an existing event is updated to be all-day) and a start time or end time is specified, CalendarService rejects the times. Instead, the start time is set to 00:00:00 (12:00:00 AM) and the end time to 23:59:59 (11:59:59 PM).

Implicit data coercion can also occur when changing details of recurring events. Any time recurring events are changed, their old IDs are overwritten and replaced with newly generated IDs.

Keep this in mind when using the addEvent() and updateEvent() functions. Your code should always use the coerced event data returned by CalendarService. Using raw (uncoerced) event data in your component can lead to errors and incorrect behavior.

#### See Also

-   [*Lightning Web Components Developer Guide:* CalendarService API](https://developer.salesforce.com/docs/platform/lwc/guide/reference-lightning-calendarservice.html "Lightning Web Components Developer Guide: CalendarService API - HTML (New Window)")

-   [CalendarService Example](atlas.en-us.mobile_offline.meta/mobile_offline/use_calendarservice_example.htm "Here’s a basic example of a Lightning web component that displays calendar events and allows the user to perform basic calendar-related functions.")

## Code Examples

```
import { getCalendarService } from 'lightning/mobileCapabilities';
```

```
handleManageCalendarEventsClick(event) {
   const myCalendarService = getCalendarService();
   if(myCalendarService.isAvailable()) {
     // Perform calendar-related operations
   }
   else {
     // CalendarService not available, or consuming app hasn’t implemented it 
     // Not running on hardware with a native calendar application, etc.
     // Handle with message, error, beep, and so on
   }
 }
```

```
// Get access to device calendars and process them
myCalendarService.getCalendars(options)
  .then((results) => {
    // do something with the calendar(s) data
    this.calendars = results;
    console.log(results);
  })
  .catch((error) => {
    // Handle cancellation or other errors here
    this.calendars = [];
    console.error('Error code: ' + error.code); +
    console.error('Error message: ' + error.message);
  });
```

```
// Get events from a specified date range on the specified calendar(s), and process them
myCalendarService.getEvents(startDateSecondsUTC, endDateSecondsUTC, calendars, options)
  .then((results) => {
    // Do something with the event(s) data
    this.events = results;
    console.log(results);
  })
  .catch((error) => {
    // Handle errors here
    this.events = [];
    console.error('Error code: ' + error.code); +
    console.error('Error message: ' + error.message);
  });
```

```
// Add an event to a mobile device calendar, and then handle a success
myCalendarService.addEvent(event, options)
  .then((results) => {
    // Do something with the event(s) data
    this.newEvent = results;
    console.log(results);
  })
  .catch((error) => {
    // Handle cancellation or other errors here
    console.error('Error code: ' + error.code); +
    console.error('Error message: ' + error.message);
  });
```

## Related Topics

- CalendarService Example (atlas.en-us.mobile_offline.meta/mobile_offline/use_calendarservice_example.htm)
