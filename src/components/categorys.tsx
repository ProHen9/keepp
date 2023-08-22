import { Link } from "react-router-dom";
export default function Categorys() {
  // Ein Item aus der Liste
  interface ListItem {
    url: string;
    category: Array<string>;
    name: string;
  }

  // Liste und Kategorien aus dem LocalStorage holen
  const categorys: Array<string> = JSON.parse(
    localStorage.getItem("category") || "[]"
  );
  const list: ListItem[] = JSON.parse(localStorage.getItem("list") || "[]");

  // Eine Liste mit allen Links, ohne Kategorien, wird angewendet, wenn noch keine Kategorie erstellt wurde
  const LinkWithoutList = () => {
    if (list.length != 0) {
      return (
        <div>
          {list.map((listItem) => (
            <a href={listItem.url} target="_blank">
              {listItem.name}
            </a>
          ))}
        </div>
      );
    }
  };

  // cheken ob schon Kategorien gibt, wenn nein wird eine andere Komponent gerendert
  if (categorys.length == 0 || null) {
    return (
      <div className="m-t-4">
        <h2>
          You haven't created a category yet.{" "}
          <Link className="m-r-3 c-cyan" to="/createCategory">
            Create a category.
          </Link>
        </h2>
        {list.length == 0 || null ? (
          <h2>
            You have to create a link.{" "}
            <Link to="/add" className="m-r-3 c-cyan">
              Create a link.
            </Link>
          </h2>
        ) : (
          <LinkWithoutList />
        )}
      </div>
    );
  }
  // Kategorisieren
  interface Link {
    url: string;
    name: string;
  }
  interface CategoryForLink {
    categoryName: string;
    links: Link[];
  }
  const categoriesWithLinks: CategoryForLink[] = [];

  list.forEach((listItem) => {
    listItem.category.forEach((categoryItem) => {
      const existingCategory = categoriesWithLinks.find(
        (category) => category.categoryName === categoryItem
      );

      if (existingCategory) {
        existingCategory.links.push({
          name: listItem.name,
          url: listItem.url,
        });
      } else {
        categoriesWithLinks.push({
          categoryName: categoryItem,
          links: [
            {
              name: listItem.name,
              url: listItem.url,
            },
          ],
        });
      }
    });
  });

  function handleDeleteLink(linkToDelete: Link) {
    // Update the list array by removing the link
    const updatedList = list.filter(
      (listItem) => listItem.url !== linkToDelete.url
    );

    // Update the local storage
    localStorage.setItem("list", JSON.stringify(updatedList));
  }

  // rendern der Komponente mit Kategorien
  return (
    <div className="m-t-4">
      {categoriesWithLinks.map((category) => (
        <details key={category.categoryName}>
          <summary>{category.categoryName}</summary>
          {category.links.map((link) => (
            <div >
              <a key={link.name} href={link.url} target="_blank">
                {link.name}
              </a>
              <button onClick={() => handleDeleteLink(link)}>löschen</button>
            </div>
          ))}
        </details>
      ))}
    </div>
  );
}
