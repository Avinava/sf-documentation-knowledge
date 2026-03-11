---
title: "authenticationResultFields"
domain: apex-reference
topic: authenticationresultfields
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:33.802Z
keywords: [authenticationResultFields, Additional, information, authentication, result, headers., Examples, include, name, smtp.mailfrom, value, example.com., Signature, Property, Value]
---

# authenticationResultFields

> Additional information in authentication result headers. Examples include: name: smtp.mailfrom and value:
      example.com.

### authenticationResultFields

Additional information in authentication result headers. Examples include: name: smtp.mailfrom and value: example.com.

#### Signature

public InboundEmail.AuthenticationResultField\[\] authenticationResultFields {get; set;}

#### Property Value

Type: [InboundEmail.AuthenticationResultField](atlas.en-us.apexref.meta/apexref/apex_class_Messaging_InboundEmail_AuthenticationResultField.htm#apex_class_Messaging_InboundEmail_AuthenticationResultField "Contains field data from the authentication result response for inbound emails.")\[\]