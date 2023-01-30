import { useEffect, useState } from "react";
import { FETCH_MENU_URL } from "../Constants";

const useResMenu = (id) => {
  const [resMenu, setResMenu] = useState(null);

  useEffect(() => {
    getInfo();
  }, []);

  async function getInfo() {
    const data = await fetch(FETCH_MENU_URL + id);
    const json = await data.json();
    setResMenu(json.data);
  }

  return resMenu;
};

export default useResMenu;
