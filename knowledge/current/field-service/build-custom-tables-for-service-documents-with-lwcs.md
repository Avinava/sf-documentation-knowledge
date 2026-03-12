---
title: "Build Custom Tables for Service Documents with LWCs"
domain: field-service
topic: build-custom-tables-for-service-documents-with-lwcs
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:55.501Z
estimatedTokens: 192
keywords: [Build, Custom, Tables, Service, Documents, LWCs, custom, tables, Document, Builder, Lightning, web, components, Design, Table, Show, Data, Properly, Example]
---

# Build Custom Tables for Service Documents with LWCs

> Build custom tables for Document Builder with Lightning web components
        (LWCs).

# Build Custom Tables for Service Documents with LWCs

Build custom tables for Document Builder with Lightning web components (LWCs).

While Document Builder offers a standard component to create tables for related records, you can also build your own custom tables to suit your company’s needs.

## Design Your Table to Show Data Properly

To ensure that your tables show data properly, use HTML tables to build your LWC for custom tables. The right HTML table formatting organizes your data properly, even when the table overflows or breaks between pages. If information in the table does overflow, column headers repeat on the next page.

Here’s a sample markup that calls out the header row, ensuring that the header is repeated across pages.

## Example

```

```

## Code Examples

```
<table>
  <thead>
       <tr>
           <th>Company</th>
           <th>Contact</th>
           <th>Country</th>
       </tr>
   </thead>
   <tbody>
       <tr>
           <td>Alfreds Futterkiste</td>
           <td>Maria Anders</td>
           <td>Germany</td>
       </tr>
       <tr>
           <td>Centro comercial Moctezuma</td>
           <td>Francisco Chang</td>
           <td>Mexico</td>
       </tr>
   </tbody>
</table>
```
