---
title: "TransactionProcessingType"
domain: revenue-cloud
topic: transactionprocessingtype
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:12.870Z
estimatedTokens: 1140
keywords: [TransactionProcessingType, settings, configure, processing, constraints, API, version, 63.0, later, SOAP, Calls, REST, Usage]
---

# TransactionProcessingType

> Represents the settings to configure the processing constraints for a
         request.. This object is available in API version 63.0 and later.

# TransactionProcessingType

Represents the settings to configure the processing constraints for a request.. This object is available in API version 63.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=revenue_lifecycle_management_dev_guide)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

Refer to the Usage section to learn more about creating Transaction Processing Type records based on your requirements. See the [setup details](https://help.salesforce.com/s/articleView?id=ind.product_configurator_specify_which_rule_engine_to_use.htm&language=en_US "HTML (New Window)") to specify the default rule engine on the Revenue Settings page.

## Supported SOAP API Calls

create(), describeSObjects(), query(), retrieve()

## Supported REST API Methods

GET, HEAD, POST, Query

## Fields

| Field | Details |
| --- | --- |
| Description | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe description of the transaction processing configuration to help Salesforce admins with configuration in their orgs. |
| DeveloperName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. The unique name of the object in the API. This name can contain only underscores and alphanumeric characters, and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. In managed packages, this field prevents naming conflicts on package installations. With this field, a developer can change the object’s name in a managed package and the changes are reflected in a subscriber’s organization. Label is Record Type Name. |
| Language | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, Nillable, UpdateDescriptionThe language of the TransactionProcessingType object.Valid values are:da—Danishde—Germanen_US—Englishes—Spanishes_MX—Spanish (Mexico)fi—Finnishfr—Frenchit—Italianja—Japaneseko—Koreannl_NL—Dutchno—Norwegianpt_BR—Portuguese (Brazil)ru—Russiansv—Swedishth—Thaizh_CN—Chinese (Simplified)zh_TW—Chinese (Traditional) |
| MasterLabel | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe label for the TransactionProcessingType object. |
| PricingPreference | TypestringPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies whether to execute the price calculation step for each sales transaction record. Valid values are:Force—Reprices all lines.System—Performs a delta pricing request on the unprocessed lines when Delta Pricing is enabled in the org.Skip—Skips the pricing request on all lines.Available in API version 65.0 and later. |
| RatingPreference | TypestringPropertiesDescriptionSpecifies whether catalog rates are fetched and saved during quote creation. Valid value is Fetch. Use this value to retrieve and save catalog rates for usage resources associated with each sales transaction record. If this value isn't specified, catalog rates aren't saved by default when a quote line item is added to a quote.Available in API version 66.0 and later if Rate Management is enabled. |
| RuleEngine | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, SortDescriptionThe rule engine to be used for processing rules.Valid values are:AdvancedConfiguratorStandardConfigurator |
| SaveType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies how the transaction results are processed when saved for Salesforce administrators to adjust the user experience as desired. Valid values are:StandardLarge—Reserved for future use. |
| TaxPreference | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies whether to execute or skip the tax calculation step for each sales transaction record.Valid value is Skip. If this value isn't specified, then tax calculation request is performed by default. Available in API version 65.0 and later. |

## Usage

Create transaction type records by calling this resource through a POST method.

```

```

Here's a sample payload that specifies the rule engine to use and steps to skip for each sales transaction record.

```

```

Here's a sample payload that specifies a value for rating preference and the steps to skip for each sales transaction record.

```

```

## Code Examples

```
/services/data/v66.0/tooling/sobjects/TransactionProcessingType
```

```
{
  "SaveType": "Standard",
  "Description": "Setup for Transaction Processing Type",
  "DeveloperName": "SkipPricingAndTaxStep",
  "MasterLabel": "SkipPricingAndTaxStep",
  "RuleEngine": "StandardConfigurator",
  "PricingPreference": "Skip",
  "TaxPreference": "Skip"
}
```

```
{
  "SaveType": "Standard",
  "Description": "Setup for Transaction Processing Type",
  "DeveloperName": "SkipPricingAndTaxStep",
  "MasterLabel": "SkipPricingAndTaxStep",
  "RuleEngine": "StandardConfigurator",
  "PricingPreference": "Skip",
  "TaxPreference": "Skip",
  "RatingPreference": "Fetch"
}
```
