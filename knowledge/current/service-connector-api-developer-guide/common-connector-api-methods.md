---
title: "Common Connector API Methods"
domain: service-connector-api-developer-guide
topic: common-connector-api-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:45.339Z
estimatedTokens: 857
keywords: [Common, Connector, API, apply, third, party, vendor, systems, including, Contact, Center, Service, CCaaS, voice]
---

# Common Connector API Methods

> The common Connector API methods apply to all third party vendor
            systems, including Contact Center as a Service (CCaaS) and voice
        systems.

# Common Connector API Methods

The common Connector API methods apply to all third party vendor systems, including Contact Center as a Service (CCaaS) and voice systems.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=service_connector_api_developer_guide)

#### Important

The Connector API is for partners who are implementing Bring Your Own Channel for CCaaS or Service Cloud Voice with Partner Telephony.

-   **[downloadLogs](atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_interface_downloadlogs.htm)**
    Trigger a browser download that saves an array of log messages as a file.
-   **[getAgentStatus](atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_interface_getagentstatus.htm)**
    Return the rep's current status information.
-   **[getAudioDevices](atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_interface_getaudiodevices.htm)**
    Return a list of valid device IDs that can be used for the speaker and microphone devices.
-   **[getContacts](atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_interface_getcontacts.htm)**
    Get a list of Messaging and phone contacts and contact types.
-   **[getSharedCapabilities](atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_interface_getsharedcapabilities.htm)**
    Get the capabilities that are shared across partner telephony and Messaging channels for Bring Your Own Channel and Bring Your Own Channel for CCaaS.
-   **[getTelephonyConnector](atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_interface_gettelephonyconnector.htm)**
    Return an object of the TelephonyConnector class, which will be used for all telephony related API calls.
-   **[handleMessage](atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_interface_handlemessage.htm)**
    Handle a message from a Lightning Component.
-   **[init](atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_interface_init.htm)**
    Initialize the Connector API Interface.
-   **[logMessageToVendor](atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_interface_logmessagetovendor.htm)**
    Send a log message and optional payload to the vendor connector's logging facility.
-   **[logout](atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_interface_logout.htm)**
    Log out from the telephony system. You must implement this method, which is called when a rep logs out of the phone system from Omni-Channel.
-   **[onAgentWork](atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_interface_onagentwork.htm)**
    Send non-Voice related AgentWork events to the partner contact center.
-   **[setAgentStatus](atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_interface_setagentstatus.htm)**
    Set status information for the rep.

## Related Topics

- downloadLogs (atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_interface_downloadlogs.htm)
- getAgentStatus (atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_interface_getagentstatus.htm)
- getAudioDevices (atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_interface_getaudiodevices.htm)
- getContacts (atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_interface_getcontacts.htm)
- getSharedCapabilities (atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_interface_getsharedcapabilities.htm)
- getTelephonyConnector (atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_interface_gettelephonyconnector.htm)
- handleMessage (atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_interface_handlemessage.htm)
- init (atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_interface_init.htm)
- logMessageToVendor (atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_interface_logmessagetovendor.htm)
- logout (atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_interface_logout.htm)
