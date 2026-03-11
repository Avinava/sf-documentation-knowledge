---
title: "ConnectApi.EntityLinkSegmentInput"
domain: apex-reference
topic: connectapientitylinksegmentinput
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:37.122Z
keywords: [ConnectApi.EntityLinkSegmentInput]
---

# ConnectApi.EntityLinkSegmentInput

# ConnectApi.EntityLinkSegmentInput

An entity link segment.

Subclass of [ConnectApi.MessageSegmentInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_messageSegmentInput.htm "Used to add rich message segments to feed items and comments.").

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| entityId | String | ID of the entity to link to.Only users with access to the entity see it. It’s hidden for users without access. | Required | 43.0 |