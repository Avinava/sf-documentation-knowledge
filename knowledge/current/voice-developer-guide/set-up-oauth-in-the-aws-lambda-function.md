---
title: "Set Up OAuth in the AWS Lambda Function"
domain: voice-developer-guide
topic: set-up-oauth-in-the-aws-lambda-function
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:21.620Z
estimatedTokens: 2101
keywords: [OAuth, AWS, Lambda, Function, instructions, describe, how, Amazon, Connect, instance]
---

# Set Up OAuth in the AWS Lambda Function

> These instructions describe how to set up OAuth on your Amazon Connect
    instance.

# Set Up OAuth in the AWS Lambda Function

These instructions describe how to set up OAuth on your Amazon Connect instance.

Before you start, open a text file so you can copy some parameter values or keys.

Starting with contact center version 19.0, configuration parameters are stored in the AWS Secrets Manager instead of the SSM Parameter Store. The contact center agnostic configuration values are stored in environment variables. The contact center specific configuration values are stored in the respective Secrets Manager for each contact center.

All the Lambda functions read the configuration parameters from the Secrets Manager. For the contact center versions before 19.0, the Lambda functions continue to read the configuration parameters from the SSM Parameter Store

1.  Log in to the AWS Console > Lambda > Functions. Log in with your root user email which you used to create a contact center during Service Cloud Voice setup. If this is your first login, reset your password.
2.  Select the {Your Contact Center Name}-InvokeSalesforceRestApiFunction Lambda function.
3.  For contact center versions below 19.0, click the Configuration tab and scroll down to **Environment variables**. Some of the variables are already configured for your instance, but you have to set the values for CONSUMER\_KEY\_PARAM\_NAME, PRIVATE\_KEY\_PARAM\_NAME, and SUBJECT parameters.

    ![Environment variables](/docs/resources/img/en-us/260.0?doc_id=images%2Fvoice_lambda_environment_variables.png&folder=voice_developer_guide)

    For contact center versions 19.0 or later, go to Secrets Manager from Services. In the Secrets page, locate your contact center's secret. The secret name is prefixed with callCenterApiName for partner Amazon contact centers or LambdaPrefix for multi-org contact centers. For provisioned contact centers, the secret name is also available in the Lambda functions environment variable. Then, set the CONSUMER\_KEY\_PARAM\_NAME, PRIVATE\_KEY\_PARAM\_NAME, and SUBJECT keys within that secret.

    ![Secrets Manager](/docs/resources/img/en-us/260.0?doc_id=images%2Fvoice_secret_manager.png&folder=voice_developer_guide)

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=voice_developer_guide)

    #### Note

    If you’re testing this functionality in a sandbox org, make sure that the secrets for contact center versions 19.0 or later, and environment variables for contact center versions below 19.0, point to the sandbox domain (or to test.salesforce.com) instead of login.salesforce.com: AUDIENCE, SALESFORCE\_AUTH\_ENDPOINT, SALESFORCE\_REST\_API\_ENDPOINT\_BASE.

    For contact center versions below 19.0, the name of the secret is specified in the Lambda environment variables. Use the secret name to locate the corresponding AWS secret and update the values within the secret to use your sandbox domain.

    1.  Copy the **values** for the CONSUMER\_KEY\_PARAM\_NAME, PRIVATE\_KEY\_PARAM\_NAME keys or parameters and paste them into a text file. For contact center versions 19.0 or later, these values are the names of the keys within a single secret that hold the actual credentials. For contact center versions below 19.0, these values are the names of the SSM parameters that hold the actual credentials.
    2.  For the SUBJECT variable, enter the Salesforce username of the user you want to log in to Salesforce through the Lambda function. The user must have access to the objects that the Lambda function will be executed on.
    3.  In the connected app in Salesforce, check that the user is added to the connected app profile. From **Setup** in your Salesforce org, go to **App Manager**. Open the action menu for the connected app, click **Manage**, and scroll to the bottom of the page to see the profiles. Verify that the **Permitted Users** value is set to "Admin approved users are pre-authorized" for the desired profile. To learn more about OAuth access policies, see [Manage OAuth Access Policies for a Connected App](https://help.salesforce.com/articleView?id=connected_app_manage_oauth.htm&type=5&language=en_US).
4.  For contact center versions below 19.0, in the parameter store, search for the CONSUMER\_KEY\_PARAM\_NAME value and the PRIVATE\_KEY\_PARAM\_NAME value that you copied to the text file.

    For contact center versions 19.0 or later, there are no CONSUMER\_KEY\_PARAM\_NAME and PRIVATE\_KEY\_PARAM\_VALUE secrets, instead these are keys. For example testbyoacvos1-salesforce-rest-api-auth-consumer-key.

    ![Secrets Value](/docs/resources/img/en-us/260.0?doc_id=images%2Fvoice_secret_value.png&folder=voice_developer_guide)

5.  For the Consumer Key, update the value by clicking **Edit** and pasting the value of the consumer key from the connected app into the **Value** field.

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=voice_developer_guide)

    #### Note

    When editing key and value of secrets, use Plaintext mode so that it does not reformat the certificate.

    To update keys in a secret, format the key and then update the key in Secrets Manager.

    1.  To format the multi-line key into a single line, copy the private key in a notepad and append line breaks \\r or run the command in terminal.

        cat <<EOF | awk '{printf "%s\\\\r\\ ", $0}' PASTE YOUR Certificate > EOF

        If you use Windows, you can also run this command to format the key: (Get-Content privateKey.pem | Where-Object {$\_ -ne ""}) -join " " | Set-Content private\_five.key

        Copy the formatted single-line key.

        Multi-line key before formatting:

        ![Key before formatting](/docs/resources/img/en-us/260.0?doc_id=images%2Fvoice_key_multi.png&folder=voice_developer_guide)

        Formatted single-line key:

        ![Key after formatting](/docs/resources/img/en-us/260.0?doc_id=images%2Fvoice_key_format.png&folder=voice_developer_guide)

    2.  In Secrets Manager, select the secret for the contact center.
    3.  Select **Retrieve secret value** and click **Edit**, select the Plaintext view, and paste the formatted single-line key for the appropriate key.
    4.  Save your changes.

    You can also use AWS sdk to update the key in the secret.

    ![Secrets](/docs/resources/img/en-us/260.0?doc_id=images%2Fvoice_secrets.png&folder=voice_developer_guide)

    ![Secrets Value](/docs/resources/img/en-us/260.0?doc_id=images%2Fvoice_secrets_edit.png&folder=voice_developer_guide)

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=voice_developer_guide)

    #### Note

    If you didn’t already copy the Consumer Key from your app, you can get that value from your Salesforce org. From **Setup**, enter Apps in the Quick Find box, and select **App Manager**. Click **View** in the dropdown menu for your connected app. **Copy** the value for the Consumer Key from the connected app page.

    ![Connected app consumer key](/docs/resources/img/en-us/260.0?doc_id=images%2Fvoice_lambda_connected_app_consumer_key.png&folder=voice_developer_guide)

6.  Save your changes.
7.  Update the value of the private key by clicking Edit and pasting the private key into the **Value** field. For the private key, you need [the key that you previously used to sign the self-signed certificate](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_dev.meta/sfdx_dev/sfdx_dev_auth_key_and_cert.htm). By default, this key is stored locally to a file named server.key.

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=voice_developer_guide)

    #### Note

    The private key isn’t the same as the consumer secret, although both are generated by the same key. The private key begins with “\-----BEGIN RSA PRIVATE KEY-----” and ends with “\-----END RSA PRIVATE KEY-----”. Be sure to include that BEGIN and END text as part of the key value.

8.  Save your changes.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=voice_developer_guide)

#### Note

It can take a few minutes before the changes are applied to the connected app.

#### See Also

-   [*Salesforce Help:* Create a Private Key and Self-Signed Digital Certificate](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_dev.meta/sfdx_dev/sfdx_dev_auth_key_and_cert.htm "Salesforce Help: Create a Private Key and Self-Signed Digital
    Certificate - HTML (New Window)")
