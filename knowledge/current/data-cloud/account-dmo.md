---
title: "Account DMO"
domain: data-cloud
topic: account-dmo
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:13.649Z
estimatedTokens: 3479
keywords: [Account, DMO, Data, Cloud, model, how, party, wants, interact, company, Provided, Sales, Service, Kits, API]
---

# Account DMO

> The Account DMO is a Data Cloud data model object for how a party wants
		to interact with your company. Provided in both the Sales and Service Data Kits.

# Account DMO

The Account DMO is a Data Cloud data model object for how a party wants to interact with your company. Provided in both the Sales and Service Data Kits.

## Object API Name

ssot\_\_Account\_\_dlm

## Category

Profile

## Primary Subject Area

Party

## Primary Key

Account ID (ssot\_\_Id\_\_c)

## Relationships

| Object | Field | Cardinality | Related Object | Related Field | Data Bundle |
| --- | --- | --- | --- | --- | --- |
| Account | Account ID | Many To One (N:1) | Individual | Individual ID | Sales |
| Account | Bill Contact Address | Many To One (N:1) | Contact Point Address | Contact Point Address ID | Service |
| Account | Parent Account | Many To One (N:1) | Account | Account ID | Service |
| Account Contact | Account ID | Many To One (N:1) | Account | Account ID | Service |
| Case | Account | Many To One (N:1) | Account | Account ID | Service |
| Contact Point Address | Party | Many To One (N:1) | Account | Account ID | Sales, Service |
| Contact Point App | Party | Many To One (N:1) | Account | Account ID | Sales |
| Contact Point Email | Party | Many To One (N:1) | Account | Account ID | Sales, Service |
| Contact Point Phone | Party | Many To One (N:1) | Account | Account ID | Service |
| Financial Account Party | Account ID | Many To One (N:1) | Account | Account ID | Financial Services Cloud |
| Financial Customer | Account ID | Many To One (N:1) | Account | Account ID | Financial Services Cloud |
| Financial Holding | Account ID | Many To One (N:1) | Account | Account ID | Financial Services Cloud |
| Loyalty Program Member | Account | Many To One (N:1) | Account | Account ID | Sales |
| Loyalty Program Partner | Partner Account | Many To One (N:1) | Account | Account ID | Sales |
| Payment Method | Account ID | Many To One (N:1) | Account | Account ID | Financial Services Cloud |
| Record Alert | Account ID | Many To One (N:1) | Account | Account ID | Financial Services Cloud |
| Voucher Definition | Partner Account | Many To One (N:1) | Account | Account ID | Sales |

## All Fields

