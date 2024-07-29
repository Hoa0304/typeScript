interface Student {
    id: number;
    names: string;
    age: number;
    score: number;
}

const hoa = {
    id: 1,
    names: "Hoa",
    age: 18,
    score: 90
}

// viet cu
const ids = hoa.id;
const namee = hoa.names;

//viet moi
// const { id, names } = hoa;

//---REST OPERATOR---

const rest = {
    name: hoa.names,
    age: hoa.age,
    score: hoa.score,
}
// const { id,...rest } = hoa;


// spread operator

const spread = { ...hoa, gender: "female" };