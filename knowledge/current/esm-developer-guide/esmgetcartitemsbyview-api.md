---
title: "ESM_getCartItemsByView API"
domain: esm-developer-guide
topic: esmgetcartitemsbyview-api
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:26.940Z
estimatedTokens: 55
keywords: [ESM_getCartItemsByView, API, Retrieve, quote, line, items, per, option, selected, Displaying, ESM, _getCartItemsByView, URI, HTTP]
---

# ESM_getCartItemsByView API

> Retrieve quote line items for a given Quote ID as per the option selected in the Displaying list.

# ESM\_getCartItemsByView API

Retrieve quote line items for a given Quote ID as per the option selected in the **Displaying** list.

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
/services/apexrest/vlocity_cmt/v1/integrationprocedure/ESM_getCartItemsByView/
```

```
{
  "cartId": "0Q0Hp000003kFIDKA2",
  "pageSize": "10",
  "include": "count,defaultFields,productRelationships,modifiedInfo,errorInfo",
  "offset": "0",
  "searchByFields": "Product2.Name,vlocity_eagle__QuoteMemberId__r.Name,vlocity_eagle__QuoteMemberId__r.vlocity_eagle__StreetAddress__c,vlocity_eagle__QuoteMemberId__r.vlocity_eagle__State__c,vlocity_eagle__QuoteMemberId__r.vlocity_eagle__City__c,vlocity_eagle__QuoteGroupId__r.Name,vlocity_eagle__Action__c,vlocity_eagle__BillingAccountId__r.Name",
  "searchText": "wan",
  "sortByField": ""
}
```

```
{
  "attributeInfo": {
    "attributeCodeNameMap": {
      "VEPC_ATTR_SDWAN_NETWORK_TOPOLOGY": "SD WAN Network Topology",
      "VEPC_ATTR_SDWAN_BANDWIDTH": "SD WAN Bandwidth",
      "VEPC_ATTR_CONTRACT_TERM": "Contract Term"
    },
    "errorCode": "INVOKE-200",
    "error": "OK"
  },
  "response": {
    "TotalCount": 1,
    "pageSize": 1,
    "results": [
      {
        "attributes": {
          "type": "QuoteLineItem",
          "url": "/services/data/v62.0/sobjects/QuoteLineItem/0QLHp000004V2PYOA0"
        },
        "vlocity_eagle__BillingAccountId__c": "001Hp00002pyMD0IAM",
        "vlocity_eagle__AttributeSelectedValues__c": "{"VEPC_ATTR_CONTRACT_TERM":"Month-to-Month","VEPC_ATTR_SDWAN_NETWORK_TOPOLOGY":"Independent Branch Locations","VEPC_ATTR_SDWAN_BANDWIDTH":"50 Mbps"}",
        "vlocity_eagle__IsValidated__c": false,
        "vlocity_eagle__Action__c": "Add",
        "vlocity_eagle__AssetReferenceId__c": "33a87909-3079-f768-6832-81dadbf11802",
        "vlocity_eagle__OneTimeTotal__c": 500,
        "vlocity_eagle__RecurringTotal__c": 50,
        "vlocity_eagle__RootItemId__c": "33a87909-3079-f768-6832-81dadbf11802",
        "Id": "0QLHp000004V2PYOA0",
        "Product2Id": "01tHp00000BapTAIAZ",
        "Quantity": 1,
        "vlocity_eagle__BillingAccountId__r": {
          "attributes": {
            "type": "Account",
            "url": "/services/data/v62.0/sobjects/Account/001Hp00002pyMD0IAM"
          },
          "Name": "Acme",
          "BillingAddress": {
            "city": "New York",
            "country": "USA",
            "geocodeAccuracy": null,
            "latitude": null,
            "longitude": null,
            "postalCode": "31349",
            "state": "NY",
            "street": "10 Main Rd."
          },
          "Id": "001Hp00002pyMD0IAM",
          "RecordTypeId": "012Hp000002BM54IAG"
        },
        "Product2": {
          "attributes": {
            "type": "Product2",
            "url": "/services/data/v62.0/sobjects/Product2/01tHp00000BapTAIAZ"
          },
          "Name": "Meraki MX SD-WAN",
          "Id": "01tHp00000BapTAIAZ",
          "RecordTypeId": "012Hp000002JOd1IAG"
        }
      }
    ],
    "assetIdToQuoteMap": {},
    "assetIdToOrderMap": {},
    "assetIdToAssetMap": {},
    "ProductRelationship": [],
    "ModifiedRoots": [
      {
        "attributes": {
          "type": "AggregateResult"
        },
        "vlocity_eagle__RootItemId__c": "33a87909-3079-f768-6832-81dadbf11802"
      }
    ],
    "itemIdToErrorMessages": {
      "0QLHp000004V2PYOA0": {},
      "0QLHp000004V2PaOAK": {},
      "0QLHp000004V2PZOA0": {}
    },
    "itemIdErrorMap": {
      "0QLHp000004V2PYOA0": false,
      "0QLHp000004V2PaOAK": false,
      "0QLHp000004V2PZOA0": false
    },
    "errorCode": "INVOKE-200",
    "error": "OK"
  }
}
```
