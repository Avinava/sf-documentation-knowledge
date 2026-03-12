---
title: "Fundraising Invocable Actions"
domain: nonprofit-cloud
topic: fundraising-invocable-actions
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:01.110Z
estimatedTokens: 844
keywords: [Fundraising, Invocable, Actions, add, functionality, applications, Choose, standard, processing, gift, entries, processed, manage, designations, transaction]
---

# Fundraising Invocable Actions

> Use actions to add more functionality to your applications. Choose from standard
    actions, such as processing gift entries, update processed gift entries, manage gift default
    designations, and manage gift transaction designations.

# Fundraising Invocable Actions

Use actions to add more functionality to your applications. Choose from standard actions, such as processing gift entries, update processed gift entries, manage gift default designations, and manage gift transaction designations.

To know more about invocable actions, see [Actions Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_action.meta/api_action/actions_intro.htm "HTML (New Window)") and [REST API Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/resources_actions_invocable_standard.htm "HTML (New Window)").

-   **[Close Gift Commitment Action](atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/actions_obj_close_gift_commitment.htm)**
    Updates the status of a gift commitment to closed and updates the status for each of its unpaid and failed gift transactions.
-   **[Manage Custom Gift Commitment Schedules Action](atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/actions_obj_manage_custom_gift_cmt_schedule.htm)**
    Creates or updates up to 15 custom gift commitment schedule records and their associated gift transaction records.
-   **[Manage Gift Default Designations Action](atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/actions_obj_manage_gift_default_designations.htm)**
    Creates and manages Gift Default Designation records for a gift entry associated with a campaign, opportunity, or gift commitment.
-   **[Manage Gift Transaction Designations Action](atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/actions_obj_manage_gift_trxn_designations.htm)**
    Creates and manages Gift Transaction Designation records for a gift transaction.
-   **[Manage Recurring Gift Commitment Schedule Action](atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/actions_obj_manage_recurring_gift_cmt_schedule.htm)**
    Creates or updates a recurring type of gift commitment schedule record and creates the first upcoming gift commitment transaction record.
-   **[Process Gift Entries Action](atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/actions_obj_process_gift_entries.htm)**
    Processes, singly or as part of a batch, a specified gift entry ID, creating related donor, gift transaction, gift transaction designation, and gift soft credit records. You may also test gift entry processing to check for errors before creating related records.
-   **[Pause Gift Commitment Schedule Action](atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/actions_obj_pause_gift_commitment_schedule.htm)**
    Pauses a gift commitment schedule for a specified period of time.
-   **[Process Gift Commitment Action](atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/actions_obj_process_gift_commitment.htm)**
    Updates the status and other relevant fields for a gift commitment based on the statuses of the associated gift transactions and the current gift commitment schedule.
-   **[Resume Gift Commitment Schedule Action](atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/actions_obj_resume_gift_commitment_schedule.htm)**
    Resumes a paused gift commitment schedule on a specified date.
-   **[Update Processed Gift Entries Action](atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/actions_obj_update_gift_entries.htm)**
    Updates the status of a specified gift entry record that is already processed. If the processing fails, the failure reason is updated.

## Related Topics

- Close Gift Commitment Action (atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/actions_obj_close_gift_commitment.htm)
- Manage Custom Gift Commitment Schedules Action (atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/actions_obj_manage_custom_gift_cmt_schedule.htm)
- Manage Gift Default Designations Action (atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/actions_obj_manage_gift_default_designations.htm)
- Manage Gift Transaction Designations Action (atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/actions_obj_manage_gift_trxn_designations.htm)
- Manage Recurring Gift Commitment Schedule Action (atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/actions_obj_manage_recurring_gift_cmt_schedule.htm)
- Process Gift Entries Action (atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/actions_obj_process_gift_entries.htm)
- Pause Gift Commitment Schedule Action (atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/actions_obj_pause_gift_commitment_schedule.htm)
- Process Gift Commitment Action (atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/actions_obj_process_gift_commitment.htm)
- Resume Gift Commitment Schedule Action (atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/actions_obj_resume_gift_commitment_schedule.htm)
- Update Processed Gift Entries Action (atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/actions_obj_update_gift_entries.htm)
