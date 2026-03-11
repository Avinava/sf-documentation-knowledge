---
title: "authenticationResults"
domain: apex-reference
topic: authenticationresults
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:36.195Z
keywords: [authenticationResults, list, authentication, results, received, email, any., Signature, Property, Value, Usage]
---

# authenticationResults

> A list of authentication results received with the email, if any.

### authenticationResults

A list of authentication results received with the email, if any.

#### Signature

public InboundEmail.AuthenticationResult\[\] authenticationResults {get; set;}

#### Property Value

Type: [InboundEmail.AuthenticationResult](atlas.en-us.apexref.meta/apexref/apex_class_Messaging_InboundEmail_AuthenticationResult.htm#apex_class_Messaging_InboundEmail_AuthenticationResult "Contains the authentication type and response for inbound emails.")\[\]

#### Usage

Examples of authentication results include dkim, dmarc, and spf.