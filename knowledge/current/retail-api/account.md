---
title: "Account"
domain: retail-api
topic: account
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:37.497Z
estimatedTokens: 4007
keywords: [Account, Standard, custom, extend, Consumer, Goods, Cloud, represent, individual, company, person, involved, business, customers, competitors]
---

# Account

> Standard and custom fields extend the standard Account object for use
         in Consumer Goods Cloud to represent an individual account, which is an company or person
         involved with your business, such as customers, competitors, and partners. This object
      is available in API version 55.0 and later.

# Account

Standard and custom fields extend the standard Account object for use in Consumer Goods Cloud to represent an individual account, which is an company or person involved with your business, such as customers, competitors, and partners. This object is available in API version 55.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), merge(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AccountNumber | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionAccount number assigned to the account (not the unique, auto-generated ID assigned during creation). Can have up to 40 characters. |
| AccountSource | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSource of the account record:Possible values are:OtherPartner ReferralPhone InquiryPurchased ListWebThe source is selected from an administrator-set picklist. Each picklist value can have up to 40 characters. |
| AnnualRevenue | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionEstimated annual revenue of the account. |
| BillingAddress | TypeaddressPropertiesFilter, NillableDescriptionCompound form of the billing address. Read-only. See Address Compound Fields for details on compound address fields. |
| BillingCity | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDetails for the billing address of the account. Can have up to 40 characters. |
| BillingCountry | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDetails for the billing address of the account. Can have up to 80 characters. |
| BillingGeocodeAccuracy | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionAccuracy level of the geocode for the billing address:Possible values are:AddressBlockCityCountyExtendedZipNearAddressNeighborhoodStateStreetUnknownZipSee Compound Field Considerations and Limitations for details on geolocation compound fields. |
| BillingLatitude | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionUsed with BillingLongitude to specify the precise geolocation of a billing address. Acceptable values are numbers between –90 and 90, up to 15 decimal places. See Compound Field Considerations and Limitations for details on geolocation compound fields. |
| BillingLongitude | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionUsed with BillingLatitude to specify the precise geolocation of a billing address. Acceptable values are numbers between –180 and 180, up to 15 decimal places. See Compound Field Considerations and Limitations for details on geolocation compound fields. |
| BillingPostalCode | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDetails for the billing address of the account. Can have up to 20 characters. |
| BillingState | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDetails for the billing address of this account. Can have up to 80 characters. |
| BillingStreet | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStreet name in the billing address of the account. |
| CleanStatus | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionIndicates the record’s clean status compared with Data.com:Possible values are:Acknowledged—ReviewedDifferentInactiveMatched—In SyncNotFound—Not FoundPending—Not ComparedSelectMatch—Select MatchSkipped |
| DandbCompanyId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the Dun & Bradstreet® company record associated with the account.This field is a relationship field.Relationship NameDandbCompanyRelationship TypeLookupRefers ToDandBCompany |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionText description of the account. Limited to 32,000 KB. |
| DunsNumber | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe Data Universal Numbering System (D-U-N-S) number is a unique, nine-digit number assigned to every business location in the Dun & Bradstreet database that has a unique, separate, and distinct operation. D-U-N-S numbers are used by industries and organizations around the world as a global standard for business identification and tracking. Maximum size is nine characters. This field is available only on business accounts.NoteThis field is available only to companies that use Data.com Prospector or Data.com Clean. |
| Fax | TypephonePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionFax number of the account. |
| Industry | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionIndustry associated with the account. Can have up to 40 characters.Possible values are:AgricultureApparelBankingBiotechnologyChemicalsCommunicationsConstructionConsultingEducationElectronicsEnergyEngineeringEntertainmentEnvironmentalFinanceFood & BeverageGovernmentHealthcareHospitalityInsuranceMachineryManufacturingMediaNot For ProfitOtherRecreationRetailShippingTechnologyTelecommunicationsTransportationUtilities |
| Jigsaw | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReferences the ID of a company in Data.com. Accounts imported from Data.com always have a value in this field, while accounts not imported from Data.com have a null value. Can have up to 20 characters. Available in API version 22.0 and later. Label is Data.com Key. This field is available only on business accounts. |
| JigsawCompanyId | TypestringPropertiesFilter, Group, Nillable, SortDescriptionID of a company in Data.com.Relationship field.Relationship NameJigsawCompanyRelationship TypeLookupRefers Tonull |
| LastActivityDate | TypedatePropertiesFilter, Group, Nillable, SortDescriptionDate when a user last modified the record. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionMost recent date on which a user referenced the record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionMost recent date on which a user viewed the record. |
| MasterRecordId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionIf this object was deleted as the result of a merge, then this field contains the ID of the record that was kept. If this object was deleted for any other reason, or hasn’t been deleted, the value is null.This field is a relationship field.Relationship NameMasterRecordRelationship TypeLookupRefers ToAccount |
| NaicsCode | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe six-digit North American Industry Classification System (NAICS) code is the standard used by businesses and the government to classify business establishments into industries, according to their economic activity for the purpose of collecting, analyzing, and publishing statistical data related to the U.S. business economy. Can have up to eight characters. This field is available only on business accounts.NoteThis field is available only to companies that use Data.com Prospector or Data.com Clean. |
| NaicsDesc | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionBrief description of an company line of business based on the org’s NAICS code. Can have up to 120 characters. The field is available only on business accounts.NoteThe field is available only to companies that use Data.com Prospector or Data.com Clean. |
| Name | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionUnique identification of the account. |
| NumberOfEmployees | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionNumber of employees working at the company that’s represented by the account. Can have up to eight digits. |
| OperatingHoursId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionOperating hours associated with the account. Available only if Field Service is enabled.This field is a relationship field.Relationship NameOperatingHoursRelationship TypeLookupRefers ToOperatingHours |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the user who currently owns the account. Default value is the user logged in to the API to perform the create. If you have set up account teams in your company, the result of updating this field depends on your version of the API:For API version 12.0 and later, sharing records are kept for all objects.For API version before 12.0, sharing records are deleted.For API version 16.0 and later, users must have the Transfer Record permission to update (transfer) account ownership.This field is a relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToUser |
| Ownership | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionOwnership type of the account:Possible values are:OtherPrivatePublicSubsidiary |
| ParentId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the parent object, if any.This field is a relationship field.Relationship NameParentRelationship TypeLookupRefers ToAccount |
| Phone | TypephonePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionPhone number of the account. Can have up to 40 characters. |
| PhotoUrl | TypeurlPropertiesFilter, Group, Nillable, SortDescriptionPath to be combined with the URL of a Salesforce instance (for example, https://yourInstance.salesforce.com/) to generate a URL to request the social network profile image associated with the account. Generated URL returns an HTTP redirect (code 302) to the social network profile image for the account. Returns a blank if Social Accounts and Contacts aren’t enabled for the company or are disabled for the requesting user. |
| Rating | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionAccount’s prospect rating:Possible values are:ColdHotWarm |
| RecordTypeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the record type assigned to the object.This field is a relationship field.Relationship NameRecordTypeRelationship TypeLookupRefers ToRecordType |
| ShippingAddress | TypeaddressPropertiesFilter, NillableDescriptionRead-only. Compound form of the shipping address. See Address Compound Fields for details on compound address fields. |
| ShippingCity | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionCity in the shipping address of the account. Can have up to 40 characters. |
| ShippingCountry | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionCountry in the shipping address of the account. Can have up to 80 characters. |
| ShippingGeocodeAccuracy | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionAccuracy level of the geocode for the shipping address:Possible values are:AddressBlockCityCountyExtendedZipNearAddressNeighborhoodStateStreetUnknownZipSee Compound Field Considerations and Limitations for details on geolocation compound fields. |
| ShippingLatitude | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionUsed with ShippingLongitude to specify the precise geolocation of a shipping address. Acceptable values are numbers between –90 and 90, up to 15 decimal places. See Compound Field Considerations and Limitations for details on geolocation compound fields. |
| ShippingLongitude | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionUsed with ShippingLatitude to specify the precise geolocation of an address. Acceptable values are numbers between –180 and 180, up to 15 decimal places. See Compound Field Considerations and Limitations for details on geolocation compound fields. |
| ShippingPostalCode | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionPostal code in the shipping address of the account. Can have up to 20 characters. |
| ShippingState | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionState in the shipping address of the account. Can have up to 80 characters. |
| ShippingStreet | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStreet name in the shipping address of the account. Can have up to 255 characters. |
| Sic | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStandard Industrial Classification code of the company’s main business categorization. For example, 57340 for Electronics. Can have up to 20 characters. This field is available only on business accounts. |
| SicDesc | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionBrief description of an company line of business, based on the SIC code. Can have up to 80 characters. This field is available only on business accounts. |
| Site | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionName of the account’s location. For example, Headquarters or London. Can have up to 80 characters. |
| TickerSymbol | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStock market symbol for the account. Can have up to 20 characters. This field is available only on business accounts. |
| Tradestyle | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionNon-legal name that an company uses for conducting business. Similar to Doing business as or DBA. Can have up to 255 characters. This field is available only on business accounts.NoteThis field is available only to companies that use Data.com Prospector or Data.com Clean. |
| Type | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionType of accountPossible values are:Channel Partner / ResellerCustomer - ChannelCustomer - DirectInstallation PartnerOtherProspectTechnology Partner |
| Website | TypeurlPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionWebsite of the account. Can have up to 255 characters. |
| YearStarted | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDate when an org was legally established. Can have up to four characters.NoteThis field is only available to organizations that use Data.com Prospector or Data.com Clean. |
| cgcloud_Account_Email__c | TypeemailPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionEmail address of the account. Label is Email. |
| cgcloud_Account_Number__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionAccount number assigned to the account (not the unique, auto-generated ID assigned during creation). Can have up to 40 characters. |
| cgcloud_Account_Template_Description__c | TypestringPropertiesFilter, Nillable, SortDescriptionThe account template description.This field is a calculated field.Formulacgcloud_dev__Account_Template__r.cgcloud_dev__Description__c |
| cgcloud_Account_Template__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReferences the account template object used for accounts.This field is a relationship field.Relationship Namecgcloud_dev__Account_Template__rRelationship TypeLookupRefers Tocgcloud_dev__Account_Template__c |
| cgcloud__ExternalId__c | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionUnique identifier of the external object record to account. |
| cgcloud__Name_2__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionUnique identification of the account. |
| cgcloud__Number_Of_Extensions__c | TypedoublePropertiesFilter, Nillable, SortDescriptionNumber of extensions for the account.This field is a calculated field. |
| cgcloud__Sales_Org__c | TypestringPropertiesFilter, Nillable, SortDescriptionSales org of the template.This field is a calculated field.FormulaText(cgcloud_dev__Account_Template__r.cgcloud_dev__Sales_Org__c) |
