---
title: "Namespace Usage Examples and Reference"
domain: lightning
topic: namespace-usage-examples-and-reference
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:49.319Z
estimatedTokens: 1114
keywords: [Usage, Examples, topic, referencing, components, objects, Aura, code, Organizations, Prefix]
---

# Namespace Usage Examples and Reference

> This topic provides examples of referencing components, objects, fields, and so on, in
    Aura components code.

# Namespace Usage Examples and Reference

This topic provides examples of referencing components, objects, fields, and so on, in Aura components code.

Examples are provided for the following.

-   Components, events, and interfaces in your organization
-   Custom objects in your organization
-   Custom fields on standard and custom objects in your organization
-   Server-side Apex controllers in your organization
-   Dynamic creation of components in JavaScript
-   Static resources in your organization

## Organizations with No Namespace Prefix Set

The following illustrates references to elements in your organization when your organization doesn’t have a namespace prefix set. References use the default namespace, c, where necessary.

| Referenced Item | Example |
| --- | --- |
| Component used in markup | <c:myComponent /> |
| Component used in a system attribute | <aura:component extends="c:myComponent"><aura:component implements="c:myInterface"> |
| Apex controller | <aura:component controller="ExpenseController"> |
| Custom object in attribute data type | <aura:attribute name="expense" type="Expense__c" /> |
| Custom object or custom field in attribute defaults | <aura:attribute name="newExpense" type="Expense__c"     default="{ 'sobjectType': 'Expense__c',                'Name': '',                'Amount__c': 0,                …     }" /> |
| Custom field in an expression | <lightning:inputNumber type="number" value="{!v.newExpense.Amount__c}" label=… /> |
| Custom field in a JavaScript function | updateTotal: function(component) {     …     for(var i = 0 ; i < expenses.length ; i++){         var exp = expenses[i];         total += exp.Amount__c;     }     … } |
| Component created dynamically in a JavaScript function | var myCmp = $A.createComponent("c:myComponent", {},     function(myCmp) { } ); |
| Interface comparison in a JavaScript function | aCmp.isInstanceOf("c:myInterface") |
| Event registration | <aura:registerEvent type="c:updateExpenseItem" name=… /> |
| Event handler | <aura:handler event="c:updateExpenseItem" action=… /> |
| Explicit dependency | <aura:dependency resource="markup://c:myComponent" /> |
| Application event in a JavaScript function | var updateEvent = $A.get("e.c:updateExpenseItem"); |
| Static resources | <ltng:require scripts="{!$Resource.resourceName}" styles="{!$Resource.resourceName}" /> |

## Organizations with a Namespace Prefix

The following illustrates references to elements in your organization when your organization has set a namespace prefix. References use an example namespace yournamespace.

| Referenced Item | Example |
| --- | --- |
| Component used in markup | <yournamespace:myComponent /> |
| Component used in a system attribute | <aura:component extends="yournamespace:myComponent"><aura:component implements="yournamespace:myInterface"> |
| Apex controller | <aura:component controller="yournamespace.ExpenseController"> |
| Custom object in attribute data type | <aura:attribute name="expenses" type="yournamespace__Expense__c[]" /> |
| Custom object or custom field in attribute defaults | <aura:attribute name="newExpense" type="yournamespace__Expense__c"     default="{ 'sobjectType': 'yournamespace__Expense__c',                'Name': '',                'yournamespace__Amount__c': 0,                …     }" /> |
| Custom field in an expression | <lightning:input type="number" value="{!v.newExpense.yournamespace__Amount__c}" label=… /> |
| Custom field in a JavaScript function | updateTotal: function(component) {     …     for(var i = 0 ; i < expenses.length ; i++){         var exp = expenses[i];         total += exp.yournamespace__Amount__c;     }     … } |
| Component created dynamically in a JavaScript function | var myCmp = $A.createComponent("yournamespace:myComponent",     {},     function(myCmp) { } ); |
| Interface comparison in a JavaScript function | aCmp.isInstanceOf("yournamespace:myInterface") |
| Event registration | <aura:registerEvent type="yournamespace:updateExpenseItem" name=… /> |
| Event handler | <aura:handler event="yournamespace:updateExpenseItem" action=… /> |
| Explicit dependency | <aura:dependency resource="markup://yournamespace:myComponent" /> |
| Application event in a JavaScript function | var updateEvent = $A.get("e.yournamespace:updateExpenseItem"); |
| Static resources | <ltng:require scripts="{!$Resource.yournamespace__resourceName}" styles="{!$Resource.yournamespace__resourceName}" /> |

## Code Examples

```
updateTotal: function(component) {
    …
    for(var i = 0 ; i < expenses.length ; i++){
        var exp = expenses[i];
        total += exp.Amount__c;
    }
    …
}
```

```
updateTotal: function(component) {
    …
    for(var i = 0 ; i < expenses.length ; i++){
        var exp = expenses[i];
        total += exp.yournamespace__Amount__c;
    }
    …
}
```
