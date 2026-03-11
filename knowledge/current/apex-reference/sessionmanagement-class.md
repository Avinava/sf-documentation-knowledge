---
title: "SessionManagement Class"
domain: apex-reference
topic: sessionmanagement-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:33.373Z
keywords: [SessionManagement, Class, Verifies, user, code, entered, during, device, authentication, flow, redirects, users, OAuth, approval, page., aren’t, logged, they, must, log]
---

# SessionManagement Class

> Verifies the user code entered during the device authentication flow
      and redirects users to the OAuth approval page. If users aren’t logged in, they must log in.
      After successful login, users are prompted to allow the device to access Salesforce
    data.

### verifyDeviceFlow(userCode, startUrl)

Verifies the user code entered during the device authentication flow and redirects users to the OAuth approval page. If users aren’t logged in, they must log in. After successful login, users are prompted to allow the device to access Salesforce data.

#### Signature

public static System.PageReference verifyDeviceFlow(String userCode, String startUrl)

#### Parameters

userCode

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Human-readable user code provided to the user by Salesforce. The user must enter this code at the verification URL to approve device access to Salesforce data.

startURL

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The URL for the page that the user is redirected to after successful login and approval of the device to access Salesforce data. If you don’t specify a start URL, the user is redirected to the Home page.

#### Return Value

Type:[System.PageReference](atlas.en-us.apexref.meta/apexref/apex_system_pagereference.htm "A PageReference is a reference to an instantiation of a page. Among other attributes, PageReferences consist of a URL and a set of query parameter names and values.")

#### Usage

Include this method in the Apex controller when creating a custom Visualforce User Code Verification page for the OAuth 2.0 device authentication flow. This method verifies the user code, prompts the user to log in as needed, and prompts the user to allow the device access to Salesforce data. Upon successful verification and authentication, the user is redirected to the page defined by the start URL.