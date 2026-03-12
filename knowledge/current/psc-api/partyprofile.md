---
title: "PartyProfile"
domain: psc-api
topic: partyprofile
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:34.092Z
estimatedTokens: 3905
keywords: [PartyProfile, profile, party, account, API, version, 62.0, later, Calls, Special, Access, Rules, Associated, Objects]
---

# PartyProfile

> Represents information about the profile of a party, such as an
         account. This object is available in API version 62.0 and later.

# PartyProfile

Represents information about the profile of a party, such as an account. This object is available in API version 62.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

This object is available if Talent Recruitment Management is enabled in your org. To access the object, you need one of these permission sets.

| User Type | Permission Set |
| --- | --- |
| Internal Users | Talent Recruitment Management Specialist Access |
| Salesforce Platform Users | Talent Recruitment Management Hiring Manager AccessORTalent Recruitment Management Employee Access |
| Customer and Partner Community Users | Talent Recruitment Management Applicant Access |

## Fields

| Field | Details |
| --- | --- |
| AccountId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the account that's associated with the party profile.This field is a relationship field.Relationship NameAccountRelationship TypeLookupRefers ToAccount |
| BusLicIssAuthorityName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the business license issuing authority. |
| BusinessEntityCtryofInc | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the country where the business entity was formed. |
| BusinessEntityCtryofRgstr | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the country where the business entity is registered. |
| BusinessEntityIncDate | TypedatePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe incorporation date of the business entity associated with the party profile. |
| BusinessEntityIncNumber | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe incorporation number of the business entity associated with the party profile. |
| BusinessEntityName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe registered name of the business entity associated with the party profile. |
| BusinessEntityPreviousNames | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionAny previous names of the business entity associated with the party profile. |
| BusinessEntityRgstrDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe registration date of the business entity associated with the party profile. |
| BusinessEntityRgstrNumber | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe registration number of the business entity associated with the party profile. |
| BusinessEntityTradeName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe trading name of the business entity associated with the party profile. |
| BusinessEntityType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the type of the business entity associated with the party profile.Picklist values for this field aren't predefined. Before you create a record, ensure that your Salesforce admin has defined picklist values according to your organization’s requirements. |
| ContactId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the contact that's associated with the party profile.This field is a relationship field.Relationship NameContactRelationship TypeLookupRefers ToContact |
| CountryOfDomicile | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the country of domicile in the party profile. |
| CountryofBirth | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the country of birth in the party profile. |
| CreditScore | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe credit score of the party. |
| CreditScoreProvider | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the name of the agency that provides the credit score of the party. |
| EmploymentIndustry | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the employment industry of the party specified in the profile.Picklist values for this field aren't predefined. Before you create a record, ensure that your Salesforce admin has defined picklist values according to your organization’s requirements. |
| EmploymentType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the type of employment held by the party.Picklist values for this field aren't predefined. Before you create a record, ensure that your Salesforce admin has defined picklist values according to your organization’s requirements. |
| Ethnicity | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the ethnicity of the applicant.Available in API version 66.0 and later. |
| FirstName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe first name of the party in the profile. |
| FullName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe full name of the party in the profile. |
| FundSource | TypemultipicklistPropertiesCreate, Filter, Nillable, UpdatePicklist values for this field aren't predefined. Before you create a record, ensure that your Salesforce admin has defined picklist values according to your organization’s requirements. |
| Gender | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the gender of the party in the profile.Picklist values for this field aren't predefined. Before you create a record, ensure that your Salesforce admin has defined picklist values according to your organization’s requirements. |
| HouseholdAccountId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the household account that's associated with the party profile.This field is a relationship field.Relationship NameHouseholdAccountRelationship TypeLookupRefers ToAccount |
| Industry | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionRepresents the industry in which a business entity operates. |
| IndustryClassificationCode | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe unique code associated with the industry in which a business entity operates. |
| IsBusEntyListonStockExch | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionSpecifies whether the business entity is listed on a stock exchange (true) or not (false).The default value is false. |
| IsNetWorthHigh | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the customer has a high net worth (true) or not (false).The default value is false. |
| IsOffBoarded | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the party profile was off-boarded (true) or not (false).The default value is false. |
| LastName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe last name of the party in the profile. |
| LastProfileReviewDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date when the party profile was last reviewed. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| LeadId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe lead that's associated with the party profile.This field is a relationship field.Relationship NameLeadRelationship TypeLookupRefers ToLead |
| LegalEntityIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe unique identifier of the business entity used in all financial transactions. |
| MiddleName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe middle name of the party in the profile. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the party profile record. |
| Nationality | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe nationalities held by the party profile. |
| NextProfileReviewDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date of the next party profile review. |
| OffBoardingComments | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date of the next party profile review. |
| OffBoardingReason | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe reason the party profile was off-boarded. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the record owner.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| PreferredCommunicationMethod | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the preferred communication method for the applicant.Available in API version 66.0 and later. |
| Prefix | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe prefix used by the party. |
| PrimaryEmail | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe primary email address of the party that's specified in the profile. |
| PrimaryIdentificationName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the primary identification document specified in the profile. |
| PrimaryIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe unique identifier for the party. |
| PrimaryIdentifierType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the type of primary identification document defined in the profile.Picklist values for this field aren't predefined. Before you create a record, ensure that your Salesforce admin has defined picklist values according to your organization’s requirements. |
| PrimaryPhone | TypephonePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe primary phone number of the party that's specified in the profile. |
| RelatedPartyProfileId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the party profile record associated with this record.This field is a relationship field.Relationship NameRelatedPartyProfileRelationship TypeLookupRefers ToPartyProfile |
| ResidentType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the type of party residency in the profile. |
| ReviewDecision | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the decision taken after the party profile review is complete.Picklist values for this field aren't predefined. Before you create a record, ensure that your Salesforce admin has defined picklist values according to your organization’s requirements. |
| Stage | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe current stage of the party profile.Picklist values for this field aren't predefined. Before you create a record, ensure that your Salesforce admin has defined picklist values according to your organization’s requirements. |
| StockExchangeName | TypemultipicklistPropertiesCreate, Filter, Nillable, UpdateDescriptionSpecifies the name of the stock exchange where the business entity is listed.Picklist values for this field aren't predefined. Before you create a record, ensure that your Salesforce admin has defined picklist values according to your organization’s requirements. |
| Suffix | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe suffix used by the party. |
| SurnameAtBirth | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe party surname at birth specified in the profile. |
| TaxpayerIdentificationNumber | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe taxpayer identifier that's used for tax purposes. |
| TaxpayerIdentificationType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe type of taxpayer identification used for tax purposes.Picklist values for this field aren't predefined. Before you create a record, ensure that your Salesforce admin has defined picklist values according to your organization’s requirements. |
| Type | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the type of the party profile associated with the applicant.Possible values are:BusinessIndividual |
| RetirementFundAccountNumber | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe retirement fund account number of the party profile |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[PartyProfileChangeEvent](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[PartyProfileFeed](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[PartyProfileHistory](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[PartyProfileOwnerSharingRule](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[PartyProfileShare](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- PartyProfileChangeEvent (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_change_event.htm)
- PartyProfileFeed (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_feed.htm)
- PartyProfileHistory (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_history.htm)
- PartyProfileOwnerSharingRule (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_ownersharingrule.htm)
- PartyProfileShare (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_share.htm)
