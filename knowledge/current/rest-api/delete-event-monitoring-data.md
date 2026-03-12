---
title: "Delete Event Monitoring Data"
domain: rest-api
topic: delete-event-monitoring-data
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:35.120Z
estimatedTokens: 782
keywords: [Delete, Event, Monitoring, Data, delete, event, log, files, contain, user’s, data., Deleting, helps, comply, data, protection, privacy, regulations, controls, information]
---

# Delete Event Monitoring Data

> You can delete event log files that contain a user’s log data. Deleting log files
        helps you comply with data protection and privacy regulations and controls the information
        that others can access. You can’t delete individual rows from event logs. Instead, you must
        delete the entire log file that contains the user activity.

# Delete Event Monitoring Data

You can delete event log files that contain a user’s log data. Deleting log files helps you comply with data protection and privacy regulations and controls the information that others can access. You can’t delete individual rows from event logs. Instead, you must delete the entire log file that contains the user activity.

To delete an event log file, enable deletion in Setup, create a permission set that includes the Delete Event Monitoring Records user permission, and assign this permission set to your users. (Alternatively, you can assign the user permission to a custom profile.) Then those users can query and delete the EventLogFile record by using Query and Delete resources in REST or delete() in SOAP.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_rest)

#### Note

You can’t delete individual rows from event logs. Because event logs are stored in blob format in the database, you must delete the entire log file that contains the user activity.

1.  In Setup, in the Quick Find box, enter Event, and then select **Event Monitoring Settings**.
2.  Enable deletion of event monitoring data. This action is recorded in Setup Audit Trail.

    ![Event Monitoring Settings page showing Delete Event Monitoring data option enabled](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fapi_rest%2Fimages%2Fem_delete.png&folder=api_rest)

    The Delete Event Monitoring Records user permission is now available to assign to a permission set. (Alternatively, you can assign the user permission to a custom profile.)

3.  In Setup, in the Quick Find box, enter Permission, and then select **Permission Sets**.
4.  Create a permission set that includes the Delete Event Monitoring Records user permission, and save the permission set.
5.  In Setup, in the Quick Find box, enter users, and then select **Users**.
6.  Select the user you want to grant permission to delete event monitoring data.
7.  In the Permission Set Assignment section for this user, assign the permission set, and click **Save**. This action is recorded in Setup Audit Trail.

    Users assigned this permission set (or any custom profile that includes the Delete Event Monitoring Records user permission) can now delete event monitoring data. The next steps show you how to use the API to delete the data.

8.  To locate the logs containing the user activity that you want to delete, query the EventLogFile object. For details, see [Query Event Monitoring Data with REST](atlas.en-us.api_rest.meta/api_rest/dome_event_log_file_query.htm "Use the Query resource to retrieve field values from a record. Specify the fields you want to retrieve in the fields parameter and use the GET method of the resource.").
9.  Note the IDs of the returned logs.
10.  Use the sObject Rows resource to delete records. Specify the record ID, and use the DELETE method. For more information, see [Delete a Record](atlas.en-us.api_rest.meta/api_rest/dome_delete_record.htm "Use the *** resource to delete records. Specify the record ID and use the DELETE method of the resource to delete a record.").

## Related Topics

- Query Event Monitoring Data with
                        REST (atlas.en-us.api_rest.meta/api_rest/dome_event_log_file_query.htm)
- Delete a
				Record (atlas.en-us.api_rest.meta/api_rest/dome_delete_record.htm)
