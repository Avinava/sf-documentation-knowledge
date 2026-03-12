---
title: "b2bExpress_assetConfigData API"
domain: esm-developer-guide
topic: b2bexpressassetconfigdata-api
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:26.882Z
estimatedTokens: 77
keywords: [b2bExpress_assetConfigData, API, Retrieve, assets, b2bExpress, _assetConfigData, URI, HTTP]
---

# b2bExpress_assetConfigData API

> Retrieve the information that is displayed on the assets
		page.

# b2bExpress\_assetConfigData API

Retrieve the information that is displayed on the assets page.

This API is used to store the field and label information that is displayed on the new Assets subtab of the Account page.

## URI

```

```

## HTTP Method

POST

## Request

```

```

## Response

```

```

## Code Examples

```
/services/apexrest/vlocity_cmt/v1/integrationprocedure/b2bExpress_assetConfigData/
```

```
{
	"responseData": {
		"columnMap": [{
				"label": "Id",
				"valueMap": "Id.value",
				"visible": false
			},
			{
				"label": "Asset Name",
				"valueMap": "Name",
				"collapsable": true,
				"showAttrs": true
			},
			{
				"label": "Service Account",
				"valueMap": "vlocity_cmt__ServiceAccountId__r.Name"
			},
			{
				"label": "Billing Account",
				"valueMap": "vlocity_cmt__BillingAccountId__r.Name"
			},
			{
				"label": "Service Identifier",
				"valueMap": "vlocity_cmt__ServiceIdentifier__c.value"
			},
			{
				"label": "Contract",
				"valueMap": "vlocity_cmt__ContractId__r.ContractNumber"
			},
			{
				"label": "Recurring Total",
				"valueMap": "vlocity_cmt__RecurringTotal__c.value",
				"dataType": "Currency",
				"align": "right"
			},
			{
				"label": "One Time Total",
				"valueMap": "vlocity_cmt__OneTimeTotal__c.value",
				"dataType": "Currency",
				"align": "right"
			},
			{
				"label": "Status",
				"valueMap": "vlocity_cmt__ProvisioningStatus__c.value"
			}
		],
		"displayActionOptions": [{
				"label": "Change to Quote",
				"value": "Quote"
			},
			{
				"label": "Change to Order",
				"value": "Order"
			}
		],
		"tableGroupFilterOptions": [
			"Name",
			"ServiceAccountId__r",
			"BillingAccountId__r",
			"Contract__c",
			"ProvisioningStatus__c"
		],
		"excludeRepititiveColumnDataKeys": [
			"vlocity_cmt__BillingAccountId__r",
			"vlocity_cmt__ServiceAccountId__r",
			"vlocity_cmt__ProvisioningStatus__c"
		]
	}
}
```
