---
title: "Returning Data from an Apex Server-Side Controller"
domain: lightning
topic: returning-data-from-an-apex-server-side-controller
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:48.636Z
estimatedTokens: 978
keywords: [Returning, Data, Apex, Server-Side, Controller, results, client-side, statement, serializable, JSON, Objects]
---

# Returning Data from an Apex Server-Side Controller

> Return results from a server-side controller to a client-side controller using the
      return statement. Results data must be serializable
    into JSON format.

# Returning Data from an Apex Server-Side Controller

Return results from a server-side controller to a client-side controller using the return statement. Results data must be serializable into JSON format.

Return data types can be any of the following.

-   Simple—String, Integer, and so on. See [Basic Types](atlas.en-us.lightning.meta/lightning/ref_attr_types_basic.htm) for details.
-   sObject—standard and custom sObjects are both supported. See [Standard and Custom Object Types](atlas.en-us.lightning.meta/lightning/ref_attr_types_object_salesforce.htm).
-   Apex—an instance of an Apex class. See [Custom Apex Class Types](atlas.en-us.lightning.meta/lightning/ref_attr_types_apex.htm "An Aura component attribute type can correspond to values held in an Apex class. An attribute type can be a custom Apex class, a List standard Apex class, or a Map standard Apex class. To use values held in other standard Apex classes, first create a custom Apex class, and then copy the needed values from instances of the standard class into your custom class."). You can’t use an Apex inner class as a return value for an Apex method that's called by an Aura component.
-   Collection—a collection of any of the other types. See [Collection Types](atlas.en-us.lightning.meta/lightning/ref_attr_types_collection.htm).

## Returning Apex Objects

Here’s an example of a controller that returns a collection of custom Apex objects.

```

```

When an instance of an Apex class is returned from a server-side action, the framework serializes the return data into JSON format. Only the values of public instance properties and methods annotated with @AuraEnabled are serialized and returned.

These Apex data types are serialized from @AuraEnabled properties and methods. They are supported as Aura component attributes.

-   Primitive types except for BLOB
-   Objects
-   sObjects
-   Lists and Maps if they hold elements of a supported type

For example, here’s a wrapper Apex class that contains a few details for an account record. This class is used to package a few details of an account record in a serializable format.

```

```

When returned from a remote Apex controller action, the Id and Name properties are defined on the client-side. However, because it doesn’t have the @AuraEnabled annotation, the Phone property isn’t serialized on the server side, and isn’t returned as part of the result data.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=lightning)

#### Note

Standard Apex limits, such as the maximum number of records retrieved by SOQL queries, apply when returning data from a server-side controller. See [Execution Governors and Limits](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_gov_limits.htm "HTML (New Window)") in the *Apex Developer Guide*.

#### See Also

-   [AuraEnabled Annotation Annotation](atlas.en-us.lightning.meta/lightning/controllers_server_apex_auraenabled_annotation.htm "The AuraEnabled annotation enables Lightning components to access Apex methods and properties.")

-   [Custom Apex Class Types](atlas.en-us.lightning.meta/lightning/ref_attr_types_apex.htm "An Aura component attribute type can correspond to values held in an Apex class. An attribute type can be a custom Apex class, a List standard Apex class, or a Map standard Apex class. To use values held in other standard Apex classes, first create a custom Apex class, and then copy the needed values from instances of the standard class into your custom class.")

-   [Calling a Server-Side Action](atlas.en-us.lightning.meta/lightning/controllers_server_actions_call.htm "Call a server-side controller action from a client-side controller. In the client-side controller, you set a callback, which is called after the server-side action is completed. A server-side action can return any object containing serializable JSON data.")

## Code Examples

```apex
public with sharing class SimpleAccountController {
    
    @AuraEnabled
    public static List<SimpleAccount> getAccounts() {

        // Perform isAccessible() check here
		
        // SimpleAccount is a simple "wrapper" Apex class for transport
        List<SimpleAccount> simpleAccounts = new List<SimpleAccount>();

        List<Account> accounts = [SELECT Id, Name, Phone FROM Account LIMIT 5];
        for (Account acct : accounts) {
            simpleAccounts.add(new SimpleAccount(acct.Id, acct.Name, acct.Phone));
        }
        
        return simpleAccounts;
    }
}
```

```apex
public class SimpleAccount {
    
    @AuraEnabled public String Id { get; set; }
    @AuraEnabled public String Name { get; set; }
    public String Phone { get; set; }
    
    // Trivial constructor, for server-side Apex -> client-side JavaScript
    public SimpleAccount(String id, String name, String phone) {
        this.Id = id;
        this.Name = name;
        this.Phone = phone;
    }
    
    // Default, no-arg constructor, for client-side -> server-side
    public SimpleAccount() {}
    
}
```

## Related Topics

- Basic Types (atlas.en-us.lightning.meta/lightning/ref_attr_types_basic.htm)
- Standard and Custom Object Types (atlas.en-us.lightning.meta/lightning/ref_attr_types_object_salesforce.htm)
- Custom Apex Class Types (atlas.en-us.lightning.meta/lightning/ref_attr_types_apex.htm)
- Collection Types (atlas.en-us.lightning.meta/lightning/ref_attr_types_collection.htm)
- AuraEnabled Annotation Annotation (atlas.en-us.lightning.meta/lightning/controllers_server_apex_auraenabled_annotation.htm)
- Calling a Server-Side Action (atlas.en-us.lightning.meta/lightning/controllers_server_actions_call.htm)
