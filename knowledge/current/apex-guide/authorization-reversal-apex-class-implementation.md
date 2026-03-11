---
title: "Authorization Reversal Apex Class Implementation"
domain: apex-guide
topic: authorization-reversal-apex-class-implementation
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:43:46.716Z
keywords: [Authorization, Reversal, Apex, Class, Implementation, Note, Implementing, Classes, Gateway, Adapter]
---

# Authorization Reversal Apex Class Implementation

# Authorization Reversal Apex Class Implementation

The Authorization Reversal Service uses the AuthorizationReversalRequest and AuthorizationReversalResponse classes to manage the creation and storage of authorization reversal information. Implement these classes in your payment gateway adapter.

AuthorizationReversalRequest

Represents the authorization reversal request. Extends BaseRequest and inherits all its methods.

AuthorizationReversalRequest uses a constructor to build an authorization reversal request record in Salesforce. The AuthorizationReversalRequest constructor takes no arguments. You can invoke it as follows.

```

```

If you want to build a sample authorization reversal, you can also invoke a constructor with arguments for the reversal amount and payment authorization ID. However, the constructor would only work for test usage and would throw an exception if used outside of the Apex test context.

```

```

AuthorizationReversalResponse

The payment gateway adapter sends this class as a response for an Authorization Reversal request type. Extends AbstractResponse and inherits its methods.

AuthorizationReversalResponse uses a constructor to build an authorization reversal request record in Salesforce. The AuthorizationReversalResponse constructor takes no arguments. You can invoke it as follows:

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

#### Note

Salesforce doesn't support bulk operations or custom fields in the authorization reversal process.

## Implementing Reversal Classes in Your Gateway Adapter

Add your reversal classes to your payment gateway adapter. We recommend adding AuthorizationReversal as a possible requestType value when calling processRequest on the gateway’s response.

```

```

Then, add a class that sets the amount of the authorization reversal request, gateway information, and the Salesforce result code.

```

```

**Sample Apex Request**

```

```