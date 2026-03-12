---
title: "ConnectApi Versioning and Equality
        Checking"
domain: apex-guide
topic: connectapi-versioning-and-equality-checking
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:32.918Z
estimatedTokens: 474
keywords: [ConnectApi, Versioning, Equality, Checking, classes, follows, specific, rules, different, Apex]
---

# ConnectApi Versioning and Equality
        Checking

> Versioning in ConnectApi classes follows
        specific rules that are different than the rules for other Apex classes.

# ConnectApi Versioning and Equality Checking

Versioning in ConnectApi classes follows specific rules that are different than the rules for other Apex classes.

Versioning for ConnectApi classes follows these rules.

-   A ConnectApi method call executes in the context of the version of the class that contains the method call. The use of version is analogous to the /vXX.X section of a Connect REST API URL.
-   Each ConnectApi output object exposes a getBuildVersion method. This method returns the version under which the method that created the output object was invoked.
-   When interacting with input objects, Apex can access only properties supported by the version of the enclosing Apex class.
-   Input objects passed to a ConnectApi method may contain only non-null properties that are supported by the version of the Apex class executing the method. If the input object contains version-inappropriate properties, an exception is thrown.
-   The output of the toString method only returns properties that are supported in the version of the code interacting with the object. For output objects, the returned properties must also be supported in the build version.
-   Apex REST, JSON.serialize, and @RemoteAction serialization include only version-appropriate properties.
-   Apex REST, JSON.deserialize, and @RemoteAction deserialization reject properties that are version-inappropriate.
-   Enums are not versioned. Enum values are returned in all API versions. Clients should handle values they don't understand gracefully.

Equality checking for ConnectApi classes follows these rules.

-   Input objects—properties are compared.
-   Output objects—properties and build versions are compared. For example, if two objects have the same properties with the same values but have different build versions, the objects are not equal. To get the build version, call getBuildVersion.
