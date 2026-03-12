---
title: "Custom Apex Class Types"
domain: lightning
topic: custom-apex-class-types
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:49.389Z
estimatedTokens: 1118
keywords: [Custom, Apex, Aura, component, attribute, correspond, held, standard, Map, classes, copy, needed, instances, Data, Objects]
---

# Custom Apex Class Types

> An Aura component attribute type can correspond to values held in an Apex
        class. An attribute type can be a custom Apex class, a List standard Apex class, or a Map standard Apex class. To use values held in other standard Apex classes, first create a custom Apex class, and then copy the needed values from instances of the standard class into your custom class.

# Custom Apex Class Types

An Aura component attribute type can correspond to values held in an Apex class. An attribute type can be a custom Apex class, a List standard Apex class, or a Map standard Apex class. To use values held in other standard Apex classes, first create a custom Apex class, and then copy the needed values from instances of the standard class into your custom class.

See the [List](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_methods_system_list.htm "HTML (New Window)") standard Apex class and the [Map](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_methods_system_map.htm "HTML (New Window)") standard Apex class in the Apex Reference Guide.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=lightning)

#### Note

Custom Apex classes used for Aura component attributes can’t be inner classes or use inheritance. Although these Apex language features can work in some situations, there are known issues, and their use is unsupported in all cases.

## Supported Apex Data Types

When an instance of an Apex class is returned from a server-side action, the framework serializes the return data into JSON format. Only the values of public instance properties and methods annotated with @AuraEnabled are serialized and returned.

These Apex data types are serialized from @AuraEnabled properties and methods. They are supported as Aura component attributes.

-   Primitive types except for BLOB
-   Objects
-   sObjects
-   Lists and Maps if they hold elements of a supported type

## Custom Apex Class Example

This example shows an Aura component called AccountCardComponent. When a user clicks **Show Account**, the page shows a card with the name of the account that has the specified ID.

AccountData is a custom Apex wrapper class that holds three strings.

```

```

The Apex server-side controller creates an AccountData object, and then returns the object to the JavaScript client-side controller.

```

```

The JavaScript client-side controller retrieves the object from the Apex server-side controller by calling getAccount(). The controller then sets the result in the component’s account attribute, which is refreshed in the UI.

```

```

The Aura component markup contains an <aura:attribute> tag with name="account". The attribute type is set to "AccountData".

```

```

## List of Custom Apex Objects Example

If an attribute can contain more than one element, use a list.

This example shows an Aura component called AccountCardsComponent that uses the same AccountData custom Apex class as the previous example. When a user clicks **Show Accounts**, the page displays a list of cards with the account’s name, industry, and ownership type.

The Apex server-side controller creates an list of AccountData objects, and then returns the list to the JavaScript client-side controller.

```

```

The JavaScript client-side controller retrieves the list from the Apex server-side controller by calling getAccounts(). The controller then sets the result in the component’s accounts attribute, which is refreshed in the UI.

```

```

The Aura component markup contains an <aura:attribute> tag with name="accounts". To set type="AccountData\[\]", array syntax is used because the attribute holds multiple AccountData objects.

```

```

#### See Also

-   [Returning Data from an Apex Server-Side Controller](atlas.en-us.lightning.meta/lightning/controllers_server_apex_returning_data.htm "Return results from a server-side controller to a client-side controller using the return statement. Results data must be serializable into JSON format.")

-   [AuraEnabled Annotation Annotation](atlas.en-us.lightning.meta/lightning/controllers_server_apex_auraenabled_annotation.htm "The AuraEnabled annotation enables Lightning components to access Apex methods and properties.")

-   [Using Apex to Work with Salesforce Records](atlas.en-us.lightning.meta/lightning/apex_records.htm "Use Apex only if you need to customize your user interface to do more than what Lightning Data Service allows, such as using a SOQL query to select certain records. Apex provisions data that’s not managed and you must handle data refresh on your own.")

-   [*Apex Developer Guide*: Data Types](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/langCon_apex_data_types.htm "Apex Developer Guide: Data Types - HTML (New Window)")

## Code Examples

```apex
<!-- AccountData.apxc -->
public class AccountData {
    @AuraEnabled public String accountName {get;set;}
    @AuraEnabled public String accountOwnershipType {get;set;}
    @AuraEnabled public String accountIndustry {get;set;}
}
```

```apex
<!-- AccountCardApexController.apxc -->
public class AccountCardApexController {
    @AuraEnabled
    public static AccountData account() {
        Account myAccount = [SELECT Name FROM Account WHERE Id='001Z5000001QaPTIA0'];
        AccountData account = new AccountData();
        account.accountName = myAccount.Name;
        return account;
    }
}
```

```
<!-- AccountCardController.js -->
({
    getAccount : function(cmp) {
        var action = cmp.get("c.account");
        action.setCallback(this, function(response) {
            var state = response.getState();
            if(cmp.isValid() && state === "SUCCESS") {
                var accountResponse = response.getReturnValue();
                cmp.set("v.account", accountResponse);
            }
        });
        $A.enqueueAction(action);
    }
})
```

```apex
<!-- AccountCardComponent.cmp -->
<aura:component implements="flexipage:availableForAllPageTypes" access="global"
    controller="AccountCardApexController">
    <aura:attribute name="account" type="AccountData" />
    <lightning:button onclick="{!c.getAccount}" label="Show Account"/>
    <div class="slds-p-bottom_medium" />
    <aura:if isTrue="{!v.account}">
        <lightning:card title="{!v.account.accountName}">
        </lightning:card>
    </aura:if>
</aura:component>
```

```apex
<!-- AccountCardsApexController.apxc -->
public class AccountCardsApexController {
    @AuraEnabled
    public static List<AccountData> accounts() {
    List<Account> MyAccounts = [SELECT Name, Industry, Ownership
        FROM Account LIMIT 50];
        List<AccountData> accounts = new List<AccountData>();
        for(Account acc:MyAccounts) {
            AccountData account = new AccountData();
            account.accountName = acc.Name;
            account.accountIndustry = acc.Industry;
            account.accountOwnershipType = acc.Ownership;
            accounts.add(account);
        }
        return accounts;
    }
}
```

## Related Topics

- Returning Data from an Apex Server-Side Controller (atlas.en-us.lightning.meta/lightning/controllers_server_apex_returning_data.htm)
- AuraEnabled Annotation Annotation (atlas.en-us.lightning.meta/lightning/controllers_server_apex_auraenabled_annotation.htm)
- Using Apex to Work with Salesforce Records (atlas.en-us.lightning.meta/lightning/apex_records.htm)
