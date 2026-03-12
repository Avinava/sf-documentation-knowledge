---
title: "Customize the Retail Order Proposal List Creation Process"
domain: retail-api
topic: customize-the-retail-order-proposal-list-creation-process
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:37.126Z
estimatedTokens: 441
keywords: [Customize, Retail, Order, Proposal, Creation, Process, callable, Apex, customization, hook]
---

# Customize the Retail Order Proposal List Creation Process

> To customize the order proposal list creation process, create a callable Apex class as
    a customization hook.

# Customize the Retail Order Proposal List Creation Process

To customize the order proposal list creation process, create a callable Apex class as a customization hook.

1.  Log in to your Salesforce org, and go to Developer Console.
2.  Create a global Apex class that implements the System.Callable interface.
3.  Override the global call method that has these parameters.

    -   action: String. The behavior for the method to exhibit.
    -   params: Map<String,Object>. Arguments to be used by the specified action.

    Here’s the Apex class structure.

    ```

    ```

4.  Modify the list of products displayed on the order proposal list UI based on your custom logic.

    Here’s a sample Apex code that adds additional product IDs from a custom object, Proposed\_Products\_\_c, and the IDs that belong to the beverages product category to the list of proposed products.

    ```

    ```

5.  From Setup, in the Quick Find box, enter Custom Metadata Types, and then expand **Custom Metadata Types**.
6.  Click **Manage Records** on the **CGCloud Process Customization** row.
7.  Click **New**, fill in these details, and then save your work.

    -   **Label**: RE\_Order\_Proposal\_List
    -   **DeveloperName**: RE\_Order\_Proposal\_List
    -   **Class**: <Your Callable APEX Class>
    -   **Method**: proposalList
    -   **Enabled**: Select the checkbox

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=retail_api)

    #### Note

    Before invoking the customization hook, ensure that the Consider Listing setting in Order Template is set to Yes.


Your Apex customization hook is enabled. When an order proposal list is created, the call method modifies the proposed product list based on your custom logic.

## Code Examples

```apex
global class <Your Callable APEX Class> implements System.Callable {
  global Object call(String action, Map<String, Object> params) {
    // Retrieve the list of proposed products from the parameters
    List<Product2> products = (List<Product2>) params.get('products');
    
    // Retrieve the account ID and order ID from the parameters
    Id accountId = (Id) params.get('accountId');
    Id orderId = (Id) params.get('orderId');
    
    // Initialize a list to store product IDs
    List<Id> productIdList = new List<Id>();
 
    // Custom code to add or remove products
    // Add or remove product IDs to/from productIdList as needed
 
    // Return the productIdList in JSON string format
    return JSON.serialize(productIdList);
  }
}
```

```apex
global class OrderProposalListCustomization implements System.Callable {
  public class CustomizationException extends Exception {
  }
 
  public Object call(String m, Map<String, Object> params) {
    List<Product2> products = (List<Product2>) params.get('products');
    Id accountId = (Id) params.get('accountId');
    Id orderId = (Id) params.get('orderId');
    List<Id> productIdList = new List<Id>();
    Integer productListSize = 4;
 
    // Get the account name
    List<Account> accountList = [
      SELECT Id, Name
      FROM Account
      WHERE Id = :accountId
      LIMIT 1
    ];
 
    if (!accountList.isEmpty()) {
      Account account = accountList[0];
 
      // If the account name contains 'NTO', display a higher number of products.
      if (account.Name.contains('NTO')) {
        productListSize = 12;
      }
    }
 
    for (Integer i = 0; i < productListSize; i++) {
      productIdList.add(products.get(i).Id);
    }
 
    return JSON.serialize(productIdList);
  }
}
```
