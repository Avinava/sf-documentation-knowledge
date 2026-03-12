---
title: "tpmGenericUtils Module"
domain: retail-api
topic: tpmgenericutils-module
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:41.015Z
estimatedTokens: 1094
namespace: CGCloud
keywords: [tpmGenericUtils, Module, replacements, accessing, @salesforce, modules, components, cgcloud, runtime, Implementation, Perform, Apex, Calls, Load, Resources]
---

# tpmGenericUtils Module

> The tpmGenericUtils module provides replacements
        for accessing the @salesforce modules on components
        that have the cgcloud runtime namespace.

**Namespace:** `CGCloud`

# tpmGenericUtils Module

The tpmGenericUtils module provides replacements for accessing the @salesforce modules on components that have the cgcloud runtime namespace.

## Namespace

```

```

## Implementation Example

```

```

## Example: Perform Apex Calls

To call Apex methods, this module provides the apex, and apexCacheable functions. The Apex method to be called must be a global class, implementing the System.Callable interface.

```

```

In your custom LWC, use the apex, and apexCacheable methods. The difference between apex, and apexCacheable is that apexCacheable uses the Lightning Web Components caching layer.

```

```

## Example: Load Static Resources

To get the URL of the static resource to be loaded, use the getStaticResourceURL function, and then load the static resource using the standard Lightning Web Components tools.

```

```

## Example: Access the Internationalization Properties

You can use the i18n object to get the internationalization properties. The properties exposed are the ones described in [Salesforce Developer Component Library Documentation](https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.create_i18n).

```

```

## Example: Get the Current User ID

The UserId attribute returns the current User ID.

```

```

## Example: Get the Client Form Factor

The FORM\_FACTOR attribute returns the client form factor.

```

```

## Example: Get the CGCloud Namespace

You can get the CGCloud namespace through the properties, CGCloudNamespace, and CGCloudNamespaceWithUnderscore.

```

```

## Example: Use the TPMManualInput Class

The TPMManualInput class represents a manual input entry for the TPM grids. When reading manual inputs on TPM components, you receive an array of instances of the TPMManualInput class. By manipulating and setting this array again into the TPM component, you can change the loaded inputs for the TPM grids.

Methods

The TPMManualInput class supports the following methods:

-   getKPICode()

    Returns the manual input editable KPI code.

-   getPeriodDateFrom()

    Returns the period from date for the manual input. If the manual input is for the total period, it returns null.

-   getPeriodDateThru()

    Returns the period through date for the manual input. If the manual input is for the total period, it returns null.

-   getTacticId()

    Returns the tactic ID of the tactic the manual input applies to.

-   getProductId()

    Returns the product ID of the product the manual input applies to.

-   getComponentId()

    Returns the component ID of the BOM Component the manual input applies to.

-   getValue()

    Returns the value of the manual input.


Constructor

The constructor for creating an instance of the TPMManualInput expects the options object as a single parameter. The options passed in this object define the characteristics of the manual input entry. Here are the possible options you can pass to the constructor:

| Property | Type | Description |
| --- | --- | --- |
| options.kpi | KPIDefinition | Optional. The KPI definition to create the manual input for. You can get KPI definitions by calling the getKPIs() method. To create the manual input, a KPI definition must be for an editable or an editable calculated compound main KPI.Provide either options.kpi or options.kpiCode. |
| options.kpiCode | String | Optional. The editable KPI code to create the manual input for.Provide either options.kpi or options.kpiCode. |
| options.period | PeriodDefinition | Required. The period definition to create the manual input for. You can get period definitions by calling the getPeriods() method. |
| options.tacticId | String | Optional. The Tactic ID the manual input applies to.Required if the KPI has the promotion tactic scope. Default value is null. |
| options.productId | String | Optional. The product ID the manual input applies to. It can be any level of the product hierarchy (Category, Brand, and more).If not set, the manual input references the KPI total value. Default value is null. |
| options.componentId | String | Optional. The product ID of the BOM Component part where the input is applied.This option is only used for KPIs whose scope include BOM Components. The default value is null. |
| options.value | Number | Optional. The numeric value for the KPI. The default value is null. |

Example

```

```

## Code Examples

```
import {
  apex,
  apexCacheable,
  getResponse,
  getStaticResourceURL,
  i18n,
  UserId,
  refreshApex,
  getSObjectValue,
  FORM_FACTOR,
  CGCloudNamespace,
  CGCloudNamespaceWithUnderscore,
  TPMManualInput
} from 'cgcloud/tpmGenericUtils';
```

