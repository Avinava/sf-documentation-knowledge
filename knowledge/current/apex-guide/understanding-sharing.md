---
title: "Understanding Sharing"
domain: apex-guide
topic: understanding-sharing
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-11T15:43:46.354Z
keywords: [Understanding, Sharing, Types, Note, Reason, Field, Access, Levels, Considerations]
---

# Understanding Sharing

# Understanding Sharing

Sharing enables record-level access control for all custom objects, as well as many standard objects (such as Account, Contact, Opportunity and Case). Administrators first set an object’s organization-wide default sharing access level, and then grant additional access based on record ownership, the role hierarchy, sharing rules, and manual sharing. Developers can then use Apex managed sharing to grant additional access programmatically with Apex.

Most sharing for a record is maintained in a related sharing object, similar to an access control list (ACL) found in other platforms.

## Types of Sharing

Salesforce has the following types of sharing:

Managed Sharing

Managed sharing involves sharing access granted by Lightning Platform based on record ownership, the role hierarchy, and sharing rules:

Record Ownership

Each record is owned by a user or optionally a queue for custom objects, cases and leads. The record owner is automatically granted Full Access, allowing them to view, edit, transfer, share, and delete the record.

Role Hierarchy

The role hierarchy enables users above another user in the hierarchy to have the same level of access to records owned by or shared with users below. Consequently, users above a record owner in the role hierarchy are also implicitly granted Full Access to the record, though this behavior can be disabled for specific custom objects. The role hierarchy is not maintained with sharing records. Instead, role hierarchy access is derived at runtime. For more information, see “Controlling Access Using Hierarchies” in the Salesforce online help.

Sharing Rules

Sharing rules are used by administrators to automatically grant users within a given group or role access to records owned by a specific group of users. Sharing rules cannot be added to a package and cannot be used to support sharing logic for apps installed from AppExchange.

Sharing rules can be based on record ownership or other criteria. You can’t use Apex to create criteria-based sharing rules. Also, criteria-based sharing cannot be tested using Apex.

All implicit sharing added by Force.com managed sharing cannot be altered directly using the Salesforce user interface, SOAP API, or Apex.

User Managed Sharing, also known as Manual Sharing

User managed sharing allows the record owner or any user with Full Access to a record to share the record with a user or group of users. This is generally done by an end user, for a single record. Only the record owner and users above the owner in the role hierarchy are granted Full Access to the record. It is not possible to grant other users Full Access. Users with the “Modify All Records” object-level permission for the given object or the “Modify All Data” permission can also manually share a record. User managed sharing is removed when the record owner changes or when the access granted in the sharing does not grant additional access beyond the object's organization-wide sharing default access level.

Apex Managed Sharing

Apex managed sharing provides developers with the ability to support an application’s particular sharing requirements programmatically through Apex or the SOAP API. This type of sharing is similar to managed sharing. Only users with “Modify All Data” permission can add or change Apex managed sharing on a record. Apex managed sharing is maintained across record owner changes.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

#### Note

Apex sharing reasons and Apex managed sharing recalculation are only available for custom objects.

## The Sharing Reason Field

In the Salesforce user interface, the Reason field on a custom object specifies the type of sharing used for a record. This field is called rowCause in Apex or the API.

Each of the following list items is a type of sharing used for records. The tables show Reason field value, and the related rowCause value.

-   Managed Sharing
    
    | Reason Field Value | rowCause Value (Used in Apex or the API) |
    | --- | --- |
    | Account Sharing | ImplicitChild |
    | Associated record owner or sharing | ImplicitParent |
    | Owner | Owner |
    | Opportunity Team | Team |
    | Sharing Rule | Rule |
    | Territory Assignment Rule | TerritoryRule |
    
-   User Managed Sharing
    
    | Reason Field Value | rowCause Value (Used in Apex or the API) |
    | --- | --- |
    | Manual Sharing | Manual |
    | Territory Manual | TerritoryManualNoteWith Enterprise Territory Management in API version 45.0 and later, Territory2AssociationManual replaces TerritoryManual. |
    
-   Apex Managed Sharing
    
    | Reason Field Value | rowCause Value (Used in Apex or the API) |
    | --- | --- |
    | Defined by developer | Defined by developer |
    

The displayed reason for Apex managed sharing is defined by the developer.

## Access Levels

When determining a user’s access to a record, the most permissive level of access is used. Most share objects support the following access levels:

| Access Level | API Name | Description |
| --- | --- | --- |
| Private | None | Only the record owner and users above the record owner in the role hierarchy can view and edit the record. This access level only applies to the AccountShare object. |
| Read Only | Read | The specified user or group can view the record only. |
| Read/Write | Edit | The specified user or group can view and edit the record. |
| Full Access | All | The specified user or group can view, edit, transfer, share, and delete the record.NoteThis access level can only be granted with managed sharing. |

## Sharing Considerations

Apex Triggers and User Record Sharing

If a trigger changes the owner of a record, the running user must have read access to the new owner’s user record if the trigger is started through the following:

-   API
-   Standard user interface
-   Standard Visualforce controller
-   Class defined with the with sharing keyword

If a trigger is started through a class that’s not defined with the with sharing keyword, the trigger runs in system mode. In this case, the trigger doesn’t require the running user to have specific access.