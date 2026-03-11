---
title: "Setting DML Options"
domain: apex-guide
topic: setting-dml-options
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:43:48.055Z
keywords: [Setting, DML, Options, allowFieldTruncation, Property, assignmentRuleHeader, Note, duplicateRuleHeader, emailHeader, localeOptions, optAllOrNone]
---

# Setting DML Options

# Setting DML Options

You can specify DML options for insert and update operations by setting the desired options in the Database.DMLOptions object. You can set Database.DMLOptions for the operation by calling the setOptions method on the sObject, or by passing it as a parameter to the Database.insert and Database.update methods.

Using DML options, you can specify:

-   The truncation behavior of fields.
-   Assignment rule information.
-   Duplicate rule information.
-   Whether automatic emails are sent.
-   The user locale for labels.
-   Whether the operation allows for partial success.

The Database.DMLOptions class has the following properties:

-   [allowFieldTruncation Property](#AllowFieldTruncationProperty-B5376842)
-   [assignmentRuleHeader Property](#AssignmentRuleHeaderProperty-B53772F0)
-   [duplicateRuleHeader](#duplicateRuleHeaderProperty)
-   [emailHeader Property](#EmailHeaderProperty-B5377B04)
-   [localeOptions Property](#localeOptionsSection)
-   [optAllOrNone Property](#OptAllOrNoneProperty-B5378CE5)

DMLOptions is only available for Apex saved against API versions 15.0 and higher. DMLOptions settings take effect only for record operations performed using Apex DML and not through the Salesforce user interface.

## allowFieldTruncation Property

The allowFieldTruncation property specifies the truncation behavior of strings. In Apex saved against API versions previous to 15.0, if you specify a value for a string and that value is too large, the value is truncated. For API version 15.0 and later, if a value is specified that is too large, the operation fails and an error message is returned. The allowFieldTruncation property allows you to specify that the previous behavior, truncation, be used instead of the new behavior in Apex saved against API versions 15.0 and later.

The allowFieldTruncation property takes a Boolean value. If true, the property truncates String values that are too long, which is the behavior in API versions 14.0 and earlier. For example:

```

```

## assignmentRuleHeader Property

The assignmentRuleHeader property specifies the assignment rule to be used when creating a case or lead.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

#### Note

The Database.DMLOptions object supports assignment rules for cases and leads, but not for accounts.

Using the assignmentRuleHeader property, you can set these options:

-   assignmentRuleID: The ID of an assignment rule for the case or lead. The assignment rule can be active or inactive. The ID can be retrieved by querying the AssignmentRule sObject. If specified, do not specify useDefaultRule. If the value is not in the correct ID format (15-character or 18-character Salesforce ID), the call fails and an exception is returned.
-   useDefaultRule: Indicates whether the default (active) assignment rule will be used for a case or lead. If specified, do not specify an assignmentRuleId.

The following example uses the useDefaultRule option:

```

```

The following example uses the assignmentRuleID option:

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

#### Note

If there are no assignment rules in the organization, in API version 29.0 and earlier, creating a case or lead with useDefaultRule set to true results in the case or lead being assigned to the predefined default owner. In API version 30.0 and later, the case or lead is unassigned and doesn't get assigned to the default owner.

## duplicateRuleHeader Property

The duplicateRuleHeader property determines whether a record that’s identified as a duplicate can be saved. Duplicate rules are part of the Duplicate Management feature.

Using the duplicateRuleHeader property, you can set these options.

-   allowSave: Indicates whether a record that’s identified as a duplicate can be saved.

The following example shows how to save an account record that’s been identified as a duplicate. To learn how to iterate through duplicate errors, see [DuplicateError Class](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_class_Database_DuplicateError.htm)

```

```

## emailHeader Property

The Salesforce user interface allows you to specify whether or not to send an email when the following events occur:

-   Creation of a new case or task
-   Conversion of a case email to a contact
-   New user email notification
-   Lead queue email notification
-   Password reset

In Apex saved against API version 15.0 or later, the Database.DMLOptions emailHeader property enables you to specify additional information regarding the email that gets sent when one of the events occurs because of Apex DML code execution.

Using the emailHeader property, you can set these options.

-   triggerAutoResponseEmail: Indicates whether to trigger auto-response rules (true) or not (false), for leads and cases. This email can be automatically triggered by a number of events, for example when creating a case or resetting a user password. If this value is set to true, when a case is created, if there is an email address for the contact specified in ContactID, the email is sent to that address. If not, the email is sent to the address specified in SuppliedEmail.
-   triggerOtherEmail: Indicates whether to trigger email outside the organization (true) or not (false). This email can be automatically triggered by creating, editing, or deleting a contact for a case.
-   triggerUserEmail: Indicates whether to trigger email that is sent to users in the organization (true) or not (false). This email can be automatically triggered by a number of events; resetting a password, creating a new user, or creating or modifying a task.
    
    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)
    
    #### Note
    
    Adding comments to a case in Apex doesn’t trigger email to users in the organization even if triggerUserEmail is set to true.
    

Even though auto-sent emails can be triggered by actions in the Salesforce user interface, the DMLOptions settings for emailHeader take effect only for DML operations carried out in Apex code.

In the following example, the triggerAutoResponseEmail option is specified:

```

```

Email sent through Apex because of a group event includes additional behaviors. A group event is an event for which IsGroupEvent is true. The EventAttendee object tracks the users, leads, or contacts that are invited to a group event. Note the following behaviors for group event email sent through Apex:

-   Sending a group event invitation to a user respects the triggerUserEmail option
-   Sending a group event invitation to a lead or contact respects the triggerOtherEmail option
-   Email sent when updating or deleting a group event also respects the triggerUserEmail and triggerOtherEmail options, as appropriate

## localeOptions Property

The localeOptions property specifies the language of any labels that are returned by Apex. The value must be a valid user locale (language and country), such as de\_DE or en\_GB. The value is a String, 2-5 characters long. The first two characters are always an ISO language code, for example 'fr' or 'en.' If the value is further qualified by a country, then the string also has an underscore (\_) and another ISO country code, for example 'US' or 'UK.' For example, the string for the United States is 'en\_US', and the string for French Canadian is 'fr\_CA'.

## optAllOrNone Property

The optAllOrNone property specifies whether the operation allows for partial success. If optAllOrNone is set to true, all changes are rolled back if any record causes errors. The default for this property is false and successfully processed records are committed while records with errors aren't. This property is available in Apex saved against Salesforce API version 20.0 and later.