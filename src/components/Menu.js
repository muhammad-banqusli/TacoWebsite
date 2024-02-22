import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Menu = () => {
    const { state } = useLocation();
    const { targetId, newClick } = state || {};
  
    useEffect(() => {
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView();
      }
    }, [targetId, newClick]);
    return (
        <article className="main__article menu" id='menu'>
            <h2 className="menu__h2">Our Menu</h2>
            <table className="menu__container">
                <caption className="offscreen">Our Tacons</caption>
                <thead>
                    <tr>
                        <th className="menu__header">Tacos</th>
                        <th className="menu__header">Quantity</th>
                        <th className="menu__header">Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th
                            className="menu__item menu__cr"
                            scope="row"
                            rowSpan={3}
                        >
                            Crunchy
                        </th>
                        <td className="menu__item">1</td>
                        <td className="menu__item">$1.5</td>
                    </tr>
                    <tr>
                        <td className="menu__item">2</td>
                        <td className="menu__item">$2.25</td>
                    </tr>
                    <tr>
                        <td className="menu__item">3</td>
                        <td className="menu__item">$3.25</td>
                    </tr>
                    <tr>
                        <th
                            className="menu__item menu__sf"
                            scope="row"
                            rowSpan={3}
                        >
                            Soft
                        </th>
                        <td className="menu__item">1</td>
                        <td className="menu__item">$2.00</td>
                    </tr>
                    <tr>
                        <td className="menu__item">2</td>
                        <td className="menu__item">$3.50</td>
                    </tr>
                    <tr>
                        <td className="menu__item">3</td>
                        <td className="menu__item">$4.50</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td className="menu__item menu__cs" colSpan={3}>
                            Chips &amp; Sales $2
                        </td>
                    </tr>
                </tfoot>
            </table>
        </article>
    );
};

export default Menu;
