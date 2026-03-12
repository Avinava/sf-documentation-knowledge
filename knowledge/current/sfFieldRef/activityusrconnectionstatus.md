---
title: "ActivityUsrConnectionStatus"
domain: sfFieldRef
topic: activityusrconnectionstatus
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:46.468Z
estimatedTokens: 422
keywords: [ActivityUsrConnectionStatus, status, email, connections, Einstein, Activity, Capture, users, whether, accepted, terms, service, emails, API, version]
---

# ActivityUsrConnectionStatus

> Represents the status of the email connections for Einstein Activity Capture
         users. You can also see whether users accepted the required terms of service to capture
         emails. This object is available in API version 54.0 and later.

# ActivityUsrConnectionStatus

Represents the status of the email connections for Einstein Activity Capture users. You can also see whether users accepted the required terms of service to capture emails. This object is available in API version 54.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [ActivityUsrConnectionStatus](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_activityusrconnectionstatus.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| ConfigurationName | Configuration Name | string |  | 18 |  |  |
| ConnectivityStatus | Connection Status | picklist |  | 255 |  |  |
| ContactsSynced | Number of contacts synced | int | 9 |  |  |  |
| EmailAddress | Email Address | string |  | 18 |  |  |
| EventsSynced | Number of events synced | int | 9 |  |  |  |
| ExternalId | External Id | string |  | 255 |  |  |
| GlobalOauthTermsState | GlobalOauth Terms State | picklist |  | 255 |  |  |
| Id | ActivityUsrConnectionStatus Id | id |  | 18 |  |  |
| IsTermsOfServiceAccepted | Is Terms Of Service Accepted | boolean |  |  |  |  |
| RecommendedActionDescription | Recommended Action Description | string |  | 755 |  |  |
| RecommendedActionTitle | Recommended Action Title | string |  | 255 |  |  |
| UserId | User Id | string |  | 18 |  |  |
| UserName | User Name | string |  | 18 |  |  |
| UserOnboardingStatus | User Onboarding Status | string |  | 18 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
