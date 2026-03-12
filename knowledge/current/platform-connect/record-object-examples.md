---
title: "Record Object Examples"
domain: platform-connect
topic: record-object-examples
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:27.631Z
estimatedTokens: 251
keywords: [Record, Examples, code, demonstrate, how, different, depending, whether, canvas, app, appears, publisher, feed]
---

# Record Object Examples

> These code examples demonstrate how the Record object contains different information
        depending on whether your canvas app appears in the publisher or the feed.

# Record Object Examples

These code examples demonstrate how the Record object contains different information depending on whether your canvas app appears in the publisher or the feed.

## Canvas App in the Publisher

If your canvas app appears in the publisher, the Record object contains different information depending on whether the publisher appears on a user record, a group record, or an object record.

User Record

The Record object Id is the User.Id and the Type is User.

```

```

Group Record

The Record object Id is the CollaborationGroup.Id and the Type is CollaborationGroup.

```

```

Object Record

The Record object Id is the object Id and the Type is the object name, for example, Account.

```

```

## Canvas App in the Feed

If your canvas app appears in the feed, the Record object always contains the feed item information whether the feed is on a user record, a group record, or an object record.

The Record object Id is the FeedItem.Id and the Type is FeedItem.

```

```

## Code Examples

```
"record":{
    "attributes":{
        "type":"User",
        "url":"/services/data/v66.0/sobjects/User/001xx000003DGWiABC"
        },
    "Id":"001xx000003DGWiABC"
    }
```

```
"record":{
    "attributes":{
        "type":"CollaborationGroup",
        "url":"/services/data/v66.0/sobjects/CollaborationGroup/001xx000003DGWiXYZ"
        },
    "Id":"001xx000003DGWiXYZ"
    }
```

```
"record":{
    "attributes":{
        "type":"Account",
        "url":"/services/data/v66.0/sobjects/Account/001xx000003DGWiAAO"
        },
    "Id":"001xx000003DGWiAAO"
    }
```

```
"reoord":{
    "attributes":{
        "type":"FeedItem",
        "url":"/services/data/v66.0/sobjects/FeedItem/001xx000003DGWiAAO"
        },
    "Id":"001xx000003DGWiAAO"
    }
```
