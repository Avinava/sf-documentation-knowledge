---
title: "getUserData()"
domain: apex-reference
topic: getuserdata
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:33.384Z
keywords: [getUserData, Retrieves, information, user., user, obtained, identity, provider’s, token, callouts, provider, applicable., Signature, Return, Value]
---

# getUserData()

> Retrieves information about the user. The user information can be obtained from the
    identity provider’s token or from callouts to the identity provider, if applicable.

### getUserData()

Retrieves information about the user. The user information can be obtained from the identity provider’s token or from callouts to the identity provider, if applicable.

#### Signature

public Auth.UserData getUserData()

#### Return Value

Type: [Auth.UserData](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_class_Auth_UserData.htm)