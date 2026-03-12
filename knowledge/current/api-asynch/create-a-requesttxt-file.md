---
title: "Create a request.txt File"
domain: api-asynch
topic: create-a-requesttxt-file
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:59.326Z
estimatedTokens: 715
keywords: [request.txt, File, batch, represented, zip, CSV, XML, JSON, references, binary, attachments, themselves, differs, files, don’t]
---

# Create a request.txt File

> A batch is represented by a zip file, which contains a CSV, XML, or JSON file called
      request.txt that contains references to the binary attachments and the
    binary attachments themselves. This differs from CSV, XML, or JSON batch files that don’t
    include binary attachments. These batch files don’t need a zip or a
      request.txt file.

# Create a request.txt File

A batch is represented by a zip file, which contains a CSV, XML, or JSON file called request.txt that contains references to the binary attachments and the binary attachments themselves. This differs from CSV, XML, or JSON batch files that don’t include binary attachments. These batch files don’t need a zip or a request.txt file.

The request.txt file is contained in the base directory (at the root) of the zip file. The binary attachments can also be in the base directory or they can be organized in optional subdirectories.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_asynch)

#### Note

If you create a zip file on OS X by right-clicking a folder and choosing "Compress" - it won't work. The result is an *extra* folder level inside the zip file. You can use zip to create it properly and unzip -l to check it.

The request.txt file is a manifest file for the attachments in the zip file and contains the data for each record that references a binary file.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_asynch)

#### Note

The batch data file is named request.txt, whether you’re working with CSV, XML, or JSON data.

For the Attachment object, the notation for these fields is particularly important:

-   The Name field is the file name of the binary attachment. The easiest way to get a unique name for each attachment in your batch is to use the relative path from the base directory to the binary attachment. For example, attachment1.gif or subdir/attachment2.doc.
-   The Body is the relative path to the binary attachment, preceded with a # symbol. For example, #attachment1.gif or #subdir/attachment2.doc.
-   The ParentId field identifies the parent record, such as an account or a case, for the attachment.

The batch file can also include other optional Attachment fields, such as Description. For more information, see [Attachment](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_attachment.htm "HTML (New Window)").

## Sample CSV request.txt File

This sample CSV file includes two Attachment records. The first record references an attachment1.gif binary file in the base directory of the zip file. The second record references an attachment2.doc binary file in the subdir subdirectory of the zip file. In this example, the ParentId field indicates that both attachments are associated with Account parent records. The **Account Id** variable should be replaced with the Id of the associated parent account.

```

```

## Sample XML request.txt File

This sample XML file includes the same two records as the previous CSV sample file.

```

```

## Sample JSON request.txt File

This sample JSON file includes the same two records as the previous examples.

```

```

## Code Examples

```
Name,ParentId,Body
attachment1.gif,Account Id,#attachment1.gif
subdir/attachment2.doc,Account Id,#subdir/attachment2.doc
```

```
<?xml version="1.0" encoding="UTF-8"?>
<sObjects
   xmlns="http://www.force.com/2009/06/asyncapi/dataload"
   xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
  <sObject>
    <Name>attachment1.gif</Name>
    <ParentId>Account Id</ParentId>
    <Body>#attachment1.gif</Body>
  </sObject>
  <sObject>
    <Name>subdir/attachment2.doc</Name>
    <ParentId>Account Id</ParentId>
    <Body>#subdir/attachment2.doc</Body>
  </sObject>
</sObjects>
```

```
[
  {
    "Name" : "attachment1.gif",
    "ParentId" : "Account Id",
    "Body" : "#attachment1.gif"
  },
  {
    "Name" : "subdir/attachment2.doc",
    "ParentId" : "Account Id",
    "Body" : "#subdir/attachment2.doc"
  }
]
```
