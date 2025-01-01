import SmoothScrollButton from "../SmoothScrollButton/SmoothScrollButton";
import styles from "./styles.module.scss";

const Plans = () => {
  return (
    <div id="plans" className={styles.plans}>
      <div className={styles.plans_wrapper}>
        <div className={styles.plans__btn}>
          <SmoothScrollButton
            targetId="plans"
            className={styles.plans__btn_item}
          >
            Compare plans
          </SmoothScrollButton>
        </div>
        <div className={styles.plans__description}>
          <h2 className={styles.plans__description_title}>
            Compare our plans and find the right one for you
          </h2>
          <p className={styles.plans__description_text}>
            StreamVibe offers three different plans to fit your needs: Basic,
            Standard, and Premium. Compare the features of each plan and choose
            the one that&apos;s right for you.
          </p>
          {/* не хочу робити p цього компонент(таблиця використовується тільки в цій секції),але якщо потрібн буде додати ще ряд до цієї таблиці,то просто треба в tbody додати <tr/> */}
          <table className={styles.plans__table}>
            <thead className={styles.plans__table_head}>
              <tr className={styles.plans__table_head_list}>
                <th className={styles.plans__table_head_list_title} scope="col">
                  Features
                </th>
                <th className={styles.plans__table_head_list_title} scope="col">
                  FREE
                </th>
                <th className={styles.plans__table_head_list_title} scope="col">
                  BASIC
                </th>
                <th className={styles.plans__table_head_list_title} scope="col">
                  PRO
                </th>
              </tr>
            </thead>
            <tbody className={styles.plans__table_body}>
              <tr>
                <th className={styles.plans__table_head_list_text} scope="row">
                  Price
                </th>
                <th className={styles.plans__table_head_list_text}>$0/Month</th>
                <th className={styles.plans__table_head_list_text}>
                  $10/Month
                </th>
                <th className={styles.plans__table_head_list_text}>
                  $30/Month
                </th>
              </tr>
              <tr>
                <th className={styles.plans__table_head_list_text} scope="row">
                  something
                </th>
                <th className={styles.plans__table_head_list_text}>random</th>
                <th className={styles.plans__table_head_list_text}>text</th>
                <th className={styles.plans__table_head_list_text}>1337</th>
              </tr>
              <tr>
                <th className={styles.plans__table_head_list_text} scope="row">
                  Price
                </th>
                <th className={styles.plans__table_head_list_text}>for</th>
                <th className={styles.plans__table_head_list_text}>exa</th>
                <th className={styles.plans__table_head_list_text}>mple</th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Plans;
