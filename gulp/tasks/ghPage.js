import ghPage from "gh-pages";

export const ghPagePush = () => {
    return ghPage.publish("dist", (err) => { console.log(`${err}`); })
}