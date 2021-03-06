import { useContext } from "react";
import StylesContext from "../../../store/styles-context";

export default function IsometricProgrammerLaptop({ animate }) {
  const stylesContext = useContext(StylesContext);
  const styles = stylesContext.styles.find(
    (styleSheet) => styleSheet.name === "IsometricProgrammer"
  ).styles;

  return (
    <div
      id={styles.laptop}
      className={[styles.wrapper, animate ? styles.animate : undefined].join(" ")}
    >
      <svg
        originalartby="Chalermsuk Bootvises - Vecteezy.com"
        link="https://www.vecteezy.com/vector-art/2212500-programmer-mobile-application"
        viewBox="0 0 1077.57 1429.08"
        style={{ enableBackground: "new 0 0 1077.57 1429.08" }}
      >
        <g>
          <g>
            <g>
              <path
                className={[styles.st46, styles.laptopShadow].join(" ")}
                d="M346.09,875.36L539.1,986.79c3.77,2.18,3.77,7.62,0,9.79l-122.41,71.53
									c-3.33,1.92-8.36,2.13-11.24,0.47L214.4,958.26c-2.88-1.66-2.52-4.57,0.81-6.49L346.09,875.36z"
              />
              <g id={styles.laptopGroup}>
                <g>
                  <g>
                    <path
                      className={styles.st47}
                      d="M541.04,985.61c0,2.96-2.4,5.35-5.35,5.35c-2.96,0-5.35-2.4-5.35-5.35s2.4-5.35,5.35-5.35
												C538.64,980.25,541.04,982.65,541.04,985.61z"
                    />
                    <path
                      className={styles.st48}
                      d="M539.37,985.69c0,2.11-1.71,3.82-3.82,3.82s-3.82-1.71-3.82-3.82s1.71-3.82,3.82-3.82
												S539.37,983.58,539.37,985.69z"
                    />
                    <path
                      className={styles.st46}
                      d="M539.81,982.2l-3.68,1.91l-0.68,3.69l5.49-3.17C540.78,983.72,540.38,982.89,539.81,982.2z"
                    />
                  </g>
                  <g>
                    <linearGradient
                      id={styles.SVGID_1_}
                      gradientUnits="userSpaceOnUse"
                      x1="339.55"
                      y1="580.8715"
                      x2="541.04"
                      y2="580.8715"
                      gradientTransform="matrix(1 0 0 -1 0 1430)"
                    >
                      <stop offset="0" stopColor="#301DD9" />
                      <stop offset="0.026" stopColor="#2E1CD1" />
                      <stop offset="0.2175" stopColor="#231398" />
                      <stop offset="0.4032" stopColor="#1A0C69" />
                      <stop offset="0.5786" stopColor="#130744" />
                      <stop offset="0.7414" stopColor="#0E032A" />
                      <stop offset="0.8867" stopColor="#0B011A" />
                      <stop offset="1" stopColor="#0A0014" />
                    </linearGradient>
                    <path
                      className={styles.st49}
                      fill={`url(#${styles.SVGID_1_})`}
                      d="M534.9,825.99L345.68,716.74c-3.39-1.96-6.13-0.8-6.13,2.59v146.81l201.49,116.33V835.66
												C541.04,832.28,538.29,827.94,534.9,825.99z"
                    />

                    <linearGradient
                      id={styles.SVGID_2_}
                      gradientUnits="userSpaceOnUse"
                      x1="339.42"
                      y1="580.8015"
                      x2="540.91"
                      y2="580.8015"
                      gradientTransform="matrix(1 0 0 -1 0 1430)"
                    >
                      <stop offset="0" stopColor="#301DD9" />
                      <stop offset="0.026" stopColor="#2E1CD1" />
                      <stop offset="0.2175" stopColor="#231398" />
                      <stop offset="0.4032" stopColor="#1A0C69" />
                      <stop offset="0.5786" stopColor="#130744" />
                      <stop offset="0.7414" stopColor="#0E032A" />
                      <stop offset="0.8867" stopColor="#0B011A" />
                      <stop offset="1" stopColor="#0A0014" />
                    </linearGradient>
                    <path
                      className={styles.st50}
                      fill={`url(#${styles.SVGID_2_})`}
                      d="M534.77,826.05L345.55,716.81c-3.39-1.96-6.13-0.8-6.13,2.59v146.81l201.49,116.33V835.73
												C540.91,832.34,538.16,828.01,534.77,826.05z"
                    />

                    <linearGradient
                      id={styles.SVGID_3_}
                      gradientUnits="userSpaceOnUse"
                      x1="339.29"
                      y1="580.7315"
                      x2="540.78"
                      y2="580.7315"
                      gradientTransform="matrix(1 0 0 -1 0 1430)"
                    >
                      <stop offset="0" stopColor="#301DD9" />
                      <stop offset="0.026" stopColor="#2E1CD1" />
                      <stop offset="0.2175" stopColor="#231398" />
                      <stop offset="0.4032" stopColor="#1A0C69" />
                      <stop offset="0.5786" stopColor="#130744" />
                      <stop offset="0.7414" stopColor="#0E032A" />
                      <stop offset="0.8867" stopColor="#0B011A" />
                      <stop offset="1" stopColor="#0A0014" />
                    </linearGradient>
                    <path
                      className={styles.st51}
                      fill={`url(#${styles.SVGID_3_})`}
                      d="M534.64,826.12L345.42,716.88c-3.39-1.96-6.13-0.8-6.13,2.59v146.81l201.49,116.33V835.8
												C540.78,832.41,538.03,828.08,534.64,826.12z"
                    />

                    <linearGradient
                      id={styles.SVGID_4_}
                      gradientUnits="userSpaceOnUse"
                      x1="339.16"
                      y1="580.6715"
                      x2="540.65"
                      y2="580.6715"
                      gradientTransform="matrix(1 0 0 -1 0 1430)"
                    >
                      <stop offset="0" stopColor="#301DD9" />
                      <stop offset="0.026" stopColor="#2E1CD1" />
                      <stop offset="0.2175" stopColor="#231398" />
                      <stop offset="0.4032" stopColor="#1A0C69" />
                      <stop offset="0.5786" stopColor="#130744" />
                      <stop offset="0.7414" stopColor="#0E032A" />
                      <stop offset="0.8867" stopColor="#0B011A" />
                      <stop offset="1" stopColor="#0A0014" />
                    </linearGradient>
                    <path
                      className={styles.st52}
                      fill={`url(#${styles.SVGID_4_})`}
                      d="M534.51,826.19L345.29,716.94c-3.39-1.96-6.13-0.8-6.13,2.59v146.81l201.49,116.33V835.86
												C540.64,832.48,537.9,828.14,534.51,826.19z"
                    />

                    <linearGradient
                      id={styles.SVGID_5_}
                      gradientUnits="userSpaceOnUse"
                      x1="339.03"
                      y1="580.6015"
                      x2="540.52"
                      y2="580.6015"
                      gradientTransform="matrix(1 0 0 -1 0 1430)"
                    >
                      <stop offset="0" stopColor="#301DD9" />
                      <stop offset="0.026" stopColor="#2E1CD1" />
                      <stop offset="0.2175" stopColor="#231398" />
                      <stop offset="0.4032" stopColor="#1A0C69" />
                      <stop offset="0.5786" stopColor="#130744" />
                      <stop offset="0.7414" stopColor="#0E032A" />
                      <stop offset="0.8867" stopColor="#0B011A" />
                      <stop offset="1" stopColor="#0A0014" />
                    </linearGradient>
                    <path
                      className={styles.st53}
                      fill={`url(#${styles.SVGID_5_})`}
                      d="M534.38,826.25L345.16,717.01c-3.39-1.96-6.13-0.8-6.13,2.59v146.81l201.49,116.33V835.93
												C540.51,832.54,537.76,828.21,534.38,826.25z"
                    />

                    <linearGradient
                      id={styles.SVGID_6_}
                      gradientUnits="userSpaceOnUse"
                      x1="338.89"
                      y1="580.5315"
                      x2="540.38"
                      y2="580.5315"
                      gradientTransform="matrix(1 0 0 -1 0 1430)"
                    >
                      <stop offset="0" stopColor="#301DD9" />
                      <stop offset="0.026" stopColor="#2E1CD1" />
                      <stop offset="0.2175" stopColor="#231398" />
                      <stop offset="0.4032" stopColor="#1A0C69" />
                      <stop offset="0.5786" stopColor="#130744" />
                      <stop offset="0.7414" stopColor="#0E032A" />
                      <stop offset="0.8867" stopColor="#0B011A" />
                      <stop offset="1" stopColor="#0A0014" />
                    </linearGradient>
                    <path
                      className={styles.st54}
                      fill={`url(#${styles.SVGID_6_})`}
                      d="M534.24,826.32L345.02,717.08c-3.39-1.96-6.13-0.8-6.13,2.59v146.81l201.49,116.33V836
												C540.38,832.61,537.63,828.28,534.24,826.32z"
                    />

                    <linearGradient
                      id={styles.SVGID_7_}
                      gradientUnits="userSpaceOnUse"
                      x1="338.76"
                      y1="580.4715"
                      x2="540.25"
                      y2="580.4715"
                      gradientTransform="matrix(1 0 0 -1 0 1430)"
                    >
                      <stop offset="0" stopColor="#301DD9" />
                      <stop offset="0.026" stopColor="#2E1CD1" />
                      <stop offset="0.2175" stopColor="#231398" />
                      <stop offset="0.4032" stopColor="#1A0C69" />
                      <stop offset="0.5786" stopColor="#130744" />
                      <stop offset="0.7414" stopColor="#0E032A" />
                      <stop offset="0.8867" stopColor="#0B011A" />
                      <stop offset="1" stopColor="#0A0014" />
                    </linearGradient>
                    <path
                      className={styles.st55}
                      fill={`url(#${styles.SVGID_7_})`}
                      d="M534.11,826.39L344.89,717.14c-3.39-1.96-6.13-0.8-6.13,2.59v146.81l201.49,116.33V836.06
												C540.25,832.68,537.5,828.34,534.11,826.39z"
                    />

                    <linearGradient
                      id={styles.SVGID_8_}
                      gradientUnits="userSpaceOnUse"
                      x1="338.63"
                      y1="580.4015"
                      x2="540.12"
                      y2="580.4015"
                      gradientTransform="matrix(1 0 0 -1 0 1430)"
                    >
                      <stop offset="0" stopColor="#301DD9" />
                      <stop offset="0.026" stopColor="#2E1CD1" />
                      <stop offset="0.2175" stopColor="#231398" />
                      <stop offset="0.4032" stopColor="#1A0C69" />
                      <stop offset="0.5786" stopColor="#130744" />
                      <stop offset="0.7414" stopColor="#0E032A" />
                      <stop offset="0.8867" stopColor="#0B011A" />
                      <stop offset="1" stopColor="#0A0014" />
                    </linearGradient>
                    <path
                      className={styles.st56}
                      fill={`url(#${styles.SVGID_8_})`}
                      d="M533.98,826.45L344.76,717.21c-3.39-1.96-6.13-0.8-6.13,2.59v146.81l201.49,116.33V836.13
												C540.12,832.74,537.37,828.41,533.98,826.45z"
                    />

                    <linearGradient
                      id={styles.SVGID_9_}
                      gradientUnits="userSpaceOnUse"
                      x1="338.5"
                      y1="580.3415"
                      x2="539.99"
                      y2="580.3415"
                      gradientTransform="matrix(1 0 0 -1 0 1430)"
                    >
                      <stop offset="0" stopColor="#301DD9" />
                      <stop offset="0.026" stopColor="#2E1CD1" />
                      <stop offset="0.2175" stopColor="#231398" />
                      <stop offset="0.4032" stopColor="#1A0C69" />
                      <stop offset="0.5786" stopColor="#130744" />
                      <stop offset="0.7414" stopColor="#0E032A" />
                      <stop offset="0.8867" stopColor="#0B011A" />
                      <stop offset="1" stopColor="#0A0014" />
                    </linearGradient>
                    <path
                      className={styles.st57}
                      fill={`url(#${styles.SVGID_9_})`}
                      d="M533.85,826.52L344.63,717.27c-3.39-1.96-6.13-0.8-6.13,2.59v146.81L539.99,983V836.2
												C539.98,832.81,537.24,828.48,533.85,826.52z"
                    />

                    <linearGradient
                      id={styles.SVGID_10_}
                      gradientUnits="userSpaceOnUse"
                      x1="338.37"
                      y1="580.2715"
                      x2="539.86"
                      y2="580.2715"
                      gradientTransform="matrix(1 0 0 -1 0 1430)"
                    >
                      <stop offset="0" stopColor="#301DD9" />
                      <stop offset="0.026" stopColor="#2E1CD1" />
                      <stop offset="0.2175" stopColor="#231398" />
                      <stop offset="0.4032" stopColor="#1A0C69" />
                      <stop offset="0.5786" stopColor="#130744" />
                      <stop offset="0.7414" stopColor="#0E032A" />
                      <stop offset="0.8867" stopColor="#0B011A" />
                      <stop offset="1" stopColor="#0A0014" />
                    </linearGradient>
                    <path
                      className={styles.st58}
                      fill={`url(#${styles.SVGID_10_})`}
                      d="M533.72,826.59L344.5,717.34c-3.39-1.96-6.13-0.8-6.13,2.59v146.81l201.49,116.33V836.26
												C539.85,832.88,537.1,828.54,533.72,826.59z"
                    />

                    <linearGradient
                      id={styles.SVGID_11_}
                      gradientUnits="userSpaceOnUse"
                      x1="338.23"
                      y1="580.2015"
                      x2="539.72"
                      y2="580.2015"
                      gradientTransform="matrix(1 0 0 -1 0 1430)"
                    >
                      <stop offset="0" stopColor="#301DD9" />
                      <stop offset="0.026" stopColor="#2E1CD1" />
                      <stop offset="0.2175" stopColor="#231398" />
                      <stop offset="0.4032" stopColor="#1A0C69" />
                      <stop offset="0.5786" stopColor="#130744" />
                      <stop offset="0.7414" stopColor="#0E032A" />
                      <stop offset="0.8867" stopColor="#0B011A" />
                      <stop offset="1" stopColor="#0A0014" />
                    </linearGradient>
                    <path
                      className={styles.st59}
                      fill={`url(#${styles.SVGID_11_})`}
                      d="M533.58,826.65L344.36,717.41c-3.39-1.96-6.13-0.8-6.13,2.59v146.81l201.49,116.33V836.33
												C539.72,832.94,536.97,828.61,533.58,826.65z"
                    />

                    <linearGradient
                      id={styles.SVGID_12_}
                      gradientUnits="userSpaceOnUse"
                      x1="338.09"
                      y1="580.1404"
                      x2="539.58"
                      y2="580.1404"
                      gradientTransform="matrix(1 0 0 -1 0 1430)"
                    >
                      <stop offset="0" stopColor="#301DD9" />
                      <stop offset="0.026" stopColor="#2E1CD1" />
                      <stop offset="0.2175" stopColor="#231398" />
                      <stop offset="0.4032" stopColor="#1A0C69" />
                      <stop offset="0.5786" stopColor="#130744" />
                      <stop offset="0.7414" stopColor="#0E032A" />
                      <stop offset="0.8867" stopColor="#0B011A" />
                      <stop offset="1" stopColor="#0A0014" />
                    </linearGradient>
                    <path
                      className={styles.st60}
                      fill={`url(#${styles.SVGID_12_})`}
                      d="M533.45,826.72L344.23,717.47c-3.39-1.96-6.14-0.79-6.14,2.59v146.81L539.58,983.2V836.4
												C539.59,833.01,536.84,828.68,533.45,826.72z"
                    />

                    <linearGradient
                      id={styles.SVGID_13_}
                      gradientUnits="userSpaceOnUse"
                      x1="337.96"
                      y1="580.0704"
                      x2="539.45"
                      y2="580.0704"
                      gradientTransform="matrix(1 0 0 -1 0 1430)"
                    >
                      <stop offset="0" stopColor="#301DD9" />
                      <stop offset="0.026" stopColor="#2E1CD1" />
                      <stop offset="0.2175" stopColor="#231398" />
                      <stop offset="0.4032" stopColor="#1A0C69" />
                      <stop offset="0.5786" stopColor="#130744" />
                      <stop offset="0.7414" stopColor="#0E032A" />
                      <stop offset="0.8867" stopColor="#0B011A" />
                      <stop offset="1" stopColor="#0A0014" />
                    </linearGradient>
                    <path
                      className={styles.st61}
                      fill={`url(#${styles.SVGID_13_})`}
                      d="M533.32,826.79L344.1,717.54c-3.39-1.96-6.14-0.79-6.14,2.59v146.81l201.49,116.33V836.46
												C539.46,833.08,536.71,828.74,533.32,826.79z"
                    />

                    <linearGradient
                      id={styles.SVGID_14_}
                      gradientUnits="userSpaceOnUse"
                      x1="337.83"
                      y1="580.0004"
                      x2="539.32"
                      y2="580.0004"
                      gradientTransform="matrix(1 0 0 -1 0 1430)"
                    >
                      <stop offset="0" stopColor="#301DD9" />
                      <stop offset="0.026" stopColor="#2E1CD1" />
                      <stop offset="0.2175" stopColor="#231398" />
                      <stop offset="0.4032" stopColor="#1A0C69" />
                      <stop offset="0.5786" stopColor="#130744" />
                      <stop offset="0.7414" stopColor="#0E032A" />
                      <stop offset="0.8867" stopColor="#0B011A" />
                      <stop offset="1" stopColor="#0A0014" />
                    </linearGradient>
                    <path
                      className={styles.st62}
                      fill={`url(#${styles.SVGID_14_})`}
                      d="M533.19,826.85L343.97,717.61c-3.39-1.96-6.14-0.79-6.14,2.59v146.81l201.49,116.33V836.53
												C539.32,833.14,536.58,828.81,533.19,826.85z"
                    />

                    <linearGradient
                      id={styles.SVGID_15_}
                      gradientUnits="userSpaceOnUse"
                      x1="337.7"
                      y1="579.9404"
                      x2="539.19"
                      y2="579.9404"
                      gradientTransform="matrix(1 0 0 -1 0 1430)"
                    >
                      <stop offset="0" stopColor="#301DD9" />
                      <stop offset="0.026" stopColor="#2E1CD1" />
                      <stop offset="0.2175" stopColor="#231398" />
                      <stop offset="0.4032" stopColor="#1A0C69" />
                      <stop offset="0.5786" stopColor="#130744" />
                      <stop offset="0.7414" stopColor="#0E032A" />
                      <stop offset="0.8867" stopColor="#0B011A" />
                      <stop offset="1" stopColor="#0A0014" />
                    </linearGradient>
                    <path
                      className={styles.st63}
                      fill={`url(#${styles.SVGID_15_})`}
                      d="M533.06,826.92L343.84,717.67c-3.39-1.96-6.14-0.79-6.14,2.59v146.81L539.19,983.4V836.6
												C539.19,833.21,536.44,828.88,533.06,826.92z"
                    />

                    <linearGradient
                      id={styles.SVGID_16_}
                      gradientUnits="userSpaceOnUse"
                      x1="337.56"
                      y1="579.8704"
                      x2="539.05"
                      y2="579.8704"
                      gradientTransform="matrix(1 0 0 -1 0 1430)"
                    >
                      <stop offset="0" stopColor="#301DD9" />
                      <stop offset="0.026" stopColor="#2E1CD1" />
                      <stop offset="0.2175" stopColor="#231398" />
                      <stop offset="0.4032" stopColor="#1A0C69" />
                      <stop offset="0.5786" stopColor="#130744" />
                      <stop offset="0.7414" stopColor="#0E032A" />
                      <stop offset="0.8867" stopColor="#0B011A" />
                      <stop offset="1" stopColor="#0A0014" />
                    </linearGradient>
                    <path
                      className={styles.st64}
                      fill={`url(#${styles.SVGID_16_})`}
                      d="M532.92,826.99L343.7,717.74c-3.39-1.96-6.14-0.79-6.14,2.59v146.81l201.49,116.33V836.66
												C539.06,833.28,536.31,828.94,532.92,826.99z"
                    />

                    <linearGradient
                      id={styles.SVGID_17_}
                      gradientUnits="userSpaceOnUse"
                      x1="337.43"
                      y1="579.8004"
                      x2="538.92"
                      y2="579.8004"
                      gradientTransform="matrix(1 0 0 -1 0 1430)"
                    >
                      <stop offset="0" stopColor="#301DD9" />
                      <stop offset="0.026" stopColor="#2E1CD1" />
                      <stop offset="0.2175" stopColor="#231398" />
                      <stop offset="0.4032" stopColor="#1A0C69" />
                      <stop offset="0.5786" stopColor="#130744" />
                      <stop offset="0.7414" stopColor="#0E032A" />
                      <stop offset="0.8867" stopColor="#0B011A" />
                      <stop offset="1" stopColor="#0A0014" />
                    </linearGradient>
                    <path
                      className={styles.st65}
                      fill={`url(#${styles.SVGID_17_})`}
                      d="M532.79,827.05L343.57,717.81c-3.39-1.96-6.14-0.79-6.14,2.59v146.81l201.49,116.33V836.73
												C538.93,833.34,536.18,829.01,532.79,827.05z"
                    />

                    <linearGradient
                      id={styles.SVGID_18_}
                      gradientUnits="userSpaceOnUse"
                      x1="337.3"
                      y1="579.7355"
                      x2="538.8"
                      y2="579.7355"
                      gradientTransform="matrix(1 0 0 -1 0 1430)"
                    >
                      <stop offset="0" stopColor="#301DD9" />
                      <stop offset="0.026" stopColor="#2E1CD1" />
                      <stop offset="0.2175" stopColor="#231398" />
                      <stop offset="0.4032" stopColor="#1A0C69" />
                      <stop offset="0.5786" stopColor="#130744" />
                      <stop offset="0.7414" stopColor="#0E032A" />
                      <stop offset="0.8867" stopColor="#0B011A" />
                      <stop offset="1" stopColor="#0A0014" />
                    </linearGradient>
                    <path
                      className={styles.st66}
                      fill={`url(#${styles.SVGID_18_})`}
                      d="M532.66,827.12L343.44,717.87c-3.39-1.96-6.14-0.79-6.14,2.59v146.81l201.5,116.34V836.8
												C538.8,833.41,536.05,829.08,532.66,827.12z"
                    />

                    <linearGradient
                      id={styles.SVGID_19_}
                      gradientUnits="userSpaceOnUse"
                      x1="337.17"
                      y1="579.6704"
                      x2="538.66"
                      y2="579.6704"
                      gradientTransform="matrix(1 0 0 -1 0 1430)"
                    >
                      <stop offset="0" stopColor="#301DD9" />
                      <stop offset="0.026" stopColor="#2E1CD1" />
                      <stop offset="0.2175" stopColor="#231398" />
                      <stop offset="0.4032" stopColor="#1A0C69" />
                      <stop offset="0.5786" stopColor="#130744" />
                      <stop offset="0.7414" stopColor="#0E032A" />
                      <stop offset="0.8867" stopColor="#0B011A" />
                      <stop offset="1" stopColor="#0A0014" />
                    </linearGradient>
                    <path
                      className={styles.st67}
                      fill={`url(#${styles.SVGID_19_})`}
                      d="M532.53,827.19L343.31,717.94c-3.39-1.96-6.14-0.79-6.14,2.59v146.81l201.49,116.33V836.86
												C538.66,833.48,535.92,829.14,532.53,827.19z"
                    />

                    <linearGradient
                      id={styles.SVGID_20_}
                      gradientUnits="userSpaceOnUse"
                      x1="337.04"
                      y1="579.6004"
                      x2="538.53"
                      y2="579.6004"
                      gradientTransform="matrix(1 0 0 -1 0 1430)"
                    >
                      <stop offset="0" stopColor="#301DD9" />
                      <stop offset="0.026" stopColor="#2E1CD1" />
                      <stop offset="0.2175" stopColor="#231398" />
                      <stop offset="0.4032" stopColor="#1A0C69" />
                      <stop offset="0.5786" stopColor="#130744" />
                      <stop offset="0.7414" stopColor="#0E032A" />
                      <stop offset="0.8867" stopColor="#0B011A" />
                      <stop offset="1" stopColor="#0A0014" />
                    </linearGradient>
                    <path
                      className={styles.st68}
                      fill={`url(#${styles.SVGID_20_})`}
                      d="M532.4,827.25L343.18,718.01c-3.39-1.96-6.14-0.79-6.14,2.59v146.81l201.49,116.33V836.93
												C538.53,833.54,535.79,829.21,532.4,827.25z"
                    />

                    <linearGradient
                      id={styles.SVGID_21_}
                      gradientUnits="userSpaceOnUse"
                      x1="336.91"
                      y1="579.5355"
                      x2="538.4"
                      y2="579.5355"
                      gradientTransform="matrix(1 0 0 -1 0 1430)"
                    >
                      <stop offset="0" stopColor="#301DD9" />
                      <stop offset="0.026" stopColor="#2E1CD1" />
                      <stop offset="0.2175" stopColor="#231398" />
                      <stop offset="0.4032" stopColor="#1A0C69" />
                      <stop offset="0.5786" stopColor="#130744" />
                      <stop offset="0.7414" stopColor="#0E032A" />
                      <stop offset="0.8867" stopColor="#0B011A" />
                      <stop offset="1" stopColor="#0A0014" />
                    </linearGradient>
                    <path
                      className={styles.st69}
                      fill={`url(#${styles.SVGID_21_})`}
                      d="M532.27,827.32L343.05,718.07c-3.39-1.96-6.14-0.79-6.14,2.59v146.81L538.4,983.81V837
												C538.4,833.61,535.65,829.28,532.27,827.32z"
                    />

                    <linearGradient
                      id={styles.SVGID_22_}
                      gradientUnits="userSpaceOnUse"
                      x1="336.77"
                      y1="579.4704"
                      x2="538.26"
                      y2="579.4704"
                      gradientTransform="matrix(1 0 0 -1 0 1430)"
                    >
                      <stop offset="0" stopColor="#301DD9" />
                      <stop offset="0.026" stopColor="#2E1CD1" />
                      <stop offset="0.2175" stopColor="#231398" />
                      <stop offset="0.4032" stopColor="#1A0C69" />
                      <stop offset="0.5786" stopColor="#130744" />
                      <stop offset="0.7414" stopColor="#0E032A" />
                      <stop offset="0.8867" stopColor="#0B011A" />
                      <stop offset="1" stopColor="#0A0014" />
                    </linearGradient>
                    <path
                      className={styles.st70}
                      fill={`url(#${styles.SVGID_22_})`}
                      d="M532.13,827.39L342.91,718.14c-3.39-1.96-6.14-0.79-6.14,2.59v146.81l201.49,116.33V837.06
												C538.27,833.68,535.52,829.34,532.13,827.39z"
                    />
                  </g>
                  <g>
                    <path
                      className={styles.st71}
                      d="M336.78,875.55L215.2,945.74c-3.33,1.92-3.69,4.82-0.81,6.49l191.06,110.31
												c2.88,1.66,7.91,1.45,11.23-0.47l121.58-70.19L336.78,875.55z"
                    />
                    <path
                      className={styles.st72}
                      d="M336.78,875.17L215.2,945.36c-3.33,1.92-3.69,4.82-0.81,6.49l191.06,110.31
												c2.88,1.66,7.91,1.45,11.23-0.47l121.58-70.19L336.78,875.17z"
                    />
                    <path
                      className={styles.st73}
                      d="M336.78,874.79L215.2,944.98c-3.33,1.92-3.69,4.82-0.81,6.49l191.06,110.31
												c2.88,1.66,7.91,1.45,11.23-0.47l121.58-70.19L336.78,874.79z"
                    />
                    <path
                      className={styles.st74}
                      d="M336.78,874.41L215.2,944.6c-3.33,1.92-3.69,4.82-0.81,6.49l191.06,110.31
												c2.88,1.66,7.91,1.45,11.23-0.47l121.58-70.19L336.78,874.41z"
                    />
                    <path
                      className={styles.st74}
                      d="M336.78,874.03L215.2,944.22c-3.33,1.92-3.69,4.82-0.81,6.49l191.06,110.31
												c2.88,1.66,7.91,1.45,11.23-0.47l121.58-70.19L336.78,874.03z"
                    />
                    <path
                      className={styles.st75}
                      d="M336.78,873.64l-121.58,70.2c-3.33,1.92-3.69,4.82-0.81,6.49l191.06,110.31
												c2.88,1.66,7.91,1.45,11.23-0.47l121.58-70.19L336.78,873.64z"
                    />
                    <path
                      className={styles.st75}
                      d="M336.78,873.26L215.2,943.45c-3.33,1.92-3.69,4.82-0.81,6.49l191.06,110.31
												c2.88,1.66,7.91,1.45,11.23-0.47l121.58-70.19L336.78,873.26z"
                    />
                    <path
                      className={styles.st76}
                      d="M336.78,872.88L215.2,943.07c-3.33,1.92-3.69,4.82-0.81,6.49l191.06,110.31
												c2.88,1.66,7.91,1.45,11.23-0.47l121.58-70.19L336.78,872.88z"
                    />
                    <path
                      className={styles.st77}
                      d="M336.78,872.5L215.2,942.69c-3.33,1.92-3.69,4.82-0.81,6.49l191.06,110.31
												c2.88,1.66,7.91,1.45,11.23-0.47l121.58-70.19L336.78,872.5z"
                    />
                    <path
                      className={styles.st78}
                      d="M336.78,872.12L215.2,942.31c-3.33,1.92-3.69,4.82-0.81,6.49l191.06,110.31
												c2.88,1.66,7.91,1.45,11.23-0.47l121.58-70.19L336.78,872.12z"
                    />
                    <path
                      className={styles.st78}
                      d="M336.78,871.74L215.2,941.93c-3.33,1.92-3.69,4.82-0.81,6.49l191.06,110.31
												c2.88,1.66,7.91,1.45,11.23-0.47l121.58-70.19L336.78,871.74z"
                    />
                    <path
                      className={styles.st79}
                      d="M336.78,871.36L215.2,941.55c-3.33,1.92-3.69,4.82-0.81,6.49l191.06,110.31
												c2.88,1.66,7.91,1.45,11.23-0.47l121.58-70.19L336.78,871.36z"
                    />
                    <path
                      className={styles.st79}
                      d="M336.78,870.98L215.2,941.17c-3.33,1.92-3.69,4.82-0.81,6.49l191.06,110.31
												c2.88,1.66,7.91,1.45,11.23-0.47l121.58-70.19L336.78,870.98z"
                    />
                    <path
                      className={styles.st80}
                      d="M336.78,870.59l-121.58,70.2c-3.33,1.92-3.69,4.82-0.81,6.49l191.06,110.31
												c2.88,1.66,7.91,1.45,11.23-0.47l121.58-70.19L336.78,870.59z"
                    />
                    <path
                      className={styles.st81}
                      d="M336.78,870.21L215.2,940.4c-3.33,1.92-3.69,4.82-0.81,6.49l191.06,110.31
												c2.88,1.66,7.91,1.45,11.23-0.47l121.58-70.19L336.78,870.21z"
                    />
                    <path
                      className={styles.st82}
                      d="M336.78,869.83L215.2,940.02c-3.33,1.92-3.69,4.82-0.81,6.49l191.06,110.31
												c2.88,1.66,7.91,1.45,11.23-0.47l121.58-70.19L336.78,869.83z"
                    />
                    <path
                      className={styles.st82}
                      d="M336.78,869.45L215.2,939.64c-3.33,1.92-3.69,4.82-0.81,6.49l191.06,110.31
												c2.88,1.66,7.91,1.45,11.23-0.47l121.58-70.19L336.78,869.45z"
                    />
                    <path
                      className={styles.st83}
                      d="M336.78,869.07L215.2,939.26c-3.33,1.92-3.69,4.82-0.81,6.49l191.06,110.31
												c2.88,1.66,7.91,1.45,11.23-0.47l121.58-70.19L336.78,869.07z"
                    />
                    <path
                      className={styles.st83}
                      d="M336.78,868.69L215.2,938.88c-3.33,1.92-3.69,4.82-0.81,6.49l191.06,110.31
												c2.88,1.66,7.91,1.45,11.23-0.47l121.58-70.19L336.78,868.69z"
                    />
                    <path
                      className={styles.st84}
                      d="M336.78,868.31L215.2,938.5c-3.33,1.92-3.69,4.82-0.81,6.49l191.06,110.31
												c2.88,1.66,7.91,1.45,11.23-0.47l121.58-70.19L336.78,868.31z"
                    />
                    <path
                      className={styles.st85}
                      d="M336.78,867.93L215.2,938.12c-3.33,1.92-3.69,4.82-0.81,6.49l191.06,110.31
												c2.88,1.66,7.91,1.45,11.23-0.47l121.58-70.19L336.78,867.93z"
                    />
                    <path
                      className={styles.st86}
                      d="M336.78,867.54l-121.58,70.2c-3.33,1.92-3.69,4.82-0.81,6.49l191.06,110.31
												c2.88,1.66,7.91,1.45,11.23-0.47l121.58-70.19L336.78,867.54z"
                    />
                  </g>
                  <path
                    className={styles.st87}
                    d="M513.48,1002.96l9.51-5.49v-1.77l-9.51,5.49V1002.96z M535.44,988.51
											c-0.41,0.24-0.75,0.83-0.75,1.32s0.34,0.69,0.75,0.45c0.42-0.24,0.75-0.83,0.75-1.32
											C536.19,988.48,535.85,988.27,535.44,988.51z M524.12,996.21l0.35,0.41l8.77-5.06l0.4-0.84v-1.16l-9.51,5.49v1.16H524.12z
											"
                  />
                  <g>
                    <linearGradient
                      id={styles.SVGID_23_}
                      gradientUnits="userSpaceOnUse"
                      x1="336.78"
                      y1="579.4716"
                      x2="538.27"
                      y2="579.4716"
                      gradientTransform="matrix(1 0 0 -1 0 1430)"
                    >
                      <stop offset="0" stopColor="#4A88F1" />
                      <stop offset="0.2349" stopColor="#3F6BC3" />
                      <stop offset="0.4597" stopColor="#36559E" />
                      <stop offset="0.6684" stopColor="#2F4484" />
                      <stop offset="0.8546" stopColor="#2B3A74" />
                      <stop offset="1" stopColor="#2A376E" />
                    </linearGradient>
                    <path
                      className={styles.st88}
                      fill={`url(#${styles.SVGID_23_})`}
                      d="M538.27,983.87L336.78,867.54V720.73c0-3.39,2.75-4.55,6.14-2.59l189.22,109.25
												c3.39,1.96,6.13,6.29,6.13,9.68V983.87z"
                    />
                    <g>
                      <path
                        className={styles.st46}
                        d="M437.94,778.58L437.94,778.58c-0.73-0.42-1.33-1.36-1.33-2.09v-0.47c0-0.73,0.59-0.98,1.33-0.56
													l0,0c0.73,0.42,1.33,1.36,1.33,2.09v0.47C439.26,778.75,438.67,779,437.94,778.58z"
                      />
                      <path
                        className={styles.st89}
                        d="M437.94,777.7L437.94,777.7c-0.32-0.18-0.57-0.59-0.57-0.9v-0.2c0-0.32,0.26-0.43,0.57-0.24l0,0
													c0.32,0.18,0.57,0.59,0.57,0.9v0.2C438.51,777.77,438.25,777.88,437.94,777.7z"
                      />
                      <path
                        className={styles.st90}
                        d="M434.93,775.96L434.93,775.96c-0.32-0.18-0.57-0.59-0.57-0.9v-0.2c0-0.32,0.26-0.43,0.57-0.24l0,0
													c0.32,0.18,0.57,0.59,0.57,0.9v0.2C435.51,776.04,435.25,776.14,434.93,775.96z"
                      />
                    </g>
                    <polygon
                      className={styles.st91}
                      points="530.61,972.85 344.12,865.17 344.12,726.5 530.61,834.17 											"
                    />
                  </g>
                  <g>
                    <linearGradient
                      id={styles.SVGID_24_}
                      gradientUnits="userSpaceOnUse"
                      x1="211.8456"
                      y1="468.4052"
                      x2="537.66"
                      y2="468.4052"
                      gradientTransform="matrix(1 0 0 -1 0 1430)"
                    >
                      <stop offset="0" stopColor="#4A64FF" />
                      <stop offset="0.1536" stopColor="#384CC4" />
                      <stop offset="0.3199" stopColor="#27358B" />
                      <stop offset="0.4813" stopColor="#19225C" />
                      <stop offset="0.6338" stopColor="#0E1337" />
                      <stop offset="0.7753" stopColor="#06091D" />
                      <stop offset="0.9015" stopColor="#02020D" />
                      <stop offset="1" stopColor="#000007" />
                    </linearGradient>
                    <path
                      className={styles.st92}
                      fill={`url(#${styles.SVGID_24_})`}
                      d="M336.17,867.54l201.49,116.33l-121.58,70.19c-3.33,1.92-8.36,2.13-11.24,0.47L213.79,944.22
												c-2.88-1.66-2.52-4.57,0.81-6.49L336.17,867.54z"
                    />
                    <g>
                      <path
                        className={styles.st93}
                        d="M492.73,983.37l-7.52-4.34c-0.78-0.45-2.03-0.46-2.8-0.02l-2.5,1.44
													c-0.77,0.44-0.75,1.17,0.03,1.62l7.52,4.34c0.78,0.45,2.03,0.46,2.8,0.02l2.5-1.44
													C493.52,984.54,493.51,983.82,492.73,983.37z M467.38,974.82l7.52,4.34c0.78,0.45,2.03,0.46,2.8,0.01l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-7.52-4.34c-0.78-0.45-2.03-0.46-2.8-0.01l-2.5,1.44
													C466.59,973.64,466.6,974.37,467.38,974.82z M320.28,902.23l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C319.48,901.05,319.49,901.78,320.28,902.23z M435.49,1014.66l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-1.14,0.66
													c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l1.14-0.66
													C436.29,1015.83,436.27,1015.11,435.49,1014.66z M414.06,1002.29l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02L404,999.4
													c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l1.14-0.66
													C414.86,1003.46,414.84,1002.74,414.06,1002.29z M424.78,1008.47l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-1.14,0.66
													c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l1.14-0.66
													C425.57,1009.65,425.56,1008.92,424.78,1008.47z M430.56,1005.13l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-1.52,0.88
													c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l1.52-0.88
													C431.36,1006.31,431.34,1005.58,430.56,1005.13z M331.47,908.69l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C330.68,907.52,330.69,908.24,331.47,908.69z M335.01,921.5l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.01l-6,3.47c-0.77,0.44-0.76,1.17,0.03,1.62l6.12,3.53
													C332.99,921.94,334.24,921.95,335.01,921.5z M318.63,925.77l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C317.84,924.59,317.85,925.32,318.63,925.77z M338.46,935.62l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47c-0.77,0.44-0.75,1.16,0.03,1.62l6.12,3.53
													C336.44,936.05,337.7,936.06,338.46,935.62z M349.38,941.92l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
													C347.36,942.36,348.61,942.36,349.38,941.92z M351.38,944.67l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C350.59,943.5,350.6,944.22,351.38,944.67z M371.21,954.53l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
													C369.19,954.96,370.45,954.97,371.21,954.53z M382.18,960.86l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
													C380.16,961.29,381.42,961.3,382.18,960.86z M393.32,967.29l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
													C391.3,967.72,392.55,967.73,393.32,967.29z M395.64,970.23l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6,3.47
													C394.85,969.06,394.86,969.78,395.64,970.23z M415.48,980.08l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
													C413.46,980.52,414.71,980.52,415.48,980.08z M417.75,982.99l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C416.96,981.82,416.97,982.54,417.75,982.99z M428.66,989.3l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C427.87,988.12,427.88,988.85,428.66,989.3z M464.22,999.69l-15.54-8.97c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													c-0.77,0.44-0.75,1.17,0.03,1.62l15.54,8.97c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													C465.01,1000.86,465,1000.14,464.22,999.69z M309.56,908.41l11.24,6.49c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.76-0.44,0.75-1.17-0.03-1.62l-11.24-6.49c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C308.77,907.24,308.78,907.96,309.56,908.41z M299.07,914.47l14.29,8.25c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-14.29-8.25c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C298.27,913.3,298.29,914.02,299.07,914.47z M312.83,934.6l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C312.04,933.42,312.05,934.15,312.83,934.6z M324.07,941.09l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6,3.47
													C323.28,939.91,323.29,940.64,324.07,941.09z M341.37,951.08c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6,3.47c-0.77,0.44-0.76,1.17,0.03,1.62
													L341.37,951.08z M346.44,954l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62
													l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47C345.65,952.83,345.66,953.55,346.44,954z M357.62,960.46
													l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47C356.83,959.28,356.84,960.01,357.62,960.46z M368.8,966.91l6.12,3.53
													c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02
													l-6.01,3.47C368.01,965.74,368.02,966.46,368.8,966.91z M388.91,976.92l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62
													l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
													C386.89,977.35,388.14,977.36,388.91,976.92z M391.17,979.83l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6-3.47
													c0.77-0.44,0.76-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C390.38,978.65,390.39,979.38,391.17,979.83z M411.28,989.83l6-3.47c0.77-0.44,0.76-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
													C409.26,990.27,410.51,990.28,411.28,989.83z M422.46,996.29l6-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
													C420.44,996.73,421.69,996.73,422.46,996.29z M408.62,992.49l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.43,3.71
													c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.43-3.72
													C409.41,993.67,409.4,992.95,408.62,992.49z M312.67,937.09l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.43,3.71
													c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.43-3.71
													C313.46,938.27,313.45,937.54,312.67,937.09z M301.73,930.78l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.43,3.71
													c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.43-3.71
													C302.52,931.95,302.51,931.23,301.73,930.78z M290.65,924.38l-4.38-2.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.43,3.71
													c-0.77,0.44-0.75,1.17,0.03,1.62l4.38,2.53c0.78,0.45,2.03,0.46,2.8,0.01l6.43-3.71
													C291.44,925.56,291.43,924.83,290.65,924.38z M328.72,946.36l-11.29-6.52c-0.78-0.45-2.03-0.46-2.8-0.01l-6.43,3.71
													c-0.77,0.44-0.76,1.17,0.03,1.62l11.29,6.52c0.78,0.45,2.03,0.46,2.8,0.02l6.43-3.71
													C329.52,947.54,329.5,946.82,328.72,946.36z M397.59,986.12l-11.89-6.87c-0.78-0.45-2.03-0.46-2.8-0.02l-6.43,3.71
													c-0.77,0.44-0.75,1.17,0.03,1.62l11.89,6.87c0.78,0.45,2.03,0.46,2.8,0.01l6.43-3.71
													C398.38,987.3,398.37,986.57,397.59,986.12z M380.63,976.33l-47.08-27.18c-0.78-0.45-2.03-0.46-2.8-0.02l-6.43,3.71
													c-0.77,0.44-0.75,1.17,0.03,1.62l47.08,27.18c0.78,0.45,2.03,0.46,2.8,0.01l6.43-3.71
													C381.42,977.51,381.41,976.78,380.63,976.33z M453.67,1005.78l-20.78-11.99c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													c-0.77,0.44-0.75,1.17,0.03,1.62l20.78,12c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													C454.47,1006.95,454.45,1006.23,453.67,1005.78z M288.52,920.56l19.3,11.14c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-19.3-11.14c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C287.73,919.39,287.74,920.11,288.52,920.56z M337.25,924.4l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C336.46,923.23,336.47,923.95,337.25,924.4z M348.41,930.84l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6,3.47
													C347.62,929.67,347.63,930.39,348.41,930.84z M359.57,937.29l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6-3.47
													c0.77-0.44,0.76-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C358.78,936.11,358.79,936.83,359.57,937.29z M370.73,943.73l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6,3.47
													C369.94,942.55,369.95,943.28,370.73,943.73z M388.01,953.7c0.78,0.45,2.03,0.46,2.8,0.01l6-3.47
													c0.77-0.44,0.76-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62
													L388.01,953.7z M399.16,960.15c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.01l-6,3.47c-0.77,0.44-0.75,1.17,0.03,1.62L399.16,960.15z M413.12,966.6l6-3.47
													c0.77-0.44,0.76-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62
													l6.12,3.53C411.1,967.04,412.36,967.05,413.12,966.6z M421.48,973.03c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6,3.47c-0.77,0.44-0.75,1.17,0.03,1.62
													L421.48,973.03z M435.44,979.49l6-3.47c0.77-0.44,0.76-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01
													l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53C433.42,979.92,434.68,979.93,435.44,979.49z M446.6,985.93
													l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53C444.58,986.37,445.83,986.37,446.6,985.93z M454.82,983.74l-6.01,3.47
													c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6-3.47c0.77-0.44,0.76-1.17-0.03-1.62
													l-6.12-3.53C456.84,983.31,455.59,983.3,454.82,983.74z M474.72,993.63l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02
													l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													C475.51,994.8,475.5,994.08,474.72,993.63z M342.66,915.15l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6-3.47
													c0.77-0.44,0.76-1.16-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C341.87,913.98,341.88,914.7,342.66,915.15z M353.86,921.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C353.06,920.44,353.08,921.16,353.86,921.62z M365.05,928.08l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C364.26,926.9,364.27,927.63,365.05,928.08z M376.24,934.54l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C375.45,933.37,375.46,934.09,376.24,934.54z M387.44,941l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C386.65,939.83,386.66,940.55,387.44,941z M398.63,947.47l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6,3.47
													C397.84,946.29,397.85,947.02,398.63,947.47z M409.82,953.93l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C409.03,952.75,409.04,953.48,409.82,953.93z M421.02,960.39l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.76-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C420.23,959.22,420.24,959.94,421.02,960.39z M432.21,966.85l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C431.42,965.68,431.43,966.4,432.21,966.85z M443.41,973.32l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C442.61,972.14,442.63,972.87,443.41,973.32z M454.6,979.78l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C453.81,978.61,453.82,979.33,454.6,979.78z M485.43,987.44l-11.57-6.68c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													c-0.77,0.44-0.75,1.17,0.03,1.62l11.57,6.68c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													C486.22,988.62,486.21,987.89,485.43,987.44z M331.04,896.1l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.01l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.01l-2.5,1.44
													C330.25,894.93,330.26,895.65,331.04,896.1z M342.19,902.54l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.01l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.01l-2.5,1.44
													C341.4,901.36,341.41,902.09,342.19,902.54z M353.37,908.99l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.02l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.02l-2.5,1.44
													C352.57,907.81,352.59,908.54,353.37,908.99z M364.96,915.68l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.02l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.02l-2.5,1.44
													C364.16,914.51,364.18,915.23,364.96,915.68z M376.45,922.32l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.02l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.02l-2.5,1.44
													C375.66,921.14,375.67,921.87,376.45,922.32z M387.73,928.83l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.02l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.02l-2.5,1.44
													C386.94,927.66,386.95,928.38,387.73,928.83z M398.92,935.29l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.01l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.01l-2.5,1.44
													C398.13,934.12,398.14,934.84,398.92,935.29z M410.13,941.76l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.02l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.02l-2.5,1.44
													C409.33,940.58,409.35,941.31,410.13,941.76z M421.39,948.26l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.01l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.01l-2.5,1.44
													C420.6,947.09,420.61,947.81,421.39,948.26z M432.87,954.89l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.01l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.01l-2.5,1.44
													C432.07,953.71,432.08,954.44,432.87,954.89z M444.47,961.59l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.01l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.01l-2.5,1.44
													C443.68,960.41,443.69,961.14,444.47,961.59z M455.87,968.23l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.01l2.5-1.44
													c0.77-0.44,0.76-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.01l-2.5,1.44
													C455.08,967.06,455.09,967.78,455.87,968.23z"
                      />
                      <path
                        className={styles.st94}
                        d="M492.73,983.32l-7.52-4.34c-0.78-0.45-2.03-0.46-2.8-0.02l-2.5,1.44
													c-0.77,0.44-0.75,1.17,0.03,1.62l7.52,4.34c0.78,0.45,2.03,0.46,2.8,0.02l2.5-1.44
													C493.52,984.5,493.51,983.77,492.73,983.32z M467.38,974.77l7.52,4.34c0.78,0.45,2.03,0.46,2.8,0.01l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-7.52-4.34c-0.78-0.45-2.03-0.46-2.8-0.01l-2.5,1.44
													C466.59,973.6,466.6,974.32,467.38,974.77z M320.28,902.18l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C319.48,901.01,319.49,901.73,320.28,902.18z M435.49,1014.61l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-1.14,0.66
													c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l1.14-0.66
													C436.29,1015.79,436.27,1015.07,435.49,1014.61z M414.06,1002.24l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-1.14,0.66
													c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l1.14-0.66
													C414.86,1003.42,414.84,1002.69,414.06,1002.24z M424.78,1008.43l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-1.14,0.66
													c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l1.14-0.66
													C425.57,1009.6,425.56,1008.88,424.78,1008.43z M430.56,1005.09l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-1.52,0.88
													c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l1.52-0.88
													C431.36,1006.26,431.34,1005.54,430.56,1005.09z M331.47,908.65l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C330.68,907.47,330.69,908.2,331.47,908.65z M335.01,921.46l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.01l-6,3.47c-0.77,0.44-0.76,1.17,0.03,1.62l6.12,3.53
													C332.99,921.9,334.24,921.9,335.01,921.46z M318.63,925.72l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C317.84,924.55,317.85,925.27,318.63,925.72z M338.46,935.57l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47c-0.77,0.44-0.75,1.16,0.03,1.62l6.12,3.53
													C336.44,936.01,337.7,936.02,338.46,935.57z M349.38,941.88l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
													C347.36,942.31,348.61,942.32,349.38,941.88z M351.38,944.63l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C350.59,943.46,350.6,944.18,351.38,944.63z M371.21,954.48l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
													C369.19,954.92,370.45,954.92,371.21,954.48z M382.18,960.82l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
													C380.16,961.25,381.42,961.26,382.18,960.82z M393.32,967.24l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
													C391.3,967.68,392.55,967.69,393.32,967.24z M395.64,970.19l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6,3.47
													C394.85,969.01,394.86,969.74,395.64,970.19z M415.48,980.04l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
													C413.46,980.47,414.71,980.48,415.48,980.04z M417.75,982.95l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C416.96,981.78,416.97,982.5,417.75,982.95z M428.66,989.25l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C427.87,988.08,427.88,988.8,428.66,989.25z M464.22,999.64l-15.54-8.97c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													c-0.77,0.44-0.75,1.17,0.03,1.62l15.54,8.97c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													C465.01,1000.82,465,1000.09,464.22,999.64z M309.56,908.37l11.24,6.49c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.76-0.44,0.75-1.17-0.03-1.62l-11.24-6.49c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C308.77,907.19,308.78,907.92,309.56,908.37z M299.07,914.43l14.29,8.25c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-14.29-8.25c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C298.27,913.25,298.29,913.98,299.07,914.43z M312.83,934.55l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C312.04,933.38,312.05,934.1,312.83,934.55z M324.07,941.04l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6,3.47
													C323.28,939.87,323.29,940.59,324.07,941.04z M341.37,951.03c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6,3.47c-0.77,0.44-0.76,1.17,0.03,1.62
													L341.37,951.03z M346.44,953.96l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62
													l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47C345.65,952.78,345.66,953.51,346.44,953.96z M357.62,960.41
													l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47C356.83,959.24,356.84,959.96,357.62,960.41z M368.8,966.87l6.12,3.53
													c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02
													l-6.01,3.47C368.01,965.7,368.02,966.42,368.8,966.87z M388.91,976.88l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62
													l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
													C386.89,977.31,388.14,977.32,388.91,976.88z M391.17,979.78l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6-3.47
													c0.77-0.44,0.76-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C390.38,978.61,390.39,979.33,391.17,979.78z M411.28,989.79l6-3.47c0.77-0.44,0.76-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
													C409.26,990.23,410.51,990.23,411.28,989.79z M422.46,996.25l6-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
													C420.44,996.68,421.69,996.69,422.46,996.25z M408.62,992.45l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.43,3.71
													c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.43-3.72
													C409.41,993.62,409.4,992.9,408.62,992.45z M312.67,937.05l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.43,3.71
													c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.43-3.71
													C313.46,938.22,313.45,937.5,312.67,937.05z M301.73,930.74l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.43,3.71
													c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.43-3.71
													C302.52,931.91,302.51,931.19,301.73,930.74z M290.65,924.34l-4.38-2.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.43,3.71
													c-0.77,0.44-0.75,1.17,0.03,1.62l4.38,2.53c0.78,0.45,2.03,0.46,2.8,0.01l6.43-3.71
													C291.44,925.51,291.43,924.79,290.65,924.34z M328.72,946.32l-11.29-6.52c-0.78-0.45-2.03-0.46-2.8-0.01l-6.43,3.71
													c-0.77,0.44-0.76,1.17,0.03,1.62l11.29,6.52c0.78,0.45,2.03,0.46,2.8,0.02l6.43-3.71
													C329.52,947.49,329.5,946.77,328.72,946.32z M397.59,986.08l-11.89-6.87c-0.78-0.45-2.03-0.46-2.8-0.02l-6.43,3.71
													c-0.77,0.44-0.75,1.17,0.03,1.62l11.89,6.87c0.78,0.45,2.03,0.46,2.8,0.01l6.43-3.71
													C398.38,987.25,398.37,986.53,397.59,986.08z M380.63,976.29l-47.08-27.18c-0.78-0.45-2.03-0.46-2.8-0.02l-6.43,3.71
													c-0.77,0.44-0.75,1.17,0.03,1.62l47.08,27.18c0.78,0.45,2.03,0.46,2.8,0.01l6.43-3.71
													C381.42,977.46,381.41,976.74,380.63,976.29z M453.67,1005.73l-20.78-11.99c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													c-0.77,0.44-0.75,1.17,0.03,1.62l20.78,12c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													C454.47,1006.91,454.45,1006.18,453.67,1005.73z M288.52,920.52l19.3,11.14c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-19.3-11.14c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C287.73,919.34,287.74,920.07,288.52,920.52z M337.25,924.36l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C336.46,923.18,336.47,923.91,337.25,924.36z M348.41,930.8l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6,3.47
													C347.62,929.62,347.63,930.35,348.41,930.8z M359.57,937.24l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6-3.47
													c0.77-0.44,0.76-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C358.78,936.07,358.79,936.79,359.57,937.24z M370.73,943.68l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6,3.47
													C369.94,942.51,369.95,943.23,370.73,943.68z M388.01,953.66c0.78,0.45,2.03,0.46,2.8,0.01l6-3.47
													c0.77-0.44,0.76-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62
													L388.01,953.66z M399.16,960.1c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.01l-6,3.47c-0.77,0.44-0.75,1.17,0.03,1.62L399.16,960.1z M413.12,966.56l6-3.47
													c0.77-0.44,0.76-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62
													l6.12,3.53C411.1,966.99,412.36,967,413.12,966.56z M421.48,972.99c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6,3.47c-0.77,0.44-0.75,1.17,0.03,1.62
													L421.48,972.99z M435.44,979.44l6-3.47c0.77-0.44,0.76-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01
													l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53C433.42,979.88,434.68,979.89,435.44,979.44z M446.6,985.89
													l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53C444.58,986.32,445.83,986.33,446.6,985.89z M454.82,983.7l-6.01,3.47
													c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6-3.47c0.77-0.44,0.76-1.17-0.03-1.62
													l-6.12-3.53C456.84,983.26,455.59,983.26,454.82,983.7z M474.72,993.58l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02
													l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													C475.51,994.76,475.5,994.03,474.72,993.58z M342.66,915.11l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6-3.47
													c0.77-0.44,0.76-1.16-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C341.87,913.93,341.88,914.66,342.66,915.11z M353.86,921.57l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C353.06,920.4,353.08,921.12,353.86,921.57z M365.05,928.03l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C364.26,926.86,364.27,927.58,365.05,928.03z M376.24,934.5l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C375.45,933.32,375.46,934.05,376.24,934.5z M387.44,940.96l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C386.65,939.79,386.66,940.51,387.44,940.96z M398.63,947.42l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6,3.47
													C397.84,946.25,397.85,946.97,398.63,947.42z M409.82,953.88l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C409.03,952.71,409.04,953.43,409.82,953.88z M421.02,960.35l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.76-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C420.23,959.17,420.24,959.9,421.02,960.35z M432.21,966.81l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C431.42,965.64,431.43,966.36,432.21,966.81z M443.41,973.27l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C442.61,972.1,442.63,972.82,443.41,973.27z M454.6,979.74l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C453.81,978.56,453.82,979.28,454.6,979.74z M485.43,987.4l-11.57-6.68c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													c-0.77,0.44-0.75,1.17,0.03,1.62l11.57,6.68c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													C486.22,988.57,486.21,987.85,485.43,987.4z M331.04,896.06l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.01l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.01l-2.5,1.44
													C330.25,894.88,330.26,895.61,331.04,896.06z M342.19,902.49l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.01l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.01l-2.5,1.44
													C341.4,901.32,341.41,902.04,342.19,902.49z M353.37,908.94l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.02l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.02l-2.5,1.44
													C352.57,907.77,352.59,908.49,353.37,908.94z M364.96,915.64l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.02l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.02l-2.5,1.44
													C364.16,914.46,364.18,915.19,364.96,915.64z M376.45,922.27l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.02l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.02l-2.5,1.44
													C375.66,921.1,375.67,921.82,376.45,922.27z M387.73,928.79l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.02l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.02l-2.5,1.44
													C386.94,927.61,386.95,928.34,387.73,928.79z M398.92,935.25l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.01l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.01l-2.5,1.44
													C398.13,934.07,398.14,934.8,398.92,935.25z M410.13,941.72l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.02l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.02l-2.5,1.44
													C409.33,940.54,409.35,941.26,410.13,941.72z M421.39,948.22l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.01l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.01l-2.5,1.44
													C420.6,947.04,420.61,947.77,421.39,948.22z M432.87,954.84l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.01l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.01l-2.5,1.44
													C432.07,953.67,432.08,954.39,432.87,954.84z M444.47,961.54l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.01l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.01l-2.5,1.44
													C443.68,960.37,443.69,961.09,444.47,961.54z M455.87,968.19l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.01l2.5-1.44
													c0.77-0.44,0.76-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.01l-2.5,1.44
													C455.08,967.01,455.09,967.74,455.87,968.19z"
                      />
                      <path
                        className={styles.st95}
                        d="M492.73,983.28l-7.52-4.34c-0.78-0.45-2.03-0.46-2.8-0.02l-2.5,1.44
													c-0.77,0.44-0.75,1.17,0.03,1.62l7.52,4.34c0.78,0.45,2.03,0.46,2.8,0.02l2.5-1.44
													C493.52,984.45,493.51,983.73,492.73,983.28z M467.38,974.73l7.52,4.34c0.78,0.45,2.03,0.46,2.8,0.01l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-7.52-4.34c-0.78-0.45-2.03-0.46-2.8-0.01l-2.5,1.44
													C466.59,973.56,466.6,974.28,467.38,974.73z M320.28,902.14l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C319.48,900.96,319.49,901.69,320.28,902.14z M435.49,1014.57l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-1.14,0.66
													c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l1.14-0.66
													C436.29,1015.74,436.27,1015.02,435.49,1014.57z M414.06,1002.2l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-1.14,0.66
													c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l1.14-0.66
													C414.86,1003.37,414.84,1002.65,414.06,1002.2z M424.78,1008.38l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-1.14,0.66
													c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l1.14-0.66
													C425.57,1009.56,425.56,1008.83,424.78,1008.38z M430.56,1005.04l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-1.52,0.88
													c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l1.52-0.88
													C431.36,1006.22,431.34,1005.49,430.56,1005.04z M331.47,908.6l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C330.68,907.43,330.69,908.15,331.47,908.6z M335.01,921.42l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.01l-6,3.47c-0.77,0.44-0.76,1.17,0.03,1.62l6.12,3.53
													C332.99,921.85,334.24,921.86,335.01,921.42z M318.63,925.68l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C317.84,924.5,317.85,925.23,318.63,925.68z M338.46,935.53l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47c-0.77,0.44-0.75,1.16,0.03,1.62l6.12,3.53
													C336.44,935.96,337.7,935.97,338.46,935.53z M349.38,941.83l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
													C347.36,942.27,348.61,942.27,349.38,941.83z M351.38,944.59l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C350.59,943.41,350.6,944.14,351.38,944.59z M371.21,954.44l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
													C369.19,954.87,370.45,954.88,371.21,954.44z M382.18,960.77l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
													C380.16,961.21,381.42,961.21,382.18,960.77z M393.32,967.2l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
													C391.3,967.63,392.55,967.64,393.32,967.2z M395.64,970.14l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6,3.47
													C394.85,968.97,394.86,969.69,395.64,970.14z M415.48,979.99l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
													C413.46,980.43,414.71,980.44,415.48,979.99z M417.75,982.91l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C416.96,981.73,416.97,982.45,417.75,982.91z M428.66,989.21l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C427.87,988.03,427.88,988.76,428.66,989.21z M464.22,999.6l-15.54-8.97c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													c-0.77,0.44-0.75,1.17,0.03,1.62l15.54,8.97c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													C465.01,1000.77,465,1000.05,464.22,999.6z M309.56,908.33l11.24,6.49c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.76-0.44,0.75-1.17-0.03-1.62l-11.24-6.49c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C308.77,907.15,308.78,907.87,309.56,908.33z M299.07,914.38l14.29,8.25c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-14.29-8.25c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C298.27,913.21,298.29,913.93,299.07,914.38z M312.83,934.51l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C312.04,933.34,312.05,934.06,312.83,934.51z M324.07,941l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6,3.47
													C323.28,939.82,323.29,940.55,324.07,941z M341.37,950.99c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6,3.47c-0.77,0.44-0.76,1.17,0.03,1.62
													L341.37,950.99z M346.44,953.91l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62
													l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47C345.65,952.74,345.66,953.46,346.44,953.91z M357.62,960.37
													l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47C356.83,959.2,356.84,959.92,357.62,960.37z M368.8,966.83l6.12,3.53
													c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02
													l-6.01,3.47C368.01,965.65,368.02,966.38,368.8,966.83z M388.91,976.83l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62
													l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
													C386.89,977.27,388.14,977.27,388.91,976.83z M391.17,979.74l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6-3.47
													c0.77-0.44,0.76-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C390.38,978.57,390.39,979.29,391.17,979.74z M411.28,989.75l6-3.47c0.77-0.44,0.76-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
													C409.26,990.18,410.51,990.19,411.28,989.75z M422.46,996.2l6-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
													C420.44,996.64,421.69,996.64,422.46,996.2z M408.62,992.41l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.43,3.71
													c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.43-3.72
													C409.41,993.58,409.4,992.86,408.62,992.41z M312.67,937.01l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.43,3.71
													c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.43-3.71
													C313.46,938.18,313.45,937.46,312.67,937.01z M301.73,930.69l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.43,3.71
													c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.43-3.71
													C302.52,931.87,302.51,931.14,301.73,930.69z M290.65,924.3l-4.38-2.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.43,3.71
													c-0.77,0.44-0.75,1.17,0.03,1.62l4.38,2.53c0.78,0.45,2.03,0.46,2.8,0.01l6.43-3.71
													C291.44,925.47,291.43,924.75,290.65,924.3z M328.72,946.28l-11.29-6.52c-0.78-0.45-2.03-0.46-2.8-0.01l-6.43,3.71
													c-0.77,0.44-0.76,1.17,0.03,1.62l11.29,6.52c0.78,0.45,2.03,0.46,2.8,0.02l6.43-3.71
													C329.52,947.45,329.5,946.73,328.72,946.28z M397.59,986.04l-11.89-6.87c-0.78-0.45-2.03-0.46-2.8-0.02l-6.43,3.71
													c-0.77,0.44-0.75,1.17,0.03,1.62l11.89,6.87c0.78,0.45,2.03,0.46,2.8,0.01l6.43-3.71
													C398.38,987.21,398.37,986.49,397.59,986.04z M380.63,976.25l-47.08-27.18c-0.78-0.45-2.03-0.46-2.8-0.02l-6.43,3.71
													c-0.77,0.44-0.75,1.17,0.03,1.62l47.08,27.18c0.78,0.45,2.03,0.46,2.8,0.01l6.43-3.71
													C381.42,977.42,381.41,976.7,380.63,976.25z M453.67,1005.69l-20.78-11.99c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													c-0.77,0.44-0.75,1.17,0.03,1.62l20.78,12c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													C454.47,1006.86,454.45,1006.14,453.67,1005.69z M288.52,920.47l19.3,11.14c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-19.3-11.14c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C287.73,919.3,287.74,920.02,288.52,920.47z M337.25,924.31l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C336.46,923.14,336.47,923.86,337.25,924.31z M348.41,930.75l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6,3.47
													C347.62,929.58,347.63,930.3,348.41,930.75z M359.57,937.2l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6-3.47
													c0.77-0.44,0.76-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C358.78,936.02,358.79,936.75,359.57,937.2z M370.73,943.64l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6,3.47
													C369.94,942.47,369.95,943.19,370.73,943.64z M388.01,953.62c0.78,0.45,2.03,0.46,2.8,0.01l6-3.47
													c0.77-0.44,0.76-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62
													L388.01,953.62z M399.16,960.06c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.01l-6,3.47c-0.77,0.44-0.75,1.17,0.03,1.62L399.16,960.06z M413.12,966.52l6-3.47
													c0.77-0.44,0.76-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62
													l6.12,3.53C411.1,966.95,412.36,966.96,413.12,966.52z M421.48,972.94c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6,3.47c-0.77,0.44-0.75,1.17,0.03,1.62
													L421.48,972.94z M435.44,979.4l6-3.47c0.77-0.44,0.76-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01
													l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53C433.42,979.84,434.68,979.84,435.44,979.4z M446.6,985.84
													l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53C444.58,986.28,445.83,986.29,446.6,985.84z M454.82,983.65l-6.01,3.47
													c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6-3.47c0.77-0.44,0.76-1.17-0.03-1.62
													l-6.12-3.53C456.84,983.22,455.59,983.21,454.82,983.65z M474.72,993.54l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02
													l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													C475.51,994.71,475.5,993.99,474.72,993.54z M342.66,915.06l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6-3.47
													c0.77-0.44,0.76-1.16-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C341.87,913.89,341.88,914.61,342.66,915.06z M353.86,921.53l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C353.06,920.35,353.08,921.08,353.86,921.53z M365.05,927.99l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C364.26,926.82,364.27,927.54,365.05,927.99z M376.24,934.45l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C375.45,933.28,375.46,934,376.24,934.45z M387.44,940.92l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C386.65,939.74,386.66,940.46,387.44,940.92z M398.63,947.38l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6,3.47
													C397.84,946.2,397.85,946.93,398.63,947.38z M409.82,953.84l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C409.03,952.67,409.04,953.39,409.82,953.84z M421.02,960.3l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.76-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C420.23,959.13,420.24,959.85,421.02,960.3z M432.21,966.77l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C431.42,965.59,431.43,966.32,432.21,966.77z M443.41,973.23l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C442.61,972.05,442.63,972.78,443.41,973.23z M454.6,979.69l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C453.81,978.52,453.82,979.24,454.6,979.69z M485.43,987.35l-11.57-6.68c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													c-0.77,0.44-0.75,1.17,0.03,1.62l11.57,6.68c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													C486.22,988.53,486.21,987.8,485.43,987.35z M331.04,896.01l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.01l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.01l-2.5,1.44
													C330.25,894.84,330.26,895.56,331.04,896.01z M342.19,902.45l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.01l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.01l-2.5,1.44
													C341.4,901.27,341.41,902,342.19,902.45z M353.37,908.9l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.02l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.02l-2.5,1.44
													C352.57,907.73,352.59,908.45,353.37,908.9z M364.96,915.59l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.02l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.02l-2.5,1.44
													C364.16,914.42,364.18,915.14,364.96,915.59z M376.45,922.23l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.02l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.02l-2.5,1.44
													C375.66,921.06,375.67,921.78,376.45,922.23z M387.73,928.74l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.02l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62L393,925.7c-0.78-0.45-2.03-0.46-2.8-0.02l-2.5,1.44
													C386.94,927.57,386.95,928.29,387.73,928.74z M398.92,935.2l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.01l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.01l-2.5,1.44
													C398.13,934.03,398.14,934.75,398.92,935.2z M410.13,941.67l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.02l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.02l-2.5,1.44
													C409.33,940.5,409.35,941.22,410.13,941.67z M421.39,948.17l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.01l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.01l-2.5,1.44
													C420.6,947,420.61,947.72,421.39,948.17z M432.87,954.8l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.01l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.01l-2.5,1.44
													C432.07,953.63,432.08,954.35,432.87,954.8z M444.47,961.5l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.01l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.01l-2.5,1.44
													C443.68,960.32,443.69,961.05,444.47,961.5z M455.87,968.15l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.01l2.5-1.44
													c0.77-0.44,0.76-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.01l-2.5,1.44
													C455.08,966.97,455.09,967.69,455.87,968.15z"
                      />
                      <path
                        className={styles.st96}
                        d="M492.73,983.23l-7.52-4.34c-0.78-0.45-2.03-0.46-2.8-0.02l-2.5,1.44
													c-0.77,0.44-0.75,1.17,0.03,1.62l7.52,4.34c0.78,0.45,2.03,0.46,2.8,0.02l2.5-1.44
													C493.52,984.41,493.51,983.68,492.73,983.23z M467.38,974.69l7.52,4.34c0.78,0.45,2.03,0.46,2.8,0.01l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-7.52-4.34c-0.78-0.45-2.03-0.46-2.8-0.01l-2.5,1.44
													C466.59,973.51,466.6,974.23,467.38,974.69z M320.28,902.09l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C319.48,900.92,319.49,901.64,320.28,902.09z M435.49,1014.53l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-1.14,0.66
													c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l1.14-0.66
													C436.29,1015.7,436.27,1014.98,435.49,1014.53z M414.06,1002.15l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-1.14,0.66
													c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l1.14-0.66
													C414.86,1003.33,414.84,1002.6,414.06,1002.15z M424.78,1008.34l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-1.14,0.66
													c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l1.14-0.66
													C425.57,1009.51,425.56,1008.79,424.78,1008.34z M430.56,1005l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-1.52,0.88
													c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l1.52-0.88
													C431.36,1006.17,431.34,1005.45,430.56,1005z M331.47,908.56l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C330.68,907.38,330.69,908.11,331.47,908.56z M335.01,921.37l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.01l-6,3.47c-0.77,0.44-0.76,1.17,0.03,1.62l6.12,3.53
													C332.99,921.81,334.24,921.81,335.01,921.37z M318.63,925.63l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C317.84,924.46,317.85,925.18,318.63,925.63z M338.46,935.48l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47c-0.77,0.44-0.75,1.16,0.03,1.62l6.12,3.53
													C336.44,935.92,337.7,935.93,338.46,935.48z M349.38,941.79l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
													C347.36,942.22,348.61,942.23,349.38,941.79z M351.38,944.54l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C350.59,943.37,350.6,944.09,351.38,944.54z M371.21,954.39l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
													C369.19,954.83,370.45,954.83,371.21,954.39z M382.18,960.73l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
													C380.16,961.16,381.42,961.17,382.18,960.73z M393.32,967.16l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
													C391.3,967.59,392.55,967.6,393.32,967.16z M395.64,970.1l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6,3.47
													C394.85,968.92,394.86,969.65,395.64,970.1z M415.48,979.95l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
													C413.46,980.38,414.71,980.39,415.48,979.95z M417.75,982.86l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C416.96,981.69,416.97,982.41,417.75,982.86z M428.66,989.16l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C427.87,987.99,427.88,988.71,428.66,989.16z M464.22,999.55l-15.54-8.97c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													c-0.77,0.44-0.75,1.17,0.03,1.62l15.54,8.97c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													C465.01,1000.73,465,1000.01,464.22,999.55z M309.56,908.28l11.24,6.49c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.76-0.44,0.75-1.17-0.03-1.62l-11.24-6.49c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C308.77,907.11,308.78,907.83,309.56,908.28z M299.07,914.34l14.29,8.25c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-14.29-8.25c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C298.27,913.17,298.29,913.89,299.07,914.34z M312.83,934.47l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C312.04,933.29,312.05,934.02,312.83,934.47z M324.07,940.95l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6,3.47
													C323.28,939.78,323.29,940.5,324.07,940.95z M341.37,950.94c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6,3.47c-0.77,0.44-0.76,1.17,0.03,1.62
													L341.37,950.94z M346.44,953.87l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62
													l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47C345.65,952.69,345.66,953.42,346.44,953.87z M357.62,960.33
													l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47C356.83,959.15,356.84,959.87,357.62,960.33z M368.8,966.78l6.12,3.53
													c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02
													l-6.01,3.47C368.01,965.61,368.02,966.33,368.8,966.78z M388.91,976.79l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62
													l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
													C386.89,977.22,388.14,977.23,388.91,976.79z M391.17,979.7l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6-3.47
													c0.77-0.44,0.76-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C390.38,978.52,390.39,979.25,391.17,979.7z M411.28,989.7l6-3.47c0.77-0.44,0.76-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
													C409.26,990.14,410.51,990.14,411.28,989.7z M422.46,996.16l6-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
													C420.44,996.59,421.69,996.6,422.46,996.16z M408.62,992.36l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.43,3.71
													c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.43-3.72
													C409.41,993.54,409.4,992.81,408.62,992.36z M312.67,936.96l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.43,3.71
													c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.43-3.71
													C313.46,938.14,313.45,937.41,312.67,936.96z M301.73,930.65l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.43,3.71
													c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.43-3.71
													C302.52,931.82,302.51,931.1,301.73,930.65z M290.65,924.25l-4.38-2.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.43,3.71
													c-0.77,0.44-0.75,1.17,0.03,1.62l4.38,2.53c0.78,0.45,2.03,0.46,2.8,0.01l6.43-3.71
													C291.44,925.43,291.43,924.7,290.65,924.25z M328.72,946.23l-11.29-6.52c-0.78-0.45-2.03-0.46-2.8-0.01l-6.43,3.71
													c-0.77,0.44-0.76,1.17,0.03,1.62l11.29,6.52c0.78,0.45,2.03,0.46,2.8,0.02l6.43-3.71
													C329.52,947.41,329.5,946.68,328.72,946.23z M397.59,985.99l-11.89-6.87c-0.78-0.45-2.03-0.46-2.8-0.02l-6.43,3.71
													c-0.77,0.44-0.75,1.17,0.03,1.62l11.89,6.87c0.78,0.45,2.03,0.46,2.8,0.01l6.43-3.71
													C398.38,987.17,398.37,986.44,397.59,985.99z M380.63,976.2l-47.08-27.18c-0.78-0.45-2.03-0.46-2.8-0.02l-6.43,3.71
													c-0.77,0.44-0.75,1.17,0.03,1.62l47.08,27.18c0.78,0.45,2.03,0.46,2.8,0.01l6.43-3.71
													C381.42,977.38,381.41,976.65,380.63,976.2z M453.67,1005.64l-20.78-11.99c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													c-0.77,0.44-0.75,1.17,0.03,1.62l20.78,12c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													C454.47,1006.82,454.45,1006.09,453.67,1005.64z M288.52,920.43l19.3,11.14c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-19.3-11.14c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C287.73,919.25,287.74,919.98,288.52,920.43z M337.25,924.27l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C336.46,923.09,336.47,923.82,337.25,924.27z M348.41,930.71l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6,3.47
													C347.62,929.54,347.63,930.26,348.41,930.71z M359.57,937.15l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6-3.47
													c0.77-0.44,0.76-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C358.78,935.98,358.79,936.7,359.57,937.15z M370.73,943.6l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6,3.47
													C369.94,942.42,369.95,943.14,370.73,943.6z M388.01,953.57c0.78,0.45,2.03,0.46,2.8,0.01l6-3.47
													c0.77-0.44,0.76-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62
													L388.01,953.57z M399.16,960.01c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.01l-6,3.47c-0.77,0.44-0.75,1.17,0.03,1.62L399.16,960.01z M413.12,966.47l6-3.47
													c0.77-0.44,0.76-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62
													l6.12,3.53C411.1,966.91,412.36,966.91,413.12,966.47z M421.48,972.9c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6,3.47c-0.77,0.44-0.75,1.17,0.03,1.62
													L421.48,972.9z M435.44,979.36l6-3.47c0.77-0.44,0.76-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01
													l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53C433.42,979.79,434.68,979.8,435.44,979.36z M446.6,985.8
													l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53C444.58,986.23,445.83,986.24,446.6,985.8z M454.82,983.61l-6.01,3.47
													c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6-3.47c0.77-0.44,0.76-1.17-0.03-1.62
													l-6.12-3.53C456.84,983.17,455.59,983.17,454.82,983.61z M474.72,993.5l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02
													l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													C475.51,994.67,475.5,993.95,474.72,993.5z M342.66,915.02l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6-3.47
													c0.77-0.44,0.76-1.16-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C341.87,913.85,341.88,914.57,342.66,915.02z M353.86,921.48l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C353.06,920.31,353.08,921.03,353.86,921.48z M365.05,927.95l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C364.26,926.77,364.27,927.49,365.05,927.95z M376.24,934.41l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C375.45,933.23,375.46,933.96,376.24,934.41z M387.44,940.87l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C386.65,939.7,386.66,940.42,387.44,940.87z M398.63,947.33l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6,3.47
													C397.84,946.16,397.85,946.88,398.63,947.33z M409.82,953.8l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C409.03,952.62,409.04,953.35,409.82,953.8z M421.02,960.26l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.76-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C420.23,959.08,420.24,959.81,421.02,960.26z M432.21,966.72l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C431.42,965.55,431.43,966.27,432.21,966.72z M443.41,973.18l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C442.61,972.01,442.63,972.73,443.41,973.18z M454.6,979.65l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C453.81,978.47,453.82,979.2,454.6,979.65z M485.43,987.31l-11.57-6.68c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													c-0.77,0.44-0.75,1.17,0.03,1.62l11.57,6.68c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													C486.22,988.48,486.21,987.76,485.43,987.31z M331.04,895.97l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.01l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.01l-2.5,1.44
													C330.25,894.79,330.26,895.52,331.04,895.97z M342.19,902.4l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.01l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.01l-2.5,1.44
													C341.4,901.23,341.41,901.95,342.19,902.4z M353.37,908.86l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.02l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.02l-2.5,1.44
													C352.57,907.68,352.59,908.41,353.37,908.86z M364.96,915.55l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.02l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.02l-2.5,1.44
													C364.16,914.37,364.18,915.1,364.96,915.55z M376.45,922.19l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.02l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.02l-2.5,1.44
													C375.66,921.01,375.67,921.74,376.45,922.19z M387.73,928.7l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.02l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.02l-2.5,1.44
													C386.94,927.52,386.95,928.25,387.73,928.7z M398.92,935.16l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.01l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.01l-2.5,1.44
													C398.13,933.98,398.14,934.71,398.92,935.16z M410.13,941.63l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.02l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.02l-2.5,1.44
													C409.33,940.45,409.35,941.18,410.13,941.63z M421.39,948.13l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.01l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.01l-2.5,1.44
													C420.6,946.95,420.61,947.68,421.39,948.13z M432.87,954.76l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.01l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.01l-2.5,1.44
													C432.07,953.58,432.08,954.3,432.87,954.76z M444.47,961.45l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.01l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.01l-2.5,1.44
													C443.68,960.28,443.69,961,444.47,961.45z M455.87,968.1l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.01l2.5-1.44
													c0.77-0.44,0.76-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.01l-2.5,1.44
													C455.08,966.93,455.09,967.65,455.87,968.1z"
                      />
                      <path
                        className={styles.st97}
                        d="M492.73,983.19l-7.52-4.34c-0.78-0.45-2.03-0.46-2.8-0.02l-2.5,1.44
													c-0.77,0.44-0.75,1.17,0.03,1.62l7.52,4.34c0.78,0.45,2.03,0.46,2.8,0.02l2.5-1.44
													C493.52,984.36,493.51,983.64,492.73,983.19z M467.38,974.64l7.52,4.34c0.78,0.45,2.03,0.46,2.8,0.01l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-7.52-4.34c-0.78-0.45-2.03-0.46-2.8-0.01l-2.5,1.44
													C466.59,973.47,466.6,974.19,467.38,974.64z M320.28,902.05l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C319.48,900.87,319.49,901.6,320.28,902.05z M435.49,1014.48l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-1.14,0.66
													c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l1.14-0.66
													C436.29,1015.65,436.27,1014.93,435.49,1014.48z M414.06,1002.11l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-1.14,0.66
													c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l1.14-0.66
													C414.86,1003.28,414.84,1002.56,414.06,1002.11z M424.78,1008.29l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-1.14,0.66
													c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l1.14-0.66
													C425.57,1009.47,425.56,1008.74,424.78,1008.29z M430.56,1004.95l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-1.52,0.88
													c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l1.52-0.88
													C431.36,1006.13,431.34,1005.4,430.56,1004.95z M331.47,908.51l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C330.68,907.34,330.69,908.06,331.47,908.51z M335.01,921.33l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.01l-6,3.47c-0.77,0.44-0.76,1.17,0.03,1.62l6.12,3.53
													C332.99,921.76,334.24,921.77,335.01,921.33z M318.63,925.59l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C317.84,924.41,317.85,925.14,318.63,925.59z M338.46,935.44l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47c-0.77,0.44-0.75,1.16,0.03,1.62l6.12,3.53
													C336.44,935.87,337.7,935.88,338.46,935.44z M349.38,941.74l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
													C347.36,942.18,348.61,942.18,349.38,941.74z M351.38,944.5l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C350.59,943.32,350.6,944.05,351.38,944.5z M371.21,954.35l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
													C369.19,954.78,370.45,954.79,371.21,954.35z M382.18,960.68l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
													C380.16,961.12,381.42,961.12,382.18,960.68z M393.32,967.11l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
													C391.3,967.54,392.55,967.55,393.32,967.11z M395.64,970.05l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6,3.47
													C394.85,968.88,394.86,969.6,395.64,970.05z M415.48,979.9l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
													C413.46,980.34,414.71,980.35,415.48,979.9z M417.75,982.82l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C416.96,981.64,416.97,982.36,417.75,982.82z M428.66,989.12l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C427.87,987.94,427.88,988.67,428.66,989.12z M464.22,999.51l-15.54-8.97c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													c-0.77,0.44-0.75,1.17,0.03,1.62l15.54,8.97c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													C465.01,1000.68,465,999.96,464.22,999.51z M309.56,908.24l11.24,6.49c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.76-0.44,0.75-1.17-0.03-1.62l-11.24-6.49c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C308.77,907.06,308.78,907.78,309.56,908.24z M299.07,914.29l14.29,8.25c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-14.29-8.25c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C298.27,913.12,298.29,913.84,299.07,914.29z M312.83,934.42l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C312.04,933.25,312.05,933.97,312.83,934.42z M324.07,940.91l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6,3.47
													C323.28,939.73,323.29,940.46,324.07,940.91z M341.37,950.9c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6,3.47c-0.77,0.44-0.76,1.17,0.03,1.62
													L341.37,950.9z M346.44,953.82l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62
													l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47C345.65,952.65,345.66,953.37,346.44,953.82z M357.62,960.28
													l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47C356.83,959.11,356.84,959.83,357.62,960.28z M368.8,966.74l6.12,3.53
													c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02
													l-6.01,3.47C368.01,965.56,368.02,966.29,368.8,966.74z M388.91,976.74l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62
													l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
													C386.89,977.18,388.14,977.18,388.91,976.74z M391.17,979.65l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6-3.47
													c0.77-0.44,0.76-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C390.38,978.48,390.39,979.2,391.17,979.65z M411.28,989.66l6-3.47c0.77-0.44,0.76-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
													C409.26,990.09,410.51,990.1,411.28,989.66z M422.46,996.11l6-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
													C420.44,996.55,421.69,996.55,422.46,996.11z M408.62,992.32l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.43,3.71
													c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.43-3.72
													C409.41,993.49,409.4,992.77,408.62,992.32z M312.67,936.92l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.43,3.71
													c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.43-3.71
													C313.46,938.09,313.45,937.37,312.67,936.92z M301.73,930.6l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.43,3.71
													c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.43-3.71
													C302.52,931.78,302.51,931.05,301.73,930.6z M290.65,924.21l-4.38-2.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.43,3.71
													c-0.77,0.44-0.75,1.17,0.03,1.62l4.38,2.53c0.78,0.45,2.03,0.46,2.8,0.01l6.43-3.71
													C291.44,925.38,291.43,924.66,290.65,924.21z M328.72,946.19l-11.29-6.52c-0.78-0.45-2.03-0.46-2.8-0.01l-6.43,3.71
													c-0.77,0.44-0.76,1.17,0.03,1.62l11.29,6.52c0.78,0.45,2.03,0.46,2.8,0.02l6.43-3.71
													C329.52,947.36,329.5,946.64,328.72,946.19z M397.59,985.95l-11.89-6.87c-0.78-0.45-2.03-0.46-2.8-0.02l-6.43,3.71
													c-0.77,0.44-0.75,1.17,0.03,1.62l11.89,6.87c0.78,0.45,2.03,0.46,2.8,0.01l6.43-3.71
													C398.38,987.12,398.37,986.4,397.59,985.95z M380.63,976.16l-47.08-27.18c-0.78-0.45-2.03-0.46-2.8-0.02l-6.43,3.71
													c-0.77,0.44-0.75,1.17,0.03,1.62l47.08,27.18c0.78,0.45,2.03,0.46,2.8,0.01l6.43-3.71
													C381.42,977.33,381.41,976.61,380.63,976.16z M453.67,1005.6l-20.77-12c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													c-0.77,0.44-0.75,1.17,0.03,1.62l20.78,12c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													C454.47,1006.77,454.45,1006.05,453.67,1005.6z M288.52,920.38l19.3,11.14c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-19.3-11.14c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C287.73,919.21,287.74,919.93,288.52,920.38z M337.25,924.22l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C336.46,923.05,336.47,923.77,337.25,924.22z M348.41,930.66l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6,3.47
													C347.62,929.49,347.63,930.21,348.41,930.66z M359.57,937.11l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6-3.47
													c0.77-0.44,0.76-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C358.78,935.93,358.79,936.66,359.57,937.11z M370.73,943.55l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6,3.47
													C369.94,942.38,369.95,943.1,370.73,943.55z M388.01,953.53c0.78,0.45,2.03,0.46,2.8,0.01l6-3.47
													c0.77-0.44,0.76-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62
													L388.01,953.53z M399.16,959.97c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.01l-6,3.47c-0.77,0.44-0.75,1.17,0.03,1.62L399.16,959.97z M413.12,966.43l6-3.47
													c0.77-0.44,0.76-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62
													l6.12,3.53C411.1,966.86,412.36,966.87,413.12,966.43z M421.48,972.85c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6,3.47c-0.77,0.44-0.75,1.17,0.03,1.62
													L421.48,972.85z M435.44,979.31l6-3.47c0.77-0.44,0.76-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01
													l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53C433.42,979.75,434.68,979.75,435.44,979.31z M446.6,985.75
													l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53C444.58,986.19,445.83,986.2,446.6,985.75z M454.82,983.56l-6.01,3.47
													c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6-3.47c0.77-0.44,0.76-1.17-0.03-1.62
													l-6.12-3.53C456.84,983.13,455.59,983.12,454.82,983.56z M474.72,993.45l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02
													l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													C475.51,994.62,475.5,993.9,474.72,993.45z M342.66,914.97l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6-3.47
													c0.77-0.44,0.76-1.16-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C341.87,913.8,341.88,914.52,342.66,914.97z M353.86,921.44l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C353.06,920.26,353.08,920.99,353.86,921.44z M365.05,927.9l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C364.26,926.73,364.27,927.45,365.05,927.9z M376.24,934.36l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C375.45,933.19,375.46,933.91,376.24,934.36z M387.44,940.83l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C386.65,939.65,386.66,940.37,387.44,940.83z M398.63,947.29l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6,3.47
													C397.84,946.11,397.85,946.84,398.63,947.29z M409.82,953.75l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C409.03,952.58,409.04,953.3,409.82,953.75z M421.02,960.21l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.76-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C420.23,959.04,420.24,959.76,421.02,960.21z M432.21,966.68l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C431.42,965.5,431.43,966.23,432.21,966.68z M443.41,973.14l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C442.61,971.96,442.63,972.69,443.41,973.14z M454.6,979.6l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C453.81,978.43,453.82,979.15,454.6,979.6z M485.43,987.26l-11.57-6.68c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													c-0.77,0.44-0.75,1.17,0.03,1.62l11.57,6.68c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													C486.22,988.44,486.21,987.71,485.43,987.26z M331.04,895.92l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.01l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.01l-2.5,1.44
													C330.25,894.75,330.26,895.47,331.04,895.92z M342.19,902.36l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.01l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.01l-2.5,1.44
													C341.4,901.18,341.41,901.91,342.19,902.36z M353.37,908.81l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.02l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.02l-2.5,1.44
													C352.57,907.64,352.59,908.36,353.37,908.81z M364.96,915.5l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.02l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.02l-2.5,1.44
													C364.16,914.33,364.18,915.05,364.96,915.5z M376.45,922.14l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.02l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.02l-2.5,1.44
													C375.66,920.97,375.67,921.69,376.45,922.14z M387.73,928.65l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.02l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.02l-2.5,1.44
													C386.94,927.48,386.95,928.2,387.73,928.65z M398.92,935.11l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.01l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.01l-2.5,1.44
													C398.13,933.94,398.14,934.66,398.92,935.11z M410.13,941.58l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.02l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.02l-2.5,1.44
													C409.33,940.41,409.35,941.13,410.13,941.58z M421.39,948.08l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.01l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.01l-2.5,1.44
													C420.6,946.91,420.61,947.63,421.39,948.08z M432.87,954.71l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.01l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.01l-2.5,1.44
													C432.07,953.54,432.08,954.26,432.87,954.71z M444.47,961.41l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.01l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.01l-2.5,1.44
													C443.68,960.23,443.69,960.96,444.47,961.41z M455.87,968.06l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.01l2.5-1.44
													c0.77-0.44,0.76-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.01l-2.5,1.44
													C455.08,966.88,455.09,967.6,455.87,968.06z"
                      />
                      <path
                        className={styles.st98}
                        d="M492.73,983.14l-7.52-4.34c-0.78-0.45-2.03-0.46-2.8-0.02l-2.5,1.44
													c-0.77,0.44-0.75,1.17,0.03,1.62l7.52,4.34c0.78,0.45,2.03,0.46,2.8,0.02l2.5-1.44
													C493.52,984.32,493.51,983.59,492.73,983.14z M467.38,974.6l7.52,4.34c0.78,0.45,2.03,0.46,2.8,0.01l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-7.52-4.34c-0.78-0.45-2.03-0.46-2.8-0.01l-2.5,1.44
													C466.59,973.42,466.6,974.15,467.38,974.6z M320.28,902.01l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C319.48,900.83,319.49,901.55,320.28,902.01z M435.49,1014.44l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-1.14,0.66
													c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l1.14-0.66
													C436.29,1015.61,436.27,1014.89,435.49,1014.44z M414.06,1002.06l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-1.14,0.66
													c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l1.14-0.66
													C414.86,1003.24,414.84,1002.51,414.06,1002.06z M424.78,1008.25l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-1.14,0.66
													c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l1.14-0.66
													C425.57,1009.42,425.56,1008.7,424.78,1008.25z M430.56,1004.91l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-1.52,0.88
													c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l1.52-0.88
													C431.36,1006.08,431.34,1005.36,430.56,1004.91z M331.47,908.47l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C330.68,907.29,330.69,908.02,331.47,908.47z M335.01,921.28l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.01l-6,3.47c-0.77,0.44-0.76,1.17,0.03,1.62l6.12,3.53
													C332.99,921.72,334.24,921.73,335.01,921.28z M318.63,925.54l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C317.84,924.37,317.85,925.09,318.63,925.54z M338.46,935.4l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47c-0.77,0.44-0.75,1.16,0.03,1.62l6.12,3.53
													C336.44,935.83,337.7,935.84,338.46,935.4z M349.38,941.7l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
													C347.36,942.13,348.61,942.14,349.38,941.7z M351.38,944.45l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C350.59,943.28,350.6,944,351.38,944.45z M371.21,954.3l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
													C369.19,954.74,370.45,954.75,371.21,954.3z M382.18,960.64l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
													C380.16,961.07,381.42,961.08,382.18,960.64z M393.32,967.07l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
													C391.3,967.5,392.55,967.51,393.32,967.07z M395.64,970.01l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6,3.47
													C394.85,968.83,394.86,969.56,395.64,970.01z M415.48,979.86l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
													C413.46,980.29,414.71,980.3,415.48,979.86z M417.75,982.77l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C416.96,981.6,416.97,982.32,417.75,982.77z M428.66,989.07l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C427.87,987.9,427.88,988.62,428.66,989.07z M464.22,999.47l-15.54-8.97c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													c-0.77,0.44-0.75,1.17,0.03,1.62l15.54,8.97c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													C465.01,1000.64,465,999.92,464.22,999.47z M309.56,908.19l11.24,6.49c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.76-0.44,0.75-1.17-0.03-1.62l-11.24-6.49c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C308.77,907.02,308.78,907.74,309.56,908.19z M299.07,914.25l14.29,8.25c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-14.29-8.25c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C298.27,913.08,298.29,913.8,299.07,914.25z M312.83,934.38l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C312.04,933.2,312.05,933.93,312.83,934.38z M324.07,940.86l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6,3.47
													C323.28,939.69,323.29,940.41,324.07,940.86z M341.37,950.85c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6,3.47c-0.77,0.44-0.76,1.17,0.03,1.62
													L341.37,950.85z M346.44,953.78l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62
													l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47C345.65,952.6,345.66,953.33,346.44,953.78z M357.62,960.24
													l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47C356.83,959.06,356.84,959.79,357.62,960.24z M368.8,966.69l6.12,3.53
													c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02
													l-6.01,3.47C368.01,965.52,368.02,966.24,368.8,966.69z M388.91,976.7l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62
													l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
													C386.89,977.13,388.14,977.14,388.91,976.7z M391.17,979.61l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6-3.47
													c0.77-0.44,0.76-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C390.38,978.43,390.39,979.16,391.17,979.61z M411.28,989.61l6-3.47c0.77-0.44,0.76-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
													C409.26,990.05,410.51,990.05,411.28,989.61z M422.46,996.07l6-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
													C420.44,996.5,421.69,996.51,422.46,996.07z M408.62,992.27l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.43,3.71
													c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.43-3.72
													C409.41,993.45,409.4,992.72,408.62,992.27z M312.67,936.87l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.43,3.71
													c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.43-3.71
													C313.46,938.05,313.45,937.32,312.67,936.87z M301.73,930.56l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.43,3.71
													c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.43-3.71
													C302.52,931.73,302.51,931.01,301.73,930.56z M290.65,924.16l-4.38-2.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.43,3.71
													c-0.77,0.44-0.75,1.17,0.03,1.62l4.38,2.53c0.78,0.45,2.03,0.46,2.8,0.01l6.43-3.71
													C291.44,925.34,291.43,924.61,290.65,924.16z M328.72,946.14l-11.29-6.52c-0.78-0.45-2.03-0.46-2.8-0.01l-6.43,3.71
													c-0.77,0.44-0.76,1.17,0.03,1.62l11.29,6.52c0.78,0.45,2.03,0.46,2.8,0.02l6.43-3.71
													C329.52,947.32,329.5,946.59,328.72,946.14z M397.59,985.9l-11.89-6.87c-0.78-0.45-2.03-0.46-2.8-0.02l-6.43,3.71
													c-0.77,0.44-0.75,1.17,0.03,1.62l11.89,6.87c0.78,0.45,2.03,0.46,2.8,0.01l6.43-3.71
													C398.38,987.08,398.37,986.35,397.59,985.9z M380.63,976.11l-47.08-27.18c-0.78-0.45-2.03-0.46-2.8-0.02l-6.43,3.71
													c-0.77,0.44-0.75,1.17,0.03,1.62l47.08,27.18c0.78,0.45,2.03,0.46,2.8,0.01l6.43-3.71
													C381.42,977.29,381.41,976.56,380.63,976.11z M453.67,1005.55l-20.78-11.99c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													c-0.77,0.44-0.75,1.17,0.03,1.62l20.78,12c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													C454.47,1006.73,454.45,1006.01,453.67,1005.55z M288.52,920.34l19.3,11.14c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-19.3-11.14c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C287.73,919.17,287.74,919.89,288.52,920.34z M337.25,924.18l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C336.46,923,336.47,923.73,337.25,924.18z M348.41,930.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6,3.47
													C347.62,929.45,347.63,930.17,348.41,930.62z M359.57,937.06l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6-3.47
													c0.77-0.44,0.76-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C358.78,935.89,358.79,936.61,359.57,937.06z M370.73,943.51l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6,3.47
													C369.94,942.33,369.95,943.06,370.73,943.51z M388.01,953.48c0.78,0.45,2.03,0.46,2.8,0.01l6-3.47
													c0.77-0.44,0.76-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62
													L388.01,953.48z M399.16,959.92c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.01l-6,3.47c-0.77,0.44-0.75,1.17,0.03,1.62L399.16,959.92z M413.12,966.38l6-3.47
													c0.77-0.44,0.76-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62
													l6.12,3.53C411.1,966.82,412.36,966.82,413.12,966.38z M421.48,972.81c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6,3.47c-0.77,0.44-0.75,1.17,0.03,1.62
													L421.48,972.81z M435.44,979.27l6-3.47c0.77-0.44,0.76-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01
													l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53C433.42,979.7,434.68,979.71,435.44,979.27z M446.6,985.71
													l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53C444.58,986.14,445.83,986.15,446.6,985.71z M454.82,983.52l-6.01,3.47
													c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6-3.47c0.77-0.44,0.76-1.17-0.03-1.62
													l-6.12-3.53C456.84,983.08,455.59,983.08,454.82,983.52z M474.72,993.41l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02
													l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													C475.51,994.58,475.5,993.86,474.72,993.41z M342.66,914.93l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6-3.47
													c0.77-0.44,0.76-1.16-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C341.87,913.76,341.88,914.48,342.66,914.93z M353.86,921.39l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C353.06,920.22,353.08,920.94,353.86,921.39z M365.05,927.86l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C364.26,926.68,364.27,927.41,365.05,927.86z M376.24,934.32l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C375.45,933.14,375.46,933.87,376.24,934.32z M387.44,940.78l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C386.65,939.61,386.66,940.33,387.44,940.78z M398.63,947.24l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6,3.47
													C397.84,946.07,397.85,946.79,398.63,947.24z M409.82,953.71l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C409.03,952.53,409.04,953.26,409.82,953.71z M421.02,960.17l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.76-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C420.23,959,420.24,959.72,421.02,960.17z M432.21,966.63l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C431.42,965.46,431.43,966.18,432.21,966.63z M443.41,973.09l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C442.61,971.92,442.63,972.64,443.41,973.09z M454.6,979.56l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C453.81,978.38,453.82,979.11,454.6,979.56z M485.43,987.22l-11.57-6.68c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													c-0.77,0.44-0.75,1.17,0.03,1.62l11.57,6.68c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													C486.22,988.39,486.21,987.67,485.43,987.22z M331.04,895.88l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.01l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.01l-2.5,1.44
													C330.25,894.71,330.26,895.43,331.04,895.88z M342.19,902.31l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.01l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.01l-2.5,1.44
													C341.4,901.14,341.41,901.86,342.19,902.31z M353.37,908.77l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.02L365,911
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.02l-2.5,1.44
													C352.57,907.59,352.59,908.32,353.37,908.77z M364.96,915.46l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.02l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.02l-2.5,1.44
													C364.16,914.28,364.18,915.01,364.96,915.46z M376.45,922.1l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.02l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.02l-2.5,1.44
													C375.66,920.92,375.67,921.65,376.45,922.1z M387.73,928.61l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.02l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.02l-2.5,1.44
													C386.94,927.43,386.95,928.16,387.73,928.61z M398.92,935.07l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.01l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.01l-2.5,1.44
													C398.13,933.89,398.14,934.62,398.92,935.07z M410.13,941.54l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.02l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.02l-2.5,1.44
													C409.33,940.36,409.35,941.09,410.13,941.54z M421.39,948.04l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.01l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.01l-2.5,1.44
													C420.6,946.87,420.61,947.59,421.39,948.04z M432.87,954.67l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.01l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.01l-2.5,1.44
													C432.07,953.49,432.08,954.22,432.87,954.67z M444.47,961.37l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.01l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.01l-2.5,1.44
													C443.68,960.19,443.69,960.91,444.47,961.37z M455.87,968.01l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.01l2.5-1.44
													c0.77-0.44,0.76-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.01l-2.5,1.44
													C455.08,966.84,455.09,967.56,455.87,968.01z"
                      />
                      <path
                        className={styles.st99}
                        d="M492.73,983.1l-7.52-4.34c-0.78-0.45-2.03-0.46-2.8-0.02l-2.5,1.44
													c-0.77,0.44-0.75,1.17,0.03,1.62l7.52,4.34c0.78,0.45,2.03,0.46,2.8,0.02l2.5-1.44
													C493.52,984.27,493.51,983.55,492.73,983.1z M467.38,974.55l7.52,4.34c0.78,0.45,2.03,0.46,2.8,0.01l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-7.52-4.34c-0.78-0.45-2.03-0.46-2.8-0.01l-2.5,1.44
													C466.59,973.38,466.6,974.1,467.38,974.55z M320.28,901.96l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C319.48,900.79,319.49,901.51,320.28,901.96z M435.49,1014.39l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-1.14,0.66
													c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l1.14-0.66
													C436.29,1015.57,436.27,1014.84,435.49,1014.39z M414.06,1002.02l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-1.14,0.66
													c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l1.14-0.66
													C414.86,1003.19,414.84,1002.47,414.06,1002.02z M424.78,1008.21l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-1.14,0.66
													c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l1.14-0.66
													C425.57,1009.38,425.56,1008.66,424.78,1008.21z M430.56,1004.87l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-1.52,0.88
													c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l1.52-0.88
													C431.36,1006.04,431.34,1005.32,430.56,1004.87z M331.47,908.42l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C330.68,907.25,330.69,907.97,331.47,908.42z M335.01,921.24l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.01l-6,3.47c-0.77,0.44-0.76,1.17,0.03,1.62l6.12,3.53
													C332.99,921.67,334.24,921.68,335.01,921.24z M318.63,925.5l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C317.84,924.33,317.85,925.05,318.63,925.5z M338.46,935.35l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47c-0.77,0.44-0.75,1.16,0.03,1.62l6.12,3.53
													C336.44,935.79,337.7,935.79,338.46,935.35z M349.38,941.65l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
													C347.36,942.09,348.61,942.1,349.38,941.65z M351.38,944.41l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C350.59,943.23,350.6,943.96,351.38,944.41z M371.21,954.26l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
													C369.19,954.69,370.45,954.7,371.21,954.26z M382.18,960.59l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
													C380.16,961.03,381.42,961.04,382.18,960.59z M393.32,967.02l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
													C391.3,967.46,392.55,967.46,393.32,967.02z M395.64,969.96l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6,3.47
													C394.85,968.79,394.86,969.51,395.64,969.96z M415.48,979.82l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
													C413.46,980.25,414.71,980.26,415.48,979.82z M417.75,982.73l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C416.96,981.55,416.97,982.28,417.75,982.73z M428.66,989.03l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C427.87,987.86,427.88,988.58,428.66,989.03z M464.22,999.42l-15.54-8.97c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													c-0.77,0.44-0.75,1.17,0.03,1.62l15.54,8.97c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													C465.01,1000.6,465,999.87,464.22,999.42z M309.56,908.15l11.24,6.49c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.76-0.44,0.75-1.17-0.03-1.62l-11.24-6.49c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C308.77,906.97,308.78,907.7,309.56,908.15z M299.07,914.21l14.29,8.25c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-14.29-8.25c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C298.27,913.03,298.29,913.76,299.07,914.21z M312.83,934.33l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C312.04,933.16,312.05,933.88,312.83,934.33z M324.07,940.82l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6,3.47
													C323.28,939.65,323.29,940.37,324.07,940.82z M341.37,950.81c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6,3.47c-0.77,0.44-0.76,1.17,0.03,1.62
													L341.37,950.81z M346.44,953.73l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62
													l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47C345.65,952.56,345.66,953.28,346.44,953.73z M357.62,960.19
													l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47C356.83,959.02,356.84,959.74,357.62,960.19z M368.8,966.65l6.12,3.53
													c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02
													l-6.01,3.47C368.01,965.47,368.02,966.2,368.8,966.65z M388.91,976.65l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62
													l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
													C386.89,977.09,388.14,977.1,388.91,976.65z M391.17,979.56l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6-3.47
													c0.77-0.44,0.76-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C390.38,978.39,390.39,979.11,391.17,979.56z M411.28,989.57l6-3.47c0.77-0.44,0.76-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
													C409.26,990,410.51,990.01,411.28,989.57z M422.46,996.02l6-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
													C420.44,996.46,421.69,996.47,422.46,996.02z M408.62,992.23l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.43,3.71
													c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.43-3.72
													C409.41,993.4,409.4,992.68,408.62,992.23z M312.67,936.83l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.43,3.71
													c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.43-3.71
													C313.46,938,313.45,937.28,312.67,936.83z M301.73,930.51l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.43,3.71
													c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.43-3.71
													C302.52,931.69,302.51,930.96,301.73,930.51z M290.65,924.12l-4.38-2.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.43,3.71
													c-0.77,0.44-0.75,1.17,0.03,1.62l4.38,2.53c0.78,0.45,2.03,0.46,2.8,0.01l6.43-3.71
													C291.44,925.29,291.43,924.57,290.65,924.12z M328.72,946.1l-11.29-6.52c-0.78-0.45-2.03-0.46-2.8-0.01l-6.43,3.71
													c-0.77,0.44-0.76,1.17,0.03,1.62l11.29,6.52c0.78,0.45,2.03,0.46,2.8,0.02l6.43-3.71
													C329.52,947.27,329.5,946.55,328.72,946.1z M397.59,985.86l-11.89-6.87c-0.78-0.45-2.03-0.46-2.8-0.02l-6.43,3.71
													c-0.77,0.44-0.75,1.17,0.03,1.62l11.89,6.87c0.78,0.45,2.03,0.46,2.8,0.01l6.43-3.71
													C398.38,987.03,398.37,986.31,397.59,985.86z M380.63,976.07l-47.08-27.18c-0.78-0.45-2.03-0.46-2.8-0.02l-6.43,3.71
													c-0.77,0.44-0.75,1.17,0.03,1.62l47.08,27.18c0.78,0.45,2.03,0.46,2.8,0.01l6.43-3.71
													C381.42,977.24,381.41,976.52,380.63,976.07z M453.67,1005.51l-20.78-11.99c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													c-0.77,0.44-0.75,1.17,0.03,1.62l20.78,12c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													C454.47,1006.68,454.45,1005.96,453.67,1005.51z M288.52,920.3l19.3,11.14c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-19.3-11.14c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C287.73,919.12,287.74,919.85,288.52,920.3z M337.25,924.13l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C336.46,922.96,336.47,923.68,337.25,924.13z M348.41,930.58l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6,3.47
													C347.62,929.4,347.63,930.13,348.41,930.58z M359.57,937.02l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6-3.47
													c0.77-0.44,0.76-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C358.78,935.84,358.79,936.57,359.57,937.02z M370.73,943.46l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6,3.47
													C369.94,942.29,369.95,943.01,370.73,943.46z M388.01,953.44c0.78,0.45,2.03,0.46,2.8,0.01l6-3.47
													c0.77-0.44,0.76-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62
													L388.01,953.44z M399.16,959.88c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.01l-6,3.47c-0.77,0.44-0.75,1.17,0.03,1.62L399.16,959.88z M413.12,966.34l6-3.47
													c0.77-0.44,0.76-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62
													l6.12,3.53C411.1,966.77,412.36,966.78,413.12,966.34z M421.48,972.77c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6,3.47c-0.77,0.44-0.75,1.17,0.03,1.62
													L421.48,972.77z M435.44,979.22l6-3.47c0.77-0.44,0.76-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01
													l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53C433.42,979.66,434.68,979.67,435.44,979.22z M446.6,985.67
													l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53C444.58,986.1,445.83,986.11,446.6,985.67z M454.82,983.48l-6.01,3.47
													c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6-3.47c0.77-0.44,0.76-1.17-0.03-1.62
													l-6.12-3.53C456.84,983.04,455.59,983.03,454.82,983.48z M474.72,993.36l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02
													l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													C475.51,994.54,475.5,993.81,474.72,993.36z M342.66,914.89l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6-3.47
													c0.77-0.44,0.76-1.16-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C341.87,913.71,341.88,914.44,342.66,914.89z M353.86,921.35l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C353.06,920.17,353.08,920.9,353.86,921.35z M365.05,927.81l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C364.26,926.64,364.27,927.36,365.05,927.81z M376.24,934.27l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C375.45,933.1,375.46,933.82,376.24,934.27z M387.44,940.74l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C386.65,939.56,386.66,940.29,387.44,940.74z M398.63,947.2l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6,3.47
													C397.84,946.03,397.85,946.75,398.63,947.2z M409.82,953.66l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C409.03,952.49,409.04,953.21,409.82,953.66z M421.02,960.13l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.76-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C420.23,958.95,420.24,959.67,421.02,960.13z M432.21,966.59l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C431.42,965.41,431.43,966.14,432.21,966.59z M443.41,973.05l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C442.61,971.88,442.63,972.6,443.41,973.05z M454.6,979.51l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C453.81,978.34,453.82,979.06,454.6,979.51z M485.43,987.18l-11.57-6.68c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													c-0.77,0.44-0.75,1.17,0.03,1.62l11.57,6.68c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													C486.22,988.35,486.21,987.63,485.43,987.18z M331.04,895.84l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.01l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.01l-2.5,1.44
													C330.25,894.66,330.26,895.38,331.04,895.84z M342.19,902.27l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.01l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.01l-2.5,1.44
													C341.4,901.1,341.41,901.82,342.19,902.27z M353.37,908.72l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.02l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.02l-2.5,1.44
													C352.57,907.55,352.59,908.27,353.37,908.72z M364.96,915.41l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.02l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.02l-2.5,1.44
													C364.16,914.24,364.18,914.96,364.96,915.41z M376.45,922.05l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.02l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.02l-2.5,1.44
													C375.66,920.88,375.67,921.6,376.45,922.05z M387.73,928.57l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.02l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.02l-2.5,1.44
													C386.94,927.39,386.95,928.11,387.73,928.57z M398.92,935.02l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.01l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.01l-2.5,1.44
													C398.13,933.85,398.14,934.57,398.92,935.02z M410.13,941.49l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.02l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.02l-2.5,1.44
													C409.33,940.32,409.35,941.04,410.13,941.49z M421.39,948l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.01l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.01l-2.5,1.44
													C420.6,946.82,420.61,947.54,421.39,948z M432.87,954.62l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.01l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.01l-2.5,1.44
													C432.07,953.45,432.08,954.17,432.87,954.62z M444.47,961.32l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.01l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.01l-2.5,1.44
													C443.68,960.15,443.69,960.87,444.47,961.32z M455.87,967.97l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.01l2.5-1.44
													c0.77-0.44,0.76-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.01l-2.5,1.44
													C455.08,966.79,455.09,967.52,455.87,967.97z"
                      />
                      <path
                        className={styles.st100}
                        d="M492.73,983.06l-7.52-4.34c-0.78-0.45-2.03-0.46-2.8-0.02l-2.5,1.44
													c-0.77,0.44-0.75,1.17,0.03,1.62l7.52,4.34c0.78,0.45,2.03,0.46,2.8,0.02l2.5-1.44
													C493.52,984.23,493.51,983.51,492.73,983.06z M467.38,974.51l7.52,4.34c0.78,0.45,2.03,0.46,2.8,0.01l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-7.52-4.34c-0.78-0.45-2.03-0.46-2.8-0.01l-2.5,1.44
													C466.59,973.33,466.6,974.06,467.38,974.51z M320.28,901.92l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C319.48,900.74,319.49,901.47,320.28,901.92z M435.49,1014.35l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-1.14,0.66
													c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l1.14-0.66
													C436.29,1015.52,436.27,1014.8,435.49,1014.35z M414.06,1001.98l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-1.14,0.66
													c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l1.14-0.66
													C414.86,1003.15,414.84,1002.43,414.06,1001.98z M424.78,1008.16l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-1.14,0.66
													c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l1.14-0.66
													C425.57,1009.34,425.56,1008.61,424.78,1008.16z M430.56,1004.82l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-1.52,0.88
													c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l1.52-0.88
													C431.36,1006,431.34,1005.27,430.56,1004.82z M331.47,908.38l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C330.68,907.21,330.69,907.93,331.47,908.38z M335.01,921.19l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.01l-6,3.47c-0.77,0.44-0.76,1.17,0.03,1.62l6.12,3.53
													C332.99,921.63,334.24,921.64,335.01,921.19z M318.63,925.46l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C317.84,924.28,317.85,925.01,318.63,925.46z M338.46,935.31l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47c-0.77,0.44-0.75,1.16,0.03,1.62l6.12,3.53
													C336.44,935.74,337.7,935.75,338.46,935.31z M349.38,941.61l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
													C347.36,942.04,348.61,942.05,349.38,941.61z M351.38,944.36l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C350.59,943.19,350.6,943.91,351.38,944.36z M371.21,954.21l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
													C369.19,954.65,370.45,954.66,371.21,954.21z M382.18,960.55l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
													C380.16,960.98,381.42,960.99,382.18,960.55z M393.32,966.98l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
													C391.3,967.41,392.55,967.42,393.32,966.98z M395.64,969.92l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6,3.47
													C394.85,968.75,394.86,969.47,395.64,969.92z M415.48,979.77l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
													C413.46,980.21,414.71,980.21,415.48,979.77z M417.75,982.68l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C416.96,981.51,416.97,982.23,417.75,982.68z M428.66,988.99l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C427.87,987.81,427.88,988.53,428.66,988.99z M464.22,999.38l-15.54-8.97c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													c-0.77,0.44-0.75,1.17,0.03,1.62l15.54,8.97c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													C465.01,1000.55,465,999.83,464.22,999.38z M309.56,908.1l11.24,6.49c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.76-0.44,0.75-1.17-0.03-1.62l-11.24-6.49c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C308.77,906.93,308.78,907.65,309.56,908.1z M299.07,914.16l14.29,8.25c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-14.29-8.25c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C298.27,912.99,298.29,913.71,299.07,914.16z M312.83,934.29l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C312.04,933.11,312.05,933.84,312.83,934.29z M324.07,940.78l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6,3.47
													C323.28,939.6,323.29,940.33,324.07,940.78z M341.37,950.77c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6,3.47c-0.77,0.44-0.76,1.17,0.03,1.62
													L341.37,950.77z M346.44,953.69l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62
													l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47C345.65,952.52,345.66,953.24,346.44,953.69z M357.62,960.15
													l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47C356.83,958.97,356.84,959.7,357.62,960.15z M368.8,966.6l6.12,3.53
													c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02
													l-6.01,3.47C368.01,965.43,368.02,966.15,368.8,966.6z M388.91,976.61l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62
													l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
													C386.89,977.04,388.14,977.05,388.91,976.61z M391.17,979.52l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6-3.47
													c0.77-0.44,0.76-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C390.38,978.34,390.39,979.07,391.17,979.52z M411.28,989.52l6-3.47c0.77-0.44,0.76-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
													C409.26,989.96,410.51,989.97,411.28,989.52z M422.46,995.98l6-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
													C420.44,996.42,421.69,996.42,422.46,995.98z M408.62,992.18l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.43,3.71
													c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.43-3.72
													C409.41,993.36,409.4,992.63,408.62,992.18z M312.67,936.78l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.43,3.71
													c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.43-3.71
													C313.46,937.96,313.45,937.23,312.67,936.78z M301.73,930.47l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.43,3.71
													c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.43-3.71
													C302.52,931.64,302.51,930.92,301.73,930.47z M290.65,924.07l-4.38-2.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.43,3.71
													c-0.77,0.44-0.75,1.17,0.03,1.62l4.38,2.53c0.78,0.45,2.03,0.46,2.8,0.01l6.43-3.71
													C291.44,925.25,291.43,924.52,290.65,924.07z M328.72,946.05l-11.29-6.52c-0.78-0.45-2.03-0.46-2.8-0.01l-6.43,3.71
													c-0.77,0.44-0.76,1.17,0.03,1.62l11.29,6.52c0.78,0.45,2.03,0.46,2.8,0.02l6.43-3.71
													C329.52,947.23,329.5,946.5,328.72,946.05z M397.59,985.81l-11.89-6.87c-0.78-0.45-2.03-0.46-2.8-0.02l-6.43,3.71
													c-0.77,0.44-0.75,1.17,0.03,1.62l11.89,6.87c0.78,0.45,2.03,0.46,2.8,0.01l6.43-3.71
													C398.38,986.99,398.37,986.26,397.59,985.81z M380.63,976.02l-47.08-27.18c-0.78-0.45-2.03-0.46-2.8-0.02l-6.43,3.71
													c-0.77,0.44-0.75,1.17,0.03,1.62l47.08,27.18c0.78,0.45,2.03,0.46,2.8,0.01l6.43-3.71
													C381.42,977.2,381.41,976.47,380.63,976.02z M453.67,1005.47l-20.78-11.99c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													c-0.77,0.44-0.75,1.17,0.03,1.62l20.78,12c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													C454.47,1006.64,454.45,1005.92,453.67,1005.47z M288.52,920.25l19.3,11.14c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-19.3-11.14c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C287.73,919.08,287.74,919.8,288.52,920.25z M337.25,924.09l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C336.46,922.91,336.47,923.64,337.25,924.09z M348.41,930.53l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6,3.47
													C347.62,929.36,347.63,930.08,348.41,930.53z M359.57,936.97l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6-3.47
													c0.77-0.44,0.76-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C358.78,935.8,358.79,936.52,359.57,936.97z M370.73,943.42l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6,3.47
													C369.94,942.24,369.95,942.97,370.73,943.42z M388.01,953.39c0.78,0.45,2.03,0.46,2.8,0.01l6-3.47
													c0.77-0.44,0.76-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62
													L388.01,953.39z M399.16,959.84c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.01l-6,3.47c-0.77,0.44-0.75,1.17,0.03,1.62L399.16,959.84z M413.12,966.29l6-3.47
													c0.77-0.44,0.76-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62
													l6.12,3.53C411.1,966.73,412.36,966.74,413.12,966.29z M421.48,972.72c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6,3.47c-0.77,0.44-0.75,1.17,0.03,1.62
													L421.48,972.72z M435.44,979.18l6-3.47c0.77-0.44,0.76-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01
													l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53C433.42,979.61,434.68,979.62,435.44,979.18z M446.6,985.62
													l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53C444.58,986.06,445.83,986.06,446.6,985.62z M454.82,983.43l-6.01,3.47
													c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6-3.47c0.77-0.44,0.76-1.17-0.03-1.62
													l-6.12-3.53C456.84,983,455.59,982.99,454.82,983.43z M474.72,993.32l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02
													l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													C475.51,994.49,475.5,993.77,474.72,993.32z M342.66,914.84l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6-3.47
													c0.77-0.44,0.76-1.16-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C341.87,913.67,341.88,914.39,342.66,914.84z M353.86,921.3l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C353.06,920.13,353.08,920.85,353.86,921.3z M365.05,927.77l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C364.26,926.59,364.27,927.32,365.05,927.77z M376.24,934.23l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C375.45,933.06,375.46,933.78,376.24,934.23z M387.44,940.69l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C386.65,939.52,386.66,940.24,387.44,940.69z M398.63,947.16l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6,3.47
													C397.84,945.98,397.85,946.7,398.63,947.16z M409.82,953.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6,3.48
													C409.03,952.44,409.04,953.17,409.82,953.62z M421.02,960.08l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.76-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C420.23,958.91,420.24,959.63,421.02,960.08z M432.21,966.54l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C431.42,965.37,431.43,966.09,432.21,966.54z M443.41,973.01l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C442.61,971.83,442.63,972.56,443.41,973.01z M454.6,979.47l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C453.81,978.29,453.82,979.02,454.6,979.47z M485.43,987.13l-11.57-6.68c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													c-0.77,0.44-0.75,1.17,0.03,1.62l11.57,6.68c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													C486.22,988.31,486.21,987.58,485.43,987.13z M331.04,895.79l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.01l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.01l-2.5,1.44
													C330.25,894.62,330.26,895.34,331.04,895.79z M342.19,902.23l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.01l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.01l-2.5,1.44
													C341.4,901.05,341.41,901.77,342.19,902.23z M353.37,908.68l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.02l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.02l-2.5,1.44
													C352.57,907.5,352.59,908.23,353.37,908.68z M364.96,915.37l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.02l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.02l-2.5,1.44
													C364.16,914.2,364.18,914.92,364.96,915.37z M376.45,922.01l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.02l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.02l-2.5,1.44
													C375.66,920.83,375.67,921.56,376.45,922.01z M387.73,928.52l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.02l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.02l-2.5,1.44
													C386.94,927.35,386.95,928.07,387.73,928.52z M398.92,934.98l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.01l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.01l-2.5,1.44
													C398.13,933.8,398.14,934.53,398.92,934.98z M410.13,941.45l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.02l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.02l-2.5,1.44
													C409.33,940.27,409.35,941,410.13,941.45z M421.39,947.95l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.01l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.01l-2.5,1.44
													C420.6,946.78,420.61,947.5,421.39,947.95z M432.87,954.58l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.01l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.01l-2.5,1.44
													C432.07,953.4,432.08,954.13,432.87,954.58z M444.47,961.28l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.01l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.01l-2.5,1.44
													C443.68,960.1,443.69,960.83,444.47,961.28z M455.87,967.92l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.01l2.5-1.44
													c0.77-0.44,0.76-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.01l-2.5,1.44
													C455.08,966.75,455.09,967.47,455.87,967.92z"
                      />
                      <path
                        className={styles.st101}
                        d="M492.73,983.01l-7.52-4.34c-0.78-0.45-2.03-0.46-2.8-0.02l-2.5,1.44
													c-0.77,0.44-0.75,1.17,0.03,1.62l7.52,4.34c0.78,0.45,2.03,0.46,2.8,0.02l2.5-1.44
													C493.52,984.19,493.51,983.46,492.73,983.01z M467.38,974.46l7.52,4.34c0.78,0.45,2.03,0.46,2.8,0.01l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-7.52-4.34c-0.78-0.45-2.03-0.46-2.8-0.01l-2.5,1.44
													C466.59,973.29,466.6,974.01,467.38,974.46z M320.28,901.87l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C319.48,900.7,319.49,901.42,320.28,901.87z M435.49,1014.3l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-1.14,0.66
													c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l1.14-0.66
													C436.29,1015.48,436.27,1014.75,435.49,1014.3z M414.06,1001.93l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-1.14,0.66
													c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l1.14-0.66
													C414.86,1003.11,414.84,1002.38,414.06,1001.93z M424.78,1008.12l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-1.14,0.66
													c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l1.14-0.66
													C425.57,1009.29,425.56,1008.57,424.78,1008.12z M430.56,1004.78l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-1.52,0.88
													c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l1.52-0.88
													C431.36,1005.95,431.34,1005.23,430.56,1004.78z M331.47,908.34l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C330.68,907.16,330.69,907.88,331.47,908.34z M335.01,921.15l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.01l-6,3.47c-0.77,0.44-0.76,1.17,0.03,1.62l6.12,3.53
													C332.99,921.59,334.24,921.59,335.01,921.15z M318.63,925.41l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C317.84,924.24,317.85,924.96,318.63,925.41z M338.46,935.26l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47c-0.77,0.44-0.75,1.16,0.03,1.62l6.12,3.53
													C336.44,935.7,337.7,935.71,338.46,935.26z M349.38,941.57l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
													C347.36,942,348.61,942.01,349.38,941.57z M351.38,944.32l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C350.59,943.15,350.6,943.87,351.38,944.32z M371.21,954.17l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
													C369.19,954.61,370.45,954.61,371.21,954.17z M382.18,960.5l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
													C380.16,960.94,381.42,960.95,382.18,960.5z M393.32,966.93l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
													C391.3,967.37,392.55,967.38,393.32,966.93z M395.64,969.88l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6,3.47
													C394.85,968.7,394.86,969.43,395.64,969.88z M415.48,979.73l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
													C413.46,980.16,414.71,980.17,415.48,979.73z M417.75,982.64l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C416.96,981.46,416.97,982.19,417.75,982.64z M428.66,988.94l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C427.87,987.77,427.88,988.49,428.66,988.94z M464.22,999.33l-15.54-8.97c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													c-0.77,0.44-0.75,1.17,0.03,1.62l15.54,8.97c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													C465.01,1000.51,465,999.78,464.22,999.33z M309.56,908.06l11.24,6.49c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.76-0.44,0.75-1.17-0.03-1.62l-11.24-6.49c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C308.77,906.88,308.78,907.61,309.56,908.06z M299.07,914.12l14.29,8.25c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-14.29-8.25c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C298.27,912.94,298.29,913.67,299.07,914.12z M312.83,934.24l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C312.04,933.07,312.05,933.79,312.83,934.24z M324.07,940.73l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6,3.47
													C323.28,939.56,323.29,940.28,324.07,940.73z M341.37,950.72c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6,3.47c-0.77,0.44-0.76,1.17,0.03,1.62
													L341.37,950.72z M346.44,953.65l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62
													l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47C345.65,952.47,345.66,953.2,346.44,953.65z M357.62,960.1
													l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47C356.83,958.93,356.84,959.65,357.62,960.1z M368.8,966.56l6.12,3.53
													c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02
													l-6.01,3.47C368.01,965.39,368.02,966.11,368.8,966.56z M388.91,976.57l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62
													l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
													C386.89,977,388.14,977.01,388.91,976.57z M391.17,979.47l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6-3.47
													c0.77-0.44,0.76-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C390.38,978.3,390.39,979.02,391.17,979.47z M411.28,989.48l6-3.47c0.77-0.44,0.76-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
													C409.26,989.91,410.51,989.92,411.28,989.48z M422.46,995.94l6-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
													C420.44,996.37,421.69,996.38,422.46,995.94z M408.62,992.14l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.43,3.71
													c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.43-3.72
													C409.41,993.31,409.4,992.59,408.62,992.14z M312.67,936.74l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.43,3.71
													c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.43-3.71
													C313.46,937.91,313.45,937.19,312.67,936.74z M301.73,930.43l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.43,3.71
													c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.43-3.71
													C302.52,931.6,302.51,930.88,301.73,930.43z M290.65,924.03l-4.38-2.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.43,3.71
													c-0.77,0.44-0.75,1.17,0.03,1.62l4.38,2.53c0.78,0.45,2.03,0.46,2.8,0.01l6.43-3.71
													C291.44,925.2,291.43,924.48,290.65,924.03z M328.72,946.01l-11.29-6.52c-0.78-0.45-2.03-0.46-2.8-0.01l-6.43,3.71
													c-0.77,0.44-0.76,1.17,0.03,1.62l11.29,6.52c0.78,0.45,2.03,0.46,2.8,0.02l6.43-3.71
													C329.52,947.18,329.5,946.46,328.72,946.01z M397.59,985.77l-11.89-6.87c-0.78-0.45-2.03-0.46-2.8-0.02l-6.43,3.71
													c-0.77,0.44-0.75,1.17,0.03,1.62l11.89,6.87c0.78,0.45,2.03,0.46,2.8,0.01l6.43-3.71
													C398.38,986.94,398.37,986.22,397.59,985.77z M380.63,975.98l-47.08-27.18c-0.78-0.45-2.03-0.46-2.8-0.02l-6.43,3.71
													c-0.77,0.44-0.75,1.17,0.03,1.62l47.08,27.18c0.78,0.45,2.03,0.46,2.8,0.01l6.43-3.71
													C381.42,977.15,381.41,976.43,380.63,975.98z M453.67,1005.42l-20.78-11.99c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													c-0.77,0.44-0.75,1.17,0.03,1.62l20.78,12c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													C454.47,1006.6,454.45,1005.87,453.67,1005.42z M288.52,920.21l19.3,11.14c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-19.3-11.14c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C287.73,919.03,287.74,919.76,288.52,920.21z M337.25,924.05l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C336.46,922.87,336.47,923.59,337.25,924.05z M348.41,930.49l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6,3.47
													C347.62,929.31,347.63,930.04,348.41,930.49z M359.57,936.93l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6-3.47
													c0.77-0.44,0.76-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C358.78,935.76,358.79,936.48,359.57,936.93z M370.73,943.37l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6,3.47
													C369.94,942.2,369.95,942.92,370.73,943.37z M388.01,953.35c0.78,0.45,2.03,0.46,2.8,0.01l6-3.47
													c0.77-0.44,0.76-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62
													L388.01,953.35z M399.16,959.79c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.01l-6,3.47c-0.77,0.44-0.75,1.17,0.03,1.62L399.16,959.79z M413.12,966.25l6-3.47
													c0.77-0.44,0.76-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62
													l6.12,3.53C411.1,966.68,412.36,966.69,413.12,966.25z M421.48,972.68c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6,3.47c-0.77,0.44-0.75,1.17,0.03,1.62
													L421.48,972.68z M435.44,979.13l6-3.47c0.77-0.44,0.76-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01
													l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53C433.42,979.57,434.68,979.58,435.44,979.13z M446.6,985.58
													l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53C444.58,986.01,445.83,986.02,446.6,985.58z M454.82,983.39l-6.01,3.47
													c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6-3.47c0.77-0.44,0.76-1.17-0.03-1.62
													l-6.12-3.53C456.84,982.95,455.59,982.95,454.82,983.39z M474.72,993.27l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02
													l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													C475.51,994.45,475.5,993.72,474.72,993.27z M342.66,914.8l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6-3.47
													c0.77-0.44,0.76-1.16-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C341.87,913.62,341.88,914.35,342.66,914.8z M353.86,921.26l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C353.06,920.09,353.08,920.81,353.86,921.26z M365.05,927.72l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C364.26,926.55,364.27,927.27,365.05,927.72z M376.24,934.19l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C375.45,933.01,375.46,933.74,376.24,934.19z M387.44,940.65l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C386.65,939.47,386.66,940.2,387.44,940.65z M398.63,947.11l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6,3.47
													C397.84,945.94,397.85,946.66,398.63,947.11z M409.82,953.57l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C409.03,952.4,409.04,953.12,409.82,953.57z M421.02,960.04l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.76-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C420.23,958.86,420.24,959.59,421.02,960.04z M432.21,966.5l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C431.42,965.33,431.43,966.05,432.21,966.5z M443.41,972.96l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C442.61,971.79,442.63,972.51,443.41,972.96z M454.6,979.43l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C453.81,978.25,453.82,978.97,454.6,979.43z M485.43,987.09l-11.57-6.68c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													c-0.77,0.44-0.75,1.17,0.03,1.62l11.57,6.68c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													C486.22,988.26,486.21,987.54,485.43,987.09z M331.04,895.75l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.01l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.01l-2.5,1.44
													C330.25,894.57,330.26,895.3,331.04,895.75z M342.19,902.18l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.01l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.01l-2.5,1.44
													C341.4,901.01,341.41,901.73,342.19,902.18z M353.37,908.63l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.02l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.02l-2.5,1.44
													C352.57,907.46,352.59,908.18,353.37,908.63z M364.96,915.33l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.02l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.02l-2.5,1.44
													C364.16,914.15,364.18,914.88,364.96,915.33z M376.45,921.96l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.02l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.02l-2.5,1.44
													C375.66,920.79,375.67,921.51,376.45,921.96z M387.73,928.48l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.02l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.02l-2.5,1.44
													C386.94,927.3,386.95,928.03,387.73,928.48z M398.92,934.94l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.01l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.01l-2.5,1.44
													C398.13,933.76,398.14,934.48,398.92,934.94z M410.13,941.4l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.02l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.02l-2.5,1.44
													C409.33,940.23,409.35,940.95,410.13,941.4z M421.39,947.91l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.01l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.01l-2.5,1.44
													C420.6,946.73,420.61,947.46,421.39,947.91z M432.87,954.53l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.01l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.01l-2.5,1.44
													C432.07,953.36,432.08,954.08,432.87,954.53z M444.47,961.23l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.01l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.01l-2.5,1.44
													C443.68,960.06,443.69,960.78,444.47,961.23z M455.87,967.88l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.01l2.5-1.44
													c0.77-0.44,0.76-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.01l-2.5,1.44
													C455.08,966.7,455.09,967.43,455.87,967.88z"
                      />
                      <path
                        className={styles.st102}
                        d="M492.73,982.97l-7.52-4.34c-0.78-0.45-2.03-0.46-2.8-0.02l-2.5,1.44
													c-0.77,0.44-0.75,1.17,0.03,1.62l7.52,4.34c0.78,0.45,2.03,0.46,2.8,0.02l2.5-1.44
													C493.52,984.14,493.51,983.42,492.73,982.97z M467.38,974.42l7.52,4.34c0.78,0.45,2.03,0.46,2.8,0.01l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-7.52-4.34c-0.78-0.45-2.03-0.46-2.8-0.01l-2.5,1.44
													C466.59,973.24,466.6,973.97,467.38,974.42z M320.28,901.83l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C319.48,900.65,319.49,901.38,320.28,901.83z M435.49,1014.26l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-1.14,0.66
													c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l1.14-0.66
													C436.29,1015.43,436.27,1014.71,435.49,1014.26z M414.06,1001.89l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02L404,999
													c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l1.14-0.66
													C414.86,1003.06,414.84,1002.34,414.06,1001.89z M424.78,1008.07l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-1.14,0.66
													c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l1.14-0.66
													C425.57,1009.25,425.56,1008.52,424.78,1008.07z M430.56,1004.73l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-1.52,0.88
													c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l1.52-0.88
													C431.36,1005.91,431.34,1005.18,430.56,1004.73z M331.47,908.29l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C330.68,907.12,330.69,907.84,331.47,908.29z M335.01,921.1l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.01l-6,3.47c-0.77,0.44-0.76,1.17,0.03,1.62l6.12,3.53
													C332.99,921.54,334.24,921.55,335.01,921.1z M318.63,925.37l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C317.84,924.19,317.85,924.92,318.63,925.37z M338.46,935.22l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47c-0.77,0.44-0.75,1.16,0.03,1.62l6.12,3.53
													C336.44,935.65,337.7,935.66,338.46,935.22z M349.38,941.52l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
													C347.36,941.96,348.61,941.96,349.38,941.52z M351.38,944.27l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C350.59,943.1,350.6,943.82,351.38,944.27z M371.21,954.13l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
													C369.19,954.56,370.45,954.57,371.21,954.13z M382.18,960.46l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
													C380.16,960.89,381.42,960.9,382.18,960.46z M393.32,966.89l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
													C391.3,967.32,392.55,967.33,393.32,966.89z M395.64,969.83l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6,3.47
													C394.85,968.66,394.86,969.38,395.64,969.83z M415.48,979.68l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
													C413.46,980.12,414.71,980.12,415.48,979.68z M417.75,982.59l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C416.96,981.42,416.97,982.14,417.75,982.59z M428.66,988.9l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C427.87,987.72,427.88,988.45,428.66,988.9z M464.22,999.29l-15.54-8.97c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													c-0.77,0.44-0.75,1.17,0.03,1.62l15.54,8.97c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													C465.01,1000.46,465,999.74,464.22,999.29z M309.56,908.01l11.24,6.49c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.76-0.44,0.75-1.17-0.03-1.62l-11.24-6.49c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C308.77,906.84,308.78,907.56,309.56,908.01z M299.07,914.07l14.29,8.25c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62L307.85,909c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C298.27,912.9,298.29,913.62,299.07,914.07z M312.83,934.2l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C312.04,933.02,312.05,933.75,312.83,934.2z M324.07,940.69l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6,3.47
													C323.28,939.51,323.29,940.24,324.07,940.69z M341.37,950.68c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6,3.47c-0.77,0.44-0.76,1.17,0.03,1.62
													L341.37,950.68z M346.44,953.6l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62
													l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47C345.65,952.43,345.66,953.15,346.44,953.6z M357.62,960.06
													l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47C356.83,958.88,356.84,959.61,357.62,960.06z M368.8,966.51l6.12,3.53
													c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02
													l-6.01,3.47C368.01,965.34,368.02,966.06,368.8,966.51z M388.91,976.52l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62
													l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
													C386.89,976.95,388.14,976.96,388.91,976.52z M391.17,979.43l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6-3.47
													c0.77-0.44,0.76-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C390.38,978.25,390.39,978.98,391.17,979.43z M411.28,989.43l6-3.47c0.77-0.44,0.76-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
													C409.26,989.87,410.51,989.88,411.28,989.43z M422.46,995.89l6-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
													C420.44,996.33,421.69,996.33,422.46,995.89z M408.62,992.09l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.43,3.71
													c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.43-3.72
													C409.41,993.27,409.4,992.55,408.62,992.09z M312.67,936.69l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.43,3.71
													c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.43-3.71
													C313.46,937.87,313.45,937.14,312.67,936.69z M301.73,930.38l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.43,3.71
													c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.43-3.71
													C302.52,931.55,302.51,930.83,301.73,930.38z M290.65,923.98l-4.38-2.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.43,3.71
													c-0.77,0.44-0.75,1.17,0.03,1.62l4.38,2.53c0.78,0.45,2.03,0.46,2.8,0.01l6.43-3.71
													C291.44,925.16,291.43,924.43,290.65,923.98z M328.72,945.96l-11.29-6.52c-0.78-0.45-2.03-0.46-2.8-0.01l-6.43,3.71
													c-0.77,0.44-0.76,1.17,0.03,1.62l11.29,6.52c0.78,0.45,2.03,0.46,2.8,0.02l6.43-3.71
													C329.52,947.14,329.5,946.42,328.72,945.96z M397.59,985.72l-11.89-6.87c-0.78-0.45-2.03-0.46-2.8-0.02l-6.43,3.71
													c-0.77,0.44-0.75,1.17,0.03,1.62l11.89,6.87c0.78,0.45,2.03,0.46,2.8,0.01l6.43-3.71
													C398.38,986.9,398.37,986.17,397.59,985.72z M380.63,975.93l-47.08-27.18c-0.78-0.45-2.03-0.46-2.8-0.02l-6.43,3.71
													c-0.77,0.44-0.75,1.17,0.03,1.62l47.08,27.18c0.78,0.45,2.03,0.46,2.8,0.01l6.43-3.71
													C381.42,977.11,381.41,976.38,380.63,975.93z M453.67,1005.38l-20.78-11.99c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													c-0.77,0.44-0.75,1.17,0.03,1.62l20.78,12c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													C454.47,1006.55,454.45,1005.83,453.67,1005.38z M288.52,920.16l19.3,11.14c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-19.3-11.14c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C287.73,918.99,287.74,919.71,288.52,920.16z M337.25,924l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C336.46,922.83,336.47,923.55,337.25,924z M348.41,930.44l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6,3.47
													C347.62,929.27,347.63,929.99,348.41,930.44z M359.57,936.89l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6-3.47
													c0.77-0.44,0.76-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C358.78,935.71,358.79,936.43,359.57,936.89z M370.73,943.33l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6,3.47
													C369.94,942.15,369.95,942.88,370.73,943.33z M388.01,953.3c0.78,0.45,2.03,0.46,2.8,0.01l6-3.47
													c0.77-0.44,0.76-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62
													L388.01,953.3z M399.16,959.75c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.01l-6,3.47c-0.77,0.44-0.75,1.17,0.03,1.62L399.16,959.75z M413.12,966.2l6-3.47
													c0.77-0.44,0.76-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62
													l6.12,3.53C411.1,966.64,412.36,966.65,413.12,966.2z M421.48,972.63c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6,3.47c-0.77,0.44-0.75,1.17,0.03,1.62
													L421.48,972.63z M435.44,979.09l6-3.47c0.77-0.44,0.76-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01
													l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53C433.42,979.52,434.68,979.53,435.44,979.09z M446.6,985.53
													l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53C444.58,985.97,445.83,985.97,446.6,985.53z M454.82,983.34l-6.01,3.47
													c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6-3.47c0.77-0.44,0.76-1.17-0.03-1.62
													l-6.12-3.53C456.84,982.91,455.59,982.9,454.82,983.34z M474.72,993.23l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02
													l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													C475.51,994.4,475.5,993.68,474.72,993.23z M342.66,914.75l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6-3.47
													c0.77-0.44,0.76-1.16-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C341.87,913.58,341.88,914.3,342.66,914.75z M353.86,921.22l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C353.06,920.04,353.08,920.76,353.86,921.22z M365.05,927.68l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C364.26,926.5,364.27,927.23,365.05,927.68z M376.24,934.14l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C375.45,932.97,375.46,933.69,376.24,934.14z M387.44,940.6l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C386.65,939.43,386.66,940.15,387.44,940.6z M398.63,947.07l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6,3.47
													C397.84,945.89,397.85,946.62,398.63,947.07z M409.82,953.53l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C409.03,952.35,409.04,953.08,409.82,953.53z M421.02,959.99l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.76-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C420.23,958.82,420.24,959.54,421.02,959.99z M432.21,966.45l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C431.42,965.28,431.43,966,432.21,966.45z M443.41,972.92l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C442.61,971.74,442.63,972.47,443.41,972.92z M454.6,979.38l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C453.81,978.21,453.82,978.93,454.6,979.38z M485.43,987.04l-11.57-6.68c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													c-0.77,0.44-0.75,1.17,0.03,1.62l11.57,6.68c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													C486.22,988.22,486.21,987.49,485.43,987.04z M331.04,895.7l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.01l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.01l-2.5,1.44
													C330.25,894.53,330.26,895.25,331.04,895.7z M342.19,902.14l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.01l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.01l-2.5,1.44
													C341.4,900.96,341.41,901.69,342.19,902.14z M353.37,908.59l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.02l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.02l-2.5,1.44
													C352.57,907.41,352.59,908.14,353.37,908.59z M364.96,915.28l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.02l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.02l-2.5,1.44
													C364.16,914.11,364.18,914.83,364.96,915.28z M376.45,921.92l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.02l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.02l-2.5,1.44
													C375.66,920.74,375.67,921.47,376.45,921.92z M387.73,928.43l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.02l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.02l-2.5,1.44
													C386.94,927.26,386.95,927.98,387.73,928.43z M398.92,934.89l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.01l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.01l-2.5,1.44
													C398.13,933.72,398.14,934.44,398.92,934.89z M410.13,941.36l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.02l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.02l-2.5,1.44
													C409.33,940.18,409.35,940.91,410.13,941.36z M421.39,947.86l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.01l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.01l-2.5,1.44
													C420.6,946.69,420.61,947.41,421.39,947.86z M432.87,954.49l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.01l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.01l-2.5,1.44
													C432.07,953.31,432.08,954.04,432.87,954.49z M444.47,961.19l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.01l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.01l-2.5,1.44
													C443.68,960.01,443.69,960.74,444.47,961.19z M455.87,967.83l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.01l2.5-1.44
													c0.77-0.44,0.76-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.01l-2.5,1.44
													C455.08,966.66,455.09,967.38,455.87,967.83z"
                      />
                      <path
                        className={styles.st103}
                        d="M492.73,982.92l-7.52-4.34c-0.78-0.45-2.03-0.46-2.8-0.02l-2.5,1.44
													c-0.77,0.44-0.75,1.17,0.03,1.62l7.52,4.34c0.78,0.45,2.03,0.46,2.8,0.02l2.5-1.44
													C493.52,984.1,493.51,983.37,492.73,982.92z M467.38,974.37l7.52,4.34c0.78,0.45,2.03,0.46,2.8,0.01l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-7.52-4.34c-0.78-0.45-2.03-0.46-2.8-0.01l-2.5,1.44
													C466.59,973.2,466.6,973.92,467.38,974.37z M320.28,901.78l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C319.48,900.61,319.49,901.33,320.28,901.78z M435.49,1014.21l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-1.14,0.66
													c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l1.14-0.66
													C436.29,1015.39,436.27,1014.67,435.49,1014.21z M414.06,1001.84l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-1.14,0.66
													c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l1.14-0.66
													C414.86,1003.02,414.84,1002.29,414.06,1001.84z M424.78,1008.03l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-1.14,0.66
													c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l1.14-0.66
													C425.57,1009.2,425.56,1008.48,424.78,1008.03z M430.56,1004.69l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-1.52,0.88
													c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l1.52-0.88
													C431.36,1005.86,431.34,1005.14,430.56,1004.69z M331.47,908.25l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C330.68,907.07,330.69,907.8,331.47,908.25z M335.01,921.06l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.01l-6,3.47c-0.77,0.44-0.76,1.17,0.03,1.62l6.12,3.53
													C332.99,921.5,334.24,921.5,335.01,921.06z M318.63,925.32l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C317.84,924.15,317.85,924.87,318.63,925.32z M338.46,935.17l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47c-0.77,0.44-0.75,1.16,0.03,1.62l6.12,3.53
													C336.44,935.61,337.7,935.62,338.46,935.17z M349.38,941.48l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
													C347.36,941.91,348.61,941.92,349.38,941.48z M351.38,944.23l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C350.59,943.06,350.6,943.78,351.38,944.23z M371.21,954.08l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
													C369.19,954.52,370.45,954.52,371.21,954.08z M382.18,960.42l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
													C380.16,960.85,381.42,960.86,382.18,960.42z M393.32,966.84l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
													C391.3,967.28,392.55,967.29,393.32,966.84z M395.64,969.79l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6,3.47
													C394.85,968.61,394.86,969.34,395.64,969.79z M415.48,979.64l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
													C413.46,980.07,414.71,980.08,415.48,979.64z M417.75,982.55l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C416.96,981.38,416.97,982.1,417.75,982.55z M428.66,988.85l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C427.87,987.68,427.88,988.4,428.66,988.85z M464.22,999.24l-15.54-8.97c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													c-0.77,0.44-0.75,1.17,0.03,1.62l15.54,8.97c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													C465.01,1000.42,465,999.69,464.22,999.24z M309.56,907.97l11.24,6.49c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.76-0.44,0.75-1.17-0.03-1.62l-11.24-6.49c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C308.77,906.79,308.78,907.52,309.56,907.97z M299.07,914.03l14.29,8.25c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-14.29-8.25c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C298.27,912.85,298.29,913.58,299.07,914.03z M312.83,934.15l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C312.04,932.98,312.05,933.7,312.83,934.15z M324.07,940.64l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6,3.47
													C323.28,939.47,323.29,940.19,324.07,940.64z M341.37,950.63c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6,3.47c-0.77,0.44-0.76,1.17,0.03,1.62
													L341.37,950.63z M346.44,953.56l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62
													l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47C345.65,952.38,345.66,953.11,346.44,953.56z M357.62,960.01
													l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47C356.83,958.84,356.84,959.56,357.62,960.01z M368.8,966.47l6.12,3.53
													c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02
													l-6.01,3.47C368.01,965.3,368.02,966.02,368.8,966.47z M388.91,976.48l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62
													l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
													C386.89,976.91,388.14,976.92,388.91,976.48z M391.17,979.38l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6-3.47
													c0.77-0.44,0.76-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C390.38,978.21,390.39,978.93,391.17,979.38z M411.28,989.39l6-3.47c0.77-0.44,0.76-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
													C409.26,989.83,410.51,989.83,411.28,989.39z M422.46,995.85l6-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
													C420.44,996.28,421.69,996.29,422.46,995.85z M408.62,992.05l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.43,3.71
													c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.43-3.72
													C409.41,993.22,409.4,992.5,408.62,992.05z M312.67,936.65l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.43,3.71
													c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.43-3.71
													C313.46,937.82,313.45,937.1,312.67,936.65z M301.73,930.34l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.43,3.71
													c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.43-3.71
													C302.52,931.51,302.51,930.79,301.73,930.34z M290.65,923.94l-4.38-2.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.43,3.71
													c-0.77,0.44-0.75,1.17,0.03,1.62l4.38,2.53c0.78,0.45,2.03,0.46,2.8,0.01l6.43-3.71
													C291.44,925.11,291.43,924.39,290.65,923.94z M328.72,945.92l-11.29-6.52c-0.78-0.45-2.03-0.46-2.8-0.01l-6.43,3.71
													c-0.77,0.44-0.76,1.17,0.03,1.62l11.29,6.52c0.78,0.45,2.03,0.46,2.8,0.02l6.43-3.71
													C329.52,947.09,329.5,946.37,328.72,945.92z M397.59,985.68l-11.89-6.87c-0.78-0.45-2.03-0.46-2.8-0.02l-6.43,3.71
													c-0.77,0.44-0.75,1.17,0.03,1.62l11.89,6.87c0.78,0.45,2.03,0.46,2.8,0.01l6.43-3.71
													C398.38,986.85,398.37,986.13,397.59,985.68z M380.63,975.89l-47.08-27.18c-0.78-0.45-2.03-0.46-2.8-0.02l-6.43,3.71
													c-0.77,0.44-0.75,1.17,0.03,1.62l47.08,27.18c0.78,0.45,2.03,0.46,2.8,0.01l6.43-3.71
													C381.42,977.06,381.41,976.34,380.63,975.89z M453.67,1005.33l-20.78-11.99c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													c-0.77,0.44-0.75,1.17,0.03,1.62l20.78,12c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													C454.47,1006.51,454.45,1005.78,453.67,1005.33z M288.52,920.12l19.3,11.14c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-19.3-11.14c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C287.73,918.94,287.74,919.67,288.52,920.12z M337.25,923.96l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C336.46,922.78,336.47,923.51,337.25,923.96z M348.41,930.4l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6,3.47
													C347.62,929.22,347.63,929.95,348.41,930.4z M359.57,936.84l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6-3.47
													c0.77-0.44,0.76-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C358.78,935.67,358.79,936.39,359.57,936.84z M370.73,943.28l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6,3.47
													C369.94,942.11,369.95,942.83,370.73,943.28z M388.01,953.26c0.78,0.45,2.03,0.46,2.8,0.01l6-3.47
													c0.77-0.44,0.76-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62
													L388.01,953.26z M399.16,959.7c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.01l-6,3.47c-0.77,0.44-0.75,1.17,0.03,1.62L399.16,959.7z M413.12,966.16l6-3.47
													c0.77-0.44,0.76-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62
													l6.12,3.53C411.1,966.59,412.36,966.6,413.12,966.16z M421.48,972.59c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6,3.47c-0.77,0.44-0.75,1.17,0.03,1.62
													L421.48,972.59z M435.44,979.04l6-3.47c0.77-0.44,0.76-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01
													l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53C433.42,979.48,434.68,979.49,435.44,979.04z M446.6,985.49
													l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53C444.58,985.92,445.83,985.93,446.6,985.49z M454.82,983.3l-6.01,3.47
													c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6-3.47c0.77-0.44,0.76-1.17-0.03-1.62
													l-6.12-3.53C456.84,982.86,455.59,982.86,454.82,983.3z M474.72,993.18l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02
													l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													C475.51,994.36,475.5,993.63,474.72,993.18z M342.66,914.71l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6-3.47
													c0.77-0.44,0.76-1.16-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C341.87,913.53,341.88,914.26,342.66,914.71z M353.86,921.17l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C353.06,920,353.08,920.72,353.86,921.17z M365.05,927.63l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C364.26,926.46,364.27,927.18,365.05,927.63z M376.24,934.1l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C375.45,932.92,375.46,933.65,376.24,934.1z M387.44,940.56l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C386.65,939.39,386.66,940.11,387.44,940.56z M398.63,947.02l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6,3.47
													C397.84,945.85,397.85,946.57,398.63,947.02z M409.82,953.48l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C409.03,952.31,409.04,953.03,409.82,953.48z M421.02,959.95l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.76-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C420.23,958.77,420.24,959.5,421.02,959.95z M432.21,966.41l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C431.42,965.24,431.43,965.96,432.21,966.41z M443.41,972.87l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C442.61,971.7,442.63,972.42,443.41,972.87z M454.6,979.34l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C453.81,978.16,453.82,978.88,454.6,979.34z M485.43,987l-11.57-6.68c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													c-0.77,0.44-0.75,1.17,0.03,1.62l11.57,6.68c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													C486.22,988.17,486.21,987.45,485.43,987z M331.04,895.66l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.01l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.01l-2.5,1.44
													C330.25,894.48,330.26,895.21,331.04,895.66z M342.19,902.09l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.01l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.01l-2.5,1.44
													C341.4,900.92,341.41,901.64,342.19,902.09z M353.37,908.54l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.02l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.02l-2.5,1.44
													C352.57,907.37,352.59,908.09,353.37,908.54z M364.96,915.24l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.02l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.02l-2.5,1.44
													C364.16,914.06,364.18,914.79,364.96,915.24z M376.45,921.87l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.02l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.02l-2.5,1.44
													C375.66,920.7,375.67,921.42,376.45,921.87z M387.73,928.39l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.02l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.02l-2.5,1.44
													C386.94,927.21,386.95,927.94,387.73,928.39z M398.92,934.85l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.01l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.01l-2.5,1.44
													C398.13,933.67,398.14,934.4,398.92,934.85z M410.13,941.32l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.02l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.02l-2.5,1.44
													C409.33,940.14,409.35,940.86,410.13,941.32z M421.39,947.82l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.01l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.01l-2.5,1.44
													C420.6,946.64,420.61,947.37,421.39,947.82z M432.87,954.44l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.01l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.01l-2.5,1.44
													C432.07,953.27,432.08,953.99,432.87,954.44z M444.47,961.14l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.01l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.01l-2.5,1.44
													C443.68,959.97,443.69,960.69,444.47,961.14z M455.87,967.79l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.01l2.5-1.44
													c0.77-0.44,0.76-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.01l-2.5,1.44
													C455.08,966.61,455.09,967.34,455.87,967.79z"
                      />
                      <path
                        className={styles.st104}
                        d="M492.73,982.88l-7.52-4.34c-0.78-0.45-2.03-0.46-2.8-0.02l-2.5,1.44
													c-0.77,0.44-0.75,1.17,0.03,1.62l7.52,4.34c0.78,0.45,2.03,0.46,2.8,0.02l2.5-1.44
													C493.52,984.05,493.51,983.33,492.73,982.88z M467.38,974.33l7.52,4.34c0.78,0.45,2.03,0.46,2.8,0.01l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-7.52-4.34c-0.78-0.45-2.03-0.46-2.8-0.02l-2.5,1.44
													C466.59,973.16,466.6,973.88,467.38,974.33z M320.28,901.74l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C319.48,900.56,319.49,901.29,320.28,901.74z M435.49,1014.17l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-1.14,0.66
													c-0.77,0.44-0.75,1.16,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l1.14-0.66
													C436.29,1015.34,436.27,1014.62,435.49,1014.17z M414.06,1001.8l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-1.14,0.66
													c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l1.14-0.66
													C414.86,1002.97,414.84,1002.25,414.06,1001.8z M424.78,1007.98l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-1.14,0.66
													c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l1.14-0.66
													C425.57,1009.16,425.56,1008.43,424.78,1007.98z M430.56,1004.64l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-1.52,0.87
													c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l1.52-0.88
													C431.36,1005.82,431.34,1005.09,430.56,1004.64z M331.47,908.2l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C330.68,907.03,330.69,907.75,331.47,908.2z M335.01,921.02l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.02l-6,3.47c-0.77,0.44-0.76,1.17,0.03,1.62l6.12,3.53
													C332.99,921.45,334.24,921.46,335.01,921.02z M318.63,925.28l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C317.84,924.1,317.85,924.83,318.63,925.28z M338.46,935.13l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
													C336.44,935.56,337.7,935.57,338.46,935.13z M349.38,941.43l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
													C347.36,941.87,348.61,941.87,349.38,941.43z M351.38,944.19l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C350.59,943.01,350.6,943.74,351.38,944.19z M371.21,954.04l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
													C369.19,954.47,370.45,954.48,371.21,954.04z M382.18,960.37l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
													C380.16,960.81,381.42,960.81,382.18,960.37z M393.32,966.8l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
													C391.3,967.23,392.55,967.24,393.32,966.8z M395.64,969.74l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.16-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6,3.47
													C394.85,968.57,394.86,969.29,395.64,969.74z M415.48,979.59l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
													C413.46,980.03,414.71,980.04,415.48,979.59z M417.75,982.51l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C416.96,981.33,416.97,982.05,417.75,982.51z M428.66,988.81l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C427.87,987.63,427.88,988.36,428.66,988.81z M464.22,999.2l-15.54-8.97c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													c-0.77,0.44-0.75,1.17,0.03,1.62l15.54,8.97c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													C465.01,1000.37,465,999.65,464.22,999.2z M309.56,907.92l11.24,6.49c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.76-0.44,0.75-1.17-0.03-1.62l-11.24-6.49c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C308.77,906.75,308.78,907.47,309.56,907.92z M299.07,913.98l14.29,8.25c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-14.29-8.25c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C298.27,912.81,298.29,913.53,299.07,913.98z M312.83,934.11l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C312.04,932.94,312.05,933.66,312.83,934.11z M324.07,940.6l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6,3.47
													C323.28,939.42,323.29,940.15,324.07,940.6z M341.37,950.59c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6,3.47c-0.77,0.44-0.76,1.17,0.03,1.62
													L341.37,950.59z M346.44,953.51l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62
													l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47C345.65,952.34,345.66,953.06,346.44,953.51z M357.62,959.97
													l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47C356.83,958.79,356.84,959.52,357.62,959.97z M368.8,966.43l6.12,3.53
													c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02
													l-6.01,3.47C368.01,965.25,368.02,965.98,368.8,966.43z M388.91,976.43l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62
													l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
													C386.89,976.87,388.14,976.87,388.91,976.43z M391.17,979.34l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6-3.47
													c0.77-0.44,0.76-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C390.38,978.17,390.39,978.89,391.17,979.34z M411.28,989.35l6-3.47c0.77-0.44,0.76-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
													C409.26,989.78,410.51,989.79,411.28,989.35z M422.46,995.8l6-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
													C420.44,996.24,421.69,996.24,422.46,995.8z M408.62,992.01l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.43,3.71
													c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.43-3.71
													C409.41,993.18,409.4,992.46,408.62,992.01z M312.67,936.61l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.43,3.71
													c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.43-3.71
													C313.46,937.78,313.45,937.06,312.67,936.61z M301.73,930.29l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.43,3.71
													c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.43-3.71
													C302.52,931.47,302.51,930.74,301.73,930.29z M290.65,923.9l-4.38-2.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.43,3.71
													c-0.77,0.44-0.75,1.17,0.03,1.62l4.38,2.53c0.78,0.45,2.03,0.46,2.8,0.02l6.43-3.71
													C291.44,925.07,291.43,924.35,290.65,923.9z M328.72,945.88l-11.29-6.52c-0.78-0.45-2.03-0.46-2.8-0.02l-6.43,3.72
													c-0.77,0.44-0.76,1.17,0.03,1.62l11.29,6.52c0.78,0.45,2.03,0.46,2.8,0.01l6.43-3.71
													C329.52,947.05,329.5,946.33,328.72,945.88z M397.59,985.64l-11.89-6.87c-0.78-0.45-2.03-0.46-2.8-0.01l-6.43,3.71
													c-0.77,0.44-0.75,1.17,0.03,1.62l11.89,6.87c0.78,0.45,2.03,0.46,2.8,0.02l6.43-3.71
													C398.38,986.81,398.37,986.09,397.59,985.64z M380.63,975.85l-47.08-27.18c-0.78-0.45-2.03-0.46-2.8-0.01l-6.43,3.71
													c-0.77,0.44-0.75,1.17,0.03,1.62l47.08,27.18c0.78,0.45,2.03,0.46,2.8,0.02l6.43-3.71
													C381.42,977.02,381.41,976.3,380.63,975.85z M453.67,1005.29l-20.78-12c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													c-0.77,0.44-0.75,1.17,0.03,1.62l20.78,11.99c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													C454.47,1006.46,454.45,1005.74,453.67,1005.29z M288.52,920.07l19.3,11.14c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62L297.3,915c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C287.73,918.9,287.74,919.62,288.52,920.07z M337.25,923.91l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C336.46,922.74,336.47,923.46,337.25,923.91z M348.41,930.35l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6,3.47
													C347.62,929.18,347.63,929.9,348.41,930.35z M359.57,936.8l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6-3.47
													c0.77-0.44,0.76-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C358.78,935.62,358.79,936.35,359.57,936.8z M370.73,943.24l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6,3.47
													C369.94,942.07,369.95,942.79,370.73,943.24z M388.01,953.22c0.78,0.45,2.03,0.46,2.8,0.02l6-3.47
													c0.77-0.44,0.76-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62
													L388.01,953.22z M399.16,959.66c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47c0.77-0.44,0.75-1.16-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.02l-6,3.47c-0.77,0.44-0.75,1.17,0.03,1.62L399.16,959.66z M413.12,966.12l6-3.47
													c0.77-0.44,0.76-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62
													l6.12,3.53C411.1,966.55,412.36,966.56,413.12,966.12z M421.48,972.54c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6,3.47c-0.77,0.44-0.75,1.17,0.03,1.62
													L421.48,972.54z M435.44,979l6-3.47c0.77-0.44,0.76-1.16-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02
													l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53C433.42,979.44,434.68,979.44,435.44,979z M446.6,985.44
													l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53C444.58,985.88,445.83,985.89,446.6,985.44z M454.82,983.25l-6.01,3.47
													c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6-3.47c0.77-0.44,0.76-1.17-0.03-1.62
													l-6.12-3.53C456.84,982.82,455.59,982.81,454.82,983.25z M474.72,993.14l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01
													l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													C475.51,994.31,475.5,993.59,474.72,993.14z M342.66,914.66l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6-3.47
													c0.77-0.44,0.76-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C341.87,913.49,341.88,914.21,342.66,914.66z M353.86,921.13l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C353.06,919.95,353.08,920.68,353.86,921.13z M365.05,927.59l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C364.26,926.42,364.27,927.14,365.05,927.59z M376.24,934.05l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C375.45,932.88,375.46,933.6,376.24,934.05z M387.44,940.52l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C386.65,939.34,386.66,940.06,387.44,940.52z M398.63,946.98l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6,3.47
													C397.84,945.8,397.85,946.53,398.63,946.98z M409.82,953.44l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C409.03,952.27,409.04,952.99,409.82,953.44z M421.02,959.9l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.76-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C420.23,958.73,420.24,959.45,421.02,959.9z M432.21,966.37l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C431.42,965.19,431.43,965.92,432.21,966.37z M443.41,972.83l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C442.61,971.65,442.63,972.38,443.41,972.83z M454.6,979.29l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C453.81,978.12,453.82,978.84,454.6,979.29z M485.43,986.95l-11.57-6.68c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													c-0.77,0.44-0.75,1.17,0.03,1.62l11.57,6.68c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													C486.22,988.13,486.21,987.4,485.43,986.95z M331.04,895.61l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.02l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.02l-2.5,1.44
													C330.25,894.44,330.26,895.16,331.04,895.61z M342.19,902.05l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.01l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.01l-2.5,1.44
													C341.4,900.87,341.41,901.6,342.19,902.05z M353.37,908.5l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.02l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.01l-2.5,1.44
													C352.57,907.33,352.59,908.05,353.37,908.5z M364.96,915.19l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.01l2.5-1.44
													c0.77-0.44,0.75-1.16-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.01l-2.5,1.44
													C364.16,914.02,364.18,914.74,364.96,915.19z M376.45,921.83l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.01l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.01l-2.5,1.44
													C375.66,920.66,375.67,921.38,376.45,921.83z M387.73,928.34l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.02l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62L393,925.3c-0.78-0.45-2.03-0.46-2.8-0.02l-2.5,1.44
													C386.94,927.17,386.95,927.89,387.73,928.34z M398.92,934.8l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.02l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.02l-2.5,1.44
													C398.13,933.63,398.14,934.35,398.92,934.8z M410.13,941.27l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.02l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.02l-2.5,1.44
													C409.33,940.1,409.35,940.82,410.13,941.27z M421.39,947.77l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.02l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.02l-2.5,1.44
													C420.6,946.6,420.61,947.32,421.39,947.77z M432.87,954.4l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.02l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.02l-2.5,1.44
													C432.07,953.23,432.08,953.95,432.87,954.4z M444.47,961.1l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.02l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.02l-2.5,1.44
													C443.68,959.92,443.69,960.65,444.47,961.1z M455.87,967.74l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.02l2.5-1.44
													c0.77-0.44,0.76-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.02l-2.5,1.44
													C455.08,966.57,455.09,967.29,455.87,967.74z"
                      />
                      <path
                        className={styles.st105}
                        d="M492.73,982.83l-7.52-4.34c-0.78-0.45-2.03-0.46-2.8-0.02l-2.5,1.44
													c-0.77,0.44-0.75,1.17,0.03,1.62l7.52,4.34c0.78,0.45,2.03,0.46,2.8,0.02l2.5-1.44
													C493.52,984.01,493.51,983.28,492.73,982.83z M467.38,974.29l7.52,4.34c0.78,0.45,2.03,0.46,2.8,0.01l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-7.52-4.34c-0.78-0.45-2.03-0.46-2.8-0.02l-2.5,1.44
													C466.59,973.11,466.6,973.83,467.38,974.29z M320.28,901.69l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C319.48,900.52,319.49,901.24,320.28,901.69z M435.49,1014.13l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-1.14,0.66
													c-0.77,0.44-0.75,1.16,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l1.14-0.66
													C436.29,1015.3,436.27,1014.58,435.49,1014.13z M414.06,1001.75l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-1.14,0.66
													c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l1.14-0.66
													C414.86,1002.93,414.84,1002.2,414.06,1001.75z M424.78,1007.94l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-1.14,0.66
													c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l1.14-0.66
													C425.57,1009.11,425.56,1008.39,424.78,1007.94z M430.56,1004.6l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-1.52,0.87
													c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l1.52-0.88
													C431.36,1005.77,431.34,1005.05,430.56,1004.6z M331.47,908.16l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C330.68,906.98,330.69,907.71,331.47,908.16z M335.01,920.97l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.02l-6,3.47c-0.77,0.44-0.76,1.17,0.03,1.62l6.12,3.53
													C332.99,921.41,334.24,921.41,335.01,920.97z M318.63,925.23l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C317.84,924.06,317.85,924.78,318.63,925.23z M338.46,935.08l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
													C336.44,935.52,337.7,935.53,338.46,935.08z M349.38,941.39l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
													C347.36,941.82,348.61,941.83,349.38,941.39z M351.38,944.14l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C350.59,942.97,350.6,943.69,351.38,944.14z M371.21,953.99l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
													C369.19,954.43,370.45,954.43,371.21,953.99z M382.18,960.33l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
													C380.16,960.76,381.42,960.77,382.18,960.33z M393.32,966.76l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
													C391.3,967.19,392.55,967.2,393.32,966.76z M395.64,969.7l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.16-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6,3.47
													C394.85,968.52,394.86,969.25,395.64,969.7z M415.48,979.55l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
													C413.46,979.98,414.71,979.99,415.48,979.55z M417.75,982.46l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C416.96,981.29,416.97,982.01,417.75,982.46z M428.66,988.76l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C427.87,987.59,427.88,988.31,428.66,988.76z M464.22,999.15l-15.54-8.97c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													c-0.77,0.44-0.75,1.17,0.03,1.62l15.54,8.97c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													C465.01,1000.33,465,999.61,464.22,999.15z M309.56,907.88l11.24,6.49c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.76-0.44,0.75-1.17-0.03-1.62l-11.24-6.49c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C308.77,906.71,308.78,907.43,309.56,907.88z M299.07,913.94l14.29,8.25c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-14.29-8.25c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C298.27,912.77,298.29,913.49,299.07,913.94z M312.83,934.07l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C312.04,932.89,312.05,933.62,312.83,934.07z M324.07,940.55l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6,3.47
													C323.28,939.38,323.29,940.1,324.07,940.55z M341.37,950.54c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6,3.47c-0.77,0.44-0.76,1.17,0.03,1.62
													L341.37,950.54z M346.44,953.47l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62
													l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47C345.65,952.29,345.66,953.02,346.44,953.47z M357.62,959.93
													l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47C356.83,958.75,356.84,959.47,357.62,959.93z M368.8,966.38l6.12,3.53
													c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02
													l-6.01,3.47C368.01,965.21,368.02,965.93,368.8,966.38z M388.91,976.39l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62
													l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
													C386.89,976.82,388.14,976.83,388.91,976.39z M391.17,979.3l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6-3.47
													c0.77-0.44,0.76-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C390.38,978.12,390.39,978.85,391.17,979.3z M411.28,989.3l6-3.47c0.77-0.44,0.76-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
													C409.26,989.74,410.51,989.74,411.28,989.3z M422.46,995.76l6-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
													C420.44,996.19,421.69,996.2,422.46,995.76z M408.62,991.96l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.43,3.71
													c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.43-3.71
													C409.41,993.14,409.4,992.41,408.62,991.96z M312.67,936.56l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.43,3.71
													c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.43-3.71
													C313.46,937.74,313.45,937.01,312.67,936.56z M301.73,930.25l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.43,3.71
													c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.43-3.71
													C302.52,931.42,302.51,930.7,301.73,930.25z M290.65,923.85l-4.38-2.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.43,3.71
													c-0.77,0.44-0.75,1.17,0.03,1.62l4.38,2.53c0.78,0.45,2.03,0.46,2.8,0.02l6.43-3.71
													C291.44,925.03,291.43,924.3,290.65,923.85z M328.72,945.83l-11.29-6.52c-0.78-0.45-2.03-0.46-2.8-0.02l-6.43,3.72
													c-0.77,0.44-0.76,1.17,0.03,1.62l11.29,6.52c0.78,0.45,2.03,0.46,2.8,0.01l6.43-3.71
													C329.52,947.01,329.5,946.28,328.72,945.83z M397.59,985.59l-11.89-6.87c-0.78-0.45-2.03-0.46-2.8-0.01l-6.43,3.71
													c-0.77,0.44-0.75,1.17,0.03,1.62l11.89,6.87c0.78,0.45,2.03,0.46,2.8,0.02l6.43-3.71
													C398.38,986.77,398.37,986.04,397.59,985.59z M380.63,975.8l-47.08-27.18c-0.78-0.45-2.03-0.46-2.8-0.01l-6.43,3.71
													c-0.77,0.44-0.75,1.17,0.03,1.62l47.08,27.18c0.78,0.45,2.03,0.46,2.8,0.02l6.43-3.71
													C381.42,976.98,381.41,976.25,380.63,975.8z M453.67,1005.24l-20.78-12c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													c-0.77,0.44-0.75,1.17,0.03,1.62l20.78,11.99c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													C454.47,1006.42,454.45,1005.69,453.67,1005.24z M288.52,920.03l19.3,11.14c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-19.3-11.14c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C287.73,918.85,287.74,919.58,288.52,920.03z M337.25,923.87l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C336.46,922.69,336.47,923.42,337.25,923.87z M348.41,930.31l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6,3.47
													C347.62,929.14,347.63,929.86,348.41,930.31z M359.57,936.75l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6-3.47
													c0.77-0.44,0.76-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C358.78,935.58,358.79,936.3,359.57,936.75z M370.73,943.2l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6,3.47
													C369.94,942.02,369.95,942.74,370.73,943.2z M388.01,953.17c0.78,0.45,2.03,0.46,2.8,0.02l6-3.47
													c0.77-0.44,0.76-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62
													L388.01,953.17z M399.16,959.61c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47c0.77-0.44,0.75-1.16-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.02l-6,3.47c-0.77,0.44-0.75,1.17,0.03,1.62L399.16,959.61z M413.12,966.07l6-3.47
													c0.77-0.44,0.76-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62
													l6.12,3.53C411.1,966.51,412.36,966.51,413.12,966.07z M421.48,972.5c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6,3.47c-0.77,0.44-0.75,1.17,0.03,1.62
													L421.48,972.5z M435.44,978.96l6-3.47c0.77-0.44,0.76-1.16-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02
													l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53C433.42,979.39,434.68,979.4,435.44,978.96z M446.6,985.4
													l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53C444.58,985.83,445.83,985.84,446.6,985.4z M454.82,983.21l-6.01,3.47
													c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6-3.47c0.77-0.44,0.76-1.17-0.03-1.62
													l-6.12-3.53C456.84,982.77,455.59,982.77,454.82,983.21z M474.72,993.1l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01
													l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													C475.51,994.27,475.5,993.55,474.72,993.1z M342.66,914.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6-3.47
													c0.77-0.44,0.76-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C341.87,913.45,341.88,914.17,342.66,914.62z M353.86,921.08l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C353.06,919.91,353.08,920.63,353.86,921.08z M365.05,927.55l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C364.26,926.37,364.27,927.09,365.05,927.55z M376.24,934.01l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C375.45,932.83,375.46,933.56,376.24,934.01z M387.44,940.47l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C386.65,939.3,386.66,940.02,387.44,940.47z M398.63,946.93l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6,3.47
													C397.84,945.76,397.85,946.48,398.63,946.93z M409.82,953.4l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C409.03,952.22,409.04,952.95,409.82,953.4z M421.02,959.86l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.76-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C420.23,958.68,420.24,959.41,421.02,959.86z M432.21,966.32l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C431.42,965.15,431.43,965.87,432.21,966.32z M443.41,972.78l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C442.61,971.61,442.63,972.33,443.41,972.78z M454.6,979.25l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C453.81,978.07,453.82,978.8,454.6,979.25z M485.43,986.91l-11.57-6.68c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													c-0.77,0.44-0.75,1.17,0.03,1.62l11.57,6.68c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													C486.22,988.08,486.21,987.36,485.43,986.91z M331.04,895.57l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.02l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.02l-2.5,1.44
													C330.25,894.39,330.26,895.12,331.04,895.57z M342.19,902l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.01l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.01l-2.5,1.44
													C341.4,900.83,341.41,901.55,342.19,902z M353.37,908.46l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.02l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.01l-2.5,1.44
													C352.57,907.28,352.59,908.01,353.37,908.46z M364.96,915.15l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.01l2.5-1.44
													c0.77-0.44,0.75-1.16-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.01l-2.5,1.44
													C364.16,913.97,364.18,914.7,364.96,915.15z M376.45,921.79l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.01l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.01l-2.5,1.44
													C375.66,920.61,375.67,921.34,376.45,921.79z M387.73,928.3l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.02l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.02l-2.5,1.44
													C386.94,927.12,386.95,927.85,387.73,928.3z M398.92,934.76l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.02l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.02l-2.5,1.44
													C398.13,933.58,398.14,934.31,398.92,934.76z M410.13,941.23l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.02l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.02l-2.5,1.44
													C409.33,940.05,409.35,940.78,410.13,941.23z M421.39,947.73l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.02l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.02l-2.5,1.44
													C420.6,946.55,420.61,947.28,421.39,947.73z M432.87,954.36l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.02l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.02l-2.5,1.44
													C432.07,953.18,432.08,953.9,432.87,954.36z M444.47,961.05l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.02l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.02l-2.5,1.44
													C443.68,959.88,443.69,960.6,444.47,961.05z M455.87,967.7l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.02l2.5-1.44
													c0.77-0.44,0.76-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.02l-2.5,1.44
													C455.08,966.53,455.09,967.25,455.87,967.7z"
                      />
                      <path
                        className={styles.st106}
                        d="M492.73,982.79l-7.52-4.34c-0.78-0.45-2.03-0.46-2.8-0.02l-2.5,1.44
													c-0.77,0.44-0.75,1.17,0.03,1.62l7.52,4.34c0.78,0.45,2.03,0.46,2.8,0.02l2.5-1.44
													C493.52,983.96,493.51,983.24,492.73,982.79z M467.38,974.24l7.52,4.34c0.78,0.45,2.03,0.46,2.8,0.01l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-7.52-4.34c-0.78-0.45-2.03-0.46-2.8-0.02l-2.5,1.44
													C466.59,973.07,466.6,973.79,467.38,974.24z M320.28,901.65l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C319.48,900.48,319.49,901.2,320.28,901.65z M435.49,1014.08l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-1.14,0.66
													c-0.77,0.44-0.75,1.16,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l1.14-0.66
													C436.29,1015.26,436.27,1014.53,435.49,1014.08z M414.06,1001.71l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-1.14,0.66
													c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l1.14-0.66
													C414.86,1002.88,414.84,1002.16,414.06,1001.71z M424.78,1007.9l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-1.14,0.66
													c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l1.14-0.66
													C425.57,1009.07,425.56,1008.35,424.78,1007.9z M430.56,1004.56l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-1.52,0.87
													c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l1.52-0.88
													C431.36,1005.73,431.34,1005.01,430.56,1004.56z M331.47,908.11l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C330.68,906.94,330.69,907.66,331.47,908.11z M335.01,920.93l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.02l-6,3.47c-0.77,0.44-0.76,1.17,0.03,1.62l6.12,3.53
													C332.99,921.36,334.24,921.37,335.01,920.93z M318.63,925.19l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C317.84,924.02,317.85,924.74,318.63,925.19z M338.46,935.04l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
													C336.44,935.48,337.7,935.48,338.46,935.04z M349.38,941.34l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
													C347.36,941.78,348.61,941.79,349.38,941.34z M351.38,944.1l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C350.59,942.92,350.6,943.65,351.38,944.1z M371.21,953.95l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
													C369.19,954.38,370.45,954.39,371.21,953.95z M382.18,960.28l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
													C380.16,960.72,381.42,960.72,382.18,960.28z M393.32,966.71l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
													C391.3,967.15,392.55,967.15,393.32,966.71z M395.64,969.65l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.16-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6,3.47
													C394.85,968.48,394.86,969.2,395.64,969.65z M415.48,979.5l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
													C413.46,979.94,414.71,979.95,415.48,979.5z M417.75,982.42l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C416.96,981.24,416.97,981.97,417.75,982.42z M428.66,988.72l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C427.87,987.55,427.88,988.27,428.66,988.72z M464.22,999.11l-15.54-8.97c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													c-0.77,0.44-0.75,1.17,0.03,1.62l15.54,8.97c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													C465.01,1000.28,465,999.56,464.22,999.11z M309.56,907.84l11.24,6.49c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.76-0.44,0.75-1.17-0.03-1.62l-11.24-6.49c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C308.77,906.66,308.78,907.39,309.56,907.84z M299.07,913.9l14.29,8.25c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-14.29-8.25c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C298.27,912.72,298.29,913.45,299.07,913.9z M312.83,934.02l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C312.04,932.85,312.05,933.57,312.83,934.02z M324.07,940.51l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6,3.47
													C323.28,939.34,323.29,940.06,324.07,940.51z M341.37,950.5c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6,3.47c-0.77,0.44-0.76,1.17,0.03,1.62
													L341.37,950.5z M346.44,953.42l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62
													l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47C345.65,952.25,345.66,952.97,346.44,953.42z M357.62,959.88
													l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47C356.83,958.71,356.84,959.43,357.62,959.88z M368.8,966.34l6.12,3.53
													c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02
													l-6.01,3.47C368.01,965.16,368.02,965.89,368.8,966.34z M388.91,976.34l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62
													l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
													C386.89,976.78,388.14,976.79,388.91,976.34z M391.17,979.25l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6-3.47
													c0.77-0.44,0.76-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C390.38,978.08,390.39,978.8,391.17,979.25z M411.28,989.26l6-3.47c0.77-0.44,0.76-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
													C409.26,989.69,410.51,989.7,411.28,989.26z M422.46,995.71l6-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
													C420.44,996.15,421.69,996.16,422.46,995.71z M408.62,991.92l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.43,3.71
													c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.43-3.71
													C409.41,993.09,409.4,992.37,408.62,991.92z M312.67,936.52l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.43,3.71
													c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.43-3.71
													C313.46,937.69,313.45,936.97,312.67,936.52z M301.73,930.2l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.43,3.71
													c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.43-3.71
													C302.52,931.38,302.51,930.65,301.73,930.2z M290.65,923.81l-4.38-2.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.43,3.71
													c-0.77,0.44-0.75,1.17,0.03,1.62l4.38,2.53c0.78,0.45,2.03,0.46,2.8,0.02l6.43-3.71
													C291.44,924.98,291.43,924.26,290.65,923.81z M328.72,945.79l-11.29-6.52c-0.78-0.45-2.03-0.46-2.8-0.02l-6.43,3.72
													c-0.77,0.44-0.76,1.17,0.03,1.62l11.29,6.52c0.78,0.45,2.03,0.46,2.8,0.01l6.43-3.71
													C329.52,946.96,329.5,946.24,328.72,945.79z M397.59,985.55l-11.89-6.87c-0.78-0.45-2.03-0.46-2.8-0.01l-6.43,3.71
													c-0.77,0.44-0.75,1.17,0.03,1.62l11.89,6.87c0.78,0.45,2.03,0.46,2.8,0.02l6.43-3.71
													C398.38,986.72,398.37,986,397.59,985.55z M380.63,975.76l-47.08-27.18c-0.78-0.45-2.03-0.46-2.8-0.01l-6.43,3.71
													c-0.77,0.44-0.75,1.17,0.03,1.62l47.08,27.18c0.78,0.45,2.03,0.46,2.8,0.02l6.43-3.71
													C381.42,976.93,381.41,976.21,380.63,975.76z M453.67,1005.2l-20.78-12c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													c-0.77,0.44-0.75,1.17,0.03,1.62l20.78,11.99c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													C454.47,1006.37,454.45,1005.65,453.67,1005.2z M288.52,919.99l19.3,11.14c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-19.3-11.14c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C287.73,918.81,287.74,919.53,288.52,919.99z M337.25,923.82l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C336.46,922.65,336.47,923.37,337.25,923.82z M348.41,930.27l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6,3.47
													C347.62,929.09,347.63,929.82,348.41,930.27z M359.57,936.71l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6-3.47
													c0.77-0.44,0.76-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C358.78,935.53,358.79,936.26,359.57,936.71z M370.73,943.15l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6,3.47
													C369.94,941.98,369.95,942.7,370.73,943.15z M388.01,953.13c0.78,0.45,2.03,0.46,2.8,0.02l6-3.47
													c0.77-0.44,0.76-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62
													L388.01,953.13z M399.16,959.57c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47c0.77-0.44,0.75-1.16-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.02l-6,3.47c-0.77,0.44-0.75,1.17,0.03,1.62L399.16,959.57z M413.12,966.03l6-3.47
													c0.77-0.44,0.76-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62
													l6.12,3.53C411.1,966.46,412.36,966.47,413.12,966.03z M421.48,972.45c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6,3.47c-0.77,0.44-0.75,1.17,0.03,1.62
													L421.48,972.45z M435.44,978.91l6-3.47c0.77-0.44,0.76-1.16-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02
													l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53C433.42,979.35,434.68,979.35,435.44,978.91z M446.6,985.36
													l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53C444.58,985.79,445.83,985.8,446.6,985.36z M454.82,983.17l-6.01,3.47
													c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6-3.47c0.77-0.44,0.76-1.17-0.03-1.62
													l-6.12-3.53C456.84,982.73,455.59,982.72,454.82,983.17z M474.72,993.05l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01
													l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													C475.51,994.23,475.5,993.5,474.72,993.05z M342.66,914.58l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6-3.47
													c0.77-0.44,0.76-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C341.87,913.4,341.88,914.13,342.66,914.58z M353.86,921.04l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C353.06,919.86,353.08,920.59,353.86,921.04z M365.05,927.5l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C364.26,926.33,364.27,927.05,365.05,927.5z M376.24,933.96l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C375.45,932.79,375.46,933.51,376.24,933.96z M387.44,940.43l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C386.65,939.25,386.66,939.98,387.44,940.43z M398.63,946.89l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6,3.47
													C397.84,945.72,397.85,946.44,398.63,946.89z M409.82,953.35l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C409.03,952.18,409.04,952.9,409.82,953.35z M421.02,959.81l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.76-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C420.23,958.64,420.24,959.36,421.02,959.81z M432.21,966.28l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C431.42,965.1,431.43,965.83,432.21,966.28z M443.41,972.74l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C442.61,971.57,442.63,972.29,443.41,972.74z M454.6,979.2l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C453.81,978.03,453.82,978.75,454.6,979.2z M485.43,986.87l-11.57-6.68c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													c-0.77,0.44-0.75,1.17,0.03,1.62l11.57,6.68c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													C486.22,988.04,486.21,987.32,485.43,986.87z M331.04,895.53l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.02l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.02l-2.5,1.44
													C330.25,894.35,330.26,895.07,331.04,895.53z M342.19,901.96l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.01l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.01l-2.5,1.44
													C341.4,900.79,341.41,901.51,342.19,901.96z M353.37,908.41l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.02l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.01l-2.5,1.44
													C352.57,907.24,352.59,907.96,353.37,908.41z M364.96,915.1l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.01l2.5-1.44
													c0.77-0.44,0.75-1.16-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.01l-2.5,1.44
													C364.16,913.93,364.18,914.65,364.96,915.1z M376.45,921.74l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.01l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.01l-2.5,1.44
													C375.66,920.57,375.67,921.29,376.45,921.74z M387.73,928.25l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.02l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.02l-2.5,1.44
													C386.94,927.08,386.95,927.8,387.73,928.25z M398.92,934.71l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.02l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.02l-2.5,1.44
													C398.13,933.54,398.14,934.26,398.92,934.71z M410.13,941.18l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.02l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.02l-2.5,1.44
													C409.33,940.01,409.35,940.73,410.13,941.18z M421.39,947.68l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.02l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.02l-2.5,1.44
													C420.6,946.51,420.61,947.23,421.39,947.68z M432.87,954.31l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.02l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.02l-2.5,1.44
													C432.07,953.14,432.08,953.86,432.87,954.31z M444.47,961.01l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.02l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.02l-2.5,1.44
													C443.68,959.84,443.69,960.56,444.47,961.01z M455.87,967.66l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.02l2.5-1.44
													c0.77-0.44,0.76-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.02l-2.5,1.44
													C455.08,966.48,455.09,967.21,455.87,967.66z"
                      />
                      <path
                        className={styles.st107}
                        d="M492.73,982.74l-7.52-4.34c-0.78-0.45-2.03-0.46-2.8-0.02l-2.5,1.44
													c-0.77,0.44-0.75,1.17,0.03,1.62l7.52,4.34c0.78,0.45,2.03,0.46,2.8,0.02l2.5-1.44
													C493.52,983.92,493.51,983.19,492.73,982.74z M467.38,974.2l7.52,4.34c0.78,0.45,2.03,0.46,2.8,0.01l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-7.52-4.34c-0.78-0.45-2.03-0.46-2.8-0.02l-2.5,1.44
													C466.59,973.02,466.6,973.75,467.38,974.2z M320.28,901.61l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C319.48,900.43,319.49,901.15,320.28,901.61z M435.49,1014.04l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-1.14,0.66
													c-0.77,0.44-0.75,1.16,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l1.14-0.66
													C436.29,1015.21,436.27,1014.49,435.49,1014.04z M414.06,1001.66l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-1.14,0.66
													c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l1.14-0.66
													C414.86,1002.84,414.84,1002.11,414.06,1001.66z M424.78,1007.85l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-1.14,0.66
													c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l1.14-0.66
													C425.57,1009.02,425.56,1008.3,424.78,1007.85z M430.56,1004.51l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-1.52,0.87
													c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l1.52-0.88
													C431.36,1005.68,431.34,1004.96,430.56,1004.51z M331.47,908.07l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C330.68,906.89,330.69,907.62,331.47,908.07z M335.01,920.88l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.02l-6,3.47c-0.77,0.44-0.76,1.17,0.03,1.62l6.12,3.53
													C332.99,921.32,334.24,921.33,335.01,920.88z M318.63,925.14l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C317.84,923.97,317.85,924.69,318.63,925.14z M338.46,935l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
													C336.44,935.43,337.7,935.44,338.46,935z M349.38,941.3l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
													C347.36,941.73,348.61,941.74,349.38,941.3z M351.38,944.05l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C350.59,942.88,350.6,943.6,351.38,944.05z M371.21,953.9l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
													C369.19,954.34,370.45,954.35,371.21,953.9z M382.18,960.24l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
													C380.16,960.67,381.42,960.68,382.18,960.24z M393.32,966.67l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
													C391.3,967.1,392.55,967.11,393.32,966.67z M395.64,969.61l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.16-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6,3.47
													C394.85,968.43,394.86,969.16,395.64,969.61z M415.48,979.46l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
													C413.46,979.89,414.71,979.9,415.48,979.46z M417.75,982.37l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C416.96,981.2,416.97,981.92,417.75,982.37z M428.66,988.67l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C427.87,987.5,427.88,988.22,428.66,988.67z M464.22,999.07l-15.54-8.97c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													c-0.77,0.44-0.75,1.17,0.03,1.62l15.54,8.97c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													C465.01,1000.24,465,999.52,464.22,999.07z M309.56,907.79l11.24,6.49c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.76-0.44,0.75-1.17-0.03-1.62l-11.24-6.49c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C308.77,906.62,308.78,907.34,309.56,907.79z M299.07,913.85l14.29,8.25c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-14.29-8.25c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C298.27,912.68,298.29,913.4,299.07,913.85z M312.83,933.98l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C312.04,932.8,312.05,933.53,312.83,933.98z M324.07,940.46l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6,3.47
													C323.28,939.29,323.29,940.01,324.07,940.46z M341.37,950.45c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6,3.47c-0.77,0.44-0.76,1.17,0.03,1.62
													L341.37,950.45z M346.44,953.38l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62
													l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47C345.65,952.2,345.66,952.93,346.44,953.38z M357.62,959.84
													l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47C356.83,958.66,356.84,959.39,357.62,959.84z M368.8,966.29l6.12,3.53
													c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02
													l-6.01,3.47C368.01,965.12,368.02,965.84,368.8,966.29z M388.91,976.3l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62
													l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
													C386.89,976.73,388.14,976.74,388.91,976.3z M391.17,979.21l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6-3.47
													c0.77-0.44,0.76-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C390.38,978.03,390.39,978.76,391.17,979.21z M411.28,989.21l6-3.47c0.77-0.44,0.76-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
													C409.26,989.65,410.51,989.65,411.28,989.21z M422.46,995.67l6-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
													C420.44,996.1,421.69,996.11,422.46,995.67z M408.62,991.87l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.43,3.71
													c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.43-3.71
													C409.41,993.05,409.4,992.32,408.62,991.87z M312.67,936.47l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.43,3.71
													c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.43-3.71
													C313.46,937.65,313.45,936.92,312.67,936.47z M301.73,930.16l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.43,3.71
													c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.43-3.71
													C302.52,931.33,302.51,930.61,301.73,930.16z M290.65,923.76l-4.38-2.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.43,3.71
													c-0.77,0.44-0.75,1.17,0.03,1.62l4.38,2.53c0.78,0.45,2.03,0.46,2.8,0.02l6.43-3.71
													C291.44,924.94,291.43,924.21,290.65,923.76z M328.72,945.74l-11.29-6.52c-0.78-0.45-2.03-0.46-2.8-0.02l-6.43,3.72
													c-0.77,0.44-0.76,1.17,0.03,1.62l11.29,6.52c0.78,0.45,2.03,0.46,2.8,0.01l6.43-3.71
													C329.52,946.92,329.5,946.19,328.72,945.74z M397.59,985.5l-11.89-6.87c-0.78-0.45-2.03-0.46-2.8-0.01l-6.43,3.71
													c-0.77,0.44-0.75,1.17,0.03,1.62l11.89,6.87c0.78,0.45,2.03,0.46,2.8,0.02l6.43-3.71
													C398.38,986.68,398.37,985.95,397.59,985.5z M380.63,975.71l-47.08-27.18c-0.78-0.45-2.03-0.46-2.8-0.01l-6.43,3.71
													c-0.77,0.44-0.75,1.17,0.03,1.62l47.08,27.18c0.78,0.45,2.03,0.46,2.8,0.02l6.43-3.71
													C381.42,976.89,381.41,976.16,380.63,975.71z M453.67,1005.15l-20.78-12c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													c-0.77,0.44-0.75,1.17,0.03,1.62l20.78,11.99c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													C454.47,1006.33,454.45,1005.61,453.67,1005.15z M288.52,919.94l19.3,11.14c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-19.3-11.14c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C287.73,918.77,287.74,919.49,288.52,919.94z M337.25,923.78l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C336.46,922.6,336.47,923.33,337.25,923.78z M348.41,930.22l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6,3.47
													C347.62,929.05,347.63,929.77,348.41,930.22z M359.57,936.66l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6-3.47
													c0.77-0.44,0.76-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C358.78,935.49,358.79,936.21,359.57,936.66z M370.73,943.11l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6,3.47
													C369.94,941.93,369.95,942.66,370.73,943.11z M388.01,953.08c0.78,0.45,2.03,0.46,2.8,0.02l6-3.47
													c0.77-0.44,0.76-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62
													L388.01,953.08z M399.16,959.52c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47c0.77-0.44,0.75-1.16-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.02l-6,3.47c-0.77,0.44-0.75,1.17,0.03,1.62L399.16,959.52z M413.12,965.98l6-3.47
													c0.77-0.44,0.76-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62
													l6.12,3.53C411.1,966.42,412.36,966.42,413.12,965.98z M421.48,972.41c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6,3.47c-0.77,0.44-0.75,1.17,0.03,1.62
													L421.48,972.41z M435.44,978.87l6-3.47c0.77-0.44,0.76-1.16-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02
													l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53C433.42,979.3,434.68,979.31,435.44,978.87z M446.6,985.31
													l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53C444.58,985.74,445.83,985.75,446.6,985.31z M454.82,983.12l-6.01,3.47
													c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6-3.47c0.77-0.44,0.76-1.17-0.03-1.62
													l-6.12-3.53C456.84,982.68,455.59,982.68,454.82,983.12z M474.72,993.01l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01
													l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													C475.51,994.18,475.5,993.46,474.72,993.01z M342.66,914.53l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6-3.47
													c0.77-0.44,0.76-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C341.87,913.36,341.88,914.08,342.66,914.53z M353.86,920.99l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C353.06,919.82,353.08,920.54,353.86,920.99z M365.05,927.46l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C364.26,926.28,364.27,927.01,365.05,927.46z M376.24,933.92l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C375.45,932.74,375.46,933.47,376.24,933.92z M387.44,940.38l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C386.65,939.21,386.66,939.93,387.44,940.38z M398.63,946.84l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6,3.47
													C397.84,945.67,397.85,946.39,398.63,946.84z M409.82,953.31l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C409.03,952.13,409.04,952.86,409.82,953.31z M421.02,959.77l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.76-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C420.23,958.6,420.24,959.32,421.02,959.77z M432.21,966.23l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C431.42,965.06,431.43,965.78,432.21,966.23z M443.41,972.69l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C442.61,971.52,442.63,972.24,443.41,972.69z M454.6,979.16l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C453.81,977.98,453.82,978.71,454.6,979.16z M485.43,986.82l-11.57-6.68c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													c-0.77,0.44-0.75,1.17,0.03,1.62l11.57,6.68c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													C486.22,987.99,486.21,987.27,485.43,986.82z M331.04,895.48l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.02l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.02l-2.5,1.44
													C330.25,894.31,330.26,895.03,331.04,895.48z M342.19,901.91l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.01l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.01l-2.5,1.44
													C341.4,900.74,341.41,901.46,342.19,901.91z M353.37,908.37l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.02l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.01l-2.5,1.44
													C352.57,907.19,352.59,907.92,353.37,908.37z M364.96,915.06l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.01l2.5-1.44
													c0.77-0.44,0.75-1.16-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.01l-2.5,1.44
													C364.16,913.88,364.18,914.61,364.96,915.06z M376.45,921.7l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.01l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.01l-2.5,1.44
													C375.66,920.52,375.67,921.25,376.45,921.7z M387.73,928.21l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.02l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.02l-2.5,1.44
													C386.94,927.03,386.95,927.76,387.73,928.21z M398.92,934.67l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.02l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.02l-2.5,1.44
													C398.13,933.49,398.14,934.22,398.92,934.67z M410.13,941.14l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.02l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.02l-2.5,1.44
													C409.33,939.96,409.35,940.69,410.13,941.14z M421.39,947.64l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.02l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.02l-2.5,1.44
													C420.6,946.47,420.61,947.19,421.39,947.64z M432.87,954.27l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.02l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.02l-2.5,1.44
													C432.07,953.09,432.08,953.82,432.87,954.27z M444.47,960.97l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.02l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.02l-2.5,1.44
													C443.68,959.79,443.69,960.51,444.47,960.97z M455.87,967.61l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.02l2.5-1.44
													c0.77-0.44,0.76-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.02l-2.5,1.44
													C455.08,966.44,455.09,967.16,455.87,967.61z"
                      />
                      <path
                        className={styles.st108}
                        d="M492.73,982.7l-7.52-4.34c-0.78-0.45-2.03-0.46-2.8-0.02l-2.5,1.44
													c-0.77,0.44-0.75,1.17,0.03,1.62l7.52,4.34c0.78,0.45,2.03,0.46,2.8,0.02l2.5-1.44
													C493.52,983.87,493.51,983.15,492.73,982.7z M467.38,974.15l7.52,4.34c0.78,0.45,2.03,0.46,2.8,0.01l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-7.52-4.34c-0.78-0.45-2.03-0.46-2.8-0.02l-2.5,1.44
													C466.59,972.98,466.6,973.7,467.38,974.15z M320.28,901.56l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C319.48,900.39,319.49,901.11,320.28,901.56z M435.49,1013.99l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-1.14,0.66
													c-0.77,0.44-0.75,1.16,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l1.14-0.66
													C436.29,1015.17,436.27,1014.44,435.49,1013.99z M414.06,1001.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-1.14,0.66
													c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l1.14-0.66
													C414.86,1002.79,414.84,1002.07,414.06,1001.62z M424.78,1007.81l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-1.14,0.66
													c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l1.14-0.66
													C425.57,1008.98,425.56,1008.26,424.78,1007.81z M430.56,1004.47l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-1.52,0.87
													c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l1.52-0.88
													C431.36,1005.64,431.34,1004.92,430.56,1004.47z M331.47,908.02l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C330.68,906.85,330.69,907.57,331.47,908.02z M335.01,920.84l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.02l-6,3.47c-0.77,0.44-0.76,1.17,0.03,1.62l6.12,3.53
													C332.99,921.27,334.24,921.28,335.01,920.84z M318.63,925.1l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C317.84,923.93,317.85,924.65,318.63,925.1z M338.46,934.95l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
													C336.44,935.39,337.7,935.39,338.46,934.95z M349.38,941.25l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
													C347.36,941.69,348.61,941.7,349.38,941.25z M351.38,944.01l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C350.59,942.83,350.6,943.56,351.38,944.01z M371.21,953.86l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
													C369.19,954.29,370.45,954.3,371.21,953.86z M382.18,960.19l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
													C380.16,960.63,381.42,960.64,382.18,960.19z M393.32,966.62l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
													C391.3,967.06,392.55,967.06,393.32,966.62z M395.64,969.56l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.16-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6,3.47
													C394.85,968.39,394.86,969.11,395.64,969.56z M415.48,979.42l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
													C413.46,979.85,414.71,979.86,415.48,979.42z M417.75,982.33l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C416.96,981.15,416.97,981.88,417.75,982.33z M428.66,988.63l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C427.87,987.46,427.88,988.18,428.66,988.63z M464.22,999.02l-15.54-8.97c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													c-0.77,0.44-0.75,1.17,0.03,1.62l15.54,8.97c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													C465.01,1000.2,465,999.47,464.22,999.02z M309.56,907.75l11.24,6.49c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.76-0.44,0.75-1.17-0.03-1.62l-11.24-6.49c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C308.77,906.57,308.78,907.3,309.56,907.75z M299.07,913.81l14.29,8.25c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-14.29-8.25c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C298.27,912.63,298.29,913.36,299.07,913.81z M312.83,933.93l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C312.04,932.76,312.05,933.48,312.83,933.93z M324.07,940.42l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6,3.47
													C323.28,939.25,323.29,939.97,324.07,940.42z M341.37,950.41c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6,3.47c-0.77,0.44-0.76,1.17,0.03,1.62
													L341.37,950.41z M346.44,953.33l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62
													l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47C345.65,952.16,345.66,952.88,346.44,953.33z M357.62,959.79
													l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47C356.83,958.62,356.84,959.34,357.62,959.79z M368.8,966.25l6.12,3.53
													c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02
													l-6.01,3.47C368.01,965.07,368.02,965.8,368.8,966.25z M388.91,976.25l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62
													l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
													C386.89,976.69,388.14,976.7,388.91,976.25z M391.17,979.16l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6-3.47
													c0.77-0.44,0.76-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C390.38,977.99,390.39,978.71,391.17,979.16z M411.28,989.17l6-3.47c0.77-0.44,0.76-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
													C409.26,989.6,410.51,989.61,411.28,989.17z M422.46,995.62l6-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
													C420.44,996.06,421.69,996.07,422.46,995.62z M408.62,991.83l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.43,3.71
													c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.43-3.71
													C409.41,993,409.4,992.28,408.62,991.83z M312.67,936.43l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.43,3.71
													c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.43-3.71
													C313.46,937.6,313.45,936.88,312.67,936.43z M301.73,930.11l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.43,3.71
													c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.43-3.71
													C302.52,931.29,302.51,930.56,301.73,930.11z M290.65,923.72l-4.38-2.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.43,3.71
													c-0.77,0.44-0.75,1.17,0.03,1.62l4.38,2.53c0.78,0.45,2.03,0.46,2.8,0.02l6.43-3.71
													C291.44,924.89,291.43,924.17,290.65,923.72z M328.72,945.7l-11.29-6.52c-0.78-0.45-2.03-0.46-2.8-0.02l-6.43,3.72
													c-0.77,0.44-0.76,1.17,0.03,1.62l11.29,6.52c0.78,0.45,2.03,0.46,2.8,0.01l6.43-3.71
													C329.52,946.87,329.5,946.15,328.72,945.7z M397.59,985.46l-11.89-6.87c-0.78-0.45-2.03-0.46-2.8-0.01l-6.43,3.71
													c-0.77,0.44-0.75,1.17,0.03,1.62l11.89,6.87c0.78,0.45,2.03,0.46,2.8,0.02l6.43-3.71
													C398.38,986.63,398.37,985.91,397.59,985.46z M380.63,975.67l-47.08-27.18c-0.78-0.45-2.03-0.46-2.8-0.01l-6.43,3.71
													c-0.77,0.44-0.75,1.17,0.03,1.62l47.08,27.18c0.78,0.45,2.03,0.46,2.8,0.02l6.43-3.71
													C381.42,976.84,381.41,976.12,380.63,975.67z M453.67,1005.11l-20.78-12c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													c-0.77,0.44-0.75,1.17,0.03,1.62l20.78,11.99c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													C454.47,1006.28,454.45,1005.56,453.67,1005.11z M288.52,919.9l19.3,11.14c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-19.3-11.14c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C287.73,918.72,287.74,919.45,288.52,919.9z M337.25,923.73l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C336.46,922.56,336.47,923.28,337.25,923.73z M348.41,930.18l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6,3.47
													C347.62,929,347.63,929.73,348.41,930.18z M359.57,936.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6-3.47
													c0.77-0.44,0.76-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C358.78,935.44,358.79,936.17,359.57,936.62z M370.73,943.06l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6,3.47
													C369.94,941.89,369.95,942.61,370.73,943.06z M388.01,953.04c0.78,0.45,2.03,0.46,2.8,0.02l6-3.47
													c0.77-0.44,0.76-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62
													L388.01,953.04z M399.16,959.48c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47c0.77-0.44,0.75-1.16-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.02l-6,3.47c-0.77,0.44-0.75,1.17,0.03,1.62L399.16,959.48z M413.12,965.94l6-3.47
													c0.77-0.44,0.76-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62
													l6.12,3.53C411.1,966.37,412.36,966.38,413.12,965.94z M421.48,972.37c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6,3.47c-0.77,0.44-0.75,1.17,0.03,1.62
													L421.48,972.37z M435.44,978.82l6-3.47c0.77-0.44,0.76-1.16-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02
													l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53C433.42,979.26,434.68,979.27,435.44,978.82z M446.6,985.27
													l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53C444.58,985.7,445.83,985.71,446.6,985.27z M454.82,983.08l-6.01,3.47
													c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6-3.47c0.77-0.44,0.76-1.17-0.03-1.62
													l-6.12-3.53C456.84,982.64,455.59,982.63,454.82,983.08z M474.72,992.96l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01
													l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													C475.51,994.14,475.5,993.41,474.72,992.96z M342.66,914.49l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6-3.47
													c0.77-0.44,0.76-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C341.87,913.31,341.88,914.04,342.66,914.49z M353.86,920.95l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C353.06,919.77,353.08,920.5,353.86,920.95z M365.05,927.41l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C364.26,926.24,364.27,926.96,365.05,927.41z M376.24,933.87l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C375.45,932.7,375.46,933.42,376.24,933.87z M387.44,940.34l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C386.65,939.16,386.66,939.89,387.44,940.34z M398.63,946.8l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6,3.47
													C397.84,945.63,397.85,946.35,398.63,946.8z M409.82,953.26l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C409.03,952.09,409.04,952.81,409.82,953.26z M421.02,959.73l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.76-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C420.23,958.55,420.24,959.27,421.02,959.73z M432.21,966.19l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C431.42,965.01,431.43,965.74,432.21,966.19z M443.41,972.65l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C442.61,971.48,442.63,972.2,443.41,972.65z M454.6,979.11l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C453.81,977.94,453.82,978.66,454.6,979.11z M485.43,986.78l-11.57-6.68c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													c-0.77,0.44-0.75,1.17,0.03,1.62l11.57,6.68c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													C486.22,987.95,486.21,987.23,485.43,986.78z M331.04,895.44l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.02l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.02l-2.5,1.44
													C330.25,894.26,330.26,894.98,331.04,895.44z M342.19,901.87l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.01l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.01l-2.5,1.44
													C341.4,900.7,341.41,901.42,342.19,901.87z M353.37,908.32l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.02l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.01l-2.5,1.44
													C352.57,907.15,352.59,907.87,353.37,908.32z M364.96,915.01l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.01l2.5-1.44
													c0.77-0.44,0.75-1.16-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.01l-2.5,1.44
													C364.16,913.84,364.18,914.56,364.96,915.01z M376.45,921.65l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.01l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.01l-2.5,1.44
													C375.66,920.48,375.67,921.2,376.45,921.65z M387.73,928.17l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.02l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.02l-2.5,1.44
													C386.94,926.99,386.95,927.71,387.73,928.17z M398.92,934.62l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.02l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.02l-2.5,1.44
													C398.13,933.45,398.14,934.17,398.92,934.62z M410.13,941.09l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.02l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.02l-2.5,1.44
													C409.33,939.92,409.35,940.64,410.13,941.09z M421.39,947.6l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.02l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.02l-2.5,1.44
													C420.6,946.42,420.61,947.14,421.39,947.6z M432.87,954.22l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.02l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.02l-2.5,1.44
													C432.07,953.05,432.08,953.77,432.87,954.22z M444.47,960.92l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.02l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.02l-2.5,1.44
													C443.68,959.75,443.69,960.47,444.47,960.92z M455.87,967.57l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.02l2.5-1.44
													c0.77-0.44,0.76-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.02l-2.5,1.44
													C455.08,966.39,455.09,967.12,455.87,967.57z"
                      />
                      <path
                        className={styles.st109}
                        d="M492.73,982.66l-7.52-4.34c-0.78-0.45-2.03-0.46-2.8-0.02l-2.5,1.44
													c-0.77,0.44-0.75,1.17,0.03,1.62l7.52,4.34c0.78,0.45,2.03,0.46,2.8,0.02l2.5-1.44
													C493.52,983.83,493.51,983.11,492.73,982.66z M467.38,974.11l7.52,4.34c0.78,0.45,2.03,0.46,2.8,0.01l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-7.52-4.34c-0.78-0.45-2.03-0.46-2.8-0.02l-2.5,1.44
													C466.59,972.93,466.6,973.66,467.38,974.11z M320.28,901.52l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C319.48,900.34,319.49,901.07,320.28,901.52z M435.49,1013.95l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-1.14,0.66
													c-0.77,0.44-0.75,1.16,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l1.14-0.66
													C436.29,1015.12,436.27,1014.4,435.49,1013.95z M414.06,1001.58l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-1.14,0.66
													c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l1.14-0.66
													C414.86,1002.75,414.84,1002.03,414.06,1001.58z M424.78,1007.76l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-1.14,0.66
													c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l1.14-0.66
													C425.57,1008.94,425.56,1008.21,424.78,1007.76z M430.56,1004.42l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-1.52,0.87
													c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l1.52-0.88
													C431.36,1005.6,431.34,1004.87,430.56,1004.42z M331.47,907.98l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C330.68,906.81,330.69,907.53,331.47,907.98z M335.01,920.79l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.02l-6,3.47c-0.77,0.44-0.76,1.17,0.03,1.62l6.12,3.53
													C332.99,921.23,334.24,921.24,335.01,920.79z M318.63,925.06l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C317.84,923.88,317.85,924.61,318.63,925.06z M338.46,934.91l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
													C336.44,935.34,337.7,935.35,338.46,934.91z M349.38,941.21l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
													C347.36,941.64,348.61,941.65,349.38,941.21z M351.38,943.96l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C350.59,942.79,350.6,943.51,351.38,943.96z M371.21,953.81l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
													C369.19,954.25,370.45,954.26,371.21,953.81z M382.18,960.15l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
													C380.16,960.58,381.42,960.59,382.18,960.15z M393.32,966.58l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
													C391.3,967.01,392.55,967.02,393.32,966.58z M395.64,969.52l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.16-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6,3.47
													C394.85,968.35,394.86,969.07,395.64,969.52z M415.48,979.37l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
													C413.46,979.81,414.71,979.81,415.48,979.37z M417.75,982.28l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C416.96,981.11,416.97,981.83,417.75,982.28z M428.66,988.59l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C427.87,987.41,427.88,988.13,428.66,988.59z M464.22,998.98L448.68,990c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													c-0.77,0.44-0.75,1.17,0.03,1.62l15.54,8.97c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													C465.01,1000.15,465,999.43,464.22,998.98z M309.56,907.7l11.24,6.49c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.76-0.44,0.75-1.17-0.03-1.62l-11.24-6.49c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C308.77,906.53,308.78,907.25,309.56,907.7z M299.07,913.76l14.29,8.25c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-14.29-8.25c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C298.27,912.59,298.29,913.31,299.07,913.76z M312.83,933.89l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C312.04,932.71,312.05,933.44,312.83,933.89z M324.07,940.38l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6,3.47
													C323.28,939.2,323.29,939.93,324.07,940.38z M341.37,950.37c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6,3.47c-0.77,0.44-0.76,1.17,0.03,1.62
													L341.37,950.37z M346.44,953.29l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62
													l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47C345.65,952.12,345.66,952.84,346.44,953.29z M357.62,959.75
													l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47C356.83,958.57,356.84,959.3,357.62,959.75z M368.8,966.2l6.12,3.53
													c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02
													l-6.01,3.47C368.01,965.03,368.02,965.75,368.8,966.2z M388.91,976.21l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62
													l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
													C386.89,976.64,388.14,976.65,388.91,976.21z M391.17,979.12l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6-3.47
													c0.77-0.44,0.76-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C390.38,977.94,390.39,978.67,391.17,979.12z M411.28,989.12l6-3.47c0.77-0.44,0.76-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
													C409.26,989.56,410.51,989.57,411.28,989.12z M422.46,995.58l6-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
													C420.44,996.02,421.69,996.02,422.46,995.58z M408.62,991.78l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.43,3.71
													c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.43-3.71
													C409.41,992.96,409.4,992.23,408.62,991.78z M312.67,936.38l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.43,3.71
													c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.43-3.71
													C313.46,937.56,313.45,936.83,312.67,936.38z M301.73,930.07l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.43,3.71
													c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.43-3.71
													C302.52,931.24,302.51,930.52,301.73,930.07z M290.65,923.67l-4.38-2.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.43,3.71
													c-0.77,0.44-0.75,1.17,0.03,1.62l4.38,2.53c0.78,0.45,2.03,0.46,2.8,0.02l6.43-3.71
													C291.44,924.85,291.43,924.12,290.65,923.67z M328.72,945.65l-11.29-6.52c-0.78-0.45-2.03-0.46-2.8-0.02l-6.43,3.72
													c-0.77,0.44-0.76,1.17,0.03,1.62l11.29,6.52c0.78,0.45,2.03,0.46,2.8,0.01l6.43-3.71
													C329.52,946.83,329.5,946.1,328.72,945.65z M397.59,985.41l-11.89-6.87c-0.78-0.45-2.03-0.46-2.8-0.01l-6.43,3.71
													c-0.77,0.44-0.75,1.17,0.03,1.62l11.89,6.87c0.78,0.45,2.03,0.46,2.8,0.02l6.43-3.71
													C398.38,986.59,398.37,985.86,397.59,985.41z M380.63,975.62l-47.08-27.18c-0.78-0.45-2.03-0.46-2.8-0.01l-6.43,3.71
													c-0.77,0.44-0.75,1.17,0.03,1.62l47.08,27.18c0.78,0.45,2.03,0.46,2.8,0.02l6.43-3.71
													C381.42,976.8,381.41,976.07,380.63,975.62z M453.67,1005.07l-20.78-12c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													c-0.77,0.44-0.75,1.17,0.03,1.62l20.78,11.99c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													C454.47,1006.24,454.45,1005.52,453.67,1005.07z M288.52,919.85l19.3,11.14c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-19.3-11.14c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C287.73,918.68,287.74,919.4,288.52,919.85z M337.25,923.69l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C336.46,922.51,336.47,923.24,337.25,923.69z M348.41,930.13l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6,3.47
													C347.62,928.96,347.63,929.68,348.41,930.13z M359.57,936.57l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6-3.47
													c0.77-0.44,0.76-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C358.78,935.4,358.79,936.12,359.57,936.57z M370.73,943.02l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6,3.47
													C369.94,941.84,369.95,942.57,370.73,943.02z M388.01,952.99c0.78,0.45,2.03,0.46,2.8,0.02l6-3.47
													c0.77-0.44,0.76-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62
													L388.01,952.99z M399.16,959.44c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47c0.77-0.44,0.75-1.16-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.02l-6,3.47c-0.77,0.44-0.75,1.17,0.03,1.62L399.16,959.44z M413.12,965.89l6-3.47
													c0.77-0.44,0.76-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62
													l6.12,3.53C411.1,966.33,412.36,966.34,413.12,965.89z M421.48,972.32c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6,3.47c-0.77,0.44-0.75,1.17,0.03,1.62
													L421.48,972.32z M435.44,978.78l6-3.47c0.77-0.44,0.76-1.16-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02
													l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53C433.42,979.21,434.68,979.22,435.44,978.78z M446.6,985.22
													l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53C444.58,985.66,445.83,985.66,446.6,985.22z M454.82,983.03l-6.01,3.47
													c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6-3.47c0.77-0.44,0.76-1.17-0.03-1.62
													l-6.12-3.53C456.84,982.6,455.59,982.59,454.82,983.03z M474.72,992.92l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01
													l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													C475.51,994.09,475.5,993.37,474.72,992.92z M342.66,914.44l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6-3.47
													c0.77-0.44,0.76-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C341.87,913.27,341.88,913.99,342.66,914.44z M353.86,920.9l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C353.06,919.73,353.08,920.45,353.86,920.9z M365.05,927.37l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C364.26,926.19,364.27,926.92,365.05,927.37z M376.24,933.83l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C375.45,932.66,375.46,933.38,376.24,933.83z M387.44,940.29l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C386.65,939.12,386.66,939.84,387.44,940.29z M398.63,946.76l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6,3.47
													C397.84,945.58,397.85,946.3,398.63,946.76z M409.82,953.22l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C409.03,952.04,409.04,952.77,409.82,953.22z M421.02,959.68l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.76-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C420.23,958.51,420.24,959.23,421.02,959.68z M432.21,966.14l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C431.42,964.97,431.43,965.69,432.21,966.14z M443.41,972.61l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C442.61,971.43,442.63,972.16,443.41,972.61z M454.6,979.07l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C453.81,977.89,453.82,978.62,454.6,979.07z M485.43,986.73l-11.57-6.68c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													c-0.77,0.44-0.75,1.17,0.03,1.62l11.57,6.68c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													C486.22,987.91,486.21,987.18,485.43,986.73z M331.04,895.39l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.02l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.02l-2.5,1.44
													C330.25,894.22,330.26,894.94,331.04,895.39z M342.19,901.83l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.01l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.01l-2.5,1.44
													C341.4,900.65,341.41,901.37,342.19,901.83z M353.37,908.28l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.02l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.01l-2.5,1.44
													C352.57,907.1,352.59,907.83,353.37,908.28z M364.96,914.97l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.01l2.5-1.44
													c0.77-0.44,0.75-1.16-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.01l-2.5,1.44
													C364.16,913.8,364.18,914.52,364.96,914.97z M376.45,921.61l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.01l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.01l-2.5,1.44
													C375.66,920.43,375.67,921.16,376.45,921.61z M387.73,928.12l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.02l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.02l-2.5,1.44
													C386.94,926.95,386.95,927.67,387.73,928.12z M398.92,934.58l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.02l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.02l-2.5,1.44
													C398.13,933.4,398.14,934.13,398.92,934.58z M410.13,941.05l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.02l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.02l-2.5,1.44
													C409.33,939.87,409.35,940.6,410.13,941.05z M421.39,947.55l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.02l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.02l-2.5,1.44
													C420.6,946.38,420.61,947.1,421.39,947.55z M432.87,954.18l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.02l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.02l-2.5,1.44
													C432.07,953,432.08,953.73,432.87,954.18z M444.47,960.88l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.02l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.02l-2.5,1.44
													C443.68,959.7,443.69,960.43,444.47,960.88z M455.87,967.52l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.02l2.5-1.44
													c0.77-0.44,0.76-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.02l-2.5,1.44
													C455.08,966.35,455.09,967.07,455.87,967.52z"
                      />
                      <path
                        className={styles.st110}
                        d="M492.73,982.61l-7.52-4.34c-0.78-0.45-2.03-0.46-2.8-0.02l-2.5,1.44
													c-0.77,0.44-0.75,1.17,0.03,1.62l7.52,4.34c0.78,0.45,2.03,0.46,2.8,0.02l2.5-1.44
													C493.52,983.79,493.51,983.06,492.73,982.61z M467.38,974.06l7.52,4.34c0.78,0.45,2.03,0.46,2.8,0.01l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-7.52-4.34c-0.78-0.45-2.03-0.46-2.8-0.02l-2.5,1.44
													C466.59,972.89,466.6,973.61,467.38,974.06z M320.28,901.47l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C319.48,900.3,319.49,901.02,320.28,901.47z M435.49,1013.9l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-1.14,0.66
													c-0.77,0.44-0.75,1.16,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l1.14-0.66
													C436.29,1015.08,436.27,1014.35,435.49,1013.9z M414.06,1001.53l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-1.14,0.66
													c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l1.14-0.66
													C414.86,1002.71,414.84,1001.98,414.06,1001.53z M424.78,1007.72l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-1.14,0.66
													c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l1.14-0.66
													C425.57,1008.89,425.56,1008.17,424.78,1007.72z M430.56,1004.38l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-1.52,0.87
													c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l1.52-0.88
													C431.36,1005.55,431.34,1004.83,430.56,1004.38z M331.47,907.94l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C330.68,906.76,330.69,907.48,331.47,907.94z M335.01,920.75l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.02l-6,3.47c-0.77,0.44-0.76,1.17,0.03,1.62l6.12,3.53
													C332.99,921.19,334.24,921.19,335.01,920.75z M318.63,925.01l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C317.84,923.84,317.85,924.56,318.63,925.01z M338.46,934.86l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
													C336.44,935.3,337.7,935.31,338.46,934.86z M349.38,941.17l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
													C347.36,941.6,348.61,941.61,349.38,941.17z M351.38,943.92l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C350.59,942.75,350.6,943.47,351.38,943.92z M371.21,953.77l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
													C369.19,954.21,370.45,954.21,371.21,953.77z M382.18,960.1l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
													C380.16,960.54,381.42,960.55,382.18,960.1z M393.32,966.53l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
													C391.3,966.97,392.55,966.98,393.32,966.53z M395.64,969.48l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.16-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6,3.47
													C394.85,968.3,394.86,969.03,395.64,969.48z M415.48,979.33l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
													C413.46,979.76,414.71,979.77,415.48,979.33z M417.75,982.24l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C416.96,981.06,416.97,981.79,417.75,982.24z M428.66,988.54l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C427.87,987.37,427.88,988.09,428.66,988.54z M464.22,998.93l-15.54-8.97c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													c-0.77,0.44-0.75,1.17,0.03,1.62l15.54,8.97c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													C465.01,1000.11,465,999.38,464.22,998.93z M309.56,907.66l11.24,6.49c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.76-0.44,0.75-1.17-0.03-1.62l-11.24-6.49c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C308.77,906.48,308.78,907.21,309.56,907.66z M299.07,913.72l14.29,8.25c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-14.29-8.25c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C298.27,912.54,298.29,913.27,299.07,913.72z M312.83,933.84l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C312.04,932.67,312.05,933.39,312.83,933.84z M324.07,940.33l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6,3.47
													C323.28,939.16,323.29,939.88,324.07,940.33z M341.37,950.32c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6,3.47c-0.77,0.44-0.76,1.17,0.03,1.62
													L341.37,950.32z M346.44,953.25l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62
													l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47C345.65,952.07,345.66,952.8,346.44,953.25z M357.62,959.7
													l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47C356.83,958.53,356.84,959.25,357.62,959.7z M368.8,966.16l6.12,3.53
													c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02
													l-6.01,3.47C368.01,964.99,368.02,965.71,368.8,966.16z M388.91,976.17l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62
													l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
													C386.89,976.6,388.14,976.61,388.91,976.17z M391.17,979.07l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6-3.47
													c0.77-0.44,0.76-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C390.38,977.9,390.39,978.62,391.17,979.07z M411.28,989.08l6-3.47c0.77-0.44,0.76-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
													C409.26,989.51,410.51,989.52,411.28,989.08z M422.46,995.54l6-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
													C420.44,995.97,421.69,995.98,422.46,995.54z M408.62,991.74l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.43,3.71
													c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.43-3.71
													C409.41,992.91,409.4,992.19,408.62,991.74z M312.67,936.34l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.43,3.71
													c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.43-3.71
													C313.46,937.51,313.45,936.79,312.67,936.34z M301.73,930.03l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.43,3.71
													c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.43-3.71
													C302.52,931.2,302.51,930.48,301.73,930.03z M290.65,923.63l-4.38-2.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.43,3.71
													c-0.77,0.44-0.75,1.17,0.03,1.62l4.38,2.53c0.78,0.45,2.03,0.46,2.8,0.02l6.43-3.71
													C291.44,924.8,291.43,924.08,290.65,923.63z M328.72,945.61l-11.29-6.52c-0.78-0.45-2.03-0.46-2.8-0.02l-6.43,3.72
													c-0.77,0.44-0.76,1.17,0.03,1.62l11.29,6.52c0.78,0.45,2.03,0.46,2.8,0.01l6.43-3.71
													C329.52,946.78,329.5,946.06,328.72,945.61z M397.59,985.37l-11.89-6.87c-0.78-0.45-2.03-0.46-2.8-0.01l-6.43,3.71
													c-0.77,0.44-0.75,1.17,0.03,1.62l11.89,6.87c0.78,0.45,2.03,0.46,2.8,0.02l6.43-3.71
													C398.38,986.54,398.37,985.82,397.59,985.37z M380.63,975.58l-47.08-27.18c-0.78-0.45-2.03-0.46-2.8-0.01l-6.43,3.71
													c-0.77,0.44-0.75,1.17,0.03,1.62l47.08,27.18c0.78,0.45,2.03,0.46,2.8,0.02l6.43-3.71
													C381.42,976.75,381.41,976.03,380.63,975.58z M453.67,1005.02l-20.78-12c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													c-0.77,0.44-0.75,1.17,0.03,1.62l20.78,11.99c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													C454.47,1006.2,454.45,1005.47,453.67,1005.02z M288.52,919.81l19.3,11.14c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-19.3-11.14c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C287.73,918.63,287.74,919.36,288.52,919.81z M337.25,923.65l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C336.46,922.47,336.47,923.19,337.25,923.65z M348.41,930.09l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6,3.47
													C347.62,928.91,347.63,929.64,348.41,930.09z M359.57,936.53l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6-3.47
													c0.77-0.44,0.76-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C358.78,935.36,358.79,936.08,359.57,936.53z M370.73,942.97l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6,3.47
													C369.94,941.8,369.95,942.52,370.73,942.97z M388.01,952.95c0.78,0.45,2.03,0.46,2.8,0.02l6-3.47
													c0.77-0.44,0.76-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62
													L388.01,952.95z M399.16,959.39c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47c0.77-0.44,0.75-1.16-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.02l-6,3.47c-0.77,0.44-0.75,1.17,0.03,1.62L399.16,959.39z M413.12,965.85l6-3.47
													c0.77-0.44,0.76-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62
													l6.12,3.53C411.1,966.28,412.36,966.29,413.12,965.85z M421.48,972.28c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6,3.47c-0.77,0.44-0.75,1.17,0.03,1.62
													L421.48,972.28z M435.44,978.73l6-3.47c0.77-0.44,0.76-1.16-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02
													l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53C433.42,979.17,434.68,979.18,435.44,978.73z M446.6,985.18
													l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53C444.58,985.61,445.83,985.62,446.6,985.18z M454.82,982.99l-6.01,3.47
													c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6-3.47c0.77-0.44,0.76-1.17-0.03-1.62
													l-6.12-3.53C456.84,982.55,455.59,982.55,454.82,982.99z M474.72,992.87l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01
													l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													C475.51,994.05,475.5,993.32,474.72,992.87z M342.66,914.4l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6-3.47
													c0.77-0.44,0.76-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C341.87,913.22,341.88,913.95,342.66,914.4z M353.86,920.86l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C353.06,919.69,353.08,920.41,353.86,920.86z M365.05,927.32l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C364.26,926.15,364.27,926.87,365.05,927.32z M376.24,933.79l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C375.45,932.61,375.46,933.34,376.24,933.79z M387.44,940.25l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C386.65,939.07,386.66,939.8,387.44,940.25z M398.63,946.71l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6,3.47
													C397.84,945.54,397.85,946.26,398.63,946.71z M409.82,953.17l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C409.03,952,409.04,952.72,409.82,953.17z M421.02,959.64l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.76-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C420.23,958.46,420.24,959.19,421.02,959.64z M432.21,966.1l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C431.42,964.93,431.43,965.65,432.21,966.1z M443.41,972.56l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C442.61,971.39,442.63,972.11,443.41,972.56z M454.6,979.03l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C453.81,977.85,453.82,978.57,454.6,979.03z M485.43,986.69l-11.57-6.68c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													c-0.77,0.44-0.75,1.17,0.03,1.62l11.57,6.68c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													C486.22,987.86,486.21,987.14,485.43,986.69z M331.04,895.35l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.02l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.02l-2.5,1.44
													C330.25,894.17,330.26,894.9,331.04,895.35z M342.19,901.78l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.01l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.01l-2.5,1.44
													C341.4,900.61,341.41,901.33,342.19,901.78z M353.37,908.23l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.02l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.01l-2.5,1.44
													C352.57,907.06,352.59,907.78,353.37,908.23z M364.96,914.93l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.01l2.5-1.44
													c0.77-0.44,0.75-1.16-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.01l-2.5,1.44
													C364.16,913.75,364.18,914.48,364.96,914.93z M376.45,921.56l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.01l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.01l-2.5,1.44
													C375.66,920.39,375.67,921.11,376.45,921.56z M387.73,928.08l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.02l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.02l-2.5,1.44
													C386.94,926.9,386.95,927.63,387.73,928.08z M398.92,934.54l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.02l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.02l-2.5,1.44
													C398.13,933.36,398.14,934.08,398.92,934.54z M410.13,941l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.02l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.02l-2.5,1.44
													C409.33,939.83,409.35,940.55,410.13,941z M421.39,947.51l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.02l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.02l-2.5,1.44
													C420.6,946.33,420.61,947.06,421.39,947.51z M432.87,954.13l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.02l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.02l-2.5,1.44
													C432.07,952.96,432.08,953.68,432.87,954.13z M444.47,960.83l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.02l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.02l-2.5,1.44
													C443.68,959.66,443.69,960.38,444.47,960.83z M455.87,967.48l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.02l2.5-1.44
													c0.77-0.44,0.76-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.02l-2.5,1.44
													C455.08,966.3,455.09,967.03,455.87,967.48z"
                      />
                      <path
                        className={styles.st111}
                        d="M492.73,982.57l-7.52-4.34c-0.78-0.45-2.03-0.46-2.8-0.02l-2.5,1.44
													c-0.77,0.44-0.75,1.17,0.03,1.62l7.52,4.34c0.78,0.45,2.03,0.46,2.8,0.02l2.5-1.44
													C493.52,983.74,493.51,983.02,492.73,982.57z M467.38,974.02l7.52,4.34c0.78,0.45,2.03,0.46,2.8,0.01l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-7.52-4.34c-0.78-0.45-2.03-0.46-2.8-0.02l-2.5,1.44
													C466.59,972.84,466.6,973.57,467.38,974.02z M320.28,901.43l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C319.48,900.25,319.49,900.98,320.28,901.43z M435.49,1013.86l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-1.14,0.66
													c-0.77,0.44-0.75,1.16,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l1.14-0.66
													C436.29,1015.03,436.27,1014.31,435.49,1013.86z M414.06,1001.49l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02L404,998.6
													c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l1.14-0.66
													C414.86,1002.66,414.84,1001.94,414.06,1001.49z M424.78,1007.67l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-1.14,0.66
													c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l1.14-0.66
													C425.57,1008.85,425.56,1008.12,424.78,1007.67z M430.56,1004.33l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-1.52,0.87
													c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l1.52-0.88
													C431.36,1005.51,431.34,1004.78,430.56,1004.33z M331.47,907.89l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C330.68,906.72,330.69,907.44,331.47,907.89z M335.01,920.71l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.02l-6,3.47c-0.77,0.44-0.76,1.17,0.03,1.62l6.12,3.53
													C332.99,921.14,334.24,921.15,335.01,920.71z M318.63,924.97l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C317.84,923.79,317.85,924.52,318.63,924.97z M338.46,934.82l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
													C336.44,935.25,337.7,935.26,338.46,934.82z M349.38,941.12l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
													C347.36,941.56,348.61,941.56,349.38,941.12z M351.38,943.88l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C350.59,942.7,350.6,943.43,351.38,943.88z M371.21,953.73l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
													C369.19,954.16,370.45,954.17,371.21,953.73z M382.18,960.06l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
													C380.16,960.5,381.42,960.5,382.18,960.06z M393.32,966.49l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
													C391.3,966.92,392.55,966.93,393.32,966.49z M395.64,969.43l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.16-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6,3.47
													C394.85,968.26,394.86,968.98,395.64,969.43z M415.48,979.28l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
													C413.46,979.72,414.71,979.73,415.48,979.28z M417.75,982.19l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C416.96,981.02,416.97,981.74,417.75,982.19z M428.66,988.5l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C427.87,987.32,427.88,988.05,428.66,988.5z M464.22,998.89l-15.54-8.97c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													c-0.77,0.44-0.75,1.17,0.03,1.62l15.54,8.97c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													C465.01,1000.06,465,999.34,464.22,998.89z M309.56,907.61l11.24,6.49c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.76-0.44,0.75-1.17-0.03-1.62l-11.24-6.49c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C308.77,906.44,308.78,907.16,309.56,907.61z M299.07,913.67l14.29,8.25c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-14.29-8.25c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C298.27,912.5,298.29,913.22,299.07,913.67z M312.83,933.8l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C312.04,932.63,312.05,933.35,312.83,933.8z M324.07,940.29l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6,3.47
													C323.28,939.11,323.29,939.84,324.07,940.29z M341.37,950.28c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6,3.47c-0.77,0.44-0.76,1.17,0.03,1.62
													L341.37,950.28z M346.44,953.2l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62
													l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47C345.65,952.03,345.66,952.75,346.44,953.2z M357.62,959.66
													l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47C356.83,958.48,356.84,959.21,357.62,959.66z M368.8,966.12l6.12,3.53
													c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02
													l-6.01,3.47C368.01,964.94,368.02,965.67,368.8,966.12z M388.91,976.12l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62
													l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
													C386.89,976.56,388.14,976.56,388.91,976.12z M391.17,979.03l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6-3.47
													c0.77-0.44,0.76-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C390.38,977.86,390.39,978.58,391.17,979.03z M411.28,989.04l6-3.47c0.77-0.44,0.76-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
													C409.26,989.47,410.51,989.48,411.28,989.04z M422.46,995.49l6-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
													C420.44,995.93,421.69,995.93,422.46,995.49z M408.62,991.7l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.43,3.71
													c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.43-3.71
													C409.41,992.87,409.4,992.15,408.62,991.7z M312.67,936.3l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.43,3.71
													c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.43-3.71
													C313.46,937.47,313.45,936.75,312.67,936.3z M301.73,929.98l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.43,3.71
													c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.43-3.71
													C302.52,931.16,302.51,930.43,301.73,929.98z M290.65,923.59l-4.38-2.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.43,3.71
													c-0.77,0.44-0.75,1.17,0.03,1.62l4.38,2.53c0.78,0.45,2.03,0.46,2.8,0.02l6.43-3.71
													C291.44,924.76,291.43,924.04,290.65,923.59z M328.72,945.57l-11.29-6.52c-0.78-0.45-2.03-0.46-2.8-0.02l-6.43,3.72
													c-0.77,0.44-0.76,1.17,0.03,1.62l11.29,6.52c0.78,0.45,2.03,0.46,2.8,0.01l6.43-3.71
													C329.52,946.74,329.5,946.02,328.72,945.57z M397.59,985.32l-11.89-6.87c-0.78-0.45-2.03-0.46-2.8-0.01l-6.43,3.71
													c-0.77,0.44-0.75,1.17,0.03,1.62l11.89,6.87c0.78,0.45,2.03,0.46,2.8,0.02l6.43-3.71
													C398.38,986.5,398.37,985.78,397.59,985.32z M380.63,975.54l-47.08-27.18c-0.78-0.45-2.03-0.46-2.8-0.01l-6.43,3.71
													c-0.77,0.44-0.75,1.17,0.03,1.62l47.08,27.18c0.78,0.45,2.03,0.46,2.8,0.02l6.43-3.71
													C381.42,976.71,381.41,975.99,380.63,975.54z M453.67,1004.98l-20.78-12c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													c-0.77,0.44-0.75,1.17,0.03,1.62l20.78,11.99c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													C454.47,1006.15,454.45,1005.43,453.67,1004.98z M288.52,919.76l19.3,11.14c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-19.3-11.14c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C287.73,918.59,287.74,919.31,288.52,919.76z M337.25,923.6l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C336.46,922.43,336.47,923.15,337.25,923.6z M348.41,930.04l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6,3.47
													C347.62,928.87,347.63,929.59,348.41,930.04z M359.57,936.49l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6-3.47
													c0.77-0.44,0.76-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C358.78,935.31,358.79,936.04,359.57,936.49z M370.73,942.93l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6,3.47
													C369.94,941.75,369.95,942.48,370.73,942.93z M388.01,952.9c0.78,0.45,2.03,0.46,2.8,0.02l6-3.47
													c0.77-0.44,0.76-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62
													L388.01,952.9z M399.16,959.35c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47c0.77-0.44,0.75-1.16-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.02l-6,3.47c-0.77,0.44-0.75,1.17,0.03,1.62L399.16,959.35z M413.12,965.81l6-3.47
													c0.77-0.44,0.76-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62
													l6.12,3.53C411.1,966.24,412.36,966.25,413.12,965.81z M421.48,972.23c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6,3.47c-0.77,0.44-0.75,1.17,0.03,1.62
													L421.48,972.23z M435.44,978.69l6-3.47c0.77-0.44,0.76-1.16-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02
													l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53C433.42,979.13,434.68,979.13,435.44,978.69z M446.6,985.13
													l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53C444.58,985.57,445.83,985.58,446.6,985.13z M454.82,982.94l-6.01,3.47
													c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6-3.47c0.77-0.44,0.76-1.17-0.03-1.62
													l-6.12-3.53C456.84,982.51,455.59,982.5,454.82,982.94z M474.72,992.83l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01
													l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													C475.51,994,475.5,993.28,474.72,992.83z M342.66,914.35l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6-3.47
													c0.77-0.44,0.76-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C341.87,913.18,341.88,913.9,342.66,914.35z M353.86,920.82l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C353.06,919.64,353.08,920.37,353.86,920.82z M365.05,927.28l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C364.26,926.11,364.27,926.83,365.05,927.28z M376.24,933.74l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C375.45,932.57,375.46,933.29,376.24,933.74z M387.44,940.2l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C386.65,939.03,386.66,939.75,387.44,940.2z M398.63,946.67l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6,3.47
													C397.84,945.49,397.85,946.22,398.63,946.67z M409.82,953.13l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C409.03,951.96,409.04,952.68,409.82,953.13z M421.02,959.59l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.76-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C420.23,958.42,420.24,959.14,421.02,959.59z M432.21,966.06l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C431.42,964.88,431.43,965.61,432.21,966.06z M443.41,972.52l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C442.61,971.34,442.63,972.07,443.41,972.52z M454.6,978.98l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C453.81,977.81,453.82,978.53,454.6,978.98z M485.43,986.64l-11.57-6.68c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													c-0.77,0.44-0.75,1.17,0.03,1.62l11.57,6.68c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													C486.22,987.82,486.21,987.09,485.43,986.64z M331.04,895.3l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.02l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.02l-2.5,1.44
													C330.25,894.13,330.26,894.85,331.04,895.3z M342.19,901.74l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.01l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.01l-2.5,1.44
													C341.4,900.56,341.41,901.29,342.19,901.74z M353.37,908.19l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.02l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.01l-2.5,1.44
													C352.57,907.02,352.59,907.74,353.37,908.19z M364.96,914.88l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.01l2.5-1.44
													c0.77-0.44,0.75-1.16-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.01l-2.5,1.44
													C364.16,913.71,364.18,914.43,364.96,914.88z M376.45,921.52l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.01l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.01l-2.5,1.44
													C375.66,920.35,375.67,921.07,376.45,921.52z M387.73,928.03l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.02l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.02l-2.5,1.44
													C386.94,926.86,386.95,927.58,387.73,928.03z M398.92,934.49l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.02l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.02l-2.5,1.44
													C398.13,933.32,398.14,934.04,398.92,934.49z M410.13,940.96l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.02l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.02l-2.5,1.44
													C409.33,939.79,409.35,940.51,410.13,940.96z M421.39,947.46l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.02l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.02l-2.5,1.44
													C420.6,946.29,420.61,947.01,421.39,947.46z M432.87,954.09l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.02l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.02l-2.5,1.44
													C432.07,952.91,432.08,953.64,432.87,954.09z M444.47,960.79l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.02l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.02l-2.5,1.44
													C443.68,959.61,443.69,960.34,444.47,960.79z M455.87,967.43l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.02l2.5-1.44
													c0.77-0.44,0.76-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.02l-2.5,1.44
													C455.08,966.26,455.09,966.98,455.87,967.43z"
                      />
                      <path
                        className={styles.st112}
                        d="M492.73,982.52l-7.52-4.34c-0.78-0.45-2.03-0.46-2.8-0.02l-2.5,1.44
													c-0.77,0.44-0.75,1.17,0.03,1.62l7.52,4.34c0.78,0.45,2.03,0.46,2.8,0.02l2.5-1.44
													C493.52,983.7,493.51,982.97,492.73,982.52z M467.38,973.98l7.52,4.34c0.78,0.45,2.03,0.46,2.8,0.01l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-7.52-4.34c-0.78-0.45-2.03-0.46-2.8-0.02l-2.5,1.44
													C466.59,972.8,466.6,973.52,467.38,973.98z M320.28,901.38l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C319.48,900.21,319.49,900.93,320.28,901.38z M435.49,1013.82l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-1.14,0.66
													c-0.77,0.44-0.75,1.16,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l1.14-0.66
													C436.29,1014.99,436.27,1014.27,435.49,1013.82z M414.06,1001.44l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-1.14,0.66
													c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l1.14-0.66
													C414.86,1002.62,414.84,1001.89,414.06,1001.44z M424.78,1007.63l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-1.14,0.66
													c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l1.14-0.66
													C425.57,1008.8,425.56,1008.08,424.78,1007.63z M430.56,1004.29l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-1.52,0.87
													c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l1.52-0.88
													C431.36,1005.46,431.34,1004.74,430.56,1004.29z M331.47,907.85l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C330.68,906.67,330.69,907.4,331.47,907.85z M335.01,920.66l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.02l-6,3.47c-0.77,0.44-0.76,1.17,0.03,1.62l6.12,3.53
													C332.99,921.1,334.24,921.1,335.01,920.66z M318.63,924.92l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C317.84,923.75,317.85,924.47,318.63,924.92z M338.46,934.77l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
													C336.44,935.21,337.7,935.22,338.46,934.77z M349.38,941.08l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
													C347.36,941.51,348.61,941.52,349.38,941.08z M351.38,943.83l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C350.59,942.66,350.6,943.38,351.38,943.83z M371.21,953.68l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
													C369.19,954.12,370.45,954.12,371.21,953.68z M382.18,960.02l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
													C380.16,960.45,381.42,960.46,382.18,960.02z M393.32,966.45l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
													C391.3,966.88,392.55,966.89,393.32,966.45z M395.64,969.39l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.16-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6,3.47
													C394.85,968.21,394.86,968.94,395.64,969.39z M415.48,979.24l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
													C413.46,979.67,414.71,979.68,415.48,979.24z M417.75,982.15l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C416.96,980.98,416.97,981.7,417.75,982.15z M428.66,988.45l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C427.87,987.28,427.88,988,428.66,988.45z M464.22,998.84l-15.54-8.97c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													c-0.77,0.44-0.75,1.17,0.03,1.62l15.54,8.97c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													C465.01,1000.02,465,999.29,464.22,998.84z M309.56,907.57l11.24,6.49c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.76-0.44,0.75-1.17-0.03-1.62l-11.24-6.49c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C308.77,906.4,308.78,907.12,309.56,907.57z M299.07,913.63l14.29,8.25c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-14.29-8.25c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C298.27,912.46,298.29,913.18,299.07,913.63z M312.83,933.76l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C312.04,932.58,312.05,933.3,312.83,933.76z M324.07,940.24l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6,3.47
													C323.28,939.07,323.29,939.79,324.07,940.24z M341.37,950.23c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6,3.47c-0.77,0.44-0.76,1.17,0.03,1.62
													L341.37,950.23z M346.44,953.16l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62
													l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47C345.65,951.98,345.66,952.71,346.44,953.16z M357.62,959.61
													l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47C356.83,958.44,356.84,959.16,357.62,959.61z M368.8,966.07l6.12,3.53
													c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02
													l-6.01,3.47C368.01,964.9,368.02,965.62,368.8,966.07z M388.91,976.08l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62
													l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
													C386.89,976.51,388.14,976.52,388.91,976.08z M391.17,978.98l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6-3.47
													c0.77-0.44,0.76-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C390.38,977.81,390.39,978.54,391.17,978.98z M411.28,988.99l6-3.47c0.77-0.44,0.76-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
													C409.26,989.43,410.51,989.43,411.28,988.99z M422.46,995.45l6-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
													C420.44,995.88,421.69,995.89,422.46,995.45z M408.62,991.65l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.43,3.71
													c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.43-3.71
													C409.41,992.83,409.4,992.1,408.62,991.65z M312.67,936.25l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.43,3.71
													c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.43-3.71
													C313.46,937.42,313.45,936.7,312.67,936.25z M301.73,929.94l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.43,3.71
													c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.43-3.71
													C302.52,931.11,302.51,930.39,301.73,929.94z M290.65,923.54l-4.38-2.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.43,3.71
													c-0.77,0.44-0.75,1.17,0.03,1.62l4.38,2.53c0.78,0.45,2.03,0.46,2.8,0.02l6.43-3.71
													C291.44,924.72,291.43,923.99,290.65,923.54z M328.72,945.52L317.43,939c-0.78-0.45-2.03-0.46-2.8-0.02l-6.43,3.72
													c-0.77,0.44-0.76,1.17,0.03,1.62l11.29,6.52c0.78,0.45,2.03,0.46,2.8,0.01l6.43-3.71
													C329.52,946.7,329.5,945.97,328.72,945.52z M397.59,985.28l-11.89-6.87c-0.78-0.45-2.03-0.46-2.8-0.01l-6.43,3.71
													c-0.77,0.44-0.75,1.17,0.03,1.62l11.89,6.87c0.78,0.45,2.03,0.46,2.8,0.02l6.43-3.71
													C398.38,986.46,398.37,985.73,397.59,985.28z M380.63,975.49l-47.08-27.18c-0.78-0.45-2.03-0.46-2.8-0.01l-6.43,3.71
													c-0.77,0.44-0.75,1.17,0.03,1.62l47.08,27.18c0.78,0.45,2.03,0.46,2.8,0.02l6.43-3.71
													C381.42,976.67,381.41,975.94,380.63,975.49z M453.67,1004.93l-20.78-12c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													c-0.77,0.44-0.75,1.17,0.03,1.62l20.78,11.99c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													C454.47,1006.11,454.45,1005.38,453.67,1004.93z M288.52,919.72l19.3,11.14c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-19.3-11.14c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C287.73,918.54,287.74,919.27,288.52,919.72z M337.25,923.56l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C336.46,922.38,336.47,923.11,337.25,923.56z M348.41,930l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6,3.47
													C347.62,928.83,347.63,929.55,348.41,930z M359.57,936.44l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6-3.47
													c0.77-0.44,0.76-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C358.78,935.27,358.79,935.99,359.57,936.44z M370.73,942.89l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6,3.47
													C369.94,941.71,369.95,942.43,370.73,942.89z M388.01,952.86c0.78,0.45,2.03,0.46,2.8,0.02l6-3.47
													c0.77-0.44,0.76-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62
													L388.01,952.86z M399.16,959.3c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47c0.77-0.44,0.75-1.16-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.02l-6,3.47c-0.77,0.44-0.75,1.17,0.03,1.62L399.16,959.3z M413.12,965.76l6-3.47
													c0.77-0.44,0.76-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62
													l6.12,3.53C411.1,966.2,412.36,966.2,413.12,965.76z M421.48,972.19c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6,3.47c-0.77,0.44-0.75,1.17,0.03,1.62
													L421.48,972.19z M435.44,978.65l6-3.47c0.77-0.44,0.76-1.16-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02
													l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53C433.42,979.08,434.68,979.09,435.44,978.65z M446.6,985.09
													l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53C444.58,985.52,445.83,985.53,446.6,985.09z M454.82,982.9l-6.01,3.47
													c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6-3.47c0.77-0.44,0.76-1.17-0.03-1.62
													l-6.12-3.53C456.84,982.46,455.59,982.46,454.82,982.9z M474.72,992.79l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01
													l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													C475.51,993.96,475.5,993.23,474.72,992.79z M342.66,914.31l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6-3.47
													c0.77-0.44,0.76-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C341.87,913.14,341.88,913.86,342.66,914.31z M353.86,920.77l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C353.06,919.6,353.08,920.32,353.86,920.77z M365.05,927.23l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C364.26,926.06,364.27,926.78,365.05,927.23z M376.24,933.7l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C375.45,932.52,375.46,933.25,376.24,933.7z M387.44,940.16l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C386.65,938.99,386.66,939.71,387.44,940.16z M398.63,946.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6,3.47
													C397.84,945.45,397.85,946.17,398.63,946.62z M409.82,953.09l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C409.03,951.91,409.04,952.64,409.82,953.09z M421.02,959.55l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.76-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C420.23,958.37,420.24,959.1,421.02,959.55z M432.21,966.01l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C431.42,964.84,431.43,965.56,432.21,966.01z M443.41,972.47l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C442.61,971.3,442.63,972.02,443.41,972.47z M454.6,978.94l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C453.81,977.76,453.82,978.48,454.6,978.94z M485.43,986.6l-11.57-6.68c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													c-0.77,0.44-0.75,1.17,0.03,1.62l11.57,6.68c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													C486.22,987.77,486.21,987.05,485.43,986.6z M331.04,895.26l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.02l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.02l-2.5,1.44
													C330.25,894.08,330.26,894.81,331.04,895.26z M342.19,901.69l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.01l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.01l-2.5,1.44
													C341.4,900.52,341.41,901.24,342.19,901.69z M353.37,908.15l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.02l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.01l-2.5,1.44
													C352.57,906.97,352.59,907.7,353.37,908.15z M364.96,914.84l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.01l2.5-1.44
													c0.77-0.44,0.75-1.16-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.01l-2.5,1.44
													C364.16,913.66,364.18,914.39,364.96,914.84z M376.45,921.48l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.01l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.01l-2.5,1.44
													C375.66,920.3,375.67,921.03,376.45,921.48z M387.73,927.99l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.02l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.02l-2.5,1.44
													C386.94,926.81,386.95,927.54,387.73,927.99z M398.92,934.45l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.02l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.02l-2.5,1.44
													C398.13,933.27,398.14,934,398.92,934.45z M410.13,940.92l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.02l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.02l-2.5,1.44
													C409.33,939.74,409.35,940.47,410.13,940.92z M421.39,947.42l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.02l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.02l-2.5,1.44
													C420.6,946.24,420.61,946.97,421.39,947.42z M432.87,954.04l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.02l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.02l-2.5,1.44
													C432.07,952.87,432.08,953.59,432.87,954.04z M444.47,960.74l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.02l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.02l-2.5,1.44
													C443.68,959.57,443.69,960.29,444.47,960.74z M455.87,967.39l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.02l2.5-1.44
													c0.77-0.44,0.76-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.02l-2.5,1.44
													C455.08,966.22,455.09,966.94,455.87,967.39z"
                      />
                      <path
                        className={styles.st113}
                        d="M492.73,982.48l-7.52-4.34c-0.78-0.45-2.03-0.46-2.8-0.02l-2.5,1.44
													c-0.77,0.44-0.75,1.17,0.03,1.62l7.52,4.34c0.78,0.45,2.03,0.46,2.8,0.02l2.5-1.44
													C493.52,983.65,493.51,982.93,492.73,982.48z M467.38,973.93l7.52,4.34c0.78,0.45,2.03,0.46,2.8,0.01l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-7.52-4.34c-0.78-0.45-2.03-0.46-2.8-0.02l-2.5,1.44
													C466.59,972.75,466.6,973.48,467.38,973.93z M320.28,901.34l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C319.48,900.16,319.49,900.89,320.28,901.34z M435.49,1013.77l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-1.14,0.66
													c-0.77,0.44-0.75,1.16,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l1.14-0.66
													C436.29,1014.94,436.27,1014.22,435.49,1013.77z M414.06,1001.4l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-1.14,0.66
													c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l1.14-0.66
													C414.86,1002.57,414.84,1001.85,414.06,1001.4z M424.78,1007.58l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-1.14,0.66
													c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l1.14-0.66
													C425.57,1008.76,425.56,1008.03,424.78,1007.58z M430.56,1004.24l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-1.52,0.87
													c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l1.52-0.88
													C431.36,1005.42,431.34,1004.69,430.56,1004.24z M331.47,907.8l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C330.68,906.63,330.69,907.35,331.47,907.8z M335.01,920.62l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.02l-6,3.47c-0.77,0.44-0.76,1.17,0.03,1.62l6.12,3.53
													C332.99,921.05,334.24,921.06,335.01,920.62z M318.63,924.88l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C317.84,923.7,317.85,924.43,318.63,924.88z M338.46,934.73l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
													C336.44,935.16,337.7,935.17,338.46,934.73z M349.38,941.03l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
													C347.36,941.47,348.61,941.47,349.38,941.03z M351.38,943.79l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C350.59,942.61,350.6,943.34,351.38,943.79z M371.21,953.64l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
													C369.19,954.07,370.45,954.08,371.21,953.64z M382.18,959.97l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
													C380.16,960.41,381.42,960.41,382.18,959.97z M393.32,966.4l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
													C391.3,966.83,392.55,966.84,393.32,966.4z M395.64,969.34l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.16-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6,3.47
													C394.85,968.17,394.86,968.89,395.64,969.34z M415.48,979.19l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
													C413.46,979.63,414.71,979.64,415.48,979.19z M417.75,982.1l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C416.96,980.93,416.97,981.65,417.75,982.1z M428.66,988.41l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C427.87,987.23,427.88,987.96,428.66,988.41z M464.22,998.8l-15.54-8.97c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													c-0.77,0.44-0.75,1.17,0.03,1.62l15.54,8.97c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													C465.01,999.97,465,999.25,464.22,998.8z M309.56,907.52l11.24,6.49c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.76-0.44,0.75-1.17-0.03-1.62l-11.24-6.49c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C308.77,906.35,308.78,907.07,309.56,907.52z M299.07,913.58l14.29,8.25c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-14.29-8.25c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C298.27,912.41,298.29,913.13,299.07,913.58z M312.83,933.71l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C312.04,932.54,312.05,933.26,312.83,933.71z M324.07,940.2l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6,3.47
													C323.28,939.02,323.29,939.75,324.07,940.2z M341.37,950.19c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6,3.47c-0.77,0.44-0.76,1.17,0.03,1.62
													L341.37,950.19z M346.44,953.11l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62
													l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47C345.65,951.94,345.66,952.66,346.44,953.11z M357.62,959.57
													l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47C356.83,958.39,356.84,959.12,357.62,959.57z M368.8,966.03l6.12,3.53
													c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02
													l-6.01,3.47C368.01,964.85,368.02,965.58,368.8,966.03z M388.91,976.03l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62
													l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
													C386.89,976.47,388.14,976.47,388.91,976.03z M391.17,978.94l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6-3.47
													c0.77-0.44,0.76-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C390.38,977.77,390.39,978.49,391.17,978.94z M411.28,988.95l6-3.47c0.77-0.44,0.76-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
													C409.26,989.38,410.51,989.39,411.28,988.95z M422.46,995.4l6-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
													C420.44,995.84,421.69,995.84,422.46,995.4z M408.62,991.61l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.43,3.71
													c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.43-3.71
													C409.41,992.78,409.4,992.06,408.62,991.61z M312.67,936.21l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.43,3.71
													c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.43-3.71
													C313.46,937.38,313.45,936.66,312.67,936.21z M301.73,929.89l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.43,3.71
													c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.43-3.71
													C302.52,931.07,302.51,930.34,301.73,929.89z M290.65,923.5l-4.38-2.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.43,3.71
													c-0.77,0.44-0.75,1.17,0.03,1.62l4.38,2.53c0.78,0.45,2.03,0.46,2.8,0.02l6.43-3.71
													C291.44,924.67,291.43,923.95,290.65,923.5z M328.72,945.48l-11.29-6.52c-0.78-0.45-2.03-0.46-2.8-0.02l-6.43,3.72
													c-0.77,0.44-0.76,1.17,0.03,1.62l11.29,6.52c0.78,0.45,2.03,0.46,2.8,0.01l6.43-3.71
													C329.52,946.65,329.5,945.93,328.72,945.48z M397.59,985.23l-11.89-6.87c-0.78-0.45-2.03-0.46-2.8-0.01l-6.43,3.71
													c-0.77,0.44-0.75,1.17,0.03,1.62l11.89,6.87c0.78,0.45,2.03,0.46,2.8,0.02l6.43-3.71
													C398.38,986.41,398.37,985.69,397.59,985.23z M380.63,975.45l-47.08-27.18c-0.78-0.45-2.03-0.46-2.8-0.01l-6.43,3.71
													c-0.77,0.44-0.75,1.17,0.03,1.62l47.08,27.18c0.78,0.45,2.03,0.46,2.8,0.02l6.43-3.71
													C381.42,976.62,381.41,975.9,380.63,975.45z M453.67,1004.89l-20.78-12c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													c-0.77,0.44-0.75,1.17,0.03,1.62l20.78,11.99c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													C454.47,1006.06,454.45,1005.34,453.67,1004.89z M288.52,919.67l19.3,11.14c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-19.3-11.14c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C287.73,918.5,287.74,919.22,288.52,919.67z M337.25,923.51l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C336.46,922.34,336.47,923.06,337.25,923.51z M348.41,929.95l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6,3.47
													C347.62,928.78,347.63,929.5,348.41,929.95z M359.57,936.4l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6-3.47
													c0.77-0.44,0.76-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C358.78,935.22,358.79,935.95,359.57,936.4z M370.73,942.84l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6,3.47
													C369.94,941.66,369.95,942.39,370.73,942.84z M388.01,952.81c0.78,0.45,2.03,0.46,2.8,0.02l6-3.47
													c0.77-0.44,0.76-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62
													L388.01,952.81z M399.16,959.26c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47c0.77-0.44,0.75-1.16-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.02l-6,3.47c-0.77,0.44-0.75,1.17,0.03,1.62L399.16,959.26z M413.12,965.72l6-3.47
													c0.77-0.44,0.76-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62
													l6.12,3.53C411.1,966.15,412.36,966.16,413.12,965.72z M421.48,972.14c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6,3.47c-0.77,0.44-0.75,1.17,0.03,1.62
													L421.48,972.14z M435.44,978.6l6-3.47c0.77-0.44,0.76-1.16-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02
													l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53C433.42,979.04,434.68,979.04,435.44,978.6z M446.6,985.04
													l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53C444.58,985.48,445.83,985.49,446.6,985.04z M454.82,982.85l-6.01,3.47
													c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6-3.47c0.77-0.44,0.76-1.17-0.03-1.62
													l-6.12-3.53C456.84,982.42,455.59,982.41,454.82,982.85z M474.72,992.74l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01
													l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													C475.51,993.91,475.5,993.19,474.72,992.74z M342.66,914.26l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6-3.47
													c0.77-0.44,0.76-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C341.87,913.09,341.88,913.81,342.66,914.26z M353.86,920.73l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C353.06,919.55,353.08,920.28,353.86,920.73z M365.05,927.19l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C364.26,926.02,364.27,926.74,365.05,927.19z M376.24,933.65l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C375.45,932.48,375.46,933.2,376.24,933.65z M387.44,940.11l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C386.65,938.94,386.66,939.66,387.44,940.11z M398.63,946.58l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6,3.47
													C397.84,945.4,397.85,946.13,398.63,946.58z M409.82,953.04l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C409.03,951.87,409.04,952.59,409.82,953.04z M421.02,959.5l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.76-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C420.23,958.33,420.24,959.05,421.02,959.5z M432.21,965.97l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C431.42,964.79,431.43,965.52,432.21,965.97z M443.41,972.43l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C442.61,971.25,442.63,971.98,443.41,972.43z M454.6,978.89l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C453.81,977.72,453.82,978.44,454.6,978.89z M485.43,986.55l-11.57-6.68c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													c-0.77,0.44-0.75,1.17,0.03,1.62l11.57,6.68c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													C486.22,987.73,486.21,987,485.43,986.55z M331.04,895.21l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.02l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.02l-2.5,1.44
													C330.25,894.04,330.26,894.76,331.04,895.21z M342.19,901.65l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.01l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.01l-2.5,1.44
													C341.4,900.47,341.41,901.2,342.19,901.65z M353.37,908.1l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.02l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.01l-2.5,1.44
													C352.57,906.93,352.59,907.65,353.37,908.1z M364.96,914.79l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.01l2.5-1.44
													c0.77-0.44,0.75-1.16-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.01l-2.5,1.44
													C364.16,913.62,364.18,914.34,364.96,914.79z M376.45,921.43l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.01l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.01l-2.5,1.44
													C375.66,920.26,375.67,920.98,376.45,921.43z M387.73,927.94l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.02l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62L393,924.9c-0.78-0.45-2.03-0.46-2.8-0.02l-2.5,1.44
													C386.94,926.77,386.95,927.49,387.73,927.94z M398.92,934.4l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.02l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.02l-2.5,1.44
													C398.13,933.23,398.14,933.95,398.92,934.4z M410.13,940.87l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.02l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.02l-2.5,1.44
													C409.33,939.7,409.35,940.42,410.13,940.87z M421.39,947.37l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.02l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.02l-2.5,1.44
													C420.6,946.2,420.61,946.92,421.39,947.37z M432.87,954l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.02l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.02l-2.5,1.44
													C432.07,952.82,432.08,953.55,432.87,954z M444.47,960.7l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.02l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.02l-2.5,1.44
													C443.68,959.52,443.69,960.25,444.47,960.7z M455.87,967.34l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.02l2.5-1.44
													c0.77-0.44,0.76-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.02l-2.5,1.44
													C455.08,966.17,455.09,966.89,455.87,967.34z"
                      />
                      <path
                        className={styles.st114}
                        d="M492.73,982.43l-7.52-4.34c-0.78-0.45-2.03-0.46-2.8-0.02l-2.5,1.44
													c-0.77,0.44-0.75,1.17,0.03,1.62l7.52,4.34c0.78,0.45,2.03,0.46,2.8,0.02l2.5-1.44
													C493.52,983.61,493.51,982.88,492.73,982.43z M467.38,973.89l7.52,4.34c0.78,0.45,2.03,0.46,2.8,0.01l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-7.52-4.34c-0.78-0.45-2.03-0.46-2.8-0.02l-2.5,1.44
													C466.59,972.71,466.6,973.43,467.38,973.89z M320.28,901.29l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C319.48,900.12,319.49,900.84,320.28,901.29z M435.49,1013.73l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-1.14,0.66
													c-0.77,0.44-0.75,1.16,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l1.14-0.66
													C436.29,1014.9,436.27,1014.18,435.49,1013.73z M414.06,1001.35l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-1.14,0.66
													c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l1.14-0.66
													C414.86,1002.53,414.84,1001.8,414.06,1001.35z M424.78,1007.54l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-1.14,0.66
													c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l1.14-0.66
													C425.57,1008.71,425.56,1007.99,424.78,1007.54z M430.56,1004.2l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-1.52,0.87
													c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l1.52-0.88
													C431.36,1005.37,431.34,1004.65,430.56,1004.2z M331.47,907.76l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C330.68,906.58,330.69,907.31,331.47,907.76z M335.01,920.57l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.02l-6,3.47c-0.77,0.44-0.76,1.17,0.03,1.62l6.12,3.53
													C332.99,921.01,334.24,921.01,335.01,920.57z M318.63,924.83l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C317.84,923.66,317.85,924.38,318.63,924.83z M338.46,934.68l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
													C336.44,935.12,337.7,935.13,338.46,934.68z M349.38,940.99l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
													C347.36,941.42,348.61,941.43,349.38,940.99z M351.38,943.74l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C350.59,942.57,350.6,943.29,351.38,943.74z M371.21,953.59l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
													C369.19,954.03,370.45,954.03,371.21,953.59z M382.18,959.93l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
													C380.16,960.36,381.42,960.37,382.18,959.93z M393.32,966.36l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
													C391.3,966.79,392.55,966.8,393.32,966.36z M395.64,969.3l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.16-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6,3.47
													C394.85,968.12,394.86,968.85,395.64,969.3z M415.48,979.15l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
													C413.46,979.58,414.71,979.59,415.48,979.15z M417.75,982.06l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C416.96,980.89,416.97,981.61,417.75,982.06z M428.66,988.36l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C427.87,987.19,427.88,987.91,428.66,988.36z M464.22,998.75l-15.54-8.97c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													c-0.77,0.44-0.75,1.17,0.03,1.62l15.54,8.97c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													C465.01,999.93,465,999.21,464.22,998.75z M309.56,907.48l11.24,6.49c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.76-0.44,0.75-1.17-0.03-1.62l-11.24-6.49c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C308.77,906.31,308.78,907.03,309.56,907.48z M299.07,913.54l14.29,8.25c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-14.29-8.25c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C298.27,912.37,298.29,913.09,299.07,913.54z M312.83,933.67l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C312.04,932.49,312.05,933.22,312.83,933.67z M324.07,940.15l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6,3.47
													C323.28,938.98,323.29,939.7,324.07,940.15z M341.37,950.14c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6,3.47c-0.77,0.44-0.76,1.17,0.03,1.62
													L341.37,950.14z M346.44,953.07l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62
													l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47C345.65,951.89,345.66,952.62,346.44,953.07z M357.62,959.53
													l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47C356.83,958.35,356.84,959.07,357.62,959.53z M368.8,965.98l6.12,3.53
													c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02
													l-6.01,3.47C368.01,964.81,368.02,965.53,368.8,965.98z M388.91,975.99l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62
													l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
													C386.89,976.42,388.14,976.43,388.91,975.99z M391.17,978.9l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6-3.47
													c0.77-0.44,0.76-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C390.38,977.72,390.39,978.45,391.17,978.9z M411.28,988.9l6-3.47c0.77-0.44,0.76-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
													C409.26,989.34,410.51,989.34,411.28,988.9z M422.46,995.36l6-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
													C420.44,995.79,421.69,995.8,422.46,995.36z M408.62,991.56l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.43,3.71
													c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.43-3.71
													C409.41,992.74,409.4,992.01,408.62,991.56z M312.67,936.16l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.43,3.71
													c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.43-3.71
													C313.46,937.34,313.45,936.61,312.67,936.16z M301.73,929.85l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.43,3.71
													c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.43-3.71
													C302.52,931.02,302.51,930.3,301.73,929.85z M290.65,923.45l-4.38-2.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.43,3.71
													c-0.77,0.44-0.75,1.17,0.03,1.62l4.38,2.53c0.78,0.45,2.03,0.46,2.8,0.02l6.43-3.71
													C291.44,924.63,291.43,923.9,290.65,923.45z M328.72,945.43l-11.29-6.52c-0.78-0.45-2.03-0.46-2.8-0.02l-6.43,3.72
													c-0.77,0.44-0.76,1.17,0.03,1.62l11.29,6.52c0.78,0.45,2.03,0.46,2.8,0.01l6.43-3.71
													C329.52,946.61,329.5,945.88,328.72,945.43z M397.59,985.19l-11.89-6.87c-0.78-0.45-2.03-0.46-2.8-0.01l-6.43,3.71
													c-0.77,0.44-0.75,1.17,0.03,1.62l11.89,6.87c0.78,0.45,2.03,0.46,2.8,0.02l6.43-3.71
													C398.38,986.37,398.37,985.64,397.59,985.19z M380.63,975.4l-47.08-27.18c-0.78-0.45-2.03-0.46-2.8-0.01l-6.43,3.71
													c-0.77,0.44-0.75,1.17,0.03,1.62l47.08,27.18c0.78,0.45,2.03,0.46,2.8,0.02l6.43-3.71
													C381.42,976.58,381.41,975.85,380.63,975.4z M453.67,1004.84l-20.78-12c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													c-0.77,0.44-0.75,1.17,0.03,1.62l20.78,11.99c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													C454.47,1006.02,454.45,1005.29,453.67,1004.84z M288.52,919.63l19.3,11.14c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-19.3-11.14c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C287.73,918.45,287.74,919.18,288.52,919.63z M337.25,923.47l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C336.46,922.29,336.47,923.02,337.25,923.47z M348.41,929.91l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6,3.47
													C347.62,928.74,347.63,929.46,348.41,929.91z M359.57,936.35l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6-3.47
													c0.77-0.44,0.76-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C358.78,935.18,358.79,935.9,359.57,936.35z M370.73,942.8l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6,3.47
													C369.94,941.62,369.95,942.34,370.73,942.8z M388.01,952.77c0.78,0.45,2.03,0.46,2.8,0.02l6-3.47
													c0.77-0.44,0.76-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62
													L388.01,952.77z M399.16,959.21c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47c0.77-0.44,0.75-1.16-0.03-1.62l-6.12-3.53
													c-0.78-0.45-2.03-0.46-2.8-0.02l-6,3.47c-0.77,0.44-0.75,1.17,0.03,1.62L399.16,959.21z M413.12,965.67l6-3.47
													c0.77-0.44,0.76-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62
													l6.12,3.53C411.1,966.11,412.36,966.11,413.12,965.67z M421.48,972.1c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6,3.47c-0.77,0.44-0.75,1.17,0.03,1.62
													L421.48,972.1z M435.44,978.56l6-3.47c0.77-0.44,0.76-1.16-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02
													l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53C433.42,978.99,434.68,979,435.44,978.56z M446.6,985l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62
													l6.12,3.53C444.58,985.43,445.83,985.44,446.6,985z M454.82,982.81l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62
													l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6-3.47c0.77-0.44,0.76-1.17-0.03-1.62l-6.12-3.53
													C456.84,982.37,455.59,982.37,454.82,982.81z M474.72,992.7l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													C475.51,993.87,475.5,993.15,474.72,992.7z M342.66,914.22l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6-3.47
													c0.77-0.44,0.76-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C341.87,913.05,341.88,913.77,342.66,914.22z M353.86,920.68l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C353.06,919.51,353.08,920.23,353.86,920.68z M365.05,927.15l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C364.26,925.97,364.27,926.69,365.05,927.15z M376.24,933.61l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C375.45,932.43,375.46,933.16,376.24,933.61z M387.44,940.07l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C386.65,938.9,386.66,939.62,387.44,940.07z M398.63,946.53l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6,3.47
													C397.84,945.36,397.85,946.08,398.63,946.53z M409.82,953l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C409.03,951.82,409.04,952.55,409.82,953z M421.02,959.46l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.76-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C420.23,958.28,420.24,959.01,421.02,959.46z M432.21,965.92l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C431.42,964.75,431.43,965.47,432.21,965.92z M443.41,972.38l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
													C442.61,971.21,442.63,971.93,443.41,972.38z M454.6,978.85l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													C453.81,977.67,453.82,978.4,454.6,978.85z M485.43,986.51l-11.57-6.68c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
													c-0.77,0.44-0.75,1.17,0.03,1.62l11.57,6.68c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
													C486.22,987.68,486.21,986.96,485.43,986.51z M331.04,895.17l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.02l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.02l-2.5,1.44
													C330.25,893.99,330.26,894.72,331.04,895.17z M342.19,901.6l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.01l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.01l-2.5,1.44
													C341.4,900.43,341.41,901.15,342.19,901.6z M353.37,908.06l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.02l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.01l-2.5,1.44
													C352.57,906.88,352.59,907.61,353.37,908.06z M364.96,914.75l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.01l2.5-1.44
													c0.77-0.44,0.75-1.16-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.01l-2.5,1.44
													C364.16,913.57,364.18,914.3,364.96,914.75z M376.45,921.39l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.01l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.01l-2.5,1.44
													C375.66,920.21,375.67,920.94,376.45,921.39z M387.73,927.9l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.02l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.02l-2.5,1.44
													C386.94,926.72,386.95,927.45,387.73,927.9z M398.92,934.36l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.02l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.02l-2.5,1.44
													C398.13,933.18,398.14,933.91,398.92,934.36z M410.13,940.83l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.02l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.02l-2.5,1.44
													C409.33,939.65,409.35,940.38,410.13,940.83z M421.39,947.33l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.02l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.02l-2.5,1.44
													C420.6,946.15,420.61,946.88,421.39,947.33z M432.87,953.96l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.02l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.02l-2.5,1.44
													C432.07,952.78,432.08,953.5,432.87,953.96z M444.47,960.65l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.02l2.5-1.44
													c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.02l-2.5,1.44
													C443.68,959.48,443.69,960.2,444.47,960.65z M455.87,967.3l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.02l2.5-1.44
													c0.77-0.44,0.76-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.02l-2.5,1.44
													C455.08,966.13,455.09,966.85,455.87,967.3z"
                      />
                    </g>

                    <linearGradient
                      id={styles.SVGID_25_}
                      gradientUnits="userSpaceOnUse"
                      x1="276.4736"
                      y1="475.94"
                      x2="493.3226"
                      y2="475.94"
                      gradientTransform="matrix(1 0 0 -1 0 1430)"
                    >
                      <stop offset="0" stopColor="#2F2A5C" />
                      <stop offset="0.3365" stopColor="#231563" />
                      <stop offset="0.7088" stopColor="#190668" />
                      <stop offset="1" stopColor="#16006A" />
                    </linearGradient>
                    <path
                      className={styles.st115}
                      fill={`url(#${styles.SVGID_25_})`}
                      d="M320.28,901.29l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62
												l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47C319.48,900.12,319.49,900.84,320.28,901.29z M435.49,1013.73
												l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-1.14,0.66c-0.77,0.44-0.75,1.16,0.03,1.62l6.12,3.53
												c0.78,0.45,2.03,0.46,2.8,0.02l1.14-0.66C436.29,1014.9,436.27,1014.18,435.49,1013.73z M414.06,1001.35l-6.12-3.53
												c-0.78-0.45-2.03-0.46-2.8-0.02l-1.14,0.66c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01
												l1.14-0.66C414.86,1002.53,414.84,1001.8,414.06,1001.35z M424.78,1007.54l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02
												l-1.14,0.66c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l1.14-0.66
												C425.57,1008.71,425.56,1007.99,424.78,1007.54z M430.56,1004.2l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-1.52,0.87
												c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l1.52-0.88
												C431.36,1005.37,431.34,1004.65,430.56,1004.2z M331.47,907.76l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
												c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
												C330.68,906.58,330.69,907.31,331.47,907.76z M335.01,920.57l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
												c-0.78-0.45-2.03-0.46-2.8-0.02l-6,3.47c-0.77,0.44-0.76,1.17,0.03,1.62l6.12,3.53
												C332.99,921.01,334.24,921.01,335.01,920.57z M318.63,924.83l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
												c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
												C317.84,923.66,317.85,924.38,318.63,924.83z M338.46,934.68l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
												c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
												C336.44,935.12,337.7,935.13,338.46,934.68z M349.38,940.99l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
												c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
												C347.36,941.42,348.61,941.43,349.38,940.99z M351.38,943.74l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6-3.47
												c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
												C350.59,942.57,350.6,943.29,351.38,943.74z M371.21,953.59l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
												c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
												C369.19,954.03,370.45,954.03,371.21,953.59z M382.18,959.93l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
												c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
												C380.16,960.36,381.42,960.37,382.18,959.93z M393.32,966.36l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
												c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
												C391.3,966.79,392.55,966.8,393.32,966.36z M395.64,969.3l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
												c0.77-0.44,0.75-1.16-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6,3.47
												C394.85,968.12,394.86,968.85,395.64,969.3z M415.48,979.15l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
												c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
												C413.46,979.58,414.71,979.59,415.48,979.15z M417.75,982.06l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6-3.47
												c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
												C416.96,980.89,416.97,981.61,417.75,982.06z M428.66,988.36l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
												c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
												C427.87,987.19,427.88,987.91,428.66,988.36z M464.22,998.75l-15.54-8.97c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
												c-0.77,0.44-0.75,1.17,0.03,1.62l15.54,8.97c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
												C465.01,999.93,465,999.21,464.22,998.75z M309.56,907.48l11.24,6.49c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
												c0.76-0.44,0.75-1.17-0.03-1.62l-11.24-6.49c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
												C308.77,906.31,308.78,907.03,309.56,907.48z M299.07,913.54l14.29,8.25c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
												c0.77-0.44,0.75-1.17-0.03-1.62l-14.29-8.25c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
												C298.27,912.37,298.29,913.09,299.07,913.54z M312.83,933.67l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
												c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
												C312.04,932.49,312.05,933.22,312.83,933.67z M324.07,940.15l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
												c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6,3.47
												C323.28,938.98,323.29,939.7,324.07,940.15z M341.37,950.14c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
												c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6,3.47c-0.77,0.44-0.76,1.17,0.03,1.62
												L341.37,950.14z M346.44,953.07l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62
												l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47C345.65,951.89,345.66,952.62,346.44,953.07z M357.62,959.53
												l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
												c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47C356.83,958.35,356.84,959.07,357.62,959.53z M368.8,965.98l6.12,3.53
												c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02
												l-6.01,3.47C368.01,964.81,368.02,965.53,368.8,965.98z M388.91,975.99l6.01-3.47c0.77-0.44,0.75-1.17-0.03-1.62
												l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
												C386.89,976.42,388.14,976.43,388.91,975.99z M391.17,978.9l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6-3.47
												c0.77-0.44,0.76-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
												C390.38,977.72,390.39,978.45,391.17,978.9z M411.28,988.9l6-3.47c0.77-0.44,0.76-1.17-0.03-1.62l-6.12-3.53
												c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
												C409.26,989.34,410.51,989.34,411.28,988.9z M422.46,995.36l6-3.47c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53
												c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
												C420.44,995.79,421.69,995.8,422.46,995.36z M408.62,991.56l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.43,3.71
												c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.43-3.71
												C409.41,992.74,409.4,992.01,408.62,991.56z M312.67,936.16l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.43,3.71
												c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.43-3.71
												C313.46,937.34,313.45,936.61,312.67,936.16z M301.73,929.85l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.43,3.71
												c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.43-3.71
												C302.52,931.02,302.51,930.3,301.73,929.85z M290.65,923.45l-4.38-2.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.43,3.71
												c-0.77,0.44-0.75,1.17,0.03,1.62l4.38,2.53c0.78,0.45,2.03,0.46,2.8,0.02l6.43-3.71
												C291.44,924.63,291.43,923.9,290.65,923.45z M328.72,945.43l-11.29-6.52c-0.78-0.45-2.03-0.46-2.8-0.02l-6.43,3.72
												c-0.77,0.44-0.76,1.17,0.03,1.62l11.29,6.52c0.78,0.45,2.03,0.46,2.8,0.01l6.43-3.71
												C329.52,946.61,329.5,945.88,328.72,945.43z M397.59,985.19l-11.89-6.87c-0.78-0.45-2.03-0.46-2.8-0.01l-6.43,3.71
												c-0.77,0.44-0.75,1.17,0.03,1.62l11.89,6.87c0.78,0.45,2.03,0.46,2.8,0.02l6.43-3.71
												C398.38,986.37,398.37,985.64,397.59,985.19z M380.63,975.4l-47.08-27.18c-0.78-0.45-2.03-0.46-2.8-0.01l-6.43,3.71
												c-0.77,0.44-0.75,1.17,0.03,1.62l47.08,27.18c0.78,0.45,2.03,0.46,2.8,0.02l6.43-3.71
												C381.42,976.58,381.41,975.85,380.63,975.4z M453.67,1004.84l-20.78-12c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
												c-0.77,0.44-0.75,1.17,0.03,1.62l20.78,11.99c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
												C454.47,1006.02,454.45,1005.29,453.67,1004.84z M288.52,919.63l19.3,11.14c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
												c0.77-0.44,0.75-1.17-0.03-1.62l-19.3-11.14c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
												C287.73,918.45,287.74,919.18,288.52,919.63z M337.25,923.47l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6-3.47
												c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
												C336.46,922.29,336.47,923.02,337.25,923.47z M348.41,929.91l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
												c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6,3.47
												C347.62,928.74,347.63,929.46,348.41,929.91z M359.57,936.35l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6-3.47
												c0.77-0.44,0.76-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
												C358.78,935.18,358.79,935.9,359.57,936.35z M370.73,942.8l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
												c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6,3.47
												C369.94,941.62,369.95,942.34,370.73,942.8z M388.01,952.77c0.78,0.45,2.03,0.46,2.8,0.02l6-3.47
												c0.77-0.44,0.76-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62
												L388.01,952.77z M399.16,959.21c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47c0.77-0.44,0.75-1.16-0.03-1.62l-6.12-3.53
												c-0.78-0.45-2.03-0.46-2.8-0.02l-6,3.47c-0.77,0.44-0.75,1.17,0.03,1.62L399.16,959.21z M413.12,965.67l6-3.47
												c0.77-0.44,0.76-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62
												l6.12,3.53C411.1,966.11,412.36,966.11,413.12,965.67z M421.48,972.1c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
												c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6,3.47c-0.77,0.44-0.75,1.17,0.03,1.62
												L421.48,972.1z M435.44,978.56l6-3.47c0.77-0.44,0.76-1.16-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02
												l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53C433.42,978.99,434.68,979,435.44,978.56z M446.6,985l6.01-3.47
												c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62
												l6.12,3.53C444.58,985.43,445.83,985.44,446.6,985z M454.82,982.81l-6.01,3.47c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53
												c0.78,0.45,2.03,0.46,2.8,0.02l6-3.47c0.77-0.44,0.76-1.17-0.03-1.62l-6.12-3.53
												C456.84,982.37,455.59,982.37,454.82,982.81z M474.72,992.7l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
												c-0.77,0.44-0.75,1.17,0.03,1.62l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
												C475.51,993.87,475.5,993.15,474.72,992.7z M342.66,914.22l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6-3.47
												c0.77-0.44,0.76-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
												C341.87,913.05,341.88,913.77,342.66,914.22z M353.86,920.68l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
												c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
												C353.06,919.51,353.08,920.23,353.86,920.68z M365.05,927.15l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
												c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
												C364.26,925.97,364.27,926.69,365.05,927.15z M376.24,933.61l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
												c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
												C375.45,932.43,375.46,933.16,376.24,933.61z M387.44,940.07l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
												c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
												C386.65,938.9,386.66,939.62,387.44,940.07z M398.63,946.53l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
												c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6,3.47
												C397.84,945.36,397.85,946.08,398.63,946.53z M409.82,953l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
												c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
												C409.03,951.82,409.04,952.55,409.82,953z M421.02,959.46l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
												c0.76-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
												C420.23,958.28,420.24,959.01,421.02,959.46z M432.21,965.92l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.02l6-3.47
												c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
												C431.42,964.75,431.43,965.47,432.21,965.92z M443.41,972.38l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
												c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.02l-6.01,3.47
												C442.61,971.21,442.63,971.93,443.41,972.38z M454.6,978.85l6.12,3.53c0.78,0.45,2.03,0.46,2.8,0.01l6.01-3.47
												c0.77-0.44,0.75-1.17-0.03-1.62l-6.12-3.53c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
												C453.81,977.67,453.82,978.4,454.6,978.85z M485.43,986.51l-11.57-6.68c-0.78-0.45-2.03-0.46-2.8-0.01l-6.01,3.47
												c-0.77,0.44-0.75,1.17,0.03,1.62l11.57,6.68c0.78,0.45,2.03,0.46,2.8,0.02l6.01-3.47
												C486.22,987.68,486.21,986.96,485.43,986.51z M331.04,895.17l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.02l2.5-1.44
												c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.02l-2.5,1.44
												C330.25,893.99,330.26,894.72,331.04,895.17z M342.19,901.6l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.01l2.5-1.44
												c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.01l-2.5,1.44
												C341.4,900.43,341.41,901.15,342.19,901.6z M353.37,908.06l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.02l2.5-1.44
												c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.01l-2.5,1.44
												C352.57,906.88,352.59,907.61,353.37,908.06z M364.96,914.75l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.01l2.5-1.44
												c0.77-0.44,0.75-1.16-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.01l-2.5,1.44
												C364.16,913.57,364.18,914.3,364.96,914.75z M376.45,921.39l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.01l2.5-1.44
												c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.01l-2.5,1.44
												C375.66,920.21,375.67,920.94,376.45,921.39z M387.73,927.9l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.02l2.5-1.44
												c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.02l-2.5,1.44
												C386.94,926.72,386.95,927.45,387.73,927.9z M398.92,934.36l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.02l2.5-1.44
												c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.02l-2.5,1.44
												C398.13,933.18,398.14,933.91,398.92,934.36z M410.13,940.83l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.02l2.5-1.44
												c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.02l-2.5,1.44
												C409.33,939.65,409.35,940.38,410.13,940.83z M421.39,947.33l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.02l2.5-1.44
												c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.02l-2.5,1.44
												C420.6,946.15,420.61,946.88,421.39,947.33z M432.87,953.96l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.02l2.5-1.44
												c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.02l-2.5,1.44
												C432.07,952.78,432.08,953.5,432.87,953.96z M444.47,960.65l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.02l2.5-1.44
												c0.77-0.44,0.75-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.02l-2.5,1.44
												C443.68,959.48,443.69,960.2,444.47,960.65z M455.87,967.3l6.34,3.66c0.78,0.45,2.03,0.46,2.8,0.02l2.5-1.44
												c0.77-0.44,0.76-1.17-0.03-1.62l-6.34-3.66c-0.78-0.45-2.03-0.46-2.8-0.02l-2.5,1.44
												C455.08,966.13,455.09,966.85,455.87,967.3z M467.38,973.89l7.52,4.34c0.78,0.45,2.03,0.46,2.8,0.01l2.5-1.44
												c0.77-0.44,0.75-1.17-0.03-1.62l-7.52-4.34c-0.78-0.45-2.03-0.46-2.8-0.02l-2.5,1.44
												C466.59,972.71,466.6,973.43,467.38,973.89z M492.73,982.43l-7.52-4.34c-0.78-0.45-2.03-0.46-2.8-0.02l-2.5,1.44
												c-0.77,0.44-0.75,1.17,0.03,1.62l7.52,4.34c0.78,0.45,2.03,0.46,2.8,0.02l2.5-1.44
												C493.52,983.61,493.51,982.88,492.73,982.43z"
                    />

                    <linearGradient
                      id={styles.SVGID_26_}
                      gradientUnits="userSpaceOnUse"
                      x1="320.57"
                      y1="499.615"
                      x2="538.27"
                      y2="499.615"
                      gradientTransform="matrix(1 0 0 -1 0 1430)"
                    >
                      <stop offset="0" stopColor="#3940A2" />
                      <stop offset="0.2725" stopColor="#24317F" />
                      <stop offset="0.4141" stopColor="#19225B" />
                      <stop offset="0.5853" stopColor="#0E1437" />
                      <stop offset="0.7454" stopColor="#06091D" />
                      <stop offset="0.8884" stopColor="#02020D" />
                      <stop offset="1" stopColor="#000007" />
                    </linearGradient>
                    <polygon
                      className={styles.st116}
                      fill={`url(#${styles.SVGID_26_})`}
                      points="320.57,876.9 522.06,993.23 538.27,983.87 336.78,867.54 											"
                    />
                    <path
                      className={styles.st1}
                      d="M506.98,975.74c-2.01,1.16-5.29,1.14-7.33-0.04c-2.04-1.18-2.07-3.07-0.07-4.23
												c2.01-1.16,5.29-1.14,7.33,0.04C508.96,972.68,508.99,974.58,506.98,975.74z"
                    />
                    <g>
                      <polygon
                        className={styles.st117}
                        points="358.9,887.52 352.06,883.57 352.99,883.04 359.82,886.98 												"
                      />
                      <polygon
                        className={styles.st117}
                        points="356.57,888.86 349.74,884.92 350.66,884.38 357.49,888.33 												"
                      />
                      <polygon
                        className={styles.st117}
                        points="354.24,890.2 347.41,886.26 348.33,885.73 355.16,889.67 												"
                      />
                    </g>

                    <linearGradient
                      id={styles.SVGID_27_}
                      gradientUnits="userSpaceOnUse"
                      x1="284.8067"
                      y1="444.72"
                      x2="381.0433"
                      y2="444.72"
                      gradientTransform="matrix(1 0 0 -1 0 1430)"
                    >
                      <stop offset="0" stopColor="#394A98" />
                      <stop offset="0.0594" stopColor="#34438A" />
                      <stop offset="0.2808" stopColor="#212B5C" />
                      <stop offset="0.4921" stopColor="#131837" />
                      <stop offset="0.6883" stopColor="#080B1D" />
                      <stop offset="0.8634" stopColor="#02030D" />
                      <stop offset="1" stopColor="#000007" />
                    </linearGradient>
                    <path
                      className={styles.st118}
                      fill={`url(#${styles.SVGID_27_})`}
                      d="M348.03,1012.39l-62.06-35.83c-1.72-0.99-1.51-2.73,0.48-3.88l24.65-14.23
												c1.99-1.15,4.99-1.27,6.71-0.28L379.88,994c1.72,0.99,1.51,2.73-0.48,3.88l-24.65,14.23
												C352.76,1013.26,349.75,1013.38,348.03,1012.39z"
                    />
                    <path
                      className={styles.st119}
                      d="M286.45,973.43l24.65-14.23c1.99-1.15,4.99-1.27,6.71-0.28l62.06,35.83
												c0.62,0.36,0.99,0.82,1.11,1.31c0.18-0.76-0.18-1.52-1.11-2.06l-62.06-35.83c-1.72-0.99-4.73-0.87-6.71,0.28
												l-24.65,14.23c-1.27,0.73-1.81,1.7-1.6,2.56C285.01,974.6,285.54,973.95,286.45,973.43z"
                    />
                  </g>
                </g>
                <g>
                  <polygon
                    className={styles.st91}
                    points="530.69,963.89 343.19,855.64 343.19,725.84 530.69,834.09 										"
                  />
                  <g id={styles.screenLines}>
                    <polygon
                      className={styles.st120}
                      points="530.69,841.82 343.19,733.57 343.19,725.84 530.69,834.09 											"
                    />
                    <polygon
                      className={styles.st1}
                      points="379.97,876.87 379.7,876.72 379.7,754.66 379.97,754.81 											"
                    />
                    <g>
                      <path
                        className={styles.st121}
                        d="M349.36,744.16L349.36,744.16c-0.58-0.33-1.05-1.07-1.05-1.65v-0.37c0-0.58,0.47-0.78,1.05-0.44
													l0,0c0.58,0.33,1.05,1.07,1.05,1.65v0.37C350.4,744.29,349.93,744.49,349.36,744.16z"
                      />
                      <path
                        className={styles.st122}
                        d="M360.32,749.84l-8.65-4.99c-0.25-0.15-0.46-0.47-0.46-0.72v-0.34c0-0.25,0.2-0.34,0.46-0.19
													l8.65,4.99c0.25,0.15,0.46,0.47,0.46,0.72v0.34C360.78,749.9,360.57,749.98,360.32,749.84z"
                      />
                      <path
                        className={styles.st121}
                        d="M349.36,757.97L349.36,757.97c-0.58-0.33-1.05-1.07-1.05-1.65v-0.37c0-0.58,0.47-0.78,1.05-0.44
													l0,0c0.58,0.33,1.05,1.07,1.05,1.65v0.37C350.4,758.11,349.93,758.31,349.36,757.97z"
                      />
                      <path
                        className={styles.st122}
                        d="M360.32,763.65l-8.65-4.99c-0.25-0.15-0.46-0.47-0.46-0.72v-0.34c0-0.25,0.2-0.34,0.46-0.19
													l8.65,4.99c0.25,0.15,0.46,0.47,0.46,0.72v0.34C360.78,763.71,360.57,763.8,360.32,763.65z"
                      />
                      <path
                        className={styles.st121}
                        d="M349.36,775.96L349.36,775.96c-0.58-0.33-1.05-1.07-1.05-1.65v-0.37c0-0.58,0.47-0.78,1.05-0.44
													l0,0c0.58,0.33,1.05,1.07,1.05,1.65v0.37C350.4,776.09,349.93,776.29,349.36,775.96z"
                      />
                      <path
                        className={styles.st122}
                        d="M360.32,781.63l-8.65-5c-0.25-0.14-0.46-0.47-0.46-0.72v-0.34c0-0.25,0.2-0.34,0.46-0.19
													l8.65,4.99c0.25,0.15,0.46,0.47,0.46,0.72v0.34C360.78,781.69,360.57,781.78,360.32,781.63z"
                      />
                      <path
                        className={styles.st121}
                        d="M349.36,780.6L349.36,780.6c-0.58-0.33-1.05-1.07-1.05-1.65v-0.37c0-0.58,0.47-0.78,1.05-0.44
													l0,0c0.58,0.33,1.05,1.07,1.05,1.65v0.37C350.4,780.74,349.93,780.94,349.36,780.6z"
                      />
                      <path
                        className={styles.st122}
                        d="M360.32,786.28l-8.65-4.99c-0.25-0.15-0.46-0.47-0.46-0.72v-0.34c0-0.25,0.2-0.34,0.46-0.19
													l8.65,4.99c0.25,0.15,0.46,0.47,0.46,0.72v0.34C360.78,786.34,360.57,786.43,360.32,786.28z"
                      />
                      <path
                        className={styles.st121}
                        d="M352.26,749.45L352.26,749.45c-0.58-0.33-1.05-1.07-1.05-1.65v-0.37c0-0.58,0.47-0.78,1.05-0.44
													l0,0c0.58,0.33,1.05,1.07,1.05,1.65v0.37C353.31,749.59,352.84,749.79,352.26,749.45z"
                      />
                      <path
                        className={styles.st122}
                        d="M363.22,755.13l-8.65-5c-0.25-0.14-0.46-0.47-0.46-0.72v-0.34c0-0.25,0.2-0.34,0.46-0.19l8.65,5
													c0.25,0.14,0.46,0.47,0.46,0.72v0.34C363.68,755.19,363.48,755.27,363.22,755.13z"
                      />
                      <path
                        className={styles.st121}
                        d="M352.26,753.07L352.26,753.07c-0.58-0.33-1.05-1.07-1.05-1.65v-0.37c0-0.58,0.47-0.78,1.05-0.44
													l0,0c0.58,0.33,1.05,1.07,1.05,1.65v0.37C353.31,753.2,352.84,753.4,352.26,753.07z"
                      />
                      <path
                        className={styles.st122}
                        d="M366.85,760.84l-12.28-7.09c-0.25-0.15-0.46-0.47-0.46-0.72v-0.34c0-0.25,0.2-0.34,0.46-0.19
													l12.28,7.09c0.25,0.15,0.46,0.47,0.46,0.72v0.34C367.31,760.9,367.11,760.99,366.85,760.84z"
                      />
                      <path
                        className={styles.st121}
                        d="M352.26,763.11L352.26,763.11c-0.58-0.33-1.05-1.07-1.05-1.65v-0.37c0-0.58,0.47-0.78,1.05-0.44
													l0,0c0.58,0.33,1.05,1.07,1.05,1.65v0.37C353.31,763.25,352.84,763.45,352.26,763.11z"
                      />
                      <path
                        className={styles.st122}
                        d="M369.71,772.54l-15.14-8.74c-0.25-0.15-0.46-0.47-0.46-0.72v-0.34c0-0.25,0.2-0.34,0.46-0.19
													l15.14,8.74c0.25,0.15,0.46,0.47,0.46,0.72v0.34C370.17,772.6,369.97,772.69,369.71,772.54z"
                      />
                      <path
                        className={styles.st121}
                        d="M352.26,766.73L352.26,766.73c-0.58-0.33-1.05-1.07-1.05-1.65v-0.37c0-0.58,0.47-0.78,1.05-0.44
													l0,0c0.58,0.33,1.05,1.07,1.05,1.65v0.37C353.31,766.87,352.84,767.07,352.26,766.73z"
                      />
                      <path
                        className={styles.st122}
                        d="M364.51,773.15l-9.93-5.73c-0.25-0.14-0.46-0.47-0.46-0.72v-0.34c0-0.25,0.2-0.34,0.46-0.19
													l9.93,5.73c0.25,0.15,0.46,0.47,0.46,0.72v0.34C364.96,773.21,364.76,773.29,364.51,773.15z"
                      />
                      <path
                        className={styles.st121}
                        d="M354.94,771.58L354.94,771.58c-0.46-0.26-0.82-0.85-0.82-1.3v-0.29c0-0.46,0.37-0.61,0.82-0.35
													l0,0c0.46,0.26,0.83,0.85,0.83,1.3v0.29C355.77,771.69,355.4,771.84,354.94,771.58z"
                      />
                      <path
                        className={styles.st122}
                        d="M373.81,781.96l-16.95-9.79c-0.25-0.15-0.46-0.47-0.46-0.72v-0.08c0-0.25,0.21-0.34,0.46-0.19
													l16.95,9.78c0.25,0.15,0.46,0.47,0.46,0.72v0.08C374.27,782.02,374.07,782.1,373.81,781.96z"
                      />
                      <path
                        className={styles.st121}
                        d="M354.94,774.43L354.94,774.43c-0.46-0.26-0.82-0.85-0.82-1.3v-0.29c0-0.46,0.37-0.61,0.82-0.35
													l0,0c0.46,0.26,0.83,0.85,0.83,1.3v0.29C355.77,774.54,355.4,774.7,354.94,774.43z"
                      />
                      <path
                        className={styles.st122}
                        d="M366.85,780.8l-9.99-5.77c-0.25-0.14-0.46-0.47-0.46-0.72v-0.08c0-0.25,0.21-0.34,0.46-0.19
													l9.99,5.77c0.25,0.15,0.46,0.47,0.46,0.72v0.08C367.31,780.85,367.11,780.94,366.85,780.8z"
                      />
                    </g>
                    <g>
                      <path
                        className={styles.st121}
                        d="M349.36,785.8L349.36,785.8c-0.58-0.33-1.05-1.07-1.05-1.65v-0.37c0-0.58,0.47-0.78,1.05-0.44
													l0,0c0.58,0.33,1.05,1.07,1.05,1.65v0.37C350.4,785.94,349.93,786.14,349.36,785.8z"
                      />
                      <path
                        className={styles.st122}
                        d="M360.32,791.48l-8.65-5c-0.25-0.14-0.46-0.47-0.46-0.72v-0.34c0-0.25,0.2-0.34,0.46-0.19l8.65,5
													c0.25,0.14,0.46,0.47,0.46,0.72v0.34C360.78,791.54,360.57,791.62,360.32,791.48z"
                      />
                      <path
                        className={styles.st121}
                        d="M349.36,799.62L349.36,799.62c-0.58-0.33-1.05-1.07-1.05-1.65v-0.37c0-0.58,0.47-0.78,1.05-0.44
													l0,0c0.58,0.33,1.05,1.07,1.05,1.65v0.37C350.4,799.75,349.93,799.95,349.36,799.62z"
                      />
                      <path
                        className={styles.st122}
                        d="M360.32,805.29l-8.65-5c-0.25-0.14-0.46-0.47-0.46-0.72v-0.34c0-0.25,0.2-0.34,0.46-0.19l8.65,5
													c0.25,0.14,0.46,0.47,0.46,0.72v0.34C360.78,805.35,360.57,805.44,360.32,805.29z"
                      />
                      <path
                        className={styles.st121}
                        d="M349.36,817.6L349.36,817.6c-0.58-0.33-1.05-1.07-1.05-1.65v-0.37c0-0.58,0.47-0.78,1.05-0.44
													l0,0c0.58,0.33,1.05,1.07,1.05,1.65v0.37C350.4,817.73,349.93,817.93,349.36,817.6z"
                      />
                      <path
                        className={styles.st122}
                        d="M360.32,823.28l-8.65-4.99c-0.25-0.15-0.46-0.47-0.46-0.72v-0.34c0-0.25,0.2-0.34,0.46-0.19
													l8.65,4.99c0.25,0.15,0.46,0.47,0.46,0.72v0.34C360.78,823.34,360.57,823.42,360.32,823.28z"
                      />
                      <path
                        className={styles.st121}
                        d="M349.36,822.25L349.36,822.25c-0.58-0.33-1.05-1.07-1.05-1.65v-0.37c0-0.58,0.47-0.78,1.05-0.44
													l0,0c0.58,0.33,1.05,1.07,1.05,1.65v0.37C350.4,822.38,349.93,822.58,349.36,822.25z"
                      />
                      <path
                        className={styles.st122}
                        d="M360.32,827.92l-8.65-4.99c-0.25-0.15-0.46-0.47-0.46-0.72v-0.34c0-0.25,0.2-0.34,0.46-0.19
													l8.65,5c0.25,0.14,0.46,0.47,0.46,0.72v0.34C360.78,827.98,360.57,828.07,360.32,827.92z"
                      />
                      <path
                        className={styles.st121}
                        d="M352.26,791.09L352.26,791.09c-0.58-0.33-1.05-1.07-1.05-1.65v-0.37c0-0.58,0.47-0.78,1.05-0.44
													l0,0c0.58,0.33,1.05,1.07,1.05,1.65v0.37C353.31,791.23,352.84,791.43,352.26,791.09z"
                      />
                      <path
                        className={styles.st122}
                        d="M363.22,796.77l-8.65-4.99c-0.25-0.15-0.46-0.47-0.46-0.72v-0.34c0-0.25,0.2-0.34,0.46-0.19
													l8.65,4.99c0.25,0.15,0.46,0.47,0.46,0.72v0.34C363.68,796.83,363.48,796.92,363.22,796.77z"
                      />
                      <path
                        className={styles.st121}
                        d="M352.26,794.71L352.26,794.71c-0.58-0.33-1.05-1.07-1.05-1.65v-0.37c0-0.58,0.47-0.78,1.05-0.44
													l0,0c0.58,0.33,1.05,1.07,1.05,1.65v0.37C353.31,794.85,352.84,795.05,352.26,794.71z"
                      />
                      <path
                        className={styles.st122}
                        d="M366.85,802.48l-12.28-7.09c-0.25-0.15-0.46-0.47-0.46-0.72v-0.34c0-0.25,0.2-0.34,0.46-0.19
													l12.28,7.09c0.25,0.15,0.46,0.47,0.46,0.72v0.34C367.31,802.54,367.11,802.63,366.85,802.48z"
                      />
                      <path
                        className={styles.st121}
                        d="M352.26,804.76L352.26,804.76c-0.58-0.33-1.05-1.07-1.05-1.65v-0.37c0-0.58,0.47-0.77,1.05-0.44
													l0,0c0.58,0.33,1.05,1.07,1.05,1.65v0.37C353.31,804.89,352.84,805.09,352.26,804.76z"
                      />
                      <path
                        className={styles.st122}
                        d="M369.71,814.18l-15.14-8.74c-0.25-0.15-0.46-0.47-0.46-0.72v-0.34c0-0.25,0.2-0.34,0.46-0.19
													l15.14,8.74c0.25,0.15,0.46,0.47,0.46,0.72v0.34C370.17,814.24,369.97,814.33,369.71,814.18z"
                      />
                      <path
                        className={styles.st121}
                        d="M352.26,808.37L352.26,808.37c-0.58-0.33-1.05-1.07-1.05-1.65v-0.37c0-0.58,0.47-0.78,1.05-0.44
													l0,0c0.58,0.33,1.05,1.07,1.05,1.65v0.37C353.31,808.51,352.84,808.71,352.26,808.37z"
                      />
                      <path
                        className={styles.st122}
                        d="M364.51,814.79l-9.93-5.73c-0.25-0.15-0.46-0.47-0.46-0.72V808c0-0.25,0.2-0.34,0.46-0.19
													l9.93,5.73c0.25,0.15,0.46,0.47,0.46,0.72v0.34C364.96,814.85,364.76,814.94,364.51,814.79z"
                      />
                      <path
                        className={styles.st121}
                        d="M354.94,813.22L354.94,813.22c-0.46-0.26-0.82-0.85-0.82-1.3v-0.29c0-0.45,0.37-0.61,0.82-0.35
													l0,0c0.46,0.26,0.83,0.85,0.83,1.3v0.29C355.77,813.33,355.4,813.49,354.94,813.22z"
                      />
                      <path
                        className={styles.st122}
                        d="M373.81,823.6l-16.95-9.78c-0.25-0.15-0.46-0.47-0.46-0.72v-0.08c0-0.25,0.21-0.34,0.46-0.19
													l16.95,9.79c0.25,0.14,0.46,0.47,0.46,0.72v0.08C374.27,823.66,374.07,823.75,373.81,823.6z"
                      />
                      <path
                        className={styles.st121}
                        d="M354.94,816.08L354.94,816.08c-0.46-0.26-0.82-0.85-0.82-1.3v-0.29c0-0.46,0.37-0.61,0.82-0.35
													l0,0c0.46,0.26,0.83,0.85,0.83,1.3v0.29C355.77,816.18,355.4,816.34,354.94,816.08z"
                      />
                      <path
                        className={styles.st122}
                        d="M366.85,822.44l-9.99-5.77c-0.25-0.15-0.46-0.47-0.46-0.72v-0.08c0-0.25,0.21-0.34,0.46-0.19
													l9.99,5.77c0.25,0.15,0.46,0.47,0.46,0.72v0.08C367.31,822.5,367.11,822.58,366.85,822.44z"
                      />
                    </g>
                    <path
                      className={styles.st120}
                      d="M383.36,762.51L383.36,762.51c-0.47-0.27-0.85-0.87-0.85-1.34v-0.3c0-0.47,0.38-0.63,0.85-0.36
												l0,0c0.47,0.27,0.85,0.87,0.85,1.34v0.3C384.21,762.62,383.83,762.78,383.36,762.51z"
                    />
                    <path
                      className={styles.st123}
                      d="M396.08,769.85l-8.4-4.85c-0.51-0.3-0.92-0.95-0.92-1.46v-0.16c0-0.51,0.41-0.69,0.92-0.39
												l8.4,4.85c0.51,0.29,0.92,0.95,0.92,1.46v0.16C397,769.97,396.59,770.15,396.08,769.85z"
                    />
                    <path
                      className={styles.st3}
                      d="M417.29,782.1l-16.84-9.72c-0.51-0.3-0.92-0.95-0.92-1.46v-0.16c0-0.51,0.41-0.69,0.92-0.39
												l16.84,9.72c0.51,0.3,0.92,0.95,0.92,1.46v0.16C418.21,782.22,417.8,782.39,417.29,782.1z"
                    />
                    <path
                      className={styles.st120}
                      d="M383.36,768.41L383.36,768.41c-0.47-0.27-0.85-0.87-0.85-1.34v-0.3c0-0.47,0.38-0.63,0.85-0.36
												l0,0c0.47,0.27,0.85,0.87,0.85,1.34v0.3C384.21,768.52,383.83,768.68,383.36,768.41z"
                    />
                    <path
                      className={styles.st124}
                      d="M411.36,784.58l-23.68-13.67c-0.51-0.3-0.92-0.95-0.92-1.46v-0.16c0-0.51,0.41-0.69,0.92-0.39
												l23.68,13.67c0.51,0.29,0.92,0.95,0.92,1.46v0.16C412.29,784.7,411.87,784.87,411.36,784.58z"
                    />
                    <path
                      className={styles.st125}
                      d="M458.94,812.05l-43.2-24.94c-0.51-0.29-0.93-0.95-0.93-1.46v-0.16c0-0.51,0.41-0.68,0.93-0.39
												l43.2,24.94c0.51,0.3,0.93,0.95,0.93,1.46v0.16C459.86,812.17,459.45,812.34,458.94,812.05z"
                    />
                    <path
                      className={styles.st120}
                      d="M383.36,774.31L383.36,774.31c-0.47-0.27-0.85-0.87-0.85-1.34v-0.3c0-0.47,0.38-0.63,0.85-0.36
												l0,0c0.47,0.27,0.85,0.87,0.85,1.34v0.3C384.21,774.42,383.83,774.58,383.36,774.31z"
                    />
                    <path
                      className={styles.st124}
                      d="M396.08,781.65l-8.4-4.85c-0.51-0.3-0.92-0.95-0.92-1.46v-0.16c0-0.51,0.41-0.69,0.92-0.39
												l8.4,4.85c0.51,0.29,0.92,0.95,0.92,1.46v0.16C397,781.77,396.59,781.95,396.08,781.65z"
                    />
                    <path
                      className={styles.st120}
                      d="M383.36,780.21L383.36,780.21c-0.47-0.27-0.85-0.87-0.85-1.34v-0.3c0-0.47,0.38-0.63,0.85-0.36
												l0,0c0.47,0.27,0.85,0.87,0.85,1.34v0.3C384.21,780.32,383.83,780.48,383.36,780.21z"
                    />
                    <path
                      className={styles.st3}
                      d="M391.76,785.06l-4.08-2.36c-0.51-0.29-0.92-0.95-0.92-1.46v-0.16c0-0.51,0.41-0.69,0.92-0.39
												l4.08,2.36c0.51,0.3,0.92,0.95,0.92,1.46v0.16C392.68,785.18,392.27,785.35,391.76,785.06z"
                    />
                    <path
                      className={styles.st1}
                      d="M411.36,796.38l-15.22-8.79c-0.51-0.29-0.92-0.95-0.92-1.46v-0.16c0-0.51,0.41-0.69,0.92-0.39
												l15.22,8.79c0.51,0.29,0.92,0.95,0.92,1.46v0.16C412.29,796.5,411.87,796.67,411.36,796.38z"
                    />
                    <path
                      className={styles.st120}
                      d="M383.36,786.11L383.36,786.11c-0.47-0.27-0.85-0.87-0.85-1.34v-0.3c0-0.47,0.38-0.63,0.85-0.36
												l0,0c0.47,0.27,0.85,0.87,0.85,1.34v0.3C384.21,786.22,383.83,786.38,383.36,786.11z"
                    />
                    <path
                      className={styles.st1}
                      d="M401.2,796.41l-8.4-4.85c-0.51-0.3-0.92-0.95-0.92-1.46v-0.16c0-0.51,0.41-0.68,0.92-0.39l8.4,4.85
												c0.51,0.29,0.92,0.95,0.92,1.46v0.16C402.12,796.53,401.71,796.7,401.2,796.41z"
                    />
                    <path
                      className={styles.st126}
                      d="M426.27,810.89l-20.7-11.95c-0.51-0.29-0.92-0.95-0.92-1.46v-0.16c0-0.51,0.41-0.68,0.92-0.39
												l20.7,11.95c0.51,0.29,0.92,0.95,0.92,1.46v0.16C427.2,811.01,426.78,811.18,426.27,810.89z"
                    />
                    <path
                      className={styles.st120}
                      d="M383.36,792.01L383.36,792.01c-0.47-0.27-0.85-0.87-0.85-1.34v-0.3c0-0.47,0.38-0.63,0.85-0.36
												l0,0c0.47,0.27,0.85,0.87,0.85,1.34v0.3C384.21,792.12,383.83,792.28,383.36,792.01z"
                    />
                    <path
                      className={styles.st125}
                      d="M467.74,840.73l-74.94-43.27c-0.51-0.3-0.92-0.95-0.92-1.46v-0.16c0-0.51,0.41-0.68,0.92-0.39
												l74.94,43.27c0.51,0.29,0.92,0.95,0.92,1.46v0.16C468.67,840.85,468.25,841.02,467.74,840.73z"
                    />
                    <path
                      className={styles.st127}
                      d="M481.22,848.51l-8.52-4.92c-0.51-0.29-0.92-0.95-0.92-1.46v-0.16c0-0.51,0.41-0.68,0.92-0.39
												l8.52,4.92c0.51,0.29,0.92,0.95,0.92,1.46v0.16C482.14,848.63,481.73,848.8,481.22,848.51z"
                    />
                    <path
                      className={styles.st127}
                      d="M481.22,848.34l-8.52-4.92c-0.51-0.29-0.92-0.95-0.92-1.46v-0.16c0-0.51,0.41-0.69,0.92-0.39
												l8.52,4.92c0.51,0.29,0.92,0.95,0.92,1.46v0.16C482.14,848.46,481.73,848.63,481.22,848.34z"
                    />
                    <path
                      className={styles.st120}
                      d="M383.36,797.91L383.36,797.91c-0.47-0.27-0.85-0.87-0.85-1.34v-0.3c0-0.47,0.38-0.63,0.85-0.36
												l0,0c0.47,0.27,0.85,0.87,0.85,1.34v0.3C384.21,798.02,383.83,798.18,383.36,797.91z"
                    />
                    <path
                      className={styles.st126}
                      d="M502.66,866.79l-103.98-60.03c-0.51-0.29-0.92-0.95-0.92-1.46v-0.16c0-0.51,0.41-0.69,0.92-0.39
												l103.98,60.03c0.51,0.29,0.92,0.95,0.92,1.46v0.16C503.58,866.91,503.17,867.08,502.66,866.79z"
                    />
                    <path
                      className={styles.st120}
                      d="M383.36,803.81L383.36,803.81c-0.47-0.27-0.85-0.87-0.85-1.34v-0.3c0-0.47,0.38-0.63,0.85-0.36
												l0,0c0.47,0.27,0.85,0.87,0.85,1.34v0.3C384.21,803.92,383.83,804.08,383.36,803.81z"
                    />
                    <path
                      className={styles.st126}
                      d="M460.72,848.47l-62.04-35.82c-0.51-0.29-0.92-0.95-0.92-1.46v-0.16c0-0.51,0.41-0.69,0.92-0.39
												l62.04,35.82c0.51,0.29,0.92,0.95,0.92,1.46v0.16C461.64,848.59,461.23,848.77,460.72,848.47z"
                    />
                    <path
                      className={styles.st125}
                      d="M481.22,860.31l-15.92-9.19c-0.51-0.29-0.92-0.95-0.92-1.46v-0.16c0-0.51,0.41-0.69,0.92-0.39
												l15.92,9.19c0.51,0.3,0.92,0.95,0.92,1.46v0.16C482.14,860.43,481.73,860.6,481.22,860.31z"
                    />
                    <path
                      className={styles.st120}
                      d="M383.36,809.71L383.36,809.71c-0.47-0.27-0.85-0.87-0.85-1.34v-0.3c0-0.47,0.38-0.63,0.85-0.36
												l0,0c0.47,0.27,0.85,0.87,0.85,1.34v0.3C384.21,809.82,383.83,809.98,383.36,809.71z"
                    />
                    <path
                      className={styles.st3}
                      d="M396.84,817.49l-4.03-2.33c-0.51-0.3-0.92-0.95-0.92-1.46v-0.16c0-0.51,0.41-0.69,0.92-0.39
												l4.03,2.33c0.51,0.29,0.92,0.95,0.92,1.46v0.16C397.76,817.61,397.35,817.79,396.84,817.49z"
                    />
                    <path
                      className={styles.st120}
                      d="M383.36,815.53L383.36,815.53c-0.47-0.27-0.85-0.87-0.85-1.34v-0.3c0-0.47,0.38-0.63,0.85-0.36
												l0,0c0.47,0.27,0.85,0.87,0.85,1.34v0.3C384.21,815.64,383.83,815.81,383.36,815.53z"
                    />
                    <path
                      className={styles.st1}
                      d="M401.2,825.83l-8.4-4.85c-0.51-0.29-0.92-0.95-0.92-1.46v-0.16c0-0.51,0.41-0.69,0.92-0.39l8.4,4.85
												c0.51,0.3,0.92,0.95,0.92,1.46v0.16C402.12,825.95,401.71,826.13,401.2,825.83z"
                    />
                    <path
                      className={styles.st126}
                      d="M426.27,840.31l-20.7-11.95c-0.51-0.3-0.92-0.95-0.92-1.46v-0.16c0-0.51,0.41-0.69,0.92-0.39
												l20.7,11.95c0.51,0.29,0.92,0.95,0.92,1.46v0.16C427.2,840.43,426.78,840.6,426.27,840.31z"
                    />
                    <path
                      className={styles.st120}
                      d="M383.36,821.43L383.36,821.43c-0.47-0.27-0.85-0.87-0.85-1.34v-0.3c0-0.47,0.38-0.63,0.85-0.36
												l0,0c0.47,0.27,0.85,0.87,0.85,1.34v0.3C384.21,821.54,383.83,821.71,383.36,821.43z"
                    />
                    <path
                      className={styles.st125}
                      d="M467.74,870.15l-74.94-43.27c-0.51-0.29-0.92-0.95-0.92-1.46v-0.16c0-0.51,0.41-0.69,0.92-0.39
												l74.94,43.27c0.51,0.29,0.92,0.95,0.92,1.46v0.16C468.67,870.27,468.25,870.45,467.74,870.15z"
                    />
                    <path
                      className={styles.st127}
                      d="M481.22,877.93l-8.52-4.92c-0.51-0.3-0.92-0.95-0.92-1.46v-0.16c0-0.51,0.41-0.69,0.92-0.39
												l8.52,4.92c0.51,0.29,0.92,0.95,0.92,1.46v0.16C482.14,878.05,481.73,878.22,481.22,877.93z"
                    />
                    <path
                      className={styles.st127}
                      d="M481.22,877.76l-8.52-4.92c-0.51-0.29-0.92-0.95-0.92-1.46v-0.16c0-0.51,0.41-0.68,0.92-0.39
												l8.52,4.92c0.51,0.29,0.92,0.95,0.92,1.46v0.16C482.14,877.88,481.73,878.06,481.22,877.76z"
                    />
                    <path
                      className={styles.st120}
                      d="M383.36,827.33L383.36,827.33c-0.47-0.27-0.85-0.87-0.85-1.34v-0.3c0-0.47,0.38-0.63,0.85-0.36
												l0,0c0.47,0.27,0.85,0.87,0.85,1.34v0.3C384.21,827.44,383.83,827.61,383.36,827.33z"
                    />
                    <path
                      className={styles.st3}
                      d="M502.66,896.21l-103.98-60.03c-0.51-0.29-0.92-0.95-0.92-1.46v-0.16c0-0.51,0.41-0.68,0.92-0.39
												l103.98,60.03c0.51,0.29,0.92,0.95,0.92,1.46v0.16C503.58,896.33,503.17,896.51,502.66,896.21z"
                    />
                    <path
                      className={styles.st120}
                      d="M383.36,833.23L383.36,833.23c-0.47-0.27-0.85-0.87-0.85-1.34v-0.3c0-0.47,0.38-0.63,0.85-0.36
												l0,0c0.47,0.27,0.85,0.87,0.85,1.34v0.3C384.21,833.34,383.83,833.51,383.36,833.23z"
                    />
                    <path
                      className={styles.st126}
                      d="M415.9,852.02l-17.22-9.94c-0.51-0.29-0.92-0.95-0.92-1.46v-0.16c0-0.51,0.41-0.68,0.92-0.39
												l17.22,9.94c0.51,0.3,0.92,0.95,0.92,1.46v0.16C416.83,852.14,416.41,852.32,415.9,852.02z"
                    />
                    <path
                      className={styles.st1}
                      d="M460.72,877.9l-39.63-22.88c-0.51-0.29-0.92-0.95-0.92-1.46v-0.16c0-0.51,0.41-0.69,0.92-0.39
												l39.63,22.88c0.51,0.29,0.92,0.95,0.92,1.46v0.16C461.64,878.02,461.23,878.19,460.72,877.9z"
                    />
                    <path
                      className={styles.st125}
                      d="M481.22,889.73l-15.92-9.19c-0.51-0.29-0.92-0.95-0.92-1.46v-0.16c0-0.51,0.41-0.69,0.92-0.39
												l15.92,9.19c0.51,0.29,0.92,0.95,0.92,1.46v0.16C482.14,889.85,481.73,890.02,481.22,889.73z"
                    />
                    <path
                      className={styles.st120}
                      d="M383.36,839.13L383.36,839.13c-0.47-0.27-0.85-0.87-0.85-1.34v-0.3c0-0.47,0.38-0.63,0.85-0.36
												l0,0c0.47,0.27,0.85,0.87,0.85,1.34v0.3C384.21,839.24,383.83,839.41,383.36,839.13z"
                    />
                    <path
                      className={styles.st127}
                      d="M396.84,846.91l-4.03-2.33c-0.51-0.29-0.92-0.95-0.92-1.46v-0.16c0-0.51,0.41-0.69,0.92-0.39
												l4.03,2.33c0.51,0.3,0.92,0.95,0.92,1.46v0.16C397.76,847.03,397.35,847.21,396.84,846.91z"
                    />
                    <path
                      className={styles.st120}
                      d="M383.36,844.96L383.36,844.96c-0.47-0.27-0.85-0.87-0.85-1.34v-0.3c0-0.47,0.38-0.63,0.85-0.36
												l0,0c0.47,0.27,0.85,0.87,0.85,1.34v0.3C384.21,845.07,383.83,845.23,383.36,844.96z"
                    />
                    <path
                      className={styles.st1}
                      d="M401.2,855.25l-8.4-4.85c-0.51-0.29-0.92-0.95-0.92-1.46v-0.16c0-0.51,0.41-0.68,0.92-0.39l8.4,4.85
												c0.51,0.29,0.92,0.95,0.92,1.46v0.16C402.12,855.37,401.71,855.55,401.2,855.25z"
                    />
                    <path
                      className={styles.st126}
                      d="M426.27,869.73l-20.7-11.95c-0.51-0.29-0.92-0.95-0.92-1.46v-0.16c0-0.51,0.41-0.69,0.92-0.39
												l20.7,11.95c0.51,0.3,0.92,0.95,0.92,1.46v0.16C427.2,869.85,426.78,870.03,426.27,869.73z"
                    />
                    <path
                      className={styles.st120}
                      d="M383.36,850.86L383.36,850.86c-0.47-0.27-0.85-0.87-0.85-1.34v-0.3c0-0.47,0.38-0.63,0.85-0.36
												l0,0c0.47,0.27,0.85,0.87,0.85,1.34v0.3C384.21,850.97,383.83,851.13,383.36,850.86z"
                    />
                    <path
                      className={styles.st125}
                      d="M467.74,899.57L392.8,856.3c-0.51-0.29-0.92-0.95-0.92-1.46v-0.16c0-0.51,0.41-0.68,0.92-0.39
												l74.94,43.27c0.51,0.3,0.92,0.95,0.92,1.46v0.16C468.67,899.69,468.25,899.87,467.74,899.57z"
                    />
                    <path
                      className={styles.st127}
                      d="M481.22,907.35l-8.52-4.92c-0.51-0.29-0.92-0.95-0.92-1.46v-0.16c0-0.51,0.41-0.69,0.92-0.39
												l8.52,4.92c0.51,0.29,0.92,0.95,0.92,1.46v0.16C482.14,907.47,481.73,907.65,481.22,907.35z"
                    />
                    <path
                      className={styles.st125}
                      d="M481.22,907.19l-8.52-4.92c-0.51-0.3-0.92-0.95-0.92-1.46v-0.16c0-0.51,0.41-0.69,0.92-0.39
												l8.52,4.92c0.51,0.3,0.92,0.95,0.92,1.46v0.16C482.14,907.31,481.73,907.48,481.22,907.19z"
                    />
                    <path
                      className={styles.st120}
                      d="M383.36,856.76L383.36,856.76c-0.47-0.27-0.85-0.87-0.85-1.34v-0.3c0-0.47,0.38-0.63,0.85-0.36
												l0,0c0.47,0.27,0.85,0.87,0.85,1.34v0.3C384.21,856.87,383.83,857.03,383.36,856.76z"
                    />
                    <path
                      className={styles.st126}
                      d="M502.66,925.63L398.68,865.6c-0.51-0.3-0.92-0.95-0.92-1.46v-0.16c0-0.51,0.41-0.69,0.92-0.39
												l103.98,60.03c0.51,0.3,0.92,0.95,0.92,1.46v0.16C503.58,925.75,503.17,925.93,502.66,925.63z"
                    />
                    <path
                      className={styles.st120}
                      d="M383.36,862.66L383.36,862.66c-0.47-0.27-0.85-0.87-0.85-1.34v-0.3c0-0.47,0.38-0.63,0.85-0.36
												l0,0c0.47,0.27,0.85,0.87,0.85,1.34v0.3C384.21,862.77,383.83,862.93,383.36,862.66z"
                    />
                    <path
                      className={styles.st1}
                      d="M460.72,907.32l-62.04-35.82c-0.51-0.3-0.92-0.95-0.92-1.46v-0.16c0-0.51,0.41-0.69,0.92-0.39
												l62.04,35.82c0.51,0.3,0.92,0.95,0.92,1.46v0.16C461.64,907.44,461.23,907.61,460.72,907.32z"
                    />
                    <path
                      className={styles.st3}
                      d="M481.22,919.15l-15.92-9.19c-0.51-0.3-0.92-0.95-0.92-1.46v-0.16c0-0.51,0.41-0.68,0.92-0.39
												l15.92,9.19c0.51,0.29,0.92,0.95,0.92,1.46v0.16C482.14,919.27,481.73,919.45,481.22,919.15z"
                    />
                    <path
                      className={styles.st1}
                      d="M502.66,931.53l-15.92-9.19c-0.51-0.29-0.92-0.95-0.92-1.46v-0.16c0-0.51,0.41-0.69,0.92-0.39
												l15.92,9.19c0.51,0.3,0.92,0.95,0.92,1.46v0.16C503.58,931.65,503.17,931.83,502.66,931.53z"
                    />
                    <path
                      className={styles.st120}
                      d="M383.36,868.56L383.36,868.56c-0.47-0.27-0.85-0.87-0.85-1.34v-0.3c0-0.47,0.38-0.63,0.85-0.36
												l0,0c0.47,0.27,0.85,0.87,0.85,1.34v0.3C384.21,868.67,383.83,868.83,383.36,868.56z"
                    />
                    <path
                      className={styles.st127}
                      d="M396.84,876.34l-4.03-2.33c-0.51-0.29-0.92-0.95-0.92-1.46v-0.16c0-0.51,0.41-0.68,0.92-0.39
												l4.03,2.33c0.51,0.29,0.92,0.95,0.92,1.46v0.16C397.76,876.46,397.35,876.63,396.84,876.34z"
                    />
                  </g>
                </g>
              </g>
            </g>
          </g>
        </g>

        <linearGradient
          id={styles.ScreenGlowPath_1_}
          gradientUnits="userSpaceOnUse"
          x1="246.9597"
          y1="916.9044"
          x2="495.5225"
          y2="773.3966"
        >
          <stop offset="0.4358" style={{ stopColor: "#FFFFFF", stopOpacity: 0 }} />
          <stop offset="1" style={{ stopColor: "#406DEA", stopOpacity: 0.5 }} />
        </linearGradient>
        <polyline
          id={styles.screenGlowPath}
          className={styles.st130}
          fill={`url(#${styles.ScreenGlowPath_1_})`}
          points="530.61,834.17 208.13,647.4 232.54,891.92 485.05,1071.36 530.61,972.85 
									"
        />
      </svg>
    </div>
  );
}
