---
title: "createExternalUserAsync(user, contact, account)"
domain: apex-reference
topic: createexternaluserasyncuser-contact-account
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:36.342Z
keywords: [createExternalUserAsync, user, contact, account, Asynchronously, creates, Experience, Cloud, site, given, associates, site., method, processes, requests, batches, then, sends, email, login]
---

# createExternalUserAsync(user, contact, account)

> Asynchronously creates an Experience Cloud site user for the given
      account or contact and associates it with the site. This method processes requests in batches
      and then sends an email with login information to the user.

### createExternalUserAsync(user, contact, account)

Asynchronously creates an Experience Cloud site user for the given account or contact and associates it with the site. This method processes requests in batches and then sends an email with login information to the user.

#### Signature

public static String createExternalUserAsync(SObject user, SObject contact, SObject account)

#### Parameters

user

Type: [SObject](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_methods_system_sobject "Contains methods for the sObject data type.") (optional)

Information required to create a user.

contact

Type: [SObject](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_methods_system_sobject "Contains methods for the sObject data type.") (optional)

The contact you want to associate the user with.

account

Type: [SObject](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_methods_system_sobject "Contains methods for the sObject data type.")

The account you want to associate the user with.

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Returns the UUID for the site user.