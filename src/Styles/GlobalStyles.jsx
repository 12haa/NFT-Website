import { createGlobalStyle } from "styled-components";
// import { createGlobalState } from "react-use";
// import "@fontsource-variable/sora";
// import "@fontsource/akaya-telivigala";
const GlobalStlyles = createGlobalStyle`

*,*::after,*:bfore {
    margin:0;
    padding:0;
}
body {
    ${"" /* font-family:"sora" , sans-serif; */}
    overflow-x:hidden;

}
h1,h2,h3,h4,h5 , h6{
    
    margin:0;
    padding:0;


}

a {
    color :inherit;
    text-decoration:none;
}

    `;
export default GlobalStlyles;
