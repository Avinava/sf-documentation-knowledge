---
title: "Record View"
domain: chatterapi
topic: record-view
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:20.851Z
estimatedTokens: 413
keywords: [Record, View, any, org, including, custom, specialized, User, ChatterGroup, isn’t, data, metadata, render]
---

# Record View

> A view of any record in the org, including a custom object record. This object is used if
                a specialized object, such as User or ChatterGroup, isn’t available for the record
                type. Contains data and metadata so you can render a record with one
                response.

# Record View

A view of any record in the org, including a custom object record. This object is used if a specialized object, such as User or ChatterGroup, isn’t available for the record type. Contains data and metadata so you can render a record with one response.

| Property | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| id | String | 18-character ID of the object | Small, 29.0 | 23.0 |
| motif | Motif | Small, medium, and large icons indicating the type of the object. The motif can also contain the object’s base color.The icon is not a preview of the file. | Small, 29.0 | 27.0 |
| mySubscription | Reference | If the context user is following this file, this contains information about the subscription, otherwise returns null. | Medium, 29.0 | 23.0 |
| name | String | The localized name | Small, 29.0 | 29.0 |
| relatedList​​Definitions | List View Definition[] | Related list definitions (metadata) for this object. These list definitions don’t include the related list data. | Medium, 29.0 | 29.0 |
| sections | Record View Section[] | List of record view sections. | Small, 29.0 | 29.0 |
| type | String | A fixed type name for this object. Check this value to determine the shape of a response body. | Small, 29.0 | 23.0 |
| url | String | The Connect REST API URL resource for this object. | Small, 29.0 | 23.0 |

#### See Also

-   [Record Snapshot Capability](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_record_snapshot_capability.htm "If a feed element has this capability, it contains all the snapshotted fields of a record for a single create record event.")

## Related Topics

- Motif (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_motif.htm)
- Reference (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_reference.htm)
- List View Definition (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_relatedList.htm)
- Record View Section (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_recordViewSection.htm)
- Record Snapshot Capability (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_record_snapshot_capability.htm)
