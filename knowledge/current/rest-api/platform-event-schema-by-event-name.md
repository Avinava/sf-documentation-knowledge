---
title: "Platform Event Schema by Event Name"
domain: rest-api
topic: platform-event-schema-by-event-name
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:44:25.659Z
keywords: [Platform, Event, Schema, Name, Syntax, Examples, API, Version, 43.0, Later, Note, 42.0, Earlier, Apache, Avro, Format]
---

# Platform Event Schema by Event Name

# Platform Event Schema by Event Name

Gets the definition of a platform event in JSON format for an event name. This resource is available in REST API version 40.0 and later.

| 400 Bad Request | Description |
| --- | --- |
| In API version 43.0 and later | The request was formatted incorrectly—an invalid value was passed for the payloadFormat parameter in the URI. |
| In API version 42.0 and earlier | The request was formatted incorrectly—the payloadFormat parameter was passed in the URI but this API version doesn’t support this parameter. |

## Syntax

URI

/services/data/vXX.X/sobjects/eventName/eventSchema

Formats

JSON

HTTP methods

GET

Authentication

Authorization: Bearer token

Parameters

| Parameter | Description |
| --- | --- |
| payloadFormat | (Optional query parameter. Available in API version 43.0 and later.) The format of the returned event schema. This parameter can take one of the following values.EXPANDED—The JSON representation of the event schema, which is the default format when payloadFormat isn’t specified in API version 43.0 and later. The expanded event schema is in the open-source Apache Avro format but doesn’t strictly adhere to the record complex type. For more information about the schema fields, see Apache Avro Format.COMPACT—The JSON representation of the event schema that adheres to the open-source Apache Avro specification for the record complex type. For more information about the schema fields, see Apache Avro Format. Subscribers use the compact schema format to deserialize compact events received in binary form. |

## Examples for API Version 43.0 and Later

This URI gets the schema of a platform event named Low\_Ink\_\_e. In API version 43.0 and later, the default response format is the JSON representation of the event schema.

```

```

Or:

```

```

The returned response for the expanded format looks like the following in API version 66.0.

```

```

To get the compact (Apache Avro) format, use the following URI.

```

```

The returned response for the compact format looks like the following in API version 66.0.

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_rest)

#### Note

The compact schema doesn’t include the replayId or channel fields because these fields aren’t necessary for deserializing the compact event received.

Custom formula fields contained within Change Data Capture events include a doc tag in the format "doc" : "Formula:Text:00NSB00004I3D4L",".

## Examples for API Version 42.0 and Earlier

In API version 42.0 and earlier, the response format adheres to the open-source Apache Avro specification for the record complex type.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_rest)

#### Note

This format is what the API returns in API version 43.0 and later when appending the ?payloadFormat=COMPACT parameter.

```

```

The returned response looks like the following in API version 42.0.

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_rest)

#### Note

When you change the definition of a platform event, the schema ID for this platform event changes.

## Apache Avro Format

The fields in the returned response adhere to the open-source Apache Avro specification for the record complex type (see [Avro Records](https://avro.apache.org/docs/1.8.1/spec.html#schema_record "HTML (New Window)") in the Apache Avro specification). Note the following:

-   name is the name of the platform event.
-   namespace corresponds to com.sforce.eventbus.
-   type is the Avro complex type.
-   fields is a JSON array containing the fields of the platform event. For each field:
    -   type indicates that the field can be either null or have a value of the specified type. When the field isn’t present, the value is default.
    -   doc describes the field data type and includes the field ID for custom fields. This field is intended for internal use. For example, Salesforce uses the data type information to convert DateTime fields from long to DateTime. We recommend that you don't rely on this field's value because it might change in the future.

The response also includes the uuid field, which contains the schema’s ID. The ID is the MD5 fingerprint of the normalized Avro schema encoded as a base-64 URL variant. You can append this ID to the /vXX.X/event/eventSchema/ URI to retrieve the schema.