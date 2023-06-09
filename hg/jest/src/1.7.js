const lookup = (login, property) => {
    const user = users.find(user => user.login === login);
    if (user && user.hasOwnProperty(property)) {
        return user[property];
    }
    return null;
};

const users = [
    {
        login: "knuth",
        firstName: "Donald",
        lastName: "Knuth",
        likes: ["C", "Unix"],
    },
    {
        login: "norvig",
        firstName: "Peter",
        lastName: "Norvig",
        likes: ["AI", "Search", "NASA", "Mars"],
    },
    {
        login: "mfowler",
        firstName: "Martin",
        lastName: "Fowler",
        likes: ["Design Patterns", "Refactoring"],
    },
    {
        login: "kent",
        firstName: "Kent",
        lastName: "Beck",
        likes: ["TDD", "wikis", "Design Patterns"],
    },
];

module.exports = { lookup };
