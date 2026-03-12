---
title: "Get Started by Creating a New DX Project"
domain: sfdx-dev
topic: get-started-by-creating-a-new-dx-project
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:18.275Z
estimatedTokens: 5907
keywords: [Started, Creating, New, Project, Let's, say, you're, Salesforce, developer, creates, awesome, org, customizations, declarative, tools]
---

# Get Started by Creating a New DX Project

> Let's say you're a Salesforce developer who creates awesome org customizations using
    declarative tools and builders, such as Flow and Lightning App Builder. You've heard about
    source-driven development, and want to move in that direction. You therefore need to extract
    your customizations from your org and store them in a source control system, such as GitHub,
    which then becomes your new source of truth. But you're not quite sure how it all works and
    would like to get some hands on practice using simple use cases. Keep reading!

# Get Started by Creating a New DX Project

Let's say you're a Salesforce developer who creates awesome org customizations using declarative tools and builders, such as Flow and Lightning App Builder. You've heard about source-driven development, and want to move in that direction. You therefore need to extract your customizations from your org and store them in a source control system, such as GitHub, which then becomes your new source of truth. But you're not quite sure how it all works and would like to get some hands on practice using simple use cases. Keep reading!

This tutorial starts completely from scratch and shows you how to create simple artifacts, such as Apex classes and LWC components, and then how to sync them between your org and your local project on your laptop. Another tutorial to help you learn about source-driven development is [Get Started by Using a Sample Repo](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_intro_sample_repo.htm "The quickest way to get going with Salesforce DX tooling is to clone the dreamhouse-lwc GitHub repo. Use its configuration files and Salesforce application to try some commonly used Salesforce CLI commands. In addition to source code for the application, the repo includes sample data and Apex tests."), which is also hands-on but provides a ready-made application that's already in a GitHub repo. Both tutorials are a lot of fun.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=sfdx_dev)

#### Note

We highly recommend that you use a Developer Edition org to simulate your production org, and scratch orgs for your development work. This tutorial shows you how to get set up. This way, you don’t mess up your developer sandbox with artifacts you’re just playing with.

## Get an Org to Play With and Set It as Your Dev Hub

Before you do anything, you need a Salesforce org to play with and designate as your Dev Hub, which is required when working with Salesforce DX. We don’t recommend using your production org.

If you don’t currently have an org in which you can play in, here are some options:

