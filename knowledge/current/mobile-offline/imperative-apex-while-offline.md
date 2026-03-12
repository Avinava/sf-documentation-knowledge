---
title: "Imperative Apex While Offline"
domain: mobile-offline
topic: imperative-apex-while-offline
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:56.386Z
estimatedTokens: 137
keywords: [Imperative, Apex, Offline, calls, always, fail, client, device, offline-enabled, mobile, app, it’s, essential, handle, possibility]
---

# Imperative Apex While Offline

> Imperative Apex calls always fail when the client device is offline. When using
  imperative Apex in an offline-enabled mobile app, it’s essential to handle the possibility of a
  network failure error.

# Imperative Apex While Offline

**Imperative Apex calls always fail when the client device is offline.** When using imperative Apex in an offline-enabled mobile app, it’s essential to handle the possibility of a network failure error.

Treat errors as a normal, expected outcome, rather than a failure condition. Provide appropriate feedback to the user, and suggest alternative behavior, rather than treating the situation as unexpected.

```

```

Offline-savvy components *expect* to be offline at times, and know what to do when that happens.

## Code Examples

```
// apexImperativeMethod.js
import { LightningElement, track } from 'lwc';
import getContactList from '@salesforce/apex/ContactController.getContactList';

export default class ApexImperativeMethod extends LightningElement {
    @track contacts;
    @track error;

    handleLoad() {
        getContactList()
            .then(result => {
                this.contacts = result;
            })
            .catch(error => {
                this.error = error;
            });
    }
}
```
