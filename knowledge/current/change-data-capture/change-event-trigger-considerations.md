---
title: "Change Event Trigger Considerations"
domain: change-data-capture
topic: change-event-trigger-considerations
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:34:09.759Z
estimatedTokens: 404
keywords: [Change, Event, Trigger, Considerations, Keep, mind, working, events, Apex, triggers]
---

# Change Event Trigger Considerations

> Keep these considerations in mind when working with change events in Apex
  triggers.

# Change Event Trigger Considerations

Keep these considerations in mind when working with change events in Apex triggers.

Triggers for Non-Enabled Objects

You can save an Apex trigger for a change event object even if the object isn’t selected for notifications on the Change Data Capture page. When the object isn’t selected, the trigger doesn't fire. To ensure that the trigger fires, select the object for notifications. Any type of change event fires a change event trigger, including gap events and overflow events.

No Formula Field Support

Formula fields aren't supported in Change Data Capture. They’re null in a change event trigger, regardless of whether they were changed. For information on which field values aren’t included, so are null in a trigger, see [Change Event Fields](atlas.en-us.change_data_capture.meta/change_data_capture/cdc_message_structure.htm#cdc_fields_included).

Null Name Field for Person Accounts

For a person account, the Name compound field in the AccountChangeEvent received in the trigger is null. The FirstName and LastName fields, which are included in the Name field, contain the person account first name and last name values. In contrast, the ContactChangeEvent Name field contains the concatenated values of the salutation, first name, and last name.

Infinite Trigger Loop

If your trigger updates records of the same object as the one that corresponds to the received change event, then the trigger can fire recursively and exceed limits. To avoid infinite trigger recursion, ensure that you limit your updates so they don't occur every time the trigger refires.

## Related Topics

- Change Event Fields (atlas.en-us.change_data_capture.meta/change_data_capture/cdc_message_structure.htm)
