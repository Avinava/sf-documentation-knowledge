---
title: "LoginDiscoveryHandler Interface"
domain: apex-reference
topic: logindiscoveryhandler-interface
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:40.630Z
keywords: [LoginDiscoveryHandler, Interface, Log, customer, partner, given, specified, identifier, such, email, phone, number., successful, redirect, user, Experience, Cloud, site, page, start]
---

# LoginDiscoveryHandler Interface

> Log in the customer or partner given the specified identifier, such
      as email or phone number. If successful, redirect the user to the Experience Cloud site page
      specified by the start URL.

### login(identifier, startUrl, requestAttributes)

Log in the customer or partner given the specified identifier, such as email or phone number. If successful, redirect the user to the Experience Cloud site page specified by the start URL.

#### Signature

public System.PageReference login(String identifier, String startUrl, Map<String,String\>requestAttributes)

#### Parameters

identifier

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Identifier the customer or partner entered at the login prompt, for example, an email address or phone number.

startUrl

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Path to the Experience Cloud site page requested by the customer or partner. The user is redirected to this location after successful login.

requestAttributes

Type: [Map](atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm#apex_methods_system_map "Contains methods for the Map collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type."),[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

Information about the login request based on the user’s browser state when accessing the login page. requestAttributes passes in the CommunityUrl, IpAddress, UserAgent, Platform, Application, City, Country, and Subdivision values. The City, Country, and Subdivision values come from IP geolocation.

#### Return Value

Type: [System.PageReference](atlas.en-us.apexref.meta/apexref/apex_system_pagereference.htm#apex_system_pagereference "A PageReference is a reference to an instantiation of a page. Among other attributes, PageReferences consist of a URL and a set of query parameter names and values.")

The URL of the page where the user is redirected.

#### Example

Here’s a sample requestAttributes response.

```

```