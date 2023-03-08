import React from "react";

export default function ParamsComponent({ itemInfo, styles }) {
  return (
    <div className={styles.info_item__params}>
      <ul>
        <li>
          <div className={styles.color_params}>
            <span className={styles.title_bold}>Колір:</span>
            <div>
              {itemInfo === itemInfo.color
                ? null
                : itemInfo.color.map((color_item) => {
                    return (
                      <>
                        <label className={styles.param__block}>
                          <input
                            type="radio"
                            name="color"
                            className={styles.unActive}
                            value={color_item}
                          />
                          <span
                            className={color_item}
                            id="active_param_btn"
                          ></span>
                        </label>
                      </>
                    );
                  })}
            </div>
          </div>
        </li>
        <li>
          <div
            className={
              itemInfo.inner_memory.length === 0
                ? styles.unActive
                : styles.param
            }
          >
            <span className={styles.title_bold}>Внутрішня пам’ять: </span>
            <div>
              {itemInfo === itemInfo.inner_memory
                ? null
                : itemInfo.inner_memory.map((item) => {
                    return (
                      <>
                        <label className={styles.param__block}>
                          <input
                            type="radio"
                            name="inner_memory"
                            className={styles.unActive}
                            value={item}
                          />

                          <span className={styles.active_param_btn}>
                            {item}
                          </span>
                        </label>
                      </>
                    );
                  })}
            </div>
          </div>
        </li>
        <li>
          <div
            className={
              itemInfo.ram.length === 0 ? styles.unActive : styles.param
            }
          >
            <span className={styles.title_bold}>Оперативна пам’ять: </span>
            <div>
              {itemInfo === itemInfo.ram
                ? null
                : itemInfo.ram.map((item) => {
                    return (
                      <>
                        <label className={styles.param__block}>
                          <input
                            type="radio"
                            name="ram"
                            className={styles.unActive}
                            value={item}
                          />

                          <span className={styles.active_param_btn}>
                            {item}
                          </span>
                        </label>
                      </>
                    );
                  })}
            </div>
          </div>
        </li>
        <li>
          <div
            className={
              itemInfo.diagonal.length === 0 ? styles.unActive : styles.param
            }
          >
            <span className={styles.title_bold}>Диагональ: </span>
            <div>
              {itemInfo === itemInfo.diagonal
                ? null
                : itemInfo.diagonal.map((item) => {
                    return (
                      <>
                        <label className={styles.param__block}>
                          <input
                            type="radio"
                            name="diagonal"
                            className={styles.unActive}
                            value={item}
                          />

                          <span className={styles.active_param_btn}>
                            {item}
                          </span>
                        </label>
                      </>
                    );
                  })}
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
