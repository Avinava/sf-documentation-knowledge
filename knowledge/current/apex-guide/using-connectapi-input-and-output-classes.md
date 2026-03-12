---
title: "Using ConnectApi Input and Output Classes"
domain: apex-guide
topic: using-connectapi-input-and-output-classes
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:32.898Z
estimatedTokens: 417
namespace: ConnectApi
keywords: [ConnectApi, Input, Output, Classes, contain, access, Connect, REST, API, data, pass, calls]
---

# Using ConnectApi Input and Output Classes

> Some classes in the ConnectApi namespace contain
                static methods that access Connect REST API data. The ConnectApi namespace also contains input classes to pass as
                parameters and output classes that calls to the static methods return.

**Namespace:** `ConnectApi`

# Using ConnectApi Input and Output Classes

Some classes in the ConnectApi namespace contain static methods that access Connect REST API data. The ConnectApi namespace also contains input classes to pass as parameters and output classes that calls to the static methods return.

ConnectApi methods take either simple or complex types. Simple types are primitive Apex data like integers and strings. Complex types are ConnectApi input objects.

The successful execution of a ConnectApi method can return an output object from the ConnectApi namespace. ConnectApi output objects can be made up of other output objects. For example, the [ConnectApi.ActorWithId](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_connectapi_output_actorWithIdOutput.htm) output object contains properties such as id and url, which contain primitive data types. It also contains a mySubscription property, which contains a ConnectApi.Reference object.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

#### Note

All Salesforce IDs in ConnectApi output objects are 18 character IDs. Input objects can use 15 character IDs or 18 character IDs.

#### See Also

-   [*Apex Reference Guide*: ConnectApi Input Classes](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_connectapi_input.htm "Apex Reference Guide: ConnectApi Input Classes - HTML (New Window)")

-   [*Apex Reference Guide*: ConnectApi Output Classes](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_connectapi_output.htm "Apex Reference Guide: ConnectApi Output Classes - HTML (New Window)")