```apex
global with sharing class ApexTest implements System.Callable {
  global class ApexTestException extends Exception {}

  // Interface method
  public Object call(String method, Map<String, Object> params) {
    // Both method and params will be received
    if (method == 'getAccounts') {
        return getAccounts(params);
    } else {
        // Exceptions can be thrown
        throw new Exception('Invalid method!');
    }
  }
  
  private static List<Account> getAccounts(Map<String, Object> params) {
    // Validate parameters
    if (params == null || String.isBlank((String) params.get('searchKey')) == null) {
        return new List<Account>();
    }
    
    // Extract parameters.
    // NOTE: Javascript Dates are received as Strings, they need to be parsed 
    // with
    // Date newDate = Date.valueOf((String.valueOf(dateString)));
    String searchKey = String.valueOf(params.get('searchKey'));
    String searchKeyProcessed = '%' + String.escapeSingleQuotes(searchKey) + '%';
    
    // return
    return [SELECT Id, Name FROM Account WHERE Name LIKE :searchKeyProcessed LIMIT 100];
  }
}
```

```
import { api, wire, LightningElement } from 'lwc';

import {
  CGCloudNamespaceWithUnderscore,
  apexCacheable,
  apex,
  getResponse,
  refreshApex
} from 'cgcloud/tpmGenericUtils';

export default class MyApexTestComponent extends LightningElement {
    
    imperativeData = null;
    
    wiredResponse = null;
    wiredData = null;
    
    // Store the params for the request
    requestParams = {
        searchKey = ''
    };
    
    // It's possible to use the wire adapter only with the apexCacheable method
    @wire(apexCacheable, {
      descriptor: {
        className: 'ApexTest',
        method: 'getAccounts'
      },
        params: '$requestParams'
    })
    wiredFunction(value) {
      this.wiredResponse = value; // Save wired data to be able to call
                                    // refreshApex later
      const { data, error } = getResponse(value); // Use 'getResponse' to extract data
      if (error) {
        console.error(error);
      }
      this.wiredData = data;
    }
    
    onSearchKeyChange(event) {
        // Set the new parameters
        this.requestParams = {
            searchKey = event.detail.value
        };
        // The change to requestParams will trigger a refresh of 
        // the wire adapter data.
    }
    
    onOtherEvent() {
        // You can force-refresh the wire adapter data
        // with refreshApex
        refreshApex(this.wiredResponse);
    }
    
    // You can call Apex method imperatively
    imperativeApex() {
        apex({ // You can also use apexCacheable to cache the response
          descriptor: {
            className: 'ApexTest',
            method: 'getAccounts'
          },
          params: this.requestParams
        })
        .then(getResponse) // use getResponse to extract data
        .then((data) => {
            this.imperativeData = data;
        });
    }
}
```

```
import { LightningElement } from 'lwc';
import { loadScript, loadStyle } from 'lightning/platformResourceLoader';
import {
  getStaticResourceURL
} from 'cgcloud/tpmGenericUtils';

// getStaticResourceURL returns a Promise
const myZippedResourceURLPromise = getStaticResourceURL('MyZippedResource');

export default class MyStaticResourceComponent extends LightningElement {

    connectedCallback() {
        // Wait for the Base URL promise to resolve
        myZippedResourceURLPromise
            .then((baseURL) => Promise.all([
                // load your resources
                loadScript(this, baseURL + '/MyScript.js'),
                loadStyle(this, baseURL + '/MyStyle.css')
            ]))
            .then(() => {
                // You can use your resource after loaded
                window.MyApp.run();
            });
    }
}
```

```
import {
  i18n
} from 'cgcloud/tpmGenericUtils';

console.log(i18n);

// {
//   "lang": "en-US",
//   "dir": "ltr",
//   "locale": "en-US",
//   "currency": "USD",
//   "firstDayOfWeek": 1,
//   "datetime": {
//     "shortDateFormat": "M/d/yyyy",
//     "mediumDateFormat": "MMM d, yyyy",
//     "longDateFormat": "MMMM d, yyyy",
//     "shortDateTimeFormat": "M/d/yyyy, h:mm a",
//     "mediumDateTimeFormat": "MMM d, yyyy, h:mm:ss a",
//     "shortTimeFormat": "h:mm a"
//   },
//   "number": {
//     "currencyFormat": "¤#,##0.00",
//     "currencySymbol": "$",
//     "decimalSeparator": ".",
//     "groupingSeparator": ",",
//     "numberFormat": "#,##0.###",
//     "percentFormat": "#,##0%"
//   },
//   "timeZone": "America/Los_Angeles"
// }
```