-   Sign up for a free Developer Edition org [here](https://developer.salesforce.com/signup). Remember your username and password!
-   Create a [free Trailhead playground](https://trailhead.salesforce.com/content/learn/modules/trailhead_playground_management) (also referred to as a Hands-on Org), which is just a Developer Edition org that’s linked to your Trailhead account. Be sure you follow [these instructions](https://trailhead.salesforce.com/content/learn/modules/trailhead_playground_management/get-your-trailhead-playground-username-and-password) to get the username and password of your org.

Then follow these steps.

1.  Log in to your org from your browser by navigating to [login.salesforce.com](http://login.salesforce.com) and enter your username and password.
2.  In the top-right corner, click the gear icon and then **Setup**.

    ![Salesforce UI showing gear box and setup highlighted.](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fsfdx_dev%2Fimages%2Fsfdx_gs_setup.png&folder=sfdx_dev)

3.  In the Quick Find box on the left, enter Dev Hub, then click **Dev Hub**.
4.  Click **Enable Dev Hub**.

    ![Dev Hub Setup page with Enable Dev Hub highlighted..](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fsfdx_dev%2Fimages%2Fsfdx_gs_dev_hub.png&folder=sfdx_dev)


**Read more about it:**

-   [Select and Enable a Dev Hub Org](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_dev.meta/sfdx_dev/sfdx_setup_enable_devhub.htm)

## Install the Salesforce Platform Development Tools

Now set up your local computer so you can start using the Platform development tools, Salesforce CLI and Salesforce Extensions for Visual Studio Code (VS Code).

If you’re not allowed to install tools on your computer, you can use Agentforce Vibes IDE which contains all these tools in a Web browser. In this document we show only Salesforce CLI and VS Code though.

1.  Install Salesforce CLI on your computer.

    **Windows:**

    1.  Download the [.exe](https://developer.salesforce.com/tools/salesforcecli) file to your computer.
    2.  Open Windows explorer and execute the downloaded \*.exe file by double-clicking it and answering all the prompts.

    **macOS:**

    1.  Download the [\*.pkg](https://developer.salesforce.com/tools/salesforcecli) file to your computer.
    2.  Open Finder and execute the downloaded \*.pkg file file by double-clicking it and answering all the prompts.

2.  Open a command prompt (Windows) or terminal (macOS), and then run this CLI command to make sure Salesforce CLI is installed correctly:

    ```

    ```

    You see something like @salesforce/cli/2.98.6 darwin-arm64 node-v22.17.0.

3.  [Install Visual Studio Code on your computer.](https://code.visualstudio.com/)
4.  [Install the Salesforce Extensions into VS Code.](https://marketplace.visualstudio.com/items?itemName=salesforce.salesforcedx-vscode)

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=sfdx_dev)

#### Tip

If Node.js is installed on your computer and you prefer using npm to install applications, run this command to install Salesforce CLI

```

```

**Read more about it:**

-   [Agentforce Vibes IDE Overview](https://developer.salesforce.com/tools/vscode/en/codebuilder/about)
-   [Salesforce CLI: Quick Start](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_setup.meta/sfdx_setup/sfdx_setup_intro.htm)
-   [Salesforce Extensions for Visual Studio Code](https://developer.salesforce.com/docs/platform/sfvscode-extensions/guide)

## Create a Salesforce DX Project

Salesforce DX projects provide a structure for your org’s metadata (such as Apex code and org configuration), org templates, sample data, and all your team’s tests. To bring consistency to your team’s development processes, store project metadata in a source control system (SCS), such as GitHub. Let’s create a project and take a brief look at the default new files.

1.  In your command prompt (Windows) or terminal (macOS), change to a directory on your computer where you want to create the DX project. For example, on macOS:

    ```

    ```

2.  Create a Salesforce DX project called mydxproject by running this command:

    ```

    ```

3.  Change to the directory that was created.

    ```

    ```


Here’s some information about the most interesting files and subdirectories in your new DX project:

-   sfdx-project.json: Main configuration file for your Salesforce DX project.
-   config/project-scratch-def.json: Definition file for creating scratch orgs.
-   .forceignore: File that specifies the source files you want to exclude when synchronizing metadata between your local project and org. If you’re familiar with Git, you can see that the file is very similar to the .gitignore file.
-   force-app: Directory that contains source files that represent metadata from your org. The directory doesn’t yet contain any files, but we’ll add some later!

**Read more about it:**

-   [Create a Salesforce DX Project](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_dev.meta/sfdx_dev/sfdx_dev_ws_create_new.htm)
-   [Salesforce DX Project Configuration](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_dev.meta/sfdx_dev/sfdx_dev_ws_config.htm)

## Authorize Your Dev Hub and Create a Scratch Org

Remember when you previously created a Dev Edition or Trailhead Playground org to play with and set it as your Dev Hub? You now authorize it locally so you can use it with your Salesforce DX project. And then you can create a scratch org, which you use for development.

1.  From your command prompt or terminal window, run this CLI command:

    ```

    ```

    The \--set-default-dev-hub and \--alias flags declare this Dev Hub org as your default Dev Hub org and give it an alias. Later you see how specifying these flags now makes other CLI commands easier to use.

2.  Log in to the org using your username and password in the window that pops up, just like you log into any Salesforce org.

    But wait, didn’t you already log into this org? Yes, you did! But this time you’re logging into it via the org login web CLI command, which authorizes the org to be used by your local DX project. After you’re connected, you don’t have to keep logging into the org when you run subsequent CLI commands.

3.  Click Allow in the browser window that opens and asks if you allow access to the org.

    ![Setup page for allowing the org to be authorized by the CLI.](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fsfdx_dev%2Fimages%2Fsfdx_gs_allow.png&folder=sfdx_dev)

    You can close the browser window because you’re all done with it.

    Back in your command prompt or terminal, you should see output like this, which confirms that you successfully authorized the org:

    Successfully authorized joe@creative-fox-gw7irx.com with org ID 00Daj123457MzBEAU.

4.  In your command prompt or terminal, run this command to see the org you just authorized, along with additional information about it, such as its org ID and Connected status.

    ```

    ```

    The little tree emoji (🌳) to the left indicates that it’s your default Dev Hub org.

5.  Run this command to create a scratch org using the default definition file that was created in the Salesforce DX project:

    ```

    ```

    Be sure you run the command from your main DX project directory, which in our example is /Users/juliet/sfdx/mydxproject.

    As the command runs, the output tells you what’s happening in the background as Salesforce creates the scratch org.

    Similar to when you authorized the Dev Hub org, the \--set-default and \--alias flags set the scratch org as your default org and give it an alias. The scratch org creation process requires a Dev Hub, but because you previously set the one you authorized as your default, you don’t need to specify it to the org create scratch command. Otherwise you must use the \--target-dev-hub flag.

    You see this message when the scratch org creation is finished:

    ```

    ```

6.  Run this command again to see the new scratch org listed in the list of authorized orgs:

    ```

    ```

    The little leaf emoji (🍁) to the left indicates that it’s your default org. Run this command to see details about your new org:

    ```

    ```


Good job! You’re now ready to do some development work using your new scratch org.

**Read more about it:**

-   [Authorize an Org Using a Browser](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_dev.meta/sfdx_dev/sfdx_dev_auth_web_flow.htm)
-   [Authorization Information for an Org](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_dev.meta/sfdx_dev/sfdx_dev_auth_view_info.htm)
-   [Reference documentation for the “org” CLI commands](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_org_commands_unified.htm)
-   [Create Scratch Orgs](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_create.htm)

## Make a Change in Your Scratch Org And Retrieve It to Your Project

If you’re a Salesforce admin, you’re probably familiar with customizing an org using tools such as Setup and Object Manager. You’re now going to use these familiar tools to make a simple change in your new scratch org: add a custom field to the existing Account object. The details don’t matter, you simply want to make any change so you can then retrieve its associated metadata into your project.

We’re also going to give VS Code a whirl. Most developers prefer using an integrated development environment (IDE) and VS Code is optimized for working on the Salesforce Platform.

We don’t go into details about how to use VS Code, which can do all kinds of amazing things. Check out [this Trailhead module](https://trailhead.salesforce.com/content/learn/projects/quickstart-vscode-salesforce) for more information. But we show you a few basics.

1.  From your open command prompt or terminal, run this command to open your scratch org in a browser:

    ```

    ```

    Hold on, how did the CLI command know which org to open? Easy: when you created the scratch org, you specified that it’s your default org. If you want to open a different org, or be explicit about the default org, you use the \--target-org flag and pass it a username or alias. For example:

    ```

    ```

2.  In the browser that opens, use Object Manager to create a custom field with label **Account Status** on the Account object. Choose any properties about the field that you want, it doesn’t matter for the purposes of this exercise.

    Never done this task before? Follow [this Trailhead Quick Look](https://trailhead.salesforce.com/content/learn/modules/custom-fields-quick-look) for details.

    When you’re finished, you see something like this:

    ![Salesforce UI showing Object Manager open to Account with a new custom field called Account Status.](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fsfdx_dev%2Fimages%2Fsfdx_gs_account.png&folder=sfdx_dev)

3.  Open VS Code. An easy way is to run this command from your open command prompt or terminal; the application opens right up:

    ```

    ```

4.  Click **File -> Open Folder ...**, navigate to your Salesforce DX project folder (which is /Users/juliet/sfdx/mydxproject in our example), and click **Open**.
5.  On the left, under **MYDXPROJECT**, click the .forceignore file, which is in the root of your Salesforce DX project directory. The contents of the file appears in a tab on the right. You see something like this:

    ![VS Code showing the open mydxproject project, with the .forceignore file open in editor.](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fsfdx_dev%2Fimages%2Fsfdx_gs_vscode.png&folder=sfdx_dev)

    You use the .forceignore file to ignore files or directories when you run the CLI commands to deploy or retrieve source.

6.  Click inside the .forceignore tab and add these two lines at the end of the file after \*\*/\_\_tests\_\_/\*\*:

    ```

    ```

    The reason we’re excluding Profiles from the source that’s deployed and retrieved is that they can be finicky and it’s easier for now to just not worry about them. You also get some practice using the .forceignore file!

7.  Click **File -> Save**.
8.  In the VS Code terminal, run this command to retrieve the customization you just made:

    ```

    ```

    If you don’t have a terminal window open in VS Code, click **View -> Terminal**.

    The retrieve might take a minute or two. But when it’s finished, you see something like this:

    ![VS Code showing the results of retrieving metadata from scratch org in the terminal.](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fsfdx_dev%2Fimages%2Fsfdx_gs_vscode_retrieve.png&folder=sfdx_dev)

    Similar to when you previously opened the scratch org, this CLI command knows to retrieve changed or new metadata from the scratch org because you set it as your default org.

    The command output shows the metadata that it retrieved. You should see your new Account Status custom field. You probably also see other retrieved metadata, such as Layouts. That’s normal.

    The Path column shows where the new metadata files are located in your project. Take a look at them if you want!


What you just did was pretty amazing; you used the Object Manager UI to customize the scratch org and then retrieved that customization (as metadata source files) to your DX project as local source files.

**Read more about it:**

-   [Develop with Ease with Salesforce Extensions for VS Code](https://developer.salesforce.com/tools/vscode)
-   [How to Exclude Source When Syncing](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_dev.meta/sfdx_dev/sfdx_dev_exclude_source.htm)
-   [Retrieve Metadata from Your Scratch Org](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_dev.meta/sfdx_dev/sfdx_dev_pull_md_from_scratch_org.htm)
-   [Reference Documentation for the project CLI Commands](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_project_commands_unified.htm)

## Create an Apex Class and Deploy it To the Scratch Org

But wait, there’s more! Let’s say you want to create an Apex class in your scratch org. You can use Setup in the Salesforce UI to create Apex classes, but the tool is limited, so let’s instead use VS Code, which we introduced in the previous section.

1.  From VS Code, click **View -> Command Palette** and run **SFDX:Create Apex Class**.

    Enter MyApexClass for the Apex class name and store it in the default local source directory (force-app/main/default/classes).

    A new tab opens on the right with initial code for MyApexClass, which is stored in a file called MyApexClass.cls. The command also created another file: MyApexClass.cls-meta.xml.

2.  (Optional) If you’re familiar with the Apex programming language, add some code to the new class. But you can also leave it empty for now; all we need for this exercise are the metadata files that correspond to the Apex class.
3.  Click **File -> Save** to save the new Apex class.
4.  From the command palette, run **SFDX: Push Source to Default Org**. (Deploying is sometimes also called pushing.)

    You should see a notification like this when it’s complete:

    ![VS Code notification showing deployment successful.](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fsfdx_dev%2Fimages%2Fsfdx_gs_vscode_success.png&folder=sfdx_dev)

    Also check your output window (click **View -> Output** if you don’t see it). You see information about the deploy, including the files that were actually deployed:

    ```

    ```

5.  Go back to the browser window that’s open to your scratch org. If you closed the browser window, you can run this command again from the VS Code terminal:

    ```

    ```

6.  In the Setup Quick Find box, enter Apex, then click **Apex Classes**. You should see the MyApexClass Apex class you just created, but now it’s also in your scratch org. Pretty cool, huh!
7.  For fun, let’s do one last thing: edit the Apex class in Setup. For example, add this comment to the top of the file:

    ```

    ```

8.  In VS Code, go to the command palette and run **SFDX: Pull Source from Default Org**.
9.  When the retrieve (also sometimes called a pull) finishes, refresh the MyApexClass Apex class in VS Code if necessary; you should see the new comment that you made in Setup.

This section gave you just a taste of using VS Code to develop Apex classes.

**Read more about it:**

-   [Apex Quick Start](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_qs_HelloWorld.htm)
-   [Develop with Ease with Salesforce Extensions for VS Code](https://developer.salesforce.com/tools/vscode)

## Create a Lightning Web Component and Deploy it to the Scratch Org

Writing an Apex class was fun, so let’s use VS Code to create a Lightning Web Component (LWC) in your DX project and then deploy it to your scratch org.

1.  From VS Code, click **View -> Command Palette** and run **SFDX:Create Lightning Web Component**.

    Enter helloworld for the filename and store it in the default directory (force-app/main/default/lwc).

    A new tab opens on the right with initial code for the new LWC component, which is stored in a file called helloworld.js. The command also creats two other associated files (helloworld.html and helloworld.js-meta.xml) and a test.

2.  (Optional) If you’re familiar with creating Lightning Web Components, add some code to any of the helloworld files. But you can also leave them empty for now; all we need for this exercise are metadata files associated with the LWC component.
3.  Click **File -> Save** to save the new LWC component.
4.  From the command palette, run **SFDX: Push Source to Default Org**. Similar to when you deployed the Apex class, you see a notification and information in the Output window.

Optionally run through the same steps described in the Apex section, such as opening your scratch org, viewing your new helloworld component in Setup (search for **Lightning Components** in the Quick Find box), making a change, and then retrieving the change back to your project.

**Read more about it:**

-   [Get Started with Lightning Web Components](https://developer.salesforce.com/docs/platform/lwc/guide/get-started-introduction.html)
-   [Develop with Ease with Salesforce Extensions for VS Code](https://developer.salesforce.com/tools/vscode)

## Deploy All Customizations To a Sandbox

You just completed all this development work in a scratch org, but at some point you probably want to deploy everything to a sandbox for further testing, and then eventually deploy to your production org.

Let’s simulate some of this process by deploying the changes you made (a new custom field, a new Apex class, and a new LWC component) to your Dev Hub org, which we’ll pretend is the sandbox that you use for testing changes. This time we run CLI commands from a command prompt or terminal, rather than use the VS Code commands.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=sfdx_dev)

#### Important

There’s a lot more involved in rigorous DevOps. This Getting Started doc simply gives you a taste of what you can do with Salesforce CLI and VS Code extensions around org metadata and scratch orgs.

1.  From the command prompt (Windows) or terminal (macOS) that’s open in your Salesforce DX project, run this command to deploy your changes to your Dev Hub.

    ```

    ```

    The \--source-dir flag specifies exactly what you want to deploy, which is all the metadata that’s in the force-app package directory.

    You see something like this:

    ```

    ```

2.  Open the Dev Hub org in a browser window:

    ```

    ```

    Use Object Manager and Setup to check that the new custom field (Account.Account\_Status), Apex class (MyApexClass), and LWC component (helloworld) exist in the org.


Wow, you just created and moved lots of metadata around! Awesome sauce.

**Read more about it:**

-   [Deploy Source From Your Project to the Scratch Org](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_dev.meta/sfdx_dev/sfdx_dev_push_md_to_)
-   [Reference Documentation for the project CLI Commands](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_project_commands_unified.htm)

## Add Project Files to Your VCS

A typical next step is to add your Salesforce DX project's local files, which represent Salesforce customizations, to a version control system like GitHub. You can then share the DX project, use it to create a scratch org that mirrors your production org's customizations, version your code updates, test updates using a continuous integration (CI) system, and generally adhere to modern development practices.

However, that step is beyond the scope of this topic, but check out the [Git and GitHub Basics](https://trailhead.salesforce.com/content/learn/modules/git-and-git-hub-basics) Trailhead module for more information.

## Next Steps

We hope this document gets you started using Salesforce DX. Here are a few more links to help you as you embark on this exciting journey.

-   [Get Started by Using a Sample Repo](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_dev.meta/sfdx_dev/sfdx_dev_intro_sample_repo.htm)
-   [Salesforce Developers Sample Apps](https://github.com/trailheadapps/)

## Code Examples

```
npm install -g @salesforce/cli
```

```
cd /Users/juliet/sfdx
```

```
sf project generate --name mydxproject
```

```
cd mydxproject
```

```
sf org login web --set-default-dev-hub --alias DevHub
```

## Related Topics

- Get Started by Using a Sample Repo (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_intro_sample_repo.htm)
