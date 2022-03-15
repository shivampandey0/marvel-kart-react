import styles from "./Home.module.css";
import { CategoryLink } from "./CategoryLink";
import { useState, useEffect } from "react";
import { Header, Footer } from "../../components";
import axios from "axios";
import banner from "../../assets/landing-page-bg.jpeg";

export const Home = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get("api/categories");
        setCategories(res.data.categories);
      } catch (error) {}
    })();
  }, []);

  return (
    <>
      <main className="m-auto">
        <section className={styles.home_hero}>
          <img src={banner} alt="Comic Background" className="img-responsive" />
        </section>
        <section className="mx-8">
          <h3 className="txt-center my-4">Shop by Featured OG Avengers</h3>
          <div
            className={` ${styles.categories} flex-row flex-wrap justify-cntr gap-2`}
          >
            {categories.map(({ _id, categoryImage, categoryName }) => (
              <CategoryLink
                key={_id}
                categoryImg={categoryImage}
                categoryName={categoryName}
              />
            ))}
          </div>
        </section>
      </main>
    </>
  );
};
