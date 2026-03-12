---
title: "CalendarService Example"
domain: mobile-offline
topic: calendarservice-example
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:56.911Z
estimatedTokens: 262
keywords: [CalendarService, Here’s, basic, Lightning, web, component, displays, calendar, events, user, perform, calendar-related, functions]
---

# CalendarService Example

> Here’s a basic example of a Lightning web component that displays calendar events and
  allows the user to perform basic calendar-related functions.

# CalendarService Example

Here’s a basic example of a Lightning web component that displays calendar events and allows the user to perform basic calendar-related functions.

The component’s HTML template is minimal, with a “main” display view that lists calendar events and a “detail” display view that shows an event’s details.

```

```

This example simply uses CalendarService to display events, and allows you to perform simple actions on calendar items. A status message is returned when there’s an error. In this example, the events are hard-coded, rather than fetched via API calls from a Salesforce org. You’ll need to build functionality to fetch event data from your Salesforce org as part of your component.

```

```

#### See Also

-   [Use the CalendarService API](atlas.en-us.mobile_offline.meta/mobile_offline/use_calendarservice_in_a_lightning_component.htm "To develop a Lightning web component with calendar-based features, use the CalendarService API as your method for accessing a device’s native calendar functionality.")

## Code Examples

```
<template>
     <!-- Main View -->
     <template if:false={detailViewIsOpen}>
         <lightning-card title="Today's Events" icon-name="utility:dayview">
             <template for:each={todayEvents} for:item="item">
                 <div class="slds-var-p-horizontal_medium slds-var-p-vertical_x-small" key={item.id} onclick={showDetailView} data-id={item.id}>
                     <p class="slds-text-heading_small"><b>{item.title}</b></p>
                     <p class="slds-text-heading_small">{item.startTimeDisplay} — {item.endTimeDisplay}</p>
                 </div>
             </template>
         </lightning-card>
     </template>
         
         <!-- Detail View -->
     <template if:true={detailViewIsOpen}>
         <div class="slds-var-p-around_medium" style="background-color: white; border-radius: 4px;">
             <table>
                 <tbody>
                     <tr>
                         <td class="slds-align-top" width="1">
                             <lightning-icon icon-name="utility:chevronleft" onclick={hideDetailView}></lightning-icon>
                         </td>
                         <td class="sldx-align-top slds-text-heading_medium slds-var-p-bottom_medium slds-align_absolute-center">Event Details</td>
                         <td class="slds-align-top" width="1">
                             <lightning-button-menu alternative-text="Show menu" variant="border-filled" menu-alignment="auto">
                                 <lightning-menu-item prefix-icon-name="utility:add" value="Add" label="Add to Device Calendar" onclick={addCalendarEvent}></lightning-menu-item>
                                 <lightning-menu-item prefix-icon-name="utility:edit" value="Update" label="Update in Device Calendar" onclick={updateCalendarEvent}></lightning-menu-item>
                                 <lightning-menu-item prefix-icon-name="utility:delete" value="Delete" label="Remove from Device Calendar" onclick={deleteCalendarEvent}></lightning-menu-item>
                             </lightning-button-menu>
                         </td>
                     </tr>
                     <tr>
                         <td colspan="3">
                             <ul class="slds-has-dividers_bottom-space">
                                 <li class="slds-item">
                                     <span class="slds-text-heading_small"><b>{selectedItem.title}</b></span><br>
                                     <span class="slds-text-heading_small">{selectedItem.startTimeDisplay} — {selectedItem.endTimeDisplay}</span>
                                 </li>
                                 <li class="slds-item">
                                     <span class="slds-text-heading_small">Reminders</span><br>
                                         <template for:each={selectedItem.alarmsDisplay} for:item="alarm">
                                             <span class="slds-text-body_regular" key={alarm}>{alarm}<br></span>
                                         </template>
                                 </li>
                                 <li class="slds-item">
                                     <span class="slds-text-heading_small">Location</span><br>
                                     <span class="slds-text-body_regular">{selectedItem.location}</span>
                                 </li>
                                 <li class="slds-item">
                                     <span class="slds-text-heading_small">Attendees</span><br>
                                         <template for:each={selectedItem.attendees} for:item="attendee">
                                             <span class="slds-text-body_regular" key={attendee.name}>{attendee.name} ({attendee.email})<br></span>
                                         </template>
                                 </li>
                                 <li class="slds-item">
                                     <span class="slds-text-heading_small">Notes</span><br>
                                     <span class="slds-text-body_regular">{selectedItem.notes}</span>
                                 </li>
                             </ul>
                         </td>
                     </tr>
                 </tbody>
             </table>
             </div>
         </template>
     </template>
```

