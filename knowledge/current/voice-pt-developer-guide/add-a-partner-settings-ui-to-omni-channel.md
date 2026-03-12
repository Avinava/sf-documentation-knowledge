---
title: "Add a Partner Settings UI to Omni-Channel"
domain: voice-pt-developer-guide
topic: add-a-partner-settings-ui-to-omni-channel
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:22.096Z
estimatedTokens: 352
namespace: TelephonySettingsComponent
keywords: [Add, Partner, Settings, Omni-Channel, Partners, launch, Lightning, component, widget, their, own, additional, shown, along, common]
---

# Add a Partner Settings UI to Omni-Channel

> Partners can launch a Lightning component from the Omni-Channel widget with their own
    additional settings. This Lightning component is shown in the Additional Settings section along
    with other common rep settings.

**Namespace:** `TelephonySettingsComponent`

# Add a Partner Settings UI to Omni-Channel

Partners can launch a Lightning component from the Omni-Channel widget with their own additional settings. This Lightning component is shown in the Additional Settings section along with other common rep settings.

![Parter settings UI](/docs/resources/img/en-us/260.0?doc_id=voice_pt%2Fimages%2Fvoice_pt_partner_settings_ui.png&folder=voice_pt_developer_guide)

This Lightning web component (LWC) can show any available LWC elements, such as radio boxes, checkboxes, comboboxes, input boxes.

To make this feature available, Partners have to provide the fully qualified name of the Lightning component from within Conversation Vendor Info, along with the LWC component in the published package. Salesforce reads the component name from the Conversation Vendor Info and displays the partner component from within the Omni-Channel widget.

To fully integrate the LWC component, partners must provide the mandatory hooks for Save and Cancel. The following diagram illustrates how the LWC component interacts with other components.

![Partner settings UI diagram](/docs/resources/img/en-us/260.0?doc_id=voice_pt%2Fimages%2Fvoice_pt_partner_settings_diagram.png&folder=voice_pt_developer_guide)

In Conversation Vendor Info, set the TelephonySettingsComponent field to {namespace}:{componentName}.

Sample agentConfig.html:

```

```

Sample agentConfig.js:

```

```

## Code Examples

```
<template>
  <div class="slds-p-left_large slds-p-right_large">
    <lightning-input type="text" label="Caller Id" onchange={onCallerIdChange} value={callerId} placeholder="Enter your caller ID">
    </lightning-input>
    <lightning-input type="text" label="Queue Id" onchange={onQueueIdChange} value={queueId} placeholder="Enter your Queue ID">
    </lightning-input>
  </div>
</template>
```

```
import { LightningElement, track, api } from 'lwc';
export default class AgentConfig extends LightningElement {
    @track queueId;
    @track callerId;
    _settings = {};

    onQueueIdChange(event) {
        this.queueId = event.detail.value;
    }

    onCallerIdChange(event) {
        this.callerId = event.detail.value;
    }

    @api
    save() {
        this._settings = {
            queueId: this.queueId,
            callerId: this.callerId
        };
    }

    @api
    cancel() {
        this.queueId = this._settings.queueId;
        this.callerId = this._settings.callerId;
    }
}
```
