---
title: "EmailHeader"
domain: api
topic: emailheader
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:33:57.715Z
estimatedTokens: 1159
keywords: [EmailHeader, resetPassword, upsert, API, Calls, Sample, Code—Java]
---

# EmailHeader

> create(),
          delete(), resetPassword(), update(), upsert()

# EmailHeader

The Salesforce user interface allows you to specify whether to send an email when these events occur:

-   Create a [Case](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_case.htm "HTML (New Window)")
-   Create a [CaseComment](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_casecomment.htm "HTML (New Window)")
-   Convert Case email to a [Contact](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_contact.htm "HTML (New Window)")
-   Send a New [User](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_user.htm "HTML (New Window)") email notification
-   Make a [resetPassword()](atlas.en-us.api.meta/api/sforce_api_calls_resetpassword.htm "Changes a user's password to a temporary, system-generated value.") call

In API versions 8.0 and later, you can also send an API request that sends email.

A group event is an [Event](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_event.htm "HTML (New Window)") for which IsGroupEvent is true. The [EventRelation](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_eventattendee.htm "HTML (New Window)") object tracks the users, leads, or contacts that are invited to a group event. Note the following behaviors for group event email sent through the API:

-   Sending a group event invitation to a IUser respects the triggerUserEmail option
-   Sending a group event invitation to a [Lead](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_lead.htm "HTML (New Window)") or Contact respects the triggerOtherEmail option
-   Email sent when updating or deleting a group event also respect triggerUserEmail and triggerOtherEmail, as appropriate

## API Calls

[create()](atlas.en-us.api.meta/api/sforce_api_calls_create.htm "Adds one or more new records to your organization’s data."), [delete()](atlas.en-us.api.meta/api/sforce_api_calls_delete.htm "Deletes one or more records from your organization's data."), [resetPassword()](atlas.en-us.api.meta/api/sforce_api_calls_resetpassword.htm "Changes a user's password to a temporary, system-generated value."), [update()](atlas.en-us.api.meta/api/sforce_api_calls_update.htm "Updates one or more existing records in your organization's data."), [upsert()](atlas.en-us.api.meta/api/sforce_api_calls_upsert.htm "Creates records and updates existing records; uses a custom field to determine the presence of existing records. In most cases, we recommend that you use upsert() instead of create() to avoid creating unwanted duplicate records (idempotent). This call is available in API version 7.0 and later.")

## Fields

| Element Name | Type | Description |
| --- | --- | --- |
| triggerAutoResponseEmail | boolean | Indicates whether to trigger auto-response rules (true) or not (false), for leads and cases. In the Salesforce user interface, this email can be automatically triggered by a number of events, for example creating a case or resetting a user password. If this value is set to true, when a Case is created, if there is an email address for the contact specified in ContactId, the email is sent to that address. If not, the email is sent to the address specified in SuppliedEmail. |
| triggerOtherEmail | boolean | Indicates whether to trigger email outside the organization (true) or not (false). In the Salesforce user interface, this email can be automatically triggered by creating, editing, or deleting a contact for a case. |
| triggerUserEmail | boolean | Indicates whether to trigger email that is sent to users in the organization (true) or not (false). In the Salesforce user interface, this email can be automatically triggered by a number of events; resetting a password, creating a new user, or adding comments to a case. |

## Sample Code—Java

This sample shows how to use the EmailHeader. It sets the triggerAutoResponseEmail email header field to true, which triggers an email to be sent when a case is created. Next, it creates a case. This sample assumes an auto-response rule has been set for cases, and an email address is specified in the contact referenced by [ContactId](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_case.htm#i1444499 "HTML (New Window)").

```

```

## Code Examples

```apex
public void createCaseWithAutoResponse(String contactId) {
  try {
    connection.setEmailHeader(true, false, false);
    Case c = new Case();
    c.setSubject("Sample Subject");
    c.setContactId(contactId);
    SaveResult[] sr = connection.create(new SObject[] { c });
    // Parse sr array to see if case was created successfully.
  } catch (ConnectionException ce) {
    ce.printStackTrace();
  }
}
```

## Related Topics

- resetPassword() (atlas.en-us.api.meta/api/sforce_api_calls_resetpassword.htm)
- create() (atlas.en-us.api.meta/api/sforce_api_calls_create.htm)
- delete() (atlas.en-us.api.meta/api/sforce_api_calls_delete.htm)
- update() (atlas.en-us.api.meta/api/sforce_api_calls_update.htm)
- upsert() (atlas.en-us.api.meta/api/sforce_api_calls_upsert.htm)