```
import { api, LightningElement } from 'lwc';
import { getCalendarService } from 'lightning/mobileCapabilities';
import LightningAlert from 'lightning/alert'
import LightningConfirm from 'lightning/confirm';

export default class CalendarForToday extends LightningElement {

    todayEvents = [];
    detailViewIsOpen = false;
    selectedItem = null;
    selectedItemIndex = -1;
    calendarPermissionRationaleText = "Allow access to your calendar to enable calendar event processing.";
    calendarService;

    connectedCallback() {
        console.log("Start connected callback");

        try {
            this.calendarService = getCalendarService();
            this.todayEvents = this.getTodayEvents();
            this.todayEvents.forEach(item => this.generateDisplayFields(item));
            console.log(`End connected callback with ${this.todayEvents.length} events for today.`);
        } catch (err) {
            console.log(`connectedCallback failed with error: ${err}`);
        }
    }

    showDetailView(event) {
        const id = event.currentTarget.dataset.id;
        this.selectedItemIndex = this.todayEvents.findIndex(item => item.id === id);
        if (this.selectedItemIndex != -1) {
            this.selectedItem = this.todayEvents[this.selectedItemIndex];
        } else {
            this.selectedItem = null;
        }
        this.detailViewIsOpen = this.selectedItem != null;
    }

    hideDetailView() {
        this.detailViewIsOpen = false;
        this.selectedItem = null;
        this.selectedItemIndex = -1;
    }

    addCalendarEvent() {
        if (this.calendarService.isAvailable() && this.selectedItemIndex != -1 && this.selectedItem) {
            const options = {
                "permissionRationaleText" : this.calendarPermissionRationaleText
            };

            console.log(`options: ${JSON.stringify(options)}`);
            console.log(`Adding selectedItem: ${JSON.stringify(this.selectedItem)}`);

            this.calendarService.addEvent(this.selectedItem, options)
            .then((sanitizedEvent) => {
                this.generateDisplayFields(sanitizedEvent);
                this.selectedItem = sanitizedEvent;
                this.todayEvents[this.selectedItemIndex] = sanitizedEvent;
                this.showSuccessAlert("Add Event", "Event was added successfully to the device default calendar.");
                console.log(`sanitizedEvent: ${JSON.stringify(sanitizedEvent)}`);
            })
            .catch((error) => {
                console.error(error);
                this.showFailureAlert("Add Event", `There was a problem adding the event to the device default calendar: ${error.message}`);
            });
        } else {
            console.log("Calendar Service Is Not Available");
            this.showFailureAlert("Add Event", "Calendar Service is not available.");
        }
    }

    updateCalendarEvent() {
        if (this.calendarService.isAvailable() && this.selectedItemIndex != -1 && this.selectedItem) {

            // For this sample code, we've hard-coded some trivial changes

            this.selectedItem.title += " - Updated";
            this.selectedItem.notes += " - Updated";

            const options = {
                "permissionRationaleText" : this.calendarPermissionRationaleText,
                "span" : "ThisEvent"
            };

            console.log(`options: ${JSON.stringify(options)}`);
            console.log(`Updating selectedItem: ${JSON.stringify(this.selectedItem)}`);

            this.calendarService.updateEvent(this.selectedItem, options)
            .then((sanitizedEvent) => {
                this.generateDisplayFields(sanitizedEvent);
                this.selectedItem = sanitizedEvent;
                this.todayEvents[this.selectedItemIndex] = sanitizedEvent;
                this.showSuccessAlert("Update Event", "Event was updated successfully in the device default calendar.");
                console.log(`sanitizedEvent: ${JSON.stringify(sanitizedEvent)}`);
            })
            .catch((error) => {
                console.error(error);
                this.showFailureAlert("Update Event", `There was a problem updating the event in the device default calendar: ${error.message}`);
            });
        } else {
            console.log("Calendar Service Is Not Available");
            this.showFailureAlert("Update Event", "Calendar Service is not available.");
        }
    }

    deleteCalendarEvent() {
        if (this.calendarService.isAvailable() && this.selectedItemIndex != -1 && this.selectedItem) {
            LightningConfirm.open(
                {
                    label: "Delete Event",
                    message: "Are you sure you want to delete this event?",
                    theme: "warning"
                }
            ).then((response) => {
                if (response === true) {
                    const options = {
                        "permissionRationaleText" : this.calendarPermissionRationaleText,
                        "span" : "ThisEvent"
                    };

                    console.log(`options: ${JSON.stringify(options)}`);
                    console.log(`Deleting selectedItem: ${JSON.stringify(this.selectedItem)}`);

                    this.calendarService.removeEvent(this.selectedItem, options)
                    .then(() => {
                        this.todayEvents.splice(this.selectedItemIndex, 1);
                        this.hideDetailView();
                        this.showSuccessAlert("Delete Event", "Event was removed successfully from the device default calendar.");
                    })
                    .catch((error) => {
                        console.error(error);
                        this.showFailureAlert("Delete Event", `There was a problem removing the event from the device default calendar: ${error.message}`);
                    });
                }
            });
        } else {
            console.log("Calendar Service Is Not Available");
            this.showFailureAlert("Delete Event", "Calendar Service is not available.");
        }
    }

    getTodayEvents() {
        // For this sample code, we've hard-coded some made-up values.
        // Your component should fetch events from your SF org and convert them to the following object format.
        const events = [
            {
                id: "event_id_1", // will be overwritten after a call to calendarService.addEvent()
                isAllDay: false,
                startDateSecondsUTC: this.getTodayTimestampAtTimeOfDay(8, 0, 0), // 8 AM
                endDateSecondsUTC: this.getTodayTimestampAtTimeOfDay(10, 0, 0), // 10 AM
                availability: "Busy",
                status: "Confirmed",
                calendarId: null, // will be assigned to the default device calendar
                title: "Team Meeting",
                location: "3514 Ruckman Road, San Francisco, CA 94105",
                notes: "Discussing customer request for new calendar feature",
                alarms: [{relativeOffsetSeconds: 600}], // 10 mins before event
                attendees: [
                    { name: "Jamal Booker", email: "jbooker_fake_email@email.com", role: "Required", status: "Accepted" },
                    { name: "Robert Bullard", email: "bob.bullard.fake.email@email.com", role: "Required", status: "Pending" },
                    { name: "Gordon Chu", email: "gordonchu736251_email@email.com", role: "Optional", status: "Declined" },
                ],
                recurrenceRules: null
            },
            {
                id: "event_id_2", // will be overwritten after a call to calendarService.addEvent()
                isAllDay: false,
                startDateSecondsUTC: this.getTodayTimestampAtTimeOfDay(10, 30, 0), // 10:30 AM
                endDateSecondsUTC: this.getTodayTimestampAtTimeOfDay(11, 0, 0), // 11 AM
                availability: "Busy",
                status: "Confirmed",
                calendarId: null, // will be assigned to the default device calendar
                title: "Quarterly Review",
                location: "2135 Alpha Avenue, Fernandina Beach, FL 32034",
                notes: "Reviewing results of Q2 and planning Q3",
                alarms: [{relativeOffsetSeconds: 1800}], // 30 mins before event
                attendees: [
                    { name: "Alex Driskel", email: "adriskell_fake_email@email.com", role: "Required", status: "Accepted" },
                    { name: "Kim Friedman", email: "nothing_is_kimpossible_fake_email@email.com", role: "Required", status: "Tentative" },
                    { name: "April Guthman", email: "guthman.april.fake@email.com", role: "Required", status: "Pending" },
                    { name: "Leif Hansen", email: "leifhansenfakeemail@email.com", role: "Required", status: "Accepted" },
                ],
                recurrenceRules: null
            },
            {
                id: "event_id_3", // will be overwritten after a call to calendarService.addEvent()
                isAllDay: false,
                startDateSecondsUTC: this.getTodayTimestampAtTimeOfDay(11, 0, 0), // 11 AM
                endDateSecondsUTC: this.getTodayTimestampAtTimeOfDay(12, 0, 0), // 12 PM
                availability: "Busy",
                status: "Confirmed",
                calendarId: null, // will be assigned to the default device calendar
                title: "Portfolio Checklist",
                location: "2281 Radford Street, Louisville, KY 40291",
                notes: "Creating a guide to help sales in compiling a strong portfolio",
                alarms: [{relativeOffsetSeconds: 600}], // 10 mins before event
                attendees: [
                    { name: "Marie Hill", email: "marieriefake@email.com", role: "Required", status: "Accepted" },
                    { name: "Foua Khang", email: "khanghangemail@email.com", role: "Required", status: "Accepted" },
                    { name: "Mindy Lee", email: "mindyfakeemaillee@email.com", role: "Required", status: "Accepted" },
                ],
                recurrenceRules: null
            },
            {
                id: "event_id_4", // will be overwritten after a call to calendarService.addEvent()
                isAllDay: false,
                startDateSecondsUTC: this.getTodayTimestampAtTimeOfDay(12, 30, 0), // 12:30 PM
                endDateSecondsUTC: this.getTodayTimestampAtTimeOfDay(13, 30, 0), // 1:30 PM
                availability: "Tentative",
                status: "Tentative",
                calendarId: null, // will be assigned to the default device calendar
                title: "Lunch with Jennifer West",
                location: "171 2nd St, San Francisco, CA 94105",
                notes: "Bring latest version of contract",
                alarms: [{relativeOffsetSeconds: 1800}], // 30 mins before event
                attendees: [
                    { name: "Awanasa Locklear", email: "this_is_awanasa_fake@email.com", role: "Required", status: "Tentative" },
                    { name: "Elena Nieto", email: "elenasfakeemail@email.com", role: "Required", status: "Tentative" },
                ],
                recurrenceRules: null
            },
            {
                id: "event_id_5", // will be overwritten after a call to calendarService.addEvent()
                isAllDay: false,
                startDateSecondsUTC: this.getTodayTimestampAtTimeOfDay(14, 30, 0), // 2:30 PM
                endDateSecondsUTC: this.getTodayTimestampAtTimeOfDay(15, 30, 0), // 3:30 PM
                availability: "Tentative",
                status: "Tentative",
                calendarId: null, // will be assigned to the default device calendar
                title: "Sales Workgroup",
                location: "3270 Armbrester Drive, Gardena, CA 90248",
                notes: "Discuss the new customer opportunities",
                alarms: [{relativeOffsetSeconds: 1800}], // 30 mins before event
                attendees: [
                    { name: "Raul Nieto", email: "raul.fake.nieto@email.com", role: "Required", status: "Accepted" },
                    { name: "Salome Ofodu", email: "salomesalomefakeemail@email.com", role: "Required", status: "Tentative" },
                    { name: "Justus Pardo", email: "justuspardofake@email.com", role: "Required", status: "Tentative" },
                    { name: "Gorav Patel", email: "gpatel.fake.email@email.com", role: "Required", status: "Pending" },
                ],
                recurrenceRules: null
            },
            {
                id: "event_id_6", // will be overwritten after a call to calendarService.addEvent()
                isAllDay: false,
                startDateSecondsUTC: this.getTodayTimestampAtTimeOfDay(15, 30, 0), // 3:30 PM
                endDateSecondsUTC: this.getTodayTimestampAtTimeOfDay(17, 30, 0), // 5:30 PM
                availability: "Busy",
                status: "Confirmed",
                calendarId: null, // will be assigned to the default device calendar
                title: "Executive Team",
                location: "56 Main Street, Seattle, WA 98119",
                notes: "Report on Q2 sales and new leads",
                alarms: [{relativeOffsetSeconds: 600}, {relativeOffsetSeconds: 3600}], // 10 mins and 1 hour before event
                attendees: [
                    { name: "Florentina Perez", email: "florperfakeemail@email.com", role: "Required", status: "Accepted" },
                    { name: "Harryette Randall", email: "doubleletteremailfake@email.com", role: "Required", status: "Accepted" },
                    { name: "Sofia Rivera", email: "fakeemailforsofie@email.com", role: "Required", status: "Accepted" },
                ],
                recurrenceRules: null
            }
        ];

        return events;
    }

    getTodayTimestampAtTimeOfDay(hours, minutes, seconds) {
        let d = new Date();
        d.setHours(hours, minutes, seconds, 0);
        return d.getTime() / 1000; // milliseconds to seconds
    }

    timeOfDayToString(dateSecondsUTC) {
        let d = new Date(dateSecondsUTC * 1000); // seconds to milliseconds
        let ampm = "AM";
        let str = "";

        if (d.getHours() > 12) {
            ampm = "PM";
            str += `${d.getHours() - 12}`;
        } else {
            str += `${d.getHours()}`;
        }

        if (d.getMinutes() > 0) {
            if (d.getMinutes() < 10) {
                str += `:0${d.getMinutes()}`;
            } else {
                str += `:${d.getMinutes()}`;
            }
        }

        str += ` ${ampm}`;

        return str;
    }

    alarmsToString(alarms) {
        let results = [];

        if (alarms) {
            alarms.forEach(alarm => {
                if (alarm.relativeOffsetSeconds == 0) {
                    results.push("At time of event");
                } else {
                    const mins = parseInt(Math.ceil(Math.abs(alarm.relativeOffsetSeconds) / 60.0));
                    if (mins == 1) {
                        results.push("1 minute before");
                    } else if (mins < 60) {
                        results.push(`${mins} minutes before`);
                    } else {
                        const hours = parseInt(Math.ceil(mins / 60.0));
                        if (hours == 1) {
                            results.push("1 hour before");
                        } else if (hours < 24) {
                            results.push(`${hours} hours before`);
                        } else {
                            const days = parseInt(Math.ceil(hours / 24.0));
                            if (days == 1) {
                                results.push("1 day before");
                            } else {
                                results.push(`${days} days before`);
                            }
                        }
                    }
                }
            });
        } else {
            results.push("None");
        }

        return results;
    }

    generateDisplayFields(calendarEvent) {
        // these are used for display purpose only
        calendarEvent.startTimeDisplay = this.timeOfDayToString(calendarEvent.startDateSecondsUTC);
        calendarEvent.endTimeDisplay = this.timeOfDayToString(calendarEvent.endDateSecondsUTC);
        calendarEvent.alarmsDisplay = this.alarmsToString(calendarEvent.alarms);
    }

    showSuccessAlert(title, message) {
        LightningAlert.open(
            {
                message: message,
                theme: "success",
                label: title,
            }
        );
    }

    showFailureAlert(title, message) {
        console.log(`calendarService.isAvailable(): ${this.calendarService.isAvailable()}`);
        console.log(`selectedItemIndex: ${this.selectedItemIndex}`);
        console.log(`selectedItem: ${this.selectedItem.id}`);
        
        LightningAlert.open(
            {
                message: message,
                theme: "error", // a red theme intended for error states
                label: title,
            }
        );
    }
}
```

## Related Topics

- Use the CalendarService API (atlas.en-us.mobile_offline.meta/mobile_offline/use_calendarservice_in_a_lightning_component.htm)
