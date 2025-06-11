import CSSmain from "./main.css?inline"
import CSSNonSide from "./notSide.css?inline"
import CSS3RightSidebar from "./rightSidebar.css?inline"
import CSS3Side from "./side.css?inline"

const CSSSeparate = `
      body[data-page="home"]:not(.is-pdf-active)>#root>div>main #journals {

      &:first-child {
        min-height: unset;
      }
      
      & div.journal-item {
        min-height: unset;

        &>div.journal>div.flex>div.initial {
          min-height: 90vh;
        }
      }
}
`

export { CSSmain, CSSNonSide, CSS3RightSidebar, CSS3Side, CSSSeparate }
