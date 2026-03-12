---
title: "Connect CircleCI to Your DevHub"
domain: sfdx-dev
topic: connect-circleci-to-your-devhub
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:18.121Z
estimatedTokens: 850
keywords: [Connect, CircleCI, DevHub, Authorize, push, content, Dev, Hub, org, via, connected, app]
---

# Connect CircleCI to Your DevHub

> Authorize CircleCI to push content to your Dev Hub org via a connected app.

# Connect CircleCI to Your DevHub

Authorize CircleCI to push content to your Dev Hub org via a connected app.

1.  Make sure that you have Salesforce CLI installed. Check by running sf version and confirm that you see version information. If you don't have it installed, see [Install Salesforce CLI](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_setup.meta/sfdx_setup/sfdx_setup_install_cli.htm#sfdx_setup_install_cli "HTML (New Window)").
2.  Confirm you can perform a JWT-based authorization from the directory containing your server.key file. Run the following command from the directory containing your server.key (replace <your\_consumer\_key> and <your\_username> values where indicated).

    ```

    ```

3.  [Fork](http://help.github.com/fork-a-repo/ "HTML (New Window)") the [sfdx-circleci repo](https://github.com/forcedotcom/sfdx-circleci "HTML (New Window)") into your GitHub account using the **Fork** link at the top of the page.
4.  Create a local directory for this project and clone your forked repo locally into the new directory. Replace <git\_username> with your own GitHub username.

    ```

    ```

5.  Retrieve the generated consumer key from your JWT-Based Authorization connected app. From Setup, in the Quick Find box, enter App, and then select **App Manager**. Select **View** in the row-menu next to the connected app.
6.  In the CircleCI UI, you see a project named sfdx-circleci. In the project settings, store the consumer key in a CircleCI environment variable named HUB\_CONSUMER\_KEY. For more information, see the CircleCI documentation [Setting an Environment Variable in a Project](https://circleci.com/docs/env-vars/#setting-an-environment-variable-in-a-project "HTML (New Window)").
7.  Store the username that you use to access your Dev Hub in a CircleCI environment variable named HUB\_SFDX\_USER using the CircleCI UI.
8.  Store the key and iv values from Encrypt Your Server Key in CircleCI environment variables named DECRYPTION\_KEYand DECRYPTION\_IV, respectively. When you finish setting the environment variables, your project screen looks like the following image.

    ![CircleCI project environment variables example.](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fsfdx_dev%2Fimages%2Fcircle_ci_env.png&folder=sfdx_dev)

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=sfdx_dev)

    #### Note

    In the directory containing your server.key file, use the command rm server.key to remove the server.key. Never store keys or certificates in a public place.


You’re ready to go! Now when you commit and push a change, your change kicks off a CircleCI build.

-   Contribute to the repository – If you find any issues or opportunities for improving this repository, fix them! Feel free to contribute to this project, [fork](http://help.github.com/fork-a-repo/ "HTML (New Window)") this repository, and then change the content. After you make your changes, share them with the community by sending a pull request. See [How to send pull requests](http://help.github.com/send-pull-requests/ "HTML (New Window)") for more information about contributing to GitHub projects.
-   Report issues – If you find any issues with this demo that you can't fix, feel free to report them in the [issues](https://github.com/forcedotcom/sfdx-circleci/issues "HTML (New Window)") section of this repository.

## Code Examples

```
sf org login jwt --client-id <your_consumer_key> --jwt-key-file server.key --username <your_username> --set-default-dev-hub
```

```
git clone https://github.com/<git_username>/sfdx-circleci.git
```
