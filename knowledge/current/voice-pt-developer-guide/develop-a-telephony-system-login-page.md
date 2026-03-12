---
title: "Develop a Telephony System Login Page"
domain: voice-pt-developer-guide
topic: develop-a-telephony-system-login-page
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:22.184Z
estimatedTokens: 609
keywords: [Develop, Telephony, System, Login, needed, appears, Omni-Channel, utility, Lightning, service, console]
---

# Develop a Telephony System Login Page

> If needed, create a telephony system login page that appears in the Omni-Channel utility
  in the Lightning service console.

# Develop a Telephony System Login Page

If needed, create a telephony system login page that appears in the Omni-Channel utility in the Lightning service console.

Complete this step if your telephony provider doesn’t support SSO, meaning that reps must log into a telephony system to make and receive calls. The telephony system must maintain the duration and validity of the login session.

1.  In your ConversationVendorInfo file, include a login URL in the customLoginUrl field.

    ```

    ```

2.  In the response to init(), set **showLogin** to true and include an optional number for **loginFrameHeight** in the InitResult object.
3.  Upon initialization, the Omni-Channel utility shows an iframe that is populated with the URL specified in the **scvVendorLoginUrl** field of customSettings in the callCenter file: ![Omni login window](/docs/resources/img/en-us/260.0?doc_id=voice_pt%2Fimages%2Fomni_login.png&folder=voice_pt_developer_guide)
4.  Publish a Connector API event with the login result to show either a login failure or the dialer.

    ```

    ```

5.  The rep can now log out from Omni-Channel. ![Omni-Channel logout window](/docs/resources/img/en-us/260.0?doc_id=voice_pt%2Fimages%2Fomni_logout.png&folder=voice_pt_developer_guide)
6.  In the event of a session timeout, the telephony vendor can trigger a logout from the Connector API and use the Connector API publishEvent method. The vendor can provide a loginFrameHeight for the login iframe. If no value is provided, a default value of 350 is used.

    ```

    ```

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=voice_pt_developer_guide)

    #### Note

    Clicking **Log Out** in the Voice Call Simulator performs the same action. To learn more, see [Test Your Implementation with the Voice Call Simulator](atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_test_implementation.htm "The Voice Call Simulator component helps you get comfortable with Service Cloud Voice. As you set up Service Cloud Voice, use the simulator to walk through a variety of call scenarios.").


#### See Also

-   [*Service Cloud Connector API Reference*: logout](https://developer.salesforce.com/docs/atlas.en-us.260.0.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_interface_logout.htm "Service Cloud Connector API Reference: logout - HTML (New Window)")

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<ConversationVendorInfo xmlns="http://soap.sforce.com/2006/04/metadata" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
... 
    <customLoginUrl>https://YOUR_SERVER_LOGIN_URL</customLoginUrl>
...
</ConversationVendorInfo>
```

```
publishEvent({
  eventType: Constants.SHARED_EVENT_TYPE.LOGIN_RESULT, 
  payload: new GenericResult({ success: true })
});
```

```
publishEvent({ 
  eventType: Constants.SHARED_EVENT_TYPE.LOGOUT_RESULT,
  payload: new LogoutResult({ success: true, loginFrameHeight: 350 }) 
})
```

## Related Topics

- Test Your
        Implementation with the Voice Call Simulator (atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_test_implementation.htm)
