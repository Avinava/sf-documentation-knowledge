---
title: "Service Cloud Voice for Partner Telephony Apex Reference"
domain: voice-pt-developer-guide
topic: service-cloud-voice-for-partner-telephony-apex-reference
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:21.964Z
estimatedTokens: 3052
keywords: [Service, Cloud, Voice, Partner, Telephony, Apex, uses, several, classes, _cloud, _voice.ContactCenterInfo, _voice.IntelligenceServiceProvider, _voice.IntelligenceServiceRequest, _voice.IntelligenceServiceResponse, _voice.IntelligenceSignalType]
---

# Service Cloud Voice for Partner Telephony Apex Reference

> Service Cloud Voice for Partner Telephony uses several Apex classes.

# Service Cloud Voice for Partner Telephony Apex Reference

Service Cloud Voice for Partner Telephony uses several Apex classes.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=voice_pt_developer_guide)

#### Important

This guide is for telephony providers who are creating a solution that integrates Service Cloud Voice with their telephony system. If that’s not you, see the [Service Cloud Voice Implementation Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.voice_developer_guide.meta/voice_developer_guide/voice_intro.htm) or [Salesforce Help](https://help.salesforce.com/articleView?id=service.voice_about.htm&type=5&language=en_US). To update your solution to include Bring Your Own Channel for CCaaS Messaging capabilities along with Service Cloud Voice, see the [Bring Your Own Channel Developer Guide](https://developer.salesforce.com/docs/service/messaging-byoc-ccaas/guide/add-messaging-to-voice.html).

To automate all user operations on the contact center in Salesforce, partners should provide an Apex integration class that implements the supported Apex interfaces.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=voice_pt_developer_guide)

#### Note

Make sure, along with implementing the supported interfaces, you also declare that capability in ConversationVendorInfo. If you don’t declare the capability, your implemented methods aren’t called.

When implementing an Apex interface method, if the operation is successful, create a response object using the response constructor with success as true and set the response field. If the operation fails, create a response object with success as false, an appropriate errorMessage, and a null response field.

The following interfaces can be implemented by partners.

## service\_cloud\_voice.ContactCenterInfo

For guidance on this Apex class, see [Send Real-Time Signals](atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_voicecalls_realtime_conversation.htm "Voice resiliency ensures that calls can still go through when the number of conversations is over limit or when the background service is affected.").

## service\_cloud\_voice.IntelligenceServiceAndSignalsInfo

For guidance on this Apex class, see [Send Real-Time Signals](atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_voicecalls_realtime_conversation.htm "Voice resiliency ensures that calls can still go through when the number of conversations is over limit or when the background service is affected.").

## service\_cloud\_voice.IntelligenceServiceProvider

For guidance on this Apex interface, see [Send Real-Time Signals](atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_voicecalls_realtime_conversation.htm "Voice resiliency ensures that calls can still go through when the number of conversations is over limit or when the background service is affected.").

## service\_cloud\_voice.IntelligenceServiceRequest

For guidance on this Apex class, see [Send Real-Time Signals](atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_voicecalls_realtime_conversation.htm "Voice resiliency ensures that calls can still go through when the number of conversations is over limit or when the background service is affected.").

## service\_cloud\_voice.IntelligenceServiceResponse

For guidance on this Apex class, see [Send Real-Time Signals](atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_voicecalls_realtime_conversation.htm "Voice resiliency ensures that calls can still go through when the number of conversations is over limit or when the background service is affected.").

## service\_cloud\_voice.IntelligenceSignalType

For guidance on this Apex class, see [Send Real-Time Signals](atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_voicecalls_realtime_conversation.htm "Voice resiliency ensures that calls can still go through when the number of conversations is over limit or when the background service is affected.").

## service\_cloud\_voice.GroupSetup

For guidance on this interface, see [Associate Partner Telephony Users and Groups with Queues](atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_users_groups_queues.htm "Set up queue management to associate partner telephony users and groups with Service Cloud Voice queues.").

## service\_cloud\_voice.IntelligenceServiceProvider

For guidance on this interface, see Enable Conversation Intelligence for Partner System Intelligence Signals.

## service\_cloud\_voice.KeyProvider

Implement this interface to automate key provisioning and renewal. Whenever a Salesforce contact center is connected to the partner system (during contact center creation flow or later using the **Connect Account** button on the contact center details page), Salesforce calls the getPublicKey method on the integration class. The same method is also called when the public key is renewed (using the **Update Key** button on the contact center details page).

For this interface, turn on the keyProvisioningSupported capability.

```

```

KeyResponse contains four fields: a success flag, an error message, a public key, and the expiration date of the public key.

## service\_cloud\_voice.PartnerConnector

For this interface, turn on the namedCredentialSupported capability. This interface contains one method.

```

```

The ConnectPartnerResponse response has three fields:

-   Success: Boolean value for whether operation was a success or failure.
-   contactCenters: Map of partner contact center ID and partner contact center name.
-   errorMessage: Failure message if the operation failed.

Use the following constructor to create a response instance:

```

```

The ContactCenterInfo input value contains information about the contact center, such as the internal name, the display name, the org ID, the partner contact center ID, and the fully qualified name of the named credential selected by user.

## service\_cloud\_voice.PartnerSSO

Implement this interface to set up SSO for the reps with Salesforce as an identity provider. See [Set Up Single Sign-On](atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_sso.htm "Set up single sign-on (SSO) for your solution.") for more information.

For this interface, turn on the agentSSOSupported capability. It contains two methods.

```

```

This method is used to create a SAML identity provider in the partner account. SetupSamlIdpRequest has two fields: the SAML XML and the named credential. The SAML XML is generated from the Salesforce identity provider. You can reuse an identity provider since this is needed one time per account.

