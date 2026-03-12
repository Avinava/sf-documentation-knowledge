---
title: "Change Events for Users"
domain: change-data-capture
topic: change-events-for-users
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:09.728Z
estimatedTokens: 828
keywords: [Change, Events, Users, user, email, preferences, include, enabled, their, disabled, included, event, payload]
---

# Change Events for Users

> The user and email preferences in change events include only the preferences that
    are enabled (set to true) without their Boolean values. Preferences that are disabled (set to
    false) are not included in the event payload.

# Change Events for Users

The user and email preferences in change events include only the preferences that are enabled (set to true) without their Boolean values. Preferences that are disabled (set to false) are not included in the event payload.

For a list of user and email preferences, see the [User Object](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_user.htm "HTML (New Window)") in the Object Reference.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=change_data_capture)

#### Note

Preferences are stored in a 32-bit integer internal field in the database. When a preference is changed, a change is detected in the corresponding 32-bit integer field, and all enabled preferences that are represented by that internal integer field are published, whether or not they were changed.

## Example

This change event is generated when a User record is created. Preferences are included under EmailPreferences and UserPreferences.

{ "ChangeEventHeader": { "entityName": "User", "recordIds": \[ "0055f00000GBZR4AAP" \], "changeType": "CREATE", "changeOrigin": "", "transactionKey": "00068e80-1b23-ad90-c49d-ca6a5759661b", "sequenceNumber": 1, "commitTimestamp": 1714155903000, "commitNumber": 1100662266706, "commitUser": "0055f000005mc66AAA", "nulledFields": \[\], "diffFields": \[\], "changedFields": \[\] }, "Username": "olga.brown@example.com", "Name": { "Salutation": null, "FirstName": "Olga", "LastName": "Brown" }, "CompanyName": null, "Division": null, "Department": null, "Title": null, "Address": null, "Email": "katia\_hage@hotmail.com", "EmailPreferences": \[ "AutoBcc", "StayInTouchReminder" \], "SenderEmail": null, "SenderName": null, "Signature": null, "StayInTouchSubject": null, "StayInTouchSignature": null, "StayInTouchNote": null, "Phone": null, "Fax": null, "MobilePhone": null, "Alias": "obrown", "CommunityNickname": "User17141558217316917617", "IsActive": true, "IsSystemControlled": false, "TimeZoneSidKey": "America/Los\_Angeles", "UserRoleId": null, "LocaleSidKey": "en\_US", "ReceivesInfoEmails": true, "ReceivesAdminInfoEmails": true, "EmailEncodingKey": "UTF-8", "ProfileId": "00e5f000002mIQ6AAM", "UserType": "Standard", "UserSubtype": null, "LanguageLocaleKey": "en\_US", "EmployeeNumber": null, "DelegatedApproverId": null, "ManagerId": null, "LastLoginDate": null, "LastPasswordChangeDate": null, "CreatedDate": 1714155903000, "CreatedById": "0055f000005mc66AAA", "LastModifiedDate": 1714155903000, "LastModifiedById": "0055f000005mc66AAA", "NumberOfFailedLogins": null, "OfflineTrialExpirationDate": null, "OfflinePdaTrialExpirationDate": null, "UserPermissions": \[ "SFContentUser" \], "ForecastEnabled": false, "UserPreferences": \[ "ActivityRemindersPopup", "EventRemindersCheckboxDefault", "TaskRemindersCheckboxDefault", "DisableLikeEmail", "SortFeedByComment", "ShowTitleToExternalUsers", "HideS1BrowserUI", "LightningExperiencePreferred", "HideSfxWelcomeMat" \], "ContactId": null, "AccountId": null, "CallCenterId": null, "Extension": null, "FederationIdentifier": null, "AboutMe": null, "DigestFrequency": "D", "DefaultGroupNotificationFrequency": "N", "JigsawImportLimitOverride": 300, "WorkspaceId": null, "IsProfilePhotoActive": false, "IndividualId": null }
