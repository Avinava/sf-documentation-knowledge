---
title: "Goods Product DMO"
domain: data-cloud
topic: goods-product-dmo
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:14.896Z
estimatedTokens: 4017
keywords: [Goods, Product, DMO, Data, Cloud, model, specific, carton, milk, towels, API, Category, Primary, Subject, Area]
---

# Goods Product DMO

> The Goods Product DMO is a Data Cloud data model object (DMO) for a
      specific product, for example a carton of milk or a set of towels

# Goods Product DMO

The Goods Product DMO is a Data Cloud data model object (DMO) for a specific product, for example a carton of milk or a set of towels

## Object API Name

ssot\_\_GoodsProduct\_\_dlm

## Category

Other

## Primary Subject Area

Product

## Primary Key

Goods Product ID (ssot\_\_Id\_\_c)

## Relationships

| Object | Field | Cardinality | Related Object | Related Field |
| --- | --- | --- | --- | --- |
| Goods Product | Master Product | Many To One (N:1) | Goods Product | Goods Product ID |
| Goods Product | Master Product | Many To One (N:1) | Bundle Product | Bundle Product ID |
| Goods Product | Master Product | Many To One (N:1) | Master Product | Master Product ID |
| Product Category Product | Product | Many To One (N:1) | Goods Product | Goods Product ID |
| Sales Order Product | Product | Many To One (N:1) | Goods Product | Goods Product ID |
| Product Browse Engagement | Product | Many To One (N:1) | Goods Product | Goods Product ID |
| Shopping Cart Engagement | Product | Many To One (N:1) | Goods Product | Goods Product ID |
| Software Application | Product | Many To One (N:1) | Goods Product | Goods Product ID |
| Goods Product | Brand | Many To One (N:1) | Brand | Brand ID |
| Bundle Product | Master Product | Many To One (N:1) | Goods Product | Goods Product ID |
| Loyalty Partner Product | Product | Many To One (N:1) | Goods Product | Goods Product ID |
| Loyalty Transaction Journal | Product | Many To One (N:1) | Goods Product | Goods Product ID |
| Opportunity Product | Product | Many To One (N:1) | Goods Product | Goods Product ID |
| Order Delivery Method | Product | Many To One (N:1) | Goods Product | Goods Product ID |
| Goods Product | Primary Product Category | Many To One (N:1) | Product Category | Product Category ID |

## All Fields

