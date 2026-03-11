---
title: "AuthConfiguration Constructors"
domain: apex-reference
topic: authconfiguration-constructors
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:33.187Z
keywords: [AuthConfiguration, Constructors, Creates, instance, class, specified, URL, Experience, Cloud, site, Domain, subdomain, start, authenticated, users., Note, communityOrCustomUrl, startUrl, Signature, Parameters]
---

# AuthConfiguration Constructors

> Creates an instance of the AuthConfiguration
    class using the specified URL for an Experience Cloud site or a My Domain subdomain and the
    start URL for authenticated users.

## AuthConfiguration Constructors

The following are constructors for AuthConfiguration.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexref)

#### Note

The AuthConfiguration (networkId, startUrl) constructor is deprecated in API version 56.0 and later.

### AuthConfiguration(communityOrCustomUrl, startUrl)

Creates an instance of the AuthConfiguration class using the specified URL for an Experience Cloud site or a My Domain subdomain and the start URL for authenticated users.

#### Signature

public AuthConfiguration(String communityOrCustomUrl, String startUrl)

#### Parameters

communityOrCustomUrl

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The URL for the domain, which can be a Salesforce subdomain created with My Domain (my.salesforce.com) or a subdomain of an Experience Cloud site (force.com).

startUrl

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The page users see after successfully logging in to the Experience Cloud site or My Domain subdomain.