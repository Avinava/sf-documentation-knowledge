---
title: "publishLocationStructure()"
domain: apex-reference
topic: publishlocationstructure
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.455Z
keywords: [publishLocationStructure, Asynchronously, publish, information, inventory, locations, location, groups, Omnichannel, Inventory., includes, records, whose, IsEnabled, ShouldSyncWithOci, fields, both, true., method, returns]
---

# publishLocationStructure()

> Asynchronously publish information about your inventory locations and
      location groups to Omnichannel Inventory. The publish includes records whose IsEnabled and
      ShouldSyncWithOci fields are both true. This method returns an ID that
      you can use to retrieve the status of the publish job.

### publishLocationStructure()

Asynchronously publish information about your inventory locations and location groups to Omnichannel Inventory. The publish includes records whose IsEnabled and ShouldSyncWithOci fields are both true. This method returns an ID that you can use to retrieve the status of the publish job.

#### API Version

51.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.OCIPublishLocationStructureOutputRepresentation publishLocationStructure()

#### Return Value

Type: [ConnectApi.OCIPublishLocationStructureOutputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_o_c_i_publish_location_structure_output.htm "Response to a publish location structure request.")