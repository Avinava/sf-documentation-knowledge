---
title: "Change Events for Person Accounts"
domain: change-data-capture
topic: change-events-for-person-accounts
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:09.702Z
estimatedTokens: 981
keywords: [Change, Events, Person, Accounts, Because, account, record, combines, contact, changing, results, two, provided, objects, selected]
---

# Change Events for Person Accounts

> Because a person account record combines fields from an account and a contact, changing
    a person account results in two change events: one for the account and one for the contact,
    provided that both objects are selected for change data capture. The two change events are
    generated for all changes to a person account, including create, update, delete, and undelete
    operations.

# Change Events for Person Accounts

Because a person account record combines fields from an account and a contact, changing a person account results in two change events: one for the account and one for the contact, provided that both objects are selected for change data capture. The two change events are generated for all changes to a person account, including create, update, delete, and undelete operations.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=change_data_capture)

#### Note

To receive change events for person account records, enable both Account and Contact for change data capture. If only Account is selected and a person account is updated, the account change event doesn’t contain the fields that stem from the contact. Examples of such fields are PersonAssistantName, which corresponds to the contact AssistantName field, or a contact custom field. This behavior doesn’t apply when creating or undeleting a person account—the account change event contains the contact fields even if Contact isn’t selected for capture.

-   **[Creating and Undeleting a Person Account](atlas.en-us.change_data_capture.meta/change_data_capture/cdc_standard_objects_person_account_create.htm)**
    When creating or undeleting a person account, the account change event contains both account and contact fields. It contains account record fields and some fields from the contact record. The contact fields that the account change event includes are all custom contact fields and some standard contact fields, which start with the Person prefix.
-   **[Updating a Person Account](atlas.en-us.change_data_capture.meta/change_data_capture/cdc_standard_objects_person_account_update.htm)**
    When updating a person account, two change events are generated, one for the account and one for the contact, regardless which fields changed. Salesforce always updates the LastModifiedDate system field in both the account and contact even if the field updated is only in one of the underlying records.
-   **[Converting an Account](atlas.en-us.change_data_capture.meta/change_data_capture/cdc_standard_objects_person_account_convert.htm)**
    If a person account is converted to a business account through the API by modifying the record type ID, a change event for the account is generated. This change event contains the new record type ID of the account.
-   **[Deleting a Person Account](atlas.en-us.change_data_capture.meta/change_data_capture/cdc_standard_objects_person_account_delete.htm)**
    When deleting a person account, two change events are generated: one for the deleted account and one for the deleted contact. The change events don’t contain record fields. They contain only event header fields.

#### See Also

-   [*Salesforce Help*: Person Accounts](https://help.salesforce.com/articleView?id=account_person.htm&type=5&language=en_US "Salesforce Help: Person Accounts - HTML (New Window)")

-   [Select Objects for Change Notifications in the User Interface](atlas.en-us.change_data_capture.meta/change_data_capture/cdc_select_objects.htm "To receive notifications on the default standard channel for record changes, select the custom objects and supported standard objects that you’re interested in on the Change Data Capture page.")

-   [Select Objects for Change Notifications with Metadata API and Tooling API](atlas.en-us.change_data_capture.meta/change_data_capture/cdc_object_selections_metadata.htm "Use PlatformEventChannelMember in Metadata API or Tooling API to create or retrieve object event selections for the default standard channel or a custom channel. The default standard channel, ChangeEvents, corresponds to the selections that you configure in Setup in the Change Data Capture page. For a custom channel, the selections are set when you create the channel member. The SelectedEntity field in PlatformEventChannelMember represents a selected event.")

## Related Topics

- Creating and Undeleting a Person Account (atlas.en-us.change_data_capture.meta/change_data_capture/cdc_standard_objects_person_account_create.htm)
- Updating a Person Account (atlas.en-us.change_data_capture.meta/change_data_capture/cdc_standard_objects_person_account_update.htm)
- Converting an Account (atlas.en-us.change_data_capture.meta/change_data_capture/cdc_standard_objects_person_account_convert.htm)
- Deleting a Person Account (atlas.en-us.change_data_capture.meta/change_data_capture/cdc_standard_objects_person_account_delete.htm)
- Select Objects for Change Notifications in the User Interface (atlas.en-us.change_data_capture.meta/change_data_capture/cdc_select_objects.htm)
- Select Objects for Change Notifications with Metadata API and Tooling API (atlas.en-us.change_data_capture.meta/change_data_capture/cdc_object_selections_metadata.htm)
