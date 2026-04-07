---
title: "GroupConnect Chat Messaging API"
domain: mc-apis
topic: groupconnect-chat-messaging-api
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:40:17.064Z
estimatedTokens: 392
keywords: [GroupConnect, Chat, Messaging, API, Send, real-time, event-based, messages, users, Facebook, Messenger, LINE, Cases, Known, Limitations, Items]
---

> Send real-time event-based messages to your users in Facebook Messenger and LINE.

# GroupConnect Chat Messaging API

Send real-time event-based messages to your users in Facebook Messenger and LINE.

## Use Cases

-   Send Account Updates - Send a message when changes occur in the user account.
    -   Profile
    -   Preferences
    -   Settings
    -   Membership status
    -   Password
-   Send Payment Updates
    -   Send a receipt
    -   Send an out-of-stock notification
    -   Notify an auction has ended
    -   Send a status change on a payment transaction
-   Send Shipping Updates
    -   Product is shipped
    -   Status changes to in-transit
    -   Product is delivered
    -   Shipment is delayed
-   Send Reservation Updates
    -   Itinerary changes
    -   Location changes
    -   Confirm cancellation
    -   Cancel hotel booking
    -   Car rental pick-up time changes
    -   Confirm upgrade
-   Send Transportation Updates
    -   Flight status changes
    -   Ride is canceled
    -   Trip is started
    -   Ferry has arrived
-   Send Ticket Updates
    -   Concert start time changes
    -   Event location changes
    -   Show is cancelled
    -   Refund opportunity is available

## Known Limitations

-   This API cannot automatically create contacts.
-   This API cannot use content templates from Content Builder.
-   API send reports are not available.
-   This API addresses only install package permissions.

## Related Items

Review the [Facebook Messenger Platform Policies](https://developers.facebook.com/docs/messenger-platform/policy/policy-overview) before you send messages using Facebook Messenger.
