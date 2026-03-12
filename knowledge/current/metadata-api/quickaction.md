---
title: "QuickAction"
domain: metadata-api
topic: quickaction
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:41.491Z
estimatedTokens: 2376
namespace: Canvas
keywords: [QuickAction, quick, action, becomes, Chatter, publisher, detail, account, user, contact, feed, created, objects, permit, custom]
---

# QuickAction

> Represents a specified create or update quick action for an
        object that then becomes available in the Chatter publisher. For example, you can create an action that, on the detail page of an account, allows a
            user to create a contact related to that account from the Chatter feed on that page.
            QuickAction can be created on objects that permit custom fields.

**Namespace:** `Canvas`

# QuickAction

Represents a specified create or update quick action for an object that then becomes available in the Chatter publisher. For example, you can create an action that, on the detail page of an account, allows a user to create a contact related to that account from the Chatter feed on that page. QuickAction can be created on objects that permit custom fields.

The parent objects supported include:

-   Account
-   Campaign
-   Case
-   Contact
-   ContentNote
-   Custom objects
-   Group
-   Lead
-   Opportunity

## File Suffix and Directory Location

QuickAction components have the suffix quickAction and are stored in the quickActions folder.

## Version

QuickAction components are available in API version 28.0 and later.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| canvas | string | If the custom action invokes a Canvas app, the app name. Returns the fully qualified name of the Canvas app in the format <namespace>__<dev_name>, if the quick action type is Canvas; otherwise, returns null.This field is available in API version 29.0 and later. |
| description | string | The description of the action. |
| fieldOverrides | FieldOverride[] | The specific field that can be overridden within a QuickAction. |
| flowDefinition | string | If the custom action invokes a flow, this field represents the API name of the flow. Otherwise, this field is null. |
| height | int | If a custom action is created, this field represents the height in pixels of the action pane. |
| icon | string | The icon used to identify the action.API version 32.0 and later returns different icons than in earlier API versions. |
| isProtected | boolean | Indicates whether this component is protected (true) or not (false). Protected components cannot be linked to or referenced by components created in the installing organization. |
| label | string | Identifies the action and displays to users. Also the default identifier used for the API and managed packages. |
| lightningComponent | string | If the custom action invokes a Lightning component, this field represents the fully qualified name of the component. Otherwise, this field is null.Available in API version 38.0 and later. |
| optionsCreateFeedItem | boolean | Required. Indicates whether successful completion of the action creates a feed item (true) or not (false). Applies only to Create Record, Update Record, and Log a Call quick action types.Available in API version 36.0 and later. |
| page | string | If the custom action invokes a Visualforce page, this field identifies the page. |
| quickActionLayout | QuickActionLayout | The layout of fields on the action. |
| quickActionParameter | QuickActionParameter[] | The input and output of the quick action.Available in API version 63.0 and later. |
| standardLabel | QuickActionLabel (enumeration of type string) | Specifies the standard label to use for the action. The valid values are:AddRecordAddMemberChangeDueDateChangePriorityChangeStatusCreateNewCreateNewRecordType (For example, a label with something like “Create New Idea”)DeferEditDescriptionEnrollInProgram (Available in API versions 46.0 and later only if the org has Health Cloud enabled)EscalateEscalateToRecordForward (Available in API version 42.0 and later)LogACallLogANoteModifyAppointment (Available in API version 47.0 and later)New (A new record)NewChild (A new child record)NewChildRecordTypeNewRecordType (For example, a label with something like “New Idea”)OfferFeedbackPatientDetails (Available in API version 57.0 and later if the org has Health Cloud enabled)PerformCount (Available in API version 63.0 and later.)Quick (A quick record)QuickRecordTypeRelocateAsset (Available in API version 63.0 and later)ReplaceAsset (Available in API version 63.0 and later)Reply (Available in API version 42.0 and later)ReplyAll (Available in API version 42.0 and later)RequestFeedbackSendEmail (This value is available in API version 31.0 and later.)Update |
| successMessage | string | The message that displays to the user upon successful completion of the action.Available in API version 36.0 and later. |
| targetObject | string | The object for which the action is created and performed.For example, you can create an action that, on the detail page of an account, allows a user to create a contact related to that account from the Chatter feed on that page. QuickAction can be created on objects that permit custom fields. In this case, Contact is the targetObject. |
| targetParentField | string | The parent object type of the action. Links the target object to the parent object. For example, use Account if the target object is Contact and the parent object is Account. |
| targetRecordType | string | Specifies which record type to create. Valid values are:Business AccountPerson AccountMaster |
| type | QuickActionType (enumeration of type string) | Required. The type of quick action. Valid values are:CanvasCreateFlow (This value is available as a Beta in API version 41.0 and later)LightningComponent (This value is available in API version 38.0 and later.)LogACallPostSendEmail (This value is available in API version 31.0 and later.)SocialPostUpdateVisualforcePage |
| width | int | If a custom action is created, this field represents the width in pixels of the action pane. |

## FieldOverride

