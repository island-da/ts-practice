type Some<T> = {
    tag: "some",
    value: T,
}

type None = {
    tag: "none",
}

type Option<T> = Some<T> | None

const isSome = <T>(obj: Option<T>): obj is Some<T> => {
    return obj.tag === "some";
}

const showNumberIfExists = (obj: Option<number>): void => {
    if (isSome(obj)) {
        console.log(obj.value);
    }
}

const five: Option<number> = {
    tag: "some",
    value: 5,
}
const none: Option<number> = {
    tag: "none",
}

showNumberIfExists(five);
showNumberIfExists(none);