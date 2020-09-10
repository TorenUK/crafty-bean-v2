import React from "react";
import "./Landing.css";
import Button from "@material-ui/core/Button";

function Landing() {
  return (
    <div id="landing" className="landing">
      <div className="landing__logo">
        <svg
          id="logo"
          width="794"
          height="149"
          viewBox="0 0 794 149"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.191986 60.744C0.191986 50.952 2.39999 42.168 6.81599 34.392C11.232 26.52 17.232 20.376 24.816 15.96C32.496 11.544 40.992 9.33601 50.304 9.33601C61.248 9.33601 70.8 11.976 78.96 17.256C87.12 22.536 93.072 30.024 96.816 39.72H81.12C78.336 33.672 74.304 29.016 69.024 25.752C63.84 22.488 57.6 20.856 50.304 20.856C43.296 20.856 37.008 22.488 31.44 25.752C25.872 29.016 21.504 33.672 18.336 39.72C15.168 45.672 13.584 52.68 13.584 60.744C13.584 68.712 15.168 75.72 18.336 81.768C21.504 87.72 25.872 92.328 31.44 95.592C37.008 98.856 43.296 100.488 50.304 100.488C57.6 100.488 63.84 98.904 69.024 95.736C74.304 92.472 78.336 87.816 81.12 81.768H96.816C93.072 91.368 87.12 98.808 78.96 104.088C70.8 109.272 61.248 111.864 50.304 111.864C40.992 111.864 32.496 109.704 24.816 105.384C17.232 100.968 11.232 94.872 6.81599 87.096C2.39999 79.32 0.191986 70.536 0.191986 60.744Z"
            stroke="white"
            stroke-width="2"
          />
          <path
            d="M129.426 44.904C131.73 40.392 134.994 36.888 139.218 34.392C143.538 31.896 148.77 30.648 154.914 30.648V44.184H151.458C136.77 44.184 129.426 52.152 129.426 68.088V111H116.322V32.088H129.426V44.904Z"
            stroke="white"
            stroke-width="2"
          />
          <path
            d="M165.145 71.256C165.145 63.192 166.777 56.136 170.041 50.088C173.305 43.944 177.769 39.192 183.433 35.832C189.193 32.472 195.577 30.792 202.585 30.792C209.497 30.792 215.497 32.28 220.585 35.256C225.673 38.232 229.465 41.976 231.961 46.488V32.088H245.209V111H231.961V96.312C229.369 100.92 225.481 104.76 220.297 107.832C215.209 110.808 209.257 112.296 202.441 112.296C195.433 112.296 189.097 110.568 183.433 107.112C177.769 103.656 173.305 98.808 170.041 92.568C166.777 86.328 165.145 79.224 165.145 71.256ZM231.961 71.4C231.961 65.448 230.761 60.264 228.361 55.848C225.961 51.432 222.697 48.072 218.569 45.768C214.537 43.368 210.073 42.168 205.177 42.168C200.281 42.168 195.817 43.32 191.785 45.624C187.753 47.928 184.537 51.288 182.137 55.704C179.737 60.12 178.537 65.304 178.537 71.256C178.537 77.304 179.737 82.584 182.137 87.096C184.537 91.512 187.753 94.92 191.785 97.32C195.817 99.624 200.281 100.776 205.177 100.776C210.073 100.776 214.537 99.624 218.569 97.32C222.697 94.92 225.961 91.512 228.361 87.096C230.761 82.584 231.961 77.352 231.961 71.4Z"
            stroke="white"
            stroke-width="2"
          />
          <path
            d="M299.466 42.888H282.906V111H269.802V42.888H259.578V32.088H269.802V26.472C269.802 17.64 272.058 11.208 276.57 7.17601C281.178 3.04801 288.522 0.984009 298.602 0.984009V11.928C292.842 11.928 288.762 13.08 286.362 15.384C284.058 17.592 282.906 21.288 282.906 26.472V32.088H299.466V42.888Z"
            stroke="white"
            stroke-width="2"
          />
          <path
            d="M330.728 42.888V89.4C330.728 93.24 331.544 95.976 333.176 97.608C334.808 99.144 337.64 99.912 341.672 99.912H351.32V111H339.512C332.216 111 326.744 109.32 323.096 105.96C319.448 102.6 317.624 97.08 317.624 89.4V42.888H307.4V32.088H317.624V12.216H330.728V32.088H351.32V42.888H330.728Z"
            stroke="white"
            stroke-width="2"
          />
          <path
            d="M435.165 32.088L387.645 148.152H374.109L389.661 110.136L357.837 32.088H372.381L397.149 96.024L421.629 32.088H435.165Z"
            stroke="white"
            stroke-width="2"
          />
          <path
            d="M498.594 59.304C502.242 59.88 505.554 61.368 508.53 63.768C511.602 66.168 514.002 69.144 515.73 72.696C517.554 76.248 518.466 80.04 518.466 84.072C518.466 89.16 517.17 93.768 514.578 97.896C511.986 101.928 508.194 105.144 503.202 107.544C498.306 109.848 492.498 111 485.778 111H448.338V10.632H484.338C491.154 10.632 496.962 11.784 501.762 14.088C506.562 16.296 510.162 19.32 512.562 23.16C514.962 27 516.162 31.32 516.162 36.12C516.162 42.072 514.53 47.016 511.266 50.952C508.098 54.792 503.874 57.576 498.594 59.304ZM461.442 53.976H483.474C489.618 53.976 494.37 52.536 497.73 49.656C501.09 46.776 502.77 42.792 502.77 37.704C502.77 32.616 501.09 28.632 497.73 25.752C494.37 22.872 489.522 21.432 483.186 21.432H461.442V53.976ZM484.626 100.2C491.154 100.2 496.242 98.664 499.89 95.592C503.538 92.52 505.362 88.248 505.362 82.776C505.362 77.208 503.442 72.84 499.602 69.672C495.762 66.408 490.626 64.776 484.194 64.776H461.442V100.2H484.626Z"
            stroke="#f98d2a"
            stroke-width="2"
          />
          <path
            d="M608.65 68.52C608.65 71.016 608.506 73.656 608.218 76.44H545.146C545.626 84.216 548.266 90.312 553.066 94.728C557.962 99.048 563.866 101.208 570.778 101.208C576.442 101.208 581.146 99.912 584.89 97.32C588.73 94.632 591.418 91.08 592.954 86.664H607.066C604.954 94.248 600.731 100.44 594.395 105.24C588.059 109.944 580.186 112.296 570.778 112.296C563.29 112.296 556.571 110.616 550.618 107.256C544.762 103.896 540.154 99.144 536.794 93C533.434 86.76 531.754 79.56 531.754 71.4C531.754 63.24 533.386 56.088 536.65 49.944C539.914 43.8 544.474 39.096 550.33 35.832C556.282 32.472 563.098 30.792 570.778 30.792C578.266 30.792 584.89 32.424 590.65 35.688C596.41 38.952 600.826 43.464 603.898 49.224C607.066 54.888 608.65 61.32 608.65 68.52ZM595.114 65.784C595.114 60.792 594.01 56.52 591.802 52.968C589.594 49.32 586.57 46.584 582.73 44.76C578.986 42.84 574.81 41.88 570.202 41.88C563.578 41.88 557.914 43.992 553.21 48.216C548.602 52.44 545.962 58.296 545.29 65.784H595.114Z"
            stroke="#f98d2a"
            stroke-width="2"
          />
          <path
            d="M621.051 71.256C621.051 63.192 622.683 56.136 625.947 50.088C629.211 43.944 633.675 39.192 639.339 35.832C645.099 32.472 651.483 30.792 658.491 30.792C665.403 30.792 671.403 32.28 676.491 35.256C681.579 38.232 685.371 41.976 687.867 46.488V32.088H701.115V111H687.867V96.312C685.275 100.92 681.387 104.76 676.203 107.832C671.115 110.808 665.163 112.296 658.347 112.296C651.339 112.296 645.003 110.568 639.339 107.112C633.675 103.656 629.211 98.808 625.947 92.568C622.683 86.328 621.051 79.224 621.051 71.256ZM687.867 71.4C687.867 65.448 686.667 60.264 684.267 55.848C681.867 51.432 678.603 48.072 674.475 45.768C670.443 43.368 665.979 42.168 661.083 42.168C656.187 42.168 651.723 43.32 647.691 45.624C643.659 47.928 640.443 51.288 638.043 55.704C635.643 60.12 634.443 65.304 634.443 71.256C634.443 77.304 635.643 82.584 638.043 87.096C640.443 91.512 643.659 94.92 647.691 97.32C651.723 99.624 656.187 100.776 661.083 100.776C665.979 100.776 670.443 99.624 674.475 97.32C678.603 94.92 681.867 91.512 684.267 87.096C686.667 82.584 687.867 77.352 687.867 71.4Z"
            stroke="#f98d2a"
            stroke-width="2"
          />
          <path
            d="M761.708 30.648C771.308 30.648 779.084 33.576 785.036 39.432C790.988 45.192 793.964 53.544 793.964 64.488V111H781.004V66.36C781.004 58.488 779.036 52.488 775.1 48.36C771.164 44.136 765.788 42.024 758.972 42.024C752.06 42.024 746.54 44.184 742.412 48.504C738.38 52.824 736.364 59.112 736.364 67.368V111H723.26V32.088H736.364V43.32C738.956 39.288 742.46 36.168 746.876 33.96C751.388 31.752 756.332 30.648 761.708 30.648Z"
            stroke="#f98d2a"
            stroke-width="2"
          />
        </svg>
      </div>
      <div className="landing__links">
        <div className="landing__links__button">
          <Button href="#gifts" size="small" variant="outlined">
            Personalised Gifts
          </Button>
        </div>
        <div className="landing__links__button">
          <Button href="#prints" size="small" variant="outlined">
            Seed Bomb Cards
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Landing;