| Field Name | Field API Name | Description | Data Type |
| --- | --- | --- | --- |
| Age | ssot__AgeId__c | A reference ID for the age the product is intended for, for example infants or adults. | text |
| Allow Customer Return | ssot__AllowCustomerReturn__c | An indicator whether product is returnable. | text |
| Allow Partial Refund | ssot__AllowPartialRefund__c | An indicator whether a partial refund is allowed, for example if a membership is canceled early. | text |
| Brand | ssot__BrandId__c | A reference ID to brand name. | text |
| Color | ssot__ColorId__c | A reference ID to the color of the product. | text |
| Created Date | ssot__CreatedDate__c | The date the record was created. | dateTime |
| Data Source | ssot__DataSourceId__c | A reference ID for the logical name for a system that is the source of records identified by external record ID. | text |
| Data Source Object | ssot__DataSourceObjectId__c | A reference ID for the logical name of the object where this record came from, whether that is a name of a cloud storage file or another connector’s external object. | text |
| Depth | ssot__Depth__c | The depth size of the product. | number |
| Diameter | ssot__Diameter__c | The diameter of a product. | number |
| Disposal Type | ssot__DisposalTypeId__c | A reference ID to how product is to be disposed, for example recycle or throw away. | text |
| Drained Weight | ssot__DrainedWeight__c | The weight of the product excluding packaging and after being drained. | number |
| Environment Requirement | ssot__EnvironmentRequirementId__c | A reference ID to environmental requirements of a product. | text |
| External Record ID | ssot__ExternalRecordId__c | A reference ID for external data source record. | text |
| External Source ID | ssot__ExternalSourceId__c | A reference ID for the system in which the external record ID was assigned. | text |
| External Source Record ID | ssot__ExternalSourceRecordId__c | A reference to record ID in external system where product originated. | text |
| Fabric | ssot__FabricId__c | A reference ID for the product’s fabric type. | text |
| Gender | ssot__GenderId__c | A reference ID for the gender the product was designed for. | text |
| GL Account Code | ssot__GlAccountCode__c | A reference ID to how instances of this product are accounted for, for example consumable, livestock, or merchandise. | text |
| Goods Product ID | ssot__Id__c | A unique ID used as primary key for the Goods Product DMO. | text |
| Gross Weight | ssot__GrossWeight__c | The weight of the product in its original packaging. | number |
| Height | ssot__Height__c | The height of the product. | number |
| Internal Organization | ssot__InternalOrganizationId__c | A reference ID to business unit or other internal organization that owns business account. | text |
| Is Auto Provisionable | ssot__IsAutoProvisionable__c | An indicator whether product can be auto installed. | text |
| Is Back Ordered | ssot__IsBackOrdered__c | An indicator whether a product has been back ordered after being out of stock. | text |
| Is Coupon Redemption Allowed | ssot__IsCouponRedemptionAllowed__c | An indicator whether coupon can be used to redeem product. | text |
| Is Customer Discount Allowed | ssot__IsCustomerDiscountAllowed__c | An indicator whether customer can be offered product at discounted price. | text |
| Is Dynamic Bundle | ssot__IsDynamicBundle__c | An indicator whether content of product is bundled at point of use. | text |
| Is Food stamp Payment Allowed | ssot__IsFoodstampPaymentAllowed__c | An indicator whether product can be purchased with food stamps. | text |
| Is Installable | ssot__IsInstallable__c | An indicator whether product can be installed. | text |
| Is Intellectual Property Protected | ssot__IsIntellectualPropertyProtected__c | An indicator whether intellectual property of product is protected. | text |
| Is Made To Order | ssot__IsMadeToOrder__c | An indicator whether the product is created after being order, for example a monogrammed towel or a birthday cake. | text |
| Is Manual Price Entry Required | ssot__IsManualPriceEntryRequired__c | An indicator whether product price requires manual entry. | text |
| Is Multiple Coupons Allowed | ssot__IsMultipleCouponsAllowed__c | An indicator whether multiple coupons can be applied to same product. | text |
| Is Partner Discount Allowed | ssot__IsPartnerDiscountAllowed__c | An indicator whether seller and supplier partners can get a discount on product. | text |
| Is Perishable | ssot__IsPerishable__c | An indicator whether the product is perishable. | text |
| Is Pre Orderable | ssot__IsPreOrderable__c | An indicator whether product can be preordered. | text |
| Is Quality Verification Required | ssot__IsQualityVerificationRequired__c | An indicator whether product requires visual inspection to designate quality. | text |
| Is Quantity Entry Required | ssot__IsQuantityEntryRequired__c | An indicator whether quantity of product must be entered during checkout. | text |
| Is Rain Check Allowed | ssot__IsRainCheckAllowed__c | An indicator for when a product isn’t in stock, if a customer can sign up to purchase the product at current price when new shipment arrives. | text |
| Is Returnable | ssot__IsReturnable__c | An indicator whether product can be returned. | text |
| Is Sellable | ssot__IsSellable__c | An indicator whether the product is intended to be sold. | text |
| Is Sellable Independently | ssot__IsSellableIndependently__c | An indicator whether a product can be sold by itself or only as part of a bundle. | text |
| Is Sellable Without Price | ssot__IsSellableWithoutPrice__c | An indicator whether a product can be "sold" without a price, for example personalized monogram for clothing at no additional cost. | text |
| Is Serialized | ssot__IsSerialized__c | An indicator whether each individual product has a unique serial number. | text |
| Is Weight Entry Required | ssot__IsWeightEntryRequired__c | An indicator whether product weight is required. | text |
| Is Worker Discount Allowed | ssot__IsWorkerDiscountAllowed__c | An indicator whether employees and contractors can get a discount on product. | text |
| Last Modified Date | ssot__LastModifiedDate__c | The date when a user last modified the record. | dateTime |
| Lot Identifier | ssot__LotIdentifier__c | The name or number of the lot that manufactured product. | text |
| Manufacturer Name | ssot__ManufacturerName__c | The name of the product’s manufacturer. | text |
| Master Product | ssot__MasterProductId__c | A reference ID referring to the parent or primary product. | text |
| Max Holding Day Count | ssot__MaxHoldingDayCount__c | The amount of time the product can be displayed before removal. | number |
| Maximum Order Quantity Count | ssot__MaximumOrderQuantityCount__c | The maximum quantity of the product allowed for purchase. | number |
| Minimum Advertisement Amount | ssot__MinimumAdvertisementAmount__c | The lowest price allowed (normally by manufacturer) to use in an ad. | number |
| Minimum Advertisement Amount Currency | ssot__MinimumAdvertisementAmountCurrency__c | The currency for the minimum advertisement amount. | text |
| Minimum Advertisement Amount Start Date | ssot__MinimumAdvertisementAmountStartDate__c | The earliest date the lowest manufacturer's price can be stated in an ad. | number |
| Minimum Order Quantity Count | ssot__MinimumOrderQuantityCount__c | The minimum quantity of product allowed for purchase. | number |
| Model Number | ssot__ModelNumber__c | The identifier that manufacturer uses for product, for example SHOE-123-RED-8. | text |
| Model Year | ssot__ModelYear__c | The marketed model year for product. | number |
| MSRP Amount | ssot__MSRPAmount__c | The manufacturer suggested retail price or the default price of a product. | number |
| MSRP Amount Currency | ssot__MSRPAmountCurrency__c | The currency for the suggested retail price. | text |
| Net Weight | ssot__NetWeight__c | The weight of the product excluding packaging. | number |
| Packaged in Country | ssot__PackagedInCountry__c | The country where the product is packaged. | text |
| Pattern | ssot__PatternId__c | A reference ID to the pattern of a product, for example striped or checkered. | text |
| Price Charge Type ID | ssot__PriceChargeTypeId__c | A reference ID to how product is priced, for example by weight, units, or usage. | text |
| Primary Product Category | ssot__PrimaryProductCategory__c | The category of the product, for example shoes or frozen meals. | text |
| Primary Sales Channel | ssot__PrimarySalesChannelId__c | A reference ID to the primary sales channel used to sell product. | text |
| Produced in Country | ssot__ProducedInCountry__c | The country where the product is produced. | text |
| Product Description | ssot__Description__c | A general description of product. | text |
| Product Long Description | ssot__LongDescription__c | The long description of product. | text |
| Product May Expand | ssot__ProductMayExpand__c | An indicator whether the product can become bigger under certain circumstances like heat. | text |
| Product Name | ssot__Name__c | The name of the product. | text |
| Product Security Requirement | ssot__ProductSecurityRequirementId__c | An indicator whether the product requires any special security for handling or selling. | text |
| Product SKU | ssot__ProductSKU__c | The unique Stock Keeping Unit (SKU) identifier for product. | text |
| Product Status | ssot__ProductStatusId__c | A reference ID to status of product, for example active or inactive. | text |
| Quantity Installment Count | ssot__QuantityInstallmentCount__c | An indicator whether the product requires a number of installments. | number |
| Quantity Installment Period | ssot__QuantityInstallmentPeriodId__c | A reference ID to a product's quantity schedule, the amount of time covered by the schedule. | text |
| Quantity Schedule Type | ssot__QuantityScheduleTypeId__c | A reference ID to quantity schedule type, if product has one, for example Divide or Repeat. | text |
| Quantity Scheduling Enabled | ssot__CanUseQuantitySchedule__c | An indicator whether product has a quantity schedule. | text |
| Required Cleanup Process | ssot__RequiredCleanupProcessId__c | An indicator whether the product requires special cleanup procedures if it’s spilled or leaked. | text |
| Required Deposit Amount | ssot__RequiredDepositAmount__c | An indicator whether a deposit is required to pick up or use the product. | number |
| Required Deposit Amount Currency | ssot__RequiredDepositAmountCurrency__c | The currency of the required deposit. | text |
| Required Deposit Percentage | ssot__RequiredDepositPercentage__c | The percentage of the deposit that is required to pick up or use the product. | number |
| Required Humidity Percentage | ssot__RequiredHumidityPercentage__c | The humidity percentage required for the product. | number |
| Required Temperature Highest Number | ssot__RequiredTemperatureHighestNumber__c | The highest temperature required for the product. | number |
| Required Temperature Lowest Number | ssot__RequiredTemperatureLowestNumber__c | The lowest temperature required for the product. | number |
| Required Temperature UOM | ssot__RequiredTemperatureUOMId__c | The required temperature’s Unit of Measure (UOM). | text |
| Requires Individual Unit Pricing | ssot__RequiresInvididualUnitPricing__c | An indicator whether product requires individual price, for example due to variable weight or size. | text |
| Requires Unit Price Label | ssot__RequiresUnitPriceLabel__c | An indicator whether the unit price label must be visible on the product. | text |
| Revenue Installment Count | ssot__RevenueInstallmentCount__c | The number of installments from 1 to 150 if a product has a revenue schedule | number |
| Revenue Installment Period | ssot__RevenueInstallmentPeriodId__c | A reference ID to the time covered by a revenue schedule, for example weekly or monthly. | text |
| Revenue Schedule Type | ssot__RevenueScheduleTypeId__c | A reference ID to revenue schedule type. | text |
| Revenue Scheduling Enabled | ssot__CanUseRevenueSchedule__c | An indicator whether product can have a revenue schedule. | text |
| Reward Program Points Count | ssot__RewardProgramPointsCount__c | The number of points given for the purchase of product. | number |
| Season | ssot__SeasonId__c | A reference ID to the season the product is intended for, for example summer or winter. | text |
| Service Entitlement Template | ssot__ServiceEntitlementTemplateId__c | A reference ID to a service entitlement template. | text |
| Shelf Facing Unit Count | ssot__ShelfFacingUnitCount__c | The number of units per row of the product that can be displayed. | number |
| Size UOM | ssot__SizeUOMId__c | A reference ID for the unit of measure for the product’s size. | text |
| Standard Warranty Length Month | ssot__StandardWarrantyLengthMonth__c | The length of warranty included from the seller (not manufacturer). | number |
| Stock Ledger Valuation Amount | ssot__StockLedgerValuationAmount__c | The total value of the products in stock. | number |
| Stock Ledger Valuation Amount Currency | ssot__StockLedgerValuationAmountCurrency__c | The currency of the total value of the products in stock. | text |
| Style | ssot__StyleId__c | A reference ID to the style of the product. | text |
| Tare Weight | ssot__TareWeight__c | The weight of the product packaging without the product content. | number |
| Valid For Period Count | ssot__ValidForPeriodCount__c | The duration of time that product is valid. | number |
| Valid For Period Unit Of Measure | ssot__ValidForPeriodUOMId__c | A reference ID to measurement of time associated with Valid For Period Count, for example hours, days, or months. | text |
| Valid From Date | ssot__ValidFromDate__c | The initial date that product can be used. | dateTime |
| Valid To Date | ssot__ValidToDate__c | The final date that product can be used. | dateTime |
| Version Number | ssot__VersionNumber__c | The product version. | text |
| Weight UOM | ssot__WeightUOMId__c | A reference ID for the unit of the measure used for a product’s weight. | text |
| Width | ssot__Width__c | The width of a product. | number |
