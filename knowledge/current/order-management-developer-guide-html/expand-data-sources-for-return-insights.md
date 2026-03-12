---
title: "Expand Data Sources for Return Insights"
domain: order-management-developer-guide-html
topic: expand-data-sources-for-return-insights
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:20.163Z
estimatedTokens: 783
keywords: [Expand, Data, Sources, Insights, Extensions, mechanism, Apex, customize, functionality, powers, B2B, B2C, Commerce, storefronts, custom]
---

# Expand Data Sources for Return Insights

> Extensions are a mechanism for using Apex to customize the functionality that powers B2B
  and B2C Commerce storefronts. The custom Apex class that implements an extension is called an
  extension provider. To extend or override the Product Expand API functionality, use the Commerce
  Order Management Product Expand Extension.

# Expand Data Sources for Return Insights

Extensions are a mechanism for using Apex to customize the functionality that powers B2B and B2C Commerce storefronts. The custom Apex class that implements an extension is called an extension provider. To extend or override the Product Expand API functionality, use the Commerce Order Management Product Expand Extension.

To start, extend the base class, commerce\_ordermanagement.ProductExpandService.

```

```

Override the returnReasons method of commerce\_ordermanagement.ProductExpandService, which is used to get the product’s return reasons. In this example, the entire method is replaced with custom logic to extract product data from [ProductExpandRequest](https://developer.salesforce.com/docs/commerce/salesforce-commerce/guide/ProductExpandResponse.html), set the return reasons, and process the [ProductExpandResponse](https://developer.salesforce.com/docs/commerce/salesforce-commerce/guide/ProductExpandRequest.html). You can also fetch the return reasons from an external service.

```

```

Instead of replacing the entire method with custom logic, you can call the base method with the super() method. You can still insert custom logic before and after the super() call.

```

```

To get the return reasons from an external service, define a custom private method.

```

```

You can create extension classes that can:

-   Replace the entire default implementation of each base class method with custom logic.
-   Add custom logic before calling the default implementation of a base class method.
-   Add customer logic after calling the default implementation of a base class method.
-   Add custom methods and classes.

To learn how to add your own Apex classes to a Salesforce org, see Adding an Apex Class.

Before you can fill an extension slot with a custom extension provider, create a web store. Register the extension class, and map the extension class to a B2C or D2C Commerce store. If you don’t have a web store, create a dummy web store in your Developer Console. Go to Debug, open Execute Anonymous Window, and paste this code.

```

```

Click **Execute**.

To fetch the web store ID, execute this SOQL query

```

```

and pick the web store ID from the returned values. Map your web store’s ID to the EPN.

To register and map extension classes, we recommend using Salesforce CLI and the Salesforce Commerce plug-in for sfdx. To manage extensions, use the latest version of Salesforce CLI. For detailed instructions, [install Salesforce CLI](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_setup.meta/sfdx_setup/sfdx_setup_install_cli.htm) and [update Salesforce CLI](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_setup.meta/sfdx_setup/sfdx_setup_update_cli.htm).

To install the plug-in, run sfdx plugins:install @salesforce-commerce.

Example commands. The store-ID is the web store ID.

## Example

```

```

#### See Also

-   [*Salesforce Help*: Return Insights](https://help.salesforce.com/s/articleView?id=commerce.om_return_insights&type=5&language=en_US "Salesforce Help: Return Insights - HTML (New Window)")

## Code Examples

```apex
public class ProductExpandServiceSample extends commerce_ordermanagement.ProductExpandService {
    // Extension code.
}
```

```apex
// Extract product data from the request with custom logic and get the product's return reasons from an external service.

public override commerce_ordermanagement.ProductExpandResponse returnReasons(commerce_ordermanagement.ProductExpandRequest productExpandRequest) {

        // Create a product expand response without the default processing.

        List<commerce_ordermanagement.ProductData> productList = new List<commerce_ordermanagement.ProductData>();

        List<commerce_ordermanagement.Reason> returnReasons = new List<commerce_ordermanagement.Reason>();

        commerce_ordermanagement.Reason reason1 = new commerce_ordermanagement.Reason();
        commerce_ordermanagement.Reason reason2 = new commerce_ordermanagement.Reason();

        //Set the reason in the response. You can also fetch the reasons from external systems and set it.
        reason1.setReason('Size is big');
        reason2.setReason('Too big');

        returnReasons.add(reason1);
        returnReasons.add(reason2);

        for(commerce_ordermanagement.ProductData productData : productExpandRequest.getProducts()) {
            // Set the return reasons for the products in the request
            productData.setReturnReasons(returnReasons);
            productList.add(productData);
        }

        response.setProductList(productList);
        response.setSucceed(true);

        // Process the product expand response with more custom logic.

        // Return the processed product expand response.
        return response;
    }
```

```apex
public override commerce_ordermanagement.ProductExpandResponse returnReasons(commerce_ordermanagement.ProductExpandRequest productExpandRequest) {
        // Get the product expand response using the default implementation of the returnReasons method. Although returnReasons is called unmodified, we can supply it with a modified version of the request.
        commerce_ordermanagement.ProductExpandResponse productExpandResponse = super.returnReasons(productExpandRequest);

        // Modify the product return reasons response with custom logic.

        // Return the modified transactional return reasons response.
        return productExpandResponse;
    }
```

```apex
private Map<String, ProductReturnReasonsDataFromExternalService> getReturnReasonsFromExternalService(Set<String> productIds){
        // Custom logic.
    }
```

```
WebStore store = new WebStore(
      Name = 'SiteGenesis',
      // Either NET or GROSS
      DefaultTaxLocaleType = 'NET',
      // Format expected is instanceId@siteName; example abc_123@SiteGenesis
      ExternalReference = 'bblz_stg@SiteGenesis',
      Type = 'B2CE'
    );
insert store;
```