| Field Name | Field API Name | Description | Data Type | Data Bundle |
| --- | --- | --- | --- | --- |
| Account Business Type | ssot___AccountBusinessType__c | The business type of the account. | text | Service |
| Account Description | ssot___Description__c | A text description of the contact account. |  | Sales, Service |
| Account ID | ssot__Id__c | A unique ID used as the primary key for the account DMO. | text | Sales, Service |
| Account Name | ssot__Name__c | The name of the contact account. | text | Sales, Service |
| Account Number | ssot__number__c | The number assigned to the contact account. | text | Sales, Service |
| Account Ownership Type | ssot__AccountOwnershipType__c | The ownership type of the account. | text | Service |
| Account Rating Type | ssot__AccountRatingType__c | The rating type of the account. | text | Service |
| Account Source | ssot__AccountSource__c | The source of the account. | text | Service |
| Account Type | ssot__AccountTypeId__c | The reference ID for the type of contact account, for example, a loyalty account or business credit account. | text | Sales, Service |
| Account Service Entitlements | ssot__AccountServiceEntitlements__c |  | text | Sales, Service |
| Account Website URL | ssot__AccountWebsiteURL__c | The website URL for the account. |  | Service |
| Annual Revenue Amount | ssot__AnnualRevenueAmount__c | The annual revenue amount for the account. | number | Service |
| Assign Territory Flag | ssot__AssignTerritoryFlag__c | An indicator if an account needs an assigned territory. | text | Sales, Service |
| Auto Pay Enabled Flag | ssot__AutoPayEnabledFlag__c | An indicator if auto pay is enabled for this contact. | text | Sales, Service |
| Auto Payment Amount | ssot__AutoPaymentAmount__c | The amount to be automatically paid next time. | number | Sales, Service |
| Auto Payment Amount Currency | ssot__AutoPaymentAmountCurrency__c | The currency of the auto payment amount. | text | Sales, Service |
| Auto Payment Method | sot__AutoPaymentMethodId__c | A reference ID for the payment method for auto pay, for example a credit card or bank account. | text | Sales, Service |
| Balance Amount | ssot__BalanceAmount__c | The number in an account balance, for example, 100 points, 3 miles, or 6 visits. | number | Sales, Service |
| Balance Amount Currency | ssot__BalanceAmountCurrency__c | The balance amount’s currency. | text | Sales, Service |
| Balance Amount Limit | ssot__BalanceAmountLimit__c | The max balance allowed, for example a credit limit. | text | Sales, Service |
| Balance Amount Limit Currency | ssot__BalanceAmountLimitCurrency__c | The balance amount limit’s currency. | text | Sales, Service |
| Balance Unit Of Measure | ssot__BalanceUnitOfMeasureId__c | A reference ID for the unit of measure for balance, for example money, points, or miles. | text | Sales, Service |
| Balance Unit Of Measure Currency | ssot__BalanceUnitOfMeasureCurrencyId__c | A reference ID for the currency type used if balance unit of measure is money. | text | Sales, Service |
| Bill Contact Address | ssot__BillContactAddressId__c | A reference ID for the contact point billing address. | text | Sales, Service |
| Bill Delivery Method | ssot__BillDeliveryMethodId__c | A reference ID for the preference to send the bill via electronic or physical mail delivery. | text | Sales, Service |
| Bill Frequency | ssot__BillFrequency__c | The frequency for billing the account. | text | Service |
| Contact Point Address | ssot__ContactPointAddressId__c | A reference ID for the contact point address. | text | Service |
| Contact Point App | ssot__ContactPointAppId__c | A reference ID for the contact point app. | text | Service |
| Contact Point Email | ssot__ContactPointEmailId__c | A reference ID for the contact point email. | text | Service |
| Contact Point Location | ssot__ContactPointLocationId__c | A reference ID for the contact point location. | text | Service |
| Contact Point Phone | ssot__ContactPointPhoneId__c | A reference ID for the contact point phone. | text | Service |
| Contact Point Social | ssot__ContactPointSocialId__c | A reference ID for the contact point social. | text | Service |
| Created Date | ssot__CreatedDate__c | The date the record was created. | dateTime | Sales, Service |
| Data Source | ssot__DataSourceId__c | A reference ID for the logical name of the object where this record came from, whether that is a name of a cloud storage file or another connector’s external object. | text | Sales, Service |
| Data Source Object | ssot__DataSourceObjectId__c | A reference ID for the logical name of the object where this record came from, whether that is a name of a cloud storage file or another connector’s external object. | text | Sales, Service |
| Default Freight Terms | ssot__DefaultFreightTermsId__c | A reference ID to the standard freight terms for this contact for example, Free On Board Shipping Point (FOB). | text | Sales, Service |
| Default Price Book | ssot__DefaultPriceBookId__c | A reference ID to the standard price book for this contact. | text | Sales, Service |
| Effective Date | ssot__EffectiveDate__c | The effective date of the record. | dateTime | Service |
| Employee Count | ssot__EmployeeCount__c | The count of employees. | number | Service |
| End Date | ssot__EndDate__c | The end date of the record. | dateTime | Service |
| External Record ID | ssot__ExternalRecordId__c | A reference ID for an external data source system. | text | Sales, Service |
| External Source ID | ssot__ExternalSourceId__c | A reference ID for the system in which the external record ID was assigned. | text | Sales, Service |
| Fax Phone | ssot__FaxPhoneId__c | A reference ID to the fax number for the account. | text | Sales, Service |
| General Ledger Account | ssot_GeneralLedgerAccountId__c | A reference ID for a contact’s financial account where credit and debits are posted. | text | Sales, Service |
| Hold Status Reason | ssot__HoldStatusReasonId__c | A reference ID for the reason why the account is on hold. | text | Sales, Service |
| Individual | ssot__IndividualId__c | A reference ID for the individual associated with the account. |  | Service |
| Internal Organization | ssot__InternalOrganizationId__c | A reference ID to the business unit or other internal organization that owns the business account. | text | Sales, Service |
| Is Active | ssot__IsActive__c | An indicator if the account is active. | text | Service |
| Is Customer | ssot__IsCustomer__c | An indicator if the account is a customer account. | text | Service |
| Is Internal | ssot__IsInternal__c | An indicator if the account is an internal account. | text | Service |
| Is Partner | ssot__IsPartner__c | An indicator if the account is a partner account. | text | Service |
| Is Seller | ssot__IsSeller__c | An indicator if the account is a seller account. | text | Service |
| Is Supplier | ssot__IsSupplier__c | An indicator if the account is a supplier account. | text | Service |
| Last Activity Date | ssot__LastActivityDate__c | The date of the most recent account activity. | dateTime | Sales, Service |
| Last Modified Date | ssot__LastModifiedDate__c | The date when a user last modified the record. | dateTime | Sales, Service |
| Next Interaction Date | ssot__NextInteractionDate__c | The date when the account should be contacted again. | dateTime | Service |
| Next Review Date | ssot__NextReviewDate__c | The date when the account should be reviewed again. | dateTime | Service |
| Ninety Day Balance Amount | ssot__NinetyDayBalanceAmount__c | The account balance 90 days ago. | number | Sales, Service |
| Ninety Day Balance Amount Currency | ssot__NinetyDayBalanceAmountCurrency__c | The 90-day account balance currency. | text | Sales, Service |
| Operating Hours | ssot__OperatingHoursId__c | A reference ID to the operating hours associated with the account. | text | Sales, Service |
| Order Delivery Method | ssot__OrderDeliveryMethodId__c | A reference ID to the standard method for delivery such as overnight or in-person pickup. | text | Sales, Service |
| Organization | ssot__OrganizationId__c | A reference ID to the account organization. | text | Service |
| Parent Account | ssot__ParentAccountId__c | A reference ID to the parent contact account. | text | Sales, Service |
| Party | ssot__PartyId__c | A reference ID to the parent party, for example, an individual, business, or affiliation group.TipThis ID is the same as the one used in the individual object. | text | Sales, Service |
| Party Object | ssot__PartyObjectId__c | A reference ID to the associated party object. | text | Service |
| Party Role | ssot__PartyRoleId__c | A reference ID to the associated party role, for example, a customer, supplier, or competitor. | text | Sales, Service |
| Party Web Address | ssot__PartyWebAddressId__c | A reference ID to the associated party web address. | text | Service |
| Payment Term | ssot__PaymentTerm__c | The payment term for the account. | text | Service |
| Primary Industry | ssot__PrimaryIndustry__c | The primary industry for the account. | text | Service |
| Primary Sales Contact Point | ssot__PrimarySalesContactPointId__c | A reference ID for the best way to communicate with the contact regarding sales. | text | Sales, Service |
| Primary Sales Rep | ssot__PrimarySalesRepId__c | A reference ID for the sales owner of the account. | text | Sales, Service |
| Review Frequency | ssot__ReviewFrequency__c | The frequency for reviewing the account. | text | Service |
| Sales Phone | ssot__SalesPhoneId__c | A reference ID for the phone number for this account. | text | Sales, Service |
| Shipping Address | ssot__ShippingAddressId__c | A reference ID for the shipping billing address. | text | Sales, Service |
| Shipping Contact | ssot__ShippingContactId__c | A reference ID for the shipping contact. | text | Sales, Service |
| Shipping Email | ssot__ShippingEmailId__c | A reference ID for the email used for shipping inquiries. | text | Sales, Service |
| Shipping Phone | ssot__ShippingPhoneId__c | A reference ID for the phone for shipping inquiries. | text | Sales, Service |
| Sixty Day Balance Amount | ssot__SixtyDayBalanceAmount__c | The account balance 60 days ago. | number | Sales, Service |
| Sixty Day Balance Amount Currency | ssot__SixtyDayBalanceAmountCurrency__c | The 60-day account balance currency. | text | Sales, Service |
| SLA Expiration Date | ssot__SLAExpirationDate__c | The date when a Service Level Agreement (SLA) expires. | dateTime | Sales, Service |
| SLA Type | ssot__SLATypeId__c | A reference ID for the contact’s Service Level Agreement (SLA) type. | text | Sales, Service |
| Source System Identifier | ssot__SourceSystemIdentifier__c | The identifier for the source system. | text | Service |
| Source System Modified Date | ssot__SourceSystemModifiedDateTime__c | The date and time for when the source system was modified. | dateTime | Service |
| Thirty Day Balance Amount | ssot__ThirtyDayBalanceAmount__c | The account balance 30 days ago. | number | Sales, Service |
| Thirty Day Balance Amount Currency | ssot__ThirtyDayBalanceAmountCurrency__c | The 30-day account balance currency. | text | Sales, Service |
| Use As Billing Account | ssot__UseAsBillingAccount__c | An indicator if the account is used for billing purposes. | text | Sales, Service |
| Use As Sales Account | ssot__UseAsSalesAccount__c | An indicator if the account is used for sales. | text | Sales, Service |
| Use As Service Account | ssot__UseAsServiceAccount__c | An indicator if the account is used for service. | text | Sales, Service |
| Use As Shipping Account | ssot__UseAsShippingAccount__c | An indicator if the account is used for shipping purposes. | text |  |
| Website | ssot__WebsiteAddr__c | The website address for the account. | text | Service |
