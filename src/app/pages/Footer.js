import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-gray-800  overflow-hidden select-none">
      <div className="flex flex-wrap py-10 lg:py-24 justify-center md:justify-between gap-5  px-5   sm:gap-5 md:gap-0 lg:px-20 ">
        {/* ================================Logo==================================== */}

        <div className="pt-24 w-72 lg:w-2/12 hidden lg:block   ">
          <svg
            height="26"
            viewBox="0 0 4421 724"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink">
            <rect width="4421" height="724" fill="url(#pattern1)" />
            <defs>
              <pattern
                id="pattern1"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1">
                <use
                  xlinkHref="#image1"
                  transform="scale(0.000693963 0.00423758)"
                />
              </pattern>
              <image
                id="image1"
                width="1441"
                height="236"
                xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABaEAAADsCAMAAABaHpp0AAAAM1BMVEVMaXH////////////////////////////////////////////////////////////////x7/yuAAAAEHRSTlMA4GAw8BCgwIBA0CCwcJBQ9bb1bwAAAAlwSFlzAAAWJQAAFiUBSVIk8AAAHGtJREFUeJztndmW46oSRD2W53L9/9fe1UX3ud0VITtBIDJR7GclAhltI8aNEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEP25PM/n0+l0un65x/aszsZiXCCyFxfIG+eclT+aBHKCwHrcLufz/XQ6beGufch7gITLr+L4f1F+0vI3bsHtcjmnmtO27hxOp8/dbUYBIEVO8fO/nO9e3h0TUACKDJ2AcE6jt3f/+PCnsnmG3n8cIMUYhDH0/nn+OC39lK+7I2TECKTFKXr+t8edJuYZKARFhk5AOKfB27t/3H26bI6h9wHbzn+IYOj97rPbEz48IDs2ICVO/vM/7kJWNygHRYZOQDin9tv7/PT7XTbD0J+QWCC8G/pyXrzh/IPrHjJlAdLh5D7/sF9rUBKKDJ2AcE7Vt9d51So29DHAKM0LPBv65uSDawc5MwCpcPKe/yXu1xqUhSJDJyCcU+/tPe68j2qUGnofargGcWvo/dnPX98H5O49kAgn5/kH9rMM7drQx7P/L7NCQx+DC9qpoW8PX8/1E3L4FkiDY3/+t3ijg38D5aHI0AkI59R5eyP4udjQsbs4fBra41BYfkcHJMExP/9H1NlCv4ECUWToBIRzqry9IfxcaujQg4TfuDP0zeV4xSF7uBCS4Bif/y1yB8c3UCSKDJ2AcE6Ft/cSpRegyNB7SCYczgzttqs1+zlBChxburvgDWgZ2qmhj3G6zooMHb5h48zQnseTc/s5IAGO6fnH/1SToV0a+hnon7/E0NYfxzOODO17vs8W8vsaSIBjeP7HARoCMrRDQx8/IEHHlBg69uB6wo2h3c/HfEKWXwLxnPfPP/iE+z9AuSgydALCObPe3n2silVg6CMkEhAnhn76H6/InBQN8Zy3z38fvwv6GygYRYZOQDhnztsbbWyjwNA7SCQgLgwdYinGAbL9EojnvHv+owhahobIV0A4Z8bba33SbigwdKhenCkcGDpKd1ieFSCc8+b530YRtAwNka+AcM6b2vOCePIqMPQQ/YP9DR1mKUbeLncQznn9/Afpg/6SoZ0ZOmDrssDQkEZEehs60M6tHd6xcQQtQ0PkKyCc87r2TBLyj1+G7kKk3rC8RwXhnJeJjjAP+g9QOIoMnYBwzsvaM03I/lkZugO3UP/lixt6iKHoP0DpKDJ0AsI5r2rPNDEH0GTo5Qk232dpQ48zSvglQzsydNAvMxl6aWKtaOpg6IE6oWVoP4aO+mUmQy9MsBVNyxs63ITV10D5KDJ0AsI507VnkrC7vcnQyxJwt7ZlDX2DS2MDBaTI0AkI50zWnkmOYbvOZOhFidgXtqyhh9gu6S+ggBQZOgHhnMnaM0ncaiVDL0i4LuhvFjX0E64MDpSQIkMnIJwzVXsmedBkQiBDL0fQlXKLGjr6+ZcAlJAiQycgnDNVe6aIPD1Ihl6MeGOEiSUNPdRU6G+giBQZOgHhnInaM0nkrjMZeinC7ta2pKGHa0LL0BD5CgjnTNSeKQL3ccjQixF3O80FDT1eE1qGhshXQDiH154p4s7j+JKhFyPwfscLGnq8JrQMDZGvgHAOrz1TxN4uWYZehMgb0i9n6BEOwPwJFJIiQycgnENrzxTBZ9jL0EsQ+sSQ5Qw9wgGYP4FCUmToBIRzaO2ZIvgMexl6AWIf6bSYoUdbTvgNlJIiQycgnMNqzxTRP8xk6PYE36xtMUOHHnKfAkpJkaETEM5htWeK6ItUZejmRD/SaTFDj7Wp3W+glBQZOgHhHFZ7Jgg/tiFDNye6eJYy9JCdHDI0RL4Cwjmk9kwR/txrGbo14avIUoYespNDhobIV0A4h9SeCY40PhIydGPie2cpQ5d0GF5P3oFiUmToBIRz7FWy/PXbOqlYOyhTrafopYScTyhWG5p0gx1okbKBdDlLGRquecnhY7eHJMIiQycgnENqzwQla6BO52fsqgUl4hS0zsej5jSO6+l8fl4qvqNwB85Chs76L9sWtCw8I0MnIJyDtWeC/JNVTrsjTyoQUCiODF1vlPD62aLBCLfhLGTonNOvhqtbMnQCwjlYeybIPVLt5OcBzwCKxZGh6xypcv18NvpXh1txFjK0vRv6MMRr9A8ydALCOVh7JshrIR2ePJVoQME4MvT8TujDveU3F9yOs5Ch7f1B4wlahv4NhHOw9nDyJnBe4/dvJKBkHBn6OHOrtnvjv3S4IWcZQ9tfpgfcMz4ydALCOVB7JsjazfaDpxEQKBpHhp61EdD20fwfHe7JWcbQ5u+NK9xyAGToBIRzoPZMkLMWYRxBy9BG5hyKel/iVYS7cpYxtHlMZ5C+wn+RoRMQzoHaM0FGN/RIf/xQOM7aDT3jZIePG6TWArgvZxlDWwdVt3DHEZChExDOgdozAQ2mHEbpg97I0FZK53EczktVFrg1ZxlDW6dyLLXUaFlk6ASEc6D2cDJG6ocafYbScVZu6NJ5HIv5OaihB5zIIUP/B4RzoPZw7Eu+7zQ+KlA8zsoNXbZWZaH+jQTcnbOMoeGKCeCGQyBDJyCcA7WHY/+MXfK1aw8Uj7NuQxft2HJd9gWE+3NcGXrMbmgZ+jcQzoHawzEvghpoHsdGhjZRNEy49BODDHBcGRrixkCGTkA4x1gLzOsRBtqDayNDm8jdD+BX63DxagJZ4MjQ7ZGhExDOMdYCGksYbYo9lpCyZkMXHBfysfx0H8gDR4ZujwydgHCOrRaYd+8fbZUqFJCzZkPnn6vSo5JAJjgydHtk6ASEc2y1wDydarBODhn6LdlN6D6bakE2ODJ0e2ToBIRz6hr6AJHBgRJyVmzo3Cb0oc+fOOSDI0O3R4ZOQDjHVgus2y4MV6eghJz1Gjq3CX3t9JUFGeHI0O2RoRMQzrHVAutDHW6ZKpSQs15DZzahu21LCznhyNDtkaETEM6pa+jhTAUl5KzW0JlN6H77hkNWODJ0e2ToBIRz6hp6uI0EoISc1Ro6b8ukTn3QGxnaEzJ0AsI5MvRLoISctRo6bzlhR0HL0H6QoRMQzpGhXwIl5KzV0Fkn73StHZAZjgzdHhk6AeEcGfolUELOWg2ddThh19VMkBuODN0eGToB4RwZ+iVQQs5KDZ21L3TfbWkhOxwZuj0ydALCOTL0S6CEnJUaOmeq3bbv0TuQH44M3R4ZOgHhHBn6JVBCzjoNbd6txUHVgPxwZOj2yNAJCOfUNfRoGyfJ0K/IGSfsvZYJMsSRodsjQycgnKMVKy+BEnLWaeiMw68693HI0I6QoRMQzrHVAmtraaxDCmXol+SsJ+z+tkGOODJ0e2ToBIRz6u5tN9zJalBCzioNnXE8Yf9/bsgSR4ZujwydgHBO5f2hxzpHVoZ+RUYnR/9qAVniyNDtkaETEM6x1QLzB+0OQmMDBeSs0dAZnRwOtjyEPHFk6PbI0AkI51Q+p3C0jmgoIGeNhrZ3chz6ToX+BjLFkaHbI0MnIJxjrAXmHXIcvIw1gfJx1mjoO30SDA9Ph2SLIUO3R4ZOQDjHWAtONJgwmKuwgJQ1Gpo9B46Hf22aMUSGbo8MnYBwjrEWmNf3eviirQiUj7NCQ1sPRvv6+oDYDkCuODJ0e2ToBIRzjLXA+lRHkxUUj7NCQ9v37ncxvwdyxZGh2yNDJyCcY6wFGbuYDTXhDkrHWaGhzXPtfAweQ7Y4MnR7ZOgEhHOMtSBjatUVggMDpeOsz9D2XZOeENsDyBZHhm6PDJ2AcI61FmTs1e6i37ESUDjO+gxt/qhysswU8sWRodsjQycgnGOtBfa5VUP5CsrGWZ+hzQMTDlarbGRoT8jQCQjnWGtBxiYMbt7KCkDROOsztHn6ZcfTY/8G8sWRodsjQycgnGOtBXsaPcV9lDl3E+Wb99OMgHUJk5e9tCBjHBm6PTJ0AsI55lqQdWjo13aQ01agYJzVGdo8cuzlcwoyxpGh2yNDJyCcY64FOWfS/eI0hKOhWJzVGdq8XsVLLYCMcWTo9sjQCQjnmGuBfQ3ZH067+H0dUCjO6gxtfcsOENkJyBlHhm6PDJ2AcI69Fpg3T/qL6+cudlMaSsRZnaGtU3vc7HUIOeMEMzSELMr19PEoGAiWoRMQzrFXydxujqU4nU738+PSZilj4U9jnunQAihEA6wrCt38dUHOODJ0Lttz7peyDJ2AcI69SubN5uhA2T/6awp/muENDTedwM1bxrMHyND5HDIdLUMnIJyTUSUzTj3qxuFe19KFP83ohjZP5YDIXkDOODJ0CYeslf0ydALCORlV0nrgd2+2n/UkXfjTjG5oa5X1s0cLZI0jQ5eRM6lShk5AOCenSuZNie7J9lypW7rwpxnd0NY/az+HokHWODJ0IRmb8cjQCQjn5FTJKI3ob+5VfmBIlrM2Q1tfMj9zXCBrHBm6FLuiZegEhHOyqmScRvQvthUOHodEOWsztHX7fh87j25k6AUwd3TI0AkI52RVyVCN6CqOhiQ5azO0tXx+XjLIGkeGLsf6dyxDJyCck1clu5qnhLmONt5Shub4WVRKs4fI0OVsjb+2DJ2AcE5elcw4DMsL8/YHKfxpRje0tbsLArsBWePI0DMwCkqGTkA4J3Ptv9eFha/4nNGSe5Hs36zN0HBPjpetR2XoRTCe8y9DJyCck2noY8nuHL3Jm1Bf8hRlaIqjrX9Y9ggy9BxshpKhExDOyX2J8re488BHaTO68KeRob+RoXmicAUH4gAa1g/bN5MMnYBwTvZLlHNgoR+2hcsMC3+awQ1t3aLFz4IVGXoRTG+ZDJ2AcE62oUP2c3x9fZVN6oBkOCszdJsa2xTIG0eGnsUDckiQoRMQzsn/EA04n+ObjHWp2U9RhqbI0DxRuIIDcQAN64jpHZOhExDOKegqNB/E74xrQWd04U8jQ38jQ/NE4QoOxAE0rCOmxydDJyCcUzKYE7Mr+uvrmr+dEqTBkaEpMjRPFK7gQBxAwzpiOvRMhk5AOKfE0McIO0UzDtnjhSQRhgxNkaF5onAFB+IAGtYTyCFBhk5AOKdoQlTU0cJ8RUMKHBmaIkPzROEKDsQBNKwnkEOCDJ2AcE7ZlNV9WEVndnRAAhwZmiJD80ThCg7EATSsJ5BDggydgHBO4aKCsIrOHC6EeI4MTZGheaJwBQfiABrWE8ghQYZOQDindNnXShQN4RwZmiJD80ThCg7EATSsJ5BDggydgHBO8cLcfazt/P9P1rxoiObI0BQZmicKV3AgDqBhPYEcEmToBIRzyrdOCDujw7TwKe8pytAUGZonCldwIA6gYT2BHBJk6ASEc2ZsbnOMuBXpl3X3gKynKENTZGieKFzBgTiAhvUEckiQoRMQzpm1/diDJuke62EQMvQEMvS8ROEKDsQBNKwnkEOC1dA537ptiWvoqJ3R9j3XIJQjQ1NkaJ4oXMGBOICG9QRySLCeduqn9gQ29OYYcwW4eUt/iOTI0BQZmicKV3AgDqBhPYEcEuLVnsiG3myeIU9dsfZzQCRHhqbI0DxRuIIDcQAN6wnkkGCtPX52F49t6M3xExL1zycUg1P408jQ38jQPFG4ggNxAA3rCeSQYK09fk7oCW7ozWbfVUhlGFd/G9OWoSkyNE8UruBAHEDDegI5JByN+fNzDnF4Q282l3CONpYb4jgyNEWG5onCFRyIA2hYTyCHDGv+SGgfBjB0QEfbZltCGEeGpsjQPFG4ggNxAA3rCeSQYc1f4dmi9RnC0JvNJdYCFlvBIYwjQ1NkaJ4oXMGBOICG9QRyyLC+HW6WrAxi6M3m9og0Pdr0+0MUR4amyNA8UbiCA3EADesJ5JBhfTvcVJ9hDP1r0PAzzG4dph2UIIojQw+CDD0PyCHDOvnLzXS7kQz93ZK+x5gibZnOAUEcGXoQZOh5QA4Z1mXfbiZzDGboX+wfd/8dHpbnCUEcGXoQZOh5QA4Z5upTcDh/EwY09DeX3fl0ctyctvxFQxBHhh6EYIa+LIW17xJyyNhD2ATmzRkaM6qh/+PWuBrtzmV/BIYKADGcnz/NHvK4IFCI6sjQWbUDEoUrOBDXD2uTo+pzM6/8bc3whl6Cy2e+pA1jhRDDcTRpYQlk6ASEcyBRehUCcf2oa2hrD+gVIvsgQ9dhl9v1fXh/W4jhyNCDIENz6hravCFm5sn8rZCha/HIbEe/7+aAEI4MPQgyNKeuoa2TObxs4i9DV+OWN0T3vpsDQjgy9CDI0Jy6hn5C3AROujlk6IpkLT1/380BIRwZehBkaE5dQ98gbgof3RwydE2sZ+x883ZvFojgyNCDIENz6hp6Y+6N9NHNIUNXJacV/bYCQARHhh4EGZpT2dDmoUIfywpl6LpkHJ34duU/RHBk6EGQoTmVDW0eKvSxv50MXZejfdbd279oiODI0IMgQ3MqG9pegVzsniRDVyZDIO9W/kMAR4YeBBmaU9nQGRuKeBgrlKFrY59z9+4jCgI4MvQgyNCc2oa290SaNglujAxdG/tsnndDhRDAkaEHQYbm1Db0AyIncdCIlqGrY25Ev3umEMCRoQdBhubUNrR5ezsXjWgZujrmRUvvig8BHBl6EGRoTm1DmzdPctGIlqHrY50SL0OXIEMnIJwDidKrEIjrR3VDW0/CctGIlqHrY1628ubOcD1Hhh4EGZpT3dDmr1wPc6Jl6PqYK8CbO8P1HBl6EGRoTnVD2xd+O9g/SYauzxEKOsGbO/MgQIYeBBmaU9/QVTdnaIwM3QDrSMSbLyi4niNDD4IMzalv6JxujkPnwUIZugHWKiVDFyBDJyCcA4nSqxCI60d9Q+fM5uj9JGToBljHimXoAmToBIRzIFF6FQJx/Whg6IzZHL37OWToBlh3z5KhC5ChExDOgUTpVQjE9aOBoTMWrVh2cm+JDN0AGbohMnQCwjmQKL0Kgbh+NDD05grRL9i+2+OsJTJ0A2TohsjQCQjnQKL0KgTi+tHC0FmnIXV9GDJ0A2TohsjQCQjnQKL0KgTi+tHC0Me8k/k7Li2UoRsgQzdEhk5AOAcSpVchENePFobOO/X56+sTElgKGboBMnRDZOgEhHMgUXoVAnH9aGJo+ybBiR2ksBAydAM0264hMnQCwjmQKL0Kgbh+NDF0zomi3/RStAzdAK1YaYgMnYBwDiRKr0Igrh9tDJ1djzopWoZugHXF0pt5lnA9R4YeBBma08bQGcfV/aZPX7QMXR/tnNQSGToB4RxIlF6FQFw/Ghk6vyJ1mdEhQ9dHu4+2RIZOQDgHEqVXIRDXj0aGzm9Ef107LF2RoetjHSg8vLkzBHA8HEi8IDJ0AsI5kCi9CoG4frQydEFN2r7pmGyADF0fazd0pVOwRu3Nn0CGTkA4BxKlVyEQ149Whi5oRHfYRkmGro55V5b7mztDAEeGpmxPbmDZI7gydPezRf5PM0MX/dmfFt4vWoaujnm10rtnCgEcGZriqHueZY/gytD5vmtGM0PnLixMHJZtRsvQtbEvVno3wRICJoDAoZGh5yUKV0zQdcvNf2hn6Fve7hx/uL5ZyFAVGbo29v/ld78zBEzQ+ZiehZGh5yVq3Xez9/l8/6edoc37M/zkvtw7J0NXJqNv692NrX/w3bYM6IIMPS9Rq+/8dEQ3NHTePtF/87GUo2XouhztJ6C9fQWsNfPdiONYyNDzEjXvR7Hkp/xLWhp6xsygj2UekAxdl4yxh7eLSM2TgVbVzSFDz0vU/GEPkb1oaei8Ewt/PqEnJFcfGboqOYPDbzsnzJVnVWtWZOh5iT7gkim89EQ3NXTGRy9he27eOpKha5I1e+ftb2sfxnDzQboAMvS8RO3f9Qcn0zmaGnr2Cqh742EgGboexyxBvx+JMe/v8XXoedTlwsjQ8xI17+vlRtFtDV08n+P/j+lj1/D9k6Grsc8bF36/l2HGkfE9tnTphAw9M9GMOcAHF9OEGhu6fD7HX5zOrb5jZehKHHOHHAztE4iZ5rCajg4ZemaiWYeLnBzUq9aGLly3ApzOlwYNJRm6Cvvs9aNbw22zdnZZbIJmZ2TomYlmftVfH737OlobOqM78S3b0/lxqfqvJkPP5vb8LBgPthzYkNksv+/WIGkZemaiGZ1n/yVyup/7YX27oKRmZndFI6daz8za9utq6B1k2wmf9o3LfmJpmBT8t/d9lwjVezJl6LmJVvqodwcU1E7usbIO6WroUgs6xrSmNmPY3S3Vv5Nk6LmJFu3oFgAoqJ1jjdHCvsjQdbE1LePXGxnan6F3cNEYQEEzqDVa2A8ZuirGCcwN+seWRoZ2Z+jjoN0cUNAc9tEfigxdFePjLBjU8YYM7c7Qo3ZzQDmziP5lIUNXxTrpIn43hwztz9AVZ5d5AsqZR3BFy9A1MW91ZN/mxisytD9Dm886jgUUM5PYipaha2Ketxy/y1CGdmjo+H/8DChmLqEVLUNXJGO30PBdhjK0Q0OPOVYIxcwmsqJl6Hrk7ERnP5fWKTK0Q0OPMEkIgVLmE1jRMnQ9sp5l9Ea0DO3R0EM2oqGUBcRVtAxdjbwjOqNPpZehPRp6yEY0FLKES9T3TYauRubOV8HfJRnapaFHbERDIYvYB53oIkPXwrKp3d/MO0itOzK0S0OPuPQbylhG0D06ZOhK5J+GEnt9gQzt09ADLgODIpYScuxHhq5DydFvobdGlKGdGjr8RhQAFLGYiB8YMnQdSrZLDt1nKEM7NfR4y1aghOUE7IyWoauQsVblLyL3c8jQXg09wrb1/wAFnMEx3MORoWtQqqvAk6JlaLeGDj4GDUABZ/EI9uUqQ1cgf5TwN4GPgJCh3Rp6tK5oKN88brFeOhl6PsWCjrxuRYb2a+jBtiGF4s3lHOmtyxvhgnDOy9rzF2MYeoagA+/lL0M7NvRQs6Jfl7SIWyDz5C2Eg3DOqgw9S9Bx3yUZ2rOhR1L0m5KWsQvTjM6bxgvhnDUZeqagw75LMrRrQw+k6DY/+PETbuQTyPlLjEVYkaHLptn9Q8x3SYb2behxFP2EotVhH0I/me8ZxHPWY+iShSpAyHdJhnZu6Li7uf0AClaNS4BZHY+8wkI8Zy2G3hYs9WY8A75LMrR3Q2/28c8rrvOVOs3O/dRx88F6CYjnrMTQH3O7oP8j4GJUGdq9oTfH8Get5W/qm4tzR+e+ZpAAZxWGPtTsH4u3GFWG9m/omF9n/9JkJsc/XDxrKPf/CRLgrMHQ9RrQiWj73cjQEQwd8K//B42b0N/s3X5rZL9lkAJnfENv61ecYL2GMnQIQ282z9C7dOSei1HI8eHyKR0ye6Fl6N8cMgdYjYRajCpDBzH05hiqXv3L7NUGdi4OG9L5U8UgCc7Yhj6cW1WbW6BPUhk6iqEDrc74Scm5GOUcd87ev4IPCEiDM7Kh2/l5433U4h9k6DiGjtqOXlbQG2+SLplnCIlwxjX0tsoSlVdEcbQMHcnQv9wTbnZ0reUGmQ/q+eGjT7qoKxVS4Qxq6MPHEgPLm9tHhPaODB3L0L/Goj9DDRrel+uD/slt193ShXMRIB3OkIa+75arMd46xAgydDhD/3rIYSS9bbUdh5Xb83zq1lQq7kuFlDjDGXr78Vz4D93Nt9YUMnREQ6f2of/+jmvz3kQbt8v5Y3lLbcvHuiAtzlCGPn3usmcl1sH1uyRDBzX0N5fd+d6vhfia7f3R6YWb5HI5nz9OpyXexsPpPKcvFdLjjGHo6+nj/OwyWPE3l9355PFdkqEjG1oIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIzmaz+R8jrKaQtlGv8gAAAABJRU5ErkJggg=="
              />
            </defs>
          </svg>

          <p className="mt-2 tracking-wider text-lg lg:text-xl uppercase font-medium text-gray-400">
            AI at the edge
          </p>
        </div>

        {/* ================================HOME==================================== */}
        <div className="pt-5 w-40  lg:w-2/12   ">
          <div className="text-lg md:text-xl uppercase   text-gray-50   mb-5 font-semibold">
            Home
          </div>
          <Link
            className="my-3 block text-gray-400 hover:text-gray-100 font-medium duration-500 text-base md:text-lg"
            to="/products">
            Products
          </Link>

          <Link
            className="my-3 block text-gray-400 hover:text-gray-100 font-medium duration-500 text-base md:text-lg"
            to="/company/about">
            About Us
          </Link>

          <Link
            className="my-3 block text-gray-400 hover:text-gray-100 font-medium duration-500 text-base md:text-lg"
            to="/company/careers">
            Careers
            {/* <span className="text-social-facebook text-xs p-1">
              We're hiring
            </span> */}
          </Link>

          {/* <Link
            className="my-3 block text-gray-400 hover:text-gray-100 font-medium duration-500 text-base md:text-lg"
            to="/technology">
            Technology
          </Link> */}
        </div>

        {/* ================================PRODUCTS==================================== */}
        <div className="pt-5 w-40  lg:w-2/12   ">
          <div className="text-lg md:text-xl uppercase mb-5  text-gray-50  font-semibold">
            Products
          </div>
          <Link
            className="my-3 block text-gray-400 hover:text-gray-100 font-medium duration-500 text-base md:text-lg"
            to="/products/airport-operations-overview">
            Airport Ground Operations
            {/* <span className="text-social-facebook text-xs p-1">New</span> */}
          </Link>
          <Link
            className="my-3 block text-gray-400 hover:text-gray-100 font-medium duration-500 text-base md:text-lg"
            to="/products/digital-signage-overview">
            Digital Signage
          </Link>
          <Link
            className="my-3 block text-gray-400 hover:text-gray-100 font-medium duration-500 text-base md:text-lg"
            to="/products/traffic-management-overview">
            Traffic Management
          </Link>
          <Link
            className="my-3 block text-gray-400 hover:text-gray-100 font-medium duration-500 text-base md:text-lg"
            to="/products/intelligent-audio-overview">
            Intelligent Audio
          </Link>
          {/* <Link
            className="my-3 block text-gray-400 hover:text-gray-100 font-medium duration-500 text-base md:text-lg"
            to="/products/energy-management-overview">
            Energy Management
          </Link> */}
        </div>

        {/* ================================RESOURCES==================================== */}
        <div className="pt-5 w-40  lg:w-2/12  ">
          <div className="text-lg md:text-xl uppercase   text-gray-50   mb-5 font-semibold">
            Resources
          </div>
          <Link
            className="my-3 block text-gray-400 hover:text-gray-100 font-medium duration-500 text-base md:text-lg"
            to="/resources/blogs">
            Blogs
          </Link>
          {/* <Link
            className="my-3 block text-gray-400 hover:text-gray-100 font-medium duration-500 text-base md:text-lg"
            to="/resources/videos">
            Videos
          </Link> */}
          <Link
            className="my-3 block text-gray-400 hover:text-gray-100 font-medium duration-500 text-base md:text-lg"
            to="/resources/research">
            Research
          </Link>
          <Link
            className="my-3 block text-gray-400 hover:text-gray-100 font-medium duration-500 text-base md:text-lg"
            to="/resources/press">
            Press
          </Link>
        </div>

        {/* ================================Support==================================== */}
        <div className="pt-5 w-40  lg:w-2/12   ">
          <div className="text-lg md:text-xl uppercase   text-gray-50   mb-5 font-semibold">
            Support
          </div>
          <Link
            className="my-3 block text-gray-400 hover:text-gray-100 font-medium duration-500 text-base md:text-lg"
            to="/faq">
            FAQ
            <span className="text-social-facebook text-xs p-1"></span>
          </Link>
          {/* <Link
            className="my-3 block text-gray-400 hover:text-gray-100 font-medium duration-500 text-base md:text-lg"
            to="/help-and-support">
            Help Center
            <span className="text-social-facebook text-xs p-1"></span>
          </Link> */}
          <Link
            className="my-3 block text-gray-400 hover:text-gray-100 font-medium duration-500 text-base md:text-lg"
            to="/policy">
            Privacy Policy{" "}
            <span className="text-social-facebook text-xs p-1"></span>
          </Link>
          <Link
            className="my-3 block text-gray-400 hover:text-gray-100 font-medium duration-500 text-base md:text-lg"
            to="/company/contact">
            Contact Us
            <span className="text-social-facebook text-xs p-1"></span>
          </Link>
        </div>
      </div>

      <div className="bg-bookmark-blue">
        <div className="flex mx-auto md:px-12 lg:px-20  justify-between py-5  text-gray-400 text-lg flex-col items-center  md:flex-row ">
          <div className="pb-4 md:pb-0 font-medium">
            <p className="text-center text-sm xl:text-base">
              &copy; {new Date().getFullYear()} Guise AI. All Rights Reserved.
            </p>
          </div>
          <div className="  space-x-5 flex  items-center flex-row">
            {/* <a
              to="https://www.facebook.com/GuiseAI-105851470855726/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GuiseAi on Facebook "
              className="inline-flex items-center shadow-md hover:shadow-inner justify-center w-8 h-8  rounded-md  bg-color-50 text-color-500 hover:bg-social-facebook   hover:text-gray-50   transform hover:scale-110 transition-all ease-in-out duration-300 ">
              <svg
                className="w-5 cursor-pointer fill-current"
                role="img"
                fill="#fff"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <title>Facebook</title>
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>

            <a
              href="https://instagram.com/guiseai"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GuiseAi on Instagram"
              className="inline-flex items-center shadow-md hover:shadow-inner justify-center w-8 h-8  rounded-md  bg-color-50 text-color-500 hover:bg-social-instagram   hover:text-gray-50   transform hover:scale-110 transition-all ease-in-out duration-300 ">
              <svg
                className="w-5 cursor-pointer fill-current"
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                fill="#fff">
                <title>Instagram</title>
                <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
              </svg>
            </a> */}
            <a
              href="https://twitter.com/guiseai"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GuiseAi on Twitter "
              className="inline-flex items-center shadow-md hover:shadow-inner justify-center w-8 h-8  rounded-md  bg-color-50 text-color-500 hover:bg-social-twitter   hover:text-gray-50   transform hover:scale-110 transition-all ease-in-out duration-300 ">
              <svg
                className="w-5 cursor-pointer fill-current"
                fill="#fff"
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <title>Twitter</title>
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
            </a>
            <a
              href="https://youtube.com/guiseai"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GuiseAi on YouTube "
              className="inline-flex items-center shadow-md hover:shadow-inner justify-center w-8 h-8  rounded-md  bg-color-50 text-color-500 hover:bg-social-youtube   hover:text-gray-50   transform hover:scale-110 transition-all ease-in-out duration-300 ">
              <svg
                className="w-5 cursor-pointer fill-current"
                role="img"
                fill="#fff"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <title>YouTube</title>
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/company/guise-ai"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GuiseAi on LinkedIn "
              className="inline-flex items-center shadow-md hover:shadow-inner justify-center w-8 h-8  rounded-md  bg-color-50 text-color-500 hover:bg-social-linkedin   hover:text-gray-50   transform hover:scale-110 transition-all ease-in-out duration-300 ">
              <svg
                className="w-5 cursor-pointer fill-current"
                role="img"
                fill="#fff"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <title>LinkedIn</title>
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
