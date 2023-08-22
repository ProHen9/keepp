export const saveTab = async (categoryItems: Array<string>, name: string) => {
    // den aktuellen Tab bekommen und in die Variable "tab" packen
    const [tab] = await chrome.tabs.query({
      active: true,
      lastFocusedWindow: true,
    })

    if (tab.url == undefined) {
        throw new Error()
    }
  
    // Checken ob es im localStorage schon einen Wert gibt
    if (!localStorage.getItem("list")) {
        localStorage.setItem("list", "[]")
    }

    // Die Liste aus dem LocalStorage holen
    interface SaveItem {
        url: string;
        category: Array<string>;
        name: string
    }

    const list: string = localStorage.getItem("list")   || "[]"
    const listJSON: SaveItem[] = JSON.parse(list)

    // den neuen Tab reinschreiben

    listJSON.unshift({
        url: tab.url.toString() || "",
        category: categoryItems || "[]",
        name: name
    })

    // nun alles wieder speichern, dabei wird zuerst die alte Liste gelöscht, und danach die neue Liste hochgeladen

    localStorage.removeItem("list")
    localStorage.setItem("list", JSON.stringify(listJSON))
};

export const saveCategory = (category: string) => {
    // zuerst wird geschaut, ob der Wert "category" im LocalStorage schon drin ist
    if (!localStorage.getItem("category")) {
        localStorage.setItem("category", "[]")
    }

    // Die Werte nun aus dem LocalStorage bekommen
    const categoryString: string = localStorage.getItem("category") || "[]"
    const categoryJson: Array<string> = JSON.parse(categoryString)

    // die neue Category reinschreiben
    categoryJson.unshift(category)

    // nun alles wieder speichern, dabei wird zuerst die alte Liste gelöscht, und danach die neue Liste hochgeladen
    localStorage.removeItem("category")
    localStorage.setItem("category", JSON.stringify(categoryJson))
};
