---
title: "ConnectApi.DatacloudOrderInput"
domain: apex-reference
topic: connectapidatacloudorderinput
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:37.078Z
keywords: [ConnectApi.DatacloudOrderInput, See]
---

# ConnectApi.DatacloudOrderInput

# ConnectApi.DatacloudOrderInput

Input representation for a Datacloud order to purchase contacts or companies and retrieve purchase information.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| companyIds | String | A comma-separated list of identification numbers for the companies to be purchased.You can’t include any contact IDs or your purchase fails. | Required to purchase companies | 32.0 |
| contactIds | String | A comma-separated list of identification numbers for the contacts to be purchased.You can’t include any company IDs or your purchase fails. | Required to purchase contacts | 32.0 |
| userType | ConnectDatacloudUserTypeEnum | Indicates the Data.com user type to be used. There are two user types.Monthly (default)Listpool | Optional | 32.0 |

#### See Also

-   [postOrder(orderInput)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Datacloud_static_methods.htm#apex_ConnectAPI_Datacloud_postOrder_1 "Purchase records that are listed in an input file.")