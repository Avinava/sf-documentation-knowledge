---
title: "Replace Strings in Code Before Deploying or Packaging"
domain: sfdx-dev
topic: replace-strings-in-code-before-deploying-or-packaging
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:36:18.977Z
estimatedTokens: 2523
keywords: [Replace, Strings, Code, Deploying, Packaging, Automatically, metadata, source, files, specific, right, deploy, org, package, version]
---

# Replace Strings in Code Before Deploying or Packaging

> Automatically replace strings in your metadata source files with specific values right
    before you deploy the files to an org or create a package version.

# Replace Strings in Code Before Deploying or Packaging

Automatically replace strings in your metadata source files with specific values right before you deploy the files to an org or create a package version.

These sample use cases describe scenarios for using string replacement:

-   A NamedCredential contains an endpoint that you use for testing. But when you deploy the source to your production org, you want to specify a different endpoint.
-   An ExternalDataSource contains a password that you don’t want to store in your repository, but you’re required to deploy the password along with your metadata.
-   You deploy near-identical code to multiple orgs. You want to conditionally swap out some values depending on which org you’re deploying to.

For the project deploy start command, string replacement occurs when source-formatted files are converted to metadata API format, and then a ZIP file is created and deployed to the org. It also occurs when you run the package version create command, which converts source files as part of the package creation process. The changes that result from string replacement are never written to your project source; they apply only to the deployed or packaged files.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=sfdx_dev)

#### Note

For simplicity, the rest of this topic assumes that you’re using string replacement before deploying to your org, but the same ideas also apply to creating a package version.

## Configure String Replacement

Configure string replacement by adding a replacements property to your sfdx-project.json file. The property accepts multiple entries that consist of keys that define the:

-   Source file or files that contain the string to be replaced.
-   The string to be replaced.
-   The replacement value.

To see how string replacements work, let’s look at an example; see more examples later in this topic.

This sample sfdx-project.json specifies that when the file force-app/main/default/classes/myClass.cls is deployed, all occurrences of the string replaceMe are replaced with the value of the THE\_REPLACEMENT environment variable:

```

```

You can specify these keys in the replacements property.

Location of Files

One of the following properties is required:

-   filename: Single file that contains the string to be replaced.
-   glob: Collection of files that contain the string to be replaced. Example: \*\*/classes/\*.cls.

String to be Replaced

One of the following properties is required:

-   stringToReplace: The string to be replaced.
-   regexToReplace: A regular expression (regex) that specifies a string pattern to be replaced.

Replacement Value

One of the following properties is required:

-   replaceWithEnv: Specifies that the string is replaced with the value of the specified environment variable.
-   replaceWithFile: Specifies that the string is replaced with the contents of the specified file.

Conditional Processing

These properties are optional:

-   replaceWhenEnv: Specifies that a string replacement occur only when a specific environment variable is set to a specific value. Use the property env to specify the environment variable and the property value to specify the value that triggers the string replacement.
-   allowUnsetEnvVariable: Boolean property used with the replaceWithEnv property. When set to true, specifies that if the replaceWithEnv environment variable isn’t set, then remove the replacement string from the file before deploying. In other words, replace it with nothing. When set to false (the default value), you get an error when the replaceWithEnv environment variable isn’t set.

Follow these syntax rules:

-   Always use forward slashes for directories (/), even on Windows.
-   Both JSON and regular expressions use the backslash (\\) as an escape character. As a result, when you use a regular expression to match a dot, which requires escaping, you must use *two* backslashes for the regexToReplace value:

    ```

    ```

    Similarly, to match a single backslash, you must specify three of them.

    ```

    ```


## Examples

This example is similar to the previous example but shows how to configure string replacement for two files:

```

```

This example shows how to specify that the string replacement occur only if an environment variable called DEPLOY\_DESTINATION exists and it has a value of PROD.

```

```

In this example, if the environment variable SOME\_ENV\_THAT\_CAN\_BE\_BLANK isn’t set, the string myNS\_\_ in the myClass.cls file is removed when the file is deployed. If the environment variable is set to a value, then that value replaces the myNS\_\_ string.

```

```

This example specifies that when the Apex class files in the force-app/main/default directory are deployed, all occurrences of the string replaceMe are replaced with the contents of the file replacementFiles/copyright.txt.

```

```

Use a regular expression to specify a search pattern for text rather than the literal text. For example, Apex class XML files always contain an <apiVersion> element that specifies the Salesforce API version, as shown in this snippet.

```

```

Let’s say you want to test your Apex classes on a more recent API version before you actually update all your classes. This example shows how to use a regular expression to search for the <apiVersion> element. At deploy, the element is replaced with a specific string, such as <apiVersion>58.0</apiVersion>, which is contained in the replacementFiles/latest-api-version.txt file.

