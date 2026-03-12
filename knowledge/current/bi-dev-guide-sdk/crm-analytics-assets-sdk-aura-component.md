---
title: "CRM Analytics Assets SDK Aura Component"
domain: bi-dev-guide-sdk
topic: crm-analytics-assets-sdk-aura-component
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:06.882Z
estimatedTokens: 1548
keywords: [CRM, Analytics, Assets, SDK, Aura, Component, Discover, dashboards, lenses, datasets, their, dig, dataset, dashboard, saved]
---

# CRM Analytics Assets SDK Aura Component

> Discover CRM Analytics dashboards, lenses and datasets, get their details, and dig into
  dataset fields. Discover dashboard saved views and explore dashboard state. Create and execute
  queries directly on datasets

# CRM Analytics Assets SDK Aura Component

Discover CRM Analytics dashboards, lenses and datasets, get their details, and dig into dataset fields. Discover dashboard saved views and explore dashboard state. Create and execute queries directly on datasets

## Call the SDK

To call the SDK, declare the wave:sdk component in your component or app.

<wave:sdk aura:id="sdk"/>

Use sdk.invokeMethod to specify the method and any parameters.

sdk.invokeMethod(context, methodName, methodParameters, callback)

For example, here’s a call that uses listDashboards as methodName.

```

```

See the [wave:sdk Component Reference](https://developer.salesforce.com/docs/component-library/bundle/wave:sdk/example) for a full working example.

Each method has its own set of parameters (methodParameters).

## Methods and Parameters

listDashboards

Retrieves a list of all dashboards. Can be filtered by specifying parameters

| Parameter Name | Description | Required | Type |
| --- | --- | --- | --- |
| folderId | Filters the results to include only the contents of a specific folder. | FALSE | String, base platform object ID format |
| page | A generated token that indicates the view of the dashboards to be returned | FALSE | String |
| pageSize | Number of items to be returned in a single page. Default is 25 and maximum is 200. | FALSE | Integer |
| q | Search terms. Individual terms are separated by spaces. Wild cards aren’t supported. | FALSE | String |
| sort | Sort order of the results. Enum values are LastModified, MRU, and Name. Default value is MRU. | FALSE | String |
| scope | Type of scope to be applied to the returned items (CreatedByMe or SharedWithMe) | FALSE | String |
| type | Asset type | FALSE | String |
| templateApiName | Filter collection by templateApiName. | FALSE | String |
| mobileOnly | For mobile dashboards only. | FALSE | String |

listLenses

Retrieves a list of all lenses. Can be filtered by specifying parameters

| Parameter Name | Description | Required | Type |
| --- | --- | --- | --- |
| folderId | Filters the results to include only the contents of a specific folder. | FALSE | String, base platform object ID format |
| page | A generated token that indicates the view of the lenses to be returned | FALSE | String |
| pageSize | Number of items to be returned in a single page. Default is 25 and maximum is 200. | FALSE | Integer |
| q | Search terms. Individual terms are separated by spaces. Wild cards aren’t supported. | FALSE | String |
| sort | Sort order of the results. Enum values are LastModified, MRU, and Name. Default value is MRU. | FALSE | String |
| scope | Type of scope to be applied to the returned items (CreatedByMe or SharedWithMe) | FALSE | String |

listDatasets

Retrieves a list of all datasets. Can be filtered by specifying parameters

| Parameter Name | Description | Required | Type |
| --- | --- | --- | --- |
| folderId | Filters the results to include only the contents of a specific folder. | FALSE | String, base platform object ID format |
| hasCurrentOnly | Filters the list of datasets to include only those datasets that have a current version. The default is false. | FALSE | String, base platform object ID format |
| page | A generated token that indicates the view of the dashboards to be returned | FALSE | String |
| pageSize | Number of items to be returned in a single page. Default is 25 and maximum is 200. | FALSE | Integer |
| q | Search terms. Individual terms are separated by spaces. Wild cards aren’t supported. | FALSE | String |
| sort | Sort order of the results. Enum values are LastModified, MRU, and Name. Default value is MRU. | FALSE | String |
| scope | Type of scope to be applied to the returned items (CreatedByMe or SharedWithMe) | FALSE | String |

describeDashboard

Retrieves the details of a single dashboard.

| Parameter Name | Description | Required | Type |
| --- | --- | --- | --- |
| dashboardId | 15 or 18-digit id of the dashboard. | TRUE | String, base platform object ID format |

describeLens

Retrieves the details of a single lens.

| Parameter Name | Description | Required | Type |
| --- | --- | --- | --- |
| lensId | 15 or 18-digit id of the lens. | TRUE | String, base platform object ID format |

describeDataset

Retrieves the details of a single dataset.

| Parameter Name | Description | Required | Type |
| --- | --- | --- | --- |
| datasetId | 15 or 18-digit id of the dataset. | TRUE | String, base platform object ID format |

getDatasetFields

Retrieves a list of all the fields for a single dataset.

| Parameter Name | Description | Required | Type |
| --- | --- | --- | --- |
| datasetId | 15 or 18-digit id of the dataset. | TRUE | String, base platform object ID format |
| versionId | 15 or 18-digit version id of the dataset. | TRUE | String, base platform object ID format |

executeQuery

Executes a CRM Analytics SAQL query.

| Parameter Name | Description | Required | Type |
| --- | --- | --- | --- |
| query | The SAQL query to execute, in JSON format. | TRUE | String, base platform object ID format |

listDashboardSavedViews

Retrieves a list of all saved views for a dashboard.

| Parameter Name | Description | Required | Type |
| --- | --- | --- | --- |
| dashboardIdOrApiName | The 15 or 18-digit id or the fully qualified name of the dashboard. | TRUE | String, base platform object ID format |

getDashboardSavedView

Retrieves the detail of one dashboard saved view.

| Parameter Name | Description | Required | Type |
| --- | --- | --- | --- |
| dashboardIdOrApiName | The 15 or 18-digit id or the fully qualified name of the dashboard. | TRUE | String, base platform object ID format |
| viewId | The 15 or 18-digit id of the saved view. | TRUE | String, base platform object ID format |

getDashboardInitialSavedView

Retrieves the initial view information for a dashboard saved view.

| Parameter Name | Description | Required | Type |
| --- | --- | --- | --- |
| dashboardIdOrApiName | The 15 or 18-digit id or the fully qualified name of the dashboard. | TRUE | String, base platform object ID format |
| viewId | The 15 or 18-digit id of the initial saved view. | TRUE | String, base platform object ID format |

## Code Examples

```
var context = {};
   var methodName = 'listDashboards';
   var methodParameters = {
     'pageSize' : 200,
     'sort' : 'Name'
   };
   
   sdk.invokeMethod(context, methodName, methodParameters,
   $A.getCallback(function (err, data) {
   if (err !== null) {
     //DO THIS IF THE METHOD FAILS
     console.error("SDK error", err);
   } else {
     //DO THIS IF THE METHOD SUCCEEDS
     component.set('v.dashboards', data.dashboards);
   }
}))
```
