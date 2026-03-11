---
title: "DmlOptions.EmailHeader Properties"
domain: apex-reference
topic: dmloptionsemailheader-properties
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:33.698Z
keywords: [DmlOptions.EmailHeader, Properties, Indicates, whether, trigger, auto-response, rules, true, false, leads, cases., triggerAutoResponseEmail, Signature, Property, Value, Usage, triggerOtherEmail, Note, triggerUserEmail]
---

# DmlOptions.EmailHeader Properties

> Indicates whether to trigger auto-response rules (true) or not (false), for leads and cases.

## DmlOptions.EmailHeader Properties

The following are properties for DmlOptions.EmailHeader.

-   **[triggerAutoResponseEmail](atlas.en-us.apexref.meta/apexref/apex_class_Database_EmailHeader.htm#apex_Database_EmailHeader_triggerAutoResponseEmail)**  
    Indicates whether to trigger auto-response rules (true) or not (false), for leads and cases.
-   **[triggerOtherEmail](atlas.en-us.apexref.meta/apexref/apex_class_Database_EmailHeader.htm#apex_Database_EmailHeader_triggerOtherEmail)**  
    Indicates whether to trigger email outside the organization (true) or not (false).
-   **[triggerUserEmail](atlas.en-us.apexref.meta/apexref/apex_class_Database_EmailHeader.htm#apex_Database_EmailHeader_triggerUserEmail)**  
    Indicates whether to trigger email that is sent to users in the organization (true) or not (false).

### triggerAutoResponseEmail

Indicates whether to trigger auto-response rules (true) or not (false), for leads and cases.

#### Signature

public Boolean triggerAutoResponseEmail {get; set;}

#### Property Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

#### Usage

This email can be automatically triggered by a number of events, for example creating a case or resetting a user password. If this value is set to true, when a case is created, if there is an email address for the contact specified in ContactID, the email is sent to that address. If not, the email is sent to the address specified in SuppliedEmail

### triggerOtherEmail

Indicates whether to trigger email outside the organization (true) or not (false).

#### Signature

public Boolean triggerOtherEmail {get; set;}

#### Property Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

#### Usage

This email can be automatically triggered by creating, editing, or deleting a contact for a case.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexref)

#### Note

Email sent through Apex because of a group event includes additional behaviors. A group event is an event for which IsGroupEvent is true. The EventAttendee object tracks the users, leads, or contacts that are invited to a group event. Note the following behaviors for group event email sent through Apex:

-   Sending a group event invitation to a lead or contact respects the triggerOtherEmail option
-   Email sent when updating or deleting a group event also respects the triggerUserEmail and triggerOtherEmail options, as appropriate

### triggerUserEmail

Indicates whether to trigger email that is sent to users in the organization (true) or not (false).

#### Signature

public Boolean triggerUserEmail {get; set;}

#### Property Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

#### Usage

This email can be automatically triggered by a number of events; resetting a password, creating a new user, or creating or modifying a task.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexref)

#### Note

Adding comments to a case in Apex doesn’t trigger email to users in the organization even if triggerUserEmail is set to true.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexref)

#### Note

Email sent through Apex because of a group event includes additional behaviors. A group event is an event for which IsGroupEvent is true. The EventAttendee object tracks the users, leads, or contacts that are invited to a group event. Note the following behaviors for group event email sent through Apex:

-   Sending a group event invitation to a user respects the triggerUserEmail option
-   Email sent when updating or deleting a group event also respects the triggerUserEmail and triggerOtherEmail options, as appropriate