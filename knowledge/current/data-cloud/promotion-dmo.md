---
title: "Promotion DMO"
domain: data-cloud
topic: promotion-dmo
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:17:43.916Z
keywords: [Promotion, DMO, Object, API, Name, Category, Primary, Subject, Area, Key, Relationships, Fields]
---

# Promotion DMO

# Promotion DMO

The Promotion DMO is a Data Cloud data model object (DMO) for loyalty promotion details such as the type of promotion.

## Object API Name

ssot\_\_Promotion\_\_dlm

## Category

Other

## Primary Subject Area

Loyalty

## Primary Key

Promotion ID (ssot\_\_Id\_\_c)

## Relationships

| Object | Field | Cardinality | Related Object | Related Field |
| --- | --- | --- | --- | --- |
| Engagement Topic | Promotion | Many To One: N:1 | Promotion | Promotion ID |
| Promotion | Lead | Many To One: N:1 | Lead | Lead ID |
| Promotion | Loyalty Program Currency | Many To One: N:1 | Loyalty Program Currency | Loyalty Program Currency ID |
| Promotion | Loyalty Program | Many To One: N:1 | Loyalty Program | Loyalty Program ID |
| Promotion | Default Voucher Definition | Many To One: N:1 | Voucher Definition | Voucher Definition ID |
| Promotion Loyalty Partner Product | Promotion | Many To One: N:1 | Promotion | Promotion ID |
| Voucher | Promotion | Many To One: N:1 | Promotion | Promotion ID |

## All Fields

| Field Name | Field API Name | Description | Data Type |
| --- | --- | --- | --- |
| Active Promotion | ssot__ActivePromotionStartDate__c | The start date of the promotion. | dateTime |
| Created Date | ssot__CreatedDate__c | The date the record was created. | dateTime |
| Cumulative Usage Target Amount | ssot__CumulativeUsageTargetAmount__c | The target value of promotion based on frequency of participation. | number |
| Currency | ssot__CurrencyId__c | A reference ID to denomination of currency defined in promotion, for example, dollars or Euro. | text |
| Data Source | ssot__DataSourceId__c | A reference ID for the logical name referring to the source of records also identified as the external source ID. | text |
| Data Source Object | ssot__DataSourceObjectId__c | A reference ID for the logical name of the object where this record came from, whether that is a name of a cloud storage file or another connector’s external object. | text |
| Default Voucher Definition | ssot__DefaultVoucherDefinitionId__c | A reference ID to the main voucher where other vouchers are awarded to individuals. | text |
| Description | ssot__Description__c | The description of the promotion. | text |
| Discount Buy Amount | ssot__DiscountBuyAmount__c | The order value, before surcharges, required to receive a discount. | number |
| Discount Buy Count | ssot__DiscountBuyCount__c | The quantity that must be purchased to receive discount or quantity of free product. | number |
| Discount Exclusivity Type | ssot__DiscountExclusivityTypeId__c | A reference ID to cases where promotion recipients qualify for discounts in more than one way. | text |
| Discount Type | ssot__DiscountTypeId__c | A reference ID to types of discounts available in promotion, for example fixed price or percentage-off. | text |
| Discount Value Amount | ssot__DiscountValueAmt__c | The amount deducted from an order subtotal if conditions are met. | number |
| End Date | ssot__EndDate__c | The last date the promotion is available to customers. | dateTime |
| Enrollment End Date | ssot__EnrollmentEndDate__c | The last date when customers can enroll in the promotion. | dateTime |
| Enrollment Start Date | ssot__EnrollmentStartDate__c | The first date when customers can enroll in the promotion. | dateTime |
| Evaluation Order Rank | ssot__EvaluationOrderRankNbr__c | The order of applying promotions to the product cost. | number |
| External Record ID | ssot__ExternalRecordId__c | A reference ID to an external data source system. | text |
| External Source ID | ssot__ExternalSourceId__c | A reference ID for the system in which the external record ID was assigned. | text |
| Fulfillment Action | ssot__FulfillmentActionId__c | A reference ID to how marketing promotion provides values to customer, for example via loyalty points, cash discounts, or voucher. | text |
| Inactive Promotion | ssot__InactivePromotionEndDate__c | The date when the promotion becomes inactive. | dateTime |
| Internal Organization | ssot__InternalOrganizationId__c | A reference ID to the business unit or other internal organization that owns the business account. | text |
| Is Active | ssot__IsActive__c | An indicator if the promotion is available to customers. | text |
| Is Enrollment Required | ssot__IsEnrollmentRequired__c | An indicator if the promotion can only be applied to persons who have enrolled in it. | text |
| Last Modified Date | ssot__LastModifiedDate__c | The date when a user last modified the record. | dateTime |
| Lead | ssot__LeadId__c | A reference ID to person or company that showed interest in company's products. | text |
| Lead Source | ssot__LeadSourceId__c | A reference ID to the source where the lead was obtained. | text |
| Loyalty Program | ssot__LoyaltyProgramId__c | A reference ID to marketing strategy designed to encourage customers to continue shopping at or use services of a business associated with the program. | text |
| Loyalty Program Currency | ssot__LoyaltyProgramCurrencyId__c | A reference ID to the value or currency the loyalty program offers to customers. | text |
| Name | ssot__Name__c | The promotion’s name. | text |
| Objective | ssot__Objectivetext__c | The business goal of the promotion, for example, a "10% increase in product revenue." | text |
| Points Quantity | ssot__PointsQuantity__c | The points awarded during a promotion. | number |
| Primary Campaign | ssot__PrimaryCampaignId__c | A reference ID to a marketing project that you want to plan, manage, and track. | text |
| Promotion Class | ssot__PromotionClassId__c | A reference ID to categories of promotions, for example, product, order, or shipping. | text |
| Promotion Id | ssot__Id__c | A unique ID used as primary key for the Promotion DMO. | text |
| Promotion Method | ssot__PromotionMethodId__c | A reference ID to the method of promotion, for example, displays, coupons, or a contest. | text |
| Promotion Reason | ssot__PromotionReasonId__c | A reference ID to why promotion was created, for example advertising or publicity. | text |
| Promotion Status | ssot__PromotionStatusId__c | A reference ID to status of marketing promotion, for example draft, activated, or complete. | text |
| Promotion Type | ssot__PromotionTypeId__c | A reference ID to type of promotion. | text |
| Promotional Image | ssot__PromotionalImage__c | A graphic used to enhance promotion in a digital format. | text |
| Promotional Message | ssot__PromotionalMessage__c | A message displayed to possible consumers of promotion, for example, "20% off all shoes for Mother's Day". | text |
| PromotionMarketSegments relationship | ssot__PromotionMarketSegments__c |  | text |
| Start Date | ssot__StartDate__c | The date the promotion is available to customers. | dateTime |
| Total Reward Value Amount | ssot__TotalRewardValueAmount__c | The total savings or reward value accumulated for promotion. | number |