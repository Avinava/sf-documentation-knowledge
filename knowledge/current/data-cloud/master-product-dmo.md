---
title: "Master Product DMO"
domain: data-cloud
topic: master-product-dmo
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:17:42.749Z
keywords: [Master, Product, DMO, Object, API, Name, Category, Primary, Subject, Area, Key, Relationships, Fields, Note]
---

# Master Product DMO

# Master Product DMO

The Master Product DMO is a Data Cloud data model object (DMO) for data about a company’s products.

## Object API Name

ssot\_\_MasterProduct\_\_dlm

## Category

Other

## Primary Subject Area

Product

## Primary Key

Master Product ID (ssot\_\_Id\_\_c)

## Relationships

| Object | Field | Cardinality | Related Object | Related Field |
| --- | --- | --- | --- | --- |
| Bundle Product | Brand | Many To One (N:1) | Brand | Brand ID |
| Loyalty Transaction Journal | Product | Many To One (N:1) | Bundle Product | Bundle Product ID |
| Product Category Product | Product | Many To One (N:1) | Bundle Product | Bundle Product ID |
| Sales Order Product | Product | Many To One (N:1) | Bundle Product | Bundle Product ID |
| Sales Order Product | Product | Many To One (N:1) | Master Product | Master Product ID |

## All Fields

