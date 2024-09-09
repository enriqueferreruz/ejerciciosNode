const op = require("./main")

test("sumar dos números 2+2=4", 
    ()=>expect(op.suma(2,2)).toBe(4)
);

test("sumar dos números 22+22=44",
()=> {
    expect(op.suma(22,22)).toBe(44)
});

test("sumar dos números 171+229=400",
    ()=> {expect(op.suma(171,229)).toBe(400)
    });

