---
title: "Get Member's Active Segments"
domain: loyalty
topic: get-members-active-segments
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:51.977Z
estimatedTokens: 384
keywords: [Member's, Active, Segments, Retrieve, Data, Cloud, market, loyalty, program, member, part, REST, HTTP, Inputs, Outputs]
---

# Get Member's Active Segments

> Retrieve active Data Cloud market segments that a loyalty program
   member is a part of.

# Get Member's Active Segments

Retrieve active Data Cloud market segments that a loyalty program member is a part of.

For more information about how the getMemberActiveSegments action can be used to process transaction journals and apply promotions, see [Get a List of Member's Active Segments for a Member](https://help.salesforce.com/s/articleView?id=xcloud.loyalty_promotion_action_member_segment.htm&type=5&language=en_US) in Salesforce Help.

This action is available in API version 55.0 and later for users in orgs where either B2C - Loyalty, B2C - Loyalty Plus, Loyalty Management - Growth, or Loyalty Management - Plus license and Data Cloud are enabled.

## Supported REST HTTP Methods

URI

/services/data/vXX.X/actions/standard/getMemberActiveSegments

Formats

JSON, XML

HTTP Methods

POST

Authentication

Authorization: Bearer token

## Inputs

| Input | Details |
| --- | --- |
| loyaltyProgramMemberID | TypeIDDescriptionRequired. The ID of the loyalty program member to retrieve associated active segments for. |
| segmentIds | TypeIDDescriptionA comma-delimited list of segmentIds to retrieve for the specified member's associated segments. |

## Outputs

| Output | Details |
| --- | --- |
| memberSegmentIDs | TypestringDescriptionA comma-delimited list of the active segment IDs that the specified loyalty program member is a part of. If no segments are specified in the request, the action returns segments from the default data space. |

## Example

**Sample Request**

```

```

**Sample Response**

```

```

## Code Examples

```
{
   "inputs": [ {
      "loyaltyProgramMemberID":"0lVxx000000016GMAQ"
   } ]
}
```

```
{
   "errors":null,
   "isSuccess":true,
   "outputValues":{
        "memberSegmentIDs":"0lvxx00004000001AAB"}
   }
}
```
