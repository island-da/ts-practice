"use strict";
const isSome = (obj) => {
    return obj.tag === "some";
};
const showNumberIfExists = (obj) => {
    if (isSome(obj)) {
        console.log(obj.value);
    }
};
const five = {
    tag: "some",
    value: 5,
};
const none = {
    tag: "none",
};
showNumberIfExists(five);
showNumberIfExists(none);