| Field Name | Field API Name | Description | Data Type |
| --- | --- | --- | --- |
| Allow Customer Return | ssot__AllowCustomerReturn__c | An indicator whether a product is returnable. | text |
| Allow Partial Refund | ssot__AllowPartialRefund__c | An indicator if a partial refund is allowed, for example, refunding a membership fee. | text |
| Brand | ssot__BrandId__c | A reference ID to the brand’s name. | text |
| Created Date | ssot__CreatedDate__c | The date a record was created. | dateTime |
| Data Source | ssot__DataSourceId__c | A reference ID to a logical name for a system that is the source of records identified by the external record ID. | text |
| Data Source Object | ssot__DataSourceObjectId__c | A reference ID to the logical name of the object where the record originated, for example a cloud storage file or another connector’s external object. | text |
| Disposal Type | ssot__DisposalTypeId__c | A reference ID to how the product is to be disposed, for example, recycled or thrown away. | text |
| External Record Id | ssot__ExternalRecordId__c | A reference ID for an external data source record. | text |
| External Source Id | ssot__ExternalSourceId__c | A reference ID to the system where the external record ID was assigned. | text |
| External Source Record Id | ssot__ExternalSourceRecordId__c | A reference to the record ID in the external system where the product originated. | text |
| GL Account Code | ssot__GlAccountCode__c | A code that describes how instances of this product are accounted for, for example, are they consumable, livestock, or merchandise. | text |
| Internal Organization | ssot__InternalOrganizationId__c | A reference ID to a business unit or other internal organization that owns a business account. | text |
| Is Auto Provisionable | ssot__IsAutoProvisionable__c | An indicator whether a product can be auto-installed. | text |
| Is Back Ordered | ssot__IsBackOrdered__c | An indicator if a product is out of stock or backordered. | text |
| Is Coupon Redemption Allowed | ssot__IsCouponRedemptionAllowed__c | An indicator whether a coupon can be used to redeem a product. | text |
| Is Customer Discount Allowed | ssot__IsCustomerDiscountAllowed__c | An indicator whether a customer can be offered a product at a discounted price. | text |
| Is Dynamic Bundle | ssot__IsDynamicBundle__c | An indicator whether a content of a product is bundled at the point of use. | text |
| Is Foodstamp Payment Allowed | ssot__IsFoodstampPaymentAllowed__c | An indicator whether a product can be purchased with food stamps. | text |
| Is Installable | ssot__IsInstallable__c | An indicator whether a product can be installed. | text |
| Is Intellectual Property Protected | ssot__IsIntellectualPropertyProtected__c | An indicator whether the intellectual property of a product is protected. | text |
| Is Manual Price Entry Required | ssot__IsManualPriceEntryRequired__c | An indicator whether a price requires manual entry. | text |
| Is Multiple Coupons Allowed | ssot__IsMultipleCouponsAllowed__c | An indicator whether multiple coupons can be applied to the same product. | text |
| Is Partner Discount Allowed | ssot__IsPartnerDiscountAllowed__c | An indicator whether the seller and supplier partners can get a discount on a product. | text |
| Is Pre Orderable | ssot__IsPreOrderable__c | An indicator whether a product can be preordered. | text |
| Is Quality Verification Required | ssot__IsQualityVerificationRequired__c | An indicator whether a product requires visual inspection to designate quality. | text |
| Is Quantity Entry Required | ssot__IsQuantityEntryRequired__c | An indicator whether the quantity of a product must be entered during checkout. | text |
| Is Rain Check Allowed | ssot__IsRainCheckAllowed__c | If a product isn’t in stock, an indicator if a customer can sign up to purchase the product at the current price when a new shipment arrives. | text |
| Is Returnable | ssot__IsReturnable__c | An indicator whether a product can be returned. | text |
| Is Sellable | ssot__IsSellable__c | An indicator whether a product can be sold. | text |
| Is Sellable Independently | ssot__IsSellableIndependently__c | An indicator whether a product can be sold individually or as a part of a bundle. | text |
| Is Sellable Without Price | ssot__IsSellableWithoutPrice__c | An indicator whether a product can be sold without a price, for example, a free monogram. | text |
| Is Serialized | ssot__IsSerialized__c | An indicator whether each individual product has a unique serial number. | text |
| Is Weight Entry Required | ssot__IsWeightEntryRequired__c | An indicator if a product weight is required. | text |
| Is Worker Discount Allowed | ssot__IsWorkerDiscountAllowed__c | An indicator if employees and contractors can get a discount on a product. | text |
| Last Modified Date | ssot__LastModifiedDate__c | The date when a user last modified the record. | dateTime |
| Lot Identifier | ssot__LotIdentifier__c | The name or lot number of the manufactured product. | text |
| Manufacturer Name | ssot__ManufacturerName__c | The name of the product manufacturer. | text |
| Master Product | ssot__MasterProductId__c | A reference ID for the master product. | text |
| Master Product Id | ssot__Id__c | A unique ID that is used as the primary key for the Master Product DMO. | text |
| Maximum Order Quantity Count | ssot__MaximumOrderQuantityCount__c | The maximum quantity of product allowed for purchase. | number |
| Minimum Advertisement Amount | ssot__MinimumAdvertisementAmount__c | The lowest price allowed to be used in ads (normally established by a manufacturer). | number |
| Minimum Advertisement Amount Currency | ssot__MinimumAdvertisementAmountCurrency__c | The currency for the minimum advertisement amount. | text |
| Minimum Advertisement Amount Start Date | ssot__MinimumAdvertisementAmountStartDate__c | The earliest date the lowest manufacturer's price can be stated in an ad. | number |
| Minimum Order Quantity Count | ssot__MinimumOrderQuantityCount__c | The minimum quantity of product allowed for purchase. | number |
| Model Number | ssot__ModelNumber__c | The identifier that the manufacturer uses for product, for example, SHOE-123-RED-8. | text |
| Model Year | ssot__ModelYear__c | The product’s model year. | number |
| MSRP Amount | ssot__MSRPAmount__c | The default price for the product called the Manufacturer Suggested Retail Price (MSRP). | number |
| MSRP Amount Currency | ssot__MSRPAmountCurrency__c | The currency of the MSRP. | text |
| Packaged in Country | ssot__PackagedInCountry__c | The country where the product is packaged. | text |
| Price Charge Type Id | ssot__PriceChargeTypeId__c | A reference ID to how the product is priced, for example by weight, units, or usage. | text |
| Primary Product Category | ssot__PrimaryProductCategory__c | The name of the primary product category. | text |
| Primary Sales Channel | ssot__PrimarySalesChannelId__c | A reference ID to the primary channel used to sell the product. | text |
| Produced in Country | ssot__ProducedInCountry__c | The country where the product is produced. | text |
| Product Description | ssot__Description__c | A general description of the product. | text |
| Product Long Description | ssot__LongDescription__c | A product’s long description. | text |
| Product Name | ssot__Name__c | The name of the product. | text |
| Product SKU | ssot__ProductSKU__c | The unique stock keeping unit (SKU) for product, for example, SHOE-NIKE-MOD1-SZ12-RED. | text |
| Product Status | ssot__ProductStatusId__c | A reference ID to the status of the product, for example Active or Inactive. | text |
| Quantity Installment Count | ssot__QuantityInstallmentCount__c | The number of installments, if the product has a quantity schedule. | number |
| Quantity Installment Period | ssot__QuantityInstallmentPeriodId__c | A reference ID to the product's quantity schedule, the amount of time covered by the schedule. | text |
| Quantity Schedule Type | ssot__QuantityScheduleTypeId__c | A reference ID to the quantity schedule type, for example, divide or repeat. | text |
| Quantity Scheduling Enabled | ssot__CanUseQuantitySchedule__c | An indicator whether a product has a quantity schedule. | text |
| Required Deposit Amount | ssot__RequiredDepositAmount__c | The deposit required to pick up or use a product. | number |
| Required Deposit Amount Currency | ssot__RequiredDepositAmountCurrency__c | The currency of the required deposit amount. | text |
| Required Deposit Percentage | ssot__RequiredDepositPercentage__c | The percentage of deposit required to pick up or use product. | number |
| Requires Individual Unit Pricing | ssot__RequiresInvididualUnitPricing__c | An indicator whether a product requires an individual price, for example, due to its variable weight or size. | text |
| Revenue Installment Count | ssot__RevenueInstallmentCount__c | The number of installments if a product has a revenue schedule. | number |
| Revenue Installment Period | ssot__RevenueInstallmentPeriodId__c | A reference ID to the time period covered by a schedule, for example, weekly or monthly. | text |
| Revenue Schedule Type | ssot__RevenueScheduleTypeId__c | A reference ID to the revenue schedule type, for example, divide or repeat. | text |
| Revenue Scheduling Enabled | ssot__CanUseRevenueSchedule__c | An indicator whether the product has a revenue schedule. | text |
| Reward Program Points Count | ssot__RewardProgramPointsCount__c | The number of points given for the purchase of a product. | number |
| Service Entitlement Template | ssot__ServiceEntitlementTemplateId__c | A reference ID for the types of customer support, such as phone support, for which a customer is eligible to use under the terms of a contract. | text |
| Standard Warranty Length Month | ssot__StandardWarrantyLengthMonth__c | The length of warranty included from the seller (not the manufacturer). | number |
| Stock Ledger Valuation Amount | ssot__StockLedgerValuationAmount__c | The total value of the product in stock. | number |
| Stock Ledger Valuation Amount Currency | ssot__StockLedgerValuationAmountCurrency__c | The currency for the stock ledger valuation amount. | text |
| Valid For Period Count | ssot__ValidForPeriodCount__c | The numeric duration of time that the product is valid, for example, 1, 2, or 3. | number |
| Valid For Period Unit Of Measure | ssot__ValidForPeriodUOMId__c | A reference ID to the measurement of time associated with “Valid For Period Count,” for example, hours or months. | text |
| Valid From Date | ssot__ValidFromDate__c | The initial date that the product can be used. | dateTime |
| Valid To Date | ssot__ValidToDate__c | The final date that the product can be used. | dateTime |
| Version Number | ssot__VersionNumber__c | The product version, for example, 1.3.5. | text |

![Note](/docs/resources/img/en-us/252.0?doc_id=images%2Ficon_note.png&folder=c360a_api)

#### Note

Where possible, we changed noninclusive terms to align with our company value of Equality. We retained noninclusive terms to document a third-party system, but we encourage the developer community to embrace more inclusive language. We can update the term when it’s no longer required for technical accuracy.