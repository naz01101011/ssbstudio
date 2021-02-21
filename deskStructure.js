import S from "@sanity/desk-tool/structure-builder";
import MdSettings from "react-icons/md";
import MdPerson from "react-icons/md";

const hiddenDocTypes = listItem =>
  !["category", "author", "post", "siteSettings"].includes(listItem.getId());

export default () =>
  S.list()
    .title("Continut")
    .items([
      S.listItem()
        .title("Setari")
        .icon(MdSettings)
        .child(
          S.editor()
            .id("siteSettings")
            .schemaType("siteSettings")
            .documentId("siteSettings")
        ),
      S.listItem()
        .title("Articole")
        .schemaType("post")
        .child(S.documentTypeList("post").title("Articole")),
      S.listItem()
        .title("Autori")
        .icon(MdPerson)
        .schemaType("author")
        .child(S.documentTypeList("author").title("Autori")),
      S.listItem()
        .title("Categorii")
        .schemaType("category")
        .child(S.documentTypeList("category").title("Categorii")),
      // This returns an array of all the document types
      // defined in schema.js. We filter out those that we have
      // defined the structure above
      ...S.documentTypeListItems().filter(hiddenDocTypes)
    ]);
