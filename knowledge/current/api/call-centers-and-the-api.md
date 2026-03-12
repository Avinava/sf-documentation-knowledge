---
title: "Call Centers and the API"
domain: api
topic: call-centers-and-the-api
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:57.651Z
estimatedTokens: 622
keywords: [Call, Centers, API, access, computer–telephony, integration, CTI, describeSoftphoneLayout, feature, enabled, organization, Contact, account, representative, assistance]
---

# Call Centers and the API

> The API provides access to information about computer–telephony integration (CTI) call
      centers with the describeSoftphoneLayout() call.
      You must have the CTI feature enabled for your organization. Contact your account
      representative for assistance.

# Call Centers and the API

The API provides access to information about computer–telephony integration (CTI) call centers with the describeSoftphoneLayout() call. You must have the CTI feature enabled for your organization. Contact your account representative for assistance.

The API supports limited access to call center-related objects, including being able to create call centers, and create or modify additional numbers for the call center.

| Topic | Description |
| --- | --- |
| CallCenter | Call Center object description, including fields and usage. |
| AdditionalNumber | Configuration settings that allow you to add an additional number if it cannot easily be categorized as a user, contact, lead, account, or any other object. Examples include phone queues or conference rooms. |

In addition, several fields have been added to existing objects to support call centers. The following fields provide configuration settings for operation of a call center.

| Object Name | Field Name | Field Type | Field Properties | Description |
| --- | --- | --- | --- | --- |
| OpenActivityActivityHistoryTask | CallDisposition | string | Create (Task only)FilterNillableUpdate (Task only) | Represents the result of a given call, for example, “we'll call back,” or “call unsuccessful.” Limit is 255 characters.For the Task object, corresponds to the Salesforce user interface label Call Result. You can also create and update values for this field in Task. |
| OpenActivityActivityHistoryTask | CallDurationIn​Seconds | int | Create (Task only)FilterNillableUpdate (Task only) | Duration of the call in seconds.For Task, you can also create and update values for this field. |
| OpenActivityActivityHistoryTask | CallObject | string | FilterNillableUpdate (Task only) | Name of a call center. Limit is 255 characters.For Task, you can also create and update values for this field. |
| OpenActivityActivityHistoryTask | CallType | picklist | Create (Task only)FilterNillableRestricted picklistUpdate | The type of call being answered: Inbound, Internal, or Outbound.For Task, you can also create and update values for this field. |
| User | CallCenterId | reference | CreateFilterNillableUpdate | The unique identifier for the call center associated with this user. |
| User | UserPermissionsCall​CenterAutoLogin | boolean | CreateUpdate | Indicates whether a user will be automatically logged in to a call center when logging in to the Salesforce application (true) or not (false). |
