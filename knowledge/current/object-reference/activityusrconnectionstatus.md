---
title: "ActivityUsrConnectionStatus"
domain: object-reference
topic: activityusrconnectionstatus
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:04.050Z
estimatedTokens: 972
keywords: [ActivityUsrConnectionStatus, status, email, connections, Einstein, Activity, Capture, users, whether, accepted, terms, service, emails, API, version]
---

# ActivityUsrConnectionStatus

> Represents the status of the email connections for Einstein Activity Capture
         users. You can also see whether users accepted the required terms of service to capture
         emails. This object is available in API version 54.0 and later.

# ActivityUsrConnectionStatus

Represents the status of the email connections for Einstein Activity Capture users. You can also see whether users accepted the required terms of service to capture emails. This object is available in API version 54.0 and later.

## Supported Calls

describeSObjects(), query()

## Special Access Rules

To access this object, enable Einstein Activity Capture in your org.

## Fields

| Field | Details |
| --- | --- |
| ConfigurationName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe name of the Einstein Activity Capture configuration that the user is assigned to. |
| ConnectivityStatus | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe status of the user’s email connection.Possible values are:ACTIVEDISABLEDINITIALIZINGNEEDSATTENTIONNEEDSATTENTIONGLOBAL (used when an org-level connection isn’t working)NEEDSATTENTIONHYBRID (used when both org-level and user-level connections aren’t working)PENDINGPROCESSING |
| ContactsSynced | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of contacts synced after midnight between Salesforce and the user’s Microsoft or Google email account. This field is available in API version 59.0 and later. |
| EmailAddress | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe email address that’s used to capture and sync data between Salesforce and the user’s Microsoft or Google account. |
| EventsSynced | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of events synced after midnight between Salesforce and the user’s Microsoft or Google email account. This field is available in API version 59.0 and later. |
| ExternalId | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThis field is reserved for future use. |
| GlobalOauthTermsState | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionIndicates the user’s terms of service status. When emails are enabled for Einstein Activity Capture, each user must accept the terms of service.Possible values are:ACCEPTEDDECLINEDPENDINGThis field is available only if you use an org-level OAuth 2.0 or a service account authentication method. In connection report CSV files downloaded from Einstein Activity Capture Status & Metrics, this field is labeled Global Auth User Email Consent Status. |
| IsTermsOfServiceAccepted | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the user has accepted the Einstein Activity Capture terms of service or not. When emails are enabled for Einstein Activity Capture, each user must accept the terms of service.The default value is false.This field is available only if you use a user-level authentication method. In connection report CSV files downloaded from Einstein Activity Capture Status & Metrics, this field is labeled User Auth Terms of Service Accepted. |
| RecommendedActionDescription | TypestringPropertiesFilter, Nillable, SortDescriptionRecommended action to take when the user’s ConnectivityStatus is NEEDSATTENTION. Available in API version 58.0 and later. |
| RecommendedActionTitle | TypestringPropertiesFilter, Group, Nillable, SortDescriptionReason for the user's ConnectivityStatus when the status is NEEDSATTENTION. Available in API version 58.0 and later. |
| UserId | TypestringPropertiesFilter, Group, Nillable, SortDescriptionID of the user. |
| UserName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe username of the Einstein Activity Capture user. |
| UserOnboardingStatus | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe initial sync status when the user connects Salesforce with their external email account and syncs data for the first time. This field is available in API version 59.0 and later.Possible values are:NOT_STARTEDIN_PROGRESSNOT_CONFIGUREDCOMPLETEFAILED |
