---
title: "AccountUser"
domain: mc-apis
topic: accountuser
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:40:15.088Z
estimatedTokens: 1168
keywords: [AccountUser, individual, user, account, Items]
---

> The AccountUser object is an individual user within an account.

# AccountUser

The AccountUser object is an individual user within an account.

-   To create or update AccountUser roles, you need the Salesforce Marketing Cloud | General | Assign Marketing Cloud Roles or the Administration | Users | Manage Roles permissions.
-   To associate business units to the AccountUser, you need the Administration | Users | Manage Business Units and either Administration | Users | Create or Update permissions.

## Properties

| Name | Data Type | Description |
| --- | --- | --- |
| AccountUserID | Nullable`1 | Specifies the Marketing Cloud identifier of an account user |
| ActiveFlag | xsd:boolean | Specifies the status of an account user |
| AssociatedBusinessUnits | BusinessUnit[] | Indicates the business units the account user is associated with and can access. This property is non-retrievable. |
| BusinessUnit | xsd:int | Specifies the account identifier of the business unit |
| ChallengeAnswer | xsd:string | Specifies the challenge answer for login assistance |
| ChallengePhrase | xsd:string | Specifies the challenge answer for login assistance |
| Client | ClientID | Specifies the account ownership and context of an object. |
| CorrelationID | xsd:string | Identifies correlation of objects across several requests. |
| CreatedDate | xsd:dateTime | Read-only date and time of the object's creation. |
| CustomerKey | xsd:string | User-supplied unique identifier for an object within an object type. This property corresponds to the external key assigned to an object in Marketing Cloud. |
| DefautApplication | xsd:string | Specifies app the account user initially accesses |
| DefaultBusinessUnit | xsd:int | Indicates that business unit account user initially accesses |
| DefaultBusinessUnitObject | BusinessUnit | Specifies the default business unit for a user. |
| Delete | xsd:int | Indicates whether an object gets deleted. |
| Email | xsd:string | Default email address for object. Indicates if subscriber information can be used for email sends. |
| ID | xsd:int | Read-only identifier for an object. Some objects use the ObjectID property as the Marketing Cloud unique ID. |
| IsAPIUser | xsd:boolean | Indicates if a user can use the API. A value of true indicates that the user's password remains the same until actively changed. |
| IsLocked | xsd:boolean | Indicates if account user can or cannot log into their account |
| LanguageLocale | Locale | Defines language preferences associated with a account, business unit, or user. |
| LastSuccessfulLogin | xsd:dateTime | Indicates data and time user last successfully logged in (read-only). |
| Locale | Locale | Contains the locale information for an Account. If no location is set, Locale defaults to en-US. |
| ModifiedDate | Nullable`1 | Indicates the last time object information was modified. |
| MustChangePassword | xsd:boolean | Indicates whether user must change password on next login |
| Name | xsd:string | Name of the object or property. |
| NotificationEmailAddress | xsd:string | Indicates email address to which to send notifications |
| ObjectID | xsd:string | System-controlled, read-only text string identifier for object. |
| ObjectState | xsd:string | Reserved for future use. |
| Owner | Owner | Describes account ownership of subscriber in an on-your-behalf account. |
| PartnerKey | xsd:string | Unique identifier provided by partner for an object. This property is accessible only via API. |
| PartnerProperties | APIProperty[] | A collection of metadata supplied by the client and stored by the system. These properties are accessible only via API. |
| Password | xsd:string | Property definition. |
| Roles | Role[] | Collection of roles defined for an account. |
| SsoIdentities | SsoIdentity[] | Identifies single sign-on identities associated with the account user. |
| TimeZone | TimeZone | Contains time zone information for an Account. For Create and Update calls, this property defines the time zone for an Account object. On a Retrieve call, TimeZone indicates which time zone is in effect for the Account object in question. Without a specific time zone, the Account defaults to Central Standard Time. |
| Unlock | xsd:boolean | Indicates whether user gets unlocked |
| UserID | xsd:string | Indicates username for an account. |
| UserPermissions | UserAccess[] | For internal use only |

## Related Items

-   [Supported Operations for Objects and Methods](https://developer.salesforce.com/docs/atlas.en-us.mc-apis.meta/mc-apis/supported_operations_for_objects_and_methods.htm)
-   [Manage Enterprise 2.0 Accounts](atlas.en-us.noversion.mc-apis.meta/mc-apis/managing_enterprise_20_accounts_with_the_web_services_api.htm)

## Related Topics

- Manage Enterprise 2.0 Accounts (atlas.en-us.noversion.mc-apis.meta/mc-apis/managing_enterprise_20_accounts_with_the_web_services_api.htm)
