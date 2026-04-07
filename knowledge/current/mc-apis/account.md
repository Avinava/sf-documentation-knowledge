---
title: "Account"
domain: mc-apis
topic: account
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:40:15.060Z
estimatedTokens: 1741
keywords: [Account, Marketing, Cloud, Retrieving, Embedded, Partner, Items]
---

> The Account object represents a Marketing Cloud account.

# Account

The Account object represents a Marketing Cloud account.

-   To create or update Account subscription data, you need the Administration | Account | Subscription permission.
-   To create or update Account private label data, you need the Administration | Account | Private Labels permission.
-   To create or update Account business rule data, you need the Administration | Account | Business Rules permission.
-   To create or update Account role data, you need the Administration | Business Units | Manage Roles permission.

## Using the Account Object

If the authenticated user exists in an Reseller or Enterprise account and there are more subaccounts available, you can create an Account object. If the authenticated user is a Core account, you can retrieve Account object attributes.

## Retrieving an Account Object

Retrieve an Account object by the unique properties ID or PartnerKey, with more properties available for filtering.

## Embedded Partner Usage

For Embedded partners, the PartnerKey property allows an external identifier to be associated with the account. PartnerKey cannot be updated on once the Account is created, so we recommend using CustomerKey instead.

## Properties

| Name | Data Type | Description |
| --- | --- | --- |
| AccountType | AccountTypeEnum | Type of Marketing Cloud account |
| AccountUsers | AccountUser[] | An array of users associated with a specific account. |
| Address | xsd:string | The physical mailing address required at the bottom of all email messages contains the information described by this property (no P.O. Boxes). The address used to communicate with a Person. |
| BrandID | xsd:int | Specifies brand tags to use on an account |
| BusinessName | xsd:string | Business name of an account's owner |
| BusinessRules | BusinessRule[] | Reserved for future use. |
| Children | AccountDataItem[] | An array of AccountDataItem objects that represent child accounts of this account. |
| City | xsd:string | City of an account's owner to be displayed in the physical mailing address required at the bottom of all email messages |
| Client | ClientID | Specifies the account ownership and context of an object. |
| CorrelationID | xsd:string | Identifies correlation of objects across several requests. |
| Country | xsd:string | Country of an account's owner, as displayed in the physical mailing address required at the bottom of all email messages |
| CreatedDate | xsd:dateTime | Read-only date and time of the object's creation. |
| CustomerID | xsd:long | Reserved for future use. |
| CustomerKey | xsd:string | User-supplied unique identifier for an object within an object type (corresponds to the external key assigned to an object in Marketing Cloud). |
| DBID | xsd:int | Reserved for future use. |
| DeletedDate | xsd:dateTime | Read-only date and time of an account's deletion (the value of this property must be set before the account can be deleted). |
| EditionID | xsd:int | Specifies the product edition of the account |
| Email | xsd:string | Default email address for object. Indicates if subscriber information can be used for email sends. |
| Fax | xsd:string | Fax number of the account's owner |
| FromName | xsd:string | Specifies the default email message From Name. Deprecated for email send definitions and triggered send definitions. |
| ID | xsd:int | Read-only identifier for an object. Some objects use the ObjectID property as the Marketing Cloud unique ID. |
| InheritAddress | xsd:boolean | Specifies that an Enterprise 2.0 business unit inherits the address from the parent business unit |
| IsActive | xsd:int | Specifies whether the object is active |
| IsTestAccount | xsd:boolean | Specifies whether an account is a "Test" account |
| IsTrialAccount | xsd:boolean | Reserved for future use. |
| LanguageLocale | Locale | Defines language preferences associated with a account, business unit, or user. |
| Locale | Locale | Contains the locale information for an Account. If no location is set, Locale defaults to en-US. |
| ModifiedDate | Nullable`1 | Indicates the last time object information was modified. |
| Name | xsd:string | Name of the object or property. |
| ObjectID | xsd:string | System-controlled, read-only text string identifier for object. |
| ObjectState | xsd:string | Reserved for future use. |
| OrgID | xsd:int | Parent account ID for On-Your-Behalf or Lock-and-Publish accounts |
| Owner | Owner | Describes account ownership of subscriber in an on-your-behalf account. |
| ParentAccount | Account | Provides more information regarding the parent account. |
| ParentID | xsd:int | Specifies the ID number of the parent account for Lock and Publish, On Your Behalf, Enterprise, and Enterprise 2.0 account children and business units. |
| ParentName | xsd:string | Specifies the name of the Parent account |
| PartnerKey | xsd:string | Unique identifier provided by partner for an object. This property is accessible only via API. |
| PartnerProperties | APIProperty[] | A collection of metadata supplied by the client and stored by the system. These properties are accessible only via API. |
| Phone | xsd:string | Specifies a phone number. Specifies the phone number of the account owner. Specifies the Phone data type |
| PrivateLabelID | xsd:int | Specifies the private label for an account |
| PrivateLabels | PrivateLabel[] | Specifies UI modifications to use on child accounts |
| ReportingParentID | xsd:int | Reserved for future use |
| Roles | Role[] | Collection of roles defined for an account. |
| State | xsd:string | Specifies the geographical state of the account's owner. The physical mailing address required at the bottom of all email messages contains the information described by this property. |
| Subscription | Subscription | Reserved for future use. |
| TimeZone | TimeZone | Contains time zone information for an Account. For Create and Update calls, this property defines the time zone for an Account object. On a Retrieve call, TimeZone indicates which time zone is in effect for the Account object in question. Without a specific time zone, the Account defaults to Central Standard Time. |
| Zip | xsd:string | Specifies the zip code of the account's owner. The physical mailing address required at the bottom of all email messages contains the information described by this property. |

## Related Items

-   [Supported Operations for Objects and Methods](https://developer.salesforce.com/docs/atlas.en-us.mc-apis.meta/mc-apis/supported_operations_for_objects_and_methods.htm)
-   [Create an Agency Client Object](atlas.en-us.noversion.mc-apis.meta/mc-apis/creating_an_agency_client_object.htm)
-   [Manage Enterprise 2.0 Accounts](atlas.en-us.noversion.mc-apis.meta/mc-apis/managing_enterprise_20_accounts_with_the_web_services_api.htm)
-   [Retrieve Account Object Using the CustomerKey Attribute](atlas.en-us.noversion.mc-apis.meta/mc-apis/retrieving_account_object_using_the_partnerkey_attribute.htm)

## Related Topics

- Create an Agency Client Object (atlas.en-us.noversion.mc-apis.meta/mc-apis/creating_an_agency_client_object.htm)
- Manage Enterprise 2.0 Accounts (atlas.en-us.noversion.mc-apis.meta/mc-apis/managing_enterprise_20_accounts_with_the_web_services_api.htm)
- Retrieve Account Object Using the CustomerKey Attribute (atlas.en-us.noversion.mc-apis.meta/mc-apis/retrieving_account_object_using_the_partnerkey_attribute.htm)
