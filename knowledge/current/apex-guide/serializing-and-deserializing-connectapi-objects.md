---
title: "Serializing and Deserializing ConnectApi
        Objects"
domain: apex-guide
topic: serializing-and-deserializing-connectapi-objects
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:43:46.765Z
keywords: [Serializing, Deserializing, ConnectApi, Objects]
---

# Serializing and Deserializing ConnectApi
        Objects

# Serializing and Deserializing ConnectApi Objects

When ConnectApi output objects are serialized into JSON, the structure is similar to the JSON returned from Connect REST API. When ConnectApi input objects are deserialized from JSON, the format is also similar to Connect REST API.

Connect in Apex supports serialization and deserialization in these Apex contexts.

-   JSON and JSONParser classes—serialize Connect in Apex outputs to JSON and deserialize Connect in Apex inputs from JSON.
-   Apex REST with @RestResource—serialize Connect in Apex outputs to JSON as return values and deserialize Connect in Apex inputs from JSON as parameters.
-   JavaScript Remoting with @RemoteAction—serialize Connect in Apex outputs to JSON as return values and deserialize Connect in Apex inputs from JSON as parameters.

Connect in Apex follows these rules for serialization and deserialization.

-   Only output objects can be serialized.
-   Only top-level input objects can be deserialized.
-   Enum values and exceptions cannot be serialized or deserialized.