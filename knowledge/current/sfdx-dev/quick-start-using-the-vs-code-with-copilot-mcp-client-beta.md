---
title: "Quick Start Using the VS Code With Copilot MCP Client (Beta)"
domain: sfdx-dev
topic: quick-start-using-the-vs-code-with-copilot-mcp-client-beta
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:18.303Z
estimatedTokens: 1281
keywords: [Quick, Start, Code, Copilot, MCP, Client, Beta, started, Salesforce, Server, Visual, Studio, configure, GitHub, natural]
---

# Quick Start Using the VS Code With Copilot MCP Client (Beta)

> Get started with the Salesforce DX MCP Server using Visual Studio Code (VS Code) as the MCP client. After you configure it with the Salesforce DX MCP Server, you then use GitHub Copilot and natural language to easily execute typical Salesforce DX development tasks, such as creating scratch orgs, deploying or retrieving metadata, and viewing org records.

# Quick Start Using the VS Code With Copilot MCP Client (Beta)

Get started with the Salesforce DX MCP Server using Visual Studio Code (VS Code) as the MCP client. After you configure it with the Salesforce DX MCP Server, you then use GitHub Copilot and natural language to easily execute typical Salesforce DX development tasks, such as creating scratch orgs, deploying or retrieving metadata, and viewing org records.

For the best getting-started experience, make sure that you have a standard Salesforce DX environment set up on your computer. In particular:

-   [Install Node.js on your computer.](https://nodejs.org/en) We recommend you use the [Active LTS version](https://nodejs.org/en/about/previous-releases).
-   [Install Salesforce CLI on your computer.](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_setup.meta/sfdx_setup/sfdx_setup_install_cli.htm#sfdx_setup_install_cli)
-   [Install VS Code on your computer.](https://code.visualstudio.com/docs)
-   [Create a Salesforce DX project and open it in VS Code.](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_dev.meta/sfdx_dev/sfdx_dev_ws_create_new.htm) You can also clone an example repo, such as [dreamhouse-lwc](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_dev.meta/sfdx_dev/sfdx_dev_intro_sample_repo.htm), which is a ready-to-use DX project that contains a simple Salesforce application, with metadata and test data.
-   [Authorize at least one development Salesforce org to use with your DX project](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_dev.meta/sfdx_dev/sfdx_dev_auth_web_flow.htm), such as a Trailhead playground, sandbox, scratch org, or Developer Edition org, and set it as your default org.

    If you want to create a scratch org using MCP, then you must also authorize a Dev Hub org.


You also need a [GitHub account](https://github.com/).

Okay, let’s do it!

1.  Create a .vscode/mcp.json file at the root of your DX project and add this JSON:

    ```

    ```

    You can also configure the DX MCP Server globally by editing the VS Code [settings.json](https://code.visualstudio.com/docs/configure/settings#_settings-file-locations) file and adding a similar JSON snippet but contained in an mcp:servers section.

    The \--orgs flag is required and specifies the authorized orgs you're allowing the DX MCP Server to access. The \--toolsets flag specifies the toolsets it should consult when determining the specific tool to run. See [Configure the Salesforce DX MCP Server for Your Environment (Beta)](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_mcp_server.htm#sfdx_dev_mcp_configure_orgs_toolsets "After you’ve added the basic Salesforce DX MCP Server to your MCP client, configure the server for your specific environment by updating the args option with new flags or new values to the flags.") for the available values for the two flags.

2.  Open VS Code, go to **View -> Command Palette** and find and click **MCP: List Servers**.

    ![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=sfdx_dev)

    #### Tip

    You can also get to the command palette by pressing Ctrl+Shift+P (Windows or Linux) or Command-Shift-P (macOS).

3.  Click **Salesforce DX**, then **Start Server**.

    Click **Yes** if you’re asked if the DX MCP Server is trustworthy.

    Check the **Output** tab for the server status and errors. The output also shows information such as the MCP tools and toolsets that were registered, and which MCP tool registration was skipped because they’re not generally available (NON-GA).

    When the DX MCP Server is ready, you see a message like this (your server version might be different):

    ```

    ```

4.  **Run Chat: Open Chat (Agent)** from the command palette to start a new GitHub Copilot chat session. If necessary, you’re asked to log in to GitHub and authorize VS Code to access it.

    Be sure your GitHub Copilot chat window is in Agent mode; if you're in Ask or Edit mode, use the [little drop-down](https://github.blog/ai-and-ml/github-copilot/copilot-ask-edit-and-agent-modes-what-they-do-and-when-to-use-them/) to switch.

5.  In the GitHub Copilot chat window, use natural language to explain what you want to do. The DX MCP Server determines which configured tool to use, and then shows it to you along with other information. Review the chosen tool and parameters, then click **Continue** to run the tool and see the results of your request.

    Try out these sample prompts:

    -   *Do I have any active scratch orgs? What about inactive scratch orgs?*
    -   *Show me all the available information about all my orgs.*
    -   *Show me all the accounts in the org with the alias my-org.*
    -   *Deploy the Apex classes in my DX project to the org with the alias my-org.*
    -   *Retrieve all agents from my org.*

6.  To stop, restart, or view the DX MCP Server configuration, run the **MCP: List Servers** command, click **Salesforce DX**, then click the appropriate option.

#### See Also

-   [*GitHub*: Salesforce DX MCP Server Repository](https://github.com/salesforcecli/mcp)

## Code Examples

```
{
  "servers": {
    "Salesforce DX": {
      "command": "npx",
      "args": ["-y", "@salesforce/mcp@latest", 
               "--orgs", "DEFAULT_TARGET_ORG", 
               "--toolsets", "orgs,metadata,data,users,testing"]
    }
  }
}
```

```
✅ Salesforce MCP Server v0.21.2 running on stdio
```

## Related Topics

- Configure the Salesforce DX MCP Server for Your Environment (Beta) (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_mcp_server.htm)
