---
title: "Use the MobileConnect API"
domain: mc-apis
topic: use-the-mobileconnect-api
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:06:25.779Z
estimatedTokens: 1936
keywords: [MobileConnect, API, Delivery, outbound, SMS, message, application, requires, active, short, code, keyword, subscription, assists, marketers]
---

# Use the MobileConnect API

> Delivery of an outbound SMS message through the MobileConnect application requires an active short code and keyword subscription. MobileConnect assists marketers and developers with the creation of message subscriptions through the SMS Opt-In template.

# Use the MobileConnect API

## Subscribe Mobile Numbers to a Short Code

Delivery of an outbound SMS message through the MobileConnect application requires an active short code and keyword subscription. MobileConnect assists marketers and developers with the creation of message subscriptions through the SMS Opt-In template.

MobileConnect supports three variations of the SMS Opt-In:

1.  Single Opt-In: Contact texts JOIN (or another specified keyword) to your short code to subscribe to a specified keyword on that short code.

2.  Double Opt-In: Contact texts JOIN (or another specified keyword) to your short code and receives a text message asking them to reply Y or YES to confirm their subscription. Upon replying Y or YES, MobileConnect subscribes the contact to the specified keyword on that short code.

3.  Double Opt-In with Age Confirmation: Contact texts JOIN (or another specified keyword) to your short code, the contact reply to the initial confirmation messag,e and confirm with their birth date before subscribing to the specified keyword on that short code.


CTIA and MMA best practices state that SMS subscriptions originating from a web form or mobile app must use the Double Opt-In variation. Use the MobileConnect QueueMO REST API to replicate the original inbound text of JOIN. This way, the contact will only receive one text message that requires replying with Y or YES to finalize creation of the subscription.

![](/docs/resources/img/en-us/noversion?doc_id=images%2FMobileConnect_2.png&folder=mc-apis)

![](/docs/resources/img/en-us/noversion?doc_id=images%2FMobileConnect_3.png&folder=mc-apis)

![](/docs/resources/img/en-us/noversion?doc_id=images%2FMobileConnect_4.png&folder=mc-apis)

## Example QueueMO API Request

```
POST https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com/sms/v1/queueMO
Content-Type: application/json
Authorization: Bearer YOUR_OAUTH_ACCESS_TOKEN
{
  "mobileNumbers": [
    "15555551212"
  ],
  "shortCode": "Code",
  "messageText": "KEYWORD"
}
```

Key:

-   `mobileNumbers` includes the mobile number to subscribe
-   `shortCode` includes the SMS short code used in the SMS Opt-In template
-   `messageText` contains the keyword used in the SMS Opt-In template

## Confirm Subscription Status in MobileConnect

Once you create an SMS Opt-In message, ensure that MobileConnect creates the subscriptions correctly.

1.  Navigate to the MobileConnect overview screen.
2.  Open the Contacts application.
3.  Click *Manage* under Contacts.
4.  Search for the specific mobile number.
5.  Click the mobile number.
6.  Click *Subscriptions*.
7.  Confirm the subscription status of *Subscribed*. MobileConnect will only deliver outbound SMS messages to mobile numbers that maintain a *Subscribed* status for the specified short code. Mobile numbers with an *In Progress* status did not fully complete the Double Opt-in process and will not receive SMS messages.

![](/docs/resources/img/en-us/noversion?doc_id=images%2FMobileConnect_5.png&folder=mc-apis)

Insider Tip: You built a mobile app, now you need users. The expectation that contacts will see your sign promoting the app, take out their phone, open the App Store or Google Play, search for your app, and finally download your app represents only part of your overall plan. Allow consumers to request a link to download your app via SMS. For example, “Text SMCAPP to (your short code) to download the mobile app.” When a contact texts SMCAPP to your short code, that contact will receive a text message containing a link to your app in the App Store or Google Play. Create this message with the MobileConnect Text Response template.

## Trigger SMS Messages from a Mobile App

Once you build a mobile app and subscribe contacts to your short code and keyword, you can deliver SMS messages. Use the MobileConnect Outbound message template to define the content for each message. Follow these steps to create your message:

1.  Name the message.
2.  Select the short code to be used for delivery. Use the same code on which contacts subscribed to a specific keyword.
3.  Select the *API Trigger* send method.
4.  Define message content. Both the MessageContact and MessageList APIs allow for override of defined message content.
5.  Activate your message. Both the messageContact and messageList request bodies use the API key received during this step.

