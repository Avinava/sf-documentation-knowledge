---
title: "PushTopic Event Publishing for PersonAccount"
domain: api-streaming
topic: pushtopic-event-publishing-for-personaccount
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:00.441Z
estimatedTokens: 112
keywords: [PushTopic, Event, Publishing, PersonAccount, targets, Account, record, events, changes, Although, internally, composed, Contact, handled, associated]
---

# PushTopic Event Publishing for PersonAccount

> PushTopic only targets the Account record when publishing events for changes to a
  PersonAccount. Although a PersonAccount is internally composed of one Account record and one
  Contact record, changes to the Contact record are handled through the Account record with which it
  is associated in PushTopic event subscriptions. Therefore, PushTopic events are based solely on
  changes to the Account record.

# PushTopic Event Publishing for PersonAccount

PushTopic only targets the Account record when publishing events for changes to a PersonAccount. Although a PersonAccount is internally composed of one Account record and one Contact record, changes to the Contact record are handled through the Account record with which it is associated in PushTopic event subscriptions. Therefore, PushTopic events are based solely on changes to the Account record.
