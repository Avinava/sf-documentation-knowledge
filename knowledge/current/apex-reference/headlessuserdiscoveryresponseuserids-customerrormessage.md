---
title: "HeadlessUserDiscoveryResponse(userIds, customErrorMessage)"
domain: apex-reference
topic: headlessuserdiscoveryresponseuserids-customerrormessage
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:33.277Z
keywords: [HeadlessUserDiscoveryResponse, userIds, customErrorMessage, Creates, instance, Auth.HeadlessUserDiscoveryResponse, class, describe, result, headless, user, discovery, based, data, passed, login_hint, during, login, passwordless, forgot]
---

# HeadlessUserDiscoveryResponse(userIds, customErrorMessage)

> Creates an instance of the Auth.HeadlessUserDiscoveryResponse class to describe the result of headless user
    discovery based on data passed into the login_hint during
    headless login, passwordless login, and forgot password flows.

### HeadlessUserDiscoveryResponse(userIds, customErrorMessage)

Creates an instance of the Auth.HeadlessUserDiscoveryResponse class to describe the result of headless user discovery based on data passed into the login\_hint during headless login, passwordless login, and forgot password flows.

#### Signature

public HeadlessUserDiscoveryResponse(Set<Id> userIds, String customErrorMessage)

#### Parameters

userIds

Type: [Set](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_methods_system_set.htm)<[Id](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_methods_system_id.htm)\>

The user ID that's associated with the data passed in the login\_hint parameter. If there are multiple users associated with the data, it can return multiple IDs, but headless user discovery fails.

customErrorMessage

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

A custom error message that's returned if headless user discovery fails.