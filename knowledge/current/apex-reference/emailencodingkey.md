---
title: "emailEncodingKey"
domain: apex-reference
topic: emailencodingkey
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:33.273Z
keywords: [emailEncodingKey, Stores, default, value, email, encoding, type, user, such, UTF-8., determines, how, Salesforce, encodes, characters, outgoing, emails., key, execution, specified]
---

# emailEncodingKey

> Stores the default value for the email encoding type for the user, such as UTF-8. The email encoding type determines how Salesforce encodes
    characters in outgoing emails. The default value is the email encoding key for the execution
    user specified in the Run As field in the authentication provider definition.

### emailEncodingKey

Stores the default value for the email encoding type for the user, such as UTF-8. The email encoding type determines how Salesforce encodes characters in outgoing emails. The default value is the email encoding key for the execution user specified in the Run As field in the authentication provider definition.

#### Signature

public String emailEncodingKey {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")