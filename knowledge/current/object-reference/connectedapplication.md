---
title: "ConnectedApplication"
domain: object-reference
topic: connectedapplication
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:06.749Z
estimatedTokens: 1114
keywords: [ConnectedApplication, connected, app, read-only, Calls]
---

# ConnectedApplication

> Represents a connected app and its details; all fields are
			read-only.

# ConnectedApplication

Represents a connected app and its details; all fields are read-only.

Connected apps link client applications, third-party services, other Salesforce organizations, apps, and resources to your organization. The connected app configuration specifies authorization and security settings for these resources. This object exposes the settings for a specified connected app.

## Supported Calls

describeSObjects(), query(), retrieve()

## Fields

| Field Name | Details |
| --- | --- |
| MobileSessionTimeout | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionLength of time after which the system logs out inactive mobile users. |
| MobileStartUrl | TypeurlPropertiesFilter, Nillable, SortDescriptionUsers are directed to this URL after they’ve authenticated when the app is accessed from a mobile device. |
| Name | TypestringPropertiesFilter, Group, idLookup, SortDescriptionThe unique name for this object. |
| NamedUserUvidTimeout | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe timeout value for a JSON Web Token (JWT)-based access token that's issued to a named user. This field defines the timeout only if the app is configured to have an app-specific timeout. If the app uses the user's session timeout, the timeout value is defined based on the user's profile or the org session settings. For more information about defining JWT-based access token timeout, see Configure a Connected App to Issue JWT-Based Access Tokens.These values are available in API version 59.0 and later.1—1 Minute5—5 Minutes10—10 Minutes15—15 Minutes30—30 MinutesThese values are available in API version 65.0 and later.60—1 Hour90—90 Minutes120—2 Hours240—4 Hours480—8 Hours720—12 HoursThis field is available in API version 59.0 and later. |
| OptionsAllowAdminApprovedUsersOnly | TypebooleanPropertiesFilterDescriptionIndicates whether access is limited to users granted approval to use the connected app by an administrator. Manage profiles for the app by editing each profile’s Access list. |
| OptionsCodeCredentialGuestEnabled | Reserved for future use. |
| OptionsFullContentPushNotifications | For internal use only. |
| OptionsHasSessionLevelPolicy | TypebooleanPropertiesFilterDescriptionSpecifies whether the connected app requires a High Assurance level session. |
| OptionsIsInternal | For internal use only. |
| OptionsRefreshTokenValidityMetric | TypebooleanPropertiesFilterDescriptionSpecifies whether the refresh token validity is based on duration or inactivity. If true, the token validity is measured based on the last use of the token; otherwise, it’s based on the token duration. |
| OptionsTokenExchangeManageBitEnabled | TypebooleanPropertiesFilterDescriptionIf true, the OAuth 2.0 token exchange flow is enabled. |
| PinLength | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionFor mobile apps, this field is the PIN length requirement for users of the connected app. Valid values are 4, 5, 6, 7, or 8. |
| RefreshTokenValidityPeriod | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe duration of an authorization token until it expires in hours, months, or days as set in the connected app management page. |
| StartUrl | TypeurlPropertiesFilter, Nillable, SortDescriptionIf the app isn’t accessed from a mobile device, users are directed to this URL after they’ve authenticated. |
| UvidTimeout | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe timeout value for a JWT-based access token that's issued to an unknown user as a result of the guest user variation of the Authorization Code and Credentials Flow. JWT-based access tokens issued during this flow variation always contain a UVID.This field defines the timeout only if the app is configured to have an app-specific timeout. If the app uses the user's session timeout, the timeout value is defined based on the user's profile or the org session settings. For more information about defining JWT-based access token timeout, see Configure a Connected App to Issue JWT-Based Access Tokens.These values are available in API version 59.0 and later.1—1 Minute5—5 Minutes10—10 Minutes15—15 Minutes30—30 MinutesThese values are available in API version 65.0 and later.60—1 Hour90—90 Minutes120—2 Hours240—4 Hours480—8 Hours720—12 HoursThis field is available in API version 59.0 and later. |
