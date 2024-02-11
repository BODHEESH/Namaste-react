

const parent = React.createElement('div', { id: 'parent' },
    [React.createElement("div", { id: "child" },
        [React.createElement("h1", {}, "i am an h1 tag"), React.createElement("h2", {}, "i am an h2 tag")]),
        React.createElement("div", { id: "child" }, [React.createElement("h1", {}, "i am an h1 tag"), React.createElement("h2", {}, "i am an h2 tag")])])

console.log(parent, "parent logged in")

// const heading = React.createElement("h1", {id : "heading"}, "Hello world from react app js!");
// console.log(heading, "heading logged in")

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent); 