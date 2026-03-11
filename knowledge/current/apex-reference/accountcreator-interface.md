---
title: "AccountCreator Interface"
domain: apex-reference
topic: accountcreator-interface
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:40.732Z
keywords: [AccountCreator, Interface, Accepts, basic, user, information, creates, Account, record., implementation, method, returns, account, ID., createAccount, firstName, lastName, siteAdminId, Signature, Parameters]
---

# AccountCreator Interface

> Accepts basic user information and creates an Account record.
The implementation of this method returns the account ID.

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