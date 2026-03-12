---
title: "Account"
domain: object-reference
topic: account
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:03.519Z
estimatedTokens: 8483
keywords: [Account, individual, organization, person, involved, business, customers, competitors, partners, Calls, Special, Access, Rules, IsPersonAccount, Usage]
---

# Account

> Represents an individual account, which is an organization or person
			involved with your business (such as customers, competitors, and
		partners).

# Account

Represents an individual account, which is an organization or person involved with your business (such as customers, competitors, and partners).

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), merge(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

Experience Cloud site or Customer Portal users can access their own accounts and any account shared with them.

## Fields

| Field Name | Details |
| --- | --- |
| AccountNumber | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionAccount number assigned to this account (not the unique, system-generated ID assigned during creation). Maximum size is 40 characters. |
| AccountSource | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe source of the account record. For example, Advertisement or Trade Show. The source is selected from a picklist of available values, which are set by an administrator. Each picklist value can have up to 40 characters. |
| ActivityMetricId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionWhen Einstein Activity Capture with Activity Metrics is enabled, the ID of the related activity metric.This field is a relationship field.Relationship NameActivityMetricRefers ToActivityMetric |
| ActivityMetricRollupId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionWhen Einstein Activity Capture with Activity Metrics is enabled, the ID of the related activity metric rollup.This field is a relationship field.Relationship NameActivityMetricRollupRefers ToActivityMetricRollup |
| AnnualRevenue | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionEstimated annual revenue of the account. |
| BillingAddress | TypeaddressPropertiesFilter, NillableDescriptionThe compound form of the billing address. Read-only. For details on compound address fields, see Address Compound Fields. |
| BillingCity | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDetails for the billing address of this account. Maximum size is 40 characters. |
| BillingCountry | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDetails for the billing address of this account. Maximum size is 80 characters. |
| BillingCountryCode | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ISO country code for the account’s billing address. |
| BillingGeocodeAccuracy | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionAccuracy level of the geocode for the billing address. For details on geolocation compound fields, see Compound Field Considerations and Limitations. |
| BillingLatitude | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionUsed with BillingLongitude to specify the precise geolocation of a billing address. Acceptable values are numbers between –90 and 90 with up to 15 decimal places. For details on geolocation compound fields, see Compound Field Considerations and Limitations. |
| BillingLongitude | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionUsed with BillingLatitude to specify the precise geolocation of a billing address. Acceptable values are numbers between –180 and 180 with up to 15 decimal places. See Compound Field Considerations and Limitations for details on geolocation compound fields. |
| BillingPostalCode | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDetails for the billing address of this account. Maximum size is 20 characters. |
| BillingState | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDetails for the billing address of this account. Maximum size is 80 characters. |
| BillingStateCode | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ISO state code for the account’s billing address. |
| BillingStreet | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStreet address for the billing address of this account. |
| ChannelProgramLevelName | TypestringPropertiesGroup, NillableDescriptionRead only. Name of the channel program level the account has enrolled. If this account has enrolled more than one channel program level, the oldest channel program name is displayed. |
| ChannelProgramName | TypestringPropertiesGroup, NillableDescriptionRead only. Name of the channel program the account has enrolled. If this account has enrolled more than one channel program, the oldest channel program name is displayed. |
| CleanStatus | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionIndicates the record’s clean status as compared with Data.com..Possible values are:AcknowledgedThe label on the account record detail page is Reviewed.DifferentInactiveMatched—The label on the account record detail page is In Sync.NotFoundPendingThe label on the account record detail page is Not Compared.SelectMatchSkipped |
| ConnectionReceivedId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionID of the PartnerNetworkConnection that shared this record with your organization. This field is available if you enabled Salesforce to Salesforce. |
| ConnectionSentId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionID of the PartnerNetworkConnection that you shared this record with. This field is available if you enabled Salesforce to Salesforce. This field is supported using API versions earlier than 15.0. In all other API versions, this field’s value is null. You can use the new PartnerNetworkRecordConnection object to forward records to connections. |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionText description of the account. Limited to 32,000 KB. |
| DunsNumber | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe Data Universal Numbering System (D-U-N-S) number is a unique, nine-digit number assigned to every business location in the Dun & Bradstreet database that has a unique, separate, and distinct operation. D-U-N-S numbers are used by industries and organizations around the world as a global standard for business identification and tracking. Maximum size is 9 characters. This field is available on business accounts, not person accounts.NoteThis field is only available to organizations that use Data.com Prospector or Data.com Clean. |
| Fax | TypephonePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionFax number for the account. |
| Industry | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionAn industry associated with this account. For example, Biotechnology. Maximum size is 40 characters. |
| IsBuyer | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates that the account is enabled as a buyer for Lightning B2B Commerce. The default value is false. This field is available in API version 48.0 and later.NoteThis field is only available to organizations that have the B2B Commerce license enabled. |
| IsCustomerPortal | TypebooleanPropertiesDefaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the account has at least one contact enabled to use the org's Experience Cloud site or Customer Portal (true) or not (false). This field is available if Customer Portal is enabled OR digital experiences is enabled.If your org is enabled to use Content Security Policy (CSP) features, then this field is visible on the Account object even if those features are later disabled.If you change this field's value from true to false, you can disable up to 100 Experience Cloud site or Customer Portal users associated with the account and permanently delete all of the account's site roles and groups. You can't restore deleted site roles and groups.Exclude this field when merging accounts.This field can be updated in API version 16.0 and later.TipWe recommend that you update up to 50 contacts simultaneously when changing the accounts on contacts enabled for an Experience Cloud site. We also recommend that you make this update after business hours. |
| IsPartner | TypebooleanPropertiesDefaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the account has at least one contact enabled to use the org's partner portal (true) or not (false). This field is available if partner relationship management (partner portal) is enabled OR digital experiences is enabled and you have partner portal licenses.If you change this field's value from true to false, you can disable up to 15 partner portal users associated with the account and permanently delete all of the account's partner portal roles and groups. You can't restore deleted partner portal roles and groups.Disabling a partner portal user in the Salesforce user interface or the API doesn’t change this field's value from true to false.Even if this field's value is false, you can enable a contact on an account as a partner portal user via the API.Exclude this field when merging accounts.This field can be updated in API version 16.0 and later.TipWe recommend that you update up to 50 contacts simultaneously when changing the accounts on contacts enabled for an Experience Cloud site. We also recommend that you make this update after business hours. |
| IsPersonAccount | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionRead only. Label is Is Person Account. Indicates whether this account has a record type of Person Account (true) or not (false). |
| IsPriorityRecord | TypebooleanPropertiesDefaulted on create, GroupDescriptionShows whether the user has marked the account as important (True) or not (False). The default value is false. Available in API version 60.0 and later. |
| Jigsaw | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReferences the ID of a company in Data.com. If an account has a value in this field, it means that the account was imported from Data.com. If the field value is null, the account was not imported from Data.com. Maximum size is 20 characters. Available in API version 22.0 and later. Label is Data.com Key. This field is available on business accounts, not person accounts.ImportantThe Jigsaw field is exposed in the API to support troubleshooting for import errors and reimporting of corrected data. Do not modify the value in the Jigsaw field. |
| JigsawCompanyId | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe ID of the company in reference to Jigsaw.ImportantThe Jigsaw field is exposed in the API to support troubleshooting for import errors and reimporting of corrected data. Don’t modify the value in the Jigsaw field. |
| LastActivityDate | TypedatePropertiesFilter, Group, Nillable, SortDescriptionValue is one of the following, whichever is the most recent:Due date of the most recent event logged against the record.Due date of the most recently closed task associated with the record. |
| LastReferencedDate | TypedatetimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedatetimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, the user might have only accessed this record or list view (LastReferencedDate), but not viewed it. |
| MasterRecordId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionIf this object was deleted as the result of a merge, this field contains the ID of the record that was kept. If this object was deleted for any other reason, or has not been deleted, the value is null.This is a relationship field.Relationship NameMasterRecordRelationship TypeLookupRefers ToAccount |
| NaicsCode | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe six-digit North American Industry Classification System (NAICS) code is the standard used by business and government to classify business establishments into industries, according to their economic activity for the purpose of collecting, analyzing, and publishing statistical data related to the U.S. business economy. Maximum size is 8 characters. This field is available on business accounts, not person accounts.NoteThis field is only available to organizations that use Data.com Prospector or Data.com Clean. |
| NaicsDesc | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA brief description of an org’s line of business, based on its NAICS code. Maximum size is 120 characters. This field is available on business accounts, not person accounts.NoteThis field is only available to organizations that use Data.com Prospector or Data.com Clean. |
| Name | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. Label is Account Name. Name of the account. Maximum size is 255 characters. If the account has a record type of Person Account:This value is the concatenation of the FirstName, MiddleName, LastName, and Suffix of the associated person contact.You can't modify this value. |
| NumberOfEmployees | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionLabel is Employees. Number of employees working at the company represented by this account. Maximum size is eight digits. |
| OperatingHoursId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe operating hours associated with the account. Available only if Field Service is enabled.This is a relationship field.Relationship NameOperatingHoursRelationship TypeLookupRefers ToOperatingHours |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user who currently owns this account. Default value is the user logged in to the API to perform the create.If you have set up account teams in your org, updating this field has different consequences depending on your version of the API:For API version 12.0 and later, sharing records are kept, as they are for all objects.For API version before 12.0, sharing records are deleted.For API version 16.0 and later, users must have the “Transfer Record” permission in order to update (transfer) account ownership using this field.This is a relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToUser |
| Ownership | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionOwnership type for the account, for example Private, Public, or Subsidiary. |
| ParentId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the parent object, if any.This is a relationship field.Relationship NameParentRelationship TypeLookupRefers ToAccount |
| PersonActionCadenceAssigneeId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the sales rep designated to work the lead through their assigned cadence. This field is available in API version 47.0 and later when the Sales Engagement license is enabled. To see this field, the user also needs the Sales Engagement User or Sales Engagement Quick Cadence Creator user permission set.This field is a polymorphic relationship field.Relationship NamePersonActionCadenceAssigneeRefers ToGroup, User |
| PersonActionCadenceId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the lead’s assigned cadence. This field is available in API version 46.0 and later when the Sales Engagement license is enabled. To see this field, the user also needs the Sales Engagement User or Sales Engagement Quick Cadence Creator user permission set.This is a relationship field.Relationship NamePersonActionCadenceRefers ToActionCadence |
| PersonActionCadenceState | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe state of the current action cadence tracker. This field is available in API version 50.0 and later when the Sales Engagement license is enabled. To see this field, the user also needs the Sales Engagement User or Sales Engagement Quick Cadence Creator user permission set.Possible values are:CompleteErrorInitializingPausedProcessingRunning |
| PersonIndividualId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the data privacy record associated with this person’s account. This field is available if you enabled Data Protection and Privacy in Setup.Available in API version 42.0 and later. |
| PersonScheduledResumeDateTime | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time when the action cadence tracker is going to resume after it’s paused or on a wait step. This field is available in API version 54.0 and later when the Sales Engagement license is enabled. To see this field, the user also needs the Sales Engagement User or Sales Engagement Quick Cadence Creator user permission set. |
| Phone | TypephonePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionPhone number for this account. Maximum size is 40 characters. |
| PhotoUrl | TypeurlPropertiesFilter, Group, Nillable, SortDescriptionPath to be combined with the URL of a Salesforce instance (for example, https://yourInstance.salesforce.com/) to generate a URL to request the social network profile image associated with the account. Generated URL returns an HTTP redirect (code 302) to the social network profile image for the account.Blank if Social Accounts and Contacts isn't enabled for the org or if Social Accounts and Contacts is disabled for the requesting user. |
| Rating | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe account’s prospect rating, for example Hot, Warm, or Cold. |
| RecordTypeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the record type assigned to this object. |
| Salutation | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionHonorific added to the name for use in letters, etc. This field is available on person accounts. |
| ShippingAddress | TypeaddressPropertiesFilter, NillableDescriptionThe compound form of the shipping address. Read-only. See Address Compound Fields for details on compound address fields. |
| ShippingCity | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDetails of the shipping address for this account. City maximum size is 40 characters |
| ShippingCountry | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDetails of the shipping address for this account. Country maximum size is 80 characters. |
| ShippingCountryCode | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ISO country code for the account’s shipping address. |
| ShippingGeocodeAccuracy | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionAccuracy level of the geocode for the shipping address. For details on geolocation compound fields, see Compound Field Considerations and Limitations. |
| ShippingLatitude | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionUsed with ShippingLongitude to specify the precise geolocation of a shipping address. Acceptable values are numbers between –90 and 90 with up to 15 decimal places. For details on geolocation compound fields, see Compound Field Considerations and Limitations. |
| ShippingLongitude | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionUsed with ShippingLatitude to specify the precise geolocation of an address. Acceptable values are numbers between –180 and 180 with up to 15 decimal places. For details on geolocation compound fields, see Compound Field Considerations and Limitations. |
| ShippingPostalCode | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDetails of the shipping address for this account. Postal code maximum size is 20 characters. |
| ShippingState | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDetails of the shipping address for this account. State maximum size is 80 characters. |
| ShippingStateCode | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ISO state code for the account’s shipping address. |
| ShippingStreet | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe street address of the shipping address for this account. Maximum of 255 characters. |
| Sic | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStandard Industrial Classification code of the company’s main business categorization, for example, 57340 for Electronics. Maximum of 20 characters. This field is available on business accounts, not person accounts. |
| SicDesc | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA brief description of an org’s line of business, based on its SIC code. Maximum length is 80 characters. This field is available on business accounts, not person accounts. |
| Site | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionName of the account’s location, for example Headquarters or London. Label is Account Site. Maximum of 80 characters. |
| TickerSymbol | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe stock market symbol for this account. Maximum of 20 characters. This field is available on business accounts, not person accounts. |
| Tradestyle | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA name, different from its legal name, that an org may use for conducting business. Similar to “Doing business as” or “DBA”. Maximum length is 255 characters. This field is available on business accounts, not person accounts.NoteThis field is only available to organizations that use Data.com Prospector or Data.com Clean. |
| Type | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionType of account, for example, Customer, Competitor, or Partner. |
| Website | TypeurlPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe website of this account. Maximum of 255 characters. |
| YearStarted | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when an org was legally established. Maximum length is 4 characters. This field is available on business accounts, not person accounts.NoteThis field is only available to organizations that use Data.com Prospector or Data.com Clean. |

## IsPersonAccount Fields

These fields are the subset of person account fields that are contained in the child person contact record of each person account. If the IsPersonAccount field has the value false, the following fields have a null value and can't be modified. If true, the fields can be modified.

Person account fields only show when person accounts are enabled. Person accounts are disabled by default.

| Field Name | Details |
| --- | --- |
| FirstName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionFirst name of the person for a person account. Maximum size is 40 characters. |
| LastName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionLast name of the person for a person account. Required if the record type is a person account record type. Maximum size is 80 characters. |
| MiddleName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionMiddle name of the person for a person account. Maximum size is 40 characters. |
| PersonAssistantName | TypestringPropertiesCreate, Filter, Nillable, UpdateDescriptionThe person account’s assistant name. Label is Assistant. Maximum size is 40 characters. |
| PersonAssistantPhone | TypephonePropertiesCreate, Filter, Nillable, UpdateDescriptionThe person account’s assistant phone. Label is Asst. Phone. Maximum size is 40 characters. |
| PersonBirthDate | TypedatePropertiesCreate, Filter, Nillable, UpdateDescriptionThe birthday of the contact associated with this person account. Label is Birthdate. The year portion of the PersonBirthDate field is ignored in filter criteria, including report filters, list view filters, and SOQL queries. For example, the following SOQL query returns person accounts with birthdays later in the year than today:SELECT FirstName, LastName, PersonBirthDate FROM Account WHERE Birthdate > TODAY |
| PersonContactId | TypereferencePropertiesFilter, Nillable, UpdateDescriptionThe ID for the contact associated with this person account. Label is Contact ID. |
| PersonDepartment | TypestringPropertiesCreate, Filter, Nillable, UpdateDescriptionThe department. Label is Department. Maximum size is 80 characters. |
| PersonEmail | TypeemailPropertiesCreate, Filter, Nillable, UpdateDescriptionEmail address for this person account. Label is Email. |
| PersonEmailBouncedDate | TypedateTimePropertiesCreate, Filter, Nillable, UpdateDescriptionIf bounce management is activated and an email sent to the person account bounces, the date and time the bounce occurred. |
| PersonEmailBouncedReason | TypestringPropertiesCreate, Filter, Nillable, UpdateDescriptionIf bounce management is activated and an email sent to the person account bounces, the reason the bounce occurred |
| PersonGenderIdentity | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe person’s internal experience of their gender, which may or may not correspond to the person’s designated sex at birth. Label is Gender Identity. |
| PersonHasOptedOutOfEmail | TypebooleanPropertiesCreate, Filter, Nillable, UpdateDescriptionIndicates whether the person account has opted out of email (true) or not (false). Label is Email Opt Out. |
| PersonHomePhone | TypephonePropertiesCreate, Filter, Nillable, UpdateDescriptionThe home phone number for this person account. Label is Home Phone. |
| PersonLeadSource | TypepicklistPropertiesCreate, Filter, Nillable, UpdateDescriptionThe person account’s lead source. Label is Lead Source. |
| PersonMailingAddress | TypeaddressPropertiesFilter, NillableDescriptionThe compound form of the person account mailing address. Read-only. For details on compound address fields, see Address Compound Fields. |
| PersonMailingCityPersonMailingCountryPersonMailingPostalCodePersonMailingState | TypestringPropertiesCreate, Filter, Nillable, UpdateDescriptionDetails about the mailing address for this person account. Labels are Mailing City, Mailing Country, Postal Code, and State. Maximum size for city and country is 40 characters. Maximum size for postal code and state is 20 characters. |
| PersonMailingCountryCodePersonMailingStateCode | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ISO country or state code for the mailing address of the person account. |
| PersonMailingGeocodeAccuracy | TypepicklistPropertiesRetrieve, Query, Restricted picklist, NillableDescriptionAccuracy level of the geocode for the person’s mailing address. For details on geolocation compound fields, see Compound Field Considerations and Limitations. |
| PersonMailingLatitude | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionUsed with PersonMailingLongitude to specify the precise geolocation of a person account’s mailing address. Acceptable values are numbers between –90 and 90 with up to 15 decimal places. For details on geolocation compound fields, see Compound Field Considerations and Limitations. |
| PersonMailingLongitude | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionUsed with PersonMailingLatitude to specify the precise geolocation of a person account’s mailing address. Acceptable values are numbers between –180 and 180 with up to 15 decimal places. For details on geolocation compound fields, see Compound Field Considerations and Limitations. |
| PersonMailingStreet | TypetextareaPropertiesCreate, Filter, Nillable, UpdateDescriptionThe mailing street address for this person account. Label is Mailing Street. Maximum size is 255 characters. |
| PersonMobilePhone | TypephonePropertiesCreate, Filter, Nillable, UpdateDescriptionThe mobile phone number for this person account. Label is Mobile. |
| PersonOtherCityPersonOtherCountryPersonOtherPostalCodePersonOtherState | TypestringPropertiesCreate, Filter, Nillable, UpdateDescriptionDetails about the alternate address for this person account. Labels are Other City, Other Country, Other Zip/Postal Code, and Other State. |
| PersonOtherCountryCodePersonOtherStateCode | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ISO country or state code for the alternate address of the person account. |
| PersonOtherLatitude | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionUsed with PersonOtherLongitude to specify the precise geolocation of a person account’s alternate address. Acceptable values are numbers between –90 and 90 with up to 15 decimal places. For details on geolocation compound fields, see Compound Field Considerations and Limitations. |
| PersonOtherLongitude | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionUsed with PersonOtherLatitude to specify the precise geolocation of a person account’s alternate address. Acceptable values are numbers between –180 and 180 with up to 15 decimal places. For details on geolocation compound fields, see Compound Field Considerations and Limitations. |
| PersonOtherPhone | TypephonePropertiesCreate, Filter, Nillable, UpdateDescriptionThe alternate phone number for this person account. Label is Other Phone. |
| PersonOtherStreet | TypetextareaPropertiesCreate, Filter, Nillable, UpdateDescriptionThe person account’s alternate street address. Label is Other Street. |
| PersonPronouns | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe individual’s personal pronouns, reflecting their gender identity. Others can use these pronouns to refer to the individual in the third person. The entry is selected from a picklist of available values, which the administrator sets. Maximum 40 characters. Label is Pronouns.Possible values are:He/HimHe/TheyNot ListedShe/HerShe/TheyThey/Them |
| PersonReportsToId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort UpdateDescriptionID of the person account or contact that this person account reports to.This field doesn't appear if enableReportsToOnPersonAccount in the AccountSettings metadata type is false.Available in API version 62.0 and later.This is a relationship field.Relationship NamePersonReportsToRelationship TypeLookupRefers ToContact |
| PersonTitle | TypestringPropertiesCreate, Filter, Nillable, UpdateDescriptionThe person account’s title. Label is Title. Maximum size is 80 characters. When converting a lead to a person account, the conversion fails if the lead’s Title field contains more than 80 characters. |
| Suffix | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionName suffix of the person for a person account. Maximum size is 40 characters. |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

When importing account data, users need the Set Audit Fields upon Record Creation permission to assign values to audit fields such as CreatedDate. Audit fields are automatically updated during API operations unless you set these fields yourself.

## Usage

Use this object to query and manage accounts in your org. Client applications can create, update, delete, or query Attachment records associated with an account via the API.

Client applications can also create or update account objects by converting a Lead via the convertLead() call.

If the values in the IsPersonAccount Fields are not null, you can't change IsPersonAccount to false or an error occurs.

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[AccountChangeEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm) (API version 44.0)

Change events are available for the object.

[AccountFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm) (API version 18.0)

Feed tracking is available for the object.

[AccountHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm) (API version 11.0)

History is available for tracked fields of the object.

[AccountOwnerSharingRule](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_accountownersharingrule.htm)

Sharing rules are available for the object.

[AccountShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_accountshare.htm)

Sharing is available for the object.

#### See Also

-   [AccountShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_accountshare.htm "Represents a sharing entry on an account.")

-   [AccountTeamMember](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_accountteammember.htm "Represents a User who is a member of an Account team.")

-   [*SOAP API Developer Guide*: Person Account Record Types](https://developer.salesforce.com/docs/atlas.en-us.260.0.api.meta/api/sforce_api_guidelines_personaccounts.htm "SOAP API Developer Guide: Person Account Record
    Types - HTML (New Window)")

## Code Examples

```
SELECT FirstName, LastName, PersonBirthDate
FROM Account
WHERE Birthdate > TODAY
```

## Related Topics

- Address Compound Fields (atlas.en-us.object_reference.meta/object_reference/compound_fields_address.htm)
- Compound Field Considerations and Limitations (atlas.en-us.object_reference.meta/object_reference/compound_fields_limitations.htm)
- AccountShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_accountshare.htm)
- AccountTeamMember (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_accountteammember.htm)
