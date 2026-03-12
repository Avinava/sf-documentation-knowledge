---
title: "Add an Apex Trigger"
domain: change-data-capture
topic: add-an-apex-trigger
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:09.476Z
estimatedTokens: 584
keywords: [Add, Apex, Trigger, quick, start, adds, simple, change, event, how, access, record, message]
---

# Add an Apex Trigger

> The quick start adds a simple change event trigger that shows how to access header
        and record fields in a change event message.

# Add an Apex Trigger

The quick start adds a simple change event trigger that shows how to access header and record fields in a change event message.

Before you add and test the trigger, set up debug logging for the Automated Process entity and enable Account for Change Data Capture. See [Prerequisites](atlas.en-us.change_data_capture.meta/change_data_capture/cdc_apex_triggers_prereqs.htm "Before subscribing to change events with an Apex trigger, set up debug logs and select the Account object for notifications.").

1.  In the Developer Console, select **File** | **New** | **Apex Trigger**.
2.  In the Name field, enter a name for the trigger: MyAccountChangeTrigger.
3.  From the dropdown, select the change event object for Account: **AccountChangeEvent**.

    The trigger is created with the after insert keyword.

4.  Replace the default content of the trigger with the following code.

    ```

    ```

    This simple trigger writes header and field values to the debug log for each received change event message. The trigger uses the changedFields header field to determine which fields changed in an update operation. The trigger also creates a follow-up task for new accounts.

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=change_data_capture)

    #### Note

    The changedFields property is available in Apex saved using API version 47.0 or later.

5.  To test the trigger, create an account with a name and phone.
6.  Edit the account, change the name, delete the phone value, and save the record.
7.  In Setup, enter Debug Logs in the Quick Find box, then select **Debug Logs**.
8.  To view the debug logs corresponding to the record creation, click the second log in the list (logs are ordered by most recent first). The output of the System.debug statements looks similar to the following.

    ```

    ```

9.  To view the debug logs corresponding to the record update, click the first log in the list. The output of the System.debug statements looks similar to the following. The account name’s new value is listed. The phone field’s value was deleted, and its value was set to null. Also, because the system updates the LastModifiedDate field when the record is updated, this field is listed in the changedFields field and is part of the debug output.

    ```

    ```

## Code Examples

```apex
trigger MyAccountChangeTrigger on AccountChangeEvent (after insert) {
    List<Task> tasks = new List<Task>();
    
    // Iterate through each event message.
    for (AccountChangeEvent event : Trigger.New) {
        // Get some event header fields
        EventBus.ChangeEventHeader header = event.ChangeEventHeader;
        System.debug('Received change event for ' + header.entityName +
                    ' for the ' + header.changeType + ' operation.');         

        // Get account record fields
        System.debug('Account Name: ' + event.Name);
        System.debug('Account Phone: ' + event.Phone);
        
        // Create a followup task
        if (header.changetype == 'CREATE') {
            Task tk = new Task();
            tk.Subject = 'Follow up on new account for record or group of records: ' +
              header.recordIds;
            // Explicitly set the task owner ID to a valid user ID so that
            // it is not Automated Process.
            // For simplicity, we set it to the CommitUser header field, 
            // which is available for all operations. 
            tk.OwnerId = header.CommitUser; 
            tasks.add(tk);
        }        
        else if ((header.changetype == 'UPDATE')) {
            // For update operations, iterate over the list of changed fields
            System.debug('Iterate over the list of changed fields.'); 
            for (String field : header.changedFields) {
                if (null == event.get(field)) {
                    System.debug('Deleted field value (set to null): ' + field); 
                } else {
                    System.debug('Changed field value: ' + field + 
                        '. New Value: ' + event.get(field)); 
                }
            }
        }     
    }
    
    // Insert all tasks in bulk.
    if (tasks.size() > 0) {
        insert tasks;
    }

}
```

```
...|DEBUG|Received change event for Account for the CREATE operation.
...|DEBUG|Account Name: Quick Start Account
...|DEBUG|Account Phone: 4155551212
```

```
...|DEBUG|Received change event for Account for the UPDATE operation.
...|DEBUG|Account Name: Quick Start Account Updated
...|DEBUG|Account Phone: null
...|DEBUG|Iterate over the list of changed fields.
...|DEBUG|Changed field value: Name. New Value: Quick Start Account Updated
...|DEBUG|Deleted field value (set to null): Phone
...|DEBUG|Changed field value: LastModifiedDate. New Value: 2019-08-14 23:20:15
```

## Related Topics

- Prerequisites (atlas.en-us.change_data_capture.meta/change_data_capture/cdc_apex_triggers_prereqs.htm)