![](/docs/resources/img/en-us/noversion?doc_id=images%2FMobileConnect_6.png&folder=mc-apis)

![](/docs/resources/img/en-us/noversion?doc_id=images%2FMobileConnect_7.png&folder=mc-apis)

![](/docs/resources/img/en-us/noversion?doc_id=images%2FMobileConnect_8.png&folder=mc-apis)

## Example messageContact API Request

```
POST https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com/sms/v1/messageContact/MzA6Nzg6MA/send
Content-Type: application/json
Authorization: Bearer YOUR_OAUTH_ACCESS_TOKEN
{
  "mobileNumbers": [
    "13175551212"
  ],
  "Subscribe": false,
  "Resubscribe": false,
  "Override": true,
  "messageText": "Welcome to Code@"
}
```

If you wish to ensure that the contact exists for the specified mobile number and that the mobile number subscribed to the specified keyword for your API message, set the `Subscribe` and `Resubscribe` values to `true`, as shown in the example below.

```js
POST https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com/sms/v1/messageContact/MzA6Nzg6MA/send
Content-Type: application/json
Authorization: Bearer YOUR_OAUTH_ACCESS_TOKEN
{
    "mobileNumbers": [
    "13175551212"
    ],
    "Subscribe": true,
    "Resubscribe": true,
    "Override": true,
    "messageText": "Welcome to Code@",
}
```

Key:

-   `Override` allows for the override of message content defined within the MobileConnect UI
-   `messageText` defines message content if Override = true

## Deliver On-Demand SMS Content with Text Response

SMS allows for two conversations initiated by consumers. Use the MobileConnect Text Response template to create content sent to consumers in response to an SMS message to your short code. For example: “Text STOCK to (your short code) to get a real-time quote of Brand ABC stock price.”

![](/docs/resources/img/en-us/noversion?doc_id=images%2FMobileConnect_9.png&folder=mc-apis)

![](/docs/resources/img/en-us/noversion?doc_id=images%2FMobileConnect_10.png&folder=mc-apis)

## Example Message Content for STOCK Use Case

```
%%[
Set @mobile = v([MOBILE_NUMBER])
Set @mobile1 = Substring(@mobile,2,10)
Set @keyword = v([MSG(0).VERB])
set @noun = lowercase([MSG(0).NOUN(0)])
set @url = Concat("http://finance.example.com/d/quotes.csv?s=CRM&f=snd1l1yr",@mobile1,"&alert_keyword=",@keyword)
set @msg = [MSG(0)]Set @message = HttpGet(@url)]%%
example.com Stock is: %%=ProperCase(@message)=%% Thanks for Responding!
```

![](/docs/resources/img/en-us/noversion?doc_id=images%2FMobileConnect_11.png&folder=mc-apis)

## Most Common MobileConnect REST APIs

### messageContact

[Send an SMS message to up to 250 MobileConnect subscribers](atlas.en-us.noversion.mc-apis.meta/mc-apis/postMessageContactSend.htm). Use cases include appointment reminders, account alerts, itinerary updates, and other direct communications.

### MessageList

[Send an SMS message to an identified MobileConnect List](atlas.en-us.noversion.mc-apis.meta/mc-apis/postMessageList.htm). Use cases include daily promotions overview, app update available notifications, and other broad communications.

### queueMO

[Replicate an inbound SMS message from a mobile device](atlas.en-us.noversion.mc-apis.meta/mc-apis/postQueueMO.htm). Use as part of a Double Opt-in process via web form or mobile app.

Visit the [SMS REST API reference page](atlas.en-us.noversion.mc-apis.meta/mc-apis/routes.htm) to learn about all of the REST APIs supported by MobileConnect.

## Related Topics

- Send an SMS message to up to 250 MobileConnect subscribers (atlas.en-us.noversion.mc-apis.meta/mc-apis/postMessageContactSend.htm)
- Send an SMS message to an identified MobileConnect List (atlas.en-us.noversion.mc-apis.meta/mc-apis/postMessageList.htm)
- Replicate an inbound SMS message from a mobile device (atlas.en-us.noversion.mc-apis.meta/mc-apis/postQueueMO.htm)
- SMS REST API reference page (atlas.en-us.noversion.mc-apis.meta/mc-apis/routes.htm)
