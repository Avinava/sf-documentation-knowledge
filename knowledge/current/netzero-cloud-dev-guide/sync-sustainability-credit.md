---
title: "Sync Sustainability Credit"
domain: netzero-cloud-dev-guide
topic: sync-sustainability-credit
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:57.325Z
estimatedTokens: 360
keywords: [Sync, Sustainability, Credit, Synchronize, organization’s, carbon, footprint, credits, MarketPlace, NetZero, Cloud, API, popluates, SustainabilityCredit, SustainabilityPurchase]
---

# Sync Sustainability Credit

> Synchronize your organization’s carbon footprint sustainability
      credits from the MarketPlace to NetZero Cloud. The API popluates the SustainabilityCredit,
      SustainabilityPurchase, and CrbnCreditProject  records in Netzero Cloud.

# Sync Sustainability Credit

Synchronize your organization’s carbon footprint sustainability credits from the MarketPlace to NetZero Cloud. The API popluates the SustainabilityCredit, SustainabilityPurchase, and CrbnCreditProject records in Netzero Cloud.

Resource

```

```

Example URI

```

```

Available version

57.0

Requires Chatter

No

HTTP methods

POST

Request body for POST

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| carbonCreditProjects | Carbon Credit Project Input[] | The details of an environmental project that generates carbon credits by removing greenhouse gases or preventing a certain quantity of greenhouse gases from being released. | Required | 57.0 |
| sustainabilityCarbonCredits | Sustainability Credit Input[] | The total carbon credit purchased for the carbon credit project, which is the cumulative value of all the associated sustainability credits. | Required | 57.0 |
| sustainabilityPurchases | Sustainability Purchase Input[] | Information related to the purchase of sustainability credits such as carbon credits. | Required | 57.0 |

Response body for POST

[Sync Sustainability Carbon Credit Output](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/connect_responses_sync_sustainability_carbon_credit.htm "Output representation for the sync sustainability carbon credit trigger.")

## Code Examples

```
/connect/sustainability/sync-sustainability-credits
```

```
https://yourInstance.salesforce.com/services/data/66.0/connect​​​/sustainability/sync-sustainability-credits
```

```
{ 
        "sustainabilityCarbonCredits":
        [
            {
                "description":"", //optional for integration
                "sustainabilityPurchaseId": "1Os8N000000KyjGSAS", // External Id for purchase optional for integration
                "status":"", //optional for integration
                "crbnCreditProjectId": "01t8N000000Fd86QAC", // External id for Project
                "creditsIssueDate":"", //optional for integration
                "creditsRetiredDate":"", //optional for integration
                "creditsPurchased":1000, //required for integration
                "creditsUnit":"tCO2e", //required
                "costPerUnit":"", //optional for integration
                "vintageYear":"", //optional for integration
                "purchaseDate":"", //optional for integration
                "externalIdentifier":"", //required for integration
                                         //Format : func GUID(Id + OrderItemNumber)
            },
            {...}, {...}
        ]
        "sustainabilityPurchases":
        [
            {
                "name":"101",//required for integration
                "type":"CARBON_CREDITS", //required for integration
                "billingAddress":""{
                        "street": "",
                        "city": "",
                        "state": "",
                        "postalCode": "",
                        "country": ""
                    },//optional for integration
                "description":"",//optional for integration
                "purchaseOrderNumber":"",//optional for integration
                "invoiceNumber":"",//optional for integration
                "externalIdentifier":"NZM-00000101"//required for integration; 
                                                   //Format : "NZM-" + <OrderNumber>
             },
            {...}, {...}
        ]
        "carbonCreditProjects":
        [
            {
                "name":"Wind Farm in New Zealand",//required for integration
                "mitigationType":"",//optional for integration
                "projectType":"",//optional for integration
                "country":"US",//optional for integration
                "region":"NorthAmerica",//optional for integration
                "standardAgencyName":"",//optional for integration
                "voluntaryRegistryName":"Gold Standard",//optional for integration
                "additionalBenefits":"",//optional for integration
                "projectUrl":"",//optional for integration
                "description":"",//optional for integration
                "fundedBy":"",//optional for integration
                "verifiedBy":"",//optional for integration
                "projRegistryIdentifier":"1-56856-912-2",
                "externalIdentifier":"",//required for integration
                                        //Format : registry identifier + registry project ID
                "crbnCrMethodology":""//optional for integration
             },
             {...}, {...}
        ]    
    }
```

## Related Topics

- Carbon Credit Project Input (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/connect_requests_crbn_credit_project_input.htm)
- Sustainability Credit Input (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/connect_requests_sustainability_credit_input.htm)
- Sustainability Purchase Input (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/connect_requests_sustainability_purchase_input.htm)
- Sync Sustainability Carbon Credit Output (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/connect_responses_sync_sustainability_carbon_credit.htm)
