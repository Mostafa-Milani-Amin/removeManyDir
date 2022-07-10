const removeManyDir = dirArray => {
    for (let i = 0; i < dirArray.length; i++) {
        require("fs").rm(dirArray[i], { recursive: true }, (err) => err ? console.error(err) : console.log("Dir. removed:", dirArray[i]))

    }
};

module.exports = { removeManyDir };

