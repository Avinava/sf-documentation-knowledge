---
title: "validateJWTWithCert(incomingJWT,
    certDeveloperName)"
domain: apex-reference
topic: validatejwtwithcertincomingjwt-certdevelopername
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:33.321Z
keywords: [validateJWTWithCert, incomingJWT, certDeveloperName, Parses, validates, JWT, certificate, saved, Salesforce., self-signed, signed, authority., Signature, Parameters, Return, Value]
---

# validateJWTWithCert(incomingJWT,
    certDeveloperName)

> Parses and validates the JWT using a certificate saved in Salesforce. The certificate can
    be self-signed or signed by a certificate authority.

### validateJWTWithCert(incomingJWT, certDeveloperName)

Parses and validates the JWT using a certificate saved in Salesforce. The certificate can be self-signed or signed by a certificate authority.

#### Signature

public static Auth.JWT validateJWTWithCert(String incomingJWT, String certDeveloperName)

#### Parameters

incomingJWT

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The JWT from your identity provider.

certDeveloperName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

A certificate saved in the Certificate and Key Management page in Setup.

#### Return Value

Type: [Auth.JWT](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_class_Auth_JWT.htm)