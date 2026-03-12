---
title: "Create an External Configurator"
domain: cpq-plugins
topic: create-an-external-configurator
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:24.008Z
estimatedTokens: 507
keywords: [External, Configurator, Host, Salesforce, Visualforce, pages, web, application, Heroku, easyXDM, library, transfer, data, CPQ]
---

# Create an External Configurator

> Host your configurator in Salesforce using Visualforce pages, or in an external web
  application such as Heroku. Use the easyXDM library to transfer data between your configurator and
  Salesforce CPQ.

# Create an External Configurator

Host your configurator in Salesforce using Visualforce pages, or in an external web application such as Heroku. Use the easyXDM library to transfer data between your configurator and Salesforce CPQ.

| Available in: Salesforce CPQ Winter ’18 and later |
| --- |


1.  The easiest way to include the easyDM library in your web application is to include the CDN library (hosted by CloudFlare).

    ```

    ```

    You can also [download the library](https://github.com/oyvindkinsey/easyXDM/releases) then upload it to your org as a static resource.

2.  Initialize the easyXDM library. Use this library to send information between your configurator and Salesforce CPQ. This example uses the variable configObj to store the information sent from Salesforce CPQ.

    ```

    ```

3.  Perform the configuration, such as enforcing rules or adding new product attributes that will appear in the quote line editor. For example, set the value of a configuration option called “Special Code” to 12345. This example assumes that you’ve parsed the incoming JSON into the variable configObj.

    ```

    ```

4.  Send the configuration information back to Salesforce CPQ as a JSON string.

    ```

    ```


-   **[Configure Product Bundles](atlas.en-us.cpq_plugins.meta/cpq_plugins/cpq_config_bundles.htm)**
    Use the optionConfigurations parameter to create product bundles. You can nest bundles up to four levels deep, including the top-level product.
-   **[External Configurator Parameters](atlas.en-us.cpq_plugins.meta/cpq_plugins/cpq_config_payload.htm)**
    Salesforce CPQ passes configuration information to your custom configurator in JSON format. Modify the and return the information to Salesforce CPQ.
-   **[External Configurator Example](atlas.en-us.cpq_plugins.meta/cpq_plugins/cpq_api_config_example.htm)**
    This example shows how to initialize the easyXML library and create **Send** and **Cancel** buttons. It then displays the configuration data sent from Salesforce CPQ.

## Code Examples

```
<!-- easyXDM.min.js compiled and minified JavaScript to communicate with Salesforce CPQ-->
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/easyXDM/2.4.20/easyXDM.min.js" crossorigin="anonymous">
</script>
```

```
// Initialize the EasyXDM connection to Salesforce CPQ
var rpc = new easyXDM.Rpc({}, {

      //method defined in Salesforce CPQ
      remote: {
          postMessage: {}
      },

      // method for receiving configuration JSON from Salesforce CPQ
      local: {
         postMessage: function (message) { // parse the incoming information, for example:
             var configObj = JSON.parse(message);
        }
      }
    });
```

```
configObj.product.optionConfigurations["Special Code"] = '12345';
```

```
rpc.postMessage(JSON.stringify(configObj));
```

## Related Topics

- Configure Product Bundles (atlas.en-us.cpq_plugins.meta/cpq_plugins/cpq_config_bundles.htm)
- External Configurator Parameters (atlas.en-us.cpq_plugins.meta/cpq_plugins/cpq_config_payload.htm)
- External Configurator Example (atlas.en-us.cpq_plugins.meta/cpq_plugins/cpq_api_config_example.htm)