```

```

This method is called from Salesforce to get the ConnectedAppSetupParams, which contains fields to create a connected app in Salesforce. ConnectedAppSetupParams contains acsUrl, entityUrl, customAttributes and sloUrl.

## service\_cloud\_voice.PhoneNumberProvider

Implement this interface to support listing phone numbers when creating contact center channels.

```

```

PhoneNumberResponse contains a list of PhoneNumberInfos. PhoneNumberInfo contains phoneNumber, countryCode, and an identifier.

PhoneNumberRequest contains ContactCenterInfo.

## service\_cloud\_voice.QueueManager

For guidance on this interface, see [Associate Partner Telephony Users and Groups with Queues](atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_users_groups_queues.htm "Set up queue management to associate partner telephony users and groups with Service Cloud Voice queues.").

## service\_cloud\_voice.QueueSetup

For guidance on this interface, see [Associate Partner Telephony Users and Groups with Queues](atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_users_groups_queues.htm "Set up queue management to associate partner telephony users and groups with Service Cloud Voice queues.").

## service\_cloud\_voice.RecordingMediaProvider

For this interface, turn on the einsteinConversationInsightsSupported capability. It contains one method to provide the recording URLs, which can be downloaded and analyzed.

```

```

The RecordingMediaResponse response is a list of RecordingMediaItem objects. Each item contains recordingUrl, partnerVoiceCallId, and an error message if the recording URL isn’t present. Use the following constructor to create an instance of RecordingMediaItem:

```

```

Set the expiryTime parameter to the length of time, measured in minutes, before the signed recording URL (signedRecordingUrl) expires. If signedRecordingUrl doesn't expire, set expiryTime to NULL. The signedRecordingUrl must match these regex expressions.

-   For AWS: https://\[a-z\\d\\.-\]\*s3\[a-z\\d\\.-\]\*amazonaws\\.com\\S\*\\.(?P<file\_extension>wav|mp3|flac|mp4|m4a)
-   For Google Cloud: https://storage.googleapis.com/\[a-z\\d\\.-\]\*/\\S\*\\.(?P<file\_extension>wav|mp3|flac|mp4|m4a)

Set the errorCode parameter to the HTTP error code that's returned if the recording URL (recordingUrl) doesn't exist. Salesforce will retry the voice call for all error codes except for error code 404. If an error code is not expected, set the value to NULL.

The RecordingMediaRequest input value contains the named credentials to be used for the callout, and the list of partner Voice Call IDs for the recording URLs.

## service\_cloud\_voice.TransferDestinationProvider

For this interface, turn on the partnerTransferDestinationsSupported capability. It contains one method to fetch rep queues.

```

```

The TransferDestinationResponse response contains three fields: a success flag, a map of queue ID and queue names, and an error message for a failed operation. Use the following constructor to create a response instance:

```

```

## service\_cloud\_voice.UserSyncing

Implement this interface to automate user syncing. Whenever a user is added or removed from the Salesforce contact center, Salesforce calls these methods on the integration class. For this interface, turn on the agentSSOSupported capability.

```

```

The UserSyncingResponse response contains three fields: a success flag, an error message, and a map of a Salesforce user ID and a partner system user ID.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=voice_pt_developer_guide)

#### Note

User addition and removal is atomic. That is, users are added or removed in Salesforce only if all the users in that batch are successfully added or removed in a partner system.

UserSyncingRequest contains a Salesforce contact center ID, a named credential, and a list of UserInfo objects, each having a Salesforce user ID, first name, last name, and the Salesforce username of the rep.

## service\_cloud\_voice.UpdateOrgDomainProvider

Your org’s [My Domain](https://help.salesforce.com/s/articleView?id=products.domain_name_overview.htm&type=5&language=en_US) is a subdomain for the URLs that Salesforce uses to serve your org. That means that some URLs that are used for Service Cloud Voice features, such as the Connector URL, the telephony API (SCRT2 URL), and the Connect API URL, contain the domain value. If you change your My Domain name, that subdomain value changes and impacts the URLs used by Service Cloud Voice features. In that situation, this Apex class notifies you of updated domain information.

Implement this interface to get notified of My Domain changes in your org.

```

```

This method has a parameter, ContactCenterInfo, which contains two new properties:

-   orgDomainVal contains the latest value for the My Domain URL.
-   scr2Url contains the URL for the SCRT2 server.

ContactCenterInfo also has the following properties: contactCenterId, partnerContactCenterId, internalName, displayName, namedCredentials, orgId.

## service\_cloud\_voice.VendorConfigProvider

Implement this interface to support multiple connector URLs and login URLs in your managed package. See [Configure Multiple Connector URLs](https://developer.salesforce.com/docs/atlas.en-us.260.0.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_multiurl.htm).

## Code Examples

```
KeyResponse getPublicKey(ContactCenterInfo contactCenterInfo);
```

```
ConnectPartnerResponse connect(service_cloud_voice.ContactCenterInfo contactCenterInfo);
```

```apex
ConnectPartnerResponse(boolean success, Map<String, String> contactCenters, String errorMessage);
```

```
PartnerResponse setupSamlIdentityProvider(SetupSamlIdpRequest setupSamlIdpRequest);
```

```
ConnectedAppSetupParams getConnectedAppSetupParams(ContactCenterInfo contactCenterInfo);
```

## Related Topics

- Send Real-Time
                    Signals (atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_voicecalls_realtime_conversation.htm)
- Send Real-Time
                Signals (atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_voicecalls_realtime_conversation.htm)
- Associate Partner Telephony Users and Groups with Queues (atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_users_groups_queues.htm)
- Set Up Single Sign-On (atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_sso.htm)
