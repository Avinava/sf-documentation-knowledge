---
title: "Defining Triggers"
domain: apex-guide
topic: defining-triggers
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:34.175Z
estimatedTokens: 1581
keywords: [Defining, Triggers, Trigger, code, stored, metadata, under, which, they, associated., Note, Apex, Editor]
---

# Defining Triggers

> Trigger code is stored as metadata under the object with which they are
    associated.

# Defining Triggers

Trigger code is stored as metadata under the object with which they are associated.

To define a trigger in Salesforce:

1.  From the object management settings for the object whose triggers you want to access, go to Triggers.

    ![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=apexcode)

    #### Tip

    For the Attachment, ContentDocument, and Note standard objects, you can’t create a trigger in the Salesforce user interface. For these objects, create a trigger using development tools, such as the Developer Console or the Salesforce extensions for Visual Studio Code. Alternatively, you can also use the Metadata API.

2.  In the Triggers list, click **New**.
3.  To specify the version of Apex and the API used with this trigger, click Version Settings. If your organization has installed managed packages from the AppExchange, you can also specify which version of each managed package to use with this trigger. Associate the trigger with the most recent version of Apex and the API and each managed package by using the default values for all versions. You can specify an older version of a managed package if you want to access components or functionality that differs from the most recent package version.
4.  Click Apex Trigger and select the Is Active checkbox if you want to compile and enable the trigger. Leave this checkbox deselected if you only want to store the code in your organization's metadata. This checkbox is selected by default.
5.  In the Body text box, enter the Apex for the trigger. A single trigger can be up to 1 million characters in length.

    To define a trigger, use the following syntax:

    ```

    ```

    where trigger\_events can be a comma-separated list of one or more of the following events:

    -   before insert
    -   before update
    -   before delete
    -   after insert
    -   after update
    -   after delete
    -   after undelete

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

    #### Note

    -   A trigger invoked by an insert, delete, or update of a recurring event or recurring task results in a runtime error when the trigger is called in bulk from the Lightning Platform​ API.
    -   Suppose that you use an after-insert or after-update trigger to change ownership of leads, contacts, or opportunities. If you use the API to change record ownership, or if a Lightning Experience user changes a record’s owner, no email notification is sent. To send email notifications to a record’s new owner, set the triggerUserEmail property in DMLOptions to true.

6.  Click **Save**.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

#### Note

Triggers are stored with an isValid flag that is set to true as long as dependent metadata has not changed since the trigger was last compiled. If any changes are made to object names or fields that are used in the trigger, including superficial changes such as edits to an object or field description, the isValid flag is set to false until the Apex compiler reprocesses the code. Recompiling occurs when the trigger is next executed, or when a user resaves the trigger in metadata.

If a lookup field references a record that has been deleted, Salesforce clears the value of the lookup field by default. Alternatively, you can choose to prevent records from being deleted if they’re in a lookup relationship.

## The Apex Trigger Editor

The Apex and Visualforce editor has the following functionality:

Syntax highlighting

The editor automatically applies syntax highlighting for keywords and all functions and operators.

Search (![Search icon](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fimages%2Fsearch_apex.gif&folder=apexcode))

Search enables you to search for text within the current page, class, or trigger. To use search, enter a string in the Search textbox and click **Find Next**.

-   To replace a found search string with another string, enter the new string in the Replace textbox and click **replace** to replace just that instance, or **Replace All** to replace that instance and all other instances of the search string that occur in the page, class, or trigger.
-   To make the search operation case sensitive, select the **Match Case** option.
-   To use a regular expression as your search string, select the **Regular Expressions** option. The regular expressions follow JavaScript's regular expression rules. A search using regular expressions can find strings that wrap over more than one line.

    If you use the replace operation with a string found by a regular expression, the replace operation can also bind regular expression group variables ($1, $2, and so on) from the found search string. For example, to replace an <h1\> tag with an <h2\> tag and keep all the attributes on the original <h1\> intact, search for <h1(\\s+)(.\*)\> and replace it with <h2$1$2\>.


Go to line (![Go To Line icon](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fimages%2Fgo_to_line.gif&folder=apexcode))

This button allows you to highlight a specified line number. If the line is not currently visible, the editor scrolls to that line.

Undo (![Undo icon](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fimages%2Fundo.gif&folder=apexcode)) and Redo (![Redo icon](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fimages%2Fredo.gif&folder=apexcode))

Use undo to reverse an editing action and redo to recreate an editing action that was undone.

Font size

Select a font size from the drop-down list to control the size of the characters displayed in the editor.

Line and column position

The line and column position of the cursor is displayed in the status bar at the bottom of the editor. This can be used with go to line (![Go To Line icon](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fimages%2Fgo_to_line.gif&folder=apexcode)) to quickly navigate through the editor.

Line and character count

The total number of lines and characters is displayed in the status bar at the bottom of the editor.

-   [← Previous](atlas.en-us.apexcode.meta/apexcode/apex_triggers_bulk_idioms.htm "Common Bulk Trigger Idioms")
-   [Next →](atlas.en-us.apexcode.meta/apexcode/apex_triggers_merge_statements.htm "Triggers and Merge Statements")

## Code Examples

```
trigger TriggerName on ObjectName (trigger_events) {
                     code_block
                     }
```

## Related Topics

- ← Previous (atlas.en-us.apexcode.meta/apexcode/apex_triggers_bulk_idioms.htm)
- Next → (atlas.en-us.apexcode.meta/apexcode/apex_triggers_merge_statements.htm)
