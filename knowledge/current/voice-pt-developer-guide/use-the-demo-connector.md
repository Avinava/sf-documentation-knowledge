---
title: "Use the Demo Connector"
domain: voice-pt-developer-guide
topic: use-the-demo-connector
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:22.014Z
estimatedTokens: 692
keywords: [Demo, Connector, sample, application, partner, telephony, systems, integrate, Service, Cloud, Voice, demonstrates, optimal, implementation, group]
---

# Use the Demo Connector

> The demo connector is a sample application for partner telephony systems that integrate
    with Service Cloud Voice. It demonstrates an optimal Voice implementation based on a group of
    telephony API mocks. It also includes a voice call simulation tool that you can use to test call
    actions such as making and answering calls and using phone controls.

# Use the Demo Connector

The demo connector is a sample application for partner telephony systems that integrate with Service Cloud Voice. It demonstrates an optimal Voice implementation based on a group of telephony API mocks. It also includes a voice call simulation tool that you can use to test call actions such as making and answering calls and using phone controls.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=voice_pt_developer_guide)

#### Important

Use the demo connector as a reference when developing your custom integration code. Salesforce provides support for features in the demo connector, but we can’t debug or troubleshoot custom connector code.

## Start the demo connector

The byo-demo-connector is provided as part of the [Demo Connector](https://github.com/salesforce-misc/byo-demo-connector) in GitHub.

1.  Clone the git repo, and install the NPM dependencies.

    ```

    ```

2.  Add a private key generated from [Generate a Self-Signed Certificate with OpenSSL](atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_generate_certificate.htm "Use OpenSSL to generate an RSA private key and certificate.").

    ```

    ```

3.  Launch the tool.

    ```

    ```


By default, the web server runs in SSL on port 8080. The **adapterUrl** in your contact center points to this web server (for example, https://www.myTelephonyDemo.com:8080).

The previous command also starts the SCV REST APIs connector on default port 3030. It’s used for creating voice calls, transcription, and recording.

You can run them on separate terminals using the following commands.

```

```

## Verify That the Connector is Loaded

Test that the connector is working.

1.  The byo-demo-connector app uses a self-signed certificate, so you must get your web browser to accept a self-signed certificate.
    1.  Open the byo-demo-connector app URL (for example, https://serverURL:8080/remote.html) in a separate tab.
    2.  Click through any warnings for untrusted certificates.
2.  Log in to Salesforce as one of the users that were added to the contact center.
3.  Log in to the Omni-Channel utility and change the rep status to **Available**.![Rep call controls](/docs/resources/img/en-us/260.0?doc_id=voice_pt%2Fimages%2Fcall_controls.png&folder=voice_pt_developer_guide)Open the Browser Debugger and make sure that you see messages from the connector. The messages start with \[sdk\] or \[connector\].![Browser debugger](/docs/resources/img/en-us/260.0?doc_id=voice_pt%2Fimages%2Fbrowser_debugger.png&folder=voice_pt_developer_guide)

#### See Also

-   [*GitHub:* Demo Connector](https://github.com/salesforce-misc/byo-demo-connector "GitHub: Demo Connector - HTML (New Window)")

## Code Examples

```
$ git clone git@github.com:salesforce-misc/byo-demo-connector.git
$ cd byo-demo-connector
$ npm install
```

```
{byo-demo-connector}
                |__src
                    |__server
                            |__private.key
```

```
$ npm start
```

```
$ npm run client
$ npm run server
```

## Related Topics

- Generate a Self-Signed Certificate with OpenSSL (atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_generate_certificate.htm)
