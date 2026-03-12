---
title: "Add Contact Center Channels to Enable Routing"
domain: voice-pt-developer-guide
topic: add-contact-center-channels-to-enable-routing
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:21.969Z
estimatedTokens: 421
keywords: [Add, Contact, Center, Channels, Enable, Routing, let, customers, configure, call, voice, calls, determine, End, User]
---

# Add Contact Center Channels to Enable Routing

> To let customers configure call routing for voice calls and to determine when to create
        an
        End
        User record, create a phone channel. After creating a phone channel, you can set up a caller
        ID tool to create or reuse an End User record. You can also choose whether to associate the
        End User record with the number dialed.

# Add Contact Center Channels to Enable Routing

To let customers configure call routing for voice calls and to determine when to create an End User record, create a phone channel. After creating a phone channel, you can set up a caller ID tool to create or reuse an End User record. You can also choose whether to associate the End User record with the number dialed.

Contact center channels can be added from the contact center details page. From Setup, enter Partner Telephony in the Quick Find box, then select **Partner Telephony Contact Centers**. Select your contact center and then scroll to the **Contact Center Channels** section. Click **Add**.

![Add contact center channel](/docs/resources/img/en-us/260.0?doc_id=voice_pt%2Fimages%2Fvoice_pt_add_contact_center_channel.png&folder=voice_pt_developer_guide)

Partners can automate the phone number selection by providing the phone number list through an Apex implementation. Otherwise, the phone input box displays a text box where the rep can manually enter the phone number.

![Contact center channel and routing](/docs/resources/img/en-us/260.0?doc_id=voice_pt%2Fimages%2Fvoice_pt_channel_and_routing.png&folder=voice_pt_developer_guide)

Partners can turn on the capability CapabilitiesSupportsPartnerPhoneNumbers in ConversationVendorInfo and implement the service\_cloud\_voice.PhoneNumberProvider interface in their [Apex class](atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_apex_reference.htm "Service Cloud Voice for Partner Telephony uses several Apex classes.") as shown in the following code sample.

```

```

PhoneNumberInfo contains phoneNumber, countryCode, and an identifier.

## Code Examples

```apex
public service_cloud_voice.PhoneNumberResponse listPhoneNumbers(service_cloud_voice.PhoneNumberRequest phoneNumberRequest) {
  List<service_cloud_voice.PhoneNumberInfo> phoneNumberInfos = new List<service_cloud_voice.PhoneNumberInfo>();
  phoneNumberInfos.add(new service_cloud_voice.PhoneNumberInfo('+12018867861',  'US',  'TOLL_FREE',  '12018867861'));
  phoneNumberInfos.add(new service_cloud_voice.PhoneNumberInfo('+11019987861',  'US',  'TOLL_FREE',  '11019987861'));
  phoneNumberInfos.add(new service_cloud_voice.PhoneNumberInfo('+11101000011',  'US',  'TOLL_FREE',  '11101000011'));
  return  new service_cloud_voice.PhoneNumberResponse(true, null, phoneNumberInfos);
}
```

## Related Topics

- Apex class (atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_apex_reference.htm)