Represents the field names and their respective formulas and literal values that comprise predefined value settings for a [QuickAction](#meta_quickaction "Represents a specified create or update quick action for an object that then becomes available in the Chatter publisher. For example, you can create an action that, on the detail page of an account, allows a user to create a contact related to that account from the Chatter feed on that page. QuickAction can be created on objects that permit custom fields."). If a field on an action has both a predefined value and a default value set, the action uses the predefined value, not the default value. A formula value takes precedence over a literal value if both are defined.

| Field Name | Field Type | Description |
| --- | --- | --- |
| field | string | Required. The name of the field to allow predefined values on. |
| formula | string | Specifies the formula to use when setting a field’s predefined value. Supported for single-select picklists as of API version 43.0. |
| literalValue | string | Supported for picklists only. Specifies the literal value of the field defined from values in the picklist. Corresponds to the Specific Value field in the predefined value UI. |

## QuickActionLayout

The layout of fields on the action. There’s no hard limit to the number of fields you can add to an action layout. However, for optimum usability, we recommend a maximum of eight fields. Adding more than 20 fields can severely affect user efficiency.

| Field Name | Field Type | Description |
| --- | --- | --- |
| layoutSectionStyle | LayoutSectionStyle (enumeration of type string) | Required. The type of layout structure used. The valid values are:TwoColumnsTopToBottomTwoColumnsLeftToRightOneColumnCustomLinks |
| quickActionLayoutColumns | QuickActionLayoutColumn[] | Specifies columns in a QuickActionLayout. |

## QuickActionLayoutColumn

A column defined for a [QuickActionLayout](#quickActionLayout_title).

| Field Name | Field Type | Description |
| --- | --- | --- |
| quickActionLayoutItems | QuickActionLayoutItem [] | Specifies row items in a QuickActionLayoutColumn. |

## QuickActionLayoutItem

A row item comprised of fields and defined for a [QuickActionLayoutColumn](#quickActionLayoutColumn_title).

| Field Name | Field Type | Description |
| --- | --- | --- |
| emptySpace | boolean | Controls if this layout item is a blank space (true) or not (false). |
| field | string | Represents a specific field in QuickActionLayoutItem. |
| uiBehavior | UiBehavior (enumeration of type string) | Specifies user input behavior for specific fields in QuickActionLayoutItem. The valid values are:EditRequiredReadonly |

## QuickActionParameter

Represents the input and output of the associated quick action. Available in API version 63.0 and later.

| Field Name | Field Type | Description |
| --- | --- | --- |
| name | string | Required. Name of the parameter. |
| type | QuickActionParameterType (enumeration of type string) | Required. Input is the only valid value. |
| value | string | Represents the value associated with the given parameter name. |

## Declarative Metadata Sample Definition

The following is an example of a [QuickAction](#meta_quickaction "Represents a specified create or update quick action for an object that then becomes available in the Chatter publisher. For example, you can create an action that, on the detail page of an account, allows a user to create a contact related to that account from the Chatter feed on that page. QuickAction can be created on objects that permit custom fields.") component:

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<QuickAction xmlns="http://soap.sforce.com/2006/04/metadata">
    <description>testActionDefinitionTypesCreateTask</description>
    <label>testActionDefinitionTypesCreateTask</label>
    <optionsCreateFeedItem>true</optionsCreateFeedItem>
    <quickActionLayout>
        <layoutSectionStyle>TwoColumnsLeftToRight</layoutSectionStyle>
        <quickActionLayoutColumns>
            <quickActionLayoutItems>
                <emptySpace>false</emptySpace>
                <field>OwnerId</field>
                <uiBehavior>Required</uiBehavior>
            </quickActionLayoutItems>
            <quickActionLayoutItems>
                <emptySpace>false</emptySpace>
                <field>WhoId</field>
                <uiBehavior>Edit</uiBehavior>
            </quickActionLayoutItems>
            <quickActionLayoutItems>
                <emptySpace>false</emptySpace>
                <field>WhatId</field>
                <uiBehavior>Edit</uiBehavior>
            </quickActionLayoutItems>
            <quickActionLayoutItems>
                <emptySpace>false</emptySpace>
                <field>ActivityDate</field>
                <uiBehavior>Edit</uiBehavior>
            </quickActionLayoutItems>
            <quickActionLayoutItems>
                <emptySpace>false</emptySpace>
                <field>Subject</field>
                <uiBehavior>Edit</uiBehavior>
            </quickActionLayoutItems>
            <quickActionLayoutItems>
                <emptySpace>false</emptySpace>
                <field>Status</field>
                <uiBehavior>Required</uiBehavior>
            </quickActionLayoutItems>
            <quickActionLayoutItems>
                <emptySpace>false</emptySpace>
                <field>Priority</field>
                <uiBehavior>Required</uiBehavior>
            </quickActionLayoutItems>
        </quickActionLayoutColumns>
        <quickActionLayoutColumns/>
    </quickActionLayout>
    <successMessage>This is a success message</successMessage>
    <targetObject>Task</targetObject>
    <targetParentField>What</targetParentField>
    <type>Create</type>
</QuickAction>
```

## Related Topics

- enumeration (atlas.en-us.api_meta.meta/api_meta/meta_objects_intro.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
