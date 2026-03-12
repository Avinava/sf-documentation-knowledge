---
title: "Standard Object Notes"
domain: change-data-capture
topic: standard-object-notes
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:09.691Z
estimatedTokens: 525
keywords: [Standard, Notes, characteristics, change, events, objects, included, event, messages]
---

# Standard Object Notes

> Learn about the characteristics of change events for some standard objects and the
    fields included in the event messages.

# Standard Object Notes

Learn about the characteristics of change events for some standard objects and the fields included in the event messages.

-   **[Change Events for Tasks and Events](atlas.en-us.change_data_capture.meta/change_data_capture/cdc_standard_objects_task_event.htm)**
    You can receive change events for single and recurring tasks and calendar events, including events with invitees.
-   **[Change Events for Person Accounts](atlas.en-us.change_data_capture.meta/change_data_capture/cdc_standard_objects_person_account.htm)**
    Because a person account record combines fields from an account and a contact, changing a person account results in two change events: one for the account and one for the contact, provided that both objects are selected for change data capture. The two change events are generated for all changes to a person account, including create, update, delete, and undelete operations.
-   **[Change Events for Users](atlas.en-us.change_data_capture.meta/change_data_capture/cdc_standard_objects_user.htm)**
    The user and email preferences in change events include only the preferences that are enabled (set to true) without their Boolean values. Preferences that are disabled (set to false) are not included in the event payload.
-   **[Change Events for Lead Conversion](atlas.en-us.change_data_capture.meta/change_data_capture/cdc_standard_objects_lead_conversion.htm)**
    Converting a lead results in the creation of an account, a contact, and optionally an opportunity, and also a lead update. When converting a lead, the change event for the lead update includes fields specific to the conversion.
-   **[Change Events for PricebookEntry](atlas.en-us.change_data_capture.meta/change_data_capture/cdc_standard_objects_pricebookentry.htm)**
    The Create Change Events payload does not include the system fields (sCreatedById, CreatedDate, LastModifiedById, and LastModifiedDate). This is due to the highly customized nature of the PricebookEntry object, which prevents these specific fields from being captured at the time the event is generated.

## Related Topics

- Change Events for Tasks and Events (atlas.en-us.change_data_capture.meta/change_data_capture/cdc_standard_objects_task_event.htm)
- Change Events for Person Accounts (atlas.en-us.change_data_capture.meta/change_data_capture/cdc_standard_objects_person_account.htm)
- Change Events for Users (atlas.en-us.change_data_capture.meta/change_data_capture/cdc_standard_objects_user.htm)
- Change Events for Lead Conversion (atlas.en-us.change_data_capture.meta/change_data_capture/cdc_standard_objects_lead_conversion.htm)
- Change Events for PricebookEntry (atlas.en-us.change_data_capture.meta/change_data_capture/cdc_standard_objects_pricebookentry.htm)
