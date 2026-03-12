---
title: "Create Custom Fields"
domain: securityImplGuide
topic: create-custom-fields
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:44.562Z
estimatedTokens: 2171
keywords: [Custom, Capture, unique, business, data, storing, configure, want, appear, optionally, control, security, level]
---

# Create Custom Fields

> Capture your unique business data by storing it in custom fields. When you create a
    custom field, you configure where you want it to appear and optionally control security at the
    field level.

# Create Custom Fields

Capture your unique business data by storing it in custom fields. When you create a custom field, you configure where you want it to appear and optionally control security at the field level.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=securityImplGuide)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

| Available in: both Salesforce Classic (not available in all orgs) and Lightning Experience |
| --- |
| Available in: Contact Manager, Group, Essentials, Starter, Professional, Enterprise, Performance, Unlimited, Developer, and Database.com EditionsSalesforce Connect external objects are available in: Developer Edition and for an extra cost in: Enterprise, Performance, and Unlimited EditionsCustom fields aren't available on Activities in Group EditionCustom settings aren't available in Professional EditionLayouts aren't available in Database.com |


| User Permissions Needed |
| --- |
| To create or change custom fields: | Customize Application |
| To add field-level security to profiles or permission sets: | Manage Profiles and Permission Sets |

When you’re close to the limit of 800 custom fields and you delete or create fields, field creation can fail. The physical delete process reclaims and cleans fields, making them count temporarily toward the limit. The delete process runs only when the queue is full, so it can take days or weeks to start. In the meantime, the deleted fields are still counted as part of the limit. To request immediate deletion of fields, contact Salesforce Support.

Watch a Demo: [![Watch Video Demo](/docs/resources/img/en-us/260.0?doc_id=help%2Fimages%2Fplay_btn.png&folder=securityImplGuide) How to Create a Custom Field in Salesforce (Salesforce Classic)](https://salesforce.vidyard.com/watch/um8ZtKv_2awfCTitmz0vtA "video (New Window)")

Want to customize Salesforce so it captures all your business data? This short video walks you through how to create a custom picklist field, from choosing the correct field type to applying field-level security.

Watch a Demo: [![Watch Video Demo](/docs/resources/img/en-us/260.0?doc_id=help%2Fimages%2Fplay_btn.png&folder=securityImplGuide) How to Add a Custom Field in Salesforce (Lightning Experience)](https://salesforce.vidyard.com/watch/y22hvtDSEpUKKPPUYGC1TX "video (New Window)")

Want to add and arrange a new field while viewing an individual record for an object? This short video walks you through creating a picklist field while viewing a contact and then changing the page layout for the field.

Before you begin, determine the field type you want to create.

1.  From the management settings for the object you want to add a field to, go to Fields & Relationships.

    Custom task and event fields are accessible from the object management settings for Activities.

2.  Click **New**.

    ![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=securityImplGuide)

    #### Tip

    On custom objects, you can also set fields dependencies and field history tracking in this section.

3.  Choose the type of field and then click **Next**.
    -   Some data types are available for certain configurations only. For example, the Master-Detail Relationship option is available for custom objects only when the custom object doesn’t already have a master-detail relationship.
    -   Custom settings and external objects allow only a subset of the available data types.
    -   You can’t add a multi-select picklist, rich text area, or dependent picklist custom field to opportunity splits.
    -   Relationship fields count toward custom field limits.
    -   Additional field types can appear if an AppExchange package using those field types is installed.
    -   The roll-up summary option is available only on certain objects.
    -   Field types correspond to API data types.
    -   If your org uses Shield Platform Encryption, ensure that you understand how to encrypt custom fields using the Shield Platform Encryption offering.
4.  For relationship fields, associate an object with the field and click **Next**.
5.  For indirect lookup relationship fields, select a unique, external ID field on the parent object, and then click **Next**. The parent field values are matched against the values of the child indirect lookup relationship field to determine which records are related to each other.
6.  Enter a field label.

    Salesforce populates Field Name using the field label. Use the field name for merge fields in custom links, custom s-controls, and when referencing the field from the API.

    ![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=securityImplGuide)

    #### Tip

    Ensure that the custom field name and label are unique for that object.

    -   If standard and custom fields have identical names or labels, the merge field displays the custom field value.
    -   If two custom fields have identical names or labels, the merge field can display an unexpected value.

    If you create a field label called Email and a standard field labeled Email exists, the merge field is unable to distinguish between the fields. Add a character to the custom field name to make it unique. For example, Email2.

7.  To base a picklist field on a global picklist value set, select the value set to use.
8.  To specify whether the field must be populated and what happens if the record is deleted, enter field attributes and select the appropriate checkboxes.
9.  For master-detail relationships on custom objects, optionally select **Allow reparenting** to allow a child record in the master-detail relationship to be reparented to a different parent record.
10.  For a relationship field, optionally limit search results for the field by creating a lookup filter. Lookup filters aren’t available for external objects.
11.  Click **Next**.
12.  In Enterprise, Unlimited, Performance, and Developer Editions, specify the field’s access settings for each profile or permission set, and then click **Next**.

     ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=securityImplGuide)

     #### Note

     To specify the field’s access settings for permission sets instead of profiles, enable **Field-Level Security for Permission Sets during Field Creation** on the User Management Settings page.

     If you specify access for permission sets, select **Permission sets with object permissions** to filter the list to permission sets that have Create, Read, Edit, or Delete access on the field’s object. To show all permission sets, deselect this option. If no permission sets have object permissions for the field’s object, the list contains all permission sets.

     | Access Level | Enabled Settings (Profiles) | Enabled Settings (Permission Sets) |
     | --- | --- | --- |
     | Users can read and edit the field. | Visible | Edit Access (Read Access is selected automatically) |
     | Users can read but not edit the field. | Visible and Read-Only | Read Access |
     | Users can’t read or edit the field. | None | None |

     By default, a custom field isn’t visible or editable for portal profiles unless the field is universally required.

13.  Select the Dynamic Forms-enabled Lightning record pages that should include the field, then click **Next**.

     If you don’t have any Dynamic Forms-enabled Lightning record pages for the object, this step doesn’t appear.

14.  Select the page layouts that should include the field, and then click **Next**.

     Newly created custom fields are added as the last field in the first two-column section of the page layout, with these exceptions.

     | Field | Location on Page Layout |
     | --- | --- |
     | Long text area | End of the first one-column section. |
     | User | Bottom of the user detail page. |
     | Universally required | Can’t remove it from page layouts or make it read only. |

15.  For relationship fields, optionally click **Related List Label**, enter a new name to create an associated records related list, and then add it to the page layouts for that object. To add the related list to customized page layouts, select **Append related list to users’ existing personal customizations**.
16.  Click **Save** to finish or **Save & New** to create more custom fields.

Creating fields can require changing a large number of records at once. If your request is queued to process these changes efficiently, you receive an email notification when the process has been completed.
