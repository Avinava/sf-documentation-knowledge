---
title: "Test Your Implementation with the Voice Call Simulator"
domain: voice-pt-developer-guide
topic: test-your-implementation-with-the-voice-call-simulator
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:22.188Z
estimatedTokens: 1195
keywords: [Test, Implementation, Voice, Call, Simulator, component, helps, comfortable, Service, Cloud, walk, variety, scenarios]
---

# Test Your Implementation with the Voice Call Simulator

> The Voice Call Simulator component helps you get comfortable with Service Cloud Voice.
  As you set up Service Cloud Voice, use the simulator to walk through a variety of call scenarios.

# Test Your Implementation with the Voice Call Simulator

The Voice Call Simulator component helps you get comfortable with Service Cloud Voice. As you set up Service Cloud Voice, use the simulator to walk through a variety of call scenarios.

To get started, load the demo connector project as described in [Use the Demo Connector](atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_demo_connector.htm "The demo connector is a sample application for partner telephony systems that integrate with Service Cloud Voice. It demonstrates an optimal Voice implementation based on a group of telephony API mocks. It also includes a voice call simulation tool that you can use to test call actions such as making and answering calls and using phone controls."). Then, open the Voice Call Simulator by navigating to https://:8080/remote.html. We recommend leaving the simulator open in one browser tab and the service console in another tab.

The following screens appear with the simulator.

![Phone call simulator](/docs/resources/img/en-us/260.0?doc_id=voice_pt%2Fimages%2Fphone_simulator.png&folder=voice_pt_developer_guide)

-   **Agent Settings:** Let agents mute, record, swap, merge calls, allow signed recording URLs, support contact search, and support MOS for vendors.
-   **Call Transcript:** Simulate a real-time call transcript. Select a speaker and enter or record a statement or question. For example, select Agent and enter, “Hello, how can I help you?”. Build out the transcript by switching between speakers. Comments appear in the Conversation component on the Voice Call record.
-   **Call Simulator:** The call simulator serves to simulate both softphone and hardphone devices. With the call simulator, you can do the following.
    -   **Call Initial State**: Set the initial state of the call for recording, mute, and hold controls.
    -   **Enable Omni Call Controls**: Enable or disable Omni-Channel controls when a call is ongoing.
    -   **Inbound Call**: Initiate an inbound call from the number you entered.
    -   **Outbound Call**: With Hardphone selected, you can trigger an outbound call.
    -   **Add Participant**: With Hardphone selected, you can add a participant.
    -   **Callback**: Trigger a callback.
    -   After the call is connected, the **Agent Actions** section appears. The agent actions can be used to mute, unmute, hold, resume, pause recording, resume recording, swap, and conference. For an outbound call, Call Participant Actions can be used to add the customer to the call, simulate the customer leaving the call, or simulate a third party joining and leaving the call.
    -   **Active Calls**: This section shows the state of the active calls including ringing, connected states. It also shows the details of the active calls: ![Simulator on an active call](/docs/resources/img/en-us/260.0?doc_id=voice_pt%2Fimages%2Fsimulator_active_call.png&folder=voice_pt_developer_guide)

![Phone call simulator](/docs/resources/img/en-us/260.0?doc_id=voice_pt%2Fimages%2Fphone_simulator_2.png&folder=voice_pt_developer_guide)

-   **Login Settings:** Show or hide the telephony login screen in the Omni-Channel utility. Log out from the telephony system. When the telephony login screen is hidden, the rep uses single sign-on to log in.

-   **Call Recording:** After you record a call, enter the recording details and publish it to the Voice Call record in Salesforce. The recording URL should point to an audio stream or audio file of the call recording, can’t be more than 1,000 characters, and must be fully qualified, meaning that the source is included Trusted URLs with the media-src CSP directive.
-   **Messages:** Communicate with a Lightning bridge component in your org. The Received Message field shows the last message received from the component. To learn more, see [Use the Lightning Message Service Bridge](atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_advanced_use_lightning_bridge.htm "Use the Lightning Message Service Bridge component to enable communication between the telephony system and other Lightning components.").

![Phone call simulator error](/docs/resources/img/en-us/260.0?doc_id=voice_pt%2Fimages%2Fsimulator_error.png&folder=voice_pt_developer_guide)

-   **Errors:** Test your error user experience by generating an error in response to any API call. For example, select **Display an error** and mute the call to test the muteCall API error scenario. When you’re done, deselect **Display an error**.

![Phone call simulator MOS](/docs/resources/img/en-us/260.0?doc_id=voice_pt%2Fimages%2Fsimulator_mos.png&folder=voice_pt_developer_guide)

-   **MOS**: Test the Mean Opinion Score (MOS) feature by submitting a JSON object for the audio status.

## Related Topics

- Use the Demo Connector (atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_demo_connector.htm)
- Use the Lightning Message Service Bridge (atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_advanced_use_lightning_bridge.htm)
