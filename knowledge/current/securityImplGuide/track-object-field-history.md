---
title: "Track Object Field History"
domain: securityImplGuide
topic: track-object-field-history
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:45.240Z
estimatedTokens: 785
keywords: [Track, History, Turn, tracking, standard, custom, objects, settings, Changes, made, added, monitor, business, critical, audit]
---

# Track Object Field History

> Turn on field history tracking for standard or custom objects in the field history
    tracking settings. Changes made to a field are added to the History related list of an object.
    You can monitor changes to business critical fields, or audit text fields for values that might
    require extra security, privacy, or access controls.

# Track Object Field History

Turn on field history tracking for standard or custom objects in the field history tracking settings. Changes made to a field are added to the History related list of an object. You can monitor changes to business critical fields, or audit text fields for values that might require extra security, privacy, or access controls.

| Available in: Salesforce Classic (not available in all orgs), Lightning Experience, and the Salesforce app |
| --- |
| Available in: Contact Manager, Group, Essentials, Professional, Enterprise, Performance, Unlimited, Developer, and Database.com EditionsStandard Objects aren’t available in Database.com |


| User Permissions Needed |
| --- |
| To define which fields are tracked: | Customize Application |

If you use both business accounts and person accounts, keep in mind that:

-   Field history tracking for accounts applies to both business and person accounts, so you can track a maximum of 20 fields for both types of accounts together.
-   Field history tracking excludes the changes made to a person's contact record.

1.  From Setup, in the Quick Find box, enter field history tracking, and then select **Field History Tracking**.
2.  To select the object whose fields you want to track, click **View** for the object.
3.  Select **Enable** {OBJECT\_NAME} History.

    For example, Enable Account History.

    ![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=securityImplGuide)

    #### Tip

    When you enable tracking for an object, customize your page layouts to include the object’s history related list.

4.  Select the updates that you want to track:

    -   Both existing and new values modifications: Select those fields under Track old and new values.
    -   Multi-select picklist and large text field value updates only: Select the fields under Track changes only.

    You can select a combination of up to 20 standard and custom fields per object. For accounts, this limit includes fields for both business accounts and person accounts.

    You can’t track these fields:

    -   Formula, roll-up summary, or auto-number fields
    -   Created By and Last Modified By
    -   Fields that have the AI Prediction checkbox selected
    -   Expected Revenue field on opportunities
    -   Master Solution Title or the Master Solution Details fields on solutions. These fields appear only for translated solutions in organizations with multilingual solutions turned on.
5.  Save your changes.

    Salesforce tracks history from the date and time that you turn on the tracking.

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=securityImplGuide)

    #### Note

    If Apex references one of an object’s fields, you can’t turn off field history tracking for that object.

    Field history tracking supports custom objects in managed packages. However, if the package developer updates the package field history settings, Salesforce doesn’t update those settings during package upgrades.


When you no longer want to track field history, turn off the feature by deselecting the fields.