```

```

## Tips and Tricks

-   (macOS or Linux only) When using the replaceWithEnv or replaceWhenEnv properties, you can specify that the environment variables apply to a single command by prepending the variables before the command execution. For example:

    ```

    ```

    ![Warning](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_warning.png&folder=sfdx_dev)

    #### Warning

    Be careful when setting passwords or secrets this way, because they show up in your terminal history.

-   If you’ve configured many string replacements, and are finding it difficult to manage, check out open-source tools that load the contents of one or more files to your environment, such as [dotenv-cli](https://github.com/entropitor/dotenv-cli). In this example, environment variables configured in two local .env files are loaded before the project deploy start command execution:

    ```

    ```

    ![Warning](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_warning.png&folder=sfdx_dev)

    #### Warning

    Don’t commit passwords or secrets in .env files.

-   If you specify \--json for project deploy start, the JSON output includes a replacements property that lists the affected files and the string that was replaced. If you specify \--json and \--concise, the JSON output doesn’t include the replacements property.

    To view string replacement information in the project deploy start human-readable output, specify \--verbose.

-   Many of the string replacement use cases and examples in this topic use environment variables. How to set an environment variable to the required value depends on your operating system, and is beyond the scope of this document. But for some hints, see the introduction of the [Salesforce CLI Environment Variables](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_setup.meta/sfdx_setup/sfdx_dev_cli_env_variables.htm) topic in the Salesforce CLI Setup Guide.

## Considerations and Limitations

-   If you configure multiple string replacements in multiple files, the performance of the deployment can degrade. Consider using the filename key when possible, to ensure that you open only one file. If you must use glob, try to limit the number of files that are opened by specifying a single directory or metadata type.

    For example, "glob": "force-app/main/default/classes/\*.cls" targets Apex class files in a specific directory, which is better than "glob": "\*\*/classes/\*\*”, which searches for all Apex metadata files in all package directories.

-   Be careful using string replacement in static resources. When not doing string replacement, Salesforce CLI simply zips up all static resources when it first encounters their directory and deploys them as-is. If you configure string replacement for a large static resource directory, the CLI must inspect a lot more files than usual, which can degrade performance.
-   You can’t use string replacements when deploying in metadata format, such as with the command project deploy start --metadata-dir.
-   If your deployment times out, or you specify the \--async flag of project deploy start, and then run project deploy resume or project deploy report to see what happened, the deployed files contain string replacements as usual. However, the output of project deploy resume and project deploy report don’t display the same string replacement information as project deploy start --verbose would have.

-   **[Test String Replacements](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_ws_string_replace.htm#sfdx_dev_ws_string_replace_test)**
    To test string replacement without actually deploying files to the org or creating a package version, follow these steps.

## Test String Replacements

To test string replacement without actually deploying files to the org or creating a package version, follow these steps.

1.  Set the SF\_APPLY\_REPLACEMENTS\_ON\_CONVERT environment variable to true.
2.  Run the project convert source command, which converts the source files into metadata API format. For example:

    ```

    ```

3.  Inspect the files in the output directory (mdapiOut in our example) for the string replacements and what exactly will be deployed to the org or packaged.

![Warning](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_warning.png&folder=sfdx_dev)

#### Warning

Be careful when writing passwords or secrets to the file system while testing. Also, be sure to reset any environment variables you set during testing so they aren’t accidentally applied later.

## Code Examples

```
{
  "packageDirectories": [
     {
       "path": "force-app",
       "default": true
     }
  ],
  "name": "myproj",
  "replacements": [
    {
      "filename": "force-app/main/default/classes/myClass.cls",
      "stringToReplace": "replaceMe",
      "replaceWithEnv": "THE_REPLACEMENT"  
    }
  ]
}
```

```
"regexToReplace" : "\\."
```

```
"regexToReplace" : "\\"
```

```
"replacements": [
  {
    "filename": "force-app/main/default/classes/FirstApexClass.cls",
    "stringToReplace": "replaceMe",
    "replaceWithEnv": "THE_REPLACEMENT"
  },
  {
    "filename": "force-app/main/default/classes/SecondApexClass.cls",
    "stringToReplace": "replaceMe",
    "replaceWithEnv": "THE_REPLACEMENT"
  }
]
```

```
"replacements": [
  {
    "filename": "force-app/main/default/classes/myClass.cls",
    "stringToReplace": "replaceMe",
    "replaceWithEnv": "THE_REPLACEMENT",
    "replaceWhenEnv": [{
      "env": "DEPLOY_DESTINATION",
      "value": "PROD"
    }]  
  }
]
```

## Related Topics

- Test String Replacements (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_ws_string_replace.htm)
