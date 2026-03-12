---
title: "AccountCreator Interface"
domain: apex-reference
topic: accountcreator-interface
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:29.976Z
estimatedTokens: 767
namespace: ChatterAnswers
keywords: [AccountCreator, Creates, Account, records, associated, Chatter, Answers, users., Usage, createAccount, firstName, lastName, siteAdminId, Example, Implementation]
---

# AccountCreator Interface

> Creates Account records that will be associated with Chatter Answers
        users.

**Namespace:** `ChatterAnswers`

# AccountCreator Interface

Creates Account records that will be associated with Chatter Answers users.

## Namespace

[ChatterAnswers](atlas.en-us.apexref.meta/apexref/apex_namespace_ChatterAnswers.htm "The ChatterAnswers namespace provides an interface for creating Account records.")

## Usage

The ChatterAnswers.AccountCreator is specified in the registrationClassName attribute of a chatteranswers:registration Visualforce component. This interface is called by Chatter Answers and allows for custom creation of Account records used for portal users.

To implement the ChatterAnswers.AccountCreator interface, you must first declare a class with the implements keyword as follows:

```

```

Next, your class must provide an implementation for the following method:

```

```

The implemented method must be declared as global or public.

-   **[AccountCreator Methods](atlas.en-us.apexref.meta/apexref/apex_interface_chatteranswers_accountcreator.htm#apex_ChatterAnswers_AccountCreator_methods)**

-   **[AccountCreator Example Implementation](atlas.en-us.apexref.meta/apexref/apex_interface_chatteranswers_accountcreator.htm#apex_interface_chatteranswers_accountcreator_example)**


## AccountCreator Methods

The following are methods for AccountCreator.

-   **[createAccount(firstName, lastName, siteAdminId)](atlas.en-us.apexref.meta/apexref/apex_interface_chatteranswers_accountcreator.htm#apex_ChatterAnswers_AccountCreator_createAccount)**
    Accepts basic user information and creates an Account record. The implementation of this method returns the account ID.

### createAccount(firstName, lastName, siteAdminId)

Accepts basic user information and creates an Account record. The implementation of this method returns the account ID.

#### Signature

public String createAccount(String firstName, String lastName, Id siteAdminId)

#### Parameters

firstName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The first name of the user who is registering.

lastName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The last name of the user who is registering.

siteAdminId

Type: [ID](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")

The user ID of the Site administrator, used for notification if any exceptions occur.

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

## AccountCreator Example Implementation

This is an example implementation of the ChatterAnswers.AccountCreator interface. The createAccount method implementation accepts user information and creates an Account record. The method returns a String value for the Account ID.

```

```

This example tests the code above.

```

```

## Code Examples

```apex
public class ChatterAnswersRegistration implements ChatterAnswers.AccountCreator {
```

```apex
public String createAccount(String firstname, String lastname, Id siteAdminId) {
    // Your code here
}
```

```apex
public class ChatterAnswersRegistration implements ChatterAnswers.AccountCreator {
    public String createAccount(String firstname, String lastname, Id siteAdminId) {
         Account a = new Account(name = firstname + ' ' + lastname, ownerId = siteAdminId);
         insert a;
         return a.Id;
    }
}
```

```apex
@isTest
private class ChatterAnswersCreateAccountTest {
    static testMethod void validateAccountCreation() {
        User[] user = [SELECT Id, Firstname, Lastname from User WHERE UserType='Standard'];
        if (user.size() == 0) { return; }
        String firstName = user[0].FirstName; 
        String lastName = user[0].LastName; 
        String userId = user[0].Id;
        String accountId = new ChatterAnswersRegistration().createAccount(firstName, lastName, userId);
        Account acct = [SELECT name, ownerId from Account where Id =: accountId];
        System.assertEquals(firstName + ' ' + lastName, acct.name);
        System.assertEquals(userId, acct.ownerId);
  }
}
```

## Related Topics

- ChatterAnswers (atlas.en-us.apexref.meta/apexref/apex_namespace_ChatterAnswers.htm)
- AccountCreator Methods (atlas.en-us.apexref.meta/apexref/apex_interface_chatteranswers_accountcreator.htm)
- AccountCreator Example Implementation (atlas.en-us.apexref.meta/apexref/apex_interface_chatteranswers_accountcreator.htm)
- createAccount(firstName, lastName, siteAdminId) (atlas.en-us.apexref.meta/apexref/apex_interface_chatteranswers_accountcreator.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
