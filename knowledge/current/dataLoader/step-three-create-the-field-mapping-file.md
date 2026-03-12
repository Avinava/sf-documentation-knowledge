---
title: "Step Three: Create the Field Mapping File"
domain: dataLoader
topic: step-three-create-the-field-mapping-file
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:24.167Z
estimatedTokens: 370
keywords: [Step, Three, Mapping, File, sdl, extension, line, pair, data, source, destination]
---

# Step Three: Create the Field Mapping File

> In this step, you create a mapping file with an .sdl 
    file extension. In each line of the mapping file, pair a data source with its destination.

# Step Three: Create the Field Mapping File

In this step, you create a mapping file with an .sdl file extension. In each line of the mapping file, pair a data source with its destination.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=dataLoader)

#### Note

The Data Loader command-line interface is supported for Windows only.

Copy the following to a text file and save it with a name of accountInsertMap.sdl. This code is a data insert, so the data source is on the left of the equals sign and the destination field is on the right.

```

```

For complex mappings, you can use the Data Loader user interface to map source and destination fields and then save those mappings to an .sdl file. It’s done on the Mapping dialog box by clicking **Save Mapping**.

#### See Also

-   [Data Loader Command Line Introduction](atlas.en-us.dataLoader.meta/dataLoader/command_line_intro.htm "In addition to using Data Loader interactively to import and export data, you can run it from the command line. You can use commands to automate the import and export of data.")

-   [Step Four: Create the Configuration File](atlas.en-us.dataLoader.meta/dataLoader/command_line_create_config_file.htm "The process-conf.xml file contains the information that Data Loader requires to process the data. Each <bean> in the process-conf.xml file refers to a single process such as an insert, upsert, or export. Therefore, this file can contain multiple processes.")

## Code Examples

```
#Mapping values
              #Thu May 26 16:19:33 GMT 2011
              Name=Name
              NumberOfEmployees=NumberOfEmployees
              Industry=Industry
```

## Related Topics

- Data Loader Command Line Introduction (atlas.en-us.dataLoader.meta/dataLoader/command_line_intro.htm)
- Step Four: Create the Configuration File (atlas.en-us.dataLoader.meta/dataLoader/command_line_create_config_file.htm)
