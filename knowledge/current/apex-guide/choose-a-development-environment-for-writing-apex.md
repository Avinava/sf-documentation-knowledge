---
title: "Choose a Development Environment for Writing Apex"
domain: apex-guide
topic: choose-a-development-environment-for-writing-apex
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:33.575Z
estimatedTokens: 1363
keywords: [Choose, Development, Environment, Writing, Apex, There, several, environments, developing, code, meets, needs, Agentforce, Developers, Salesforce]
---

# Choose a Development Environment for Writing Apex

> There are several development environments for developing Apex code. Choose the
        environment that meets your needs.

# Choose a Development Environment for Writing Apex

There are several development environments for developing Apex code. Choose the environment that meets your needs.

## Agentforce for Developers

Agentforce for Developers is an AI-powered developer tool that generates Apex code from natural language prompts and automatically suggests code completions as you type. Use Agentforce for Developers to easily create unit test cases for your Apex code and get to the required Apex test coverage.

Agentforce for Developers extension (salesforcedx-einstein-gpt) is a part of the [Salesforce Expanded Pack](https://marketplace.visualstudio.com/items?itemName=salesforce.salesforcedx-vscode-expanded). Agentforce for Developers is enabled by default in VS Code. For more information, see [Set Up Agentforce for Developers](https://developer.salesforce.com/docs/platform/einstein-for-devs/guide/einstein-setup.html).

-   To access Agentforce for Developers from inside an Apex file in the VS Code editor, see [Generate Apex Code](https://developer.salesforce.com/docs/platform/einstein-for-devs/guide/einstein-apex.html).
-   To use AI-based autocomplete to accept suggestions for Apex code as you write it, see [Inline Auto Completion](https://developer.salesforce.com/docs/platform/einstein-for-devs/guide/einstein-inline.html).
-   To use Agentforce for Developers to quickly generate unit tests, see [Test Case Generation](https://developer.salesforce.com/docs/platform/einstein-for-devs/guide/einstein-testcasegen.html).

## Salesforce Extensions for Visual Studio Code and Code Builder

The [Salesforce Extensions for Visual Studio Code and Code Builder](https://developer.salesforce.com/tools/vscode) are tools for developing on the Salesforce platform in the lightweight, extensible VS Code editor. These tools provide features for working with development orgs (scratch orgs, sandboxes, and developer edition orgs), Apex, Lightning components, and Visualforce.

Code Builder is a browser-based version of the desktop experience, with everything installed and configured. It provides all the goodness of the desktop experience, but provides you with the flexibility to work anywhere, from any computer.

## Developer Console

The Developer Console is an integrated development environment (IDE) built into Salesforce. Use it to create, debug, and test Apex classes and triggers.

To open the Developer Console from Lightning Experience: Click the quick access menu (![Gear icon in upper right of Salesforce org](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fapex%2Fimages%2Fquick-access.png&folder=apexcode)), then click **Developer Console**.

To open the Developer Console from Salesforce Classic: Click **Your Name** | **Developer Console**.

The Developer Console supports these tasks:

-   Writing code—You can add code using the source code editor. Also, you can browse packages in your organization.
-   Compiling code—When you save a trigger or class, the code is automatically compiled. Any compilation errors are reported.
-   Debugging—You can view debug logs and set checkpoints that aid in debugging.
-   Testing—You can execute tests of specific test classes or all tests in your organization, and you can view test results. Also, you can inspect code coverage.
-   Checking performance—You can inspect debug logs to locate performance bottlenecks.
-   SOQL queries—You can query data in your organization and view the results using the Query Editor.
-   Color coding and autocomplete—The source code editor uses a color scheme for easier readability of code elements and provides autocompletion for class and method names.

## Salesforce Setup Code Editors

In Salesforce Setup, you can view and edit Apex classes and triggers.

All classes and triggers are compiled when they’re saved, and any syntax errors are flagged. You can’t save your code until it compiles without errors. The Salesforce user interface also numbers the lines in the code, and uses color coding to distinguish different elements, such as comments, keywords, literal strings, and so on.

-   From Setup in the Quick Find box, enter Apex, and select an Apex class or trigger. To edit it, click **Edit** beside the class or trigger name.
-   To create a trigger on an object, from Setup in the Quick Find box, enter Object and click **Object Manager**. Click the object name and click **Triggers**. Click **New** and enter your code.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

#### Note

You can’t use the Salesforce Setup code editors to modify Apex in a Salesforce production org.

## Additional Editors

Alternatively, you can use any text editor, such as Notepad, to write Apex code. Then either copy and paste the code into your application, or use one of the API calls to deploy it.

To develop an Apex IDE of your own, use SOAP API methods for compiling triggers and classes, and executing test methods. Use Metadata API methods for deploying code to production environments. For more information, see [Deploying Apex](atlas.en-us.apexcode.meta/apexcode/apex_deploying.htm "You can't develop Apex in your Salesforce production org. Your development work is done in a sandbox, in a scratch org, or in a Developer Edition org.").

#### See Also

-   [*Salesforce Help*: Find Object Management Settings](https://help.salesforce.com/HTViewHelpDoc?id=extend_click_find_objectmgmt_parent.htm&language=en_US)

## Related Topics

- Deploying Apex (atlas.en-us.apexcode.meta/apexcode/apex_deploying.htm)
