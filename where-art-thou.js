function whatIsInAName(characters, target) {
    return characters.filter(function(character) {
        for (var i in target) {
            if (character[i] != target[i]) {
                return false;
            }
        }
        return true;
    });
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });