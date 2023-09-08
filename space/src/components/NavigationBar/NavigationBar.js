import {NavLink} from "react-router-dom";

import styles from "./NavigationBar.module.css";

function NavigationBar ()
{

  const routes = [
    {to: "/", text: "Home"},
    {to: "/spacecrafts", text: "Spacecrafts"},
    {to: "/planets", text: "Planets"}
  ];
  return (
    <nav className={styles["navigation"]}>
    {
      routes.map((route, index) => 
      <NavLink
  key={index}
  activeClassName={styles["navigation_item--active"]}
  className={styles["navigation_item"]}
  to={route.to}
>
  {route.text}
</NavLink>
      )
    }
    </nav>
  );
}

export default NavigationBar;
