---
title: "data create file"
domain: cli-commands
topic: data-create-file
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T09:49:04.689Z
keywords: [data, create, file, Upload, local, org., Description, Examples, Flags]
---

# data create file

> Upload a local file to an org.

## data create file

Upload a local file to an org.

### Description for data create file

This command always creates a new file in the org; you can't update an existing file. After a successful upload, the command displays the ID of the new ContentDocument record which represents the uploaded file.

By default, the uploaded file isn't attached to a record; in the Salesforce UI the file shows up in the Files tab. You can optionally attach the file to an existing record, such as an account, as long as you know its record ID.

You can also give the file a new name after it's been uploaded; by default its name in the org is the same as the local file name.

### Examples for data create file

Upload the local file "resources/astro.png" to your default org:

```

```

Give the file a different filename after it's uploaded to the org with alias "my-scratch":

```

```

Attach the file to a record in the org:

```

```

### Flags

\--json

Optional

Format output as json.

Type: boolean

\--flags-dir FLAGS-DIR

Optional

Import flag values from a directory.

Type: option

\-o | \--target-org TARGET-ORG

Required

Username or alias of the target org. Not required if the \`target-org\` configuration variable is already set.

Type: option

\--api-version API-VERSION

Optional

Override the api version used for api requests made by this command

Type: option

\-t | \--title TITLE

Optional

New title given to the file (ContentDocument) after it's uploaded.

Type: option

\-f | \--file FILE

Required

Path of file to upload.

Type: option

\-i | \--parent-id PARENT-ID

Optional

ID of the record to attach the file to.

Type: option