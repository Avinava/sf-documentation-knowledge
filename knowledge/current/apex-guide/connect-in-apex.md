---
title: "Connect in Apex"
domain: apex-guide
topic: connect-in-apex
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:34.275Z
estimatedTokens: 952
namespace: ConnectApi
keywords: [Connect, Apex, develop, custom, experiences, Salesforce, programmatic, access, B2B, Commerce, CMS, managed, content, Experience, Cloud]
---

# Connect in Apex

> Use Connect in Apex to develop custom experiences in
                        Salesforce. Connect in Apex provides programmatic access to B2B Commerce,
                        CMS managed content, Experience Cloud sites, topics, and more. Create Apex
                        pages that display Chatter feeds, post feed items with mentions and topics,
                        and update user and group photos. Create triggers that update Chatter
                        feeds.

**Namespace:** `ConnectApi`

# Connect in Apex

Use Connect in Apex to develop custom experiences in Salesforce. Connect in Apex provides programmatic access to B2B Commerce, CMS managed content, Experience Cloud sites, topics, and more. Create Apex pages that display Chatter feeds, post feed items with mentions and topics, and update user and group photos. Create triggers that update Chatter feeds.

Many Connect REST API resource actions are exposed as static methods on Apex classes in the ConnectApi namespace. These methods use other ConnectApi classes to input and return information. The ConnectApi namespace is referred to as *Connect in Apex.*

In Apex, you can access some Connect data using SOQL queries and objects. However, it’s simpler to expose data in ConnectApi classes, and data is localized and structured for display. For example, instead of making several calls to access and assemble a feed, you can do it with a single call.

Connect in Apex methods execute in the context of the user executing the methods. The code has access to whatever the context user has access to. It doesn’t run in system mode like other Apex code.

For Connect in Apex reference information, see [ConnectApi Namespace](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_classes_connect_api.htm).

-   **[Connect in Apex Examples](atlas.en-us.apexcode.meta/apexcode/connectapi_examples.htm)**
    Use these examples to perform common tasks with Connect in Apex.
-   **[Connect in Apex Features](atlas.en-us.apexcode.meta/apexcode/connectapi_features.htm)**
    This topic describes which classes and methods to use to work with common Connect in Apex features.
-   **[Using ConnectApi Input and Output Classes](atlas.en-us.apexcode.meta/apexcode/apex_connectapi_inputs_outputs.htm)**
    Some classes in the ConnectApi namespace contain static methods that access Connect REST API data. The ConnectApi namespace also contains input classes to pass as parameters and output classes that calls to the static methods return.
-   **[Understanding Limits for ConnectApi Classes](atlas.en-us.apexcode.meta/apexcode/apex_connect_api_limits.htm)**
    Limits for methods in the ConnectApi namespace are different than the limits for other Apex classes.
-   **[Packaging ConnectApi Classes](atlas.en-us.apexcode.meta/apexcode/apex_connect_api_packaging.htm)**
    If you include ConnectApi classes in a package, be aware of Chatter dependencies.
-   **[Serializing and Deserializing ConnectApi Objects](atlas.en-us.apexcode.meta/apexcode/apex_connectapi_serialization.htm)**
    When ConnectApi output objects are serialized into JSON, the structure is similar to the JSON returned from Connect REST API. When ConnectApi input objects are deserialized from JSON, the format is also similar to Connect REST API.
-   **[ConnectApi Versioning and Equality Checking](atlas.en-us.apexcode.meta/apexcode/apex_connectapi_versioning.htm)**
    Versioning in ConnectApi classes follows specific rules that are different than the rules for other Apex classes.
-   **[Casting ConnectApi Objects](atlas.en-us.apexcode.meta/apexcode/apex_connectapi_casting.htm)**
    It may be useful to downcast some ConnectApi output objects to a more specific type.
-   **[Wildcards](atlas.en-us.apexcode.meta/apexcode/intro_wildcards.htm)**
    Use wildcard characters to match text patterns in Connect REST API and Connect in Apex searches.
-   **[Testing ConnectApi Code](atlas.en-us.apexcode.meta/apexcode/connectAPI_TestingApex.htm)**
    Like all Apex code, Connect in Apex code requires test coverage.
-   **[Differences Between ConnectApi Classes and Other Apex Classes](atlas.en-us.apexcode.meta/apexcode/apex_connectapi_differences.htm)**
    Note these additional differences between ConnectApi classes and other Apex classes.

## Related Topics

- Connect in Apex Examples (atlas.en-us.apexcode.meta/apexcode/connectapi_examples.htm)
- Connect in Apex Features (atlas.en-us.apexcode.meta/apexcode/connectapi_features.htm)
- Using ConnectApi Input and Output Classes (atlas.en-us.apexcode.meta/apexcode/apex_connectapi_inputs_outputs.htm)
- Understanding Limits for ConnectApi Classes (atlas.en-us.apexcode.meta/apexcode/apex_connect_api_limits.htm)
- Packaging ConnectApi Classes (atlas.en-us.apexcode.meta/apexcode/apex_connect_api_packaging.htm)
- Serializing and Deserializing ConnectApi Objects (atlas.en-us.apexcode.meta/apexcode/apex_connectapi_serialization.htm)
- ConnectApi Versioning and Equality Checking (atlas.en-us.apexcode.meta/apexcode/apex_connectapi_versioning.htm)
- Casting ConnectApi Objects (atlas.en-us.apexcode.meta/apexcode/apex_connectapi_casting.htm)
- Wildcards (atlas.en-us.apexcode.meta/apexcode/intro_wildcards.htm)
- Testing ConnectApi Code (atlas.en-us.apexcode.meta/apexcode/connectAPI_TestingApex.htm)
