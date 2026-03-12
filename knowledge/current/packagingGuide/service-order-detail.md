---
title: "Service Order Detail"
domain: packagingGuide
topic: service-order-detail
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:20.698Z
estimatedTokens: 1018
keywords: [Service, Order, Detail, instance, product]
---

# Service Order Detail

> Represents an instance of a product on a service order.

# Service Order Detail

Represents an instance of a product on a service order.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=packagingGuide)

#### Note

Field names are prefixed with CHANNEL\_ORDERS\_\_ unless otherwise noted.

When you submit an order with the Channel Order App API, include the following fields.

## Fields

| Field Name | Details |
| --- | --- |
| LabelAppNameApplication__c | TypestringPropertiesCreate, Filter, Group, Nillable, SortDescriptionName of the app associated with the product. |
| LabelBilling FrequencyNamepc_Billing_Frequency__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionHow often the customer is billed per year. This value must match your Salesforce contract, unless you’ve been granted override permissions. |
| LabelCancellation Terms (days)Namepc_Cancellation_Terms__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionNumber of days the customer has to cancel the contract. This value must match your Salesforce contract, unless you’ve been granted override permissions. |
| LabelContract Auto RenewNamepc_Contract_Auto_Renew__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionWhether the contract automatically renews at the end of the term. Possible values are Yes and No. This value must match your Salesforce contract, unless you’ve been granted override permissions. |
| LabelContract LengthNamepc_Contract_Length__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionLength of the contract in months. This value must match your Salesforce contract, unless you’ve been granted override permissions. |
| LabelCurrencyNameCurrency__c | TypestringPropertiesFilter, Nillable, SortDescriptionThe default contract currency from the contract terms associated with this order. Read-only. |
| LabelCustomer PriceNameCustomer_Price_Per_Month__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionPrice per unit per month. This field is required for PNR products. |
| LabelFixed PriceNamepc_Fixed_Price__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionFixed price of the product at the time the order was created. This field must be explicitly set when using the API. |
| LabelPartner Contract TermNamepc_Partner_Contract_Term__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionLookup to the related contract terms record. |
| LabelPNR %Namepc_PNR__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionPercent net revenue of the product at the time the order was created. This field must be explicitly set when using the API. |
| LabelPricingNamepc_Pricing_Type__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionPricing model of the product. Possible values are Fixed and PNR. This field must be explicitly set when using the API. |
| LabelProductNameProduct_Name__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionLookup to the related product catalog record. |
| LabelProduct IDNamepc_Product_ID__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the product. This field must be explicitly set when using the API. |
| LabelRenewal Terms (months)Namepc_Renewal_Terms__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionRenewal term in months. This value must match your Salesforce contract, unless you’ve been granted override permissions. |
| LabelService OrderNamePartner_Order__c | TypereferencePropertiesCreate, Filter, Group, SortDescriptionLookup to the related service order record. |
| LabelSFDC Invoice DescriptionNameProduct_Line_Description__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionContains additional invoice details for the product or order. This field is optional. |
| LabelTotal QuantityNameQuantity__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionNumber of product catalogs on the service order. |
