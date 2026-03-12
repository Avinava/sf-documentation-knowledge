---
title: "Add Objects to Change Data Capture for External Routing"
domain: omni-channel-dev
topic: add-objects-to-change-data-capture-for-external-routing
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:19.951Z
estimatedTokens: 862
keywords: [Add, Objects, Change, Data, Capture, External, Routing, enable, Omni-Channel, configure, CDC, publish, event, notifications, core]
---

# Add Objects to Change Data Capture for External Routing

> To enable external routing with Omni-Channel, configure Change Data Capture (CDC) to
  publish event notifications for core Service Cloud objects.

# Add Objects to Change Data Capture for External Routing

To enable external routing with Omni-Channel, configure Change Data Capture (CDC) to publish event notifications for core Service Cloud objects.

To add objects to CDC:

-   From Setup, in the Quick Find box, enter Change Data Capture, and then select **Change Data Capture**.
-   In the **Available Entities** list, select these objects to set up external routing with Omni-Channel.
    -   PendingServiceRouting: Routing details for a work item awaiting routing or assignment.
    -   AgentWork: Work assignment routed to a rep.
    -   UserServicePresence: A presence user’s real-time presence status.
-   Move the selected objects to the **Selected Entities** list.

You can select up to five entities, including standard and custom objects. To enable more entities, contact your Salesforce Account Representative to purchase an add-on license.

The partner routing application must monitor the following event types for the PendingServiceRouting record:

-   Creating the Pending Service Record (PSR) prompts the partner routing application to search for a rep.
-   Update event notifications signal a change in record status. The partner routing application can check for updates that indicate the IsPushed value has changed.
    -   If the IsPushed value changes to true, an AgentWork record was created for the PSR.
    -   If the IsPushed value changes to false, the work was declined and must be assigned to another rep.
-   A Delete event notification indicates that the work was accepted by a rep or that the reason for creating the work was removed. For example, the customer hung up the phone or ended a conversation. Upon receiving the Delete event notification, stop tracking the PSR and remove it from the system.

The partner routing application must monitor the following event types for the UserServicePresence record:

-   Tracking the creation of this record allows the partner routing application to track the status of each rep.
-   An Update event notification showing the IsCurrentState updated to false indicates the rep has changed their status or has gone offline.
    -   If the rep has changed their status, a Create record event notification is generated immediately after the Update event notification
    -   If the rep has logged out, no Create record event notification is generated following the Update event notification

The partner routing application must monitor the following event types for the AgentWork record:

-   The external routing system creates the AgentWork record when a work item is routed to a rep. The notification can be treated as a success message.
-   The external routing system must track Update event notifications, focusing on changes to the Status fields to monitor whether a rep accepts or declines a work item.
    -   Work items are created in the Assigned status.
    -   The status changes to Opened after the work is accepted.
    -   An update indicating the Unavailable status means a rep went offline while they had Assigned work items. A new rep needs to be assigned to the work items.
    -   An update indicating the Declined or DeclinedOnPushTimeout status means the rep has declined the work. A new rep needs to be assigned to the work items.
    -   All other statuses indicate that the work was completed or is no longer needed. The rep's capacity can be freed up and new work can be assigned to the rep.
