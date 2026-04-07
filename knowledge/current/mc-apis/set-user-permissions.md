---
title: "Set User Permissions"
domain: mc-apis
topic: set-user-permissions
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T09:06:25.048Z
estimatedTokens: 707
keywords: [User, Permissions, setting, access, users, account, via, SOAP, API, Why, How, Sample, Code, Envelope]
---

# Set User Permissions

> This page contains information  about setting access permissions for users within your account via the SOAP API.

# Set User Permissions

This page contains information about setting access permissions for users within your account via the SOAP API.

## Why Set User Permissions

You can enable or disable access to features and information within your account via user permissions.

## How to Set User Permissions

Use the sample code below as a model for your own API call:

### Sample Code - SOAP Envelope

```
<soap:Body>
    <UpdateRequest xmlns="http://exacttarget.com/wsdl/partnerAPI">
        <Objects xsi:type="AccountUser">
            <Client>
                <ID>12345</ID>
            </Client>
            <ID>12345</ID>
            <UserPermissions>
                <ID>25</ID>
            </UserPermissions>
        </Objects>
    </UpdateRequest>
</soap:Body>
```

### List of User Permissions

The following list defines permissions available to set via the SOAP API. Because not all accounts include all available features, you may not use some roles within your account. Please contact your Marketing Cloud for more information on the features included in your account.

| Role ID | Role Name | Description |
| --- | --- | --- |
| 3 | CLIENT_ADMIN | Can add users to an account |
| 4 | PRO_ADMIN | Can create and view accounts |
| 5 | VIEW_TRACKING | Can only view tracking information |
| 6 | CRT_LIST_VIEW | Can only view and modify published email messages |
| 7 | RM_TMPLT | Cannot access templates |
| 8 | SEND_EMAIL_OFF | Cannot send email messages |
| 12 | DELETE_LIST_OFF | Cannot delete lists |
| 13 | PROFILE_READONLY | Cannot modify profile attributes |
| 14 | SF_REPORTS | Can run Salesforce.com reports |
| 15 | SF_REPORTS_FULL | Can run Salesforce.com reports and retrieve all contacts |
| 16 | DENY_LIST_ACCESS | Cannot access lists |
| 17 | DELETE_EMAIL_OFF | Cannot delete email messages |
| 18 | CREATE_EMAIL_OFF | Cannot create email messages |
| 19 | EXT_SEND_INTGRN | Can link to an external website for email sends |
| 23 | WebServices | Can use the SOAP API |
| 24 | ATTRIBS_READONLY | Cannot modify profile attribute values |
| 25 | ADMIN_DATA_MAN | Can access administrative data management |
| 26 | TEST_SEND_ONLY | Can only conduct test sends |
| 28 | REMOVE_CRM | Cannot access Marketing Cloud from any external systems |
| 29 | REMOVE_INTERACT | Cannot access any interactions |
| 30 | REMOVE_360 | Cannot access 3sixty |
| 31 | SYS_DEF_ADMIN | Enables user as system-defined admin |
| 32 | SYS_DEF_CONTENT | Enables user as system-defined content creator |
| 33 | SYS_DEF_DATA | Enables user as system-defined data manager |
| 34 | SYS_DEF_ANALYST | Enables user as system-defined analyst |
| 35 | MANAGE_DATA_EXT | Permits user to manage data extension data and retention policy |
| 38 | APPROVER | Allow user to approve email messages |
| 39 | SYS_DEF_DS_USER | Distributed Sending User |
