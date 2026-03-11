---
title: "ConnectApi.MoreChangesSegment"
domain: apex-reference
topic: connectapimorechangessegment
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:39.286Z
keywords: [ConnectApi.MoreChangesSegment]
---

# ConnectApi.MoreChangesSegment

# ConnectApi.MoreChangesSegment

In feed items with a large number of tracked changes, the message is formatted as: “changed A, B, and made X more changes.” The MoreChangesSegment contains the “X more changes.”

Subclass of [ConnectApi.MessageSegment](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_msg_seg.htm "Message segment.").

| Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| moreChanges | List<ConnectApi.​FieldChange​Segment> | Complete list of tracked changes. | 29.0 |
| moreChangesCount | Integer | Number of additional changes. | 28.0 |