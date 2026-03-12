---
title: "Considerations for Using the webservice Keyword"
domain: apex-guide
topic: considerations-for-using-the-webservice-keyword
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T05:14:34.229Z
estimatedTokens: 682
keywords: [Considerations, webservice, Keyword, invoke, Web, service, AJAX., information, Apex]
---

# Considerations for Using the webservice Keyword

> You can invoke this Web service using AJAX. For more information, see Apex in AJAX.

# Considerations for Using the webservice Keyword

When using the webservice keyword, keep the following considerations in mind:

-   Use the webservice keyword to define top-level methods and outer class methods. You can’t use the webservice keyword to define a class or an inner class method.
-   You cannot use the webservice keyword to define an interface, or to define an interface's methods and variables.
-   System-defined enums cannot be used in Web service methods.
-   You cannot use the webservice keyword in a trigger.
-   All classes that contain methods defined with the webservice keyword must be declared as global. If a method or inner class is declared as global, the outer, top-level class must also be defined as global.
-   Methods defined with the webservice keyword are inherently global. Any Apex code that has access to the class can use these methods. You can consider the webservice keyword as a type of access modifier that enables more access than global.
-   Define any method that uses the webservice keyword as static.
-   You cannot deprecate webservice methods or variables in managed package code.
-   Because there are no SOAP analogs for certain Apex elements, methods defined with the webservice keyword cannot take the following elements as parameters. While these elements can be used within the method, they also cannot be marked as return values.
    -   Maps
    -   Sets
    -   Pattern objects
    -   Matcher objects
    -   Exception objects
-   Use the webservice keyword with any member variables that you want to expose as part of a Web service. Do not mark these member variables as static.

Considerations for calling Apex SOAP Web service methods:

-   Salesforce denies access to Web service and executeanonymous requests from an AppExchange package that has Restricted access.
-   Apex classes and triggers saved (compiled) using API version 15.0 and higher produce a runtime error if you assign a String value that is too long for the field.
-   If a login call is made from the API for a user with an expired or temporary password, subsequent API calls to custom Apex SOAP Web service methods aren't supported and result in the INVALID\_OPERATION\_WITH\_EXPIRED\_PASSWORD error. Reset the user's password and make a call with an unexpired password to be able to call Apex Web service methods.

The following example shows a class with Web service member variables and a Web service method:

```

```

```

```

You can invoke this Web service using AJAX. For more information, see [Apex in AJAX](atlas.en-us.apexcode.meta/apexcode/apex_and_ajax.htm "The AJAX toolkit includes built-in support for invoking Apex through anonymous blocks or public webservice methods.").

## Code Examples

```apex
global class SpecialAccounts {

  global class AccountInfo {
     webservice String AcctName;
     webservice Integer AcctNumber;
  }

  webservice static Account createAccount(AccountInfo info) {
    Account acct = new Account();
    acct.Name = info.AcctName;
    acct.AccountNumber = String.valueOf(info.AcctNumber);
    insert acct;
    return acct;
  }

  webservice static Id [] createAccounts(Account parent, 
       Account child, Account grandChild) {

        insert parent;
        child.parentId = parent.Id;
        insert child;
        grandChild.parentId = child.Id;
        insert grandChild;

        Id [] results = new Id[3];
        results[0] = parent.Id;
        results[1] = child.Id;
        results[2] = grandChild.Id;
        return results;
    }
}
```

```apex
// Test class for the previous class.
@isTest
private class SpecialAccountsTest {
  testMethod static void testAccountCreate() {
    SpecialAccounts.AccountInfo info = new SpecialAccounts.AccountInfo();
    info.AcctName = 'Manoj Cheenath';
    info.AcctNumber = 12345;
    Account acct = SpecialAccounts.createAccount(info);
    System.assert(acct != null);
  }
}
```

## Related Topics

- Apex in AJAX (atlas.en-us.apexcode.meta/apexcode/apex_and_ajax.htm)
