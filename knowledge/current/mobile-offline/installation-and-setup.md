---
title: "Installation and Setup"
domain: mobile-offline
topic: installation-and-setup
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:56.526Z
estimatedTokens: 658
keywords: [Installation, Setup, MAGE, sure, environment, meets, requirements]
---

# Installation and Setup

> Before using MAGE, make sure that your environment meets these
    requirements.

# Installation and Setup

Before using MAGE, make sure that your environment meets these requirements.

-   **Operating System**:
    -   macOS for iOS development
    -   Windows/Linux/macOS for Android development
-   **MCP Host**: An AI coding environment compatible with the Model Context Protocol, such as Cursor, Claude Desktop, or Agentforce Vibes.
-   **Salesforce CLI**: The foundational command-line interface must be installed. Download and install the [Salesforce CLI](https://developer.salesforce.com/tools/salesforcecli?ef_id=CjwKCAiA95fLBhBPEiwATXUsxIuqCLRxLMTPPi2GVIwofy2ieGb5BuA2VnKOZS5Kqbu7xpXuacNRpBoC-JsQAvD_BwE:G:s&gclsrc=aw.ds&%7D&pmaxid=&d=701ed00000hxSdrAAE&nc=&nc=701ed00000hxMWoAAM&utm_content=7013y000002ExpYAAS&gad_source=1&gad_campaignid=22912626379&gbraid=0AAAAAD4PnrPJ5sfpIbaD8_XIxSCOS1t-G&gclid=CjwKCAiA95fLBhBPEiwATXUsxIuqCLRxLMTPPi2GVIwofy2ieGb5BuA2VnKOZS5Kqbu7xpXuacNRpBoC-JsQAvD_BwE "HTML (New Window)").
-   **Salesforce Access**: Access to a Salesforce organization.
-   **Native Build Tools**:
    -   iOS: Xcode (for iOS Simulators)
    -   Android: Android Studio/Gradle (for Android Emulators)
        -   Android 15 [SDK](https://developer.android.com/about/versions/15 "HTML (New Window)") (API level 35) or higher
        -   Android 15 [Emulator](https://developer.android.com/about/versions/15/get#on_emulator "HTML (New Window)")
        -   Java 17 ([Azul](https://www.azul.com/downloads/?package=jdk#zulu "HTML (New Window)"))
    -   **Salesforce Connected App**: You need a Client ID and Callback URI to enable OAuth login for your generated app.

1.  Enable the server.

    -   Agentforce Vibes: The MCP server can be enabled with the a4d\_mcp\_settings.json file.
    -   Other MCP Hosts: Make sure that you have [Node.js v22](https://nodejs.org/en/about/previous-releases "HTML (New Window)") installed, so that you can configure the MCP server via the NPM package by using this command: npx -y @salesforce/mobile-native-mcp-server

2.  Verify installation by opening your AI assistant and ensuring the sfmobile-native-project-manager tool is available in your tool inventory. Upon first interaction, the server runs an environment validation to check for required plugins (like sfdx-mobilesdk-plugin) and guides you through installation if they’re missing.
3.  Make sure that your Salesforce org has a Salesforce Connected App, and the environment variables in your configuration:

    -   CONNECTED\_APP\_CONSUMER\_KEY
    -   CONNECTED\_APP\_CALLBACK\_URL
    -   timeout set to 600


Example configuration for MacOS

```

```

Example configuration for Windows

```

```

## Code Examples

```
"magen": {
      "disabled": false,
      "timeout": 600,
      "type": "stdio",
      "command": "npx",
      "args": [
        "@salesforce/mobile-native-mcp-server"
      ],
      "env": {
        "LOG_LEVEL": "debug",
        "CONNECTED_APP_CONSUMER_KEY": "<INSERT KEY>",
        "CONNECTED_APP_CALLBACK_URL": "<INSERT URL>"
      }
    }
```

```
"magen": {
      "disabled": false,
      "timeout": 600,
      "type": "stdio",
      "command": "cmd",
      "args": [
        "/c",
        "npx",
        "@salesforce/mobile-native-mcp-server"
      ],
      "env": {
        "LOG_LEVEL": "debug",
        "CONNECTED_APP_CONSUMER_KEY": "<INSERT KEY>",
        "CONNECTED_APP_CALLBACK_URL": "<INSERT URL>"
      }
    }
```
