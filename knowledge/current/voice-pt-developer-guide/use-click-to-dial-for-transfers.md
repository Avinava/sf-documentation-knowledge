---
title: "Use Click-to-Dial for Transfers"
domain: voice-pt-developer-guide
topic: use-click-to-dial-for-transfers
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:21.989Z
estimatedTokens: 329
keywords: [Click-to-Dial, Transfers, Enable, phone, numbers, rep, call, transfer, number]
---

# Use Click-to-Dial for Transfers

> Enable click-to-dial for phone numbers so that a rep can call or transfer to that
    number.

# Use Click-to-Dial for Transfers

Enable click-to-dial for phone numbers so that a rep can call or transfer to that number.

Phone numbers (using the [lightning:clickToDial](https://developer.salesforce.com/docs/component-library/bundle/lightning:clickToDial/documentation) Lightning component) are clickable when a rep isn’t on an active call. Clicking the phone number starts an outbound call. A rep can also transfer a call when a call is in progress and the phone number is clicked. Clicking a click-to-dial component transfers the call to the new phone.

When clicking a phone number, the rep is prompted with two options. The rep can either add the phone number to the call or use a blind transfer to transfer the call without context. To support a blind transfer, see [Perform a Blind Transfer](atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_blind_transfer.htm "With the blind transfer feature, vendors can use the addParticipant Connector API method to hang up and transfer a call rather than add a caller to an existing conversation.").

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=voice_pt_developer_guide)

#### Note

Phone numbers no longer support click-to-dial when the call ends or when a participant has already been added to the call.

## Related Topics

- Perform a Blind Transfer (atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_blind_transfer.htm)
