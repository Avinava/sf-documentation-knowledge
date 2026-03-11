---
title: "ExtlClntAppOauthConfigurablePolicies"
domain: metadata-api
topic: extlclntappoauthconfigurablepolicies
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:45:52.557Z
keywords: [ExtlClntAppOauthConfigurablePolicies, Parent, Type, File, Suffix, Directory, Location, Version, Special, Access, Rules, Fields, ExtlClntAppOauthPoliciesAttribute, Declarative, Metadata, Sample, Definition, Wildcard, Support, Manifest]
---

# ExtlClntAppOauthConfigurablePolicies

# ExtlClntAppOauthConfigurablePolicies

Represents the policies configured by the admin for an OAuth-enabled external client app.

## Parent Type

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

## File Suffix and Directory Location

ExtlClntAppOauthConfigurablePolicies components have the suffix .ecaOauthPlcy and are stored in the extlClntAppOauthPolicies folder.

## Version

ExtlClntAppOauthConfigurablePolicies components are available in API version 59.0 and later.

## Special Access Rules

The View all External Client Apps, view their settings, and edit their policies user permission is required for users with admin roles to configure OAuth policies.

## Fields

| Field Name | Description |
| --- | --- |
| apexHandler | Field TypestringDescriptionName of the Apex handler. Available in API version 61.0 and later. |
| clientCredentialsFlowUser | Field TypestringDescriptionThe execution user for the OAuth 2.0 client credentials flow. Salesforce returns access tokens on behalf of this user. This user must have the API Only permission. Available in API version 60.0 and later. |
| commaSeparatedCustomScopes | Field TypestringDescriptionCustom scope names in a comma-separated list. Available in API version 61.0 and later. |
| commaSeparatedPermissionSet | Field TypestringDescriptionPermission set IDs in a comma-separated list. This field or commaSeparatedProfile is used when permittedUsersPolicyType is set to AdminApprovedPreAuthorized. |
| commaSeparatedProfile | Field TypestringDescriptionProfiles in a comma-separated list. This field or commaSeparatedPermissionSet is used when permittedUsersPolicyType is set to AdminApprovedPreAuthorized. |
| customAttributes | Field TypeExtlClntAppOauthPoliciesAttribute[]DescriptionUnique attributes to be included as admin defaults. The maximum number accepted is 128. Each custom attribute must have a unique key and use an available field. |
| executeHandlerAs | Field TypestringDescriptionUsername of the Apex handler's execution user. Available in API version 61.0 and later. |
| externalClientApplication | Field TypestringDescriptionRequired.The name of the external client app associated with this OAuth policies file. |
| guestJwtTimeout | Field TypeintDescriptionIf guestJwtSessionTimeoutType is set to Custom, this field defines the amount of time before a JWT-based access token issued to a guest user expires. Values are in minutes.These values are available in API version 61.0 and later.1—1 Minute5—5 Minutes10—10 Minutes15—15 Minutes30—30 MinutesThese values are available in API version 65.0 and later.60—1 Hour90—90 Minutes120—2 Hours240—4 Hours480—8 Hours720—12 HoursIf guestJwtSessionTimeoutType is set to UserSession, omit this field. |
| guestJwtSessionTimeoutType | Field TypeJWTSessionTimeoutType (enumeration of type string)DescriptionSpecifies how the JWT-based access token timeout is defined for guest users. Valid values are:UserSession—Salesforce uses the value from the sessionTimeout field in the ProfileSessionSetting type for the Experience Cloud guest user profile.If there's no profile session timeout for the user, Salesforce uses the sessionTimeout value from the SessionSettings type.If both are defined, Salesforce defaults to the profile session timeout.Custom—Salesforce uses the value from the guestJwtTimeout field.Available in API version 65.0 and later. |
| ipRelaxationPolicyType | Field TypestringDescriptionThe policy that determines IP restrictions.Values are:EnforceBypassBypass_2factorEnforce_RelaxRefresh |
| isClientCredentialsFlowEnabled | Field TypebooleanDescriptionIf true, the client credentials flow is enabled. The default value is false. Available in API version 60.0 and later. |
| isGuestCodeCredFlowEnabled | Field TypebooleanDescriptionIf true, the external client app can use the guest user variation of the Authorization Code and Credentials Flow. To use this flow variation, the external client app must also be configured to issue JWT-based access tokens. The default value is false. Available in API version 61.0 and later. |
| isNamedUserJwtEnabled | Field TypebooleanDescriptionDeprecated.If true, the external client app issues JWT-based access tokens instead of opaque access tokens. If this field is available, it means that the isNamedUserJwtEnabled field in the ExtlClntAppGlobalOauthSettings type is set to true.The default value is false. |
| isTokenExchangeFlowEnabled | Field TypebooleanDescriptionIf truetrue, the token exchange flow is enabled. The default value is false. Available in API version 60.0 and later. |
| label | Field TypestringDescriptionThe OAuth policies name for the external client app. |
| namedUserJwtTimeout | Field TypeintDescriptionIf namedUserJwtSessionTimeoutType is set to Custom, the amount of time before a JWT-based access token issued to a named user expires. Values are in minutes.These values are available in API version 61.0 and later.1—1 Minute5—5 Minutes10—10 Minutes15—15 Minutes30—30 MinutesThese values are available in API version 65.0 and later.60—1 Hour90—90 Minutes120—2 Hours240—4 Hours480—8 Hours720—12 HoursIf namedUserJwtSessionTimeoutType is set to UserSession, omit this field. |
| namedUserJwtSessionTimeoutType | Field TypeJWTSessionTimeoutType (enumeration of type string)DescriptionSpecifies how the JWT-based access token timeout is defined for named users. Valid values are:UserSession—Salesforce uses the value from the sessionTimeout field in the ProfileSessionSetting type for the named user's profile.If there's no profile session timeout for the user, Salesforce uses the sessionTimeout value from the SessionSettings type.If both are defined, Salesforce defaults to the profile session timeout.Custom—Salesforce uses the value from the namedUserJwtTimeout field.Available in API version 65.0 and later. |
| permittedUsersPolicyType | Field TypePermittedUsersPolicyType (enumeration of type string)DescriptionThe policy that determines which users are allowed in the external client app.Values are:AdminApprovedPreAuthorizedAllSelfAuthorized |
| policyAction | Field TypePolicyAction (enumeration of type string)DescriptionRequires users to verify their identity with two-factor authentication when they log in to the external client app. Use RaiseSessionLevel along with requiredSessionLevel to determine the security posture.Values are:BlockRaiseSessionLevel |
| refreshTokenPolicyType | Field TypeRefreshTokenPolicyType (enumeration of type string)DescriptionThe type of policy that determines when a token must be refreshed.Values are:InfiniteSpecificInactivitySpecificLifetimeZero |
| refreshTokenValidityPeriod | Field TypeintDescriptionThe number of units of measure used to specify validity when refresh token policy type is set to SpecificInactivity or SpecificLifetime. |
| refreshTokenValidityUnit | Field TypestringDescriptionThe unit of measurement that is used to specify validity when refresh token policy type is set to SpecificInactivity or SpecificLifetime.Values are:DaysHoursMonths |
| requiredSessionLevel | Field TypeSessionSecurityLevel (enumeration of type string)DescriptionDefines the security posture.Values are:HIGH_ASSURANCELOWSTANDARD |
| sessionTimeoutInMinutes | Field TypeintDescriptionLength of time the external client app’s session lasts. This field applies only if the app issues opaque tokens. |
| singleLogoutUrl | Field TypestringDescriptionURL where Salesforce sends a logout request when users log out of Salesforce. |
| startUrl | Field TypestringDescriptionURL where users are directed after they authenticate. |

## ExtlClntAppOauthPoliciesAttribute

Represents admin-defined attributes that provide personal information to customize the external client app for a specific use case.

| Field Name | Description |
| --- | --- |
| formula | Field TypestringDescriptionRequired.The existing field that includes the desired information. For example, Organization.Country. |
| key | Field TypestringDescriptionRequired.A unique name for the attribute. For example, country. |

## Declarative Metadata Sample Definition

This example shows an ExtlClntAppOauthConfigurablePolicies component.

```

```

This example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").